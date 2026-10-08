# ArtisanCloud 官网（当前版本）

当前官网源码为本目录 `ArtisanCloudHome`，GitHub 仓库 [ArtisanCloud/artisan-cloud-home](https://github.com/ArtisanCloud/artisan-cloud-home)，默认分支 `develop`。这是 Vue 3 + Vite 项目，构建产物为 `dist/`。历史 `main` 分支的 Nuxt 2 项目不是本次部署来源；旧本地小写目录已移除，历史提交保留在 Git 中。

## 本地构建与镜像发布

```bash
npm ci --no-audit --no-fund
npm run build
docker build -t artisan-cloud-home:local .
docker run --rm -p 127.0.0.1:8080:80 artisan-cloud-home:local
```

本机未运行 Docker daemon 时，静态构建和临时 Nginx 路由检查不等于镜像运行通过；推送后必须检查 Actions 的实际容器验证。

所有代码先在本地修改和验证，再提交推送到 `develop`。`.github/workflows/docker-publish.yml` 发布 `ghcr.io/artisancloud/artisan-cloud-home` 的 AMD64、ARM64 镜像，并检查首页、Vue Router 直链、静态资源及缺失资源 404。默认分支发布 `latest`、`develop` 和 `sha-<完整提交 SHA>`；服务器使用验证过的 SHA 标签。

## XDocker 部署

XDocker 的站点 key 为 `artisancloud-home`，域名为 `artisan-cloud.com`。Vue Router 使用 browser history，容器 Nginx 为 `/products`、`/cases`、`/contact` 等直链返回 `index.html`；缺失的 JS、图片等资源返回 404。只有构建阶段使用 Node，运行阶段是静态 Nginx 容器。

先确认镜像发布成功，再在本地更新 XDocker 镜像模板及文档、验证并推送；服务器同步对应提交后配置私有 `.env` 并启动，不直接修改远程仓库代码。共享入口和证书见 [官网部署指南](https://github.com/ReDeployment/XDocker/blob/main/docs/guides/artisancloud-home/README.md)。Private 镜像使用有包读取权限的 PAT classic 登录，不必改为 Public。
