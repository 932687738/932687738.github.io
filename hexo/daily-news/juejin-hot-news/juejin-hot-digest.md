# Juejin Hot Digest

按 Asia/Shanghai 时区汇总掘金文章热榜与收藏热榜（后端 / 前端 / 人工智能 / 开发工具），按文章链接去重并归纳正文。

## 2026-11-02

### 今日总览

**一句话结论**：快照新增 9 URL（skip seen 111，detail_ok 9/fail 0）。文章热榜覆盖后端 3 / 前端 1 / 人工智能 1 / 开发工具 4；收藏热榜本轮无新 URL。主线：MongoDB→Kingbase 迁移边界、AI 代码 6 层审核、双 Token 鉴权澄清、本地桌面效率工具、响应式 UI 与 AI 协作、Trae/Obsidian+Claude Code。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | 文章热榜 + 收藏热榜 × 后端/前端/人工智能/开发工具 |
| 榜单规模 | 每槽最多 15；列表槽位 120；新 URL 9；跳过已见 111 |
| 核心趋势 | 1）数据迁移要按 API 面回归而非集合清单；2）AI 写码后验证分层；3）本地优先工具与 Coding Agent IDE/笔记集成 |
| 可直接关注 | [AI 代码审核清单](https://juejin.cn/post/7701912747434999859)；[MongoDB 迁移](https://juejin.cn/post/7702759616728088611)；[双 Token](https://juejin.cn/post/7702402013539336242)；[响应式×AI](https://juejin.cn/post/7702284306036998144) |

### 新增文章

| cat | board | rank | title | author |
| --- | --- | --- | --- | --- |
| 后端 | 文章热榜 | 5 | [MongoDB迁移之后，Spring Data 和 Hibernate 各自接哪类请求](https://juejin.cn/post/7702759616728088611) | 一只牛博 |
| 后端 | 文章热榜 | 12 | [不收费、不加水印、数据归你：我做了个开源的在线简历工具](https://juejin.cn/post/7701912747434754099) | Cosolar |
| 后端 | 文章热榜 | 15 | [如何审核 AI 生成的代码：一份可落地的 6 层检查清单](https://juejin.cn/post/7701912747434999859) | ENCI |
| 前端 | 文章热榜 | 14 | [双 Token 与前端使用 Crypto 公私钥鉴权换 Token，哪种方案更好？](https://juejin.cn/post/7702402013539336242) | excel |
| 人工智能 | 文章热榜 | 11 | [一人公司，单月收入近10万，我做了这三门生意（OPC系列-3）](https://juejin.cn/post/7702438435248160804) | 老金带你玩AI |
| 开发工具 | 文章热榜 | 8 | [我给自己造了一个桌面效率助手：剪贴板、截图提单、全盘文件搜索，全都塞进快捷键里](https://juejin.cn/post/7702064982632824866) | 潇小墨 |
| 开发工具 | 文章热榜 | 12 | [从短剧App的bug看响应式编程在AI时代的优势](https://juejin.cn/post/7702284306036998144) | 程序员老刘 |
| 开发工具 | 文章热榜 | 13 | [Trae 实战体验：一个会自己拿键盘的「AI 开发工程师」](https://juejin.cn/post/7700846756351459338) | Token燃烧实录 |
| 开发工具 | 文章热榜 | 15 | [Obsidian安装使用教程：核心插件配置与图片自动上传、Claude Code插件实战](https://juejin.cn/post/7701269136323723299) | aiks_yuan |

### 后端

#### 文章热榜

- **#5** [MongoDB迁移之后，Spring Data 和 Hibernate 各自接哪类请求](https://juejin.cn/post/7702759616728088611)（一只牛博，赞1/藏1/阅990）：MongoDB 迁 KingbaseES 时，改造量取决于实际调用的 API 面：Spring Data MongoDB 派生查询/聚合/批量/事务/索引与 Hibernate 实体路径、报表 SQL 读取文档字段要分开回归；驱动连通≠业务兼容。
- **#12** [不收费、不加水印、数据归你：我做了个开源的在线简历工具](https://juejin.cn/post/7701912747434754099)（Cosolar，赞2/藏6/阅239）：开源极简简历 MiniWho：本地/自建数据、所见即所得分页、服务端导出 PDF，避开在线简历订阅与水印；附模板与 GitHub。
- **#15** [如何审核 AI 生成的代码：一份可落地的 6 层检查清单](https://juejin.cn/post/7701912747434999859)（ENCI，赞1/藏5/阅215）：AI 写码变便宜后验证变贵：6 层清单（工具裁判→审意图→审测试边界→安全/幻觉依赖→拆分回滚→是否重写）+ 可执行评审脚本思路。

#### 收藏热榜

本槽无新增。

### 前端

#### 文章热榜

- **#14** [双 Token 与前端使用 Crypto 公私钥鉴权换 Token，哪种方案更好？](https://juejin.cn/post/7702402013539336242)（excel，赞5/藏5/阅460）：多数 Web 应用仍以 Access+Refresh 双 Token 为主；前端 Crypto 公私钥证明持钥，并不能替代短时访问凭证与续期失效模型；需要时优先 WebAuthn/Passkey。

#### 收藏热榜

本槽无新增。

### 人工智能

#### 文章热榜

- **#11** [一人公司，单月收入近10万，我做了这三门生意（OPC系列-3）](https://juejin.cn/post/7702438435248160804)（老金带你玩AI，赞12/藏9/阅582）：一人公司 10 月流水拆解（课程/商单/交付），偏经营复盘，技术增量有限，可略读。

#### 收藏热榜

本槽无新增。

### 开发工具

#### 文章热榜

- **#8** [我给自己造了一个桌面效率助手：剪贴板、截图提单、全盘文件搜索，全都塞进快捷键里](https://juejin.cn/post/7702064982632824866)（潇小墨，赞5/藏4/阅232）：Windows 托盘本地效率助手：剪贴板、截图提单、全盘搜索与快捷键；强调数据本地、不上传云。
- **#12** [从短剧App的bug看响应式编程在AI时代的优势](https://juejin.cn/post/7702284306036998144)（程序员老刘，赞4/藏2/阅168）：短剧 App 倍速 UI 不同步案例：命令式多处改状态易漏；状态驱动/响应式降低人与 AI 协作改 UI 的漏改成本。
- **#13** [Trae 实战体验：一个会自己拿键盘的「AI 开发工程师」](https://juejin.cn/post/7700846756351459338)（Token燃烧实录，赞1/藏0/阅204）：Trae 上手对比 Copilot/Cursor/Claude Code：定位偏「会自己拿键盘的工程师」；讨论坑点与资产如何带走。
- **#15** [Obsidian安装使用教程：核心插件配置与图片自动上传、Claude Code插件实战](https://juejin.cn/post/7701269136323723299)（aiks_yuan，赞0/藏0/阅183）：Obsidian 1.14 配置路径：核心插件 + Templater/Advanced Tables/Excalidraw + 图床自动上传 + Claudian（Claude Code 侧栏）。

#### 收藏热榜

本槽无新增。

### 跨榜重复与去重说明

- 本轮新摘要 URL 数：9
- 因 `seen_urls` 跳过：111（只记数量，不展开）
- 同文多标签/双榜出现：无（本轮每条仅 1 个 appearance）

### 来源清单

- 快照日：2026-11-02（Asia/Shanghai）
- 页面：https://juejin.cn/hot/articles 、 https://juejin.cn/hot/collected-articles
- 抓取：`tools/juejin_hot_fetch.py` → `_staging_latest.json`

| 标签 | 榜单 | 标题 | 链接 |
| --- | --- | --- | --- |
| 后端 | 文章热榜 | MongoDB迁移之后，Spring Data 和 Hibernate 各自接哪类请求 | https://juejin.cn/post/7702759616728088611 |
| 后端 | 文章热榜 | 不收费、不加水印、数据归你：我做了个开源的在线简历工具 | https://juejin.cn/post/7701912747434754099 |
| 后端 | 文章热榜 | 如何审核 AI 生成的代码：一份可落地的 6 层检查清单 | https://juejin.cn/post/7701912747434999859 |
| 前端 | 文章热榜 | 双 Token 与前端使用 Crypto 公私钥鉴权换 Token，哪种方案更好？ | https://juejin.cn/post/7702402013539336242 |
| 人工智能 | 文章热榜 | 一人公司，单月收入近10万，我做了这三门生意（OPC系列-3） | https://juejin.cn/post/7702438435248160804 |
| 开发工具 | 文章热榜 | 我给自己造了一个桌面效率助手：剪贴板、截图提单、全盘文件搜索，全都塞进快捷键里 | https://juejin.cn/post/7702064982632824866 |
| 开发工具 | 文章热榜 | 从短剧App的bug看响应式编程在AI时代的优势 | https://juejin.cn/post/7702284306036998144 |
| 开发工具 | 文章热榜 | Trae 实战体验：一个会自己拿键盘的「AI 开发工程师」 | https://juejin.cn/post/7700846756351459338 |
| 开发工具 | 文章热榜 | Obsidian安装使用教程：核心插件配置与图片自动上传、Claude Code插件实战 | https://juejin.cn/post/7701269136323723299 |

## 2026-11-01

### 今日总览

**一句话结论**：今日增量 13 篇（skip seen 107），文章热榜覆盖后端/前端/人工智能/开发工具；收藏热榜仅前端图片压缩 1 篇新 URL。主线偏工具与 Agent 工程：Rspack 2.3、Markdown 编辑器底层、subagent 折叠主循环讨论、Epic+Claude/Codex、AI 安全测试工具盘点、本地优先 API 调试、开源 AI 剪辑。

| cat | board | new |
| --- | --- | --- |
| backend | hot | 3 |
| frontend | hot | 2 |
| ai | hot | 2 |
| freebie | hot | 5 |
| freebie | collect | 1 |

### 新增文章

| cat | board | rank | title | author |
| --- | --- | --- | --- | --- |
| backend | hot | 13 | [AI剪辑工具降低创作门槛](https://juejin.cn/post/7701652199176863778) | 馒头不想说话 |
| backend | hot | 14 | [LeetCode 21 合并两个有序链表：一道 Easy 题，凭什么刷掉一半候选人？](https://juejin.cn/post/7701559825634344996) | Rain的Java大神之路 |
| backend | hot | 15 | [为什么 2026 年了，我又写了一个 API 调试工具](https://juejin.cn/post/7700156802533834803) | 小奏技术 |
| frontend | hot | 11 | [Rspack 2.3 发布：联手 SWC 团队带来全新编译器](https://juejin.cn/post/7701932169296003082) | WebInfra |
| frontend | hot | 15 | [AI 时代一群人在卷笔记软件，我想先把 Markdown 编辑器的底层做好](https://juejin.cn/post/7701625236325154826) | king王一帅 |
| ai | hot | 14 | [别学 subagent 了，很可能要凉了。](https://juejin.cn/post/7702012705843232810) | cxuanAI |
| ai | hot | 15 | [Epic 摊牌了：Claude 和 Codex 在写 UE6 的代码，十年没修掉的 bug 被 AI 扫光](https://juejin.cn/post/7701637989949751315) | 深蓝AI |
| freebie | hot | 11 | [magpie：让薅到的 AI 羊毛物尽其用](https://juejin.cn/post/7701591870954094607) | KaneLogger |
| freebie | hot | 12 | [GitHub 日榜趋势速报 | 2026-10-28](https://juejin.cn/post/7701256742281887754) | miofly |
| freebie | hot | 13 | [2026年AI安全测试工具大全，14款大模型与Agent安全工具一次配齐](https://juejin.cn/post/7700359102766727178) | 狂师 |
| freebie | hot | 14 | [我开源了个免费的 Markdown 编辑器：Lumin](https://juejin.cn/post/7699888899713499177) | 杨白白_yangbaibai |
| freebie | hot | 15 | [GitHub 日榜趋势速报 | 2026-10-31](https://juejin.cn/post/7702409212484206618) | miofly |
| freebie | collect | 15 | [纯前端图片压缩怎么做？不用上传服务器，浏览器里跑完所有逻辑](https://juejin.cn/post/7669733200704798739) | 果然_ |

### 后端

#### 文章热榜

- **#13** [AI剪辑工具降低创作门槛](https://juejin.cn/post/7701652199176863778)（馒头不想说话）：# 会打字就能剪视频？国产开源AI剪辑工具，正在把创作门槛打下来 最近有条新闻挺有意思——外媒预测中国到2030年将在AI模型等领域领先。说实话，这种预测听听就好，但有一点是实打实的：国内AI工具的
- **#14** [LeetCode 21 合并两个有序链表：一道 Easy 题，凭什么刷掉一半候选人？](https://juejin.cn/post/7701559825634344996)（Rain的Java大神之路）：LeetCode21合并有序链表，看似Easy却很考验边界与指针功底。迭代哨兵O(1)空间，对比递归爆栈隐患，附带10个高频坑、面试官9连问，直通23题k路合并，秋招刷题必看｜算法198题系列持续更新
- **#15** [为什么 2026 年了，我又写了一个 API 调试工具](https://juejin.cn/post/7700156802533834803)（小奏技术）：起因：一次被迫登录 去年底的一个下午，我在调试一个网关接口，Postman 弹了个更新提示。更新完，它让我登录。我看着进度条装完的 300 多 MB 应用，突然意识到一件事：我只是想发一个 HTTP

#### 收藏热榜

- 无新增（本快照未见新 URL）

### 前端

#### 文章热榜

- **#11** [Rspack 2.3 发布：联手 SWC 团队带来全新编译器](https://juejin.cn/post/7701932169296003082)（WebInfra）：Rspack 2.3 现已发布！本次更新集成了 SWC Next 解析器，提升构建速度，降低内存占用和产物体积。同时推出实验性的新版缓存，支持为 loader 单独缓存转换结果。
- **#15** [AI 时代一群人在卷笔记软件，我想先把 Markdown 编辑器的底层做好](https://juejin.cn/post/7701625236325154826)（king王一帅）：大家都在卷 AI 编辑器，底层却还是那几个老问题：Markdown 来回转换会改写源码、所见即所得要塞两套编辑器、协同一来就丢内容。这篇对照十几款流行笔记软件的技术路线，讲清 Markdown 真正的限制，介绍源码优先的开源编辑器框架 MSFE。

#### 收藏热榜

- 无新增（本快照未见新 URL）

### 人工智能

#### 文章热榜

- **#14** [别学 subagent 了，很可能要凉了。](https://juejin.cn/post/7702012705843232810)（cxuanAI）：前两天，Claude 发了一篇文章叫《Building agents: When to fold subagents into your main agent loop》，意为《构建代理：何时把子代理
- **#15** [Epic 摊牌了：Claude 和 Codex 在写 UE6 的代码，十年没修掉的 bug 被 AI 扫光](https://juejin.cn/post/7701637989949751315)（深蓝AI）：一类缺陷，Epic 的工程师追了整整十年，没有清干净。换成 AI 工具上场，几个月就被扫掉了。 这不是宣传话术。Epic 开发副总裁 Marcus Wassmer 在回应媒体求证时亲口确认，像 Cla

#### 收藏热榜

- 无新增（本快照未见新 URL）

### 开发工具

#### 文章热榜

- **#11** [magpie：让薅到的 AI 羊毛物尽其用](https://juejin.cn/post/7701591870954094607)（KaneLogger）：手里有多个 AI 订阅和模型额度，怎么在编程时用起来？从接入供应商到配置路由组，再用意图规则把不同任务分给合适的模型。
- **#12** [GitHub 日榜趋势速报 | 2026-10-28](https://juejin.cn/post/7701256742281887754)（miofly）：GitHub 日榜 2026-10-28：hallmark、DeepTutor、ai-design-skills 等 20 个开源项目 24 小时 Star 增速领先，每日更新的开源趋势速报。
- **#13** [2026年AI安全测试工具大全，14款大模型与Agent安全工具一次配齐](https://juejin.cn/post/7700359102766727178)（狂师）：前面盘完接口、性能、APP、UI、安全五篇传统工具，群里果然有人来问，那 AI 呢，测大模型用什么，测 Agent 用什么。 问得正是时候。
- **#14** [我开源了个免费的 Markdown 编辑器：Lumin](https://juejin.cn/post/7699888899713499177)（杨白白_yangbaibai）：Lumin是一款基于Electron 39、Vue3与TypeScript开发的所见即所得Markdown编辑器，支持原位渲染、KaTeX公式、Mermaid流程图、CodeMirror6代码块等。
- **#15** [GitHub 日榜趋势速报 | 2026-10-31](https://juejin.cn/post/7702409212484206618)（miofly）：GitHub 日榜 2026-10-31：rea、jailbreaks、dsh-our-free-model 等 20 个开源项目 24 小时 Star 增速领先，每日更新的开源趋势速报。

#### 收藏热榜

- **#15** [纯前端图片压缩怎么做？不用上传服务器，浏览器里跑完所有逻辑](https://juejin.cn/post/7669733200704798739)（果然_）：纯前端图片压缩怎么做？不用上传服务器，浏览器里跑完所有逻辑 先说结论：浏览器能做，但要知道边界 很多人觉得图片压缩必须走服务端，其实不一定。浏览器端压缩有明显的优势： 隐私安全：图片不离开设备，不存在

### 跨榜重复与去重说明

- 按文章 URL 去重后新增 13 篇；部分文章仅出现在单一分类榜。
- listing_slots=120，detail_ok=13，detail_fail=0。

### 来源清单

- snap 2026-11-01 Asia/Shanghai；mode 拉取1 增量；boards 文章热榜+收藏热榜 × 后端/前端/人工智能/开发工具；top15
- 抓取脚本：tools/juejin_hot_fetch.py

| 标题 | URL |
| --- | --- |
| AI剪辑工具降低创作门槛 | https://juejin.cn/post/7701652199176863778 |
| LeetCode 21 合并两个有序链表：一道 Easy 题，凭什么刷掉一半候选人？ | https://juejin.cn/post/7701559825634344996 |
| 为什么 2026 年了，我又写了一个 API 调试工具 | https://juejin.cn/post/7700156802533834803 |
| Rspack 2.3 发布：联手 SWC 团队带来全新编译器 | https://juejin.cn/post/7701932169296003082 |
| AI 时代一群人在卷笔记软件，我想先把 Markdown 编辑器的底层做好 | https://juejin.cn/post/7701625236325154826 |
| 别学 subagent 了，很可能要凉了。 | https://juejin.cn/post/7702012705843232810 |
| Epic 摊牌了：Claude 和 Codex 在写 UE6 的代码，十年没修掉的 bug 被 AI 扫光 | https://juejin.cn/post/7701637989949751315 |
| magpie：让薅到的 AI 羊毛物尽其用 | https://juejin.cn/post/7701591870954094607 |
| GitHub 日榜趋势速报 | 2026-10-28 | https://juejin.cn/post/7701256742281887754 |
| 2026年AI安全测试工具大全，14款大模型与Agent安全工具一次配齐 | https://juejin.cn/post/7700359102766727178 |
| 我开源了个免费的 Markdown 编辑器：Lumin | https://juejin.cn/post/7699888899713499177 |
| GitHub 日榜趋势速报 | 2026-10-31 | https://juejin.cn/post/7702409212484206618 |
| 纯前端图片压缩怎么做？不用上传服务器，浏览器里跑完所有逻辑 | https://juejin.cn/post/7669733200704798739 |
