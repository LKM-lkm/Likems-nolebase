# Cloudflare Pages 部署指南

## 🚀 快速部署

### 方法一：Cloudflare Pages 控制台（推荐）
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Pages → 创建项目 → 连接 GitHub
3. 构建设置：
   - 构建命令：`pnpm docs:build`
   - 输出目录：`.vitepress/dist`

### 方法二：GitHub Actions 自动部署
1. 在 GitHub Secrets 添加：
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
2. 推送代码自动部署

## ✨ 优势
- 免费无限带宽
- 全球CDN加速
- 自动HTTPS
- 简单配置