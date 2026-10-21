---
name: story-archivist
description: >-
  Archives parable stories from hexo/stories/originalStory.txt into the Hexo
  Stories column. Classifies each story by concept keywords, writes one tag
  per domain, and only appends new posts. Use when the user says
  /archive_stories, /story-archivist, 归档故事, 故事归档, 覆盖 originalStory,
  or asks to classify new stories into the frontend 故事 column.
version: "6.0"
author: "AI Assistant"
---

# Story Archivist

触发后**立即执行**，不要逐步确认。分类与写入只通过脚本完成，不要手工改标签或另写一套关键词。

## 触发

- `/archive_stories`、`/story-archivist`
- 「归档故事」「故事归档」「执行 story-archivist」
- 用户覆盖或更新 `hexo/stories/originalStory.txt` 后，要求按本技能把新故事追加到前端「故事」栏目

## 固定路径

仓库：`932687738.github.io`。

| 用途 | 路径 |
|------|------|
| 源文本 | `hexo/stories/originalStory.txt` |
| 归档脚本 | `hexo/tools/archive_stories.js` |
| 故事文章 | `hexo/source/_posts/stories/{领域}/{标题}.md` |
| 栏目 | Hexo category `Stories`（导航名「故事」） |

源文件放在 `hexo/stories/`，不放进 `hexo/source/`，避免被生成成公开页面。

学习仓库 `ai_for_learing` 里的 `domainConceptStory/domainConcept/`、`思维导图.html`、`思维导图.xmind` **不要读、不要改、不要同步**。

## 执行

在仓库根目录运行：

```text
node hexo/tools/archive_stories.js
```

先看会新增什么时加 `--dry`。确认后去掉 `--dry` 再写入。用户已经要求归档时，直接写入，不必再问。

脚本会：

1. 解析源里的全部故事（短标题行，或 `#` / `**标题**`）。
2. 丢掉 `继续下一个` 之后、下一正式标题之前的选题草稿。
3. 用脚本内 `RULES` 分类。先匹配「概念解释」开头约 400 字，未命中再扫全文，自上而下首次命中。
4. 只追加文章。已有同名且结构化正文相同则跳过。正文不同则在本次领域下另存 `{标题}_v2.md`、`_v3.md`…，不覆盖旧文。
5. 源文件里已经没有的故事也保留。禁止删除 `hexo/source/_posts/stories/` 下任何文章。

未命中关键词时标签为 `未分类_待标注`，文末加 `<!-- 请手动标注领域 -->`。

文章 front matter 必须是：

```yaml
---
title: "故事标题"
date: YYYY-MM-DD HH:mm:ss
categories: Stories
tags:
  - "领域文件夹名"
timeline: Stories
---
```

`tags` 只有一个，值等于领域文件夹名。正文去掉重复标题，首段后插入 `<!-- more -->`，`——故事完——`、`概念解释`、`故事中的隐喻对应` 的版式由脚本处理。

## 分类

以 `hexo/tools/archive_stories.js` 的 `RULES` 为准。

| 关键词 | 标签 |
|---|---|
| 自组织临界性、幂律、雪崩、临界态 | 复杂系统与演化 |
| 二阶控制论、反馈闭环 | 认知科学与哲学 |
| 适应性偏好、偏好内生、酸葡萄 | 认知科学与哲学 |
| 模型依赖实在论、模型依赖的实在论、归纳问题 | 认知科学与哲学 |
| 语义外部主义、孪生地球、意义不在头脑 | 语言与认知 |
| 涌现、整体大于部分 | 复杂系统与演化 |
| 路径依赖、锁定、正反馈 | 复杂系统与演化 |
| 分布偏移、虚假相关性、OOD、域外泛化 | 机器学习与泛化 |
| 灾难性遗忘、持续学习、稳定性-可塑性 | 机器学习与泛化 |
| 莫拉维克悖论、具身认知 | 智能本质与具身认知 |
| 信用分配、时序差分、TD学习、TD Learning | 强化学习与决策 |
| 奖励黑客、规格游戏、古德哈特 | AI对齐安全与可解释性 |
| 可解释性、事后解释、黑箱 | AI对齐安全与可解释性 |
| 基准测试饱和、欺骗性对齐、过拟合评估 | AI对齐安全与可解释性 |
| 观察者 | 认知科学与哲学 |
| 自组织 | 复杂系统与演化 |
| 隐性知识 | 智能本质与具身认知 |
| 范式 | 认知科学与哲学 |

新领域只改脚本 `RULES`，再跑脚本。不要为了改标签去移动已经发布的文章，除非用户明确要求改归类。

## 覆盖源文件之后

用户会整份覆盖 `hexo/stories/originalStory.txt`。覆盖后仍跑同一条命令。

- 源里的新标题追加到「故事」栏目，标签是分到的领域。
- 源里保留的旧标题，正文没变就跳过。
- 源里删掉的旧故事继续留在栏目里。

不要提交、不要 `hexo deploy`，除非用户另外要求发布。

## 报告

跑完后说明：解析篇数、新增篇数、跳过篇数、版本篇数，以及每篇新增故事的领域标签和文件路径。数字以脚本输出为准。
