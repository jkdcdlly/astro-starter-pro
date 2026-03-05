# Cloudflare Pages 部署配置指南

## 已完成的优化

1. ✅ 移除了硬编码的 Cloudflare API Token 和数据库 URL
2. ✅ 使用 Cloudflare D1 直连（不再通过 HTTP API）
3. ✅ 添加了 Cloudflare Cache 支持
4. ✅ 修复了 "The response has already been sent" 错误（通过在渲染前完成所有数据获取）

## 需要在 Cloudflare Pages 控制台配置的内容

### 1. D1 数据库绑定

在 Cloudflare Pages 控制台：

1. 进入您的项目设置
2. 找到 **Functions** > **Bindings**
3. 添加一个新的 D1 数据库绑定：
   - **Variable name**: `DB`
   - **Database name**: 选择您的 D1 数据库（wc3maps）
   - **Database ID**: 62f121ec-2770-4623-8f10-403de6d3d932

### 2. 确保 wrangler.toml 配置正确

项目根目录已有 `wrangler.toml` 文件，内容如下：

```toml
#:schema node_modules/wrangler/config-schema.json
name = "astro-starter-pro"
compatibility_date = "2024-04-01"

# D1 数据库配置
[[d1_databases]]
binding = "DB"
database_name = "wc3maps"
database_id = "62f121ec-2770-4623-8f10-403de6d3d932"
```

### 3. 部署项目

使用以下命令部署：

```bash
# 本地构建
npm run build

# 使用 wrangler 部署（如果已安装 wrangler CLI）
npx wrangler pages deploy dist
```

或者直接通过 Git 推送到 Cloudflare Pages 连接的仓库。

## 缓存策略

- 页面缓存时间：300 秒（5分钟）
- 同时使用浏览器缓存和 Cloudflare Edge Cache
- 缓存键基于完整的 URL（包括查询参数）

## 数据库表

确保您的 D1 数据库中有以下表：

1. `wc3maps_map_list` - 用于地图列表页面
2. `wc3_maps_complete` - 用于地图详情页面
