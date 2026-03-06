# Cloudflare Pages 部署检查清单

## 问题：访问 sitemap-0.xml 显示首页内容

这通常意味着 sitemap 文件没有正确生成或被覆盖。

## 排查步骤：

### 1️⃣ 检查环境变量配置

在 Cloudflare Pages 控制台：

1. 进入你的项目
2. 点击 **Settings** -> **Environment variables**
3. 确认以下变量已添加：
   - `CLOUDFLARE_ACCOUNT_ID` ✅
   - `CLOUDFLARE_API_TOKEN` ✅
   - `SITE_URL` (可选)

### 2️⃣ 检查构建日志

在 Cloudflare Pages 控制台：

1. 点击 **Deployments**
2. 选择最新的部署
3. 查看构建日志
4. 搜索以下关键字：
   - `🚀 开始生成 sitemap`
   - `✅ sitemap 已生成`
   - `📊 包含 X 个地图页面`

如果看不到这些日志，说明 postbuild 脚本没有执行。

### 3️⃣ 确认 postbuild 脚本执行

检查 `package.json` 中是否有：

```json
{
  "scripts": {
    "build": "astro build",
    "postbuild": "node scripts/generate-sitemap.js"
  }
}
```

Cloudflare Pages 会自动执行 `postbuild` 脚本。

### 4️⃣ 检查构建输出目录

1. 在 Cloudflare Pages -> Settings -> Build & deployments
2. 确认 **Build output directory** 设置为 `dist`
3. 确认 **Build command** 设置为 `npm run build`

### 5️⃣ 验证文件是否存在

在构建日志中，添加一个步骤来列出 dist 目录内容：

修改 `package.json`：

```json
{
  "scripts": {
    "build": "astro build && ls -la dist/ && node scripts/generate-sitemap.js"
  }
}
```

### 6️⃣ 常见问题

#### 问题 1: 环境变量未设置
**症状**: 日志显示 "⚠️ 警告：缺少环境变量"
**解决**: 在 Cloudflare Pages 控制台添加环境变量

#### 问题 2: API Token 权限不足
**症状**: 日志显示 "API 请求失败：403"
**解决**: 重新创建 API Token，确保有 D1 Edit 权限

#### 问题 3: 数据库 ID 错误
**症状**: 日志显示 "查询失败"
**解决**: 检查 `wrangler.toml` 中的 `database_id`

#### 问题 4: sitemap 文件被覆盖
**症状**: 构建成功但访问显示首页
**解决**: 可能是路由冲突，检查是否有其他文件生成 sitemap

### 7️⃣ 手动验证

如果自动构建有问题，可以：

1. 本地运行 `npm run build`
2. 查看生成的 `dist/sitemap-0.xml`
3. 如果本地正常，说明是 Cloudflare 环境问题
4. 检查 Cloudflare Pages 的构建配置

### 8️⃣ 临时解决方案

如果 postbuild 一直不执行，可以修改 build 命令：

```json
{
  "scripts": {
    "build": "astro build && node scripts/generate-sitemap.js"
  }
}
```

这样 sitemap 生成会作为 build 的一部分执行。

## 快速修复步骤：

1. **在 Cloudflare Pages 添加环境变量**（如果还没有）
2. **触发新的部署**（可以提交一个空commit）
3. **查看构建日志**，确认 sitemap 生成成功
4. **访问** `https://war3maps.net/sitemap-0.xml` 验证

## 需要帮助？

如果以上步骤都不行，请提供：
- 构建日志截图
- Cloudflare Pages 配置截图
- 环境变量配置情况
