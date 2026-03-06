# Sitemap 生成脚本

## 概述

本项目使用构建时生成静态 sitemap 的方式，在每次 `npm run build` 后自动执行脚本生成 sitemap。

## 工作原理

1. **构建阶段**: Astro 构建静态页面到 `dist/` 目录
2. **Postbuild 钩子**: 自动执行 `scripts/generate-sitemap.js`
3. **查询数据库**: 通过 Cloudflare D1 API 获取所有地图数据
4. **生成 XML**: 创建 `sitemap-index.xml` 和 `sitemap-0.xml`

## 本地开发配置

### 1. 获取 Cloudflare API Token

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 点击右上角头像 -> **My Profile**
3. 切换到 **API Tokens** 标签
4. 点击 **Create Token**
5. 选择 **Create Custom Token**
6. 配置权限：
   - **Account** -> **Cloudflare Pages** -> **Edit**
   - **Account** -> **D1** -> **Edit**
7. 点击 **Continue to summary**，然后点击 **Create Token**
8. 复制生成的 Token（只显示一次！）

### 2. 获取账户 ID

在 Cloudflare Dashboard 右侧边栏可以找到 **Account ID**

### 3. 配置环境变量

在项目根目录创建 `.env` 文件：

```bash
cp .env.example .env
```

编辑 `.env` 文件，填入你的配置：

```env
CLOUDFLARE_ACCOUNT_ID=你的账户 ID
CLOUDFLARE_API_TOKEN=你的 API Token
SITE_URL=https://war3maps.net/
```

### 4. 本地测试

```bash
# 构建项目
npm run build

# 查看生成的 sitemap
cat dist/sitemap-0.xml
```

## Cloudflare Pages 配置

在 Cloudflare Pages 中部署时，需要添加环境变量：

1. 进入 Cloudflare Pages 项目
2. 点击 **Settings** -> **Environment variables**
3. 添加以下变量：
   - `CLOUDFLARE_ACCOUNT_ID`: 你的账户 ID
   - `CLOUDFLARE_API_TOKEN`: 你的 API Token
   - `SITE_URL`: `https://war3maps.net/`

## 文件结构

```
astro-starter-pro/
├── scripts/
│   └── generate-sitemap.js    # Sitemap 生成脚本
├── dist/
│   ├── sitemap-index.xml      # Sitemap 索引文件
│   └── sitemap-0.xml          # 主 sitemap 文件
├── package.json               # 包含 postbuild 钩子
└── .env.example               # 环境变量示例
```

## Sitemap 内容

生成的 sitemap 包含：

### 静态页面
- `/` - 首页
- `/about/` - 关于页
- `/maps/` - 地图列表页
- `/blog/` - 博客列表页

### 动态地图页面
- `/map/{id}/{mapname}/` - 每个地图的详情页

## 更新频率

- **静态页面**: 每次构建时更新
- **地图页面**: 每次构建时从数据库获取最新数据

建议定期重新构建（如每天或每周），以保持 sitemap 最新。

## 故障排查

### 缺少环境变量
```
⚠️  警告：缺少 CLOUDFLARE_ACCOUNT_ID 或 CLOUDFLARE_API_TOKEN 环境变量
```
解决方法：确保 `.env` 文件存在且配置正确，或在 Cloudflare Pages 中添加环境变量。

### API 权限错误
```
❌ API 请求失败：403
```
解决方法：检查 API Token 是否有 D1 读取权限。

### 数据库查询失败
```
❌ 查询失败
```
解决方法：检查 `wrangler.toml` 中的数据库配置是否正确。

## 未来优化

- [ ] 支持分页生成多个 sitemap 文件（超过 50000 个 URL 时）
- [ ] 添加最后修改时间 (`lastmod`)
- [ ] 支持图片 sitemap
- [ ] 支持视频 sitemap
