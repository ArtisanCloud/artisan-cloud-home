# CI 与后续发布

本次 CI PR 以 `feat/powerx-marketing-stage` 为目标，范围是测试、静态站构建及容器打包。没有部署任务、服务器连接、部署密钥或 GitHub 环境配置。

## 当前验证入口

- PR、`develop`、`feat/powerx-marketing-stage` 和 `ci/**` 分支推送执行验证，不发布镜像。
- Node.js 22 使用 `npm ci` 安装锁定依赖，然后执行 `npm test`、`tsc --noEmit`、`npm run build`、`npm run test:seo`。
- 在 GitHub 托管的 Ubuntu runner 构建本地 AMD64 容器，再运行 `bash scripts/ci/smoke-container.sh IMAGE`，检查 Nginx 配置、页面、canonical、robots、sitemap、图片及真实 404。
- 验证成功后，构建产物作为 Actions artifact 保留 7 天。PR 不使用 self-hosted runner 或仓库密钥，token 仅有 `contents: read`。

## 尚未启用的发布入口

只有在默认分支 `develop` 上手动运行工作流，并明确选中 `publish=true`，才允许发布镜像。普通推送、PR、标签和改版分支均不能发布；默认 `publish=false`。本次不运行发布。

发布 job 必须等待验证通过，并对同一提交重新构建和 smoke 检查，然后才登录 GHCR。发布 `linux/amd64,linux/arm64`，标签为 `ghcr.io/artisancloud/artisan-cloud-home:sha-完整提交SHA`，不更新 `latest`。摘要记录提交、SHA 标签和 `image@sha256:...`。AMD64 执行 HTTP smoke；ARM64 进行构建，尚无 ARM64 运行验证。基础镜像随时间变化，同一 SHA 重跑可能产生不同 digest，实际部署应固定摘要中的 digest。

## 正式启用前的阻碍与后续授权

1. 远端改版基线是 `973a52fdb4e32fa2a57db4c2d4d81b15e2679f03`，先前线上记录为 `3c00bdef41391f2bb49c8d8747f9a718120d9217`。截图和移动布局源码尚未同步；本 PR 不代替该同步，也不包含线上补丁。既有 blob 上传授权需独立完成。
2. 审阅、合并 CI 至改版分支，再在源码完整对齐后另行审阅合入默认分支。工作流需进入默认分支，才会显示新的手动运行入口。不能把旧默认分支直接作为上线版本。
3. 后续另行授权首次镜像发布，并确认 GHCR 的现有 package 权限是否可用。本次不变更仓库权限、package 权限、环境或 secrets。
4. 后续部署须另行设计并授权：人工确认具体 digest、受限服务器凭据、健康检查、上一 digest 回滚。当前没有部署或回滚任务；也不跟随 `latest` 自动升级。
