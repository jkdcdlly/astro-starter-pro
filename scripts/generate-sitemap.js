#!/usr/bin/env node

/**
 * 构建时生成 sitemap 脚本
 * 
 * 使用方法：
 * 1. 本地构建：node scripts/generate-sitemap.js
 * 2. Cloudflare Pages 构建：自动执行
 * 
 * 环境变量：
 * - CLOUDFLARE_ACCOUNT_ID: Cloudflare 账户 ID
 * - CLOUDFLARE_API_TOKEN: Cloudflare API Token
 * - SITE_URL: 网站 URL（可选，默认 https://war3maps.net/）
 */

// 加载 .env 文件（本地开发时使用）
import 'dotenv/config';

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
// 生成到 public 目录，构建时会自动复制到 dist
const distDir = path.resolve(rootDir, 'public');

const SITE_URL = process.env.SITE_URL || 'https://war3maps.net/';

/**
 * 从 wrangler.toml 读取数据库配置
 */
function getDatabaseConfig() {
  try {
    const wranglerToml = readFileSync(path.join(rootDir, 'wrangler.toml'), 'utf8');
    const dbMatch = wranglerToml.match(/database_id\s*=\s*"([^"]+)"/);
    
    if (!dbMatch) {
      console.error('❌ Database ID not found in wrangler.toml');
      return null;
    }

    return {
      databaseId: dbMatch[1],
      accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
      apiToken: process.env.CLOUDFLARE_API_TOKEN
    };
  } catch (error) {
    console.error('❌ Error reading wrangler.toml:', error.message);
    return null;
  }
}

/**
 * 从 Cloudflare D1 数据库获取地图数据
 */
async function getMapsFromDB(config) {
  const { databaseId, accountId, apiToken } = config;

  try {
    console.log('📊 正在从 D1 数据库查询地图数据...');
    
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database/${databaseId}/query`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sql: 'SELECT id, name, author FROM wc3_maps_complete WHERE id > 0 ORDER BY id DESC LIMIT 10000'
        })
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('❌ API 请求失败:', response.status, error);
      return [];
    }

    const result = await response.json();
    
    if (!result.success) {
      console.error('❌ 查询失败:', result);
      return [];
    }

    // API 返回的数据结构是 { result: [{ results: [...] }], success: true, meta: {...} }
    const maps = result.result?.[0]?.results || [];
    console.log(`✅ 成功获取 ${maps.length} 个地图`);
    
    // 调试：打印第一个地图的数据
    if (maps.length > 0) {
      console.log('🔍 地图数据示例:', JSON.stringify(maps[0], null, 2));
    }
    
    return maps;
  } catch (error) {
    console.error('❌ 查询数据库失败:', error.message);
    return [];
  }
}

/**
 * 生成 sitemap XML
 */
function generateSitemapXML(maps) {
  const baseUrl = SITE_URL.replace(/\/$/, '');
  
  // 静态页面
  const staticPages = [
    { loc: '/', changefreq: 'daily', priority: '1.0' },
    { loc: '/about/', changefreq: 'monthly', priority: '0.8' },
    { loc: '/maps/', changefreq: 'daily', priority: '0.9' },
    { loc: '/blog/', changefreq: 'daily', priority: '0.8' },
  ];

  // 地图页面
  const mapUrls = maps.map(map => {
    // 使用 encodeURI 编码，但保留一些字符
    // encodeURI 不会编码：~!@#$&*()=:/,;?+'
    const safeName = encodeURI(map.name);
    
    return {
      loc: `/map/${map.id}/${safeName}/`,
      changefreq: 'weekly',
      priority: '0.7'
    };
  });

  const allUrls = [...staticPages, ...mapUrls];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  allUrls.forEach(item => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${item.loc}</loc>\n`;
    xml += `    <changefreq>${item.changefreq}</changefreq>\n`;
    xml += `    <priority>${item.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;

  return xml;
}

/**
 * 生成 sitemap 索引文件
 */
function generateSitemapIndexXML() {
  const baseUrl = SITE_URL.replace(/\/$/, '');
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  xml += `  <sitemap>\n`;
  xml += `    <loc>${baseUrl}/sitemap-0.xml</loc>\n`;
  xml += `  </sitemap>\n`;
  xml += `</sitemapindex>\n`;

  return xml;
}

/**
 * 主函数
 */
async function main() {
  console.log('🚀 开始生成 sitemap...');
  console.log(`📍 网站 URL: ${SITE_URL}`);
  console.log(`📂 当前目录：${process.cwd()}`);
  console.log(`📂 Dist 目录：${distDir}`);
  console.log(`🔧 环境变量检查:`);
  console.log(`   - CLOUDFLARE_ACCOUNT_ID: ${process.env.CLOUDFLARE_ACCOUNT_ID ? '✅ 已设置' : '❌ 未设置'}`);
  console.log(`   - CLOUDFLARE_API_TOKEN: ${process.env.CLOUDFLARE_API_TOKEN ? '✅ 已设置' : '❌ 未设置'}`);
  console.log(`   - SITE_URL: ${process.env.SITE_URL || '使用默认值'}`);

  // 检查环境变量
  if (!process.env.CLOUDFLARE_ACCOUNT_ID || !process.env.CLOUDFLARE_API_TOKEN) {
    console.warn('⚠️  警告：缺少 CLOUDFLARE_ACCOUNT_ID 或 CLOUDFLARE_API_TOKEN 环境变量');
    console.warn('⚠️  请确保在 Cloudflare Pages 中配置了这些环境变量');
    console.log('📝 将生成只包含静态页面的 sitemap');
    
    const staticSitemap = generateSitemapXML([]);
    const sitemapPath = path.join(distDir, 'sitemap-0.xml');
    writeFileSync(sitemapPath, staticSitemap, 'utf8');
    console.log(`✅ sitemap 已生成：${sitemapPath}`);
    return;
  }

  // 获取数据库配置
  const dbConfig = getDatabaseConfig();
  if (!dbConfig) {
    console.error('❌ 无法获取数据库配置，生成失败');
    process.exit(1);
  }

  // 从数据库获取地图数据
  const maps = await getMapsFromDB(dbConfig);

  // 生成 sitemap
  const sitemapXML = generateSitemapXML(maps);
  const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');
  const sitemapPath = path.join(distDir, 'sitemap-0.xml');

  // 写入文件
  try {
    // 确保 dist 目录存在
    const { mkdirSync } = await import('fs');
    mkdirSync(distDir, { recursive: true });

    writeFileSync(sitemapIndexPath, generateSitemapIndexXML(), 'utf8');
    console.log(`✅ sitemap 索引已生成：${sitemapIndexPath}`);

    writeFileSync(sitemapPath, sitemapXML, 'utf8');
    console.log(`✅ sitemap 已生成：${sitemapPath}`);
    console.log(`📊 包含 ${maps.length} 个地图页面`);
    console.log(`📊 总共 ${maps.length + 4} 个 URL`);
    
    // 验证文件是否正确写入
    const stats = readFileSync(sitemapPath, 'utf8');
    console.log(`📄 sitemap 文件大小：${stats.length} 字节`);
    console.log(`📄 前 100 个字符：${stats.substring(0, 100)}...`);
  } catch (error) {
    console.error('❌ 写入文件失败:', error.message);
    process.exit(1);
  }

  console.log('🎉 sitemap 生成完成！');
}

// 运行主函数
main().catch(error => {
  console.error('❌ 发生错误:', error);
  process.exit(1);
});
