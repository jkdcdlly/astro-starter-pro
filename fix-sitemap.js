import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取 sitemap 文件
const sitemapPath = path.join(__dirname, 'public', 'sitemap-0.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// 处理 URL 中的特殊字符
function fixUrl(url) {
  // 首先解码 URL 编码的字符
  let print_log=false;
  if (url.includes('&')) {
    print_log=true;
  }
  let decodedUrl = decodeURIComponent(url);
  if(print_log){
     console.log('1-decodedUrl', decodedUrl);
  }
  
  // 替换空格为下划线
  decodedUrl = decodedUrl.replace(/\s+/g, '_');
  if(print_log){
     console.log('2-decodedUrl', decodedUrl);
  }
  // 移除管道符 |
  decodedUrl = decodedUrl.replace(/\|/g, '');
  if(print_log){
     console.log('3-decodedUrl', decodedUrl);
  }
  // 将 & 替换为 下划线
  decodedUrl = decodedUrl.replace(/&/g, '_');
  if(print_log){
     console.log('4-decodedUrl', decodedUrl);
  }
  decodedUrl = decodedUrl.replace(/_-_/g, '_');
  decodedUrl = decodedUrl.replace(/_+/g, '_');
  if(print_log){
     console.log('5-decodedUrl', decodedUrl);
  }
  // 重新编码 URL
  return encodeURI(decodedUrl);
}

// 正则表达式匹配 <loc> 标签中的 URL
const locRegex = /<loc>([^<]+)<\/loc>/g;

sitemapContent = sitemapContent.replace(locRegex, (match, url) => {
  const fixedUrl = fixUrl(url);
  return `<loc>${fixedUrl}</loc>`;
});

// 写回文件
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

console.log('Sitemap fixed successfully!');
