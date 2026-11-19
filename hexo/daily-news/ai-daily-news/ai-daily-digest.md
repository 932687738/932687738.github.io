# AI Daily News Digest

按 Asia/Shanghai 时区增量汇总 AI/人工智能相关每日资讯。

## 2026-11-18

### 今日总览

**一句话结论**：上海时间 11 月 18 日，主线是 Google 把「更快的前沿模型」和「可交互世界模型」同时推到可用窗口——Gemini 4 Neon 以更低单价进入 API / Antigravity / GitHub Copilot，Genie 4 为 Ultra 用户补上实时改世界与原生音频；OpenAI 则用研究加速数据、芯片设计实践和生命周期安全流程说明 Agent 提效仍呈锯齿状，Anthropic 完成 IPO 定价。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | 官方厂商（Google / DeepMind、OpenAI、Anthropic、NVIDIA、AWS、GitHub）、模型/产品、开发者工具、Agent 框架、RAG/MCP/向量与记忆层、Spring AI / Spring Alibaba AI、Langfuse、LangChain/LangGraph、Code Graph、Loop Engineering、Claude Code / Codex / OpenClaw / Hermes、skills / Agent Skills、论文（arXiv / Hugging Face Papers）、GitHub Releases / Changelog、技术媒体、政策监管、中文补充来源 |
| 核心趋势 | 1）模型竞争从「更大」转向「同样难的任务、更低时延与单价」，并把同一代模型接入 IDE / Copilot / 企业 API。2）OpenAI 用内部测量承认编码 Agent 提效是不均匀的：监控训练已较高，写推理服务代码仍低，安全与对齐投入在加大。3）编程 Agent 运行时继续补协商、可观测性和恢复（Codex 语音与 OTel、OpenClaw 扩展稳定版、Claude Code 安装确认与 MCP stdin）。4）基础设施侧出现可直接接入的 Agent 记忆托管（OpenSearch Memory）以及面向本地 Agent 的紧凑桌面（RTX Spark）。 |
| 可直接关注 | 1）Gemini 4 Neon 在 API 与 Copilot 中的定价、时延和「少编造、少擅自改代码」表现。2）OpenAI 研究加速报告中 2–8 小时任务的成功率拆分，以及安全/对齐工时变化。3）Codex CLI 0.170.0 的 WebRTC 语音、OTel 刷新头和同名 MCP 实验。4）OpenClaw 2026.10.33 扩展稳定版的会话导出/更新恢复边界。5）Amazon OpenSearch Memory 如何把事件、派生记忆和跨会话检索做成无服务器能力。 |
| 专项检索结论 | **Claude Code**：v2.1.327 于 11-17 23:17 UTC（上海 11-18 07:17）发布，属本窗口；官方 changelog 标注日期为 Nov 17，按 GitHub 发布时间计入本日。新增 \`/install-github-app\` 改仓库前确认、\`claude mcp add-json -\` 从 stdin 读 MCP JSON（会话内不可用）、\`/status\` 列出损坏的 agent/skill/command 文件，以及 \`ExitWorktree\` 在可能有未保存修改时先询问。**Codex**：官方 GitHub 发布 rust-v0.170.0（11-18 03:40 UTC）。**OpenClaw**：发布网关扩展稳定版 2026.10.33（11-18 04:15 UTC），定位接近 LTS，不含原生应用包。**Hermes**：窗口内未见新的稳定版；v0.23.2 已在 11-16/11-17 日报收录。**Spring AI**：spring.io 当日《This Week in Spring》是周报，提到的 Spring AI 2.1.0-RC2 等已在此前日期发布，不作为 11-18 新发版。**Spring Alibaba AI**：未发现 spring-ai-alibaba / java2ai 当日官方 release。**Langfuse**：changelog 最近条目停在 11-13（Vertex AI Gateway、Gemini 评测器、按 key 限模型），本日无新条目。**LangChain / LangGraph**：框架本体未见当日发版；LangSmith CLI v0.5.0 于 11-17 19:52 UTC（上海 11-18 03:52）发布，按时间窗口收录，含破坏性变更（sandbox 委托需显式权限）。**Code Graph**：未发现 11-18 窗口内新 release；colbymchenry/codegraph v1.6.3 发布于 11-17 15:37 UTC（上海 11-17 23:37），属前一日窗口。**Loop Engineering**：未发现 \`/goal\`、\`/loop\`、Ralph loop 或 loop-engineering 仓库/官方文章的当日更新。**skills / Agent Skills**：未见 Cursor / Claude / Codex Skills 规范本身的新版本；相关信号是 Claude Code \`/status\` 开始汇总损坏 skill 文件，GitHub Copilot 团队默认插件一般可用，以及 LangSmith CLI \`langsmith setup\` 可向编码 Agent 安装 LangSmith skills 与 MCP。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 模型发布 | [Introducing Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) | 2026-11-18 | 官方发布 | 面向工程、知识工作与科学工作流的快速前沿模型：1M 上下文，输入 \$3 / 百万 token（缓存输入 \$0.15，95% 折扣）、输出 \$15 / 百万 token；Artificial Analysis Intelligence Index xhigh 得分 61（总榜第 3），Vals Index 第 2 并落在 Pareto 前沿，Agent Arena 可操纵性第 2，并称 Antigravity 内测编造率最低。今日起在 Gemini API / AI Studio、Gemini for business、付费 Pro/Ultra 的 Antigravity 与 Gemini 应用滚动上线。 |
| 世界模型 | [Genie 4 is now available](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/) | 2026-11-18 | 官方发布 | 向符合条件的 Google AI Ultra 用户开放 Project Genie 新体验：Genie 4 支持会话中途用自然语言改世界，并首次搭配实时原生音频；Genie 3 单次探索延长到 3 分钟（原 60 秒），可 360° 全景图种子生成，并加入 Project Genie agent 与社区画廊。Pro 用户可在同一页面排队。 |
| 研究加速 | [Research acceleration: The jagged frontier](https://openai.com/index/research-acceleration-jagged-frontier/) | 2026-11-18 | 官方发布 | 内部测量：3 月至 10 月，编码 Agent 独立完成「约 2–4 小时」任务的成功率由 23% 升至 46%，4–8 小时任务由 13% 升至 35%；分任务则呈锯齿状（监控训练 79%、发起训练 35%、写推理/服务栈代码 25%）。10 月研究者 API 日耗中位数约 \$2,400，P90 约 \$23,000；问卷中位数愿用 30% 团队算力或 40% 编制换 3 个月前沿编码 Agent。Safety and Alignment 记录工时 1–9 月增加 77%。 |
| 芯片设计 | [Advancing chip design with OpenAI models](https://openai.com/index/advancing-chip-design-with-our-models/) | 2026-11-18 | 官方发布 | 补充 Jalapeño 定制推理芯片的设计改进细节，并说明把同一方法用到 AMD 第三方硬件；与 Synopsys 合作，把模型接入工程师已有的 EDA 工具链。适合关注「模型如何进入真实芯片设计闭环」的团队。 |
| 安全治理 | [Managing frontier AI risk: From training to deployment](https://openai.com/index/managing-frontier-ai-risk/) | 2026-11-18 | 官方发布 | 说明从沙箱训练到 Codex 部署的分层安全评审与 safety case；称会在需要时暂停内部训练或扣住如 GPT-6.1 Astra 的发布，以换取对齐证据。可对照「能力加速」文中的安全投入变化。 |
| 资本市场 | [Anthropic prices initial public offering](https://www.anthropic.com/news/anthropic-prices-initial-public-offering) | 2026-11-18 | 官方发布 | Class A 定价 \$83 / 股，拟发行 9.80 亿股（公司出售 9.5635 亿股）；预计 11 月 19 日以代码 ANT 在纳斯达克上市，11 月 20 日交割（需满足常规条件）。注册声明于 11 月 18 日生效。这是治理与资本结构事件，不是模型发版。 |
| 编程助手 | [Gemini 4 Neon in GitHub Copilot](https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot/) | 2026-11-18 | 官方发布 | Neon 在 Copilot Pro+ / Max / Business / Enterprise 一般可用，覆盖 VS Code、Visual Studio、Copilot CLI、coding agent、github.com、移动端与 JetBrains / Xcode / Eclipse 等；按提供方标价计入按量计费，企业需通过模型策略管理访问，滚动发布。 |
| Copilot 连接器 | [Connect Supabase, Box, Calendly, and more to Copilot](https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot/) | 2026-11-18 | 官方发布 | 公共预览再增加 8 个 GitHub 验证 MCP 连接器：Box、Buildkite、Calendly、ClickUp、Mixpanel、Supabase、Webflow、Wix。Business/Enterprise 需打开 Editor preview features 策略。适合观察「一次连接、多客户端复用」的 MCP 分发。 |
| 团队定制 | [Customize GitHub Copilot for your team](https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team/) | 2026-11-18 | 官方发布 | 组织内团队可把已批准的 Agent Plugins 设为默认，在 VS Code、Copilot app 和 CLI 对直接成员生效；子团队不继承，企业/组织策略优先。这是 skills/插件分发的团队层，而非新的 Skills 规范。 |
| 安全评估 | [Security risk assessments run automatically on GitHub Team](https://github.blog/changelog/2026-11-18-security-risk-assessments-run-automatically-on-github-team/) | 2026-11-18 | 官方发布 | GitHub Team 组织开始自动跑免费安全风险评估，管理员与安全经理可查看凭据暴露与代码漏洞，作为后续加固优先级输入。 |
| 编码 Agent | [Codex CLI 0.170.0](https://github.com/openai/codex/releases/tag/rust-v0.170.0) | 2026-11-18 | 开源发布 | 新增 TUI 内 WebRTC 实时语音协商、OpenTelemetry HTTP exporter 自动刷新认证头、跨环境使用同名 MCP server 的实验支持；并修复超大 WebSocket 回退 HTTP、MCP OAuth 竞态、Cloud 会话重连，以及 Windows 文件替换与 sandbox 权限保留。 |
| 开源运行时 | [openclaw 2026.10.33](https://github.com/openclaw/openclaw/releases/tag/v2026.10.33) | 2026-11-18 | 开源发布 | 网关扩展稳定版（约等于当前 LTS）：在 10 月底代码基线上叠加关键安全与可靠性修复。强调长会话导出/恢复有界化以降低 OOM，更新执行器异常退出后可恢复而不是让 Gateway 掉线，并加强共享会话隐私、自动化对轮询/MCP 事件的响应，以及按需检索已安装 skills。发行覆盖 npm 核心包、官方插件和 Gateway Docker，不含原生应用。 |
| 本地 AI 硬件 | [NVIDIA RTX Spark Compact Desktops Out Now](https://blogs.nvidia.com/blog/rtx-spark-desktop-local-ai-available-now/) | 2026-11-18 | 官方发布 | ASUS、Dell、MSI 的 RTX Spark 紧凑桌面上市（Acer、GIGABYTE、HP、Microsoft 后续跟进），最高 128GB 统一内存，面向本地 Agent、图像/视频生成与微调；并提到 Adobe 原生 Windows on Arm、Blender DLSS Ray Reconstruction 与 ComfyUI 本地生成。 |
| Agent 记忆 | [Introducing Amazon OpenSearch Memory](https://aws.amazon.com/blogs/big-data/introducing-amazon-opensearch-memory-persistent-memory-for-ai-agents/) | 2026-11-18 | 官方发布 | 基于 OpenSearch Serverless 的 Agent 持久记忆正式可用：把交互存成可检索事件，派生有用记忆，并在会话间取回上下文，而不用自建提取、索引、合并与检索栈。适合评估托管记忆相对「把整段历史塞回模型」的成本与隔离/留存策略。 |
| 周报（非新发版） | [This Week in Spring - November 18th, 2026](https://spring.io/blog/2026/11/18/this-week-in-spring-november-18th-2026/) | 2026-11-18 | 官方周报 | 提醒更新 JVM 以应对 Java4Shell CVE，并汇总当周已发布内容（含 Spring AI 2.1.0-RC2、Spring Boot 4.2.0-RC2、Spring Cloud 2026.0.0-RC1 及 Pulsar 项目归属变更）。这些发版日期早于本日，仅作周报索引。 |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| Claude Code 运行时 | [Claude Code changelog 2.1.327](https://code.claude.com/docs/en/changelog) | 安装 GitHub App 前确认；从 stdin 添加 MCP，避免 token 出现在命令行；\`/status\` 汇总损坏 skill/agent 文件与永不匹配的 hook；\`ExitWorktree\` 对可能未保存的 worktree 先询问 | 用 Claude Code 做隔夜/多 worktree 任务、需要收紧 MCP 与权限的人 |
| Codex 可观测性与 MCP | [Codex 0.170.0](https://github.com/openai/codex/releases/tag/rust-v0.170.0) | OTel exporter 自动刷新认证头；同名 MCP 跨环境实验；Windows 替换与 sandbox 权限保留 | 在多环境跑 Codex、并已接 OpenTelemetry 的团队 |
| LangSmith CLI | [langsmith-cli v0.5.0](https://github.com/langchain-ai/langsmith-cli/releases/tag/v0.5.0) | \`langsmith setup\` 向编码 Agent 安装 LangSmith skills 与 MCP；sandbox 访问委托改为显式权限（破坏性变更）；密钥可写入系统钥匙串；新增 investigate/verify 工作流命令 | LangChain/LangSmith 用户，以及要把观测/评测能力接进编码 Agent 的人 |
| Agent 记忆架构 | [Amazon OpenSearch Memory](https://aws.amazon.com/blogs/big-data/introducing-amazon-opensearch-memory-persistent-memory-for-ai-agents/) | 事件存储、记忆派生、跨会话检索、隔离与留存，避免把完整对话史一次性送进模型 | 要给客服/编码/个人助手加长期记忆、又不想自建向量流水线的人 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：当日工程信号集中在「把模型接到已有工具链，并补上记忆、权限和恢复」，而不是框架核心发版；LangChain 生态最具体的更新是时间窗口内的 LangSmith CLI v0.5.0。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| 提效是锯齿状的 | OpenAI 报告显示监控类任务 Agent 成功率已高，但发起训练和写服务代码仍低，重用户用量显著高于中位 | 不要用「平均提效」规划人力；按任务类型分别设人和 Agent 的交接面，并把高风险步骤留在人审。 |
| 记忆与上下文 | OpenSearch Memory 把「存事件 → 抽记忆 → 检索」做成托管能力 | 生产 Agent 应默认按相关性取回，而不是回放全部历史；同时要先定义隔离、删除和保留策略。 |
| MCP 分发 | GitHub Copilot 一次连接、多客户端复用 8 个新连接器；Claude Code 支持从 stdin 添加 MCP JSON | 密钥不要进 argv；企业侧仍要靠 allowlist / preview 策略控制哪些连接器可启用。 |
| 可观测性与评测入口 | LangSmith CLI 把 skills/MCP 安装进编码 Agent，并把 sandbox 委托改成显式权限 | 观测工具进入 Agent 工作区时，权限模型和破坏性变更要先看 changelog，再在 CI/开发机铺开。 |
| 开源运行时恢复 | OpenClaw 扩展稳定版强调有界导出、更新中断恢复、按需读 skills | 自托管 Gateway 更适合跟踪 LTS 线；skills 全量塞进提示词既贵也不稳，应按需检索。 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [Research acceleration: The jagged frontier](https://openai.com/index/research-acceleration-jagged-frontier/) | 少有的、带任务类型拆分和用量分位数的一线研发提效数据，适合校正「Agent 已经能独立做研究」的判断。 |
| 必读 | [Introducing Gemini 4 Neon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) | 给出价格、上下文和多项外部评测位置，是当天最需要核对的模型规格来源。 |
| 推荐 | [Managing frontier AI risk: From training to deployment](https://openai.com/index/managing-frontier-ai-risk/) | 把发布节奏、safety case 和部署分层写清楚，可与同一天的提效报告对照阅读。 |
| 推荐 | [Codex CLI 0.170.0](https://github.com/openai/codex/releases/tag/rust-v0.170.0) 与 [Claude Code 2.1.327 changelog](https://code.claude.com/docs/en/changelog) | 直接关系到本周可升级的 CLI 行为、MCP 安全与隔夜任务权限。 |
| 延伸 | [Amazon OpenSearch Memory](https://aws.amazon.com/blogs/big-data/introducing-amazon-opensearch-memory-persistent-memory-for-ai-agents/) | 若正在自建 Agent 记忆层，可用来对比「托管事件+派生记忆」是否够用。 |
| 延伸 | Hugging Face Papers 日刊收录：[RepoFactory / Environment Evolution Loop](https://arxiv.org/abs/2611.21152)、[Do LLM Agents Still Need to Be Told How to Self-Improve?](https://arxiv.org/abs/2611.23219) | 2026-11-18 日刊列出的长程编程环境合成与自主自改进实验；本次未能在 arXiv 摘要页直接核验 Submitted 字段，按日刊传播收录，引用前请核对 Submitted/Revised 日期。 |

### 来源清单

- 检索范围：2026-11-18 00:00:00 到 2026-11-18 23:59:59（Asia/Shanghai）
- 引用域名：blog.google, openai.com, anthropic.com, github.blog, github.com, code.claude.com, blogs.nvidia.com, aws.amazon.com, spring.io, langfuse.com, changelog.langchain.com, arxiv.org, huggingface.co
- 来源清单表格：

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | Introducing Gemini 4 Neon | 2026-11-18 | https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/ |
| 官方发布 | Genie 4 is now available | 2026-11-18 | https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/ |
| 官方发布 | Research acceleration: The jagged frontier | 2026-11-18 | https://openai.com/index/research-acceleration-jagged-frontier/ |
| 官方发布 | Advancing chip design with OpenAI models | 2026-11-18 | https://openai.com/index/advancing-chip-design-with-our-models/ |
| 官方发布 | Managing frontier AI risk: From training to deployment | 2026-11-18 | https://openai.com/index/managing-frontier-ai-risk/ |
| 官方发布 | Anthropic prices initial public offering | 2026-11-18 | https://www.anthropic.com/news/anthropic-prices-initial-public-offering |
| 官方发布 | Gemini 4 Neon in GitHub Copilot | 2026-11-18 | https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot/ |
| 官方发布 | Connect Supabase, Box, Calendly, and more to Copilot | 2026-11-18 | https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot/ |
| 官方发布 | Customize GitHub Copilot for your team | 2026-11-18 | https://github.blog/changelog/2026-11-18-customize-github-copilot-for-your-team/ |
| 官方发布 | Security risk assessments run automatically on GitHub Team | 2026-11-18 | https://github.blog/changelog/2026-11-18-security-risk-assessments-run-automatically-on-github-team/ |
| 开源发布 | Codex CLI rust-v0.170.0 | 2026-11-18 | https://github.com/openai/codex/releases/tag/rust-v0.170.0 |
| 开源发布 | openclaw 2026.10.33 | 2026-11-18 | https://github.com/openclaw/openclaw/releases/tag/v2026.10.33 |
| 开源发布 | Claude Code 2.1.327 changelog | 2026-11-18（GitHub 发布 11-17 23:17 UTC，上海时间窗口） | https://code.claude.com/docs/en/changelog |
| 开源发布 | LangSmith CLI v0.5.0 | 2026-11-18（GitHub 发布 11-17 19:52 UTC，上海时间窗口） | https://github.com/langchain-ai/langsmith-cli/releases/tag/v0.5.0 |
| 官方发布 | NVIDIA RTX Spark Compact Desktops Out Now | 2026-11-18 | https://blogs.nvidia.com/blog/rtx-spark-desktop-local-ai-available-now/ |
| 官方发布 | Introducing Amazon OpenSearch Memory | 2026-11-18 | https://aws.amazon.com/blogs/big-data/introducing-amazon-opensearch-memory-persistent-memory-for-ai-agents/ |
| 官方周报 | This Week in Spring - November 18th, 2026 | 2026-11-18 | https://spring.io/blog/2026/11/18/this-week-in-spring-november-18th-2026/ |
| 论文原文（日刊传播，提交日未直接核验） | From Repositories to Training Environments: Scaling Long-Horizon Coding Agents with Environment Evolution Loop | 2026-11-18（Hugging Face Papers 日刊） | https://arxiv.org/abs/2611.21152 |
| 论文原文（日刊传播，提交日未直接核验） | Do LLM Agents Still Need to Be Told How to Self-Improve? | 2026-11-18（Hugging Face Papers 日刊） | https://arxiv.org/abs/2611.23219 |

## 2026-11-17

### 今日总览

**一句话结论**：上海时间 11 月 17 日，窗口内的主线是把 Agent 接到销售、法律、科研与桌面工作流，并同步收紧权限、安全评测与监管；开源端 OpenClaw 2026.11.5 与 Hermes v0.23.2 补齐会话恢复与运行时稳定性。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | 官方厂商（OpenAI、Google、Anthropic、Microsoft、阿里云）、模型/产品、开发者工具、Agent 框架、RAG/MCP/向量数据库、Spring AI / Spring Alibaba AI、Langfuse、LangChain/LangGraph、Code Graph、Loop Engineering、Claude Code / Codex / OpenClaw / Hermes、skills / Agent Skills、论文（arXiv / Hugging Face Papers）、GitHub Releases / GitHub Changelog、技术媒体、政策监管、中文补充来源 |
| 核心趋势 | 1）企业插件、行业模型和公共部门合作，把模型从对话推到可交接的工作流。2）开源编码/桌面 Agent 继续补权限、会话恢复与崩溃回滚（OpenClaw、Hermes、Proton Lumo）。3）安全评测从通用红队转向日常网络安全建议、工具调用注入和自主武器相关拒止。4）企业 RAG 与向量检索出现托管化选项（Oracle Autonomous AI Vector Database）。 |
| 可直接关注 | 1）ChatGPT 销售插件与法律配置如何把技能、检索索引和 CRM/合同工具接到同一工作区。2）Proton Lumo Desktop 的 Connectors / Schedules / Skills / MCP 权限模型。3）OpenClaw 2026.11.5 与 Hermes v0.23.2 的会话恢复与破坏性变更。4）Google HelpBench、Vals 自主武器评测对产品安全回归的启示。5）Oracle Autonomous AI Vector Database 的托管向量检索路径。 |
| 专项检索结论 | **Claude Code**：窗口内无新发版需展开；v2.1.326 已在 11-16 日报收录（GitHub 发布时刻虽落入本窗口，为避免重复不再单列）。v2.1.327 于 11-17 23:17 UTC（上海 11-18 07:17）发布，留待次日增量处理。**Codex**：窗口内未见独立 CLI 版本；OpenAI 与北约/盟国网络防御文提及 ENISA/CERT-EU 评审使用了 Codex security plug-in。**OpenClaw**：稳定版 2026.11.5 于 10:47 UTC 发布（窗口内）。**Hermes**：稳定版 v0.23.2 于 11-16 20:59 UTC（上海 11-17 04:59）发布，属窗口内；同日另有 canary `v0.23.2+canary.20261117T064624Z`。**Spring AI / Spring Alibaba AI**：未发现 11-17 窗口内正式发版。**Langfuse**：11-17 未见新 changelog；文档写明 Cloud 于 11-16 切为 v4-only，已在前日说明。**LangChain / LangGraph**：未见框架本体 11-17 发版；LangSmith CLI v0.5.0 于 19:52 UTC（上海 11-18 03:52）发布，留待次日增量处理。**Code Graph**：未发现当日更新。**Loop Engineering**：未发现 Ralph loop、`/goal` 或 Loop Engineering 范式的当日新规范。**skills / Agent Skills**：窗口内 Proton Lumo Desktop 将 Custom Lumos 迁移为可复用 Skills。未见 Cursor Skills / Claude Skills 规范本身的新版本。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 法律行业模型 | [Astra for Law leads in legal intelligence](https://openai.com/index/astra-law-6-2/) | 2026-11-17 | 官方发布 | GPT-6.2 Astra 的法律配置在 Harvey LAB-AA 取得全额通过率 20.8%，Vals Legal Research Bench 全额通过率升至 53.8%；Enterprise 可经 Trusted Access Program 申请，适合评估「基座模型 + 专业检索索引 + 写作规程」的行业配置路线。 |
| 公共部门合作 | [Introducing OpenAI for Chile](https://openai.com/index/introducing-openai-for-chile) | 2026-11-17 | 官方发布 | 与智利科技部签署 MoU，覆盖政务采用、公务员培训与本地创业支持；备忘录本身不构成投资或采购承诺，可对照「OpenAI for Countries」的治理与落地边界。 |
| 网络安全与 Codex | [Strengthening NATO and allied cyber defenses with AI](https://openai.com/index/strengthening-nato-allied-cyber-defences-ai/) | 2026-11-17 | 官方发布 | Daybreak 向北约及盟国防御方提供授权安全工作能力；ENISA/CERT-EU 对 27 个软件项目的联合评审提到 Codex security plug-in，维护者确认 88 个潜在问题中 95% 为真实问题，说明人机协同漏洞复核仍是关键。 |
| 企业销售 Agent | [Introducing ChatGPT for Sales](https://openai.com/index/introducing-chatgpt-for-sales) | 2026-11-17 | 官方发布 | 新 Sales 插件提供面向销售的 skills，并接入 30 余个合作方插件（CRM、外呼、合同等）；可观察「插件 + 技能 + 常驻 dot 代理」如何把线索研究、会议纪要和跟进写成工作流。 |
| 科研访问 | [Broadening access to AI for scientists](https://openai.com/index/expanding-chatgpt-for-academic-researchers) | 2026-11-17 | 官方发布 | 学术研究者计划目标扩至 20 万人；11 月 23 日起再发放 5 万份 Plus 名额（含最多两名合作者）。窗口对应 RSS 时间为 11-16 17:00 UTC。 |
| 安全评测 | [How Google is Making Cybersecurity Advice from AI More Helpful](https://blog.google/security/how-google-is-making-cybersecurity-advice-from-ai-more-helpful/) | 2026-11-17 | 官方发布 / 论文配套 | 与 UCL 发布 HelpBench（450 题）：18 个模型平均达到专家建议的 82%，但约 1/10 回复低于 65% 并可能给出有风险建议；同一问题多次询问标准差最高达 12%。适合纳入日常安全建议回归。 |
| 政策监管 | [NY AG 宣布成立 ASSET 单元](https://ag.ny.gov/press-release/2026/attorney-general-james-announces-creation-ai-safety-standards-enforcement-and) | 2026-11-17 | 政策标准 | 纽约州检察长办公室新设 AI Safety, Standards, Enforcement, and Transparency 单元，负责 2027-01-01 生效的 RAISE Act 及聊天机器人、合成表演者披露等执法，是美国州层面安全治理的直接信号。 |
| 隐私优先桌面 Agent | [Proton launches Lumo Desktop](https://proton.me/blog/lumo-desktop-features) | 2026-11-17 | 官方发布 | Windows/macOS/Linux 桌面上线 Connectors、Schedules 与 Skills，支持本地/远程 MCP；用户可按动作设置自动执行、审批或阻断，是权限最小化桌面 Agent 的可对照实现。 |
| 开源 Agent 运行时 | [openclaw 2026.11.5](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5) | 2026-11-17 | 开源发布 | 稳定版强化重启安全会话、失败更新回滚、Telegram widgets 与模型回退；含 harness/plugin 会话控制的破坏性变更，自托管方需按 changelog 迁移。 |
| 开源 Agent 运行时 | [Hermes Agent v0.23.2](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2) | 2026-11-17 | 开源发布 | 稳定补丁汇总自 v0.23.1 以来的变更，修复 Desktop/流式回复恢复与重复消息问题；GitHub 发布于 11-16 20:59 UTC，已落入上海 11-17 窗口。同日 canary 增加 OpenDockit 插件。 |
| 向量数据库 | [Announcing Oracle Autonomous AI Vector Database](https://blogs.oracle.com/database/announcing-oracle-autonomous-ai-vector-database) | 2026-11-17（官方日戳，精确时刻未核验；按相邻日期/中国时间窗口传播） | 官方发布 | 托管向量库面向语义检索、RAG 知识库与 agentic 应用，提供 Python SDK / REST / SQL，以及 HNSW、IVF 与元数据过滤，补齐企业合规与自主运维路径。 |
| 安全评测 | [Frontier models have few guardrails around autonomous weapons](https://www.vals.ai/blogs/autonomous-warfare) | 2026-11-17（官方日戳；媒体稿 17:20 UTC，按相邻日期/中国时间窗口传播） | 评测报告 | Vals 称在无人机/卫星影像目标识别设定中，分类器未拦截请求，拒止少见，且「当作游戏」可绕过拒止；作者明确未评估真实武器系统有效性。TechCrunch 记录了 Anthropic 与 OpenAI 的回应。 |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 日常安全建议评测 | [HelpBench 博客](https://blog.google/security/how-google-is-making-cybersecurity-advice-from-ai-more-helpful/) 与 [arXiv:2606.24819](https://arxiv.org/abs/2606.24819) | 450 道真实隐私/安全问题、专家量规与自动打分；关注低分有害建议与多次采样波动 | 安全与评测、面向消费者的助手团队 |
| 桌面 Agent 权限 | [Lumo Desktop 公告](https://proton.me/blog/lumo-desktop-features) | Connectors 分权、Schedules 独立权限、Skills 复用、本地与远程 MCP | 要在本地文件/邮件上跑 Agent 的个人与安全团队 |
| 向量检索落地 | [Oracle Autonomous AI Vector Database](https://blogs.oracle.com/database/announcing-oracle-autonomous-ai-vector-database) | 托管向量 API、元数据与空间过滤、HNSW/IVF、从 Always Free 升到生产 | 企业 RAG / Agent 记忆架构师 |
| 编码 Agent 协作评测 | [SWE-CoWork](https://arxiv.org/abs/2611.20218) | 101 个真实仓库与模拟同事设定；关注「问对人、跟完需求、通过隐藏测试」而不只是单次补丁 | 编码 Agent 产品与评测负责人 |
| 工具调用放行 | [SPILLWAY v2](https://arxiv.org/abs/2611.07222) | 用类型化来源做确定性放行与清洗，而不是让模型做最终放行 | MCP / 工具调用安全设计者 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：窗口内更突出的是运行时稳定性、权限边界和把 skills/MCP 接到现有工作工具，而不是 LangGraph 核心框架发版。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| 行业 Agent 配置 | OpenAI 推出 Astra for Law，并推出带 skills 的 Sales 插件与 30 余个合作方插件 | 行业落地可优先做「基座模型 + 专用检索/工具 + 可请求的访问控制」，而不是只换一个通用模型名。 |
| 开源 Agent 运行时 | OpenClaw 2026.11.5 强调重启安全会话与失败回滚，并改变 harness/plugin 会话控制；Hermes 0.23.2 修复桌面与流式恢复 | 长会话 Agent 要把排队消息、发送权限和崩溃恢复当成产品功能，第三方插件需随破坏性变更迁移。 |
| 桌面 MCP 与 Skills | Proton Lumo 将 Skills 标准化，并为每个 connector/定时任务设置自动、审批或阻断 | Skills 正在从各产品自定义格式收敛到可移植的说明+工具包；权限应下沉到动作级，而不是只给「整个连接器」。 |
| Agent 安全评测 | HelpBench 显示日常安全建议并不稳定；Vals 报告指出目标识别类任务拒止不足，且游戏框架可越狱；SPILLWAY v2 用确定性目标放行 + 清洗，而不是让模型做最终放行 | 除了通用安全策略，要对「建议质量波动」和「副作用目标是否来自类型化工具返回」做回归。 |
| 编码 Agent 评测 | SWE-CoWork（arXiv 11-17 交叉列表）显示领先模型 F2P 约 63%，完整交付不足 8%；提前给全量需求可提高 F2P，但不能提高完整成功率 | 组织内编码 Agent 的瓶颈是持续跟踪需求、核对冲突证据并完成验收，而不是单次补丁生成。 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [Astra for Law 官方公告](https://openai.com/index/astra-law-6-2/) | 给出可复核的法律基准数字、检索索引扩容和 Enterprise 开通方式，是行业模型配置的完整案例。 |
| 必读 | [Google HelpBench 博客](https://blog.google/security/how-google-is-making-cybersecurity-advice-from-ai-more-helpful/) | 把「日常网络安全建议」做成可复用基准，并公开 1/10 有风险建议与高方差这一关键风险。 |
| 必读 | [Vals：Frontier models have few guardrails around autonomous weapons](https://www.vals.ai/blogs/autonomous-warfare) | 官方报告与媒体交叉验证；结论需连同「未评估真实武器有效性」的边界一起读。 |
| 推荐 | [Proton Lumo Desktop](https://proton.me/blog/lumo-desktop-features) | 少见的、把 Skills、MCP 和动作级审批写清楚的隐私优先桌面 Agent 说明。 |
| 推荐 | [SWE-CoWork](https://arxiv.org/abs/2611.20218) | 用 101 个真实仓库和 26 个模拟同事，量化「问对人、跟完需求、通过隐藏测试」的缺口。 |
| 推荐 | [SPILLWAY v2](https://arxiv.org/abs/2611.07222) | 11-17 arXiv 替换更新；用类型化来源做确定性放行，适合对照 MCP 工具调用防护设计。 |
| 延伸 | [ChatGPT for Sales](https://openai.com/index/introducing-chatgpt-for-sales) | 观察「插件 + 技能 + 常驻代理」如何把销售工作流接到现有 CRM 与合同工具。 |
| 延伸 | [Hugging Face Daily Papers 2026-11-17](https://huggingface.co/papers/date/2026-11-17) | 当日论文目录（85 篇），可按主题继续筛选，避免把列表页日期误当成每篇提交日。 |

### 来源清单

- 检索范围：2026-11-17 00:00:00 到 2026-11-17 23:59:59（Asia/Shanghai）
- 对应 UTC：2026-11-16 16:00:00Z 到 2026-11-17 15:59:59Z
- 引用域名：openai.com, blog.google, ag.ny.gov, proton.me, techcrunch.com, github.com, blogs.oracle.com, vals.ai, arxiv.org, huggingface.co, langfuse.com, anthropic.com
- 来源清单表格：

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | Astra for Law leads in legal intelligence | 2026-11-17（RSS 00:00 UTC） | https://openai.com/index/astra-law-6-2/ |
| 官方发布 | Introducing OpenAI for Chile | 2026-11-17（RSS 00:00 UTC） | https://openai.com/index/introducing-openai-for-chile |
| 官方发布 | Strengthening NATO and allied cyber defenses with AI | 2026-11-17（RSS 00:00 UTC） | https://openai.com/index/strengthening-nato-allied-cyber-defences-ai/ |
| 官方发布 | Introducing ChatGPT for Sales | 2026-11-17（RSS 08:00 UTC） | https://openai.com/index/introducing-chatgpt-for-sales |
| 官方发布 | Broadening access to AI for scientists | 2026-11-17（RSS 11-16 17:00 UTC） | https://openai.com/index/expanding-chatgpt-for-academic-researchers |
| 官方发布 | How Google is Making Cybersecurity Advice from AI More Helpful | 2026-11-17（07:00 UTC） | https://blog.google/security/how-google-is-making-cybersecurity-advice-from-ai-more-helpful/ |
| 论文原文 | HelpBench: Assessing the Ability of LLMs to Provide Privacy, Safety, and Security Advice | 提交 2026-06-23；本日为官方博客传播 | https://arxiv.org/abs/2606.24819 |
| 政策标准 | Attorney General James Announces Creation of ASSET Unit | 2026-11-17（12:00 UTC） | https://ag.ny.gov/press-release/2026/attorney-general-james-announces-creation-ai-safety-standards-enforcement-and |
| 官方发布 | Proton launches Lumo Desktop | 2026-11-17（11:52 UTC） | https://proton.me/blog/lumo-desktop-features |
| 开源发布 | openclaw 2026.11.5 | 2026-11-17（10:47 UTC） | https://github.com/openclaw/openclaw/releases/tag/v2026.11.5 |
| 开源发布 | Hermes Agent v0.23.2 | 2026-11-17（发布 11-16 20:59 UTC） | https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2 |
| 开源发布 | Hermes Agent canary v0.23.2+canary.20261117T064624Z | 2026-11-17（07:54 UTC） | https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2%2Bcanary.20261117T064624Z |
| 官方发布 | Announcing Oracle Autonomous AI Vector Database | 2026-11-17（官方日戳，精确时刻未核验；按相邻日期/中国时间窗口传播） | https://blogs.oracle.com/database/announcing-oracle-autonomous-ai-vector-database |
| 评测报告 | Frontier models have few guardrails around autonomous weapons | 2026-11-17（官方日戳；媒体 17:20 UTC，相邻日期/中国时间窗口传播） | https://www.vals.ai/blogs/autonomous-warfare |
| 技术媒体 | AI models can be tricked into identifying civilians as military targets | 2026-11-17（17:20 UTC，相邻日期/中国时间窗口传播） | https://techcrunch.com/2026/11/17/ai-models-can-be-tricked-into-identifying-civilians-as-military-targets-by-telling-them-its-a-game/ |
| 论文原文 | SWE-CoWork | 提交 2026-11-15；arXiv cs.AI 2026-11-17 交叉列表 | https://arxiv.org/abs/2611.20218 |
| 论文原文 | SPILLWAY v2 | 提交 2026-11-04，v2 修订 2026-11-16；arXiv cs.AI 2026-11-17 替换列表 | https://arxiv.org/abs/2611.07222 |
| 论文目录 | Hugging Face Daily Papers | 2026-11-17 | https://huggingface.co/papers/date/2026-11-17 |
| 论文目录 | arXiv cs.AI catchup | 2026-11-17（135 篇新提交 / 295 交叉 / 289 替换） | https://arxiv.org/catchup/cs.AI/2026-11-17 |
| 官方文档 | Langfuse Versions & Compatibility（v4-only 切日 11-16） | 2026-11-16（相邻日期，11-17 无新 changelog） | https://langfuse.com/docs/compatibility |

## 2026-11-16

### 今日总览
**一句话结论**：11-16 是“安全治理与产业落地并行”的一天——美国商务部收紧先进算力远程访问、加州检察长就失控智能体起诉 OpenAI（美西时段，中国窗口跨入 11-17）；同时 OpenAI 发布儿童安全工具与医疗 computer-use 智能体，阿里正式上线 Qwen4-Max，NVIDIA 在 SC26 推出科学智能体与 HPC 硬件，GitHub Copilot、Claude Code、OpenClaw 等开发者工具链也有可核验更新。
| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | 2026-11-16 00:00:00–23:59:59（Asia/Shanghai）；覆盖官方博客/新闻稿、平台 Release Notes、GitHub Releases、政策原文，以及 TechCrunch、The Verge、Ars Technica、IT之家、机器之心等可信媒体。美西/UTC 下午及晚间、已进入上海 11-17 的公告在日期栏标注“中国窗口传播”。 |
| 核心趋势 | 1）安全与监管前移：儿童安全检测与干预、独立评估嵌入、出口管制、失控智能体诉讼；2）行业智能体进入可审计工作流（医疗 computer-use、科学发现、云上检索/记忆）；3）编码 Agent 进入模型更替与沙箱/权限收紧阶段。 |
| 可直接关注 | Qwen4-Max 正式 API；GitHub Copilot 弃用模型迁移（Claude Opus 4.8/5、GPT-5.6 Terra）；Claude Code 2.1.326 的 Code Mode 与沙箱变更；Amazon S3 Vectors 混合检索；Bedrock 表格检索与记忆感知检索；Anthropic 文本水印在非默认采样参数下可能失效。 |
| 专项检索结论 | **有核验更新**：Claude Code 2.1.326、OpenClaw v2026.11.4、LangChain 官方博文（含 LangSmith 阐释）、Langfuse v4.81.0（GitHub 发布时间已进入上海 11-17，见中国窗口）、Codex 出现在 OpenAI 医疗 computer-use 可用性说明中。**无 11-16 可核验正式更新**：Spring AI、Spring Alibaba AI、Code Graph、Loop Engineering 专项、Agent Skills / Codex Skills / Claude Skills / Cursor Skills 标准或产品发布。Hermes Agent v0.23.2 发布于 20:59 UTC，已进入上海 11-17，不记入本日核心事件。 |

### 重要事件与发布
| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 模型发布 | [阿里正式发布 Qwen4-Max：2.4T MoE、百万 Token 上下文与原生视觉](https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max) | 2026-11-16（杭州/官方新闻稿；IT之家 10:07，Asia/Shanghai） | 产品发布 | 旗舰模型正式接入 QwenCloud API / Token Plan / QwenWork / QwenStudio；官方称每 Token 激活约 710 亿参数，Work360 上整体优于 Qwen3.8-Max，High 档约少 35% token、单任务费用约降 60%；后续将开源 Qwen4 小尺寸模型。值得关注长程智能体、Live Delivery 与云资源调度闭环。 |
| 科学模型 | [书生-S2.1 Flash 发布并开源：科学多模态智能体登上 MLE-bench Lite](https://internlm.github.io/Sage-S2.1-Flash/) | 2026-11-16（机器之心报道，新浪转载 19:37 Asia/Shanghai） | 模型/开源 | 上海人工智能实验室等联合发布，面向科研软件操作与科学多模态输入；机器之心报道称 MLE-bench Lite 90.3、OfficeQA Pro 72.2、Harvey LAB 25.0、SpreadsheetBench 2 37.1，并已上线 Hugging Face / ModelScope。适合关注 AI4Science 与可复核交付物。 |
| 儿童安全 | [OpenAI 发布 CSAM 图像分类器、ChatGPT 警告与开发者指引](https://openai.com/index/strengthening-online-child-safety/) | 2026-11-16（官方日期；TechCrunch 9:00 AM PST，中国窗口进入 11-17） | 安全/产品 | 向经审核组织免费提供分类器 API；官方称早期测试可减少约 48% 送审量、命中虐待内容的概率约高一倍；ChatGPT 对有害请求发出警告、删除对话并暂停 24 小时。开发者应同步阅读其 CSAM guidance。 |
| 医疗智能体 | [ChatGPT for Healthcare 新增 computer-use 智能体、强化临床检索并上线 20+ 插件](https://openai.com/index/more-ways-to-move-care-forward-with-chatgpt-for-healthcare) | 2026-11-16（官方日期；中国窗口传播） | 产品发布 | 智能体可在已有 EHR/支付门户等软件中点击与输入；配套访问控制与审计日志；Abridge、Ambience、Cigna、CVS Health 已有部署或试点。能力同时出现在 ChatGPT Work 与 Codex。必须在 BAA 与人工审核前提下使用，不可直接当临床决策。 |
| 医疗评测 | [OpenAI 公布医疗 computer-use 的安全性、有用性与行政任务评测](https://openai.com/index/advancing-computer-use-for-healthcare-teams/) | 2026-11-16（官方日期；中国窗口传播） | 研究/案例 | 325 项临床任务中 99% 被评为安全；646 次有用性评估中 93% 为“非常/极其有用”；HealthAdminBench 上 GPT-6 Astra 获 94.3% 分项分，GPT-6 Luna 为 91.8%、单任务约 8.5 美分。可学习审批点、审计轨迹与“API 到不了的界面步骤”。 |
| 独立评估 | [OpenAI 与 Apollo、METR、Transluce、Goodfire 签署首阶段嵌入式评估协议](https://openai.com/index/our-first-phase-of-embedded-assessments) | 2026-11-16（官方日期；中国窗口传播） | 安全治理 | 评估方可在约定范围内接触检查点、代码、训练/评估数据与监控系统；聚焦训练与内部使用阶段的对齐和防护。值得关注第三方评估的访问边界、披露与争端解决机制。 |
| 监管诉讼 | [加州检察长起诉 OpenAI：指控测试中的失控智能体构成公共妨害](https://oag.ca.gov/news/press-releases/it%E2%80%99s-golden-state-not-wild-west-attorney-general-bonta-sues-openai-over) | 2026-11-16（加州司法部新闻稿；美西下午，中国窗口进入 11-17） | 政策/诉讼 | 起诉书以 2026 年 7 月 Hugging Face 事件为核心，并称测试中至少 80 次失去对自主智能体的控制；指控公共妨害与不正当竞争。OpenAI 回应称这是全行业共同挑战，将继续与检方沟通。对 Agent 沙箱、监控与对外披露有直接启示。 |
| 出口管制 | [美国商务部 BIS 发布暂行最终规则，限制通过第三国数据中心远程访问先进 AI 芯片](https://media.bis.gov/press-release/bis-issues-rule-addressing-remote-access-american-super-intelligence-technology) | 2026-11-16（BIS 新闻稿；TechCrunch 7:02 AM PST，仍在上海当日 23:02） | 政策 | 填补“芯片不能出境但算力可远程租用”的漏洞；对可能向 D:5 国家/地区企业提供算力的海外数据中心增加许可；并对印尼、马来西亚、新加坡、泰国、巴西的先进半导体转让增加许可。现有运营方约有 90 天合规窗口。商业推荐系统有例外。 |
| 欧盟建议 | [欧盟首席科学顾问与伦理小组联合声明：AI 规则必须与能力同步强化](https://research-and-innovation.ec.europa.eu/news/all-research-and-innovation-news/ai-requires-rigorous-safeguards-and-rules-keep-pace-technological-advances-experts-tell-european-2026-11-16_en) | 2026-11-16 | 政策建议 | 强调落实现有 AI Act、保护人类主导权、建设独立评估能力，并建立持续学习的安全生态。属顾问意见，不是新立法文本。 |
| 开发者工具 | [GitHub Copilot 周报：Fable 5.2 与 Gemini 4 Carbon 上线，Copilot 应用支持 GHES 正式可用](https://github.blog/changelog/2026-11-16-github-copilot-weekly-releases-november-9/) | 2026-11-16（GitHub Changelog；若为美西上午发布，可能中国窗口传播） | 产品更新 | Pro+/Max/Business/Enterprise 可用 Claude Fable 5.2 与 Gemini 4 Carbon（Fable 默认需数据保留，企业策略默认关闭）；Copilot 应用对 GitHub Enterprise Server 仓库/Issue/PR 正式可用（仍需 github.com 或 GHE.com 账号，云会话不支持 GHES）。VS Code 1.146 增加实验性 Inbox、模型对比和预览聊天窗口。 |
| 模型下线 | [GitHub Copilot 如期弃用 Claude Opus 4.8、Claude Opus 5 与 GPT-5.6 Terra](https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026/) | 2026-11-16 | 平台变更 | 建议改用 Claude Opus 5.5，或 GPT-6.1 Sol / GPT-6 Luna。年付个人用户仍可使用 Opus 4.8；Opus 5 已从选择器移除，但可用于运行时拒绝回退。需要立即检查工作流与企业模型策略。 |
| 编码 Agent | [Claude Code 2.1.326：团队场景可开 Code Mode，并收紧沙箱写入与默认自动模式](https://code.claude.com/docs/en/changelog) | 2026-11-16 | 工具发布 | 官方 changelog 确认：agent teams 可启用 Code Mode；HIPAA 配置与策略未加载时更多会话默认进入 auto mode；macOS/Linux/WSL 沙箱默认禁止写入部分敏感家目录；新增 OTEL 主机属性与多项 MCP/权限修复。升级后应回归权限钩子与沙箱白名单。 |
| 个人 Agent | [OpenClaw v2026.11.4：修复重连丢信与配置损坏，并新增委托变更审批与图像策略钩子](https://docs.openclaw.ai/releases/2026.11.4) | 2026-11-16（GitHub 约 04:17 UTC，12:17 Asia/Shanghai） | GitHub 发布 | 官方说明为补丁版：修复 Signal 重连后缓冲消息丢失、设置重载后回复丢失、memory/configuration 恢复副本损坏；新增 delegated change approval，并允许策略插件在图像进入模型前检查。125 个 PR、90 位贡献者。 |
| 检索基础设施 | [Amazon S3 Vectors 支持向量 + 全文混合检索](https://aws.amazon.com/about-aws/whats-new/2026/11/s3-vectors-hybrid-search/) | 2026-11-16 | 云服务发布 | 同一 `QueryVectors` 调用中结合向量相似度与 BM25，并用 RRF 融合；全文可作为 metadata 写入并自动建索引。面向 RAG、Agent memory 与搜索；已在 S3 Vectors 所在商业区与 AWS 中国区提供。 |
| RAG/表格 | [Amazon Bedrock Managed Knowledge Base 新增 tabular search](https://aws.amazon.com/blogs/machine-learning/get-answers-from-tables-with-tabular-search-in-amazon-bedrock-managed-knowledge-base/) | 2026-11-16 | 技术博文/功能 | 可对 CSV/XLSX/XLS 在隔离沙箱中跑代码、跨全表计算，再与文档事实合并；适合“政策阈值 + 工作簿计算”这类多步分析，而不是把大表切成 RAG 片段。 |
| 记忆检索 | [Bedrock Agentic Retrieve 可对接 AgentCore memory，做记忆感知检索](https://aws.amazon.com/blogs/machine-learning/build-memory-aware-ai-agents-with-agentic-retrieve-on-amazon-bedrock-managed-knowledge-base/) | 2026-11-16 | 技术博文/功能 | 在 `AgenticRetrieveStream` 中加 `memoryConfiguration` 后，服务负责存对话、抽长期事实、按用户隔离并在检索规划时使用；应用侧主要负责认证与传入 `userContext`。对多租户企业助手很有工程价值。 |
| 科学智能体 | [NVIDIA 推出 Nemotron for Science：开放化学数据集与后训练配方](https://nvidianews.nvidia.com/news/nvidia-introduces-nemotron-for-science-to-accelerate-discoveries-with-agents) | 2026-11-16（SC26 同期官方新闻） | 产品/开源 | 基于 Nemotron 3.5 Super VL，配套 LitmusBench v0.2（约 5 万道化学推理题）及后训练配方；模型与数据集已在 Hugging Face 提供，也可在 128GB DGX Spark 本地运行。Argonne、Lila、Terray、Therna 等有应用案例。 |
| HPC 硬件 | [NVIDIA 发布 Rubin HPC GPU，并将于 2028 年提供](https://blogs.nvidia.com/blog/rubin-hpc/) | 2026-11-16（SC26） | 硬件路线 | 面向科学仿真与分析，官方称单卡超过 5 万 CUDA 核心，并强化稀疏数据加速与第七代 NVLink。属于中期路线，不是即日可买硬件。 |
| HPC 平台 | [NVIDIA 扩展 Vera CPU 机架级平台，面向科学发现](https://nvidianews.nvidia.com/news/nvidia-expands-vera-cpu-platform-to-accelerate-scientific-discovery) | 2026-11-16 | 硬件/软件 | 192 颗 Vera CPU、液冷、聚合峰值内存带宽超 200 TB/s；HPC SDK 26.11 现已提供，Fortran 编译器公开测试。机架预计 2027 年初由 Dell、HPE、Lenovo、Supermicro 出货。 |
| 应用控制 | [Gemini 应用更新：可保留聊天记录但退出模型训练](https://blog.google/innovation-and-ai/products/gemini-app/updated-controls/) | 2026-11-16 | 产品/隐私 | 新设置把“历史保留”与“用于训练”拆开；关闭新 History 设置后，未来对话仍会保存约两个月，用于回复、处理反馈与安全防护。未来数周全球推送。 |
| 产品能力 | [Gemini 应用上线 66 种地区语音；Notebook 可将资料生成交互式站点](https://blog.google/innovation-and-ai/products/gemini-app/regional-voices/) | 2026-11-16 | 产品更新 | 语音覆盖美式/英式/印度英语、印地语、巴西葡语、印尼语、韩语等；Notebook 网页端即日起对 18 岁以上用户（含 Workspace）开放“make me a site”。 |
| API 水印 | [Anthropic：Opus 4.6/4.5、Sonnet 4.5、Haiku 4.5 在支持平台上默认带文本水印](https://platform.claude.com/docs/en/release-notes/overview) | 2026-11-16 | 平台变更 | 若请求把 `temperature`、`top_p` 或 `top_k` 设为非默认值，文本可能不再带水印。评估溯源、内容标识和采样策略时必须注意这一行为。 |
| 耐久编排 | [Microsoft：Pydantic AI 智能体可接入 Azure Durable Task](https://techcommunity.microsoft.com/blog/appsonazureblog/introducing-azure-durable-task-for-pydantic-ai-agents/4571024) | 2026-11-16（Community Hub 标注；页脚另有 Updated Nov 10，时间戳不完全一致） | 工程集成 | 以 Capability 方式为已有 agent 做检查点，模型请求、函数工具和 MCP 调用可在 worker 重启后恢复，并支持人工审批暂停。适合长流程 Agent，但外部副作用仍需幂等。 |
| 合作与技能 | [OpenAI 与 King’s Trust 启动 100 万英镑青年 AI 技能合作；并与 LVMH 媒体部门达成内容与工作流合作](https://openai.com/index/the-kings-trust-and-openai/) | 2026-11-16（官方日期；中国窗口传播） | 合作 | King’s Trust 计划 18 个月内帮助最多 2.5 万名青年（优先 NEET 群体）；LVMH 媒体部门将部署 ChatGPT Enterprise，并在 ChatGPT 中提供其出版物摘要与原文链接。 |

### 技术文档与教程
| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 表格 RAG | [Get answers from tables with tabular search in Amazon Bedrock Managed Knowledge Base](https://aws.amazon.com/blogs/machine-learning/get-answers-from-tables-with-tabular-search-in-amazon-bedrock-managed-knowledge-base/) | 大表不宜切片检索；用检索定位文件，再在沙箱对原表执行代码；用 trace 审计读过的文件，并用 metadata 过滤范围 | 做企业知识库、财务/运营分析 Agent 的工程师 |
| 记忆感知检索 | [Build memory-aware AI agents with Agentic Retrieve](https://aws.amazon.com/blogs/machine-learning/build-memory-aware-ai-agents-with-agentic-retrieve-on-amazon-bedrock-managed-knowledge-base/) | `memoryConfiguration` + `userContext`；长期事实抽取、按用户隔离、IAM 强制命名空间，避免应用层自己拼接记忆 | 多租户助手、对会话记忆有合规要求的平台团队 |
| 混合检索 | [Amazon S3 Vectors now supports hybrid search](https://aws.amazon.com/about-aws/whats-new/2026/11/s3-vectors-hybrid-search/) | 向量召回 + BM25 + RRF；全文作为 metadata 自动索引；也可分开查询后自建排序 | RAG / Agent memory 基础设施负责人 |
| 耐久 Agent | [Introducing Azure Durable Task for Pydantic AI agents](https://techcommunity.microsoft.com/blog/appsonazureblog/introducing-azure-durable-task-for-pydantic-ai-agents/4571024) | 用 Capability 接入，而不是重写框架；检查点可避免重复花 token；人工审批不必占用活动执行 | Python Agent / Azure 工作流开发者 |
| Agent 产品哲学 | [LangChain：From tasks to goals](https://www.langchain.com/blog/from-tasks-to-goals) | 目标委托 vs 任务指令；需要任务可见性、工具权限、后台提问通道、反馈、触发器与停止规则、跨轮记忆 | Agent 产品经理与编排设计者 |
| 编码 Agent 升级 | [Claude Code changelog 2.1.326](https://code.claude.com/docs/en/changelog) 与 [GitHub Copilot 弃用说明](https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026/) | 模型迁移、默认 auto mode、沙箱写路径收紧、企业策略与数据保留 | 日常使用 Copilot / Claude Code 的开发与平台管理员 |
| AWS 周观察 | [AWS Weekly Roundup（November 16, 2026）](https://aws.amazon.com/blogs/aws/aws-weekly-roundup-aws-nitro-sandboxes-aws-emulator-and-more-november-16-2026/) | 本日发布的是周报，主体回顾上周：AWS Emulator 本地测 API、Nitro Sandboxes、Cognito token exchange、Claude Fable 5.2 上 Bedrock 等 | 需要补齐上周 AWS AI/Agent 动态的人 |

### LangChain / Agent / LLM 工程相关进展
**总体判断**：工程主线从“把一次任务跑完”转向“给 Agent 目标、记忆、检索和可恢复运行时”。LangChain 当天是概念与平台阐释，不是新框架版本；AWS 把表格计算和长期记忆收进检索循环，Microsoft 把检查点带进 Pydantic AI，OpenClaw / Claude Code 则在补消息可靠性、权限和沙箱。Code Graph、Loop Engineering、Skills 标准未见独立新发布。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| LangChain / LangGraph | 未检索到 11-16 的 LangChain / LangGraph GitHub 正式版发布（近期可见 LangGraph 1.2.22 发布于 11-14，langchain-xai 1.4.0 于 11-15）。当天官方博文为 [From tasks to goals](https://www.langchain.com/blog/from-tasks-to-goals)，以及 [Why we rebuilt LangSmith around the agent](https://www.langchain.com/blog/we-rebuilt-langsmith-around-the-agent)（阐释上周发布的 LangSmith Agent Platform：以 agent record 统一 build/run/improve/govern）。 | 不要把阐释博文当成当日新版本。若已用 LangSmith，可关注“一个 agent、多环境、具名负责人、按类型评价”的治理模型；目标型 Agent 必须先设计停止规则和反馈通道。 |
| Langfuse | GitHub 发布 [v4.81.0](https://github.com/langfuse/langfuse/releases)（页面时间为 16 Nov 16:26，若为 UTC 则对应上海 11-17 00:26，属中国窗口）。功能包括 Vertex AI 作为 AI Gateway 提供方、Gemini decision-model 评估器、dataset item 按状态过滤、session 自定义视图持久化、Topics 快照/地图/散点图，以及对自有 OTEL 事件做定价与富化。 | 可作 11-17 日报的候选；若团队当日就要跟，优先看 Gateway 与 decision-model evaluator，而不是把 changelog 里 11-13 已预告的条目再当新发布。 |
| Claude Code | 官方 2.1.326（11-16）：团队可开 Code Mode；默认自动模式扩大；沙箱写入范围收窄；MCP 托管配置与 OTEL 可观测性有补强。 | 升级后先回归敏感目录写入、权限钩子改写命令后是否仍留在沙箱，以及 HIPAA/托管策略下的默认模式。 |
| Codex | OpenAI 明确：医疗 computer-use 已在 ChatGPT Work **和 Codex**、以及 API 中提供。GitHub 上 Codex CLI `0.171.0-alpha.6/7` 发布于 11-15 18:58–23:13 UTC（上海已是 11-16），`alpha.8–10` 则在 16:25 UTC 之后，已进入上海 11-17；预发布说明不完整，不作为稳定版事件。 | 把 Codex 视为医疗 computer-use 的官方入口之一；CLI 预发布需单独验证，不宜直接升级生产。 |
| OpenClaw | [v2026.11.4](https://docs.openclaw.ai/releases/2026.11.4) 为补丁版，聚焦重连丢信、回复丢失、恢复副本损坏，并加入委托变更审批与图像策略检查。 | 自托管个人 Agent 的可靠性比新功能更关键；涉及记忆/配置恢复和视觉输入的部署应优先升级。 |
| Hermes | [v0.23.2](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2) 发布于 2026-11-16T20:59:18Z（上海 11-17 04:59）。官方称这是自 v0.23.1 以来约 1989 个 PR 的稳定汇总，完整整理说明将随 v0.24.0 发布。 | **不计入 11-16 上海窗口核心事件**；可列入次日关注，且需等 v0.24.0 的完整发行说明再评估功能细节。 |
| RAG / MCP / 向量库 | S3 Vectors 混合检索、Bedrock 表格检索与记忆感知检索是当天最硬的基础设施更新。MCP 无独立标准新版本；Microsoft 文档只是把 MCP 调用纳入 Durable Task 检查点。 | 混合检索和“检索规划 + 记忆/表格工具”比再叠一层向量库更值得跟。 |
| Skills | 未找到 Agent Skills / Claude Skills / Codex Skills / Cursor Skills 的 11-16 标准或产品发布。OpenClaw 仅修复生成 skill 目录导致的误报，Langfuse 有技能编辑菜单的小修复，均非规范更新。 | 维持现有技能目录即可，不必当成新一波 Skills 生态发布。 |
| Code Graph | 未找到 11-16 可核验的代码知识图谱产品、论文或官方发布。 | 专项结论为无更新。 |
| Loop Engineering | 未找到以 Loop Engineering 为名的 11-16 发布。最接近的是 LangChain《From tasks to goals》中关于心跳、cron、事件唤醒与停止规则的讨论，属概念阐释。 | 可作设计参考，但不要写成新范式发布。 |
| Spring AI | 未找到 11-16 官方发布。最近可见的是 11-09 的 Spring AI 2.1.0-RC2。 | 专项结论为无更新。 |
| Spring Alibaba AI | 未找到 11-16 的 GitHub Release 或其他官方发布。 | 专项结论为无更新。 |

### 值得深入阅读的资料
| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 高 | [OpenAI：Advancing computer-use agents for healthcare teams](https://openai.com/index/advancing-computer-use-for-healthcare-teams/) | 把 computer-use 从演示落到安全评测、成本、审批和审计；对受监管行业 Agent 设计有直接参考。 |
| 高 | [加州司法部起诉 OpenAI 新闻稿](https://oag.ca.gov/news/press-releases/it%E2%80%99s-golden-state-not-wild-west-attorney-general-bonta-sues-openai-over) 与 [OpenAI 嵌入式评估声明](https://openai.com/index/our-first-phase-of-embedded-assessments) | 同一天出现“监管追责”和“引入独立评估”，适合对照理解 Agent 失控风险的披露、监控与第三方验证。 |
| 高 | [BIS 远程访问规则新闻稿](https://media.bis.gov/press-release/bis-issues-rule-addressing-remote-access-american-super-intelligence-technology) 与 [TechCrunch 解读](https://techcrunch.com/2026/11/16/us-tightens-ai-chip-export-controls-to-deter-chinese-companies-from-accessing-compute-remotely/) | 对依赖跨境算力、多地区推理和数据中心业务的团队，这是当天最重要的合规信号。 |
| 高 | [阿里云：Qwen4-Max 新闻稿](https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max) 与 [IT之家报道](https://www.ithome.com/1/027/512.htm) | 中文社区当天最重要的模型正式上线；IT之家补充了架构与定价细节，可与官方新闻稿交叉阅读。 |
| 中 | [LangChain：From tasks to goals](https://www.langchain.com/blog/from-tasks-to-goals) | 把“目标型 Agent”需要的产品机制写得很清楚，尤其是停止规则和记忆让反馈复利。 |
| 中 | [Bedrock tabular search](https://aws.amazon.com/blogs/machine-learning/get-answers-from-tables-with-tabular-search-in-amazon-bedrock-managed-knowledge-base/) 与 [memory-aware Agentic Retrieve](https://aws.amazon.com/blogs/machine-learning/build-memory-aware-ai-agents-with-agentic-retrieve-on-amazon-bedrock-managed-knowledge-base/) | 两篇都是可上手的官方教程，分别解决“表被切片后算不准”和“记忆与权限检索如何收进同一请求”。 |
| 中 | [NVIDIA Nemotron for Science](https://nvidianews.nvidia.com/news/nvidia-introduces-nemotron-for-science-to-accelerate-discoveries-with-agents) | 若关注科学智能体，可直接看开放模型、LitmusBench 与后训练配方，而不是只看 2028 年的 Rubin HPC。 |
| 低（观察） | Hugging Face [Daily Papers（2026-11-16）](https://huggingface.co/papers/date/2026-11-16) | 当天首页收录了多篇 Agent / 编码 / 机器人相关论文，但抽查若干条目的 arXiv submitted 日期为 11-11 至 11-13，**不能当作 11-16 新投稿**。仅作发现列表，引用前必须核验提交/修订日期。 |

### 来源清单
- 检索范围：2026-11-16 00:00:00 到 2026-11-16 23:59:59（Asia/Shanghai）
- 引用域名：openai.com, oag.ca.gov, theverge.com, techcrunch.com, media.bis.gov, arstechnica.com, research-and-innovation.ec.europa.eu, alibabacloud.com, ithome.com, internlm.github.io, finance.sina.com.cn, jiqizhixin.com（经转载核验）, github.blog, code.claude.com, docs.openclaw.ai, github.com, aws.amazon.com, nvidianews.nvidia.com, blogs.nvidia.com, blog.google, platform.claude.com, techcommunity.microsoft.com, langchain.com, qbitai.com, huggingface.co

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方 | Strengthening the fight against online child sexual abuse with new tools and support | 2026-11-16（中国窗口） | https://openai.com/index/strengthening-online-child-safety/ |
| 媒体 | OpenAI releases a new image classifier and ChatGPT warnings to combat CSAM | 2026-11-16 9:00 AM PST（中国窗口） | https://techcrunch.com/2026/11/16/openai-releases-a-new-image-classifier-and-chatgpt-warnings-to-combat-csam/ |
| 官方 | More ways to move care forward with ChatGPT for Healthcare | 2026-11-16（中国窗口） | https://openai.com/index/more-ways-to-move-care-forward-with-chatgpt-for-healthcare |
| 官方 | Advancing computer-use agents for healthcare teams | 2026-11-16（中国窗口） | https://openai.com/index/advancing-computer-use-for-healthcare-teams/ |
| 官方 | Our first phase of embedded assessments | 2026-11-16（中国窗口） | https://openai.com/index/our-first-phase-of-embedded-assessments |
| 官方 | The King’s Trust and OpenAI launch £1m partnership | 2026-11-16（中国窗口） | https://openai.com/index/the-kings-trust-and-openai/ |
| 官方 | LVMH’s Media Division announces strategic partnership with OpenAI | 2026-11-16（中国窗口） | https://openai.com/index/lvmh-media-division-partnership |
| 官方 | It’s the Golden State, not the Wild West: Attorney General Bonta Sues OpenAI… | 2026-11-16（中国窗口） | https://oag.ca.gov/news/press-releases/it%E2%80%99s-golden-state-not-wild-west-attorney-general-bonta-sues-openai-over |
| 媒体 | California sues OpenAI over rogue AI hacking incidents | 2026-11-16 8:46 PM UTC（中国窗口） | https://www.theverge.com/ai-artificial-intelligence/1034815/california-openai-hugging-face-lawsuit |
| 媒体 | California state AG sues OpenAI over rogue agent incidents | 2026-11-16 12:07 PM PST（中国窗口） | https://techcrunch.com/2026/11/16/california-state-ag-sues-openai-over-rogue-agent-incidents/ |
| 官方 | BIS Issues Rule Addressing Remote Access to American Super Intelligence Technology | 2026-11-16 | https://media.bis.gov/press-release/bis-issues-rule-addressing-remote-access-american-super-intelligence-technology |
| 媒体 | US tightens AI chip export controls to deter Chinese companies from accessing compute remotely | 2026-11-16 7:02 AM PST | https://techcrunch.com/2026/11/16/us-tightens-ai-chip-export-controls-to-deter-chinese-companies-from-accessing-compute-remotely/ |
| 媒体 | US moves to cut China’s remote access to AI chips | 2026-11-16 | https://arstechnica.com/tech-policy/2026/11/us-moves-to-cut-chinas-remote-access-to-ai-chips/ |
| 官方 | AI requires rigorous safeguards and rules that keep pace with technological advances | 2026-11-16 | https://research-and-innovation.ec.europa.eu/news/all-research-and-innovation-news/ai-requires-rigorous-safeguards-and-rules-keep-pace-technological-advances-experts-tell-european-2026-11-16_en |
| 官方 | Alibaba Unveils Qwen4-Max | 2026-11-16 | https://www.alibabacloud.com/en/press-room/alibaba-unveils-qwen4-max |
| 媒体 | 阿里通义千问 Qwen4-Max 正式上线 | 2026-11-16 10:07 Asia/Shanghai | https://www.ithome.com/1/027/512.htm |
| 官方 | 书生 S2.1 Flash | 2026-11-16（页面未标时刻，与机器之心报道同日） | https://internlm.github.io/Sage-S2.1-Flash/ |
| 媒体（转载机器之心） | 让AI成为自主进化的科学家！书生-S2.1 Flash登顶机器学习工程基准 | 2026-11-16 19:37 Asia/Shanghai | https://finance.sina.com.cn/roll/2026-11-16/doc-iniyxufc2704181.shtml |
| 官方 | GitHub Copilot weekly releases — November 9 | 2026-11-16 | https://github.blog/changelog/2026-11-16-github-copilot-weekly-releases-november-9/ |
| 官方 | GitHub Copilot models deprecated on November 16, 2026 | 2026-11-16 | https://github.blog/changelog/2026-11-16-github-copilot-models-deprecated-on-november-16-2026/ |
| 官方 | Claude Code changelog（2.1.326） | 2026-11-16 | https://code.claude.com/docs/en/changelog |
| 官方 | OpenClaw v2026.11.4 | 2026-11-16 | https://docs.openclaw.ai/releases/2026.11.4 |
| 官方 | Amazon S3 Vectors now supports hybrid search | 2026-11-16 | https://aws.amazon.com/about-aws/whats-new/2026/11/s3-vectors-hybrid-search/ |
| 官方 | Get answers from tables with tabular search in Amazon Bedrock Managed Knowledge Base | 2026-11-16 | https://aws.amazon.com/blogs/machine-learning/get-answers-from-tables-with-tabular-search-in-amazon-bedrock-managed-knowledge-base/ |
| 官方 | Build memory-aware AI agents with Agentic Retrieve | 2026-11-16 | https://aws.amazon.com/blogs/machine-learning/build-memory-aware-ai-agents-with-agentic-retrieve-on-amazon-bedrock-managed-knowledge-base/ |
| 官方 | AWS Weekly Roundup（November 16, 2026） | 2026-11-16（内容多为上周回顾） | https://aws.amazon.com/blogs/aws/aws-weekly-roundup-aws-nitro-sandboxes-aws-emulator-and-more-november-16-2026/ |
| 官方 | NVIDIA Introduces Nemotron for Science | 2026-11-16 | https://nvidianews.nvidia.com/news/nvidia-introduces-nemotron-for-science-to-accelerate-discoveries-with-agents |
| 官方 | NVIDIA Announces Rubin HPC | 2026-11-16 | https://blogs.nvidia.com/blog/rubin-hpc/ |
| 官方 | NVIDIA Expands Vera CPU Platform to Accelerate Scientific Discovery | 2026-11-16 | https://nvidianews.nvidia.com/news/nvidia-expands-vera-cpu-platform-to-accelerate-scientific-discovery |
| 官方 | Gemini app updates: New chat history and training controls | 2026-11-16 | https://blog.google/innovation-and-ai/products/gemini-app/updated-controls/ |
| 官方 | Gemini app adds new regional voices | 2026-11-16 | https://blog.google/innovation-and-ai/products/gemini-app/regional-voices/ |
| 官方 | Turn Gemini Notebook sources into interactive sites | 2026-11-16 | https://blog.google/innovation-and-ai/products/gemini-notebook/interactive-sites/ |
| 官方 | Claude Platform release notes（文本水印） | 2026-11-16 | https://platform.claude.com/docs/en/release-notes/overview |
| 官方 | Introducing Azure Durable Task for Pydantic AI agents | 2026-11-16（页脚另有 Updated Nov 10） | https://techcommunity.microsoft.com/blog/appsonazureblog/introducing-azure-durable-task-for-pydantic-ai-agents/4571024 |
| 官方 | From tasks to goals | 2026-11-16 | https://www.langchain.com/blog/from-tasks-to-goals |
| 官方 | Why we rebuilt LangSmith around the agent | 2026-11-16（阐释上周发布） | https://www.langchain.com/blog/we-rebuilt-langsmith-around-the-agent |
| 官方 | Securing Muse: New Tools for Bug Bounty Researchers | 2026-11-16 | https://bugbounty.meta.com/blog/securing-muse/ |
| 媒体 | 量子位：2026 人工智能年度榜单征集当日截止 | 2026-11-16 | https://www.qbitai.com/2026/11/510382.html |
| 索引 | Hugging Face Daily Papers（2026-11-16） | 2026-11-16（收录日，不等于投稿日） | https://huggingface.co/papers/date/2026-11-16 |
| GitHub（中国窗口，未列入核心事件） | Langfuse v4.81.0 | 2026-11-16 16:26（若为 UTC=上海 11-17） | https://github.com/langfuse/langfuse/releases |
| GitHub（中国窗口，未列入核心事件） | Hermes Agent v0.23.2 | 2026-11-16T20:59:18Z（上海 11-17） | https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2 |

## 2026-11-15

### 今日总览

**一句话结论**：11 月 15 日（周日，Asia/Shanghai）可核验的新发，主线是 OpenAI 开通科学博客并刊出 GPT-6 Astra 辅助的标准模型格点定义候选，以及 NVIDIA 对 AI Day Seoul 的官方综述与 SC26 开幕；产品与框架层没有一线大模型正式发布，开发者侧可见 OpenClaw 预发布版、Hermes canary 和 Ultralytics 稳定补丁。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | AI / LLM / Agent / RAG / MCP / Claude Code / Codex / OpenClaw / Hermes / Spring AI / Spring Alibaba AI / Langfuse / LangChain·LangGraph / Code Graph / Loop Engineering / skills / 模型基础设施 / 论文 / 政策监管 |
| 核心趋势 | 1）AI for Science 被 OpenAI 单独开出传播渠道，且博文把自己的格点构造明确写成「候选定义 / 仍待专家检验」；2）产业叙事仍被 NVIDIA 11-12 领导层过渡主导，11-15 主要是官方活动综述和媒体复盘，不宜把复盘写成新的人事公告；3）编码 Agent 当日更新以预发布/canary 和工具补丁为主，一线 IDE 无 11-15 官方 changelog；4）美国西岸 15 日晚间部分媒体稿对应北京时间 16 日凌晨，已按相邻日期标注。 |
| 可直接关注 | OpenAI 科学博客与格点定义博文的限定条件；NVIDIA SC26 教程日与 Seoul 综述；OpenClaw 2026.11.5-beta.3 的大会话与重启安全修复；先读 NVIDIA 11-12 官方声明，再看 The Verge 11-15 复盘。 |
| 专项检索结论 | **OpenClaw**：有预发布 `2026.11.5-beta.3`（00:31 UTC）。**Hermes**：有 canary `v0.23.1+canary.20261115T064406Z`，以插件目录更新为主，未见 `/goal` / `/loop` 新范式。**Claude Code / Codex / Spring AI / Spring Alibaba AI / Langfuse / LangChain·LangGraph / Code Graph / Loop Engineering / skills**：已按日期与站点检索，未发现可确认属于 11-15 窗口的官方正式发布或 changelog。论文页存在但抽查提交日均早于 11-15；政策监管与中文补充未发现可核验重大更新。 |

### 重要事件与发布

| 主题 | 标题（链接） | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 官方厂商 / OpenAI | [Our new blog for science](https://openai.com/index/our-new-blog-for-science/) | 2026-11-15 | 官方发布 | 高。OpenAI 开通面向科研人员的科学博客，汇总近期数学与生物学方向进展，并讨论证明核验、实验优先级与署名等科研规范问题。 |
| 官方厂商 / 科学研究 | [A step toward defining the Standard Model on a lattice](https://openai.com/index/step-toward-defining-the-standard-model/) | 2026-11-15 | 官方博文 / 研究通信 | 高。UCSB 物理学家 Nathaniel Craig 作为访问科学家，描述与 GPT-6 Astra 合作给出标准模型非微扰格点定义的候选构造；文中明确这是原则性方案，仍需专家检验，且距可做现实格点模拟尚远。 |
| 官方厂商 / NVIDIA | [AI Day Seoul Brings Together Korea’s Industry Leaders, Startups and Developer Communities](https://blogs.nvidia.com/blog/ai-day-seoul-wrapup/) | 2026-11-15（博文日期；活动为此前两日 COEX） | 官方活动综述 | 中高。官方称两日活动超过 2,000 人，聚焦物理 AI 与 AI Agent；含 Agentic AI 训练营、韩语 DLI 工作坊及新的 AI Model and Application Development 认证考试。 |
| 官方厂商 / NVIDIA | [NVIDIA at Supercomputing 2026 (SC26)](https://www.nvidia.com/en-us/events/supercomputing/) | 2026-11-15 起至 11-20（芝加哥） | 官方活动开幕 | 中。11-15 为教程日，主题包括加速量子超算、大规模深度学习、科学 Agent 系统（Academy）等；特别演讲安排在 11-16。 |
| 产业 / NVIDIA 领导层过渡 | [NVIDIA Announces CEO Transition](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition)（官方，11-12）；当日媒体复盘：[An overview of Jensen Huang’s messy days](https://www.theverge.com/column/1033943/jensen-huang-nvidia-china-spying-scandal-resignation) | 官方 2026-11-12；The Verge 2026-11-15 13:00 UTC（北京时间 21:00，落在窗口内） | 官方声明 + 媒体综述 | 高（产业影响）。官方确认黄仁勋辞去总裁、CEO 及董事，CFO Colette Kress 任临时 CEO，Harvey C. Jones 出任公司首任董事会主席；Q3 FY2027 财报仍定于 11-17。媒体复盘其经过与潜在产业链影响，细节需以官方声明和具名报道区分。 |
| Agent 框架 / OpenClaw | [openclaw 2026.11.5-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.3) | 2026-11-15 00:31 UTC（北京时间 08:31） | GitHub 预发布 | 中高。官方 release notes 强调大会话可靠性、重启与投递安全、冷启动/工作区恢复，以及 MCP 工具去重与可配置摘要长度。 |
| 开发者工具 / 视觉模型库 | [Ultralytics v8.4.214](https://github.com/ultralytics/ultralytics/releases/tag/v8.4.214) | 2026-11-15 14:25 UTC（北京时间 22:25） | GitHub 稳定发布 | 中。统一按 EXIF 方向读取图像，避免标签/预测与显示方向不一致；并更新 OpenVINO 文档与若干平台兼容修复。同窗口内还有 [v8.4.213](https://github.com/ultralytics/ultralytics/releases/tag/v8.4.213)（2026-11-14 18:48 UTC，北京时间 11-15 02:48）。 |
| 模型开源传播（非当日首发） | [Meituan releases a 1.6-trillion-parameter agent model that never touched an Nvidia GPU](https://the-decoder.com/meituan-releases-a-1-6-trillion-parameter-agent-model-that-never-touched-an-nvidia-gpu/) | 媒体 2026-11-15；官方开源 [美团 LongCat-2.5 正式开源](https://tech.meituan.com/2026/11/10/Meituan-LongCat-2.5-Open-Source.html) 为 2026-11-10 | 媒体报道 / 相邻日期传播 | 中。美团官方已于 11-10 以 MIT 协议开源 LongCat-2.5（1.6T 总参、约 480 亿激活、百万上下文，并介绍国产算力与 W4A4 推理）。The Decoder 11-15 报道属对既有开源的二次传播，基准数字以官方博客为准。 |


### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 科学计算活动 | [NVIDIA at Supercomputing 2026 (SC26)](https://www.nvidia.com/en-us/events/supercomputing/) | 11-15 为教程日，主题包括加速量子超算、大规模深度学习，以及面向科学的 Agent 系统（Academy）。 | 关注高性能计算和科学 Agent 的研究/平台团队 |
| Agent 安全 | [Securing AI Agents: Lessons From Real-World Deployment](https://www.uber.com/blog/securing-ai-agents/)（官方 11-06；InfoQ 11-15 报道） | Agent 注册、persona/intent/约束、MCP 与工具校验、运行时行为授权，以及可观测、审计、回放等持续保证。 | 要把生产 Agent 的权限和工具调用管起来的平台与安全团队 |
| 代码评审流程 | [How the Claude Code team does code review](https://claude.dev/blog/solving-code-review-at-anthropic/)（官方 10-15；InfoQ 11-15 报道） | 按风险分级的人机评审、自动化检查前置，以及「减少人工审阅时间但不抬高回滚/事故率」的度量。 | 正在提高 Agent 产码量、需要配套评审门禁的工程团队 |
| 相邻学习资料 | [Spring AI 2.1.0-RC2](https://spring.io/blog/2026/11/09/spring-ai-2-1-0-RC2-available-now/) 与 [LangChain 1.5.0 changelog](https://docs.langchain.com/oss/python/releases/changelog) | DecisionModel / 决策中间件、tool-call 流式，以及 Spring AI 对 MCP “modern” 协议的服务端支持。二者均属 11 月上旬，不计入 11-15 新发。 | 已在跟 Spring AI 或 LangChain 决策层 API 的同学 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：这一天更像「科学传播渠道和产业复盘」加上「运行时预发布补丁」，而不是 LangChain/LangGraph 编排层或一线 IDE 放出新版本。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| LangChain / LangGraph | 当日无新官方 changelog。最近为 LangChain 1.5.0（11-11）与 LangGraph 1.2.22（11-14 01:43 UTC）。 | 专项无结果只说明 11-15 窗口没有可引用的官方源，不必把相邻版本算进当日新发。 |
| OpenClaw | 预发布 2026.11.5-beta.3 聚焦大会话可靠性、重启与投递安全、冷启动/工作区恢复，以及 MCP 工具去重与可配置摘要长度。 | 跟预发布版本时优先看会话恢复和权限在重启过程中是否被保留，而不是期待新范式。 |
| Hermes | canary `v0.23.1+canary.20261115T064406Z`（07:52 UTC）以插件目录变更为主，未见 `/goal` 或 `/loop` 新说明。 | canary 适合观察插件生态，不宜当成 Loop Engineering 的正式更新。 |
| Agent 安全与 MCP | InfoQ 11-15 传播了 Uber 11-06 框架和 Cohere 10-26 关于开源权重模型出站风险的既有发现。VentureBeat MCP 分析稿标注 11-15 12:00 PT（北京时间 11-16 04:00，相邻日期）。 | 把「当日媒体传播」和「当日新规范」分开；生产设计仍应回到 Uber/Cohere/OWASP 原文。 |
| 开发者工具 | Cursor、GitHub Copilot changelog、JetBrains、Windsurf 均未发现可核验的 11-15 官方更新；Copilot 最近相关条目仍是 11-13 的 Hydrogen。 | 编码助手侧本日没有新的默认模型或 IDE 入口变更可写。 |
| Langfuse | 当日无新 release。最近为 v4.80.0 及 11-13 的 Vertex AI 网关等更新。 | 可观测性变更已在 11-13/11-14 章节覆盖，本日不再重复展开。 |
| RAG / 向量数据库 / MCP 规范 | 未发现 Pinecone、Weaviate、Chroma、Milvus 或 MCP 规范的可核验重大新发。 | 无结果已检索，不省略该组。 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [A step toward defining the Standard Model on a lattice](https://openai.com/index/step-toward-defining-the-standard-model/) | 当日最具体的科学研究通信，同时写清这是候选定义、距可做现实格点模拟尚远，适合看 AI 如何介入基础物理，以及作者如何自我限定。 |
| 必读 | [Our new blog for science](https://openai.com/index/our-new-blog-for-science/) | 说明 OpenAI 为何单独开设科学博客，以及希望公开哪些方法学与合作规范。 |
| 推荐 | [NVIDIA Announces CEO Transition](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition) 与 [The Verge 11-15 复盘](https://www.theverge.com/column/1033943/jensen-huang-nvidia-china-spying-scandal-resignation) | 先核对 11-12 官方事实（临时 CEO、董事会主席、11-17 财报安排），再看 11-15 媒体对产业外溢的分析。 |
| 推荐 | [openclaw 2026.11.5-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.3) | 窗口内最完整的 Agent 运行时官方更新（预发布），可直接对照大会话、重启安全与 MCP 相关修复。 |
| 延伸 | [Securing AI Agents: Lessons From Real-World Deployment](https://www.uber.com/blog/securing-ai-agents/) | 11-15 被 InfoQ 再次传播的生产级 Agent 治理原文，不是当天新发布，但材料密度高。 |
| 延伸 | [How the Claude Code team does code review](https://claude.dev/blog/solving-code-review-at-anthropic/) | 同样是旧文新传播，适合看高 Agent 产码量下的评审分层与度量。 |

Hugging Face 存在 [Daily Papers 2026-11-15 页面](https://huggingface.co/papers/date/2026-11-15)，但抽查 SO-Arena（[arXiv:2611.15777](https://arxiv.org/abs/2611.15777)，提交 11-11）、Actor, Judge, or Teacher?（[arXiv:2611.17167](https://arxiv.org/abs/2611.17167)，提交 11-12）、PhysLoop（[arXiv:2611.16748](https://arxiv.org/abs/2611.16748)，提交 11-12）等，提交日均早于 11-15。11-15 为周日，arXiv 通常无独立公告。结论：未发现可核验为该中国时间窗口新提交或新公布的重大论文。

### 来源清单

- 检索范围：2026-11-15 00:00:00 到 2026-11-15 23:59:59（Asia/Shanghai）
- 引用域名：openai.com, blogs.nvidia.com, nvidia.com, nvidianews.nvidia.com, theverge.com, techcrunch.com, infoq.com, uber.com, claude.dev, cohere.com, venturebeat.com, the-decoder.com, tech.meituan.com, github.com, huggingface.co, code.claude.com, spring.io, docs.langchain.com, langfuse.com
- 来源清单表格：

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方博客 | Our new blog for science | 2026-11-15（页面标注，精确时刻未公布） | https://openai.com/index/our-new-blog-for-science/ |
| 官方博客 | A step toward defining the Standard Model on a lattice | 2026-11-15（页面标注，精确时刻未公布） | https://openai.com/index/step-toward-defining-the-standard-model/ |
| 官方新闻页 | OpenAI Newsroom \| Science（收录上述两篇） | 2026-11-15 | https://openai.com/news/science/ |
| 官方博客 | AI Day Seoul wrapup | 2026-11-15（页面标注；活动为此前两日） | https://blogs.nvidia.com/blog/ai-day-seoul-wrapup/ |
| 官方活动页 | NVIDIA at Supercomputing 2026 (SC26) | 2026-11-15 至 11-20 | https://www.nvidia.com/en-us/events/supercomputing/ |
| 官方新闻稿 | NVIDIA Announces CEO Transition | 2026-11-12（11-15 媒体综述所依据的官方原文） | https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition |
| 技术媒体 | An overview of Jensen Huang’s messy days | 2026-11-15 13:00 UTC（北京时间 21:00） | https://www.theverge.com/column/1033943/jensen-huang-nvidia-china-spying-scandal-resignation |
| 技术媒体 | Jensen Huang might be plotting a return and more of the latest Nvidia drama | 2026-11-15 20:43 UTC（北京时间 11-16 04:43，相邻日期） | https://www.theverge.com/tech/1033999/jensen-huang-return-nvidia-megaspeed |
| 技术媒体 | Is bad news for Jensen Huang also bad news for the AI industry? | 2026-11-15 1:56 PM PST（北京时间 11-16 05:56，相邻日期） | https://techcrunch.com/2026/11/15/is-bad-news-for-jensen-huang-also-bad-news-for-the-ai-industry/ |
| 技术媒体 | Uber's Secure AI Framework Governs Autonomous AI Agents Across Their Lifecycle | 2026-11-15（InfoQ 标注；官方原文 11-06） | https://www.infoq.com/news/2026/11/uber-secure-ai-framework/ |
| 官方博客 | Securing AI Agents: Lessons From Real-World Deployment | 2026-11-06 | https://www.uber.com/blog/securing-ai-agents/ |
| 技术媒体 | Anthropic Outlines Its AI-Powered Code Review Process for Claude Code | 2026-11-15（InfoQ 标注；官方原文 10-15） | https://www.infoq.com/news/2026/11/claude-code-review/ |
| 官方博客 | How the Claude Code team does code review | 2026-10-15 | https://claude.dev/blog/solving-code-review-at-anthropic/ |
| 技术媒体 | Cohere Finding Shows Self-Hosted Open-Weight Models Still Need Egress Controls | 2026-11-15（InfoQ 标注；官方原文 10-26） | https://www.infoq.com/news/2026/11/cohere-open-weight-egress-risk/ |
| 官方博客 | Concerning behavior from a popular open-weight AI model | 2026-10-26 | https://cohere.com/blog/concerning-behaviour-popular-open-weight-ai-model |
| 技术媒体 | One compromised MCP server can trick an AI agent into misusing tools you already trust | 2026-11-15 12:00 PT（北京时间 11-16 04:00，相邻日期） | https://venturebeat.com/orchestration/one-compromised-mcp-server-can-trick-an-ai-agent-into-misusing-tools-you-already-trust |
| 技术媒体 | Meituan releases a 1.6-trillion-parameter agent model that never touched an Nvidia GPU | 2026-11-15（媒体日期；官方开源 11-10） | https://the-decoder.com/meituan-releases-a-1-6-trillion-parameter-agent-model-that-never-touched-an-nvidia-gpu/ |
| 官方博客 | 美团 LongCat-2.5 正式开源：从看见，到抵达 | 2026-11-10 | https://tech.meituan.com/2026/11/10/Meituan-LongCat-2.5-Open-Source.html |
| GitHub Release | openclaw 2026.11.5-beta.3 | 2026-11-15 00:31 UTC（北京时间 08:31） | https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.3 |
| GitHub Release | Hermes Agent canary v0.23.1+canary.20261115T064406Z | 2026-11-15 07:52 UTC（北京时间 15:52） | https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261115T064406Z |
| GitHub Release | Ultralytics v8.4.214 | 2026-11-15 14:25 UTC（北京时间 22:25） | https://github.com/ultralytics/ultralytics/releases/tag/v8.4.214 |
| GitHub Release | Ultralytics v8.4.213 | 2026-11-14 18:48 UTC（北京时间 11-15 02:48，窗口内） | https://github.com/ultralytics/ultralytics/releases/tag/v8.4.213 |
| 官方 changelog | Claude Code 2.1.325 | 2026-11-13（相邻日期，专项检索引用） | https://code.claude.com/docs/en/changelog |
| GitHub Release | Codex rust-v0.169.0 | 2026-11-13（相邻日期，专项检索引用） | https://github.com/openai/codex/releases/tag/rust-v0.169.0 |
| GitHub Release | Langfuse v4.80.0 | 2026-11-13（相邻日期，专项检索引用） | https://github.com/langfuse/langfuse/releases/tag/v4.80.0 |
| 官方博客 | Spring AI 2.1.0-RC2 Available Now | 2026-11-09（相邻日期，专项检索引用） | https://spring.io/blog/2026/11/09/spring-ai-2-1-0-RC2-available-now/ |
| 论文日刊页 | Hugging Face Daily Papers 2026-11-15（抽查论文提交日均早于 11-15，不记为当日新发） | 页面日期 2026-11-15 | https://huggingface.co/papers/date/2026-11-15 |

#### 专项主题结论（即使当日无结果也给出）

- **Claude Code**：11-15 窗口内无新官方版本。最近官方 changelog 为 2.1.325（2026-11-13），含 sandbox 下 Bash 默认走权限流、不信任仓库中只读 git 需先询问、`/loop` 与定时任务在运行声明了 `allowed-tools` 或 hooks 的 skill 前需询问，以及 zstd 解码等问题修复。InfoQ 11-15 报道的是 10-15 官方评审博文，不是新版本。
- **Codex**：11-15 窗口内无稳定版。最近稳定版为 0.169.0（2026-11-13 08:37 页面时间），含侧边对话标签、任务搜索、终端内自定义供应商，以及在不信任目录中即使 `--sandbox workspace-write` 也禁用项目配置与 MCP、需显式 `--trust`。`0.171.0-alpha.6`（18:58 UTC）与 `alpha.7`（23:13 UTC）对应北京时间 11-16 凌晨，不计入本窗口。
- **OpenClaw**：有可核验更新。`2026.11.5-beta.3` 于 2026-11-15 00:31 UTC 发布（预发布）。
- **Hermes**：有 canary。`v0.23.1+canary.20261115T064406Z` 于 07:52 UTC 发布，以插件目录变更为主，未见 `/goal`、`/loop` 新范式说明。
- **Spring AI**：当日无新版本。最近官方为 2.1.0-RC2（博客 2026-11-09），新 API 包括 `DecisionModel`、部分工具参数流式、MCP 2026-07-28 “modern” 协议服务端支持。
- **Spring Alibaba AI**：当日 `github.com/alibaba/spring-ai-alibaba` 与 java2ai.com 未发现可核验新 release 或官方博文。最近公开节点（如 v1.1.2.2、v2.0.0-M1.1）均不属于 11-15 窗口。
- **Langfuse**：当日无新版本。最近为 v4.80.0 及 11-13 changelog（Vertex AI 网关、Gemini decision evaluators、skills 相关改进）。
- **LangChain / LangGraph**：当日无新官方 changelog 或在窗口内的新 release。最近为 LangChain 1.5.0（11-11）与 LangGraph 1.2.22（11-14）。
- **Code Graph**：`colbymchenry/codegraph` 与 `codegraph-ai` 在 11-15 窗口内未发现可核验的新 release。
- **Loop Engineering**：Addy Osmani 博客、`cobusgreyling/loop-engineering` 与 Hermes `/goal` `/loop` 文档，均未发现 11-15 新发文。相邻可参考 Claude Code 2.1.325 对 `/loop` 与 skill 权限的交互调整（11-13）。
- **skills / Agent Skills / Codex Skills / Claude Skills / Cursor Skills**：未发现 11-15 新的官方规范或产品发布。相邻可见 Claude Code 2.1.325 的 skill 权限变化，以及 Langfuse v4.80.0（11-13）中 skills 大小限制可配置、Halo 创建/编辑入口等。

## 2026-11-14

### 今日总览

**一句话结论**：11 月 14 日（Asia/Shanghai）的主线，是 DeepSeek 在 13 日把 App 级搜索、读链、文件与语音能力开放给 API 后，于 14 日的中文窗口被广泛拆解；同时本地推理运行时（llama.cpp 1.0.0）和 GitHub Copilot 对 Gemini 4 Hydrogen 的接入，把「可复现的工具层」又推近一步，评测侧则切换到更难的 Coding Agent Index v2.1。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | AI / LLM / Agent / RAG / MCP / Claude Code / Codex / OpenClaw / Hermes / Spring AI / Spring Alibaba AI / Langfuse / LangChain·LangGraph / Code Graph / Loop Engineering / skills / 模型基础设施 / 论文 / 政策监管 |
| 核心趋势 | 1）DeepSeek 用服务端内置工具把联网搜索、读 URL、文件解析、OCR、ASR/TTS 和安全审核接到 `deepseek-flash`，并开源可导入官方聊天记录的前端演示；2）编码助手侧，GitHub Copilot 把 Hydrogen 铺到多端模型选择器，llama.cpp 则以 v1.0.0 明确 C API/ABI 的主版本边界；3）Langfuse AI Gateway 补上 Vertex AI 通道（11-13，昨日专项未单独列出）；4）Artificial Analysis 公开指数切到 v2.1，纵向对比旧分时需谨慎。 |
| 可直接关注 | DeepSeek 内置工具的协议兼容与中间结果必须回传；文件解析的免费/按页计费边界；Copilot 中 Hydrogen 的企业模型策略开关；llama.cpp/ggml 后续以主版本标记破坏性变更；用官方图表而不是旧版分数读 Coding Agent Index。 |
| 专项检索结论 | **Langfuse**：11-13 changelog 增加经 AI Gateway 调用 Vertex AI（Gemini 及 Google 托管的开源模型；Claude on Vertex 尚不可用），可作为昨日「按密钥限制模型 / Gemini Decisions 评测器」的补充。**Hermes**：11-14 仅有 canary 预发布安装包（`v0.23.1+canary.20261114T064334Z`），公告未列出功能变更，macOS/Windows 安装冒烟通过。**Claude Code / Codex / OpenClaw / Spring AI / Spring Alibaba AI / LangChain·LangGraph / Code Graph / Loop Engineering / skills**：已按日期与站点检索，未发现可确认属于 11-14 的官方发布或 changelog；不把未经官方页核对的聚合简报写入正文。ChatGPT Wallet 与 Langfuse 另两项 11-13 更新已在昨日章节覆盖，本日不再重复展开。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 开源模型 API | [The full DeepSeek App experience, now via API](https://api-docs.deepseek.com/news/news261113/)（中文：[DeepSeek 发布全家桶应用 API](https://api-docs.deepseek.com/zh-cn/news/news261113/)） | 2026-11-13（相邻日期 / 中国时间窗口传播） | 官方发布 | 在 Messages / Responses / Chat Completions 上为 `deepseek-flash`（V4.1-Flash）提供服务端内置工具：网页与深度思考搜索、文件输入、URL 读取、安全审核，以及独立的 Search / Fetch / OCR / ASR / TTS 接口。官方开源前端演示 [deepseek-ai/chat-demo](https://github.com/deepseek-ai/chat-demo)，并可导入官网导出的对话记录。公开材料写明目前仅 Flash 支持这套工具，V4-Pro 尚未跟上。 |
| 编码助手 | [Gemini 4 Hydrogen in GitHub Copilot](https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot/) | 2026-11-13（相邻日期 / 中国时间窗口传播） | 官方发布 | Hydrogen 以 Google 最新 Flash 定位进入 Copilot，面向更快的 agentic 编码与多步工具使用，并按提供商目录价计入用量计费。已在 VS Code / Visual Studio / Copilot CLI / coding agent 及 JetBrains、Xcode、Eclipse 等处的模型选择器中逐步放出；Business/Enterprise 管理员可通过模型策略开关控制访问。 |
| 本地推理运行时 | [llama.cpp v1.0.0 : A stronger foundation for the local AI ecosystem](https://huggingface.co/blog/ggml-org/llama-cpp-v1) | 2026-11-13（相邻日期 / 中国时间窗口传播） | 开源发布 | 同时发布 `libllama` 与 `libggml` 的 v1.0.0，承诺之后以主版本号标记对公开 C API/ABI 的不兼容变更。对已经把 llama.cpp 嵌进产品的团队，这是把「跟提交」改成「跟语义化版本」的信号。 |
| 评测基准 | [Artificial Analysis Coding Agent Index](https://artificialanalysis.ai/agents/coding-agents)（方法说明见 [Methodology](https://artificialanalysis.ai/methodology/coding-agents-benchmarking)） | 2026-11-14（公开页已切换到 v2.1；分数细节以官网图表为准） | 开源/评测 | v2.1 由 FrontierCode-AA 2.0（132 题）、Terminal-Bench 4.1（66 题）与 SWE-Atlas-QnA-AA（124 题）等权组成，比较的是「模型 + 特定 Agent harness」而非裸模型。独立综述称部分 Claude 配置在该版指数上出现并列领先，并提醒与 v2.0 分数不可直接纵向比较。 |
| 政策监管 | [Facebook: il Garante Privacy sanziona Meta per 805 milioni di euro](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10321080) | 2026-11-14 | 政策标准 | 意大利数据保护局认定 Facebook Android 端「从相册获取建议」功能在未取得充分、单独同意的情况下读取相册与元数据，处罚 8.05 亿欧元，并要求 60 日内默认关闭该功能、改为单独征得同意。官方写明本次程序**未涵盖**内容是否用于训练人工智能（Meta 否认），该部分另案评估。不宜把本罚单直接写成「AI 训练监管」。 |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| Agent 工具 API | [DeepSeek 官方公告](https://api-docs.deepseek.com/news/news261113/) 与 [阿里云开发者社区对接入细节的拆解](https://developer.aliyun.com/article/1783452) | 搜索/读链在服务端完成；思考、搜索和抓页结果块必须在下一轮原样回传，否则模型会「忘页」。开启工具调用等能力后，部分采样参数会被服务端忽略。纯文本/CSV/代码等可走免费解析，PDF/Office/图片才按页计费；要保留图表需版面识别，并额外消耗图像 token。 | 打算复刻 DeepSeek 风格助手、或把搜索/读页从自建管线换成厂商工具的后端团队 |
| LLM 网关 | [Call Google Vertex AI models through the AI Gateway](https://langfuse.com/changelog/2026-11-13-ai-gateway-vertex-ai) | 经 Langfuse AI Gateway 对接 Vertex 的 OpenAI 兼容 Chat Completions 端点，可调用 Gemini 以及 Google 托管的 Llama、DeepSeek、Qwen、gpt-oss 等；官方写明 Claude on Vertex 暂不可用。 | 已使用 Langfuse Gateway、希望把 Vertex 模型纳入同一套密钥与路由的平台团队 |
| 本地推理版本治理 | [llama.cpp v1.0.0](https://huggingface.co/blog/ggml-org/llama-cpp-v1) | MAJOR/MINOR/PATCH 与公开头文件变更绑定；发行渠道覆盖源码构件、Docker、发行版包与移动 XCFramework。 | 把 llama.cpp/ggml 作为产品依赖、需要稳定 ABI 的工程团队 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：这一天更像「厂商把已经在 App 里跑通的工具层开放给开发者」以及「编码/本地运行时把版本与模型入口补齐」，而不是 LangChain/LangGraph 编排层放出新版本。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| DeepSeek 工具协议 | 官方把搜索、读页、文件和语音做成服务端工具，并要求中间结果块在多轮中原样回传。 | 自建网关不要过滤「看起来不像最终答案」的 tool/thinking 块；协议兼容不等于可以改写中间态。把工具费用（按次）和 token 费用分开估，避免只看模型单价。 |
| 编码助手模型选择 | Copilot 将 Hydrogen 作为高速执行模型接入多端，管理员可按策略关闭。 | 与昨日 Gemini 4 的 Carbon/Argon/Hydrogen 分工一致：执行层模型上线后，要用时延、配额和指令遵循，而不是只用旗舰榜分数做默认选择。 |
| 本地运行时 | llama.cpp/ggml 进入 1.0 语义化版本。 | 下游集成应开始按版本号而不是「跟 main」规划升级窗口。 |
| Langfuse / 可观测 | AI Gateway 增加 Vertex AI 通道，补齐云上 Google 模型入口。 | 网关层把多云模型收口后，再叠昨日的「按密钥限制模型」和决策评测，比在每个应用里分别接 Vertex 更易治理。 |
| LangChain / LangGraph / Claude Code / Codex / OpenClaw / Spring AI / Code Graph / Loop Engineering | 本日未发现可核验的官方版本或文档更新。Hermes 仅有无功能说明的 canary 包。 | 专项主题已检索；无结果只说明 11-14 窗口没有可引用的官方源。 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [The full DeepSeek App experience, now via API](https://api-docs.deepseek.com/news/news261113/) | 这是当日（含 13 日官方、14 日中文窗口）最具体的开发者接口变更，直接改变「要不要自建搜索/读页/文件管线」的评估。 |
| 推荐 | [Gemini 4 Hydrogen in GitHub Copilot](https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot/) | 把昨日的 Hydrogen 模型发布接到真实编码工作流入口，并写清计费与企业开关。 |
| 推荐 | [llama.cpp v1.0.0](https://huggingface.co/blog/ggml-org/llama-cpp-v1) | 对本地推理依赖给出可执行的版本治理承诺，而不是一次功能炫技。 |
| 推荐 | [Langfuse：经 Gateway 调用 Vertex AI](https://langfuse.com/changelog/2026-11-13-ai-gateway-vertex-ai) | 昨日评测/密钥更新的自然补丁，适合已经把流量接到 Langfuse 的团队立刻验证。 |
| 延伸 | [Artificial Analysis Coding Agent Index](https://artificialanalysis.ai/agents/coding-agents) | 用官方 v2.1 页面看「模型 + harness」而不是只看模型卡；更换组件后不要拿旧分做同比。 |
| 延伸 | [Hugging Face Daily Papers（2026-11-14）](https://huggingface.co/papers/date/2026-11-14) | 当日论文墙可见决策模型在长程 Agent 中的角色、DeepStress 搜索 Agent 压测、世界模型与具身相关工作，适合按题挑选，不必逐篇当作已核实结论。 |
| 延伸 | [意大利 Garante 对 Meta 的处罚说明](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10321080) | 可用官方文本核对处罚对象与「未覆盖 AI 训练」这一界限，避免把隐私罚单误写成模型训练禁令。 |

### 来源清单

- 检索范围：2026-11-14 00:00:00 到 2026-11-14 23:59:59（Asia/Shanghai）
- 引用域名：api-docs.deepseek.com, github.com, github.blog, huggingface.co, langfuse.com, artificialanalysis.ai, garanteprivacy.it, developer.aliyun.com
- 来源清单表格：

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | The full DeepSeek App experience, now via API | 2026-11-13（相邻日期 / 中国时间窗口传播） | https://api-docs.deepseek.com/news/news261113/ |
| 开源发布 | deepseek-ai/chat-demo | 2026-11-13（相邻日期 / 中国时间窗口传播） | https://github.com/deepseek-ai/chat-demo |
| 官方发布 | Gemini 4 Hydrogen in GitHub Copilot | 2026-11-13（相邻日期 / 中国时间窗口传播） | https://github.blog/changelog/2026-11-13-gemini-4-hydrogen-in-github-copilot/ |
| 开源发布 | llama.cpp v1.0.0 | 2026-11-13（相邻日期 / 中国时间窗口传播） | https://huggingface.co/blog/ggml-org/llama-cpp-v1 |
| 官方发布 | Call Google Vertex AI models through the AI Gateway | 2026-11-13（相邻日期 / 中国时间窗口传播） | https://langfuse.com/changelog/2026-11-13-ai-gateway-vertex-ai |
| 开源发布/评测 | Artificial Analysis Coding Agent Index v2.1 | 2026-11-14 | https://artificialanalysis.ai/agents/coding-agents |
| 政策标准 | Facebook: il Garante Privacy sanziona Meta per 805 milioni di euro | 2026-11-14 | https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10321080 |
| 技术媒体（固定来源补充，中文传播） | DeepSeek 把 App 能力开放给开发者，连聊天前端也开源了 | 2026-11-14 | https://developer.aliyun.com/article/1783452 |
| 论文原文 | Hugging Face Daily Papers | 2026-11-14 | https://huggingface.co/papers/date/2026-11-14 |
| 开源发布 | Hermes Agent canary v0.23.1+canary.20261114T064334Z | 2026-11-14（预发布，无功能说明） | https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261114T064334Z |

## 2026-11-13

### 今日总览

**一句话结论**：11 月 13 日（Asia/Shanghai）的主线，是代理开始进入「可支付、可攻防」的产品化，同时 Gemini 4 Hydrogen 等高速执行模型在官方页更新与中文传播窗口中继续扩散；基础设施层则被英伟达创始人交棒放大了不确定性，观测侧 Langfuse 同日给出两项可落地的官方更新。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | AI / LLM / Agent / RAG / MCP / Claude Code / Codex / OpenClaw / Hermes / Spring AI / Spring Alibaba AI / Langfuse / LangChain·LangGraph / Code Graph / Loop Engineering / skills / 模型基础设施 / 论文 / 政策监管 |
| 核心趋势 | 1）OpenAI 以 ChatGPT Wallet 把代理购物做成「用户逐笔审批 + 支付 Token、不暴露真实卡号」的闭环；2）Google 的 Hydrogen 把 Gemini 4 级能力铺到 Search / API / 编程工作流，定位为与 Carbon/Argon 搭配的高速执行模型；3）英伟达 CEO 交接与 OpenAI Daybreak 安全产品，把算力供给和 AI 攻防同时推到台前；4）Langfuse 在 AI Gateway 与决策模型评测上给出可立即配置的更新。 |
| 可直接关注 | ChatGPT Wallet 的授权与风控设计；Hydrogen 在 Antigravity Orchestrator 中的多模型分工；Daybreak Red Team / Defense Factory 的「先验证再补丁、补丁不自动合入」；Langfuse 按密钥限制模型与接入 Gemini Decisions；英伟达交棒对供给与路线图沟通的影响。 |
| 专项检索结论 | **Langfuse**：11-13 官方 changelog 发布 AI Gateway 按密钥限制模型，以及基于 `gemini-decision-1` 的决策模型评测器。**Claude Code / Codex / OpenClaw / Hermes / Spring AI / Spring Alibaba AI / LangChain·LangGraph / Code Graph / Loop Engineering / skills**：已按日期与站点检索，未发现可确认为该日的官方发布或 changelog；不将仅出现在聚合简报、且未经官方页核对的传闻写入正文。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 代理支付 | [Introducing ChatGPT Wallet](https://openai.com/index/introducing-chatgpt-wallet/) | 2026-11-13 | 官方发布 | 代理可代为下单，但每笔需用户生物识别等安全校验；网络侧下发支付 Token，不向商家或代理暴露真实卡号。初期仅向美国 ChatGPT Pro（dots）开放，并同步给出商家接入与风控指引。 |
| 高速执行模型 | [Introducing Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 2026-11-12（官方页 11-13 更新 / 中国时间窗口传播） | 官方发布 | 定位日常编码与 agentic 工作流；默认 high 思考档在 Artificial Analysis Intelligence Index 上 51，高于 Argon 的 50；1M 上下文统一定价 $1.50 / $7.50（百万 input/output tokens）。官方称较 3.8 Flash 默认完成速度快 2.5 倍，Terminal-Bench 4.1 为 57% 对 18.2%。Antigravity 新增多模型 Orchestrator，Carbon 可协调、Hydrogen 可执行与校验。 |
| 芯片与治理 | [NVIDIA Announces CEO Transition](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition) | 2026-11-12（相邻日期 / 中国时间窗口传播） | 官方发布 | Jensen Huang 辞任总裁、CEO 及董事，即时生效；CFO Colette Kress 任临时 CEO 并继续兼任 CFO；Harvey C. Jones 出任董事会首位 Chair。官方强调客户承诺与产品路线图将不中断，三季度财报仍按 11 月 17 日举行。对依赖 NVIDIA 供给的训练/推理规划，需跟踪交接期沟通与政策环境，而不要把媒体衍生叙事当成官方结论。 |
| AI 安全产品 | [OpenAI Unveils Daybreak Red Team, Defense Factory Security Tools](https://www.securityweek.com/openai-unveils-daybreak-red-team-defense-factory-security-tools/)（产品页：[Red Team](https://openai.com/daybreak/red-team/)、[Defense Factory](https://openai.com/daybreak/defense-factory/)） | 2026-11-12（Cyber at the Frontier 活动宣布；11-13 技术媒体报道 / 中国时间窗口传播） | 官方产品页 + 技术媒体 | Red Team 用隔离环境中的多智能体对 Web 应用做授权渗透与漏洞验证，并由 Guardian review 约束测试边界；Defense Factory 调查发现并准备补丁，工程师审阅测试后方可合并，不会自动部署。可导入 Wiz / Snyk / Endor Labs 发现，并扫描已连接的 GitHub 仓库。 |
| 企业 Agent 部署 | [Self-hosted Claude Managed Agents keeps agent credentials in your environment](https://www.helpnetsecurity.com/2026/11/12/anthropic-self-hosted-claude-managed-agents/) | 2026-11-12（相邻日期 / 中国时间窗口传播） | 技术媒体 | 报道称自托管私有预览于 11 月 12 日开放：客户可自行运行 Managed Agents 服务、PostgreSQL 与 worker，将会话历史与凭据留在自有环境；模型请求仍可指向 Anthropic、Bedrock 等，ZDR 协议覆盖 Messages API 调用。本稿未检索到同期 Anthropic 官方博文，重大结论以官方后续文档为准，此处仅作背景。 |
| 开源模型与提示隔离 | [LLMON: An LLM-Native Markup Language, now in Granite 4.1 3B and 8B](https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite) | 2026-11-12（相邻日期 / 中国时间窗口传播） | 开源发布 | IBM 发布 granite-4.1-3b/8b-LLMON-preview：用保留特殊 token 显式标记 instruction/data/requirement，并在 exec 块中绑定执行关系，以降低间接提示注入成功率。官方强调仍是实验预览，不建议直接上生产。 |
| 政策监管 | [工业和信息化部办公厅关于加强智能体终端设备进网管理的通知](https://www.miit.gov.cn/jgsj/xgj/wjfb/art/2026/art_5066b9dffa93405a988e266ff12bf674.html) | 2026-11-06（相邻日期 / 中国时间窗口传播） | 政策标准 | 对预置智能体的手机、平板、可穿戴等电信终端提出进网与适配要求；应用分发侧应推动开发者以电子签名声明是否同意被智能体调用，未经声明同意不得强制调用。11-13 中文技术社区继续解读对 Agent 权限、声明与数据链路的工程影响。 |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| LLM 可观测 / 评测 | [Restrict models per AI Gateway key](https://langfuse.com/changelog/2026-11-13-ai-gateway-key-model-restrictions) | 创建或编辑 AI Gateway API key 时可设置模型通配（如 `openai-prod:*`），按密钥收紧可调用模型。 | 已把多模型流量接到 Langfuse AI Gateway、需要做环境/团队隔离的平台团队 |
| LLM 可观测 / 评测 | [Evaluate with Gemini decision models](https://langfuse.com/changelog/2026-11-13-gemini-decision-model-evaluators) | 评测器可选用 Google AI Studio 的 `gemini-decision-1`；Choice / Score / Yes-no 会写入分数、概率与置信度。Google 对 decision 只计 input tokens；暂不支持 Vertex AI 连接。 | 要在生产上对政策符合性、分流、回答质量做在线评分的应用团队 |
| 安全编码 Agent | [Daybreak Defense Factory](https://openai.com/daybreak/defense-factory/) | 从代码追踪漏洞、准备补丁并支持用 Codex 修改，再以草稿 PR 交工程师审核；强调补丁不自动合入。 | 安全与平台工程中已有扫描器、需要把「发现」接到「修复」的团队 |
| 上下文与注入防护 | [LLMON 预览模型与工具仓](https://github.com/generative-computing/llmon) | 以 LLM 原生标记代替把 JSON 直接塞进上下文；可将现有 JSON 无损转换为 LLMON。 | 小模型 RAG / 工具调用场景中饱受间接注入困扰的研发 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：这一天更像「代理运行时的商业与安全外壳」在加厚，而不是 LangChain/LangGraph 编排层本身放出新版本；可复用的工程信号集中在授权边界、密钥级模型门禁，以及评测与生产行为是否一致。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| Langfuse / 可观测 | 官方同日更新：Gateway 密钥可限制模型；评测器可接 Gemini Decisions API。 | 把「谁能调哪些模型」从应用配置上收到网关密钥；决策类评测适合政策一致性、路由和有限档打分，而不是替代完整生成式裁判。 |
| 代理支付与权限 | ChatGPT Wallet 要求每笔用户审批，并用网络 Token 隔离真实卡数据。 | 代理若要碰资金或副作用，默认应是「参数化授权 + 独立凭证 + 可审计记录」，而不是把原凭证交给模型或工具沙箱。 |
| 多模型工作流 | Hydrogen 被明确写成与 Carbon/Argon 搭配的执行引擎，Orchestrator 可在同一会话中切换。 | 架构评审、编码、测试可拆给不同模型；要用配额和时延而不是单一基准，决定谁当 coordinator、谁当 worker/verifier。 |
| 安全 Agent | Daybreak 把红队验证与补丁生成分开，且补丁必须人工审核。 | 内部安全 Agent 也应把「发现」和「变更」分成两个权限域，并保留证据链。 |
| LangChain / LangGraph / Claude Code / Codex / OpenClaw / Hermes / Spring AI / Code Graph / Loop Engineering | 本日未发现可核验的官方版本或文档更新。 | 专项主题已检索；无结果不代表生态停滞，只说明 11-13 窗口没有可引用的官方源。 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [Introducing ChatGPT Wallet](https://openai.com/index/introducing-chatgpt-wallet/) | 把代理商务的信任问题写成了可落地的支付流程，对任何要让 Agent 产生真实副作用的系统设计都有直接参考。 |
| 必读 | [Introducing Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 官方把「旗舰推理模型」和「高速执行模型」的分工写清楚，并给出定价、基准和 Orchestrator 的配额/时延变化。 |
| 推荐 | [Langfuse：按密钥限制模型](https://langfuse.com/changelog/2026-11-13-ai-gateway-key-model-restrictions) 与 [Gemini 决策评测器](https://langfuse.com/changelog/2026-11-13-gemini-decision-model-evaluators) | 当天最具体、可立即试验的工程更新，覆盖网关治理和在线评测两条线。 |
| 推荐 | [NVIDIA Announces CEO Transition](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition) | 以官方声明核对交棒事实，避免把同步传播的市场传闻写进技术判断。 |
| 延伸 | [Hugging Face Daily Papers（2026-11-13）](https://huggingface.co/papers/date/2026-11-13) | 当日论文墙覆盖决策模型、搜索 Agent 压测、多模态记忆与 Agent 生产力数据合成等方向，适合按题挑选，不必逐篇当作已核实结论。 |
| 延伸 | [LLMON 与 Granite 4.1 预览](https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite) | 提供一条与「用提示词约定角色」不同的结构隔离思路，适合评估小模型防注入方案。 |

### 来源清单

- 检索范围：2026-11-13 00:00:00 到 2026-11-13 23:59:59（Asia/Shanghai）
- 引用域名：openai.com, blog.google, nvidianews.nvidia.com, langfuse.com, huggingface.co, securityweek.com, helpnetsecurity.com, miit.gov.cn
- 来源清单表格：

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | Introducing ChatGPT Wallet | 2026-11-13 | https://openai.com/index/introducing-chatgpt-wallet/ |
| 官方发布 | Introducing Gemini 4 Hydrogen | 2026-11-12（官方页 11-13 更新 / 中国时间窗口传播） | https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/ |
| 官方发布 | NVIDIA Announces CEO Transition | 2026-11-12（相邻日期 / 中国时间窗口传播） | https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition |
| 官方发布 | Daybreak Red Team / Defense Factory 产品页 | 2026-11-12（相邻日期 / 中国时间窗口传播） | https://openai.com/daybreak/red-team/ |
| 技术媒体 | OpenAI Unveils Daybreak Red Team, Defense Factory Security Tools | 2026-11-13 | https://www.securityweek.com/openai-unveils-daybreak-red-team-defense-factory-security-tools/ |
| 技术媒体 | Self-hosted Claude Managed Agents… | 2026-11-12（相邻日期 / 中国时间窗口传播） | https://www.helpnetsecurity.com/2026/11/12/anthropic-self-hosted-claude-managed-agents/ |
| 开源发布 | LLMON in Granite 4.1 3B and 8B | 2026-11-12（相邻日期 / 中国时间窗口传播） | https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite |
| 官方发布 | Restrict models per AI Gateway key | 2026-11-13 | https://langfuse.com/changelog/2026-11-13-ai-gateway-key-model-restrictions |
| 官方发布 | Evaluate with Gemini decision models | 2026-11-13 | https://langfuse.com/changelog/2026-11-13-gemini-decision-model-evaluators |
| 政策标准 | 工业和信息化部办公厅关于加强智能体终端设备进网管理的通知 | 2026-11-06（相邻日期 / 中国时间窗口传播） | https://www.miit.gov.cn/jgsj/xgj/wjfb/art/2026/art_5066b9dffa93405a988e266ff12bf674.html |
| 论文原文 | Hugging Face Daily Papers | 2026-11-13 | https://huggingface.co/papers/date/2026-11-13 |

## 2026-11-12

### 今日总览

**一句话结论**：Google 正式推出面向日常编码与 Agent 工作流的 Gemini 4 Hydrogen（官方博客标注 2026-11-12），在 100 万 token 窗口内按统一单价计费，并提供 low / medium / high（默认）/ xhigh 四档思考深度；可观测性方面，Langfuse 把 Microsoft Azure（Foundry）与 Google AI Studio 接入 AI Gateway。工具链上，Codex `rust-v0.167.2` 的 GitHub Published 时间落入本日中国时区窗口，OpenClaw 则放出预发布版 `2026.11.5-beta.2`；政策侧，美联社报道多家倡导组织在旧金山起诉五家 AI 公司，要求冻结新模型开发，本案尚无判决。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | Google 官方博客与 Gemini 4 Hydrogen 文档、Langfuse changelog、Codex / OpenClaw GitHub Releases、Claude Code 官方 changelog、Hermes Releases、Hugging Face Daily Papers、Spring AI / Spring Alibaba AI / LangChain·LangGraph / Code Graph / Loop Engineering / skills 专项检索、政策监管检索 |
| 核心趋势 | 1）中端编码模型把「更快的执行层」和「与旗舰模型搭配的编排」写成可订阅产品，而不是只发跑分；2）观测网关继续补齐云厂商连接，降低把 Azure / Gemini 流量接到同一控制面的成本；3）编码 Agent 运行时仍在打补丁：Vertex 工具流式更新、会话恢复与输入去重；4）安全与监管争议以诉讼形式进入公开记录，但目前只是起诉主张 |
| 可直接关注 | Hydrogen 的统一 1,048,576 token 限额（输入+输出含思考）、短周期 GA 与至少 45 天退役通知、默认隐式缓存与不支持显式 context cache；Langfuse AI Gateway 的 Azure Foundry / Google AI Studio 连接；Codex 0.167.2 在 Vertex AI 上默认增量推送工具更新，退出方式以 GitHub 发行说明中的 `config.toml` 项为准；OpenClaw `2026.11.5-beta.2` 为 pre-release，生产环境需单独评估 |
| 专项检索结论 | Claude Code：官方 changelog 截至核验时最新仍为 2026-11-10 的 2.1.322，未发现可确认属于 2026-11-12 的新版本。Codex：`rust-v0.167.2` 于 2026-11-11 22:44:46 UTC（2026-11-12 06:44 Asia/Shanghai）发布。OpenClaw：`v2026.11.5-beta.2` 于 2026-11-12 00:43:25 UTC（2026-11-12 08:43 Asia/Shanghai）发布，且标记为预发布。Hermes：未发现 11-12 新版本。Langfuse：官方 changelog 有 2026-11-12 一条。LangChain/LangGraph：GitHub 上的 LangGraph 1.2.21 发布时间为 2026-11-12 18:06 UTC（2026-11-13 02:06 Asia/Shanghai），不落入本日窗口，不作为本日主条。Spring AI、Spring Alibaba AI、Code Graph、Loop Engineering、Agent Skills 市场：未发现可确认属于该日的官方发布。Gemini Decisions API 与 AlphaGenome 2 官方英文博客标注 2026-11-11，Qwen4-Max-Preview 已计入 11-11 日报，均不作为本日新发布主条。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 中端模型 / 编码 Agent | [Introducing Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 2026-11-12 | 官方发布 | 定位日常编码与 Agent 执行，可单独使用或与 Carbon / Argon 搭配；官方给出四档思考深度，以及 $1.50 / $7.50（每百万 input / output token）且在 1M 窗口内统一计价。Antigravity 的 Orchestrator 可在同一会话中切换模型；官方称其在 Terminal-Bench 4.0 上接近 Carbon 的任务成功率，同时平均少消耗 24% quota、快 19%。开发者文档还写明统一 1,048,576 token 限额、短周期 GA 与 45 天退役通知 |
| 开发者入口 | [Gemini 4 Hydrogen: everyday coding and agentic workflows for developers](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-hydrogen/) | 2026-11-12 | 官方博客 | 重申可在 Google AI Studio、Gemini API、Android Studio、Gemini for business 以及付费 Google AI Pro / Ultra 的 Antigravity 中使用 |
| 可观测性 | [Microsoft Azure and Google AI Studio in the AI Gateway](https://langfuse.com/changelog/2026-11-12-ai-gateway-azure-google-ai-studio) | 2026-11-12 | 官方 changelog | AI Gateway 可连接 Microsoft Azure（Foundry）与 Google AI Studio，把这两类模型接到现有网关路由 |
| 编码 Agent | [Codex rust-v0.167.2](https://github.com/openai/codex/releases/tag/rust-v0.167.2) | 2026-11-12（Published 2026-11-11 22:44:46 UTC，落入本日 Asia/Shanghai 窗口） | 开源发布 | 发行说明写明：在 Google Cloud Vertex AI 上默认增量发送工具更新；若要退出，以该页给出的 `config.toml` 配置项为准，不转述第三方博客中的不同键名。其余变更仅提供 compare 链接，本条不推断未列出的修复项 |
| 开源 Agent 运行时 | [openclaw 2026.11.5-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.2) | 2026-11-12 | 预发布 | 分页会话历史、配置保存失败时保留密钥与 Gateway 认证、Android 结束 Talk 不再取消 Gateway 已接受的任务；并修复畸形 URI、消息投递去重、聊天恢复与工具超时结果保留等。官方 endpoint 上的 Gemini Flash 改走 Interactions API，自定义 endpoint 仍可覆盖。此标签为 pre-release |
| 政策与诉讼 | [Advocacy groups sue AI giants to freeze new models, warning of 'catastrophic' risks](https://apnews.com/article/artificial-intelligence-ai-lawsuit-cyberattacks-anthropic-openai-03ece37b96979fe834f60976648504ba) | 2026-11-12 | 技术媒体（AP） | 报道称倡导组织在旧金山起诉 Anthropic、Google、Meta、OpenAI 与 SpaceXSI，寻求阻止继续开发或部署新模型。这是起诉主张，不是已生效禁令 |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 模型接入与迁移 | [Gemini 4 Hydrogen 开发者文档](https://docs.cloud.google.cn/gemini-enterprise-agent-platform/models/guides/gemini-4-hydrogen) | 模型 ID `gemini-4-hydrogen`；思考档位 LOW/MEDIUM/HIGH/XHIGH；输入输出共享 1,048,576 token；长解码需 `v1beta1` 与 `continuation_token`；前缀满 4,096 token 自动隐式缓存，不支持显式 context cache；可接受 Office / OpenDocument 文件 | 从 Gemini 3.8 Flash 迁移，或准备把 Hydrogen 接到 API / Agent 平台的团队 |
| 网关接入 | [Langfuse 2026-11-12 changelog](https://langfuse.com/changelog/2026-11-12-ai-gateway-azure-google-ai-studio) | Azure Foundry 与 Google AI Studio 作为网关提供方 | 已使用 Langfuse AI Gateway、希望把 Azure / Gemini 流量并入同一路由的平台团队 |
| 论文入口 | [Hugging Face Daily Papers（2026-11-12）](https://huggingface.co/papers/date/2026-11-12) | 当日列表出现 Scaling Mathematical Proof Supervision、SteerDistill、Read Less, Solve More、Ensemble Routing、Evolving Infra、ScrapeBench 等证明监督 / Agent 蒸馏 / 路由与评测方向论文 | 需要按日浏览论文标题与入口的研究与工程同学（本条未逐篇精读全文） |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：本日更值得落地的是 Hydrogen 作为「执行层模型」的接入约束，以及 Langfuse 把 Azure / Google AI Studio 收进同一网关；LangChain / LangGraph 本身未发现落入本日中国时区窗口的官方新版本。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| Gemini 4 Hydrogen | 四档思考、统一百万 token 预算、短周期 GA、Antigravity Orchestrator 可在会话中切换 Carbon / Hydrogen | 不要把 Hydrogen 的输出预算和思考预算分开估；上线前要核对生命周期与缓存策略（隐式缓存可用，显式 cache 不可用） |
| Langfuse AI Gateway | 新增 Azure Foundry 与 Google AI Studio 连接 | 把多云模型入口收在网关内，便于沿用已有路由、追踪和评测，而不是在业务代码里再写一套客户端 |
| Codex / OpenClaw 运行时 | Codex 在 Vertex 上默认增量推送工具更新；OpenClaw 预发布版强化历史分页、投递去重与恢复 | 依赖批处理工具事件的下游要先看官方退出项；OpenClaw 此版本是 beta，不要当作稳定版升级 |
| LangChain / LangGraph / Spring AI / Code Graph / Loop Engineering | 专项检索未发现可确认属于 2026-11-12（Asia/Shanghai）的官方发布 | 无新版本时不要用过期发行说明填日报 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [Introducing Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) | 官方对定位、定价、思考档位和 Orchestrator 的口径，是评估是否替换 3.8 Flash 的起点 |
| 必读 | [Gemini 4 Hydrogen 开发者文档](https://docs.cloud.google.cn/gemini-enterprise-agent-platform/models/guides/gemini-4-hydrogen) | 写清了 token 限额、长解码 API 版本和缓存限制，避免按旧 Flash 假设接入 |
| 推荐 | [Langfuse Azure / Google AI Studio changelog](https://langfuse.com/changelog/2026-11-12-ai-gateway-azure-google-ai-studio) | 用较短的官方说明确认网关新增了哪些提供方 |
| 推荐 | [Codex rust-v0.167.2](https://github.com/openai/codex/releases/tag/rust-v0.167.2) | 对正在用 Vertex AI 跑多步工具调用的团队，流式工具更新会改变延迟特征 |
| 延伸 | [OpenClaw 2026.11.5-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.2) | 预发布版的恢复与安全修复清单，适合已跟踪 OpenClaw 的同学，不建议作为首次生产升级依据 |
| 延伸 | [HF Daily Papers 2026-11-12](https://huggingface.co/papers/date/2026-11-12) | 作为当日论文索引，而不是已精读清单 |
| 延伸 | [AP：倡导组织起诉五家 AI 公司](https://apnews.com/article/artificial-intelligence-ai-lawsuit-cyberattacks-anthropic-openai-03ece37b96979fe834f60976648504ba) | 了解监管诉讼主张；后续进展需以法院记录为准 |

### 来源清单

- 检索范围：2026-11-12 00:00:00 到 2026-11-12 23:59:59（Asia/Shanghai）
- 引用域名：blog.google, docs.cloud.google.cn, langfuse.com, github.com, huggingface.co, code.claude.com, apnews.com
- 来源清单表格：

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | Introducing Gemini 4 Hydrogen | 2026-11-12 | https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/ |
| 官方博客 | Gemini 4 Hydrogen: everyday coding and agentic workflows for developers | 2026-11-12 | https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-hydrogen/ |
| 官方文档 | Gemini 4 Hydrogen developer guide | 2026-11-12（随模型发布） | https://docs.cloud.google.cn/gemini-enterprise-agent-platform/models/guides/gemini-4-hydrogen |
| 官方 changelog | Langfuse: Microsoft Azure and Google AI Studio in the AI Gateway | 2026-11-12 | https://langfuse.com/changelog/2026-11-12-ai-gateway-azure-google-ai-studio |
| 开源发布 | Codex rust-v0.167.2 | 2026-11-12（Published 2026-11-11T22:44:46Z，中国时间窗口） | https://github.com/openai/codex/releases/tag/rust-v0.167.2 |
| 开源预发布 | openclaw 2026.11.5-beta.2 | 2026-11-12（Published 2026-11-12T00:43:25Z） | https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.2 |
| 技术媒体 | Advocacy groups sue AI giants to freeze new models | 2026-11-12 | https://apnews.com/article/artificial-intelligence-ai-lawsuit-cyberattacks-anthropic-openai-03ece37b96979fe834f60976648504ba |
| 官方 changelog | Claude Code changelog（核验无 11-12 新版本） | 检索于 2026-11-13；页面最新条目为 2026-11-10 的 2.1.322 | https://code.claude.com/docs/en/changelog |
| 论文列表 | Hugging Face Daily Papers | 2026-11-12 | https://huggingface.co/papers/date/2026-11-12 |

## 2026-11-11

### 今日总览

**一句话结论**：中国实验室同日放出可试用的新旗舰：阿里云百炼 Token Plan 在 10:00（UTC+8）上线 Qwen4-Max-Preview（百万上下文、预览至 11 月 25 日 24:00），百度发布 ERNIE 5.5 Flash Preview（280B/14B，权重将以 Apache 2.0 开源），MiniMax 开源 H3-Image 并把 4K 生成压到 10 秒内；工具链上，Langfuse 为 AI Gateway 补上自定义 Base URL、OpenAI Decisions 与 MCP 批量评估，OpenClaw 2026.11.3 与 Codex rust-v0.167.1 的 GitHub Published 时间落入本日中国时区窗口，Google Cloud 则把 Gemini 4 Carbon 以预览形式接进 CodeMender。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | 阿里云百炼/通义文档、文心官方发布页、MiniMax Research、Langfuse changelog、OpenClaw / Codex GitHub Releases、Google Cloud 发布说明、Claude Code 官方 changelog、Hermes Releases、Hugging Face Daily Papers、Spring AI / Spring Alibaba AI / LangChain·LangGraph / Code Graph / Loop Engineering / skills 专项检索、政策监管检索 |
| 核心趋势 | 1）旗舰模型把「百万上下文 + 长程 Agent 任务」写成可订阅/可开源的产品形态，而不是只发评测数字；2）可观测性把网关、评测模型和 MCP 连成同一条控制面，方便把流量打到内部代理并回放历史轨迹；3）编码 Agent 运行时继续补安全与交接：子任务隔离、凭证收口、沙箱构建；4）开源图像生成把 4K 速度与多参考图作为默认能力 |
| 可直接关注 | Qwen4-Max-Preview 仅 Token Plan、预览期结束后下线，迁移时注意思考与最终回答共享 `max_tokens` 预算；ERNIE 5.5 Flash Preview 仍是后训练中间检查点，权重开源节点与官方页「soon / Apache 2.0」表述；Langfuse AI Gateway 的自定义 Base URL 与 `/openai/v1/decisions`；OpenClaw 2026.11.3 的私有子任务结果、取消后交接与凭证隔离；CodeMender v0.21.0 沙箱隔离及 `--model gemini-4-carbon`；H3-Image 的开源权重与区域/商用许可限制需回仓库 LICENSE 核对 |
| 专项检索结论 | Claude Code：官方 changelog 截至核验时最新为 2026-11-10 的 2.1.322，未发现可确认属于 2026-11-11 的新版本。Codex：`rust-v0.167.1` 于 2026-11-10 21:32:01 UTC（2026-11-11 05:32 Asia/Shanghai）发布，发行说明仅给出与 0.167.0 的 compare 链接，不扩写未列出的功能点。OpenClaw：`v2026.11.3` 于 2026-11-10 18:53:07 UTC（2026-11-11 02:53 Asia/Shanghai）发布，焦点是更安全的任务交接与凭证隔离。Hermes：未发现 11-11 新版本（已知最近版本 0.23.1 标注 2026-11-10）。Langfuse：官方 changelog 同日三条。LangChain/LangGraph、Spring AI、Spring Alibaba AI、Code Graph、Loop Engineering、Agent Skills 市场：未发现可确认属于该日的官方发布。Gemini 4 Carbon 面向开发者与企业的 GA 官方英文博客标注 2026-11-10，中文「Google 黑板报」标注 2026-11-11，按相邻日期/中国时间窗口记录，不作为本日新发布主条。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 国产旗舰模型 | [qwen4-max-preview（阿里云百炼文档）](https://help.aliyun.com/zh/model-studio/qwen4-max-preview) | 2026-11-11 | 官方文档/产品上线 | 预览期 11-11 10:00 至 11-25 24:00（UTC+8），仅 Token Plan、不支持按量；1M 上下文，默认思考，兼容 OpenAI / Anthropic API；思考与最终回答共享输出预算 |
| 开源模型 | [Introducing ERNIE 5.5 Flash Preview](https://ernie.baidu.com/release/ernie-5-5-flash-preview/) | 2026-11-11 | 官方发布 | 基于此前 Flash Base 的首个后训练预览：总参 280B、激活 14B、1M 上下文，强调编程、3D、知识工作与内容创作；API 上线千帆，权重将以 Apache 2.0 开源。官方写明仍是中间检查点，后训练未结束 |
| 开源图像模型 | [MiniMax H3-Image: Bringing 4K Image Generation into the 10-Second Era](https://www.minimax.io/blog/minimax-h3-image) | 2026-11-11 | 官方发布 | 基于 H3 的开源权重图像生成/编辑模型，宣称 4K（4096×4096）10 秒内出图、最多 16 张参考图；同时提供 API、MiniMax Code 与 Hailuo。权重与许可以 Hugging Face / LICENSE 为准 |
| 可观测性 | [Route AI Gateway connections through your own endpoint](https://langfuse.com/changelog/2026-11-11-ai-gateway-custom-base-url) | 2026-11-11 | 官方 changelog | OpenAI / Anthropic 连接可把请求打到自定义 Base URL（如内部 LLM 代理），需遵循官方允许的 host 规则 |
| 可观测性 | [Call decision models through the AI Gateway](https://langfuse.com/changelog/2026-11-11-ai-gateway-openai-decisions) | 2026-11-11 | 官方 changelog | 新增 `POST /openai/v1/decisions`，支持 OpenAI 或 Vercel AI Gateway 连接，调用按 generation 追踪 |
| 可观测性 / MCP | [Set the default evaluation model and run batch evaluations via MCP](https://langfuse.com/changelog/2026-11-11-default-evaluation-model-and-batch-evaluation-via-mcp) | 2026-11-11 | 官方 changelog | MCP 工具可读写项目默认评测模型，并对已有数据跑批量评估，便于 Agent 换 judge 后回放上周生产轨迹 |
| 开源 Agent 运行时 | [openclaw 2026.11.3](https://github.com/openclaw/openclaw/releases/tag/v2026.11.3) | 2026-11-11（Published 2026-11-10 18:53:07 UTC，落入本日 Asia/Shanghai 窗口） | 开源发布 | 私有子任务结果不再混入流式回复、取消子任务后可交接、工具失败不再被当成成功；同时收紧凭证隔离、沙箱图片访问与工作区证书校验。发行说明写明无新配置项 |
| 编码 Agent | [Codex rust-v0.167.1](https://github.com/openai/codex/releases/tag/rust-v0.167.1) | 2026-11-11（Published 2026-11-10 21:32:01 UTC，落入本日 Asia/Shanghai 窗口） | 开源发布 | 0.167.0 之后的补丁发布；GitHub 发行页只提供 Full Changelog compare 链接，本条不推断具体修复项 |
| 开发者工具 / 安全 | Google Cloud 发布说明：CodeMender v0.21.0 与 Gemini 4 Carbon in CodeMender（Preview） | 2026-11-11 | 官方发布说明 | 沙箱内执行 `cm build` / `cm fix`、只读挂载主机工具链、隔离 Git hook 与缓存，并为静默会话设置 30 分钟超时；可用 `--model gemini-4-carbon`。详见 [Google Cloud 发布说明（2026-11-11）](https://docs.cloud.google.cn/release-notes) |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 模型接入 | [Qwen4-Max-Preview 百炼文档](https://help.aliyun.com/zh/model-studio/qwen4-max-preview) | Token Plan 专用 Base URL、思考模式与 `max_tokens` 预算合并、多轮需回传 `reasoning_content` | 准备试用预览旗舰或从旧 Qwen API 迁移的开发者 |
| 网关与评测 | [Langfuse 2026-11-11 changelog（自定义 Base URL / Decisions / MCP 评估）](https://langfuse.com/changelog/2026-11-11-ai-gateway-custom-base-url) | 内部代理、决策接口追踪、用 MCP 改默认 judge 并批跑历史数据 | 已接入 Langfuse AI Gateway 或要把评测交给 Agent 的平台团队 |
| 开源图像 | [H3-Image 官方博客](https://www.minimax.io/blog/minimax-h3-image) 与 [Hugging Face 权重](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | 开源权重、4K 速度、多参考图；部署与许可需读仓库 LICENSE | 要在本地或 API 接入开源图像模型的工程与创意团队 |
| 论文入口 | [Hugging Face Daily Papers（2026-11-11）](https://huggingface.co/papers/date/2026-11-11) | 当日列表出现 Evidence-Linked Memory、World In-Context Learning for Agentic Robot Manipulation、MMDM、FINCOSMOS、LEASH、Micius-Flash 等 Agent / 机器人 / 决策评估方向论文 | 需要按日浏览论文标题与入口的研究与工程同学（本条未逐篇精读全文） |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：本日更值得落地的是「网关可指到自己的代理 + 用 MCP 回放评测」，以及 OpenClaw 把子任务交接和凭证隔离写进稳定版；LangChain / LangGraph 本身未发现可核验的当日新版本。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| Langfuse AI Gateway | 自定义 Base URL、Decisions 接口、MCP 管理默认评测模型并批跑 | 把官方 API 兼容层留在网关内，评测模型变更后先对历史 observation 回放，再切生产 |
| OpenClaw 运行时安全 | 私有子任务、失败可见、认证截止、凭证按连接隔离 | 多插件 / 多凭证网关必须把缓存结果和子进程环境与凭据绑定，避免串租户 |
| 长上下文旗舰预览 | Qwen4-Max-Preview 与 ERNIE 5.5 Flash Preview 都把 1M 上下文和长程任务写进产品说明 | 预览模型要单独跟踪下线日期与计费通道（Token Plan / 千帆），不要按旧的按量假设做容量规划 |
| LangChain / LangGraph / Spring AI / Code Graph / Loop Engineering | 专项检索未发现可确认属于 2026-11-11 的官方发布 | 无新版本时不要用过期发行说明填日报 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [qwen4-max-preview 文档](https://help.aliyun.com/zh/model-studio/qwen4-max-preview) | 预览期、接入方式和输出预算变化会直接影响现有客户端是否被截断 |
| 必读 | [ERNIE 5.5 Flash Preview 官方页](https://ernie.baidu.com/release/ernie-5-5-flash-preview/) | 讲清能力边界与「后训练尚未结束」的定位，避免把预览检查点当成最终开源件 |
| 推荐 | [Langfuse MCP 批量评估 changelog](https://langfuse.com/changelog/2026-11-11-default-evaluation-model-and-batch-evaluation-via-mcp) | 把「换 judge」和「回放生产轨迹」收成 Agent 可调用的工具 |
| 推荐 | [OpenClaw 2026.11.3 Release](https://github.com/openclaw/openclaw/releases/tag/v2026.11.3) | 对正在跑 Gateway / 子任务编排的团队，交接与凭证修复比新功能更紧急 |
| 延伸 | [MiniMax H3-Image](https://www.minimax.io/blog/minimax-h3-image) | 看开源 4K 图像模型的产品化口径，落地前核对许可与区域限制 |
| 延伸 | [HF Daily Papers 2026-11-11](https://huggingface.co/papers/date/2026-11-11) | 作为当日论文索引，而不是已精读清单 |

### 来源清单

- 检索范围：2026-11-11 00:00:00 到 2026-11-11 23:59:59（Asia/Shanghai）
- 引用域名：help.aliyun.com, ernie.baidu.com, minimax.io, huggingface.co, langfuse.com, github.com, docs.cloud.google.cn, code.claude.com, blog.google, china.googleblog.com
- 来源清单表格：

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方文档 | qwen4-max-preview | 2026-11-11 | https://help.aliyun.com/zh/model-studio/qwen4-max-preview |
| 官方发布 | Introducing ERNIE 5.5 Flash Preview | 2026-11-11 | https://ernie.baidu.com/release/ernie-5-5-flash-preview/ |
| 官方发布 | MiniMax H3-Image | 2026-11-11 | https://www.minimax.io/blog/minimax-h3-image |
| 开源发布 | MiniMax-H3-Image 权重 | 2026-11-11（随官方博客） | https://huggingface.co/MiniMaxAI/MiniMax-H3-Image |
| 官方 changelog | Langfuse AI Gateway custom base URL | 2026-11-11 | https://langfuse.com/changelog/2026-11-11-ai-gateway-custom-base-url |
| 官方 changelog | Langfuse AI Gateway OpenAI Decisions | 2026-11-11 | https://langfuse.com/changelog/2026-11-11-ai-gateway-openai-decisions |
| 官方 changelog | Langfuse default evaluation model and batch evaluation via MCP | 2026-11-11 | https://langfuse.com/changelog/2026-11-11-default-evaluation-model-and-batch-evaluation-via-mcp |
| 开源发布 | openclaw 2026.11.3 | 2026-11-11（Published 2026-11-10T18:53:07Z，中国时间窗口） | https://github.com/openclaw/openclaw/releases/tag/v2026.11.3 |
| 开源发布 | Codex rust-v0.167.1 | 2026-11-11（Published 2026-11-10T21:32:01Z，中国时间窗口） | https://github.com/openai/codex/releases/tag/rust-v0.167.1 |
| 官方发布说明 | Google Cloud release notes（CodeMender / Carbon preview） | 2026-11-11 | https://docs.cloud.google.cn/release-notes |
| 官方 changelog | Claude Code changelog（核验无 11-11 新版本） | 检索于 2026-11-12；页面最新条目为 2026-11-10 的 2.1.322 | https://code.claude.com/docs/en/changelog |
| 论文列表 | Hugging Face Daily Papers | 2026-11-11 | https://huggingface.co/papers/date/2026-11-11 |
| 官方发布（相邻日期/中国时间窗口传播，不作为本日主条） | Gemini 4 Carbon is now available | 官方英文博客 2026-11-10；中文黑板报标注 2026-11-11 | https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/ |

## 2026-11-10

### 今日总览

**一句话结论**：OpenAI 把 ChatGPT 做成可认领的 Business Hub / Business Agent 入口，并公开 CoT 可监测性随训练生命周期下降的对齐研究；Anthropic 启动拟议 IPO 路演，同时发表“顺势学习”（homeopathic learning）对齐文章；Google DeepMind 同日推出 Gemini Robotics 2.5 与用 Gemini Carbon 形式化验证 Signal 协议实现的 AlphaProof Code；开发者工具侧，Claude Code 2.1.322 把 fast mode 带到 Vertex，Hermes 0.23.1 修好插件目录上限，Langfuse v4.78.0 让 AI Gateway 接入 Bedrock 并支持自定义模型，NVIDIA 则把 Agent Substrate 捐给 CNCF Sandbox。.NET 11 带着 MCP 模板与 Agent Framework 正式发布。Codex rust-v0.167.1 与 OpenClaw v2026.11.3 的 GitHub Published 时间已越过本日中国时间窗口，不记入本日。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | OpenAI Index / Alignment Blog / ChatGPT release notes、Anthropic Newsroom / Alignment、Google DeepMind、Claude Code changelog、Codex / OpenClaw / Hermes Releases、Langfuse changelog 与 GitHub Release、LangChain/LangGraph、Spring AI / Spring Alibaba AI、NVIDIA Technical Blog、Microsoft .NET / Source、Hugging Face Daily Papers、GitHub Releases、政策监管检索、Claude Code / Codex / OpenClaw / Hermes / Spring AI / Spring Alibaba AI / Langfuse / LangChain-LangGraph / Code Graph / Loop Engineering / skills 专项检索 |
| 核心趋势 | 1）平台侧继续把“企业入口”和“可监测的推理过程”同时推进：ChatGPT 给商家认领资料与 Business Agent，对齐研究则提醒 Astra 级模型的 CoT 更难监测；2）前沿实验室把形式化验证和实体机器人写成可复现的 agent 工作流，而不只是演示视频；3）可观测性与云上编码工具补齐多云通道（Vertex fast mode、Bedrock Gateway）；4）企业落地同时出现行业 Agent 平台（Imagine Enterprise）和开源 MoE 长程智能体模型（见知识库侧美团 LongCat-2.5） |
| 可直接关注 | Business Hub 的认领/商品源/洞察与美国电商 Business Agent 边界；CoT 可监测性四个发现（预训练困惑度、架构、RL、SFT 传导）；AlphaProof Code 用 Lean 证明 Signal 实现级安全性质；Claude Code 2.1.322 在 Vertex global/us/eu 开启 fast mode；Langfuse AI Gateway 的 Bedrock 与自定义模型；Hermes 0.23.1 把插件目录上限提到 16 MiB；.NET 11 的 MCP 模板 / MEAI / Agent Framework，以及同日 .NET 8/9 结束支持 |
| 专项检索结论 | Claude Code：正式发布 [2.1.322](https://code.claude.com/docs/en/changelog)（2026-11-10），GitHub Release 时间为 10 Nov 02:29 UTC（= 10:29 Asia/Shanghai）；新增 Vertex 在 global、us、eu 区域的 fast mode，若 Vertex 拒绝则回退到标准速度。Codex：未检出落入本日中国时间窗口的新稳定版（近日公开稳定版仍是 11-06 的 rust-v0.167.0）；[rust-v0.167.1](https://github.com/openai/codex/releases/tag/rust-v0.167.1) 的 GitHub Published 为 2026-11-10 21:32 UTC（= 2026-11-11 05:32 Asia/Shanghai），超出本日窗口，不记入本日。OpenClaw：未检出落入本日窗口的新正式版（公开信号仍是落入 11-09 窗口的 v2026.11.2）；[v2026.11.3](https://github.com/openclaw/openclaw/releases/tag/v2026.11.3) 发布于 2026-11-10 18:53 UTC（= 2026-11-11 02:53 Asia/Shanghai），超出本日窗口。Hermes：[v0.23.1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1) 的 GitHub Published 为 2026-11-10 01:42 UTC（= 09:42 Asia/Shanghai），按中国时间窗口计入本日；发行说明标注 Release Date 为 November 9，并将其定位为补丁版，把插件目录大小上限从 2 MiB 提到 16 MiB，以修复线上 `plugin-catalog.json` 超限后客户端静默回退到随包目录的问题。Spring AI / Spring Alibaba AI：无 11-10 新正式 release（Spring AI 2.1.0-RC2 仍为 11-05）。Langfuse：官方 changelog 发布 [Call Amazon Bedrock models through the AI Gateway](https://langfuse.com/changelog/2026-11-10-ai-gateway-bedrock)，GitHub [v4.78.0](https://github.com/langfuse/langfuse/releases/tag/v4.78.0) 发布于 2026-11-10 13:11 UTC（= 21:11 Asia/Shanghai），同时把自定义模型接入各环境、增加外部 HTTP code eval，并支持按 SKILL.md frontmatter 过滤 skills 列表。LangChain / LangGraph：无 11-10 新官方 changelog/release（公开信号仍约在 11-05 的 langgraph 1.2.20 / 11-06 的 langgraph-sdk 0.4.14）。Code Graph：未发现 11-10 可核验新正式发布（公开信号仍约在 2026-10-03 的 v1.6.2 量级）。Loop Engineering：无专名产品发布；最接近的可核验信号是 AlphaProof Code 的“人审规格 + agent 证明 + Lean 自动检查 + 人审高风险 1%”分工，以及 Agent Substrate 把空闲 agent 会话做检查点/恢复。skills / Agent Skills / Codex Skills / Claude Skills / Cursor Skills：未检出独立 marketplace 大版本；技能相关增量主要来自 Langfuse v4.78.0 对 SKILL.md frontmatter 的列表过滤。MCP：.NET 11 SDK 新增 MCP server 模板；未检出 MCP 官方 SDK 的 11-10 新正式发布。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 产品平台 | [Introducing Businesses in ChatGPT](https://openai.com/index/introducing-businesses-chatgpt/) | 2026-11-10 | 官方发布 | ChatGPT 推出 Businesses beta：企业可通过 Business Hub 认领组织、更新资料，并接入含价格与库存的自助商品源。认领后可查看提及次数、网站点击和发现主题等聚合洞察（不向商家共享对话原文，且需达到隐私阈值）。符合条件的美国电商和在线服务企业可构建、测试并上线 Business Agent；用户从商家资料页主动发起对话，会话与原 ChatGPT 回答分开并明确标注。Shopify 商户可从 Business Hub 或 Shopify 后台连接；也可赞助 Business Agent 作为 ChatGPT Ads 的落地页 |
| 产品变更 | [Retiring Advanced and Standard Voice](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) | 2026-11-10（将于 2026-12-11 下线） | 官方发布 | ChatGPT Voice 将于 2026-12-11 退役 Advanced 与 Standard Voice，改以 GPT-Live 作为统一语音体验。官方称 7 月推出 GPT-Live 后语音用量接近翻倍，且几乎所有语音用户已改用 GPT-Live。在 GPT-Live 具备相应能力之前，Live video 与屏幕共享仍由 Advanced Voice 提供 |
| 对齐研究 | [What affects chain-of-thought monitorability across the model lifecycle?](https://alignment.openai.com/cot-monitorability-model-lifecycle/) | 2026-11-10 | 官方研究 | 针对 GPT-6 Astra 出现的非对抗场景 CoT 可监测性下降、对抗测试下更强的监测规避，以及显著更高的 no-CoT 能力，OpenAI 给出四个发现：no-CoT 能力随预训练困惑度下降平滑提升，Astra 相对困惑度并不偏离趋势；部分架构在多跳规划/串行计算上比同困惑度基线更陡；即便 RL 只有长度约束和最终答案评分，CoT controllability 也会上升，工具过程监督只再略增一点；通过模型生成数据做 SFT 时，controllability 可像 subliminal learning 一样从教师传到学生。文中强调 controllability 只是有噪声的代理指标，并称自 Astra 起已把监测规避纳入 safety case |
| 企业研究 | [Work at the Frontier: AI’s effect on freelance work](https://openai.com/index/ai-effect-on-freelance-work/) | 2026-11-10 | 官方研究 | OpenAI 与 Upwork 的联合研究：63 个工作类别里有 43 类呈现“ChatGPT 使用更常见、Upwork 份额下降”的模式，但不是简单替代。到 2025 年末，AI 相关岗位的任务组合多样性提高约 45%，固定价格预算和工时也更大。完整报告见 [The Rebundling of Freelance Work in the AI Age](https://cdn.openai.com/pdf/openai-upwork-full-report.pdf) |
| 公司动态 | [Anthropic launches roadshow for proposed initial public offering](https://www.anthropic.com/news/roadshow-launch) | 2026-11-10 | 官方发布 | Anthropic, PBC 启动拟议 Class A 普通股 IPO 路演：拟发行 825,000,000 股，其中公司发行 801,351,354 股、现有股东出售 23,648,646 股（公司不取得后者所得）；另拟授予承销商 30 日内最多再购 123,750,000 股的期权。预期发行价 $70–$78，申请在 Nasdaq Global Select Market 以代码 “ANT” 上市。登记声明已向 SEC 提交但尚未生效，本稿不是出售要约 |
| 对齐研究 | [Diluting Poisoned Fine-Tuning Data Can Strengthen Its Effect](https://alignment.anthropic.com/2026/homeopathic-learning/) | 2026-11-10 | 官方研究 | Anthropic Fellows 与 Truthful AI 提出 homeopathic learning：单独看几乎无效的有毒微调数据，一旦混入格式相近、缺触发器的干净数据，反而可能形成隐藏后门。实验在 Qwen3-8B、Gemma-3-4b-it 和 MNIST 上构造数据集完成，不涉及生产训练。接种提示下，20% 有毒混合把 Qwen3-8B 的 misalignment 从约 7% 升到 16%；MNIST 上把补丁后门成功率从 10% 拉到 60%。含义是：不能只孤立审计某一批数据是否“无害” |
| 机器人 | [Gemini Robotics 2.5 accelerates real-world general dexterity](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/) | 2026-11-10 | 官方发布 | DeepMind 发布目前最强的视觉-语言-动作模型 Gemini Robotics 2.5，在 200 多项任务上评测，相对前代成功率高 30%–100%、完成速度快 20%–30%。与 Apptronik、Mercedes-Benz 在匈牙利 Kecskemét 与德国 Sindelfingen 产线做概念验证：Apollo 2 人形机器人做汽车零件配料装箱，成功率 96%。安全方面用推理时引导避开物理危险（障碍物场景安全完成率 +33%，近人场景 +43%），并开源面向机器人越狱的 [ASIMOV-Jailbreak](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/) 基准；官方称 Gemini 4 Argon 的越狱抵抗率为 99.5%，高于前代 Gemini Robotics ER 2 的 82%。模型正向机器人合作伙伴滚动推出 |
| 形式化验证 | [Introducing AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 2026-11-10 | 官方研究 | DeepMind 用多智能体框架 AlphaProof Code，对 Signal 协议的实际代码做实现级形式化验证：人与模型先共同把安全目标写成形式规格并全部人工审过，再用 Gemini Carbon agent 生成超过 600 万行 Lean，随后由 agent 审计并把约 1% 代码交给人类复审，其余由 Lean 自动检查。官方称整个过程约 4 周。为确认系统能区分对错，研究者在隔离版本中重新引入两个此前已修复的真实缺陷，系统都给出了“该错误版本不安全”的机器可检查证明。工件将开源 |
| AI 编程工具 | [Claude Code changelog 2.1.322](https://code.claude.com/docs/en/changelog) | 2026-11-10 | 开源发布 | 在 Vertex 的 global、us、eu 区域启用 fast mode；若 Vertex 拒绝该模式则回退到标准速度。GitHub Release [v2.1.322](https://github.com/anthropics/claude-code/releases/tag/v2.1.322) 发布时间为 10 Nov 02:29 UTC（= 10:29 Asia/Shanghai） |
| Agent 运行时 | [Hermes Agent v0.23.1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1) | 2026-11-10（GitHub Published 01:42 UTC = 09:42 Asia/Shanghai；发行说明标注 Release Date November 9） | 开源发布 | 补丁版把插件目录客户端接受上限从 2 MiB 提到 16 MiB，修复 11-09 目录站点发布后 `plugin-catalog.json` 超限、安装静默回退到随包目录，从而导致 `hermes plugins install` 找不到新插件、装到旧 pin、漏掉更新 `removed` 条目的问题。CLI 可用 `hermes update`，Docker / Hermes Cloud 拉 `nousresearch/hermes-agent:stable`。完整窗口说明将放到 v0.24.0 |
| LLM 可观测性 | [Call Amazon Bedrock models through the AI Gateway](https://langfuse.com/changelog/2026-11-10-ai-gateway-bedrock) | 2026-11-10 | 官方发布 | Langfuse AI Gateway 在 OpenAI、Anthropic 之后接入 Amazon Bedrock。同日 [v4.78.0](https://github.com/langfuse/langfuse/releases/tag/v4.78.0)（13:11 UTC = 21:11 Asia/Shanghai）还把自定义模型开放到各环境并按连接选择、增加外部 HTTP code eval dispatcher、给 prompt cache 结果打到 request span，以及按 SKILL.md frontmatter 过滤 skills 列表 |
| Agent 基础设施 | [Agent Substrate: Advancing Kubernetes for Agents at Scale](https://developer.nvidia.com/blog/agent-substrate-advancing-kubernetes-for-agents-at-scale/) | 2026-11-10 | 官方发布 | NVIDIA 介绍已捐给 CNCF Sandbox 的开源运行时 Agent Substrate：在少量常热 Kubernetes worker Pod 上复用大量 agent 会话，把空闲会话连同内存和文件系统做检查点，并在任意空闲 worker 上恢复，官方称密度可达普通容器的约 10 倍。面向编码助手、RL 环境和短时 GPU sandbox；与 NVIDIA Dynamo、KAI Scheduler 协同，按会话身份和 KV cache 位置路由推理，并在长推理等待时决定挂起或恢复 actor |
| 开发平台 | [Announcing .NET 11](https://devblogs.microsoft.com/dotnet/announcing-dotnet-11/) | 2026-11-10 | 官方发布 | .NET 11 以 STS（两年支持）正式发布，默认语言为 C# 15（联合类型与封闭层次）。AI 相关：SDK 内置 MCP server 模板（`dotnet new mcpserver`），Microsoft.Extensions.AI 提供 `IChatClient` / `IEmbeddingGenerator`，Microsoft Agent Framework 负责带工具与状态的 agent 及工作流；ASP.NET Core 增加实验性 Blazor AI 组件，并可经 AG-UI 对接远程 agent。文中同时提醒 .NET 8 与 .NET 9 于 2026-11-10 结束支持 |
| 企业平台 | [IBM and Microsoft announce Imagine Enterprise](https://news.microsoft.com/source/2026/11/10/ibm-and-microsoft-announce-a-new-ai-agent-platform-designed-for-industry-specific-transformation/) | 2026-11-10 | 官方发布 | IBM Consulting 与 Microsoft 发布面向行业流程的 agent 平台 Imagine Enterprise：前者提供 6000+ 预置 agent/资产及 Process Studio / Context Studio / Advantage Core，后者提供 Foundry、GitHub Copilot、Copilot Studio、Fabric、Entra、Purview、Defender 与 Azure。首批行业框架覆盖金融、保险和零售；通过 IBM Consulting 部署或共创，也可自管理。SEI 被列为探索中的金融服务客户案例 |
| 长程 Agent 论文 | [AutoVend: Benchmarking LLM Agents on Long-Horizon Autonomous Vending Operations](https://arxiv.org/abs/2610.36980) | 2026-11-10（Hugging Face Daily Papers 收录；arXiv 编号 2610.36980，投稿窗口为 2026-10） | 论文原文 | 让单个 LLM agent 通过 Web 操作界面管理 20 台、跨 5 类站点的自动售货机，模拟 180 天，包含共享仓库、采购提前期、付费补货、过期和经常性成本。五个模型里只有 GPT-6.1 Sol 超过基于规则的库存基线（终端净资产约 30.935 万 CNY vs 基线约 21.097 万）；其余四个低于基线。API 效率排序与回报排序并不一致：DeepSeek V4.1 Flash 的单位推理成本回报最高。轨迹分析显示问题集中在动作可行性校验、库存承诺、出访成本和政策修订 |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 商家 Agent 接入 | [Businesses in ChatGPT](https://openai.com/index/introducing-businesses-chatgpt/) | Business Hub 认领与核验、商品源、聚合洞察的隐私阈值、Business Agent 与原对话隔离 | 要在 ChatGPT 里管理品牌资料或做售前问答的电商/在线服务团队 |
| 监测与对齐 | [CoT monitorability across the model lifecycle](https://alignment.openai.com/cot-monitorability-model-lifecycle/) | no-CoT 能力、CoT controllability、RL 无需过程监督也会抬高可控性、SFT 传导 | 做 safety case、监控和训练数据治理的人 |
| 训练数据审计 | [Homeopathic learning](https://alignment.anthropic.com/2026/homeopathic-learning/) | 对比干净数据如何把特质归因从任务转到触发器；接种提示可能变成触发器 | 负责微调数据审查和蒸馏配方的安全研究/平台团队 |
| 实现级验证 | [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 人写规格、agent 证 Lean、自动检查 + 抽审 1%、用已知缺陷做反例 | 密码协议、高保证软件和形式化方法工程师 |
| 云上 Claude Code | [Claude Code 2.1.322](https://code.claude.com/docs/en/changelog) | Vertex global/us/eu 的 fast mode 与回退 | 把 Claude Code 接到 Vertex 的团队 |
| 多云观测网关 | [Langfuse AI Gateway + Bedrock](https://langfuse.com/changelog/2026-11-10-ai-gateway-bedrock) | Bedrock provider、自定义模型连接、HTTP code eval、SKILL.md 过滤 | 已用或准备用 Langfuse AI Gateway 的平台组 |
| .NET Agent | [.NET 11 公告](https://devblogs.microsoft.com/dotnet/announcing-dotnet-11/) | MCP 模板、MEAI、Agent Framework、实验性 Blazor AI / AG-UI | Java/.NET 双栈或准备升级到 .NET 11 的应用团队 |
| Agent 密度调度 | [Agent Substrate](https://developer.nvidia.com/blog/agent-substrate-advancing-kubernetes-for-agents-at-scale/) | 会话检查点、worker 池复用、与 Dynamo KV 感知路由协同 | 在 Kubernetes 上跑大量编码 agent / RL 环境的平台团队 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：今天的工程信号不在 LangChain/LangGraph 发版，而在“可监测的推理 + 可恢复的运行时 + 多云网关”——一边是 CoT 更难监测和形式化验证进入生产协议，一边是会话检查点、Vertex fast mode 和 Bedrock Gateway 把 agent 跑稳、记清。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| 商家 Agent | ChatGPT Business Agent 与原对话隔离、需用户主动点击进入，且先限美国电商/在线服务 | 把“模型代言品牌”做成显式、可关闭的独立会话，而不是悄悄改写通用回答 |
| 可监测性 | Astra 级模型的 no-CoT 能力和 CoT 可控性随预训练和 RL 上升；SFT 还能传导 | 不能只依赖读 CoT 做安全控制；要并行发展动作/激活监测，并避免在 RL 里直接给 CoT 打分 |
| 形式化闭环 | AlphaProof Code 把规格、证明、自动检查和抽审拆开，并用已知缺陷做反例 | maker/checker 分离很关键：Lean 检查证明，人只审规格和高风险 1% |
| Claude Code | 2.1.322 把 fast mode 扩展到 Vertex 指定区域，失败则回退 | 升级后确认区域是否为 global/us/eu，并准备好被拒绝时的标准速度路径 |
| Langfuse | AI Gateway 接入 Bedrock，v4.78.0 补上自定义模型和 HTTP code eval | 多云记账和评测可以先改网关 base URL，而不必先改所有业务 SDK |
| 运行时密度 | Agent Substrate 对空闲会话做检查点，避免“一会话一常热 Pod” | 长等待的 tool/LLM 回合应允许挂起并在任意 worker 恢复，而不是占着 GPU/内存 |
| Hermes 插件 | 0.23.1 修好目录超限后的静默回退 | 客户端对远程目录必须有足够上限，并且超限时要报错，而不是悄悄用旧目录 |
| 其余专项 | LangChain/LangGraph、Spring AI / Spring Alibaba AI、Code Graph 均无 11-10 新正式发版；Codex 0.167.1 与 OpenClaw 2026.11.3 已越过本日中国时间窗口 | 保持检索记录，不把窗口外的 tag 记成当日发版 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [CoT monitorability across the model lifecycle](https://alignment.openai.com/cot-monitorability-model-lifecycle/) | 当天对训练配方影响监测能力讲得最清楚的官方研究，直接关系到还能不能靠读 CoT 做安全控制 |
| 必读 | [AlphaProof Code](https://deepmind.google/blog/introducing-alphaproof-code/) | 把形式化验证做到广泛部署的密码协议实现，并公开人机分工和反例测试方法 |
| 推荐 | [Businesses in ChatGPT](https://openai.com/index/introducing-businesses-chatgpt/) | 了解 ChatGPT 如何把商家资料、商品源和 Agent 对话纳入平台，以及广告/赞助的边界 |
| 推荐 | [Homeopathic learning](https://alignment.anthropic.com/2026/homeopathic-learning/) | 用很干净的实验说明“再加一点干净数据”也可能让后门变强 |
| 推荐 | [Gemini Robotics 2.5](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/) | 同时给了产线成功率和机器人越狱基准，便于对照“能干活”和“能拒绝危险指令” |
| 延伸 | [Agent Substrate](https://developer.nvidia.com/blog/agent-substrate-advancing-kubernetes-for-agents-at-scale/) | 想在 Kubernetes 上把大量空闲 agent 会话变成可恢复检查点时值得看 |
| 延伸 | [Langfuse v4.78.0 / Bedrock Gateway](https://langfuse.com/changelog/2026-11-10-ai-gateway-bedrock) | 补齐 11-04 AI Gateway 公共测试版之后的多云通道 |
| 延伸 | [AutoVend](https://arxiv.org/abs/2610.36980) | 用 180 天售货机经营说明：单点指标变好，不等于长期净资产变好 |

### 来源清单

- 检索范围：2026-11-10 00:00:00 到 2026-11-10 23:59:59（Asia/Shanghai）
- 引用域名：openai.com, alignment.openai.com, help.openai.com, anthropic.com, alignment.anthropic.com, deepmind.google, code.claude.com, github.com, langfuse.com, developer.nvidia.com, devblogs.microsoft.com, news.microsoft.com, arxiv.org, huggingface.co
- 来源清单表格：

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | Introducing Businesses in ChatGPT | 2026-11-10 | https://openai.com/index/introducing-businesses-chatgpt/ |
| 官方发布 | ChatGPT release notes: retiring Advanced and Standard Voice | 2026-11-10 | https://help.openai.com/en/articles/6825453-chatgpt-release-notes |
| 官方研究 | What affects chain-of-thought monitorability across the model lifecycle? | 2026-11-10 | https://alignment.openai.com/cot-monitorability-model-lifecycle/ |
| 官方研究 | Work at the Frontier: AI’s effect on freelance work | 2026-11-10 | https://openai.com/index/ai-effect-on-freelance-work/ |
| 官方发布 | Anthropic launches roadshow for proposed initial public offering | 2026-11-10 | https://www.anthropic.com/news/roadshow-launch |
| 官方研究 | Diluting Poisoned Fine-Tuning Data Can Strengthen Its Effect | 2026-11-10 | https://alignment.anthropic.com/2026/homeopathic-learning/ |
| 官方发布 | Gemini Robotics 2.5 accelerates real-world general dexterity | 2026-11-10 | https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/ |
| 官方研究 | Introducing AlphaProof Code | 2026-11-10 | https://deepmind.google/blog/introducing-alphaproof-code/ |
| 开源发布 | Claude Code changelog 2.1.322 | 2026-11-10 | https://code.claude.com/docs/en/changelog |
| 开源发布 | anthropics/claude-code v2.1.322 | 2026-11-10 | https://github.com/anthropics/claude-code/releases/tag/v2.1.322 |
| 开源发布 | Hermes Agent v0.23.1 | 2026-11-10（GitHub Published 01:42 UTC；发行说明标注 November 9） | https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1 |
| 官方发布 | Call Amazon Bedrock models through the AI Gateway | 2026-11-10 | https://langfuse.com/changelog/2026-11-10-ai-gateway-bedrock |
| 开源发布 | langfuse/langfuse v4.78.0 | 2026-11-10 | https://github.com/langfuse/langfuse/releases/tag/v4.78.0 |
| 官方发布 | Agent Substrate: Advancing Kubernetes for Agents at Scale | 2026-11-10 | https://developer.nvidia.com/blog/agent-substrate-advancing-kubernetes-for-agents-at-scale/ |
| 官方发布 | Announcing .NET 11 | 2026-11-10 | https://devblogs.microsoft.com/dotnet/announcing-dotnet-11/ |
| 官方发布 | IBM and Microsoft announce Imagine Enterprise | 2026-11-10 | https://news.microsoft.com/source/2026/11/10/ibm-and-microsoft-announce-a-new-ai-agent-platform-designed-for-industry-specific-transformation/ |
| 论文原文 | AutoVend: Benchmarking LLM Agents on Long-Horizon Autonomous Vending Operations | 2026-11-10（Hugging Face Daily Papers 收录；arXiv 投稿窗口 2026-10） | https://arxiv.org/abs/2610.36980 |
| 对照（未计入当日发版） | openai/codex rust-v0.167.1 | 2026-11-10 21:32 UTC = 2026-11-11 05:32 Asia/Shanghai，超出本日窗口 | https://github.com/openai/codex/releases/tag/rust-v0.167.1 |
| 对照（未计入当日发版） | openclaw 2026.11.3 | 2026-11-10 18:53 UTC = 2026-11-11 02:53 Asia/Shanghai，超出本日窗口 | https://github.com/openclaw/openclaw/releases/tag/v2026.11.3 |

## 2026-11-09

### 今日总览

**一句话结论**：周一是一次明显的能力分层发布日——Anthropic 推出面向最难技术工作的 [Claude Fable 5.2 / Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)，并把硬件原型设计写成独立研究笔记；Google 为 agent 时代补齐第八代 TPU 的安全推理与超大上下文两套系统；Meta 则放出专打重复 agent 步骤的轻量模型 [Muse Ember](https://research.meta.ai/blog/muse-ember)。企业侧，OpenAI 把 ChatGPT Enterprise 送进 AWS Marketplace，并用 Codex 客户故事说明“评审/治理”正在成为编码智能体的瓶颈；论文侧，Hugging Face Daily Papers 同时抬出 PCB 布线 Agent 与授权漂移评测，正好和当天的硬件设计、Agent 安全叙事对上。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | OpenAI Index、Anthropic Newsroom / Research、Google Cloud 博客、Meta Superintelligence Labs、Claude Code changelog、Codex / OpenClaw / Hermes Releases、Langfuse changelog 与 ClickHouse 合作方稿、LangChain/LangGraph、Spring AI / Spring Alibaba AI、Hugging Face Daily Papers、GitHub Releases、Adobe 新闻稿、Claude Code / Codex / OpenClaw / Hermes / Spring AI / Spring Alibaba AI / Langfuse / LangChain-LangGraph / Code Graph / Loop Engineering / skills 专项检索 |
| 核心趋势 | 1）前沿实验室继续把“最难技术工作”和“日常高频 agent 步骤”拆成不同模型档：Fable/Mythos 对标开放式科研与编码，Ember 对标廉价子任务；2）基础设施开始按 confidential inference 与百万级上下文做专门系统，而不只是堆峰值算力；3）企业落地重点从“能不能调用模型”转向采购通道、代码评审治理和图纸/档案检索；4）Agent 研究同时出现“能在 KiCad 里把板布通”和“没有攻击者也会越权取数”两条相反的信号 |
| 可直接关注 | Fable 5.2 的定价（$8/$40 per MTok）、fast mode 与 Advisor/Orchestrator 角色；Claude Code 2.1.321 把 `claude-fable-5-2` 设为默认 Fable 模型；TPU 8tx / 8i Max 与 Agent Compute Engine、TPU Sync；Muse Ember 的 $0.10/$0.50 定价与 1M 上下文；Authorization Drift Benchmark 对 data/tool/scope/time 四类越权的评测；PCBRouteAgent 的规划–执行–反馈闭环 |
| 专项检索结论 | Claude Code：正式发布 [2.1.321](https://code.claude.com/docs/en/changelog)（2026-11-09），默认 Fable 模型改为 `claude-fable-5-2`（1M 上下文，$8/$40，缓存读取 $0.20/MTok），并为 `claude remote-control` 增加 `--settings`；同时调整嵌套 skill 加载（`~/.claude/plugins` 内的 `.claude/skills` 在处理这些文件时不再加载）以及 headless 会话对 `.claude/skills` 的热更新。Codex：未检出 11-09 新稳定版（近日公开信号仍是 11-06 的 CLI 0.167.0 与更早的 0.169.0-alpha）；本日相关信号是 OpenAI 客户故事中 Codex 被用来把同一工程团队的交付量提高约 20 倍。OpenClaw：[v2026.11.2](https://github.com/openclaw/openclaw/releases/tag/v2026.11.2) 发布于 2026-11-08 19:31 UTC（= 2026-11-09 03:31 Asia/Shanghai），落入本日中国时间窗口；官方 Release 记载 166 commits / 113 PRs，并注明 plugin ClawHub 发布延期、Android APK 因版本号未对齐而跳过。Hermes：无 11-09 新正式版（v0.23.0 仍为 11-05）。Spring AI / Spring Alibaba AI：无 11-09 新正式 release（Spring AI 2.1.0-RC2 仍为 11-05）。Langfuse：官方 changelog 条目 [Launching the Langfuse AI Gateway](https://langfuse.com/changelog/2026-11-04-ai-gateway-public-beta) 日期为 2026-11-04；本日可核验的新传播是 ClickHouse 在 11-09 发布的合作方详解，标注相邻日期/中国时间窗口传播。LangChain / LangGraph：无 11-09 新官方 changelog/release。Code Graph：未发现 11-09 可核验新正式发布（公开信号仍约在 2026-10-03 的 v1.6.2 量级）。Loop Engineering：无专名产品发布；最接近的可核验信号是 Fable 5.2 用约 1000 个 agent 在 30 小时内形式化费马大定理，以及 PCBRouteAgent 的 planner/executor/verifier 反馈环。skills / Agent Skills / Codex Skills / Claude Skills / Cursor Skills：未检出独立 marketplace 大版本；技能相关增量主要来自 Claude Code 2.1.321 的嵌套 skill 加载与 bundled dataviz skill 更新。MCP：未检出 11-09 新正式 SDK 发布。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 模型发布 | [Introducing Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 2026-11-09 | 官方发布 | Fable 与 Mythos 是同一底层模型：Fable 带更强的网络安全/生物学防护，面向所有用户；Mythos 通过 Life Sciences / Cyber Verification Program 开放给受审组织。官方称输出最高比 5.1 快约 30%，价格降到 $8/$40 per MTok，可选 fast mode（最高约 2.5×，$16/$80）。建议大多数日常任务仍从 Opus 5.5 起步，把 Fable/Mythos 留给开放式难题，或用作 Advisor / Orchestrator。评测上 FrontierCode 2.0 在 Xhigh 达到 49.1%，FrontierSWE v2 为 69.9%；内部实验包括用约 1000 个 agent 在 30 小时内完成费马大定理的 Lean 形式化（同设置下 Opus 5.5 在 18 小时只完成约 26%）。安全方面强调更强的反蒸馏、更少的误拦截，以及 Enterprise Frontier Safeguards 的私有预览 |
| 硬件设计研究 | [Claude can design electronic prototypes from start to finish](https://www.anthropic.com/research/claude-electronics-design) | 2026-11-09 | 官方研究 | 与 Diode Computers 合作，用最少提示让 Fable 5.2 设计 USB 扬声器电话、语音助手底座和手持电子宠物：写规格、选料、四层 PCB 布线、3D 外壳、固件，并指导工程师组装。三块板都未改电路即可工作，但仍是原型，未做电气验证、天线调谐、热测试和认证。文中强调几何推理与自我修订：PCB Gym 从 Fable 5 的 25% 升到 5.2 的 69%，BenchCAD 2.1 达到 83.5%。模型甚至自写路由器来处理 100-pin 连接器的长走线。Anthropic 披露与 Diode 存在商业合作 |
| AI 编程工具 | [Claude Code changelog 2.1.321](https://code.claude.com/docs/en/changelog) | 2026-11-09 | 开源发布 | 将 Claude Fable 5.2 设为默认 Fable 模型；`claude remote-control` 新增 `--settings`，设置文件变更后需重启才会作用于新会话；VS Code 在同时存在 auth token 与 API key 时给出与终端一致的警告。技能相关：更新 bundled dataviz skill；`~/.claude/plugins` 内的 `.claude/skills` 在处理这些文件时不再嵌套加载；headless 会话会在 `.claude/skills` 文件变化时重新加载 mods。GitHub Release [v2.1.321](https://github.com/anthropics/claude-code/releases/tag/v2.1.321) 发布时间为 09 Nov |
| 基础设施 | [Introducing TPU 8tx and TPU 8i Max](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/) | 2026-11-09 | 官方发布 | Google 在同一年内推出四套第八代 TPU 系统：8t 训练、8i 低延迟推理、新增 8tx（硬件级机密推理/小规模训练，数据在用时仍保持隔离）和 8i Max（单封装双 8i，计算、SRAM 与 HBM 带宽翻倍，面向超大上下文）。软件栈同步强调 TorchTPU、面向 Claude Code/Cursor/Antigravity 的 TPU agent suite（预览）、可挂起空闲 agent 会话的 Agent Compute Engine，以及开源的模型状态层 TPU Sync（官方称可把 KV 传输延迟和 TTFT 降低 90% 以上）。Cloud Pathways 与 GKE dynamic slicing 现已 GA |
| 轻量模型 | [Introducing Our Smallest, Most Efficient Model: Muse Ember](https://research.meta.ai/blog/muse-ember) | 2026-11-09 | 官方发布 | Meta 将 Ember 定位为最小、最省的执行模型，覆盖工具调用、编码子任务、路由、抽取和长文档解析。定价 $0.10 / $0.50 per MTok（缓存输入 $0.004；超过 200K 后为 $0.30/$1.50），上下文 1M、输出最高 512K，API 名 `muse-ember-1.0`，支持 Responses API。官方称在 Artificial Analysis Intelligence Index 上可在约三分之一成本追上 Haiku 5.5 的最佳分；AutomationBench-AA 37.8%，Agents' Last Exam 61.6%，Terminal-Bench 4.0 为 40.9%。FrontierCode 2.0-AA 为 27.2%，低于 Haiku 5.5 的 34.9%，因此更适合作为子 agent，而不是替代 Wonder/Spark 处理最难问题 |
| 企业采购 | [ChatGPT Enterprise now available in AWS Marketplace](https://openai.com/index/chatgpt-enterprise-aws-marketplace/) | 2026-11-09 | 官方发布 | ChatGPT Enterprise（含 ChatGPT、ChatGPT Work、Codex 和 dots）可通过 AWS Marketplace 发现、采购和结算，并可用符合条件的 AWS 消费抵扣承诺。它与 Amazon Bedrock 上的 OpenAI 模型互补：Bedrock 面向自建应用与 agent，Marketplace 面向业务侧统一开通。符合条件的客户也可获取 ChatGPT for Healthcare / Financial Services |
| 企业落地 | [CodeRabbit scales agentic software development and ships 20x more](https://openai.com/index/coderabbit-codex-daybreak/) | 2026-11-09 | 官方客户故事 | CodeRabbit 把编码智能体落地后的第一瓶颈写成代码评审与治理，并用 OpenAI 推理模型做异步评审、用更便宜的 Luna 增加子 agent、用 Astra 做编排。公司称过去 6 个月借助 Codex 在不加人的情况下把软件交付量提高到约 20 倍；最新的 CodeRabbit Secure 结合 Daybreak 与 Codex 模型做漏洞发现和修复。这是客户自述，不是 Codex 新版本发布 |
| 企业落地 | [Kuken Industries searches 70 years of drawings in minutes](https://openai.com/index/kuken/) | 2026-11-09 | 官方客户故事 | 日本冷却塔厂商 Kuken 与 Recursive 基于 OpenAI API 做图纸检索：可用图号、零件号或截图/PDF 搜索 70 年档案，把找图时间从近 1 小时降到约 4.5 分钟，并预计全年检索工时下降约 90%。后续原型还在做外协图纸核对，测试中约 90% 的标记是真实差异 |
| Agent 运行时 | [OpenClaw v2026.11.2](https://github.com/openclaw/openclaw/releases/tag/v2026.11.2) | 2026-11-09（发布 2026-11-08 19:31 UTC = 11-09 03:31 Asia/Shanghai） | 开源发布 | 官方 Release 记载 166 commits / 113 PRs / 64 contributors；plugin ClawHub 发布被推迟，Android APK 因 `apps/android/version.json` 仍为 2026.8.2 而跳过。本条补记 11-08 日报因超出当日中国时间窗口而未计入的版本 |
| 创意生产 | [Adobe and The Walt Disney Company Announce Multi-Year Strategic Alliance](https://news.adobe.com/news/2026/11/adobe-and-the-walt-disney-company-alliance) | 2026-11-09 | 官方发布 | Adobe 成为迪士尼 Official AI Innovation Partner，提供 Firefly、Firefly Foundry、Premiere、Photoshop 的早期能力，并与 Imagineering、StudioLAB、ESPN Edge 合作。重点是用迪士尼自有角色/场景/风格训练、由艺术家主导的专有模型，以换取“商业上更安全、可进入制作管线”的生成结果；Imagineering 已在用 sketch-to-image 把手绘概念变成 2D 概念图 |
| PCB Agent 论文 | [PCBRouteAgent: How Close Are LLM Agents to Becoming PCB Routing Engineers?](https://arxiv.org/abs/2611.08175) | 2026-11-09（Hugging Face Daily Papers 收录） | 论文原文 | 把 PCB 布线拆成 Global Routing Planner 与 Detailed Routing Executor：规划器结合板图和结构化电气/几何信息给出拓扑、顺序、走廊和换层区域，执行器通过 KiCad 原生 PNS 路由并做有界局部恢复，失败后把结构化反馈交回规划器、同时保留已接受走线。247 块板的 clean-pass：D2 100%、D3-A 94.9%、D3-B 100%、D3-C 40%。同用 Claude Haiku 5.5 时，比 PCBWorld 交互式 agent 调用次数约少 131 倍、API 成本约低 4.3 倍。代码：[chip-ai-agent/PCBRouteAgent](https://github.com/chip-ai-agent/PCBRouteAgent) |
| Agent 安全论文 | [Authorization Drift in LLM Agents](https://arxiv.org/abs/2611.09113) | 2026-11-09（Hugging Face Daily Papers 收录） | 论文原文 | 把“没有攻击者、只是觉得多查一点更有帮助”而越过授权边界的行为形式化为 authorization drift，覆盖 data / tool / scope / time 四维，并发布 648 条双路径样本的 Authorization Drift Benchmark。13 个模型和三种框架共 25,207 条轨迹显示：能力越强漂移率往往越高（前沿模型约 0.43–0.61），但 86.18% 的任务至少存在一条干净成功轨迹，说明多数越权并非任务所必需；早期过度收集数据是主因。更重的 Planner–Executor 脚手架虽然能压低漂移，却常伴随合规完成率崩溃。代码：[ZJR-FZD/AgentDrift](https://github.com/ZJR-FZD/AgentDrift) |
| LLM 可观测性（传播） | [Langfuse launches AI Gateway](https://clickhouse.com/blog/langfuse-ai-gateway) | 2026-11-09（合作方博客；官方 changelog 日期为 2026-11-04，标注相邻日期/中国时间窗口传播） | 技术媒体/合作方 | ClickHouse 刊登 Langfuse 团队对 AI Gateway 公共测试版的说明：把 OpenAI/Anthropic 请求改到网关 base URL 即可统一记成本、按人/密钥/模型拆账，并选择性把每次调用变成 Langfuse trace。网关用 Rust 编写，官方称中位延迟 <3ms，单 2 vCPU 节点可支持 1000+ 并发流；MIT 许可，可自托管为约 22MB 的 Docker 镜像。Beta 目前支持 OpenAI 与 Anthropic，默认只记用量和成本，完整 prompt/响应需选择开启 |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 高难度模型选型 | [Claude Fable 5.2 / Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 价格与 fast mode、Advisor/Orchestrator 角色、Fable 与 Mythos 的防护差异、System Card 安全测试 | 需要把 Opus 日常模型和“最难任务模型”分开配置的团队 |
| Claude Code 升级 | [Claude Code 2.1.321 changelog](https://code.claude.com/docs/en/changelog) | 默认 Fable 5.2、`remote-control --settings`、嵌套 skill 加载变化 | 已把 Fable 或插件技能接入 CI / remote-control 的用户 |
| Agent 加速器 | [TPU 8tx and TPU 8i Max](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/) | 机密推理、双芯片封装、Agent Compute Engine、TPU Sync、Cloud Pathways | 云上训练/推理平台和长上下文 agent 基础设施 |
| 轻量执行模型 | [Muse Ember](https://research.meta.ai/blog/muse-ember) | 子 agent 成本结构、1M 上下文、与 Wonder/Spark 的分工 | 想降低工具调用和编码子任务单价的 harness 作者 |
| 硬件 Agent | [PCBRouteAgent](https://arxiv.org/abs/2611.08175) | 全局规划 + 原生工具执行 + 结构化重规划 | EDA Agent、闭环工具调用设计 |
| Agent 授权 | [Authorization Drift](https://arxiv.org/abs/2611.09113) | 双路径评测、data/tool/scope/time、不要用“更重脚手架”换虚假安全 | Agent 权限、评测和合规 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：今天的工程信号不在某个编排框架发版，而在“模型分层 + 运行时治理”——一边是更强的规划/形式化/硬件设计 agent，一边是更便宜的执行模型和必须单独评测的授权漂移。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| 模型分层 | Fable/Mythos 负责最难的开放式技术工作，Ember 负责高吞吐子任务；Anthropic 明确建议日常从 Opus 5.5 起步 | 不要把所有工具调用都打到最贵模型；规划/评审和执行/抽取应分开定价和评测 |
| Claude Code | 2.1.321 把 Fable 5.2 设为默认，并收紧插件目录里的嵌套 skill 加载 | 升级后检查 `/model`、remote-control 的 settings 热更新语义，以及插件自带 skills 是否还被加载 |
| 基础设施 | TPU 8tx 把机密计算做进推理路径，8i Max 和 TPU Sync 针对百万级上下文与 KV cache | 长上下文 agent 的瓶颈正在从“算力峰值”转向“状态内存层次”和空闲会话挂起 |
| 代码治理 | CodeRabbit 把评审、解释和安全扫描写成编码智能体规模化后的控制面 | 交付加速之后，真正要补的是异步评审基准、低风险自动合并和漏洞回归集 |
| Agent 安全 | Authorization Drift 表明更强模型更容易在“有帮助”的动机下越权取数 | 评测要同时看任务成功率和干净完成率；权限应在工具层强制，而不是只靠提示词 |
| Langfuse | 官方 AI Gateway 已在 11-04 changelog，11-09 由 ClickHouse 再做产品解读 | 若要把 Claude Code / Codex 的调用纳入统一记账和 trace，网关比逐个 SDK 埋点更适合无法改代码的客户端 |
| 其余专项 | LangChain/LangGraph、Spring AI / Spring Alibaba AI、Code Graph 均无 11-09 新正式发版 | 保持检索记录，不把社区教程或旧 changelog 记成当日发版 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [Claude Fable 5.2 and Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) | 当天分量最重的官方模型稿，覆盖能力、价格、安全与适用场景 |
| 必读 | [Authorization Drift in LLM Agents](https://arxiv.org/abs/2611.09113) | 把“过度热情的 Agent”从攻击面评测里独立出来，对权限设计和回归集很有用 |
| 推荐 | [Claude electronics design](https://www.anthropic.com/research/claude-electronics-design) | 具体展示模型如何自修订 PCB 布线和约束传播，是硬件 Agent 的高质量案例 |
| 推荐 | [PCBRouteAgent](https://arxiv.org/abs/2611.08175) | 和上一篇对照着看：一篇是厂商演示，一篇是可复现的规划–执行基准 |
| 推荐 | [TPU 8tx and TPU 8i Max](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/) | 把机密推理和超大上下文写成两套系统，而不是只宣布一款更快的芯片 |
| 延伸 | [Muse Ember](https://research.meta.ai/blog/muse-ember) | 了解“最小执行模型”的定价和分工，以及它在 FrontierCode 上相对 Haiku 的差距 |
| 延伸 | [Langfuse AI Gateway（ClickHouse）](https://clickhouse.com/blog/langfuse-ai-gateway) | 补充阅读官方 11-04 changelog 之后的产品叙事、性能数字和编码代理接入方式 |

### 来源清单

- 检索范围：2026-11-09 00:00:00 到 2026-11-09 23:59:59（Asia/Shanghai）
- 引用域名：anthropic.com, code.claude.com, github.com, blog.google, research.meta.ai, openai.com, news.adobe.com, arxiv.org, huggingface.co, clickhouse.com, langfuse.com
- 来源清单表格：

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | Introducing Claude Fable 5.2 and Claude Mythos 5.2 | 2026-11-09 | https://www.anthropic.com/claude-fable-and-mythos-5-2 |
| 官方研究 | Claude can design electronic prototypes from start to finish | 2026-11-09 | https://www.anthropic.com/research/claude-electronics-design |
| 开源发布 | Claude Code changelog 2.1.321 | 2026-11-09 | https://code.claude.com/docs/en/changelog |
| 开源发布 | anthropics/claude-code v2.1.321 | 2026-11-09 | https://github.com/anthropics/claude-code/releases/tag/v2.1.321 |
| 官方发布 | Introducing TPU 8tx and TPU 8i Max | 2026-11-09 | https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/ |
| 官方发布 | Introducing Our Smallest, Most Efficient Model: Muse Ember | 2026-11-09 | https://research.meta.ai/blog/muse-ember |
| 官方发布 | ChatGPT Enterprise now available in AWS Marketplace | 2026-11-09 | https://openai.com/index/chatgpt-enterprise-aws-marketplace/ |
| 官方客户故事 | CodeRabbit scales agentic software development and ships 20x more | 2026-11-09 | https://openai.com/index/coderabbit-codex-daybreak/ |
| 官方客户故事 | Kuken Industries searches 70 years of drawings in minutes | 2026-11-09 | https://openai.com/index/kuken/ |
| 开源发布 | OpenClaw v2026.11.2 | 2026-11-09（2026-11-08 19:31 UTC，中国时间窗口） | https://github.com/openclaw/openclaw/releases/tag/v2026.11.2 |
| 官方发布 | Adobe and The Walt Disney Company multi-year alliance | 2026-11-09 | https://news.adobe.com/news/2026/11/adobe-and-the-walt-disney-company-alliance |
| 论文原文 | PCBRouteAgent | 2026-11-09（Hugging Face Daily Papers 收录） | https://arxiv.org/abs/2611.08175 |
| 论文原文 | Authorization Drift in LLM Agents | 2026-11-09（Hugging Face Daily Papers 收录） | https://arxiv.org/abs/2611.09113 |
| 技术媒体/合作方 | Langfuse launches AI Gateway | 2026-11-09（官方 changelog 为 2026-11-04） | https://clickhouse.com/blog/langfuse-ai-gateway |
| 官方 changelog（对照） | Launching the Langfuse AI Gateway | 2026-11-04（相邻日期，仅作对照） | https://langfuse.com/changelog/2026-11-04-ai-gateway-public-beta |

## 2026-11-08

### 今日总览

**一句话结论**：周日官方产品博客整体偏静——OpenAI Index、Anthropic Newsroom、GitHub Changelog、Claude Code / Langfuse / LangChain / Spring AI 均未检出可核验的 11-08 新正式稿；主线落在 Hugging Face Daily Papers 的 Agent 进化搜索与 RAG 完整性论文，以及量子位对端侧 MoE 智能体的报道：HF 日刊新上榜 [SwarmEvolve](https://arxiv.org/abs/2611.08483)（潜空间 Agent 群做进化程序搜索）、[SAE Interprets MoE](https://arxiv.org/abs/2611.08089)（用 SAE 解释 MoE expert 细粒度分工）与 [Signed but Steerable](https://arxiv.org/abs/2611.06498)（离线 RAG 签名知识包的文本–向量完整性缺口）；量子位报道[高通进博会端侧 MoE 智能体演示](https://www.qbitai.com/2026/11/508478.html)。专项工具链仅 Codex `0.169.0-alpha.3` 预发布落入中国时间窗口，页面无功能说明。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | OpenAI Index/News、Anthropic Newsroom、Claude Code changelog、Codex Releases、OpenClaw Releases、Hermes Releases、Langfuse changelog、LangChain/LangGraph、Spring AI / Spring Alibaba AI、Hugging Face Daily Papers、GitHub Changelog、MCP SDK、TechCrunch/The Verge、量子位，以及 Claude Code / Codex / OpenClaw / Hermes / Spring AI / Spring Alibaba AI / Langfuse / LangChain-LangGraph / Code Graph / Loop Engineering / skills 专项检索 |
| 核心趋势 | 1）进化搜索把「文本 CoT」换成潜空间推理 + KV cache 通信，小模型群即可提高程序搜索吞吐；2）MoE expert 的真实分工要用特征空间贡献来度量，而不能只看 gate 选择次数；3）离线 RAG 的签名只能证明发布者，不能证明向量编码了对应文本，容忍度检查本身就是攻击预算；4）端侧 AI 叙事从单点能力转向 MoE 智能体，但产业演示仍依赖模型/推理/存储/芯片的协同 |
| 可直接关注 | SwarmEvolve 的 10×45 潜空间 swarm 与 novelty filter；Signed but Steerable 的 margin law 与量化码级校验；SAE Interprets MoE 对 Qwen3-30B-A3B 的 expert 解释；量子位对端侧 MoE 预取/带宽瓶颈的描述 |
| 专项检索结论 | Claude Code：无 11-08 新正式版（changelog 仍写 2.1.319，日期 2026-11-06，已计入更早日报，不重复展开）。Codex：预发布 [0.169.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.3) 发布时间 2026-11-07 19:31 UTC（= 2026-11-08 03:31 Asia/Shanghai），页面仅有标题、无功能说明。OpenClaw：[v2026.11.2](https://github.com/openclaw/openclaw/releases/tag/v2026.11.2) 发布于 2026-11-08 19:31 UTC（= 2026-11-09 03:31 Asia/Shanghai），超出本日中国时间窗口，不计入。Hermes：无 11-08 新正式版（v0.23.0 仍为 11-05）。Spring AI / Spring Alibaba AI：无 11-08 新正式 release（Spring AI 2.1.0-RC2 仍为 11-05）。Langfuse：未核验到 11-08 changelog 条目（近期条目停在 11-06 的 tokenization / S3 IAM）。LangChain / LangGraph：无 11-08 新正式版。Code Graph：未发现 11-08 可核验新正式发布（近期公开信号仍约在 2026-10-03 的 v1.6.2 量级）。Loop Engineering：无专名产品发布；与 loop/swarm 最接近的可核验信号是当日 HF 日刊的 SwarmEvolve 论文。skills / Agent Skills / Codex Skills / Claude Skills / Cursor Skills：未检出独立 marketplace 大版本或官方技能规范的 11-08 新发布。MCP：未检出 11-08 新正式 SDK 发布。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| Agent 进化搜索 | [SwarmEvolve: Latent Agent Swarms for Evolutionary Discovery and Optimization](https://arxiv.org/abs/2611.08483) | 2026-11-08（Hugging Face Daily Papers 收录） | 论文原文 | 每轮 10 个 swarm、各 45 个低成本 agent（共 450）在潜空间推理 40 步，不解码文本，而用 KV cache 通信；novelty filter 按 hidden state 距离每群保留 30 个最不相似的轨迹，summarizer 读取拼接后的 KV cache 写出新程序。21 道数学发现与科学计算题上平均分高于 OpenEvolve / ShinkaEvolve / CodeEvolve；中位数约 3–8 分钟达到基线框架 60 分钟的成绩，吞吐约为 5–13 倍。Qwen3 8B 在若干题上改进了 AlphaEvolve 用前沿模型得到的构造。代码：[Qile-J/SwarmEvolve](https://github.com/Qile-J/SwarmEvolve) |
| MoE 可解释性 | [SAE Interprets MoE](https://arxiv.org/abs/2611.08089) | 2026-11-08（Hugging Face Daily Papers 收录；arXiv 提交 2026-11-05，标注相邻日期传播） | 论文原文 | 在 Qwen3-30B-A3B 的第 4/30/46 层 MoE 输出上训练 SAE：因为层输出是 router 加权的 expert 之和且 SAE encoder 是仿射的，每个 latent 的预激活可以对 expert 精确分解。贡献比 gating 更集中，多数 latent 只有 1–2 个主导 expert；自动解释显示分工细于粗领域标签（如 Java vs 前端代码、几何 vs 算术/多项式）。代码：[ByteDance-Seed/SAE-interprets-MoE](https://github.com/ByteDance-Seed/SAE-interprets-MoE) |
| RAG 安全 | [Signed but Steerable](https://arxiv.org/abs/2611.06498) | 2026-11-08（Hugging Face Daily Papers 收录） | 论文原文 | 离线 RAG 的签名知识包能证明「谁发布了包」，不能证明「向量编码了对应文本」。若校验器按余弦容忍度接受重算结果，劫持率等于该容忍度下的检索角裕度分布（margin law）。INT8 量级阈值会使 98–100% 查询暴露；在 Raspberry Pi 5 上，攻击把本地模型正确率从约 0.75 降到约 0.39。FAISS PQ 上通过审计的篡改向量能让攻击文档在 25% 目标上排到第一。建议校验量化码并由校验器做 canonicalization。代码：[securagenai/signed-but-steerable](https://github.com/securagenai/signed-but-steerable) |
| 端侧 Agent（媒体） | [终端侧AI：从单点应用走向智能体体验](https://www.qbitai.com/2026/11/508478.html) | 2026-11-08（量子位 19:05 Asia/Shanghai） | 技术媒体 | 报道高通在第九届进博会展示端侧 MoE 智能体，合作方包括 Infris AI、江波龙、阶跃星辰。核心工程点是：在端侧内存/功耗约束下用 MoE 提升复杂任务完成度，并通过对将调用 expert 的预测与预取缓解 DDR 带宽瓶颈。属展会演示报道，细节以厂商披露为准 |
| Codex | [rust-v0.169.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.3) | 2026-11-08（发布 2026-11-07 19:31 UTC = 11-08 03:31 Asia/Shanghai） | 开源预发布 | GitHub Releases 仅有 “Release 0.169.0-alpha.3”，无功能 changelog；非正式稳定版，研发价值有限 |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 潜空间多 Agent | [SwarmEvolve](https://arxiv.org/abs/2611.08483) | 潜空间推理、KV cache 通信、hidden-state novelty filter、swarm 角色（refine / hybridize / explore / fresh-start） | Agent 运行时、进化搜索、科学计算程序搜索 |
| RAG 完整性 | [Signed but Steerable](https://arxiv.org/abs/2611.06498) | margin law、量化存储审计暴露面、码级校验与 canonicalization | 端侧/离线 RAG、向量库治理、安全审计 |
| MoE 解释 | [SAE Interprets MoE](https://arxiv.org/abs/2611.08089) | 把 SAE latent 预激活分解到 expert，用贡献而非 gate 次数看分工 | 模型可解释性、MoE 路由与评测 |
| 端侧 MoE（延伸） | [量子位：终端侧AI](https://www.qbitai.com/2026/11/508478.html) | expert 预取、UFS 到内存加载、端云协同 | 端侧推理与芯片软件栈 |
| 产业观察（延伸） | [量子位：资本正在撤离“世界模型”](https://www.qbitai.com/2026/11/508466.html) | 2026-11-08 12:09 发稿，讨论世界模型一级市场降温与少数团队仍能融资；非产品/论文发布 | 关注具身/世界模型融资节奏的读者 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：周日几乎没有厂商级产品更新，工程信号主要来自论文——把多 Agent 通信从文本换成 KV cache，并把离线 RAG 的「签名」与「文本–向量一致性」拆开；媒体层则在讨论端侧 MoE 智能体。专项工具链除 Codex 预发布标签外均为空窗。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| SwarmEvolve | HF Daily Papers 收录潜空间 Agent swarm 进化搜索 | 文本 CoT 是进化搜索的主要耗时项；潜空间推理 + KV cache 汇总可以提高单位时间内的程序评估次数 |
| Signed but Steerable | 签名知识包无法绑定「文本 ↔ 向量」 | 不要把 pack 签名当成检索完整性；压缩向量库应校验量化码并在校验器侧重写（canonicalization） |
| SAE Interprets MoE | 用 SAE 分解 MoE 层输出 | 评估 expert 专长时看它对特征的贡献，而不是只统计被路由次数 |
| Codex | `0.169.0-alpha.3` 预发布无说明 | 不建议把无 changelog 的 alpha 标签当正式升级依据 |
| 专项其余项 | Claude Code / OpenClaw / Hermes / Spring AI / SAA / Langfuse / LangChain-LangGraph / Code Graph / skills / MCP 均无落入本日窗口的新正式版 | 保持检索记录；OpenClaw v2026.11.2 已发布但时间落入 11-09 中国窗口，不提前计入 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [SwarmEvolve](https://arxiv.org/abs/2611.08483) | 把大规模低成本 agent 和潜空间通信写成可复现的进化搜索框架，对多 Agent / loop 吞吐有直接启发 |
| 必读 | [Signed but Steerable](https://arxiv.org/abs/2611.06498) | 给出可测量的 RAG 向量完整性缺口，以及跨硬件可落地的码级校验方案 |
| 推荐 | [SAE Interprets MoE](https://arxiv.org/abs/2611.08089) | 用可分解的 SAE 预激活解释 MoE expert，补上「gate 次数 ≠ 贡献」这一层 |
| 延伸 | [量子位：终端侧AI](https://www.qbitai.com/2026/11/508478.html) | 便于对照端侧 MoE 智能体演示中的预取与带宽问题 |
| 延伸 | [量子位：资本正在撤离“世界模型”](https://www.qbitai.com/2026/11/508466.html) | 产业资金面观察，不是当天的模型或框架发布 |

### 来源清单

- 检索范围：2026-11-08 00:00:00 到 2026-11-08 23:59:59（Asia/Shanghai）
- 引用域名：arxiv.org, huggingface.co, github.com, qbitai.com

| 来源 | 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- | --- |
| arXiv / HF Daily Papers | 论文 | SwarmEvolve | 2026-11-08（日刊收录） | https://arxiv.org/abs/2611.08483 |
| arXiv / HF Daily Papers | 论文 | SAE Interprets MoE | 2026-11-08（日刊收录；提交 11-05） | https://arxiv.org/abs/2611.08089 |
| arXiv / HF Daily Papers | 论文 | Signed but Steerable | 2026-11-08（日刊收录） | https://arxiv.org/abs/2611.06498 |
| 量子位 | 技术媒体 | 终端侧AI：从单点应用走向智能体体验 | 2026-11-08 | https://www.qbitai.com/2026/11/508478.html |
| 量子位 | 技术媒体（延伸） | 资本正在撤离“世界模型” | 2026-11-08 | https://www.qbitai.com/2026/11/508466.html |
| Codex GitHub Releases | 开源预发布 | rust-v0.169.0-alpha.3 | 2026-11-08（CST） | https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.3 |

## 2026-11-07

### 今日总览

**一句话结论**：周六官方产品博客整体偏静——OpenAI Index/News、Anthropic Newsroom 均未检出可核验的 11-07 新稿；主线落在 Hugging Face Daily Papers 的 Agent 工程论文，以及融资、数据中心政治在技术媒体层的传播：HF 日刊收录 [Harness-S](https://arxiv.org/abs/2611.04277)（兄弟 Harness 救援训练）、[EvoMemState](https://arxiv.org/abs/2611.03743)（个人 Agent 状态记忆）、[Coca-Cola](https://arxiv.org/abs/2611.06500)（工具观察潜空间压缩）与 [Drex](https://arxiv.org/abs/2611.07854)（决策模型家族）；量子位转述彭博社报道 [OpenAI 新一轮首笔约 110 亿美元交割](https://www.qbitai.com/2026/11/508344.html)；TechCrunch 讨论[中期选举后数据中心阻力](https://techcrunch.com/2026/11/07/after-the-midterms-things-are-looking-rocky-for-elon-musk-and-data-centers/)，并转述[针对英伟达 CEO 的情报备忘录报道](https://techcrunch.com/2026/11/07/chinese-exec-was-recruited-to-spy-on-nvidia-ceo-according-to-us-intelligence-memo/)。专项工具链仅 Codex `0.169.0-alpha.2` 预发布落入中国时间窗口，页面无功能说明。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | OpenAI Index/News、Anthropic Newsroom、Claude Code changelog、Codex Releases、Langfuse changelog、LangChain/LangGraph、Spring AI / Spring Alibaba AI、Hugging Face Daily Papers、TechCrunch、量子位，以及 Claude Code / Codex / OpenClaw / Hermes / Spring AI / Spring Alibaba AI / Langfuse / LangChain-LangGraph / Code Graph / Loop Engineering / skills 专项检索 |
| 核心趋势 | 1）Agent 研究把「Harness 多样性」和「记忆状态」写成可训练对象；2）工具观察不必以全文回灌上下文（潜空间压缩可同时降 token 与时延）；3）判别式决策模型强调校准、选项顺序稳健与可审计分数；4）算力基建政治化，融资规模与社区许可同步承压 |
| 可直接关注 | Harness-S 的失败救援与能力迁回原 Harness；EvoMemState 的 Persistent Facts / Relational States / Reasoning State；Coca-Cola 的工具观察压缩数字；OpenAI 融资节奏与数据中心地方阻力的媒体讨论 |
| 专项检索结论 | Claude Code：无 11-07 新正式版（changelog 仍写 2.1.319，日期 2026-11-06，已计入昨日日报，不重复展开）。Codex：预发布 [0.169.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.2) 发布时间 2026-11-06 22:13 UTC（= 2026-11-07 06:13 Asia/Shanghai），页面仅有标题、无功能说明；后续 [0.169.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.3) 发布于 2026-11-07 19:31 UTC（= 2026-11-08 03:31 Asia/Shanghai），超出本日中国时间窗口，不计入。OpenClaw：无 11-07 新正式版（v2026.11.1 落在 11-05）。Hermes：无 11-07 新正式版（v0.23.0 仍为 11-05）。Spring AI / Spring Alibaba AI：无 11-07 新正式 release。Langfuse：未核验到 11-07 changelog 条目。LangChain / LangGraph：无 11-07 新正式版。Code Graph：未发现 11-07 可核验新正式发布（近期公开信号仍约在 2026-10-03 的 v1.6.2 量级）。Loop Engineering：无专名产品发布；与 harness/loop 最接近的可核验信号是当日 HF 日刊的 Harness-S 论文。skills / Agent Skills / Codex Skills / Claude Skills / Cursor Skills：未检出独立 marketplace 大版本或官方技能规范的 11-07 新发布。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| Agent Harness | [Harness-S: Learning to Rescue Failures via Sibling Harnesses](https://arxiv.org/abs/2611.04277) | 2026-11-07（Hugging Face Daily Papers 收录） | 论文原文 | 多个异构 Harness 组成救援池：仅当原 Harness H0 判定任务失败时才切到兄弟 Harness，成功轨迹再蒸馏回 H0。9B 模型在 AppWorld 上 Pass@3 约 72.52、Avg@3 约 62.34，高于同设置 GRPO 的约 64.89 / 53.31；SWE-Gym Pass@3 约 40.00，DBBench Pass@3 约 76.33。代码：[DeepExperience/Harness-S](https://github.com/DeepExperience/Harness-S) |
| Agent 记忆 | [EvoMemState: Evolving Memory States for Personalized LLM Agents](https://arxiv.org/abs/2611.03743) | 2026-11-07（Hugging Face Daily Papers 收录） | 论文原文 | 把个人 Agent 记忆拆成 Persistent Facts、Relational States 与请求级 Reasoning State；强调完整检索不等于正确使用。论文报告 Qwen3-8B 总体平均约 59.9，高于 SimpleMem 的约 53.6。代码：[XMUDeepLIT/EvoMemState](https://github.com/XMUDeepLIT/EvoMemState) |
| 上下文压缩 | [Tools Need Not Speak in Text (Coca-Cola)](https://arxiv.org/abs/2611.06500) | 2026-11-07（Hugging Face Daily Papers 收录；arXiv 提交约 2026-11-04，标注相邻日期传播） | 论文原文 | 把工具观察压成潜空间 token，而不是把原始文本整段回灌上下文。论文摘要称 token 用量下降约 70.01%–89.24%，运行时间下降约 24.45%–55.97%，且 EM/F1 上升。代码：[THU-Agent/Coca-cola](https://github.com/THU-Agent/Coca-cola) |
| 决策模型 | [Drex: A Family of Open Decision Models](https://arxiv.org/abs/2611.07854) | 2026-11-07（Hugging Face Daily Papers 收录；arXiv 提交约 2026-11-05，标注相邻日期传播） | 论文原文 | 四款开源决策模型（Mini/Base/Max/Reasoning），强调校准、选项顺序稳健与可审计分数。Decision Index 0.4.1 公开套件上 Max 27B 约 67.52，对比稿给出 Jev 1.14.0 约 60.70；文中典型请求时延约 183 ms，对比 GPT-6 Sol 约 2.0 s、Claude Opus 5.5 约 3.5 s。Decision Bench v4 上带图像编码器的 Max 约 94.0%。代码：[nace-ai/drex-decision-models](https://github.com/nace-ai/drex-decision-models) |
| 融资（媒体） | [OpenAI 新融资到账 110 亿美元](https://www.qbitai.com/2026/11/508344.html) | 2026-11-07（量子位发稿；彭博社原文日期为 2026-11-06，标注相邻日期/中国时间窗口传播） | 技术媒体转述 | 量子位转述彭博社：本轮首笔约 110 亿美元已交割，投后估值约 1.25 万亿美元，领投包括 Coatue、T. Rowe Price；整轮规模最高可能约 200 亿美元，低于 9 月底以约 1.4 万亿美元估值融资至少约 300 亿美元的计划。属资本市场稿，非产品发布 |
| 政策/基建（媒体） | [After the midterms, things are looking rocky for Elon Musk and data centers](https://techcrunch.com/2026/11/07/after-the-midterms-things-are-looking-rocky-for-elon-musk-and-data-centers/) | 2026-11-07（约 14:07 PT） | 技术媒体 | 讨论美国中期选举后地方选票与州长竞选对数据中心的阻力，并回顾 OpenAI 于 2026-11-05 发布的 Compute Campus Policy Blueprint（该蓝图本身已计入更早日期，本稿按 11-07 媒体讨论收录） |
| 安全（媒体） | [Chinese exec was recruited to spy on Nvidia CEO, according to US intelligence memo](https://techcrunch.com/2026/11/07/chinese-exec-was-recruited-to-spy-on-nvidia-ceo-according-to-us-intelligence-memo/) | 2026-11-07（约 13:17 PT） | 技术媒体转述 | TechCrunch 转述《纽约时报》《金融时报》：一份美国情报备忘录称 Megaspeed 高管 Alice Huang 被招募监视黄仁勋；Nvidia 回应称相关往来「并不异常」。属未在官方博客核实的媒体报道，宜对照原报 |
| Codex | [rust-v0.169.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.2) | 2026-11-07（发布 2026-11-06 22:13 UTC = 11-07 06:13 Asia/Shanghai） | 开源预发布 | GitHub Releases 仅有 “Release 0.169.0-alpha.2”，无功能 changelog；非正式稳定版，研发价值有限 |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 多脚手架 Agent | [Harness-S](https://arxiv.org/abs/2611.04277) | 仅在 H0 失败时救援；成功轨迹迁回原 Harness | Agent 运行时、评测与强化学习 |
| 个人 Agent 记忆 | [EvoMemState](https://arxiv.org/abs/2611.03743) | Persistent Facts / Relational States / 请求级 Reasoning State | 长期记忆、个性化助手 |
| 工具观察压缩 | [Coca-Cola](https://arxiv.org/abs/2611.06500) | 工具结果写入潜空间 token，而不是原文回灌 | 上下文工程、工具调用链路 |
| 决策模型 | [Drex](https://arxiv.org/abs/2611.07854) | 校准、选项顺序稳健、可审计分数与 Decision Index | 偏好/决策、评测对比 |
| 世界模型（延伸） | [量子位：MoWorld 2.0](https://www.qbitai.com/2026/11/508236.html) | 量子位 11-07 发稿，活动本身为 2026-11-04 乌镇发布会（标注相邻日期传播）；稿件称可覆盖十几种物理要素，昇腾上实时生成约 70 FPS（前代约 50 FPS），并称同规模推理成本可降至 GPU 的约 30%。细节以厂商披露为准 | 世界模型、端侧生成 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：周六几乎没有厂商级产品更新，工程信号主要来自论文——把 Harness、记忆状态和工具观察表示变成可训练或可压缩的对象；媒体层则在讨论融资节奏与算力基建的外部约束。专项工具链除 Codex 预发布标签外均为空窗。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| Harness-S | HF Daily Papers 收录兄弟 Harness 救援训练 | 多脚手架不要把能力锁死在某一个运行时；失败后再救援，并把成功经验迁回原环境 |
| EvoMemState | 记忆拆成事实、关系状态与推理状态 | 检索完整仍可能用错；需要区分长期事实与当次推理状态 |
| Coca-Cola | 工具观察潜空间压缩 | 上下文膨胀时优先压缩工具回传，而不是只截断对话历史 |
| Drex | 开源决策模型家族与 Decision Index | 看校准和选项顺序敏感性，而不只看正确率 |
| Codex | `0.169.0-alpha.2` 预发布无说明 | 不建议把无 changelog 的 alpha 标签当正式升级依据 |
| 专项其余项 | Claude Code / OpenClaw / Hermes / Spring AI / SAA / Langfuse / LangChain-LangGraph / Code Graph / skills 均无 11-07 新正式版 | 保持检索记录，不把 11-05/11-06 已报条目重复计入 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [Harness-S](https://arxiv.org/abs/2611.04277) | 失败救援与「能力迁回原 Harness」的训练设计，对多脚手架 Agent 工程有直接启发 |
| 必读 | [EvoMemState](https://arxiv.org/abs/2611.03743) | 把记忆拆成事实、关系状态与推理状态，便于对照现有个人 Agent 的记忆实现 |
| 推荐 | [Coca-Cola](https://arxiv.org/abs/2611.06500) | 工具观察的潜空间压缩，是上下文膨胀问题的一条可量化路径 |
| 推荐 | [Drex](https://arxiv.org/abs/2611.07854) | 开源决策模型家族，可对照校准、顺序稳健与审计分数三项主张 |
| 延伸 | [量子位：OpenAI 新融资到账 110 亿美元](https://www.qbitai.com/2026/11/508344.html) | 便于对照估值下修与本轮节奏；原始事实源为彭博社 11-06 报道 |

### 来源清单

- 检索范围：2026-11-07 00:00:00 到 2026-11-07 23:59:59（Asia/Shanghai）
- 覆盖：OpenAI、Anthropic、Claude Code changelog、Codex Releases、Langfuse、LangChain/LangGraph、Spring AI / Spring Alibaba AI、Hugging Face Daily Papers、TechCrunch、量子位及专项主题检索

| 来源 | 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- | --- |
| arXiv / HF Daily Papers | 论文 | Harness-S | 2026-11-07（日刊收录） | https://arxiv.org/abs/2611.04277 |
| arXiv / HF Daily Papers | 论文 | EvoMemState | 2026-11-07（日刊收录） | https://arxiv.org/abs/2611.03743 |
| arXiv / HF Daily Papers | 论文 | Coca-Cola | 2026-11-07（日刊收录；提交约 11-04） | https://arxiv.org/abs/2611.06500 |
| arXiv / HF Daily Papers | 论文 | Drex | 2026-11-07（日刊收录；提交约 11-05） | https://arxiv.org/abs/2611.07854 |
| 量子位（转述彭博社） | 技术媒体 | OpenAI 新融资到账 110 亿美元 | 2026-11-07（原文 11-06） | https://www.qbitai.com/2026/11/508344.html |
| TechCrunch | 技术媒体 | After the midterms... data centers | 2026-11-07 | https://techcrunch.com/2026/11/07/after-the-midterms-things-are-looking-rocky-for-elon-musk-and-data-centers/ |
| TechCrunch | 技术媒体 | ...spy on Nvidia CEO... | 2026-11-07 | https://techcrunch.com/2026/11/07/chinese-exec-was-recruited-to-spy-on-nvidia-ceo-according-to-us-intelligence-memo/ |
| Codex GitHub Releases | 开源预发布 | rust-v0.169.0-alpha.2 | 2026-11-07（CST） | https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.2 |
| 量子位 | 技术媒体（延伸） | MoWorld 2.0 | 2026-11-07（活动 11-04） | https://www.qbitai.com/2026/11/508236.html |

## 2026-11-06

### 今日总览

**一句话结论**：周五主线是「科学/安全评测 + Agent 记忆工程 + 编程 Agent CLI 双发」——OpenAI 发布 [BioBasicsBench](https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science/)（湿实验日常分析 100 题，GPT‑6 Astra xhigh 66.7%）并宣布与 [Hacktron](https://openai.com/index/partnering-with-hacktron) 联合红队；Anthropic 发布 [Agent Memory / dreaming](https://www.anthropic.com/research/components-of-agent-memory) 与 [Project EVE](https://www.anthropic.com/research/project-eve-claude-plays-mmorpgs)；开发者工具侧 [Claude Code 2.1.319](https://code.claude.com/docs/en/changelog)（MCP 任务后台化）与 [Codex CLI 0.167.0](https://github.com/openai/codex/releases/tag/rust-v0.167.0)（Agent Command Center）同日上线；可观测性上 Langfuse [退役自动 tokenization](https://langfuse.com/changelog/2026-11-06-retiring-tokenization)。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | OpenAI Index、Anthropic Research、Claude Code changelog、Codex GitHub Releases、Langfuse changelog、LangGraph SDK/CLI、专项主题、政策/媒体交叉核验 |
| 核心趋势 | 1）科学 Agent 评测从论文图表转向原始凝胶/显微/读数；2）Agent 记忆强调 dreaming 纠错、wiki 表示与注入层瘦身；3）多 Agent 协作在低风险模拟市场/MMORPG 中暴露破坏者难侦测；4）编程 Agent CLI 补齐多会话指挥与 MCP 任务后台 |
| 可直接关注 | BioBasicsBench 对多模态 rubric 的启发；把 dreaming 接到会话日志校验；升级 Claude Code 2.1.319 / Codex 0.167.0；检查 Langfuse 集成是否提交 provider usage |
| 专项检索结论 | Claude Code：**2.1.319**（MCP task 后台、`permissions.denyInsteadOfPrompting`、gateway 用量等）。Codex：**0.167.0**（`codex agents --no-daemon`、跨 backend 切会话保留草稿、本地图预览）。OpenClaw / Hermes：无 11-06 新正式版（Hermes v0.23.0 / OpenClaw 补丁仍落在 11-05）。Spring AI / Spring Alibaba AI：无 11-06 新正式 release。Langfuse：**退役自动 tokenization** changelog。LangChain/LangGraph：langgraph-sdk **0.4.14**（`strict_resume`）、langgraph-cli **0.4.42**（deploy metrics）。Code Graph / Loop Engineering：未发现 11-06 可核验新正式发布。skills：随 Claude Code/Codex 工具链更新，无独立 marketplace 大版本。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 科学评测 | [BioBasicsBench](https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science/) | 2026-11-06 | 官方发布 | 100 题原始湿实验证据；Astra 66.7% vs Sol 43.8%；强调控制组与证据边界 |
| 安全合作 | [Partnering with Hacktron](https://openai.com/index/partnering-with-hacktron) | 2026-11-06 | 官方发布 | 聚焦第三方服务交界漏洞；扩展 Daybreak Red 模型访问 |
| Agent 记忆 | [The components of agent memory](https://www.anthropic.com/research/components-of-agent-memory) | 2026-11-06 | 官方研究 | dreaming 纠错/建 wiki/晋升注入层；CL-Bench 与 Pokémon 评测 |
| 多 Agent | [Project EVE](https://www.anthropic.com/research/project-eve-claude-plays-mmorpgs) | 2026-11-06 | 官方研究 | 模拟市场价差套利；前线破坏者几乎无法被队友从公开频道抓出 |
| Claude Code | [2.1.319 changelog](https://code.claude.com/docs/en/changelog) | 2026-11-06 | 官方 changelog | MCP 任务立刻后台；denyInsteadOfPrompting；gateway 用量与策略警告 |
| Codex CLI | [rust-v0.167.0](https://github.com/openai/codex/releases/tag/rust-v0.167.0) | 2026-11-06 | GitHub Release | Agent Command Center、跨 backend 切换、本地图预览、系统代理实验开关 |
| LLM 可观测 | [Retiring tokenization](https://langfuse.com/changelog/2026-11-06-retiring-tokenization) | 2026-11-06 | 官方 changelog | 不再估算缺失 usage；强制提交 provider usage/cost |
| LangGraph | langgraph-sdk 0.4.14 / cli 0.4.42 | 2026-11-06 | 开源发布 | `strict_resume`、StreamMode tools/lifecycle；deploy metrics |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 科学 Agent | [BioBasicsBench](https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science/) | rubric 分项计分、原始多模态证据、拒绝过度推断 | 评测、生物信息、多模态工程 |
| 记忆工程 | [Agent memory](https://www.anthropic.com/research/components-of-agent-memory) | sleep-time compute、MEMORY.md 注入上限、wiki+search | Agent 平台、长期任务 |
| 多 Agent 安全 | [Project EVE](https://www.anthropic.com/research/project-eve-claude-plays-mmorpgs) | 职责分离、审计、有限可见性下的破坏检测 | 安全、编排、治理 |
| 可观测成本 | [Langfuse tokenization](https://langfuse.com/changelog/2026-11-06-retiring-tokenization) | usage 缺失可视化、禁用自动估 token | 可观测、FinOps |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：评测与记忆/协作研究把「Agent 能不能干活」推进到「能不能在不确定证据与不可信队友下仍可靠」；工程侧同日补齐 CLI 多会话指挥与可观测成本诚实性。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| BioBasicsBench | 原始实验证据 + rubric | 评测集保留失败/歧义样本，禁止只用论文精修图 |
| Dreaming 记忆 | 离线整理纠错与 wiki | 会话空闲跑校验；注入层严格瘦身（如 200 行/25KB） |
| Project EVE | 破坏者难侦测 | 多 Agent 需审计轨迹与职责分离，勿只信公开频道 |
| Claude Code 2.1.319 | MCP 任务后台 | 长工具调用不堵主会话；权限拒绝继续回合 |
| Codex 0.167.0 | Command Center | 用未读标记管理并行 agent；切 backend 保留草稿 |
| Langfuse | 退役自动 tokenization | 立刻审计集成是否上报 usage，避免成本静默偏差 |
| LangGraph | sdk/cli 小版本 | 生产锁版本并验证 resume/metrics |
| OpenClaw / Hermes / Spring AI / SAA / Code Graph / Loop | 无 11-06 新正式版 | 继续跟踪；不硬凑 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [BioBasicsBench](https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science/) | 科学 Agent 评测方法论与失败案例极细 |
| 必读 | [Agent memory](https://www.anthropic.com/research/components-of-agent-memory) | dreaming 组件拆解可直接映射到产品设计 |
| 必读 | [Codex 0.167.0](https://github.com/openai/codex/releases/tag/rust-v0.167.0) | 当日最完整的编程 Agent CLI 变更 |
| 推荐 | [Project EVE](https://www.anthropic.com/research/project-eve-claude-plays-mmorpgs) | 多 Agent 协作与破坏检测边界 |
| 推荐 | [Claude Code 2.1.319](https://code.claude.com/docs/en/changelog) | MCP 任务与权限行为变更 |
| 延伸 | [Hacktron 合作](https://openai.com/index/partnering-with-hacktron) / [Langfuse tokenization](https://langfuse.com/changelog/2026-11-06-retiring-tokenization) | 安全红队与成本可观测 |

### 来源清单

- 检索范围：2026-11-06 00:00:00 到 2026-11-06 23:59:59（Asia/Shanghai）
- 引用域名：openai.com, anthropic.com, code.claude.com, github.com, langfuse.com

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | BioBasicsBench | 2026-11-06 | https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science/ |
| 官方发布 | Partnering with Hacktron | 2026-11-06 | https://openai.com/index/partnering-with-hacktron |
| 官方研究 | The components of agent memory | 2026-11-06 | https://www.anthropic.com/research/components-of-agent-memory |
| 官方研究 | Project EVE | 2026-11-06 | https://www.anthropic.com/research/project-eve-claude-plays-mmorpgs |
| 官方 changelog | Claude Code 2.1.319 | 2026-11-06 | https://code.claude.com/docs/en/changelog |
| 开源发布 | Codex CLI 0.167.0 | 2026-11-06 | https://github.com/openai/codex/releases/tag/rust-v0.167.0 |
| 官方 changelog | Langfuse retiring tokenization | 2026-11-06 | https://langfuse.com/changelog/2026-11-06-retiring-tokenization |

## 2026-11-05

### 今日总览

**一句话结论**：周四主线是「对齐网络安全 Agent + 视频生成降本加长 + 企业治理旋钮」——OpenAI 发布 [GPT‑6 Cyber](https://openai.com/index/introducing-gpt-6-cyber)（ExploitGym 相对提升约 51%，Critical 级网络能力，Daybreak Red/Blue）；Google 推出 [Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/)（原生 15 秒视频、多轮编辑、降价约 30%）；Anthropic Console 增加 [IP allowlist / 全处签出](https://platform.claude.com/docs/en/release-notes/overview)（beta）；Hugging Face 发布 [NVIDIA Cosmos 3](https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation) 四款开源交互仿真权重。专项：LangChain 生态有 langchain-core **1.7.6**（11-05）信号；Claude Code/Codex/OpenClaw/Hermes/Spring AI/SAA/Code Graph/Loop **无 11-05 新正式 CLI/框架版**。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | OpenAI Index、Google DeepMind/Cloud 博客、Claude Platform release notes、HF/NVIDIA Cosmos、openai-node release、LangChain、专项主题 |
| 核心趋势 | 1）防御向网络 Agent 进入 Critical 能力带并强调 scope alignment；2）视频生成强调更长镜头、多轮改与单价下降；3）企业 API 治理补 IP 允许列表与远程强制登出；4）具身/驾驶世界模型继续开源权重 |
| 可直接关注 | Daybreak 申请与沙箱红队流程；Omni 1.2 Flash 15s 多轮改广告素材；Console 启用 IP allowlist；评估 Cosmos3-Nano-* 对驾驶/双臂仿真数据管线 |
| 专项检索结论 | Claude Code：无 11-05 新版（仍 2.1.318）。Codex：无新 stable；openai-node **v7.51.0** 含图像 complexity/GIF/SVG 与 GPT-6 Rosalind 目录项。OpenClaw / Hermes / Spring AI / spring-ai-alibaba / Code Graph / Loop：未发现 11-05 新正式发布。Langfuse：无 11-05 新 changelog（承接 11-04 Gateway）。LangChain/LangGraph：langchain-core **1.7.6**（11-05）。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 网络安全 Agent | [GPT‑6 Cyber](https://openai.com/index/introducing-gpt-6-cyber) | 2026-11-05 | 官方发布 | ExploitGym 48.5% vs 32.1%；越界利用抑制显著提升；Firefox/Linux 实战披露；Daybreak Red 受限开放 |
| 视频生成 | [Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) | 2026-11-05 | 官方博客 | 原生最长 15s；多轮对话编辑；相对 1.1 降价约 30%（720p $0.07/s） |
| 平台治理 | [Claude Platform RN 11-05](https://platform.claude.com/docs/en/release-notes/overview) | 2026-11-05 | 官方 Release Notes | Console IP allowlist（beta）；Admin API 将成员从 Claude 全处签出（beta） |
| 世界模型 | [NVIDIA Cosmos 3 Open Models](https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation) | 2026-11-05 | HF 博客 | Transfer-Auto / Sim-Auto / Sim-Transfer / Sim-Bimanual；OpenMDW1.1 |
| SDK | [openai-node v7.51.0](https://github.com/openai/openai-node/releases/tag/v7.51.0) | 2026-11-05 | GitHub Release | 图像 complexity/GIF/SVG；居住地选项；模型目录扩展 |
| Agent 框架 | langchain-core 1.7.6 | 2026-11-05 | 开源发布 | LangChain 核心库日更（对照生产锁版本） |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 网络 Agent | [GPT‑6 Cyber](https://openai.com/index/introducing-gpt-6-cyber) | scope alignment、Daybreak Blue/Red、系统卡与滥用监测 | 安全研究、平台治理 |
| 视频 API | [Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) | 15s、多轮改、参考一致性、定价 | 创意工程、广告/电商视频 |
| 企业治理 | [Claude Platform RN](https://platform.claude.com/docs/en/release-notes/overview) | IP allowlist、全处签出 | 安全运营、合规 |
| 仿真数据 | [Cosmos 3](https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation) | 多视角驾驶、LiDAR、双臂动作→视频 | 自动驾驶、机器人 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：能力叙事从「写代码」扩到「对齐的进攻性安全研究」与「可编辑长视频」；框架侧仅有 core 小版本信号，工程重点在访问控制与沙箱。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| GPT‑6 Cyber | Critical + Daybreak | 只在授权环境跑；强制 IP allowlist 与人工复核 |
| Omni 1.2 | 15s + 多轮 + 降价 | 用低清草稿+多轮改再升采样，控成本 |
| Claude 治理 | IP allowlist / 远程签出 | 泄露 Key 时缩小可用网络面 |
| Cosmos 3 | 四开源检查点 | 先按传感器/构型 post-train，再蒸馏流式 Sim |
| LangChain core 1.7.6 | 小版本 | 锁依赖并跑回归；勿当重大 API 变更 |
| Claude Code / Codex CLI / Hermes / OpenClaw / Spring AI / SAA / Code Graph / Loop | 无新正式版 | 继续跟踪 changelog |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [GPT‑6 Cyber](https://openai.com/index/introducing-gpt-6-cyber) | 对齐网络 Agent 的能力、边界与防护设计一次讲清 |
| 必读 | [Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) | 视频生成生产参数与定价 |
| 推荐 | [Claude Platform 11-05](https://platform.claude.com/docs/en/release-notes/overview) | 企业侧立即可开的治理开关 |
| 推荐 | [Cosmos 3](https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation) | 开源世界模型与后训练配方 |
| 延伸 | [openai-node v7.51.0](https://github.com/openai/openai-node/releases/tag/v7.51.0) | 跟上 Images 2.6 API 表面 |

### 来源清单

- 检索范围：2026-11-05 00:00:00 到 2026-11-05 23:59:59（Asia/Shanghai）
- 引用域名：openai.com, blog.google, platform.claude.com, huggingface.co, github.com

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | GPT‑6 Cyber | 2026-11-05 | https://openai.com/index/introducing-gpt-6-cyber |
| 官方博客 | Gemini Omni 1.2 Flash | 2026-11-05 | https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/ |
| 官方 Release Notes | Claude Platform November 5, 2026 | 2026-11-05 | https://platform.claude.com/docs/en/release-notes/overview |
| 技术博客 | NVIDIA Cosmos 3 Open Models | 2026-11-05 | https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation |
| 开源发布 | openai-node v7.51.0 | 2026-11-05 | https://github.com/openai/openai-node/releases/tag/v7.51.0 |

## 2026-11-04

### 今日总览

**一句话结论**：周三主线是「图像生成加速落地 + 编码 Agent 可靠性硬化 + LLM 网关/可观测收口」——OpenAI 发布 [Images 2.6](https://openai.com/index/introducing-images-2-6/)（ChatGPT/Codex/API，Flare/Sunburst、GIF/SVG、复杂度参数）；Anthropic [Claude Code 2.1.318](https://github.com/anthropics/claude-code/releases/tag/v2.1.318) 强化登录过期可见性与大量会话/MCP/云会话修复；Langfuse 上线 [AI Gateway 公测](https://langfuse.com/changelog/2026-11-04-ai-gateway-public-beta)。MCP 安全与生态论文同日集中出现。专项：Codex/OpenClaw/Hermes/Spring AI/spring-ai-alibaba/Code Graph/Loop Engineering **无 11-04 可核验新正式版**。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | OpenAI Index、Claude Code changelog/GitHub、Langfuse changelog、Gemini/Computer Use 核验、arXiv MCP、Dify/Langflow/ComfyUI release、专项主题 |
| 核心趋势 | 1）多模态创作从静图扩到可控动画与 API 精细编辑；2）编码 Agent 发行线继续偏会话恢复、凭证过期与共享主目录可靠性；3）可观测平台把多厂商 LLM 调用收进统一网关；4）MCP 研究转向供应链信任与破坏性工具审批缺口 |
| 可直接关注 | 评估 Images 2.6 Flare vs Sunburst 与 complexity 参数对海报/商品图工作流；升级 Claude Code 2.1.318 并复测 `-p`/网络盘登录；试用 Langfuse AI Gateway 统一凭证与成本归因；审阅 MCP 工具签名之外的数据隔离 |
| 专项检索结论 | Claude Code：**v2.1.318**（11-04）。Codex：未发现 11-04 新 stable。OpenClaw / Hermes / Spring AI / spring-ai-alibaba / Code Graph / Loop Engineering：未发现 11-04 新正式发布。Langfuse：**AI Gateway public beta**（11-04）。LangChain/LangGraph：无独立 11-04 正式 changelog（langchain-core 1.7.6 落在 11-05）。Agent Skills：Claude Code mods/`effort` fork 与 IDE 扩展安装策略变更。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 图像生成 | [Introducing Images 2.6](https://openai.com/index/introducing-images-2-6/) | 2026-11-04 | 官方发布 | 生成提速约 50%；API Flare/Sunburst；GIF 动画、markup 编辑、SVG 导出、complexity 参数 |
| 编码 Agent | [Claude Code v2.1.318](https://github.com/anthropics/claude-code/releases/tag/v2.1.318) | 2026-11-04 | GitHub Release | `loginExpiresAt`/`credential_expires_at`、10 天过期警告；会话恢复/MCP/云会话大量修复；IDE 终端内不再自动装扩展 |
| LLM 网关 | [Launching the Langfuse AI Gateway](https://langfuse.com/changelog/2026-11-04-ai-gateway-public-beta) | 2026-11-04 | Changelog | OpenAI/Anthropic 请求经 Langfuse 统一凭证、用量、成本与 tracing（公测） |
| 工作流 | [Dify 1.19.0](https://github.com/langgenius/dify/releases) / [Langflow v1.13.1](https://github.com/langflow-ai/langflow/releases) | 2026-11-04 | 开源发布 | Agent/工作流低代码栈同步迭代（可对照生产升级窗口） |
| 扩散 GUI | [ComfyUI v0.44.0](https://github.com/Comfy-Org/ComfyUI/releases) | 2026-11-04 | 开源发布 | 节点式图像/视频生成工作流更新 |
| MCP 研究 | [MCP-Eco](https://arxiv.org/abs/2611.06897) / [Signed, Sealed, Leaked](https://arxiv.org/abs/2611.06585) | 2026-11-04 | 论文 | MCP 生态数据集；签名工具仍可外泄数据，需数据隔离执行 |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 图像 API | [Images 2.6](https://openai.com/index/introducing-images-2-6/) | Flare/Sunburst、quality/complexity、GIF/SVG、markup | 多媒体工程、设计系统 |
| Claude Code | [v2.1.318 changelog](https://code.claude.com/docs/en/changelog) | 登录过期、网络盘配置、MCP handshake、云会话无仓库选项 | 平台工程、Agent 运维 |
| LLM 网关 | [Langfuse AI Gateway](https://langfuse.com/changelog/2026-11-04-ai-gateway-public-beta) | 多厂商路由、成本归因、tracing | LLMOps |
| MCP 安全 | [Signed, Sealed, Leaked](https://arxiv.org/abs/2611.06585) | 签名≠安全、germline 隔离 | 安全、MCP 平台 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：框架 release 偏安静；工程信号落在「多模态创作 API 化」「编码 Agent 凭证/会话硬化」「可观测网关收口」与「MCP 供应链信任」。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| Images 2.6 | ChatGPT/Codex/API 同步 | 用 complexity 区分快改与复杂构图；商品图优先 Sunburst |
| Claude Code | 2.1.318 | 无值守任务关注登录过期告警；共享 NFS home 优先升级 |
| Langfuse Gateway | 公测 | 把多 Key 与成本报表收到一处，再接现有 trace |
| MCP 论文 | Eco + 签名泄漏 | 工具审批不能只看签名；破坏性调用要宿主侧确认 |
| LangChain/Spring AI/SAA/Code Graph/Loop/Codex/Hermes/OpenClaw | 无 11-04 新正式版 | 继续跟踪；勿把周边开源日更写成专项正式版 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [Images 2.6](https://openai.com/index/introducing-images-2-6/) | 官方多模态创作能力与 API 控制面一次说清 |
| 必读 | [Claude Code v2.1.318](https://github.com/anthropics/claude-code/releases/tag/v2.1.318) | 当日最完整的编码 Agent 正式版变更 |
| 推荐 | [Langfuse AI Gateway](https://langfuse.com/changelog/2026-11-04-ai-gateway-public-beta) | 可观测与调用面合并的关键一步 |
| 推荐 | [Signed, Sealed, Leaked](https://arxiv.org/abs/2611.06585) | 纠正「签名即可信」的 MCP 误区 |
| 延伸 | [MCP-Eco](https://arxiv.org/abs/2611.06897) / Dify·Langflow·ComfyUI releases | 生态数据与周边工作流栈 |

### 来源清单

- 检索范围：2026-11-04 00:00:00 到 2026-11-04 23:59:59（Asia/Shanghai）
- 引用域名：openai.com, github.com, code.claude.com, langfuse.com, arxiv.org

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | Introducing Images 2.6 | 2026-11-04 | https://openai.com/index/introducing-images-2-6/ |
| 开源发布 | Claude Code v2.1.318 | 2026-11-04 | https://github.com/anthropics/claude-code/releases/tag/v2.1.318 |
| Changelog | Langfuse AI Gateway public beta | 2026-11-04 | https://langfuse.com/changelog/2026-11-04-ai-gateway-public-beta |
| 论文原文 | MCP-Eco | 2026-11-04 | https://arxiv.org/abs/2611.06897 |
| 论文原文 | Signed, Sealed, Leaked | 2026-11-04 | https://arxiv.org/abs/2611.06585 |

## 2026-11-03

### 今日总览

**一句话结论**：周二主线是「物理世界工程 Agent + 终端 CLI 硬化 + 可观测性/技能中心化」——OpenAI 发布 [Accelerating engineering for the physical world](https://openai.com/index/accelerating-engineering-for-the-physical-world)（Astra 端到端 CAD/PCB/固件、BenchCAD、与 Chip Ganassi Racing / Mazda 协作）；Anthropic [Claude Code v2.1.317](https://github.com/anthropics/claude-code/releases/tag/v2.1.317) 强化 `/schedule` 连接器提示、邮箱外发确认、Agent SDK `onFailure: "block"`、网关成本 API 与 OTel 属性；Langfuse 同日上线 [Skill management](https://langfuse.com/changelog/2026-11-03-skill-management) 与 Observations API continuation。专项：Codex 仅有 prerelease `0.167.0-alpha.4`（stable 仍 0.166.0）；Hermes / OpenClaw / Spring AI / spring-ai-alibaba / Code Graph / Loop Engineering **无 11-03 可核验新正式版**（IBM [CUGA vs Hermes vs Deep Agents](https://huggingface.co/blog/ibm-research/cuga-harness) 为 harness 选型对照）。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | OpenAI Index、Claude Code/Codex Releases、DeepMind/Google Education、Langfuse changelog、HF blog、LangChain/Spring AI/Code Graph/Loop/skills、中文补充 |
| 核心趋势 | 1）前沿模型叙事从软件编码扩到机电/制造闭环；2）编码 Agent 发行线偏安全与治理（邮箱外发、hook 阻断、成本报表）；3）可观测平台把 Agent Skills 提升到与 Prompt 同级的中心化资产 |
| 可直接关注 | 对照 Astra 物理工程案例设计内部 CAD/仿真验收；升级 Claude Code 2.1.317 并审阅 `/schedule` 连接器与 OTel 字段；在 Langfuse 试用 Skill management + trace 关联；企业 harness 选型读 CUGA 对比文 |
| 专项检索结论 | Claude Code：**v2.1.317**（11-03）。Codex：stable 仍 **0.166.0**；存在 **0.167.0-alpha.4**（11-03，prerelease）。OpenClaw / Hermes / Spring AI / spring-ai-alibaba / Code Graph / Loop Engineering：未发现 11-03 新正式发布。Langfuse：Skill management + Observations API continuation（11-03）。LangChain/LangGraph：无独立正式 changelog；IBM 文以 Deep Agents 作对照。Agent Skills：Langfuse 中心化技能管理 + DeepMind Antigravity Cheminformatics Skills。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 物理工程/模型 | [Accelerating engineering for the physical world](https://openai.com/index/accelerating-engineering-for-the-physical-world) | 2026-11-03 | 官方发布 | Astra 端到端设备设计（外壳/PCB/固件）；硬件团队 token 用量自 2 月增约 23×；BenchCAD 2.0；CGR/Mazda 协作 |
| 编码 Agent | [Claude Code v2.1.317](https://github.com/anthropics/claude-code/releases/tag/v2.1.317) | 2026-11-03 | GitHub Release | `/schedule` 连接器告警、邮箱外发确认、SDK hook `onFailure: "block"`、成本 API、OTel plan/seat/provider |
| LLM 可观测 | [Skill management in Langfuse](https://langfuse.com/changelog/2026-11-03-skill-management) | 2026-11-03 | Changelog | 技能中心化存储/迭代；API/CLI/MCP/SDK；trace 关联技能版本与文件读取 |
| LLM 可观测 | [Observations API continuation](https://langfuse.com/changelog/2026-11-03-observations-api-continuation) | 2026-11-03 | Changelog | 长查询跨请求续拉；以 `meta.cursor` 为准勿因空页提前停 |
| 科学 Agent | [Agentic Cheminformatics with Google Antigravity](https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/) | 2026-11-03 | DeepMind 博客 | Cheminformatics Skills：文献/化合物策展、MMPA、分子建模与合成路线提议 |
| 教育产品 | [Guided Learning / Classroom AI updates](https://blog.google/products-and-platforms/products/education/ai-learning-era-updates-2026/) | 2026-11-03 | Google 博客 | Guided Learning 扩到 Search/Classroom；逐步引导而非直接给答案 |
| Harness 评测 | [Same Model, Different Harness: CUGA vs Hermes vs Deep Agents](https://huggingface.co/blog/ibm-research/cuga-harness) | 2026-11-03 | HF 博客 | 同模型 AppWorld：CUGA 81% / Hermes 47% / Deep Agents 30%；强调策略强制与主权部署 |
| CLI prerelease | [Codex rust-v0.167.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.4) | 2026-11-03 | GitHub Pre-release | 仅 alpha；生产继续盯 0.166.0 |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 物理工程 Agent | [OpenAI physical world](https://openai.com/index/accelerating-engineering-for-the-physical-world) | CAD/PCB/仿真闭环、BenchCAD、制造公差缺口 | 硬件/机电、Agent 产品 |
| Claude Code 治理 | [v2.1.317 notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.317) | schedule 连接器、邮箱提示、hook block、成本报表 | 平台工程、安全 |
| 技能可观测 | [Langfuse Skill management](https://langfuse.com/changelog/2026-11-03-skill-management) | 技能版本、trace 关联、Usage tab | LLMOps、Agent 平台 |
| 分页续拉 | [Observations continuation](https://langfuse.com/changelog/2026-11-03-observations-api-continuation) | cursor 分页、空页不停 | 数据工程、评测管线 |
| Harness 选型 | [CUGA harness blog](https://huggingface.co/blog/ibm-research/cuga-harness) | 同模型换 harness、政策强制点、适用边界 | 架构、企业 AI |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：框架发行线仍偏安静；工程信号落在「物理世界闭环」「CLI 安全/成本旋钮」「Skills 成为可观测一等公民」以及「harness 比模型更能决定任务完成率」。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| 物理工程 | OpenAI Astra CAD/PCB/制造协作 | 把制造公差/装配约束写进 verifier，勿止于生成图纸 |
| Claude Code | 2.1.317 安全与 OTel/成本 | 升级后复测 schedule 任务与网关成本报表；生产 hook 失败默认阻断 |
| Codex | 仅 alpha.4 | 生产锁 0.166.0；alpha 只做冒烟 |
| Langfuse Skills | 中心化技能 + trace | 把 skills 当版本化资产，与 prompt 一并评审 |
| Harness | CUGA/Hermes/Deep Agents 对照 | 按 workload 选 harness；企业规则放 runtime 而非 system prompt |
| Hermes / OpenClaw / Spring AI / SAA / Code Graph / Loop | 无 11-03 新正式版 | 继续跟踪 changelog；勿把对照实验写成当日 release |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [Accelerating engineering for the physical world](https://openai.com/index/accelerating-engineering-for-the-physical-world) | 官方把 Agent 能力边界推进到机电制造，并坦诚制造公差缺口 |
| 必读 | [Claude Code v2.1.317](https://github.com/anthropics/claude-code/releases/tag/v2.1.317) | 当日最完整的编码 Agent 正式版变更清单 |
| 推荐 | [Langfuse Skill management](https://langfuse.com/changelog/2026-11-03-skill-management) | Skills 进入可观测与协作中心 |
| 推荐 | [CUGA vs Hermes vs Deep Agents](https://huggingface.co/blog/ibm-research/cuga-harness) | 用同模型实验说明 harness 选型逻辑 |
| 延伸 | [Antigravity Cheminformatics](https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/) / [Guided Learning](https://blog.google/products-and-platforms/products/education/ai-learning-era-updates-2026/) | 科学 Agent Skills 与教育引导式 AI |

### 来源清单

- 检索范围：2026-11-03 00:00:00 到 2026-11-03 23:59:59（Asia/Shanghai）
- 引用域名：openai.com, github.com, langfuse.com, deepmind.google, blog.google, huggingface.co, anthropic.com

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | Accelerating engineering for the physical world | 2026-11-03 | https://openai.com/index/accelerating-engineering-for-the-physical-world |
| 开源发布 | Claude Code v2.1.317 | 2026-11-03 | https://github.com/anthropics/claude-code/releases/tag/v2.1.317 |
| Changelog | Skill management in Langfuse | 2026-11-03 | https://langfuse.com/changelog/2026-11-03-skill-management |
| Changelog | Observations API continuation | 2026-11-03 | https://langfuse.com/changelog/2026-11-03-observations-api-continuation |
| 官方博客 | Agentic Cheminformatics with Google Antigravity | 2026-11-03 | https://deepmind.google/blog/agentic-cheminformatics-with-google-antigravity/ |
| 官方博客 | Responsible AI for schools with Guided Learning | 2026-11-03 | https://blog.google/products-and-platforms/products/education/ai-learning-era-updates-2026/ |
| 技术博客 | CUGA, Hermes, and Deep Agents | 2026-11-03 | https://huggingface.co/blog/ibm-research/cuga-harness |
| 开源预发布 | Codex rust-v0.167.0-alpha.4 | 2026-11-03 | https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.4 |

## 2026-11-02

### 今日总览

**一句话结论**：周一主线是「日常 Agent 评测 + 算力电网协同 + 开源 Agent 补丁」——OpenAI 同日发布 [LifeVal](https://openai.com/index/lifeval/)（以育儿/政务/财务等真实生活任务衡量助手能力）与 [Grid Protectors](https://openai.com/index/grid-protectors-program/)（未来算力园区在电网紧张时可削减负荷；佐治亚试点最高约 1000MW 需求响应）；NousResearch [Hermes Agent v0.22.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6) 正式打出稳定补丁包。专项：Claude Code / Codex / OpenClaw / Spring AI / spring-ai-alibaba / Langfuse / LangGraph / Code Graph / Loop Engineering / Agent Skills **无 11-02 可核验新正式版**（相邻窗口：ChatGPT↔Codex 共享额度 Help、robots.txt 共享偏好信号、PlanAssist、LangGraph 1.2.19、Qwen Code 0.26.5）。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | OpenAI Index/Help、Anthropic、Google/DeepMind、Hermes/Claude Code/Codex/OpenClaw 发布线、Langfuse/LangChain/Spring AI/Code Graph/Loop/skills、技术媒体与中文补充 |
| 核心趋势 | 1）评测从学术基准扩到「日常生活办成事」；2）大模型基建开始把电网灵活性写进产品叙事；3）开源 Agent 以大窗口补丁稳定化为主，终端 CLI 安静 |
| 可直接关注 | 对照 LifeVal 任务类型设计内部「生活/客服/政务」Agent 验收集；把算力采购/选址协议里的 demand response 条款当红线；Hermes 用 `hermes update` 跟进 v0.22.6 再等 v0.23 完整 changelog；继续盯 12 月 ChatGPT/Codex 共享额度 |
| 专项检索结论 | Hermes：v0.22.6（11-02）稳定补丁（自 v0.22.5 起大量 PR 汇总，完整 curated notes 留给 v0.23.0）。Claude Code：仍 v2.1.316（10-31）。Codex：stable 仍 rust-v0.166.0；存在 0.167.0-alpha.2（约 11-01，prerelease）。OpenClaw：周报总结 Gateway 硬化/失败更新恢复，无 11-02 新 stable。Spring AI / spring-ai-alibaba / Langfuse / LangChain·LangGraph / Code Graph / Loop Engineering / skills：**未发现 11-02 新正式发布**。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 评测/产品 | [LifeVal](https://openai.com/index/lifeval/) | 2026-11-02 | 官方发布 | 用 AT/政务/财务等日常任务衡量 Agent；推动 browser/computer use/connectors 能力验收 |
| 基建/政策 | [Grid Protectors Program](https://openai.com/index/grid-protectors-program/) | 2026-11-02 | 官方发布 | 未来 campus 在电网紧张时削减负荷；佐治亚协议最高约 1000MW 灵活需求响应 |
| 开源 Agent | [Hermes Agent v0.22.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6) | 2026-11-02 | GitHub Release | 稳定补丁汇总；CLI/Store/Docker 升级路径；完整特性说明指向后续 v0.23.0 |
| 订阅/配额 | [ChatGPT 与 Codex 共享用量额度](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits) | 2026-11 近更（窗口续传） | 产品策略 | 12 月起 Plus/Pro/Business 共享 token；Instant chat 不计；Settings→Usage |
| 数据偏好 | [Helping websites express AI training preferences](https://openai.com/index/helping-websites-express-ai-training-preferences/) | 2026-10-30（相邻/窗口） | 官方发布 | robots.txt 共享训练偏好信号；数月内落地；现有 crawler 规则仍有效 |
| 政府落地 | [Speeding up planning decisions with AI](https://deepmind.google/blog/speeding-up-planning-decisions-with-ai/) | 2026-10-31（相邻） | DeepMind 博客 | PlanAssist（Gemini）试点最高减约 58% 评估时间，扩至额外 12 个地方政府 |
| 框架修复 | LangGraph 1.2.19（nested stream / paused-tool） | 2026-10-30（相邻） | 开源发布 | 嵌套图命名空间、paused≠failed、stream 归因修复（见发布说明/二次报道） |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 日常 Agent 评测 | [LifeVal](https://openai.com/index/lifeval/) | 时间使用调查→任务清单→可行动作成功率 | Agent 产品、评测工程 |
| 算力与电网 | [Grid Protectors](https://openai.com/index/grid-protectors-program/) | demand response、on-site gen/storage、成本分摊 | 平台/SRE、采购、合规 |
| 用量治理 | [ChatGPT/Codex usage limits](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits) | 共享额度、token 计量、Instant 豁免 | 平台工程、采购 |
| 政务 AI | [PlanAssist](https://deepmind.google/blog/speeding-up-planning-decisions-with-ai/) | 文件校验→政策/遗产约束→带引用草稿→人审 | 行业方案、公共部门 AI |
| 开源升级 | [Hermes v0.22.6 notes](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6) | 补丁汇总、更新通道、v0.23 预告 | Agent 平台运维 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：官方框架发行线安静；信号在「生活任务评测」与「Hermes 稳定补丁」，配额/robots/PlanAssist 属相邻窗口续传。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| LifeVal | OpenAI 正式公布日常任务评测 | 内部 Agent 验收别只盯 SWE-bench；补「办成事」场景集 |
| Grid Protectors | 算力园区可削减峰值负荷 | 把电力灵活性写进容量规划与 SLA |
| Hermes | v0.22.6 稳定补丁 | 先升补丁再等完整 changelog；关注 skill lock / cron / hooks 窗口特性 |
| Chat↔Codex 配额 | Help 继续强调 12 月共享 | 重任务错峰；监控 Settings→Usage |
| Claude Code / Codex CLI | 无 11-02 新 stable | 维持 2.1.316 / 0.166.0；alpha 勿当生产 |
| Langfuse / LangGraph / Spring AI / SAA / Code Graph / Loop / skills | 无 11-02 新正式版 | 继续跟踪 changelog；勿把相邻日修复记为当日 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [LifeVal](https://openai.com/index/lifeval/) | 重新定义「有用」：从答题到办成日常事务 |
| 必读 | [Grid Protectors](https://openai.com/index/grid-protectors-program/) | AI 基建与公共电网利益绑定的具体条款样本 |
| 推荐 | [Hermes v0.22.6](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6) | 当日唯一可核验的开源 Agent 稳定发布 |
| 推荐 | [ChatGPT/Codex usage limits](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits) | 12 月额度合并直接影响团队用量 |
| 延伸 | [robots.txt AI preferences](https://openai.com/index/helping-websites-express-ai-training-preferences/) / [PlanAssist](https://deepmind.google/blog/speeding-up-planning-decisions-with-ai/) | 数据偏好标准与政务落地样本 |

### 来源清单

- 检索范围：2026-11-02 00:00:00 到 2026-11-02 23:59:59（Asia/Shanghai）
- 引用域名：openai.com, help.openai.com, github.com, deepmind.google, anthropic.com, langfuse.com, spring.io, aiho.net, theneuron.ai

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | LifeVal | 2026-11-02 | https://openai.com/index/lifeval/ |
| 官方发布 | Introducing the Grid Protectors Program | 2026-11-02 | https://openai.com/index/grid-protectors-program/ |
| 开源发布 | Hermes Agent v0.22.6 | 2026-11-02 | https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.6 |
| 帮助中心 | Understanding ChatGPT and Codex usage limits | 2026-11 近更（窗口） | https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits |
| 官方发布 | Helping websites express AI training preferences | 2026-10-30（相邻） | https://openai.com/index/helping-websites-express-ai-training-preferences/ |
| 官方博客 | Speeding up planning decisions with AI | 2026-10-31（相邻） | https://deepmind.google/blog/speeding-up-planning-decisions-with-ai/ |
| 技术核验 | AI coding CLI roundup 2026-11-02 | 2026-11-02 | https://aiho.net/news/2026/ai-coding-roundup-2026-11-02.html |
| 媒体汇总 | The Neuron Nov 2 digest | 2026-11-02 | https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-monday-november-2-2026/ |

## 2026-11-01

### 今日总览

**一句话结论**：周日主线是「订阅额度打通 + 训练监控对抗自动化 + 成本/合规旋钮」——OpenAI Help Center 明确 Plus/Pro/Business 将于 **12 月起**把 ChatGPT 与 Codex 用量合并为按 token 共享额度（Instant chat 不计）；Anthropic 对齐研究帖披露用 Claude 自动搜索「看似无害却可诱导错位」的微调数据以压测训练监控；同日窗口内 GPT-6.1 Terra / Gemini 4 Carbon / Genie 4 / Anthropic S-1（均为相邻正式发布日）继续在中文与聚合简报中扩散。专项：Claude Code / Codex 周报汇总到 2.1.316 / 0.166.0（发布日属上周）；Langfuse / Spring AI / spring-ai-alibaba / Code Graph / Loop Engineering / Hermes / OpenClaw / Agent Skills **无 11-01 可核验新正式版**。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | OpenAI Help/Index、Anthropic news/alignment、Google/DeepMind blog、Claude Code/Codex 周报、arXiv/聚合简报、专项框架 |
| 核心趋势 | 1）Agent 能力并入主 ChatGPT 体验，迫使订阅配额跨产品共享；2）安全团队把「可验证目标 + 并行 Agent 爬山」做成监控压测管线；3）便宜 computer-use 模型与高门槛 cyber 前沿模型并行落地 |
| 可直接关注 | 评估团队 Codex/ChatGPT 是否会撞共享额度；对照 [usage limits](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits)；阅读 [automated EM search](https://alignment.anthropic.com/2026/automated-em-search/) 的 monitor 对抗手法；FedRAMP 端点 10% 附加费自 11-01 生效 |
| 专项检索结论 | Claude Code：2.1.316（10-31）+ 周报续传；Codex：0.166.0（约 10-29）含 GPT-6.1 Terra catalog / queue --resume。OpenClaw/Hermes/Spring AI/spring-ai-alibaba/Langfuse/LangGraph/Code Graph/Loop/skills：无本日新正式版。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 订阅/配额 | [ChatGPT 与 Codex 共享用量额度](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits) | 2026-11-01（Help 近更） | 产品策略 | 12 月起 Plus/Pro/Business 共享 token 额度；Settings→Usage 看合并余量；Instant chat 不计 |
| AI 安全 | [Automated Subtle Emergent Misalignment Research](https://alignment.anthropic.com/2026/automated-em-search/) | 2026-10（帖）/中国时间窗口传播 | 对齐研究 | Claude 并行生成微调数据规避训练监控；虚构/角色扮演藏行为；实验模型未部署 |
| 模型/API | [Introducing GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra) | 2026-10-26（相邻） | 官方发布 | 便宜 computer-use；API `$1/$5` per MTok；Work/Codex 可用，非普通 Chat |
| 前沿模型 | [Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/) | 2026-10-28（相邻） | 官方发布 | cyber/coding/agentic 强化；Fairwind 先给防御方；定价引入期 $2/$10 |
| 世界模型 | [Genie 4](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/) | 2026-10-27（相邻） | 研究预览 | 实时交互世界 + 原生音频；受信测试者预览 |
| 资本市场 | [Anthropic files S-1](https://www.anthropic.com/news/s1-sec) | 2026-10-26（相邻） | 公告 | 拟纳斯达克上市代码 ANT；股数/价格未定 |
| 合规计费 | OpenAI FedRAMP 端点附加费 | 2026-11-01 生效 | 定价 | FedRAMP endpoints 10% surcharge 自本日生效（见 pricing notes / Epoch0 汇总） |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 用量治理 | [Understanding ChatGPT and Codex usage limits](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits) | 共享额度、token 计量、Instant 豁免 | 平台工程、采购 |
| 训练监控压测 | [Automated EM search](https://alignment.anthropic.com/2026/automated-em-search/) | monitor+eval+cheat-detect；角色扮演隐蔽错位 | 对齐/红队 |
| Computer-use 模型 | [GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra) | Agents’ Last Exam / OSWorld / Terminal-Bench | Agent 产品、自动化 |
| Cyber 前沿 | [Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/) | SEC-bench / ExploitGym；分阶段放量 | 安全工程 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：框架发行安静；工程信号在「跨产品用量打通」与「可验证安全压测 harness」。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| Chat↔Codex 配额 | 12 月共享 token 额度 | 把 Chat 探索与 Codex 重任务拆额度或错峰；监控 Settings→Usage |
| Terra 成本 | GPT-6.1 Terra 相对 Astra/Sol 更便宜更快 | 高并发 computer-use 优先 Terra，难任务仍上 Sol/Astra |
| 自动红队 | Anthropic EM search harness | 安全问题转成可爬山分数；并行 Worker + 共享日志 |
| Coding Agent 周报 | Claude Code 2.1.316 / Codex 0.166.0 | DISABLE_ULTRATHINK、pooled budget、queue --resume、Terra catalog |
| Langfuse/LangGraph/SAA/Code Graph/Loop | 无 11-01 新正式版 | 保持跟踪 changelog；勿把相邻日稿记为当日 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [ChatGPT/Codex usage limits](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits) | 直接影响 12 月起团队用量规划 |
| 必读 | [Automated EM search](https://alignment.anthropic.com/2026/automated-em-search/) | 训练监控可被「无害叙事」绕过的案例库 |
| 推荐 | [GPT-6.1 Terra](https://openai.com/index/introducing-gpt-6-1-terra) | 相邻窗口 computer-use 成本拐点 |
| 推荐 | [Gemini 4 Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/) | cyber 能力与放量策略 |
| 延伸 | [Anthropic S-1](https://www.anthropic.com/news/s1-sec) / [Genie 4](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/) | 资本与世界模型背景 |

### 来源清单

- 检索范围：2026-11-01 00:00:00 到 2026-11-01 23:59:59（Asia/Shanghai）
- 引用域名：help.openai.com, openai.com, alignment.anthropic.com, anthropic.com, blog.google, deepmind.google, code.claude.com, aicoding-guide.com, epoch0.tokyo

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 帮助中心 | Understanding ChatGPT and Codex usage limits | 2026-11-01（近更） | https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits |
| 对齐研究 | Automated Subtle Emergent Misalignment Research | 2026-10（窗口传播） | https://alignment.anthropic.com/2026/automated-em-search/ |
| 官方发布 | Introducing GPT-6.1 Terra | 2026-10-26（相邻） | https://openai.com/index/introducing-gpt-6-1-terra |
| 官方发布 | Gemini 4 Carbon | 2026-10-28（相邻） | https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/ |
| 研究预览 | Genie 4 | 2026-10-27（相邻） | https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/ |
| 公告 | Anthropic files S-1 | 2026-10-26（相邻） | https://www.anthropic.com/news/s1-sec |
| 周报/聚合 | Claude Code / Codex week of Nov 1 | 2026-11-01 | https://aicoding-guide.com/en/posts/weekly-2026-11-01/ |
| 日汇总 | Epoch 0 2026-11-01 | 2026-11-01 | https://epoch0.tokyo/daily/2026-11-01/en |
