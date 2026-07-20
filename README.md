# yxy.github.io

个人博客站点，基于 [Hexo](https://hexo.io/) 构建。

- 线上地址：https://932687738.github.io/
- 源码目录：`hexo/`
- 部署仓库：https://github.com/932687738/932687738.github.io

## 环境要求

- [Node.js](https://nodejs.org/)（建议 LTS 版本）
- npm（随 Node.js 安装）

## 初始化

首次克隆仓库后，进入 Hexo 目录并安装依赖：

```bash
git clone https://github.com/932687738/yxy.github.io.git
cd yxy.github.io/hexo
npm install
```

## 本地预览

在 `hexo/` 目录下启动开发服务器：

```bash
npm run server
```

启动成功后，在浏览器访问：

```
http://localhost:4000/
```

修改 `hexo/source/` 下的文章或 `hexo/_config.yml` 配置后，页面会自动刷新。按 `Ctrl+C` 可停止服务。

若预览样式异常，可先清理缓存再启动：

```bash
npm run clean
npm run server
```

## 常用命令

在 `hexo/` 目录下执行：

| 命令 | 说明 |
|------|------|
| `npm run server` | 使用当前主题启动本地预览 |
| `npm run server:landscape` | 切换到 landscape 并启动预览 |
| `npm run server:tranquility` | 切换到 tranquility 并启动预览 |
| `npm run theme` | 查看当前主题与可用选项 |
| `npm run theme:landscape` | 仅切换到 landscape |
| `npm run theme:tranquility` | 仅切换到 tranquility |
| `npm run build` | 使用当前主题生成静态文件 |
| `npm run build:landscape` | 切换到 landscape 并构建 |
| `npm run build:tranquility` | 切换到 tranquility 并构建 |
| `npm run clean` | 清理缓存与生成文件 |
| `npm run deploy` | 构建并部署到 GitHub User Pages |

## 部署到 GitHub Pages

站点使用 GitHub **User Pages**，访问地址为：

```
https://932687738.github.io/
```

### 仓库说明

| 仓库 | 分支 | 用途 |
|------|------|------|
| `932687738/yxy.github.io` | `main` | Hexo 源码（开发用） |
| `932687738/932687738.github.io` | `main` | Hexo 源码备份（可选） |
| `932687738/932687738.github.io` | `master` | 静态页面（GitHub Pages 发布） |

User Pages 要求仓库名为 `932687738.github.io`，站点挂在域名根路径，无需配置子路径 `root`。

当前正确配置（`hexo/_config.yml`）：

```yaml
url: https://932687738.github.io
root: /
deploy:
  type: git
  repository: https://github.com/932687738/932687738.github.io.git
  branch: master
```

### 发布步骤

```bash
cd hexo

# 1. 选择主题并构建
npm run build:tranquility   # 或 npm run build:landscape

# 2. 部署到 GitHub User Pages（推送到 932687738.github.io 的 master 分支）
npm run deploy
```

部署完成后等待 1～2 分钟，访问 https://932687738.github.io/ 查看效果。

### GitHub Pages 设置

在 `932687738/932687738.github.io` 仓库中确认：

1. 进入 **Settings → Pages**
2. **Source** 选择 `Deploy from a branch`
3. **Branch** 选择 `master`，目录选 `/ (root)`
4. 保存后等待 GitHub 构建完成

> 若之前使用 `yxy.github.io` 作为 Project Pages，请在 GitHub 中停用该仓库的 Pages，避免冲突。

## 项目结构

```
yxy.github.io/
├── README.md                    # 项目说明
└── hexo/                        # Hexo 站点根目录
    ├── _config.yml              # 站点配置（含 url / deploy）
    ├── _config.tranquility.yml  # tranquility 主题配置
    ├── package.json             # 依赖与脚本
    ├── tools/
    │   └── use-theme.js         # 主题切换脚本
    ├── themes/
    │   └── tranquility/         # tranquility 主题文件
    └── source/                  # 文章与页面源码
        └── _posts/              # 博客文章
```

## 切换主题

项目内置两套主题，通过 npm 脚本一键切换，无需手动改配置文件。

| 主题 | 说明 | 主题配置 |
|------|------|----------|
| `landscape` | Hexo 默认主题，简洁博客风格 | 无额外配置 |
| `tranquility` | 致远主题，个人主页风格 | `hexo/_config.tranquility.yml` |

### 快速切换（推荐）

进入 `hexo/` 目录后，选择目标主题并启动预览：

```bash
cd hexo

# 方式一：切换到 landscape 并预览
npm run server:landscape

# 方式二：切换到 tranquility 并预览
npm run server:tranquility
```

浏览器访问 http://localhost:4000/ 查看效果。按 `Ctrl+C` 停止服务。

上述命令会自动完成三件事：

1. 更新 `hexo/_config.yml` 中的 `theme` 字段
2. 同步更新 `post_asset_folder`（tranquility 需要 `true`，landscape 为 `false`）
3. 清理缓存并启动本地服务器

### 仅切换主题（不启动服务）

若只想改配置、稍后再预览：

```bash
cd hexo

npm run theme:landscape      # 切换到 landscape
npm run theme:tranquility    # 切换到 tranquility
npm run theme                # 查看当前主题
```

切换后手动预览：

```bash
npm run clean
npm run server
```

### 按主题构建静态文件

部署前按目标主题构建：

```bash
cd hexo

npm run build:landscape      # 用 landscape 构建
npm run build:tranquility    # 用 tranquility 构建
```

### 注意事项

- **不要手动改** `_config.yml` 里的 `theme`，请用上述 npm 命令，避免 `post_asset_folder` 与主题不匹配。
- tranquility 的个性化内容（首页、子页、简历等）在 `hexo/_config.tranquility.yml` 中配置。
- 切换主题后若样式异常，执行 `npm run clean` 再重新预览。
- `npm run server` 会使用 `_config.yml` 中**当前已设置**的主题，不会自动切换。
