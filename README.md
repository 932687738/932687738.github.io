# 932687738.github.io

个人博客，基于 [Hexo](https://hexo.io/) + [Tranquility](https://github.com/hooozen/hexo-theme-tranquility) 主题。

## 环境要求

- Node.js >= 16（推荐 18 LTS）
- Git

## 本地开发

Hexo 项目位于 `hexo/` 子目录，所有命令均在该目录下执行：

```bash
cd hexo
npm install          # 首次克隆后必须安装依赖
npm run server       # 本地预览，默认 http://localhost:4000
npm run build        # 生成静态页面到 public/
```

也可使用 `npx hexo server`、`npx hexo generate` 等命令。

## 发布到 GitHub Pages

```bash
cd hexo
npm run build
npm run deploy       # 或 npx hexo deploy
```

部署配置见 `hexo/_config.yml` 中的 `deploy` 段，发布分支为 `main`，需与 GitHub Pages 设置保持一致。

## 目录说明

| 路径 | 说明 |
|------|------|
| `hexo/source/_posts/` | 博客文章 |
| `hexo/_config.yml` | Hexo 主配置 |
| `hexo/_config.tranquility.yml` | Tranquility 主题配置 |
| `hexo/themes/tranquility/` | 主题文件 |
