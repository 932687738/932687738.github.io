# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- 作者本人（yxy）：把笔记按栏目归档，方便自己回看。
- 招聘方与合作方：通过文章和简历判断作者的工作与背景。
- 路过的公开读者不是主要任务。站点也不是给学员上课的产品。

## Product Purpose

个人技术博客与知识库。作者在这里留下分类笔记、GitHub 观察和一份简历。成功的标准是：作者能按既有栏目持续归档；评估作者的人能找到真实作品和简历，而不会把站点理解成课程或私教服务。

## Positioning

站名是「烟火与诗」。它是作者自己的栏目化档案（随笔、GitHub、Java、React、Vue、AI、Spring Alibaba AI、Code Graph）加上简历。换一个博客模板复制不了这些笔记和这份履历。

## Operating Context

- 文章是 `hexo/source/_posts/` 下的 Markdown。`categories` 必须对上 `hexo/_config.tranquility.yml` 里某个子页的 `name`，才会出现在对应导航。
- 简历不在文章里，而在同一配置文件的 `cv` 段，页面路径是 `/cv/`。
- 线上站点：https://932687738.github.io ，由 Hexo 生成后部署到该仓库的 `master` 分支。
- 本地预览：在 `hexo/` 执行 `npm run server`，打开 http://localhost:4000/ 。

## Capabilities and Constraints

- 已有栏目：随笔（Jottings）、GitHub、Java、React、Vue、AI、Spring Alibaba AI、Code Graph、简历。
- 语言是简体中文（`zh-Hans`）。
- 实现是 Hexo 6 与 Tranquility 主题，部署在 GitHub Pages。这是当前技术事实，不是视觉锁定。
- 工作区里尚未提交的内容要留着，包括 GitHub 子页和四篇快照文章（全局 Star、今日、本周、本月）。它们是已有内容，不是可丢弃的草稿。
- 视觉呈现以后可以用 Impeccable 调整。这次不决定样式。
- 未决：不新增课程、学员、定价或案例。没有这些事实时，后续工作不得编造。

## Brand Commitments

- 站名：烟火与诗。作者名：yxy。
- 已发布文案保持为内容事实：副标题「生活与工作并重」，描述「生命不息，运动不止」，slogan「古柯」，首页 motto「智能涌现 连接未来」，以及首页「断言」一节的诗句。
- 简历事实以 `hexo/_config.tranquility.yml` 的 `cv` 为准：后端开发；2024 应届硕士；Java、Vue、React；2015.9–2019.6 青岛大学软件工程学士；邮箱 932687738@qq.com；GitHub 用户 932687738；电话 17865425326。
- Tranquility 的现有外观是当前实现，不是必须守住的视觉系统。

## Evidence on Hand

- 已有随笔：`hexo/source/_posts/init.md`、`hello-world.md`、`markdown.md`。
- 工作区中的 GitHub 快照：`hexo/source/_posts/github/` 下四篇文章，数据日期 2026-10-16。
- 站点图片在 `hexo/source/images/` 与主题 `source/images/`。
- 没有学员成果、课程大纲、客户引言或第三方评价。这些缺项必须保持为空。

## Product Principles

- 先服务作者归档，再服务招聘与合作评估。
- 站名不是课程承诺。不要把笔记站改写成私教产品。
- 已有事实留下；没有的证据不要补。
- 栏目是内容的入口。新文章归入既有子页，而不是另起一套导航。
- 样式可以以后改。改样式时不改写站名、简历和已发布文章的事实。
