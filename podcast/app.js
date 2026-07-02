const episode = {
  "date": "2026-07-02",
  "title": "AI HOT 日报：阿宝、OpenAI 持股、Kimi K2.7 Code",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 产品发布/更新、行业动态、技巧与观点。核心信号是：AI 版支付宝“蚂蚁阿宝”进入公测；OpenAI 可能让美国政府持有 5% 股份；Kimi K2.7 Code 进入 GitHub Copilot，开源权重模型开始进入主流编程工作流。",
  "conclusion": "今天的 AI 热点显示，Agent 正从“对话框能力”走向系统入口、团队协作、开发工具和基础设施治理。建议团队少追单点发布，多把模型、权限、数据、成本和验收证据做成可复用流程。",
  "items": [
    {
      "topic": "product",
      "title": "Senior SWE-Bench：评估AI智能体作为高级工程师的基准测试",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://senior-swe-bench.snorkel.ai/",
      "date": "2026-07-02",
      "score": 71,
      "tags": [
        "AI HOT",
        "Agent",
        "产品"
      ],
      "summary": "Senior SWE-Bench是一个开源基准测试，用于评估AI智能体完成高级软件工程师级别任务的能力。任务分功能开发与Bug修复两类：功能任务指令类似自然语言消息，采用验证智能体基于专家配方自动生成行为测试；Bug任务要求根据日志、profiling等运行时信息深入调查。排行榜显示，Claude Opus 4.8搭配Mini-SWE-Agent（max effort）通过率24.0%，Claude Sonnet 5为19.4%，GPT-5.5为16.0%，最强前沿模型在超75%任务中未能达到高级工程师级别的正确…",
      "publishedAt": "2026-07-02T11:04:07.048Z",
      "category": "ai-products",
      "comment": "点评：Senior SWE-Bench 的价值在于把“会写代码”推向“能像高级工程师一样理解仓库、定位问题并保持品味”。最强模型通过率仍不高，说明 Coding Agent 距离完全接管复杂工程还有明显距离。",
      "advice": "建议：用这类基准设计自己的内部评测：选真实仓库、真实缺陷、真实验收命令，记录通过率、回归率、人工介入次数和总成本，而不是只看模型榜单。"
    },
    {
      "topic": "tip",
      "title": "千问团队朱达：C端Agent Harness的\"多快好省\"工程哲学与主动服务探索",
      "source": "公众号：千问APP（阿里）",
      "url": "https://mp.weixin.qq.com/s/l70iUM0bIpG9EdV9Px7QPQ",
      "date": "2026-07-02",
      "score": 62,
      "tags": [
        "AI HOT",
        "Agent",
        "观点"
      ],
      "summary": "千问团队2026年1月上线通用复杂任务Agent（千问App胶囊入口），总结\"多快好省\"方法论：支持信息搜集、研究分析等任务；执行时间降至初始1/3；通过搜索范式与上下文管理优化交付质量；Token消耗仅为海外产品1/10。团队探索从被动响应转向主动服务，构建User Memory、Environment、Task System、Assistant四大组件，指出\"情商\"是主动服务最难环节。朱达提出Agent工程从Prompt Engineering演进至Harness Engineering，下一站是A IWar…",
      "publishedAt": "2026-07-02T10:22:07.000Z",
      "category": "tip",
      "comment": "点评：千问把重点放在 Harness，而不是单纯 Prompt，说明 C 端 Agent 的竞争正在转向上下文管理、任务系统、记忆和主动服务。真正难的是“情商”：什么时候该主动，什么时候该沉默。",
      "advice": "建议：做 C 端 Agent 时先定义主动服务边界：触发条件、打扰频率、用户撤销、记忆可见性和隐私说明；先把低功耗、够用、可信做稳，再追求炫技。"
    },
    {
      "topic": "industry",
      "title": "证监会同意宇树科技科创板 IPO 注册申请",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/971/790.htm",
      "date": "2026-07-02",
      "score": 70,
      "tags": [
        "AI HOT",
        "产业"
      ],
      "summary": "7月2日，证监会同意宇树科技股份有限公司首次公开发行股票并在科创板上市的注册申请。宇树科技是国内头部民用足式、人形机器人研发企业，全球四足机器人销量领先，2016年由王兴兴在杭州创立，截至2025年6月员工总数超1000人。公司核心优势在于实现关节电机、减速器、控制器等核心零部件全栈自研，关键部件成本仅为进口产品的约1/3。批复自同意注册之日起12个月内有效。",
      "publishedAt": "2026-07-02T09:10:36.000Z",
      "category": "industry",
      "comment": "点评：宇树 IPO 注册获批，意味着人形与足式机器人从实验室叙事进入资本市场验证。全栈自研降低核心部件成本，是机器人商业化能否规模扩张的关键变量。",
      "advice": "建议：关注机器人公司时不要只看视频演示，要看核心零部件自研率、量产良率、售后成本、应用场景复购率和真实交付规模。"
    },
    {
      "topic": "product",
      "title": "Google Health API 推出 CLI：ghealth 是一款针对 Fitbit 数据的开源工具",
      "source": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/02/the-google-health-api-got-a-cli-ghealth-is-an-open-source-tool-for-your-fitbit-air-data",
      "date": "2026-07-02",
      "score": 72,
      "tags": [
        "AI HOT",
        "Agent",
        "Google",
        "产品"
      ],
      "summary": "ghealth 是一款封装 Google Health API v4 的开源命令行工具，以单个 Go 二进制文件发布（Apache 2.0 协议）。它提供 40 种已验证的数据类型（包括步数、心率、睡眠、体重、血氧饱和度、心率变异性等）的结构化 JSON 输出。工具采用 Agent 优先设计，具备确定性退出码、--dry-run 和 --raw 标志，并附带两个 SKILL.md 文件供 AI 智能体使用。用户需自行创建 OAuth 凭据，通过 PKCE S256 认证。数据来源覆盖 Fitbit、Pixel W…",
      "publishedAt": "2026-07-02T08:46:56.000Z",
      "category": "ai-products",
      "comment": "点评：ghealth 把健康数据做成 Agent 友好的命令行接口，代表一个趋势：个人数据不只是 App 页面，而会变成可被自动化流程读取、分析和验证的结构化输入。",
      "advice": "建议：处理健康数据要把 OAuth、最小权限、脱敏、审计和本地缓存策略放在第一位；先做只读分析和报告，再谨慎开放自动建议或动作。"
    },
    {
      "topic": "product",
      "title": "Kimi K2.7 Code 已在 GitHub Copilot 上正式发布",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.blog/changelog/2026-07-01-kimi-k2-7-is-now-available-in-github-copilot",
      "date": "2026-07-02",
      "score": 71,
      "tags": [
        "AI HOT",
        "Kimi",
        "产品"
      ],
      "summary": "Kimi K2.7 Code 开源权重模型已在 GitHub Copilot 中正式可用，成为 Copilot 模型选择器首个可选的开源权重模型，为编程工作流提供更低成本选择。该模型由 GitHub 托管于 Microsoft Azure，按供应商列表价格以用量计费。逐步向 Copilot Pro、Pro+ 和 Max 计划用户推送，用户可在 Visual Studio Code 1.127.0 或更新版本、Visual Studio 17.14.6 或更新版本、JetBrains 1.9.1-251 或更新版本…",
      "publishedAt": "2026-07-02T08:24:53.347Z",
      "category": "ai-products",
      "comment": "点评：Kimi K2.7 Code 进入 Copilot，说明开源权重模型正在穿透主流开发入口。模型竞争不再只发生在独立 IDE 插件里，而会被 GitHub、云平台和企业策略统一分发。",
      "advice": "建议：团队可以把 Kimi 与现有 Copilot 模型做同题评测，重点看中文代码库理解、补丁质量、单任务成本、数据边界和企业策略默认关闭后的启用流程。"
    },
    {
      "topic": "industry",
      "title": "OpenAI提议美国政府持股5%估值426亿美元",
      "source": "X：Testing Catalog (@testingcatalog)",
      "url": "https://x.com/testingcatalog/status/2072585845542969583",
      "date": "2026-07-02",
      "score": 75,
      "tags": [
        "AI HOT",
        "OpenAI",
        "产业"
      ],
      "summary": "据Financial Times和CNBC报道，OpenAI提议向美国政府提供公司5%的股份，按近期8520亿美元估值计算，价值约426亿美元。OpenAI CEO Sam Altman表示，此举是与公众分享AI发展红利的最佳方式。",
      "publishedAt": "2026-07-02T07:39:07.000Z",
      "category": "industry",
      "comment": "点评：如果 OpenAI 让美国政府持股，AI 公司与国家战略、公共收益和监管关系会进一步绑定。这不是普通融资新闻，而是 AI 基础设施公共属性增强的信号。",
      "advice": "建议：跟踪这类消息时要区分传闻、提议和正式交易；企业采购 OpenAI 生态时同步评估政策、合规、供应连续性和跨境数据风险。"
    },
    {
      "topic": "product",
      "title": "昆仑万维天工3.2发布Skywork Tags，AI智能体加入工作群聊",
      "source": "公众号：昆仑万维（天工）",
      "url": "https://mp.weixin.qq.com/s/OqL6ID-mAel8XN-slYgXOA",
      "date": "2026-07-02",
      "score": 67,
      "tags": [
        "AI HOT",
        "Agent",
        "产品"
      ],
      "summary": "昆仑万维天工3.2发布Skywork Tags，将AI智能体以团队成员身份接入Slack、飞书、钉钉、Discord、Telegram等即时通讯工具。团队可在原有工作群中@Skywork参与讨论，无需切换窗口或迁移数据。共享版Agent持续吸收多样上下文后表现反超精心调教的个人版，团队最终完全改用共享版。Skywork Tags不要求改变工作方式，让AI积累团队上下文并越用越强。",
      "publishedAt": "2026-07-02T02:53:26.000Z",
      "category": "ai-products",
      "comment": "点评：Skywork Tags 把 Agent 放进 Slack、飞书、钉钉等群聊，抓住了团队协作里的真实上下文。共享 Agent 可能比个人 Agent 更有价值，因为它能沉淀组织记忆。",
      "advice": "建议：把群聊 Agent 当“可审计同事”设计：限定可见频道、明确 @ 触发、保留引用来源、支持退出和清除记忆，避免它变成新的信息噪声源。"
    },
    {
      "topic": "product",
      "title": "AI 版支付宝开放公测，蚂蚁阿宝无需邀请码即可体验",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/971/469.htm",
      "date": "2026-07-02",
      "score": 80,
      "tags": [
        "AI HOT",
        "支付宝",
        "产品"
      ],
      "summary": "支付宝阿宝 AI 助手今日正式开放公测，iOS 和安卓用户可在应用商店或支付宝 App 搜索\"阿宝\"或\"蚂蚁阿宝\"直接体验。开通后右滑进入新版，以对话方式安排办事，例如说出\"查公积金\"，阿宝会自动匹配对应小程序和服务入口，用户点击确认即可完成。支付宝承诺所有资金变动与支付环节均需用户本人确认，扫码、转账等功能已预留入口。",
      "publishedAt": "2026-07-02T02:51:10.000Z",
      "category": "ai-products",
      "comment": "点评：蚂蚁阿宝的重点不是又一个聊天助手，而是把 AI 放进支付、政务、生活服务这些高频办事入口。它会测试用户是否愿意让 AI 帮自己“找入口、填流程、做确认”。",
      "advice": "建议：所有涉及资金、身份和公共服务的 AI 助手必须坚持人类最终确认、权限分级、清晰日志和可撤销动作；先从低风险查询与导航做起。"
    },
    {
      "topic": "tip",
      "title": "Emil Kowalski 发布设计工程师 Skills，让 AI 编码工具具备 UI 动画审美",
      "source": "X：邵猛 (@shao__meng)",
      "url": "https://x.com/shao__meng/status/2072484635955900792",
      "date": "2026-07-02",
      "score": 77,
      "tags": [
        "AI HOT",
        "Agent",
        "观点"
      ],
      "summary": "Emil Kowalski 将多年 UI/动画原则沉淀为三个 Skill，使 Codex、Claude Code、Cursor 等 Coding Agents 具备资深设计工程师的审美判断。核心规则：动画必须有理由；每天 100+ 次的高频操作禁用动画；UI 动画控制在 300ms 内；只动画 transform 和 opacity；入口从 scale（0.95）+opacity：0 开始；尊重 prefers-reduced-motion（仅移除位移动画）。review-animations 以严格标准审查动画…",
      "publishedAt": "2026-07-02T00:56:56.000Z",
      "category": "tip",
      "comment": "点评：把 UI 动画审美写成 Skills，说明 AI 编码的瓶颈不只是语法正确，还包括产品品味。可维护的设计规则会成为团队让 Agent 输出更稳定体验的方式。",
      "advice": "建议：为前端团队沉淀设计工程 Skill：动效时长、可访问性、组件边界、反例和 review 清单，并把高频交互用视觉回归锁住。"
    },
    {
      "topic": "product",
      "title": "Claude Code v2.1.198 发布",
      "source": "Claude Code：GitHub Releases（RSS）",
      "url": "https://github.com/anthropics/claude-code/releases/tag/v2.1.198",
      "date": "2026-07-02",
      "score": 64,
      "tags": [
        "AI HOT",
        "Agent",
        "Claude Code",
        "产品"
      ],
      "summary": "Claude Code v2.1.198 更新。Claude in Chrome 现已全面可用。为 claude agents 新增后台智能体通知（agent_needs_input / agent_completed）。新增 /dataviz 技能，提供图表与仪表盘设计指导及配色验证器。Gateway 增加 AWS 上的 Claude Platform 作为上游提供商。后台智能体在 worktree 中完成代码后自动提交、推送并创建草稿 PR。内置 Explore 智能体现继承主会话模型（上限 opus）。修复…",
      "publishedAt": "2026-07-01T20:45:36.000Z",
      "category": "ai-products",
      "comment": "点评：Claude Code 的更新继续把 Coding Agent 推向后台执行、浏览器协作、数据可视化和自动 PR。工具越自动，越需要明确通知、工作树隔离和完成证据。",
      "advice": "建议：使用后台 Agent 时强制开启分支隔离、自动测试、草稿 PR、人审合并和失败通知；不要让 Agent 直接改主分支或绕过 CI。"
    },
    {
      "topic": "product",
      "title": "Google Cloud Workbench Notebooks 扩展发布：在 VS Code 中连接云端 Jupyter 环境",
      "source": "Google Developers Blog（RSS）",
      "url": "https://developers.googleblog.com/ml-development-in-vs-code-with-google-cloud-power-workbench-extension-now-available",
      "date": "2026-07-02",
      "score": 68,
      "tags": [
        "AI HOT",
        "Google",
        "产品"
      ],
      "summary": "Google Cloud Workbench Notebooks 扩展正式上线，开发者可在 VS Code 中直接连接可扩展的云端 Jupyter 环境，无需切换上下文即可利用高性能 Google Cloud 基础设施完成机器学习全流程。该扩展已完全开源，可在 GitHub 和 VS Code Marketplace 获取。",
      "publishedAt": "2026-07-01T17:17:56.374Z",
      "category": "ai-products",
      "comment": "点评：Google 把云端 Jupyter 通过 VS Code 扩展带到开发者手边，是 ML 工程体验继续 IDE 化的信号。数据科学、训练环境和代码编辑正在合并成一个工作面。",
      "advice": "建议：团队应统一 Notebook 环境、依赖镜像、权限和成本配额，避免每个人维护一套不可复现的实验环境。"
    },
    {
      "topic": "tip",
      "title": "Meta 大规模 AI 存储蓝图",
      "source": "Meta Engineering Blog（RSS）",
      "url": "https://engineering.fb.com/2026/07/01/data-infrastructure/metas-ai-storage-blueprint-at-scale",
      "date": "2026-07-02",
      "score": 71,
      "tags": [
        "AI HOT",
        "Meta",
        "观点"
      ],
      "summary": "Meta 运营数百 EB 级存储集群，基于 Tectonic 分层存储层构建 BLOB 存储架构，以应对两大挑战：最大化 GPU 利用率与研究迭代速度。传统 BLOB 架构的多层元数据查询可导致数百毫秒延迟，使 GPU 因 I/O 等待停顿。新架构将训练栈逐步迁移到 BLOB 存储接口上，利用闪存提供可预测的低 pMax 延迟，避免单 GPU 慢速拖慢整批任务。同时，统一的数据湖访问支持地理分布 GPU 间的数据高速注入与跨区移动，提升研究效率。",
      "publishedAt": "2026-07-01T16:00:36.000Z",
      "category": "tip",
      "comment": "点评：Meta 的存储蓝图提醒我们，AI 训练瓶颈不只在 GPU，也在数据读取、延迟尾部和跨区域数据流。基础设施效率会直接影响模型迭代速度。",
      "advice": "建议：做大规模训练或 RAG 平台时，提前压测数据吞吐、尾延迟、冷热分层和失败恢复；别等 GPU 闲置后才补数据基础设施。"
    },
    {
      "topic": "product",
      "title": "智谱推出GLM-5.2官方开发环境ZCode",
      "source": "X：智谱 Z.ai (@Zai_org)",
      "url": "https://x.com/Zai_org/status/2072349453361557898",
      "date": "2026-07-02",
      "score": 67,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "推出 ZCode，GLM-5.2 的官方开发环境  - GLM Coding Plan 订阅用户：现可在 ZCode 获得 1.5 倍使用配额 - 支持 BYOK：可与您现有的订阅和 API 配合使用 - 适用于 macOS、Windows 和 Linux  立即下载：http://zcode.z.ai/en",
      "publishedAt": "2026-07-01T15:59:46.000Z",
      "category": "ai-products",
      "comment": "点评：ZCode 表明模型厂商正在从 API 供应商走向开发环境供应商。谁控制开发入口，谁就更容易绑定模型、套餐、上下文和工作流。",
      "advice": "建议：试用 ZCode 这类官方 IDE 时，要评估 BYOK、数据留存、插件生态、迁移成本和与现有 CI/CD 的兼容性。"
    },
    {
      "topic": "industry",
      "title": "Meta效仿SpaceX，将过剩AI算力变现",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/01/meta-like-spacex-looks-to-turn-excess-ai-compute-into-cash",
      "date": "2026-07-02",
      "score": 72,
      "tags": [
        "AI HOT",
        "Meta",
        "产业"
      ],
      "summary": "据Bloomberg报道，Meta正计划推出云基础设施业务Meta Compute，对外出售AI计算能力和模型访问权限，直接与AWS、Google Cloud及Azure竞争。Meta已承诺未来几年投入1829亿美元建设AI基础设施，其中俄亥俄州数据中心（规模如曼哈顿）将于今年上线。新业务由基础设施主管Santosh Janardhan、Meta超级智能实验室负责人Daniel Gross和总裁Dina Powell McCormick领导。Meta可能效仿CoreWeave出售裸计算能力，并像AWS一样托管AI…",
      "publishedAt": "2026-07-01T13:43:07.000Z",
      "category": "industry",
      "comment": "点评：Meta Compute 的传闻说明巨头 AI 基建开始寻找外部变现路径。算力会从内部战略资产变成云市场商品，但差异在模型、网络、数据栈和价格稳定性。",
      "advice": "建议：采购新算力云时别只看峰值报价，要比较地域、互联、模型托管、SLA、出口费用、锁定期和供应商长期战略。"
    },
    {
      "topic": "product",
      "title": "Cloudflare 推出全新AI流量管理选项：区分搜索、智能体与训练爬虫，保护广告页面",
      "source": "Cloudflare Blog",
      "url": "https://blog.cloudflare.com/content-independence-day-ai-options",
      "date": "2026-07-02",
      "score": 58,
      "tags": [
        "AI HOT",
        "Agent",
        "产品"
      ],
      "summary": "Cloudflare 为所有网站所有者提供更精细的AI流量管控选项，取代一刀切的屏蔽方式。用户可轻松区分并管理搜索爬虫、AI智能体爬虫和训练爬虫，同时新增保护广告变现页面的能力。",
      "publishedAt": "2026-07-01T13:00:00.000Z",
      "category": "ai-products",
      "comment": "点评：Cloudflare 将 AI 流量细分为搜索、智能体和训练爬虫，说明网站主开始重新定义“谁可以读取我的内容”。AI 时代的流量治理会比 robots.txt 更细。",
      "advice": "建议：内容网站应尽快梳理 AI 爬虫策略：哪些允许索引，哪些允许 Agent 访问，哪些禁止训练，并同步监控广告页、登录页和高价值内容。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/971/469.htm",
      "note": "AI 版支付宝开放公测，蚂蚁阿宝无需邀请码即可体验"
    },
    {
      "name": "X：邵猛 (@shao__meng)",
      "url": "https://x.com/shao__meng/status/2072484635955900792",
      "note": "Emil Kowalski 发布设计工程师 Skills，让 AI 编码工具具备 UI 动画审美"
    },
    {
      "name": "X：Testing Catalog (@testingcatalog)",
      "url": "https://x.com/testingcatalog/status/2072585845542969583",
      "note": "OpenAI提议美国政府持股5%估值426亿美元"
    },
    {
      "name": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/02/the-google-health-api-got-a-cli-ghealth-is-an-open-source-tool-for-your-fitbit-air-data",
      "note": "Google Health API 推出 CLI：ghealth 是一款针对 Fitbit 数据的开源工具"
    },
    {
      "name": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/01/meta-like-spacex-looks-to-turn-excess-ai-compute-into-cash",
      "note": "Meta效仿SpaceX，将过剩AI算力变现"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://senior-swe-bench.snorkel.ai/",
      "note": "Senior SWE-Bench：评估AI智能体作为高级工程师的基准测试"
    },
    {
      "name": "公众号：千问APP（阿里）",
      "url": "https://mp.weixin.qq.com/s/l70iUM0bIpG9EdV9Px7QPQ",
      "note": "千问团队朱达：C端Agent Harness的\"多快好省\"工程哲学与主动服务探索"
    }
  ]
};

const episodeHistory = [
  {
    "date": "2026-07-02",
    "title": "AI HOT 日报：阿宝、OpenAI 持股、Kimi K2.7 Code",
    "summary": "重点关注 产品发布/更新、行业动态、技巧与观点。核心信号是：AI 版支付宝“蚂蚁阿宝”进入公测；OpenAI 可能让美国政府持有 5% 股份；Kimi K2.7 Code 进入 GitHub Copilot，开源权重模型开始进入主流编程工作流。",
    "link": "/posts/70202/",
    "tags": [
      "AI HOT",
      "OpenAI",
      "Kimi",
      "Agent"
    ]
  },
  {
    "date": "2026-07-01",
    "title": "AI HOT 日报：Anthropic、美团 LongCat、Claude",
    "summary": "重点关注 行业动态、模型发布/更新、论文研究、技巧与观点、产品发布/更新。核心信号是：Anthropic在Claude Code中植入隐写术代码识别中国用户；美团 LongCat-2.0 正式发布：国产算力集群训练的万亿参数大模型；Claude Sonnet 5 发布。",
    "link": "/posts/70101/",
    "tags": [
      "AI HOT",
      "Anthropic",
      "Claude",
      "Claude Code"
    ]
  },
  {
    "date": "2026-06-30",
    "title": "AI HOT 日报：LongCat Owl、Claude 企业网关、AI 安全红线",
    "summary": "LongCat Owl Alpha 显示国产 MoE 与国产 ASIC 训练链路进入全球模型流量场；Claude apps gateway 与 Microsoft Foundry 把模型接入企业云、SSO、预算和治理体系；Cursor iOS、EverOS 与 RedKnot 说明 Agent 正在走向移动端、长期记忆和推理系统优化；Claude Code 隐藏恶意代码与军方误炸事件则提醒团队先补齐安全沙箱和证据链。",
    "link": "/posts/63030/",
    "tags": [
      "AI HOT",
      "LongCat Owl",
      "Claude",
      "AI安全"
    ]
  },
  {
    "date": "2026-06-29",
    "title": "AI HOT 日报：Wayfinder 路由、SK AI 数据中心、VibeThinker",
    "summary": "Wayfinder Router 把本地/托管模型路由做成微秒级确定性决策；SK 规划 15GW AI 数据中心，把 AI 基建推向国家级产业工程；VibeThinker-3B、CEO-Bench 与 Vibe Coding Prompt 则提醒团队用真实任务、成本看板和对抗式审查验证 AI 能力。",
    "link": "/posts/62929/",
    "tags": [
      "AI HOT",
      "Wayfinder",
      "AI基建",
      "VibeThinker"
    ]
  },
  {
    "date": "2026-06-27",
    "title": "AI HOT 日报：版权诉讼、GPT-5.6 Sol、千问输入法",
    "summary": "纽约时报升级对微软/OpenAI 的版权诉讼，OpenAI 预览 GPT-5.6 Sol；Cursor 揭示 Coding Agent 基准奖励攻击；阿里千问输入法、Leaf 实时 AI 分身和 Anthropic 使用节奏报告显示 AI 正在进入更贴近日常的输入、语音和生活场景。",
    "link": "/posts/62727/",
    "tags": [
      "AI HOT",
      "GPT-5.6 Sol",
      "版权",
      "千问输入法"
    ]
  },
  {
    "date": "2026-06-26",
    "title": "AI HOT 日报：AI 经济、GPT-5.6、Agentic Coding",
    "summary": "AI 经济年化收入超 1750 亿美元，OpenAI GPT-5.6 被要求受控预览，版权诉讼与内容审核推动 AI 治理升温；Ornith-1.0、Codex 移动端、Claude Code Hook、Runway Agent 2.0 则显示 Agent 工作流继续产品化。",
    "link": "/posts/62626/",
    "tags": [
      "AI HOT",
      "AI经济",
      "GPT-5.6",
      "Agentic Coding"
    ]
  },
  {
    "date": "2026-06-25",
    "title": "AI HOT 日报：xAI争议、Figma AI 画布、AI Coding 实践",
    "summary": "xAI 与 SpaceX 的 AI 叙事受到质疑；Figma 把设计画布扩展到代码、动画与 3D；字节复盘 AI Coding，提醒团队用吞吐、正确率和缺陷率衡量真实收益。",
    "link": "/posts/62525/",
    "tags": [
      "AI HOT",
      "xAI",
      "Figma",
      "AI Coding"
    ]
  },
  {
    "date": "2026-06-24",
    "title": "AI HOT 日报：Qwen-AgentWorld、豆包专业版、Bidi 1",
    "summary": "重点关注 模型发布/更新、产品发布/更新、行业动态、论文研究、技巧与观点。核心信号是：豆包专业版把办公 Agent 推向订阅化；Qwen-AgentWorld 开源“先预测，再行动”；OpenAI ChatGPT 语音测试 Bidi 1。",
    "link": "/posts/62424/",
    "tags": [
      "AI HOT",
      "Qwen",
      "豆包",
      "Agent"
    ]
  },
  {
    "date": "2026-06-22",
    "title": "AI HOT 日报：NSA局长、Mythos 数小时、Claude",
    "summary": "重点关注 行业动态、产品发布/更新、技巧与观点、论文研究。核心信号是：NSA局长：Mythos数小时内攻破其几乎所有机密系统；Mythos 数小时内攻破 NSA 全系统，下一代已出；美团tabbit国际版免费接入GPT-5.5/Claude Opus 4.8等旗舰模型。",
    "link": "/posts/62222/",
    "tags": [
      "AI HOT",
      "Google",
      "产业",
      "Claude"
    ]
  },
  {
    "date": "2026-06-20",
    "title": "AI HOT 日报：开源、机器人、Nvidia",
    "summary": "重点关注 产品发布/更新、行业动态、技巧与观点。核心信号是：阿里开源向量数据库Zvec，UCSD黄碧薇教授提出因果AI第四代范式；Figure机器人数首超人类员工；NVIDIA Research 发布 SpatialClaw：免训练空间推理框架。",
    "link": "/posts/62020/",
    "tags": [
      "AI HOT",
      "开源",
      "产品",
      "机器人"
    ]
  },
  {
    "date": "2026-06-19",
    "title": "AI HOT 日报：GPT-5.5 In、八部门、OpenAI",
    "summary": "重点关注 产品发布/更新、行业动态、论文研究、技巧与观点。核心信号是：GPT-5.5 Instant提升ChatGPT健康智能；八部门：用好个人消费贷款财政贴息政策，支持消费者购买 AI 相关产品；OpenAI 联合多国医生：GPT-5.5 Instant 健康问答能力追平前沿…",
    "link": "/posts/61919/",
    "tags": [
      "AI HOT",
      "GPT",
      "产品",
      "机器人"
    ]
  },
  {
    "date": "2026-06-18",
    "title": "AI HOT 日报：OpenAI、Nvidia、开源",
    "summary": "重点关注 行业动态、论文研究、产品发布/更新、技巧与观点、模型发布/更新。核心信号是：Noam Shazeer 离开 Google 加入 OpenAI；NVIDIA GEAR实验室发布ENPIRE：8个Codex智能体自主控制机器人完成物理实验；免费开源乔木画布：AI生图+抠图…",
    "link": "/posts/61818/",
    "tags": [
      "AI HOT",
      "OpenAI",
      "Google",
      "Gemini"
    ]
  },
  {
    "date": "2026-06-17",
    "title": "AI HOT 日报：Meta、xAI、Wolfram",
    "summary": "重点关注 技巧与观点、行业动态、产品发布/更新、论文研究。核心信号是：Meta 解散工程部门引发热议；美国司法部援引国家安全为xAI未经许可的燃气轮机辩护；Wolfram 语言和 Mathematica 15 版发布：内置 AI 助手、符号音乐等新功能。",
    "link": "/posts/61717/",
    "tags": [
      "AI HOT",
      "Meta",
      "观点",
      "xAI"
    ]
  },
  {
    "date": "2026-06-16",
    "title": "AI HOT 日报：开源模型提速、Agent 应用并购与 AI 成本重估",
    "summary": "MiniMax M3 与 DFlash 指向开源模型和推理系统效率战；Grok Build、Kimi、Claude Code 推动 Agent 编程工作台化；Salesforce 收购 Fin 与 Nvidia 发债显示 AI 应用价值和基建成本同步重估。",
    "link": "/posts/61616/",
    "tags": [
      "AI HOT",
      "MiniMax",
      "Agent",
      "AI成本"
    ]
  },
  {
    "date": "2026-06-14",
    "title": "AI HOT 日报：GLM-5.2 开源、AI 治理升温与订阅经济压力",
    "summary": "智谱 GLM-5.2 全量开放并宣布下周开源；Suno 和 OpenRouter 推进音乐制作与复合模型路由；Anthropic、OpenAI、Google、Meta 出现监管、伦理或组织调整信号。",
    "link": "/posts/61414/",
    "tags": [
      "AI HOT",
      "GLM-5.2",
      "AI治理",
      "Token经济"
    ]
  },
  {
    "date": "2026-06-13",
    "title": "AI HOT 日报：代码模型开源、Agent 产品化与企业治理补课",
    "summary": "MiniMax M3 与 Kimi-K2.7-Code 推动国产代码模型开源；豆包、Codex、Claude Code 把 Agent 做进任务执行、浏览器调试和企业管控。",
    "link": "/posts/61313/",
    "tags": [
      "AI HOT",
      "代码模型",
      "Agent",
      "企业治理"
    ]
  }
];

const state = {
  filteredTopic: 'all',
  currentIndex: 0,
  isPlaying: false,
  utterance: null,
  voices: []
};

const newsGrid = document.querySelector('#newsGrid');
const sourceList = document.querySelector('#sourceList');
const episodeHistoryList = document.querySelector('#episodeHistory');
const scriptText = document.querySelector('#scriptText');
const playBriefButton = document.querySelector('#playBriefButton');
const playPauseButton = document.querySelector('#playPauseButton');
const prevSegmentButton = document.querySelector('#prevSegmentButton');
const nextSegmentButton = document.querySelector('#nextSegmentButton');
const copyScriptButton = document.querySelector('#copyScriptButton');
const currentSegmentTitle = document.querySelector('#currentSegmentTitle');
const currentSegmentText = document.querySelector('#currentSegmentText');
const progressBar = document.querySelector('#progressBar');
const rateControl = document.querySelector('#rateControl');
const voiceSelect = document.querySelector('#voiceSelect');
const toast = document.querySelector('#toast');

renderNews();
renderSources();
renderHistory();
renderScript();
setupVoices();
updatePlayerSegment();

playBriefButton.addEventListener('click', () => playSegment(0));
playPauseButton.addEventListener('click', togglePlayPause);
prevSegmentButton.addEventListener('click', () => playSegment(Math.max(0, state.currentIndex - 1)));
nextSegmentButton.addEventListener('click', () => playSegment(Math.min(segments().length - 1, state.currentIndex + 1)));
copyScriptButton.addEventListener('click', copyScript);
voiceSelect.addEventListener('change', () => {
  if (state.isPlaying) {
    playSegment(state.currentIndex);
  }
});
rateControl.addEventListener('change', () => {
  if (state.isPlaying) {
    playSegment(state.currentIndex);
  }
});

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    state.filteredTopic = button.dataset.filter;
    renderNews();
  });
});

function renderNews() {
  const items = episode.items.filter((item) => state.filteredTopic === 'all' || item.topic === state.filteredTopic);
  newsGrid.innerHTML = items.map((item) => `
    <article class="news-card" data-topic="${item.topic}">
      <header>
        <div>
          <p class="eyebrow">${escapeHtml(item.source)} · ${escapeHtml(item.date)}</p>
          <h3>${escapeHtml(item.title)}</h3>
        </div>
        <span class="score">${item.score}</span>
      </header>
      <div class="badges">${item.tags.map((tag) => `<span class="badge">${escapeHtml(tag)}</span>`).join('')}</div>
      <p>${escapeHtml(item.summary)}</p>
      <div class="commentary"><strong>主播点评：</strong>${escapeHtml(item.comment.replace(/^点评：/, ''))}</div>
      <p><a href="${item.url}" target="${item.url.startsWith('/') ? '_self' : '_blank'}" rel="noopener">查看来源 →</a></p>
    </article>
  `).join('');
}

function renderSources() {
  sourceList.innerHTML = episode.sources.map((source) => `
    <a href="${source.url}" target="${source.url.startsWith('/') ? '_self' : '_blank'}" rel="noopener">
      ${escapeHtml(source.name)}
      <span>${escapeHtml(source.note)}</span>
    </a>
  `).join('');
}

function renderHistory() {
  if (!episodeHistoryList) {
    return;
  }

  episodeHistoryList.innerHTML = episodeHistory.map((item) => `
    <article class="history-item">
      <div>
        <p class="eyebrow">${escapeHtml(item.date)}</p>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
        <div class="badges">${item.tags.map((tag) => `<span class="badge">${escapeHtml(tag)}</span>`).join('')}</div>
      </div>
      <a href="${item.link}" target="${item.link.startsWith('/') ? '_self' : '_blank'}" rel="noopener">查看文字稿 →</a>
    </article>
  `).join('');
}

function renderScript() {
  scriptText.textContent = buildScript();
}

function buildScript() {
  const lines = [
    `大家好，欢迎收听 AI 资讯播客。本期日期：${episode.date}。`,
    episode.intro,
    ''
  ];

  episode.items.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.title}`);
    lines.push(`摘要：${item.summary}`);
    lines.push(item.comment);
    lines.push('');
  });

  lines.push(`最后给出本期结论：${episode.conclusion}`);
  return lines.join('\n');
}

function segments() {
  return [
    { title: '今日总览', text: `大家好，欢迎收听 AI 资讯播客。本期日期：${episode.date}。${episode.intro}` },
    ...episode.items.map((item, index) => ({
      title: `${index + 1}. ${item.title}`,
      text: `${item.title}。${item.summary}${item.comment}`
    })),
    { title: '本期结论', text: `本期结论：${episode.conclusion}` }
  ];
}

function setupVoices() {
  if (!('speechSynthesis' in window)) {
    voiceSelect.innerHTML = '<option>当前浏览器不支持语音播报</option>';
    playPauseButton.disabled = true;
    playBriefButton.disabled = true;
    return;
  }

  const load = () => {
    const previousValue = voiceSelect.value;
    state.voices = window.speechSynthesis.getVoices();
    const zhVoices = state.voices.filter((voice) => /^zh|Chinese|普通话|中文|Mandarin/i.test(`${voice.lang} ${voice.name}`));
    const usableVoices = zhVoices.length ? zhVoices : state.voices;

    voiceSelect.innerHTML = usableVoices.map((voice, index) => (
      `<option value="${state.voices.indexOf(voice)}">${escapeHtml(voice.name)} · ${escapeHtml(voice.lang)}${index === 0 ? '（推荐）' : ''}</option>`
    )).join('') || '<option value="">系统默认音色</option>';

    if ([...voiceSelect.options].some((option) => option.value === previousValue)) {
      voiceSelect.value = previousValue;
    }
  };

  load();
  window.speechSynthesis.onvoiceschanged = load;
}


function togglePlayPause() {
  if (!('speechSynthesis' in window)) {
    return;
  }

  if (state.isPlaying) {
    window.speechSynthesis.cancel();
    state.isPlaying = false;
    playPauseButton.textContent = '▶';
    playBriefButton.textContent = '▶ 播放今日简报';
    return;
  }

  playSegment(state.currentIndex);
}

function playSegment(index) {
  if (!('speechSynthesis' in window)) {
    showToast('当前浏览器不支持语音播报');
    return;
  }

  const allSegments = segments();
  state.currentIndex = Math.max(0, Math.min(index, allSegments.length - 1));
  const segment = allSegments[state.currentIndex];
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(segment.text);
  const voice = state.voices[Number(voiceSelect.value)];
  if (voice) {
    utterance.voice = voice;
  }
  utterance.lang = voice?.lang || 'zh-CN';
  utterance.rate = Number(rateControl.value) || 1;
  utterance.pitch = 1;
  utterance.onend = () => {
    if (state.currentIndex < allSegments.length - 1) {
      playSegment(state.currentIndex + 1);
      return;
    }
    state.isPlaying = false;
    playPauseButton.textContent = '▶';
    playBriefButton.textContent = '▶ 播放今日简报';
    progressBar.style.width = '100%';
  };
  utterance.onerror = () => {
    state.isPlaying = false;
    playPauseButton.textContent = '▶';
    showToast('语音播报被浏览器中断，请重试');
  };

  state.utterance = utterance;
  state.isPlaying = true;
  updatePlayerSegment();
  playPauseButton.textContent = 'Ⅱ';
  playBriefButton.textContent = 'Ⅱ 暂停播报';
  window.speechSynthesis.speak(utterance);
}

function updatePlayerSegment() {
  const allSegments = segments();
  const segment = allSegments[state.currentIndex];
  currentSegmentTitle.textContent = segment.title;
  currentSegmentText.textContent = segment.text.slice(0, 120) + (segment.text.length > 120 ? '……' : '');
  progressBar.style.width = `${(state.currentIndex / Math.max(1, allSegments.length - 1)) * 100}%`;
}

function copyScript() {
  navigator.clipboard?.writeText(buildScript()).then(() => showToast('播报稿已复制')).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = buildScript();
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    showToast('播报稿已复制');
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 1800);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
