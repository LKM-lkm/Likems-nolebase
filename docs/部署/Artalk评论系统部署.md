# Artalk 评论系统部署指南

## 📦 程序部署

该指南将帮助你在服务器上部署 Artalk。之后，你可以将 Artalk 客户端集成到你的网站或博客中，让用户能够在你的网站上畅所欲言。

## Docker 部署

### 启动服务器

推荐使用 Docker 部署，预先安装 Docker 引擎并创建一个工作目录，然后执行命令在后台启动容器：

```bash
docker run -d \
    --name artalk \
    -p 8080:23366 \
    -v $(pwd)/data:/data \
    -e "TZ=Asia/Shanghai" \
    -e "ATK_LOCALE=zh-CN" \
    -e "ATK_SITE_DEFAULT=Nolebase Template" \
    -e "ATK_SITE_URL=https://nolebase-template.vercel.app" \
    artalk/artalk-go
```

### 创建管理员账户

执行命令创建管理员账户：

```bash
docker exec -it artalk artalk admin
```

浏览器输入 `http://localhost:8080` 进入 Artalk 后台登录界面。

## 手动部署到 Cloudflare

### 1. 下载 Artalk

从 [GitHub Releases](https://github.com/ArtalkJS/Artalk/releases) 下载适合你系统的二进制文件：

```bash
# Linux AMD64
wget https://github.com/ArtalkJS/Artalk/releases/latest/download/artalk_linux_amd64.tar.gz
tar -zxvf artalk_linux_amd64.tar.gz
chmod +x artalk

# 或使用 Docker
docker pull artalk/artalk-go
```

### 2. 配置文件

项目已包含 `artalk.yml` 配置文件，修改以下配置：

- `app_key`: 设置一个安全的加密密钥
- `trusted_domains`: 添加你的网站域名
- `site_default`: 设置你的站点名称

### 3. 启动服务器

```bash
# 启动 Artalk 服务器
./artalk server -c ./artalk.yml

# 创建管理员账户
./artalk admin
```

### 4. Docker 部署（可选）

```bash
# 使用 Docker 部署
docker run -d \
    --name artalk \
    -p 23366:23366 \
    -v $(pwd)/data:/data \
    -v $(pwd)/artalk.yml:/app/artalk.yml \
    artalk/artalk-go
```

### 5. 反向代理

在 Cloudflare 中设置反向代理，将你的域名指向 Artalk 服务器。

## 参考链接

- [Artalk 官方文档](https://artalk.js.org/)
- [GitHub 仓库](https://github.com/ArtalkJS/Artalk)
- [配置文档](https://artalk.js.org/guide/backend/config.html)
- [部署指南](https://artalk.js.org/guide/deploy.html)

## 客户端集成

使用 CDN 加载，无需安装依赖。

### 使用组件

在 VitePress 页面中使用 Artalk 评论组件：

```vue
<template>
  <div>
    <!-- 你的页面内容 -->
    <ArtalkComment />
  </div>
</template>

<script setup>
import ArtalkComment from '../.vitepress/theme/components/ArtalkComment.vue'
</script>
```

### 配置说明

在 `ArtalkComment.vue` 组件中修改以下配置：

- `server`: Artalk 服务器地址
- `site`: 站点名称
- 其他配置项可参考 [Artalk 官方文档](https://artalk.js.org/)

## 🥳 部署完成

你已成功完成 Artalk 部署！现在可以在你的网站上使用评论功能了。

## 进阶配置

- 守护进程 (Systemd, Supervisor)
- 反向代理 (Caddy, Nginx, Apache)
- 数据迁移和备份
- 自定义主题和样式

更多详细信息请参考 [Artalk 官方文档](https://artalk.js.org/)。