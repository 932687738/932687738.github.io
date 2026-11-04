# AI Daily News Digest

按 Asia/Shanghai 时区增量汇总 AI/人工智能相关每日资讯。

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

