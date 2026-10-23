# AI Daily News Digest

按 Asia/Shanghai 时区增量汇总 AI/人工智能相关每日资讯。

## 2026-10-22

### 今日总览

**一句话结论**：OpenAI 把 Decisions API 推到 GA，用 GPT‑6 Luna 专打「有界小决策」；Anthropic 同日把 Agent Skills 捐给 AAIF，并用 Claude 在汇编级完成百余开源库形式化验证——Agent 互操作标准与「可证明安全」两条线同时升温。

| 维度 | 本日结论 |
| --- | --- |
| 检索范围 | OpenAI、Anthropic、GitHub Copilot、DeepMind、Claude Code、Codex、Hermes、OpenClaw、Spring AI / Spring Alibaba AI、Langfuse、LangChain/LangGraph、Code Graph、Loop Engineering、企业落地、政策与论文 |
| 核心趋势 | 有界决策 API 进入生产热路径；Skills 标准中立化；形式化验证从专家项目走向 LLM 规模化；企业知识工作 Agent 全员铺开 |
| 可直接关注 | Decisions API 的 choice/score/predicate 与定价；AAIF 下 Agent Skills 治理；Claude 汇编级无崩溃证明与 Theorem skill；GitHub Copilot 全局默认策略与行业对标 |
| 专项检索结论 | Claude Code：生态侧显示 2.1.308（bugfix/可靠性）。Codex：无独立新 tag，但 Uber 全员 ChatGPT Work 明确继续用 Codex 做研发。OpenClaw / Hermes：未发现可核验的本日新正式版。Spring AI / Spring Alibaba AI：无本日正式 release。Langfuse：changelog 最近条目停在 10-19 Experiments，本日无新文。LangChain/LangGraph：无本日重大 changelog。Code Graph：无本日可核验发布。Loop Engineering：范式本身无新 scaffold 发布，但 Anthropic 形式化验证与 Agent Skills 捐赠强化「verifier / 标准中立」叙事。skills：Agent Skills 捐入 AAIF 为本日主线。 |

### 重要事件与发布

| 主题 | 标题 | 日期 | 类型 | 研发/学习价值 |
| --- | --- | --- | --- | --- |
| 决策 API | [Build more responsive apps with the Decisions API](https://openai.com/index/decisions-api/) | 2026-10-22 | 官方发布 | Decisions API GA：面向分类/路由/打分等有界问题，最高约 10× 快于 Responses API 的 Luna；支持 JSON/图像、prompt caching、美欧驻留、单请求最多 400 问；仅收输入 token（$0.10/M，缓存 $0.01/M）。Box/Datadog/Ramp/Sierra 等给出热路径延迟与成本数据。 |
| Agent Skills 标准 | [Donating Agent Skills to the Agentic AI Foundation](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) | 2026-10-22 | 官方发布 | Agent Skills（SKILL.md 文件夹标准）捐给 Linux 基金会旗下 AAIF；已有 70+ 平台接入、约 100 万 skills 发布。捐赠名称/Logo/GitHub org/agentskills.io；Lead Maintainer 为 David Soria Parra 与 Mahesh Murag。 |
| 形式化验证 | [LLMs are making formal software verification feasible at a much larger scale](https://www.anthropic.com/research/formal-verification) | 2026-10-22 | 研究报告 | Claude 在 RISC-V 汇编级为 123 个 OSS-Fuzz 库、239 个入口写出约 1.8 亿行 Rocq 证明；证明过程中发现多年未检出 bug；与 Theorem 合作并发布可复用 skill。 |
| 企业 Agent | [Uber brings ChatGPT Work to all employees](https://openai.com/index/uber-chatgpt-work-rollout/) | 2026-10-22 | 官方案例 | ChatGPT Work 从 1k 试点扩至 3 万+ 员工；默认 GPT‑6.1 Sol；接 Drive/Gmail/Calendar/Slack；工程侧继续用 Codex。 |
| Copilot 治理 | [Global default for Copilot features generally available](https://github.blog/changelog/2026-10-22-global-default-for-copilot-features-generally-available/) | 2026-10-22 | 官方发布 | Copilot Business/Enterprise 全局默认策略开始强制滚动（至 10-26）；未配置的 GA 功能按 Enabled/Disabled/Let orgs decide 一次性落地。 |
| Copilot 对标 | [Industry comparisons in the Copilot impact dashboard](https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard/) | 2026-10-22 | 官方发布 | Impact Dashboard 增加行业/规模对标（opt-in）；看 agent-first 占比与 agentic PR 合并率相对 peer median。 |
| FDE 实践 | [What FDE means at OpenAI](https://openai.com/index/forward-deployed-engineering-means/) | 2026-10-22 | 官方博客 | Forward Deployed Engineering 如何在 Codex 时代仍解决企业最难问题并反哺产品/研究。 |
| 地球科学 AI | [Beyond tree cover: mapping the world’s forest types](https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/) | 2026-10-22 | 官方研究 | DeepMind ForTy 2020：10m 全球林型图 + 2017–2025 变化序列，开放于 Earth Engine。 |
| 生命科学合作 | [Open call for guest investigators in the life sciences](https://www.anthropic.com/news/open-call-guest-investigators-life-sciences) | 2026-10-22 | 官方公告 | 邀请生命科学 PI 与 Anthropic 8–12 周合作，使用 Claude 做因果生物学/药物发现等可公开产出的项目。 |

### 技术文档与教程

| 方向 | 推荐资料 | 核心技术点 | 适合谁看 |
| --- | --- | --- | --- |
| 有界决策 | [Decisions API](https://openai.com/index/decisions-api/) | predicate/choice/score；GPT‑Live 联动；缓存与驻留 | 要在 Agent 热路径做路由/风控/分类的后端 |
| Skills 治理 | [Agent Skills → AAIF](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) | SKILL.md 互操作；基金会治理路线图 | 写/分发 Skills、做 Agent 平台的团队 |
| 形式化验证 | [Formal verification with Claude](https://www.anthropic.com/research/formal-verification) | fuzz→spec→Rocq；汇编级语义；proof 复用 | 安全工程、关键依赖维护者 |
| Copilot 策略 | [Global default policy](https://github.blog/changelog/2026-10-22-global-default-for-copilot-features-generally-available/) | AI Controls 默认策略与 MCP 设置 | GitHub Enterprise 管理员 |

### LangChain / Agent / LLM 工程相关进展

**总体判断**：本日工程主线是「把小决策从大模型对话里拆出来」+「把 Skills/证明能力从厂商私有叙事推进公共治理」；框架 changelog 面相对安静，企业落地与安全证明更热闹。

| 主题 | 进展 | 工程启发 |
| --- | --- | --- |
| Decisions 热路径 | OpenAI 用专用端点服务有界答案，客户报 3–40× 延迟收益 | Agent 编排里把「选下一步」与「写长文」拆开计费与 SLA |
| Skills 中立化 | Agent Skills 进入 AAIF，与 MCP 同基金会叙事 | 平台侧优先跟标准仓库而非单一厂商私有格式 |
| 可证明安全 | 汇编级无崩溃证明规模化 | 安全关键路径可把「测试」升级为「可机检证明」试点 |
| 企业 Skills 库 | Uber 全员 Work + 内部 AI skills library | 先建审批过的 Skills/集成清单，再谈全员 Agent |
| 专项空窗 | Langfuse/LangGraph/Spring AI Alibaba/Code Graph 本日无新正式版 | 继续跟踪 10-19 Langfuse Experiments；不把旧文记成新日 |

### 值得深入阅读的资料

| 推荐级别 | 资料 | 为什么值得读 |
| --- | --- | --- |
| 必读 | [Decisions API GA](https://openai.com/index/decisions-api/) | 改变 Agent 热路径的模型选型与成本模型 |
| 必读 | [Agent Skills → AAIF](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) | Skills 互操作进入基金会阶段 |
| 必读 | [Formal verification](https://www.anthropic.com/research/formal-verification) | LLM×形式化验证的规模化样板与局限写得很清楚 |
| 推荐 | [Uber ChatGPT Work](https://openai.com/index/uber-chatgpt-work-rollout/) | 知识工作 Agent 全员化的集成与治理清单 |
| 延伸 | [Copilot industry comparisons](https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard/) | 企业衡量 agentic 采用度的对标方法 |

### 来源清单

- 检索范围：2026-10-22 00:00:00 到 2026-10-22 23:59:59（Asia/Shanghai）
- 引用域名：openai.com, anthropic.com, github.blog, deepmind.google
- 来源清单表格：

| 类型 | 标题 | 日期 | 链接 |
| --- | --- | --- | --- |
| 官方发布 | Decisions API generally available | 2026-10-22 | https://openai.com/index/decisions-api/ |
| 官方发布 | Donating Agent Skills to AAIF | 2026-10-22 | https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation |
| 研究报告 | Formal verification at scale with Claude | 2026-10-22 | https://www.anthropic.com/research/formal-verification |
| 官方案例 | Uber ChatGPT Work company-wide | 2026-10-22 | https://openai.com/index/uber-chatgpt-work-rollout/ |
| 官方发布 | Copilot global default policy GA | 2026-10-22 | https://github.blog/changelog/2026-10-22-global-default-for-copilot-features-generally-available/ |
| 官方发布 | Copilot industry comparisons | 2026-10-22 | https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard/ |
| 官方博客 | What FDE means at OpenAI | 2026-10-22 | https://openai.com/index/forward-deployed-engineering-means/ |
| 官方研究 | Mapping the world’s forest types | 2026-10-22 | https://deepmind.google/blog/beyond-tree-cover-mapping-the-worlds-forest-types/ |
| 官方公告 | Life sciences guest investigators | 2026-10-22 | https://www.anthropic.com/news/open-call-guest-investigators-life-sciences |

