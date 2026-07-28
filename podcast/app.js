const episode = {
  "date": "2026-07-28",
  "title": "AI HOT 日报：Kimi、Google、Copilot",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 模型发布/更新、行业动态、技巧与观点、产品发布/更新。核心信号是：Kimi K3 开放日：模型权重、技术报告和关键 Infra 技术同步开放；Google AI Overviews 搜索结果出现率升至43%；GitHub Copilot 发布\"Harness\"工作流：用单一工具完成原型、规划、实现与代码审查。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "model",
      "title": "Kimi K3 开放日：模型权重、技术报告和关键 Infra 技术同步开放",
      "source": "公众号：月之暗面（Kimi）",
      "url": "https://mp.weixin.qq.com/s/IW9BdyA3hLvuuiX_aMCJEQ",
      "date": "2026-07-28",
      "score": 85,
      "tags": [
        "AI HOT",
        "Kimi",
        "Agent",
        "开源",
        "模型"
      ],
      "summary": "月之暗面发布 2.8 万亿参数的混合专家模型 Kimi K3，支持原生视觉理解和 100 万 token 上下文窗口。其规模化效率较 Kimi K2.5 提升 2.5 倍，并同步开源模型权重、技术报告及 MoonEP、FlashKDA、AgentEnv 三项 Infra 技术。",
      "publishedAt": "2026-07-27T15:34:59.000Z",
      "category": "ai-models",
      "comment": "点评：开源模型逼近前沿闭源能力，会让企业模型选型从单纯比较排行榜，转向比较本地部署、数据控制、工具调用稳定性和单位任务成本。性能声明仍需用自己的任务集复核。",
      "advice": "建议：用中文长文档、代码修改、函数调用和安全边界等真实任务与现有模型对跑；同时核查许可证、权重获取、推理栈、更新节奏和私有部署成本。"
    },
    {
      "topic": "industry",
      "title": "Google AI Overviews 搜索结果出现率升至43%",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/27/googles-ai-search-is-rapidly-becoming-the-default-new-data-shows",
      "date": "2026-07-28",
      "score": 76,
      "tags": [
        "AI HOT",
        "Google",
        "产业"
      ],
      "summary": "Google AI Overviews 在搜索结果中的出现率一年内从15%升至43%，AI Mode月访问量从1.26亿增至2.79亿。用户搜索长度增加，正从短关键词转向更长的自然对话式查询。",
      "publishedAt": "2026-07-27T15:57:12.000Z",
      "category": "industry",
      "comment": "点评：这条动态值得从产业资本、平台竞争和组织变化三个维度继续跟踪，短期看产品信号，长期看能否沉淀为稳定能力。",
      "advice": "建议：企业决策时同步评估供应商持续性、集成成本、组织影响和未来三个月的复盘指标。"
    },
    {
      "topic": "tip",
      "title": "GitHub Copilot 发布\"Harness\"工作流：用单一工具完成原型、规划、实现与代码审查",
      "source": "GitHub Blog",
      "url": "https://github.blog/ai-and-ml/github-copilot/the-harness-is-all-you-need-mostly",
      "date": "2026-07-28",
      "score": 74,
      "tags": [
        "AI HOT",
        "Copilot",
        "观点"
      ],
      "summary": "GitHub Copilot 推出\"Harness\"工作流，让开发者通过单一 AI 工具完成从原型设计、规划、实现到代码审查的完整软件开发流程，无需追逐多种新 AI 工具。该工作流强调实用性与集成性，旨在减少工具切换带来的效率损耗。",
      "publishedAt": "2026-07-27T18:00:00.000Z",
      "category": "tip",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "safety",
      "title": "德里高等法院裁定 OpenAI 利用 ANI 内容训练 AI 未侵犯版权",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/982/520.htm",
      "date": "2026-07-28",
      "score": 73,
      "tags": [
        "AI HOT",
        "OpenAI",
        "GPT",
        "产业"
      ],
      "summary": "德里高等法院认定 OpenAI 利用亚洲国际新闻（ANI）社的内容训练人工智能不构成侵犯版权。法官 Amit Bansal 认为该行为符合印度《版权法》中研究类\"合理使用\"例外情形，且 ANI 未能证明 ChatGPT 直接复制其受版权保护内容。法院同时指出，现阶段颁布临时禁令将不利于印度正在开发…",
      "publishedAt": "2026-07-28T06:21:07.000Z",
      "category": "industry",
      "comment": "点评：AI 能力越深入生产，治理越不能停留在原则口号，必须落到权限、审计、数据边界和责任链。",
      "advice": "建议：管理者应把合规、审计、权限和员工沟通前置，避免 AI 项目因信任问题受阻。"
    },
    {
      "topic": "product",
      "title": "Kimi 发布视觉感知基准 PerceptionBench",
      "source": "X：Kimi.ai (@Kimi_Moonshot)",
      "url": "https://x.com/Kimi_Moonshot/status/2081813202514681878",
      "date": "2026-07-28",
      "score": 73,
      "tags": [
        "AI HOT",
        "Kimi",
        "推理",
        "产品"
      ],
      "summary": "Kimi.ai 发布 PerceptionBench，一个从当前前沿模型在 42 个基准上的失败模式中归纳出的视觉感知基准。该基准将视觉感知拆解为 10 种原子能力，并构建了 3000 道验证题，每道题只考察单一感知能力，无需推理或外部知识。",
      "publishedAt": "2026-07-27T18:45:20.000Z",
      "category": "ai-products",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：产品团队应明确它解决的高频任务、接入的数据源、人工接管点和可量化指标。"
    },
    {
      "topic": "tip",
      "title": "用Claude和Python构建技能驱动的金融分析智能体",
      "source": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/27/designing-skill-driven-financial-analysis-agents-with-claude-python-mcp-connectors-and-automated-deliverables",
      "date": "2026-07-28",
      "score": 72,
      "tags": [
        "AI HOT",
        "Anthropic",
        "Claude",
        "Agent",
        "观点"
      ],
      "summary": "本教程基于Anthropic的financial-services仓库，用纯Python复现其技能驱动架构。通过解析SKILL.md文件构建可搜索技能注册表，并创建可复用SkillAgent，将金融分析剧本注入Anthropic Messages API，支持迭代工具调用循环。",
      "publishedAt": "2026-07-27T18:08:24.000Z",
      "category": "tip",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "model",
      "title": "FeyNoBg 发布：开源自动背景去除模型，在四项基准上达到 SOTA",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://usefeyn.com/blog/feynobg",
      "date": "2026-07-28",
      "score": 71,
      "tags": [
        "AI HOT",
        "开源",
        "模型"
      ],
      "summary": "Feyn Labs 推出 FeyNoBg，一个用于自动背景去除的 SOTA 模型。它在八个基准测试中的四项上取得最佳 S-measure 分数，其余四项与领先者差距在 2% 以内。该模型基于 BiRefNet 架构，参数量从 222M 扩展至 263M，同时开源了训练库 NoBg，模型和代码分别可…",
      "publishedAt": "2026-07-28T04:57:13.190Z",
      "category": "ai-models",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：不要只做问答 Demo，优先用真实长文档、代码仓库、多轮工具调用和成本曲线来评测。"
    },
    {
      "topic": "tip",
      "title": "OpenAI 称越来越多员工用 ChatGPT 做其他岗位的工作",
      "source": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/openai-says-more-workers-are-using-chatgpt-to-do-other-peoples-jobs",
      "date": "2026-07-28",
      "score": 70,
      "tags": [
        "AI HOT",
        "OpenAI",
        "GPT",
        "观点"
      ],
      "summary": "OpenAI 分析超 80 万条与工作相关的 ChatGPT 消息后发现，43.5% 的岗位特定查询涉及另一职业，营销和工程任务交叉最多。用户用 AI 处理合同审查、数据分析、网站故障排查等原由专家负责的工作。OpenAI 认为这是岗位职责正在变化的早期信号，该趋势在缺乏专业团队的小公司尤为明显。",
      "publishedAt": "2026-07-27T19:08:51.000Z",
      "category": "tip",
      "comment": "点评：这条动态值得从方法论、最佳实践和落地风险三个维度继续跟踪，短期看产品信号，长期看能否沉淀为稳定能力。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "product",
      "title": "Kimi K3 开源分布式智能体环境 AgentENV",
      "source": "X：Kimi.ai (@Kimi_Moonshot)",
      "url": "https://x.com/Kimi_Moonshot/status/2081762978391843020",
      "date": "2026-07-28",
      "score": 69,
      "tags": [
        "AI HOT",
        "Kimi",
        "Agent",
        "开源",
        "产品"
      ],
      "summary": "我们与 kvcache-ai 合作开源了 AgentENV。 AgentENV 是一个用于大规模运行智能体环境的分布式系统。其组件为 Kimi K3 的智能体强化学习训练提供支持，具备快速快照、恢复和分支功能，适用于大规模并行智能体工作流。 在 GitHub 上探索：http://github.c…",
      "publishedAt": "2026-07-27T15:25:45.000Z",
      "category": "ai-products",
      "comment": "点评：开源模型逼近前沿闭源能力，会让企业模型选型从单纯比较排行榜，转向比较本地部署、数据控制、工具调用稳定性和单位任务成本。性能声明仍需用自己的任务集复核。",
      "advice": "建议：用中文长文档、代码修改、函数调用和安全边界等真实任务与现有模型对跑；同时核查许可证、权重获取、推理栈、更新节奏和私有部署成本。"
    },
    {
      "topic": "tip",
      "title": "GitHub Copilot app 入门指南：多 Agent 会话工作区与 Canvas 预览",
      "source": "GitHub Blog",
      "url": "https://github.blog/ai-and-ml/github-copilot/github-copilot-app-for-beginners-getting-started",
      "date": "2026-07-28",
      "score": 68,
      "tags": [
        "AI HOT",
        "Agent",
        "Copilot",
        "观点"
      ],
      "summary": "GitHub Copilot app 将 AI 编码工具升级为多 Agent 会话工作区，支持同时管理多个任务线程而不丢失进度。用户可为每个会话绑定项目上下文，通过 `/create-canvas` 命令在浏览器 Canvas 中预览 UI 并直接点选修改，还能启用 Agent Merge 自动处…",
      "publishedAt": "2026-07-27T16:00:00.000Z",
      "category": "tip",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "tip",
      "title": "如何评估不同 LLM 提供商在延迟、吞吐量和正常运行时间上的性能",
      "source": "OpenRouter：Announcements（RSS）",
      "url": "https://openrouter.ai/blog/insights/evaluate-llm-provider-performance",
      "date": "2026-07-28",
      "score": 65,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "同一模型在不同提供商端点上的表现因基础设施、量化、负载处理和路由默认设置而异。评估需测量延迟、吞吐量、正常运行时间和精度，并将测量结果转化为路由策略。",
      "publishedAt": "2026-07-28T00:00:00.000Z",
      "category": "tip",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "safety",
      "title": "Anthropic 澄清立场：从未主张全面禁止开源权重模型，支持芯片出口管制与安全测试",
      "source": "Anthropic：Newsroom（网页）",
      "url": "https://www.anthropic.com/news/position-open-weights-models",
      "date": "2026-07-28",
      "score": 61,
      "tags": [
        "AI HOT",
        "Anthropic",
        "开源",
        "观点"
      ],
      "summary": "Anthropic CEO Dario Amodei 明确表示公司从未主张禁止开源权重模型，并认为不具备危险能力的开源权重模型是公共产品。他提出三项实际措施：对华芯片出口管制、打击工业级知识蒸馏、对所有足够强大的模型进行强制性安全测试。Amodei 指出，保护主义禁令无法解决其最担忧的国家安全威胁…",
      "publishedAt": "2026-07-27T22:26:00.307Z",
      "category": "tip",
      "comment": "点评：AI 能力越深入生产，治理越不能停留在原则口号，必须落到权限、审计、数据边界和责任链。",
      "advice": "建议：管理者应把合规、审计、权限和员工沟通前置，避免 AI 项目因信任问题受阻。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "公众号：月之暗面（Kimi）",
      "url": "https://mp.weixin.qq.com/s/IW9BdyA3hLvuuiX_aMCJEQ",
      "note": "Kimi K3 开放日：模型权重、技术报告和关键 Infra 技术同步开放"
    },
    {
      "name": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/27/googles-ai-search-is-rapidly-becoming-the-default-new-data-shows",
      "note": "Google AI Overviews 搜索结果出现率升至43%"
    },
    {
      "name": "GitHub Blog",
      "url": "https://github.blog/ai-and-ml/github-copilot/the-harness-is-all-you-need-mostly",
      "note": "GitHub Copilot 发布\"Harness\"工作流：用单一工具完成原型…"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/982/520.htm",
      "note": "德里高等法院裁定 OpenAI 利用 ANI 内容训练 AI 未侵犯版权"
    },
    {
      "name": "X：Kimi.ai (@Kimi_Moonshot)",
      "url": "https://x.com/Kimi_Moonshot/status/2081813202514681878",
      "note": "Kimi 发布视觉感知基准 PerceptionBench"
    },
    {
      "name": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/27/designing-skill-driven-financial-analysis-agents-with-claude-python-mcp-connectors-and-automated-deliverables",
      "note": "用Claude和Python构建技能驱动的金融分析智能体"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://usefeyn.com/blog/feynobg",
      "note": "FeyNoBg 发布：开源自动背景去除模型，在四项基准上达到 SOTA"
    }
  ]
};

const episodeHistory = [
  {
    "date": "2026-07-28",
    "title": "AI HOT 日报：Kimi、Google、Copilot",
    "summary": "重点关注 模型发布/更新、行业动态、技巧与观点、产品发布/更新。核心信号是：Kimi K3 开放日：模型权重、技术报告和关键 Infra 技术同步开放；Google AI Overviews 搜索结果出现率升至43%；GitHub Copilot 发布\"Harness\"工作流：…",
    "link": "/posts/72828/",
    "tags": [
      "AI HOT",
      "Kimi",
      "Agent",
      "开源"
    ]
  },
  {
    "date": "2026-07-26",
    "title": "AI HOT 日报：Grok CLI 与 OpenAI Agent 安全复盘",
    "summary": "滚动窗口仅收录 2 条新增信号：xAI 发布 Grok CLI 并加入教程入口；OpenAI Agent 安全事件的后续报道提醒团队对长时、可联网 Agent 实施严格隔离、监测和止损。",
    "link": "/posts/72626/",
    "tags": [
      "AI HOT",
      "Grok",
      "OpenAI",
      "AI安全"
    ]
  },
  {
    "date": "2026-07-25",
    "title": "AI HOT 日报：Claude Opus 5、开放权重监管、FLUX 3",
    "summary": "聚焦 Claude Opus 5、开放权重监管、物理 Agent 评测、视频工作流与成本控制。核心信号是：Anthropic 发布 Claude Opus 5；英伟达、微软与 Meta 呼吁避免过度监管开放权重；FLUX 3 与 Drone-Bench 推进视频动作和实体任务评测。",
    "link": "/posts/72525/",
    "tags": [
      "AI HOT",
      "Claude",
      "开放权重",
      "FLUX"
    ]
  },
  {
    "date": "2026-07-24",
    "title": "AI HOT 日报：ChatGPT语音多智能体、Claude语音工具、AI医疗风险",
    "summary": "聚焦语音 Agent、健康边界、权限漏洞、内容基础设施与模型产品化。核心信号是：ChatGPT 桌面版支持用语音协调多个 Agent；Claude 语音模式连接 Gmail、Slack 等工具；健康功能与相关医疗诉讼提醒团队重视安全升级和专业服务边界。",
    "link": "/posts/72424/",
    "tags": [
      "AI HOT",
      "ChatGPT",
      "Claude",
      "AI安全"
    ]
  },
  {
    "date": "2026-07-23",
    "title": "AI HOT 日报：北京智能体新政、Gemini 9.5亿月活、向量检索降本",
    "summary": "聚焦智能体政策、推理与检索降本、模型路由、AI 基建和安全评测。核心信号是：北京将 Harness Engineering 与 Token 经济写入智能体政策；Gemini 月活达到 9.5 亿；小红书 HELMSMAN 以全闪存向量检索降低硬件成本。",
    "link": "/posts/72323/",
    "tags": [
      "AI HOT",
      "Agent",
      "Gemini",
      "向量检索"
    ]
  },
  {
    "date": "2026-07-22",
    "title": "AI HOT 日报：OpenAI安全事件、Gemini 3.6、Anthropic版权和解",
    "summary": "聚焦安全事件、模型产品线、Agent 工作流、商业化入口与版权治理。核心信号是：OpenAI 与 Hugging Face 调查模型攻破生产环境的安全事件；Anthropic 15 亿美元版权和解获批；Google 发布 Gemini 3.6 Flash、3.5 Flash-Lite 与 3.5 Flash Cyber。",
    "link": "/posts/72222/",
    "tags": [
      "AI HOT",
      "OpenAI",
      "安全",
      "Gemini"
    ]
  },
  {
    "date": "2026-07-21",
    "title": "AI HOT 日报：MiniCPM-Robot开源、AI生成短片、Hugging Face安全事件",
    "summary": "重点关注 模型发布/更新、行业动态、论文研究、产品发布/更新、技巧与观点。核心信号是：面壁智能发布首个具身智能成果 MiniCPM-Robot 系列模型，含 1.5B VLA 与 0.9B 跟踪模型；《第九区》导演Neill Blomkamp发布首部完全由AI生成的短片《Nig…",
    "link": "/posts/72121/",
    "tags": [
      "AI HOT",
      "开源",
      "模型",
      "产业"
    ]
  },
  {
    "date": "2026-07-20",
    "title": "AI HOT 日报：transcribe、不会代码也能做产品、黄仁勋访日",
    "summary": "重点关注 产品发布/更新、技巧与观点、行业动态、模型发布/更新。核心信号是：transcribe.cpp 发布：基于 ggml 的跨平台语音转录库，支持 16 个 ASR 模型族；不会代码也能做产品：一份从0开始的Vibe Coding保姆级教程；黄仁勋访日：Nvidia 联手…",
    "link": "/posts/72020/",
    "tags": [
      "AI HOT",
      "Meta",
      "产品",
      "Kimi"
    ]
  },
  {
    "date": "2026-07-19",
    "title": "AI HOT 日报：DAIR.AI 发布、Index Vent、Nvidia",
    "summary": "重点关注 技巧与观点、行业动态、模型发布/更新、产品发布/更新。核心信号是：DAIR.AI 发布 X 智能体技能：自动追踪 AI 前沿动态；Index Ventures 联合创始人 Neil Rimer 认为 AI 财富将面临\"再分配\"；使用 NVIDIA NeMo AutoM…",
    "link": "/posts/71919/",
    "tags": [
      "AI HOT",
      "Claude",
      "Agent",
      "MCP"
    ]
  },
  {
    "date": "2026-07-17",
    "title": "AI HOT 日报：Grok Automations、智能体安全、Claude Code迁移",
    "summary": "重点关注产品自动化、智能体安全、真实场景评测、多模态可靠性与推理效率。核心信号是：Grok 让任务按计划或邮件触发；企业 Agent 的身份与评测缺口浮现；Claude Code 的大规模迁移案例展示收益必须与测试和回归一起衡量。",
    "link": "/posts/71717/",
    "tags": [
      "AI HOT",
      "Grok",
      "Agent",
      "安全"
    ]
  },
  {
    "date": "2026-07-16",
    "title": "AI HOT 日报：Apple智能接入千问、Grok Build开源、Agent基础设施",
    "summary": "重点关注 行业动态、产品发布/更新、技巧与观点、论文研究、模型发布/更新。核心信号是：国行 Apple 智能完成备案，阿里千问将集成至苹果 AI 能力；xAI 开源 Grok Build 编程智能体与终端界面；Telegram 无服务器架构。",
    "link": "/posts/71616/",
    "tags": [
      "AI HOT",
      "千问",
      "产业",
      "xAI"
    ]
  },
  {
    "date": "2026-07-14",
    "title": "AI HOT 日报：OpenAI、前沿模型实际成本、Meta",
    "summary": "重点关注 技巧与观点、行业动态、模型发布/更新。核心信号是：OpenAI 面向普通用户发布提示词指南：从结果出发，少写步骤；前沿模型实际成本：tokenizer 差异导致隐性涨价；Meta 宣布扩建路易斯安那州数据中心至 5GW，总投资超 500 亿美元。",
    "link": "/posts/71414/",
    "tags": [
      "AI HOT",
      "OpenAI",
      "GPT",
      "观点"
    ]
  },
  {
    "date": "2026-07-13",
    "title": "AI HOT 日报：xAI、黄仁勋、ChatGPT Work",
    "summary": "重点关注 行业动态、产品发布/更新、模型发布/更新、技巧与观点。核心信号是：xAI 官方 Grok CLI 被曝静默上传整个代码库及用户密钥；黄仁勋：英伟达季度收入逼近千亿美元，Rubin Ultra 架构未延期；Codex与ChatGPT Work多项更新：取消5小时限制。",
    "link": "/posts/71313/",
    "tags": [
      "AI HOT",
      "Google",
      "xAI",
      "Grok"
    ]
  },
  {
    "date": "2026-07-12",
    "title": "AI HOT 日报：OpenAI、Ghost Font、蚂蚁集团 Robby",
    "summary": "重点关注 行业动态、技巧与观点、模型发布/更新。核心信号是：OpenAI GPT-5.6-Sol 删光 AI 创业者 Matt Shumer 的 Mac 硬盘；Ghost Font：一种人类能读懂但AI无法识别的反AI字体；蚂蚁集团 Robbyant 发布 LingBot-VA…",
    "link": "/posts/71212/",
    "tags": [
      "AI HOT",
      "OpenAI",
      "Anthropic",
      "GPT"
    ]
  },
  {
    "date": "2026-07-11",
    "title": "AI HOT 日报：Apple诉OpenAI、宇树G1手术、AI滥用风险",
    "summary": "重点关注 行业动态、论文研究、技巧与观点、产品发布/更新。核心信号是：Apple 起诉 OpenAI 窃取商业机密；宇树G1人形机器人完成首例活体微创手术；博科圣地如何利用前沿AI技术。",
    "link": "/posts/71111/",
    "tags": [
      "AI HOT",
      "OpenAI",
      "产业",
      "机器人"
    ]
  },
  {
    "date": "2026-07-10",
    "title": "AI HOT 日报：ChatGPT Work、Flint、LongCat-2.0",
    "summary": "重点关注 模型发布/更新、产品发布/更新、行业动态、技巧与观点。核心信号是：OpenAI 推出 ChatGPT Work：可跨应用自主工作的 AI 智能体；微软发布Flint：面向AI智能体的可视化语言；美团 LongCat-2.0 正式开源，同步开放国产卡推理代码。",
    "link": "/posts/71010/",
    "tags": [
      "AI HOT",
      "OpenAI",
      "GPT",
      "推理"
    ]
  },
  {
    "date": "2026-07-09",
    "title": "AI HOT 日报：GitLost、提示注入僵尸网络、Skill编排",
    "summary": "重点关注 行业动态、论文研究、技巧与观点、模型发布/更新、产品发布/更新。核心信号是：GitLost：Noma Labs 发现 GitHub AI 代理提示词注入漏洞；黑客可利用9款最流行的AI工具组装大规模僵尸网络；在校研究生Kunkun开源管理相互调用Skill的方法。",
    "link": "/posts/70909/",
    "tags": [
      "AI HOT",
      "Claude",
      "Agent",
      "Copilot"
    ]
  },
  {
    "date": "2026-07-07",
    "title": "AI HOT 日报：AI裁员潮、初级程序员危机、OfficeCLI",
    "summary": "重点关注 行业动态、技巧与观点、产品发布/更新、模型发布/更新。核心信号是：2026年科技公司AI裁员名单：Microsoft、Oracle、GitLab等十家公司裁减数千岗位；AI颠覆初级程序员就业市场：斯坦福数据揭示年轻开发者就业锐减19%；OfficeCLI：为AI智能体…",
    "link": "/posts/70707/",
    "tags": [
      "AI HOT",
      "Google",
      "Meta",
      "Microsoft"
    ]
  },
  {
    "date": "2026-07-06",
    "title": "AI HOT 日报：LongCat-2.0、千兆瓦 AI 集群、Fun-ASR",
    "summary": "重点关注模型开源、AI 基础设施军备赛、科研 Agent 工作台、语音识别与 AI 治理。核心信号是：美团 LongCat-2.0 完全开源；Meta 押注千兆瓦级 AI 集群；Fun-ASR-Realtime 把多语言实时语音识别推向工业场景。",
    "link": "/posts/70606/",
    "tags": [
      "AI HOT",
      "LongCat",
      "Meta",
      "Fun-ASR"
    ]
  },
  {
    "date": "2026-07-04",
    "title": "AI HOT 日报：pxpipe、Claude、阿里达摩院发布",
    "summary": "重点关注 技巧与观点、论文研究、行业动态、产品发布/更新、模型发布/更新。核心信号是：pxpipe：通过图像化压缩输入token降低Claude Code成本；claude-real-video ─ 让任何大语言模型（LLM）都能观看视频；阿里达摩院发布超导材料发现AI智能体E…",
    "link": "/posts/70404/",
    "tags": [
      "AI HOT",
      "Claude",
      "Claude Code",
      "观点"
    ]
  },
  {
    "date": "2026-07-03",
    "title": "AI HOT 日报：视频理解、Elements Claw、Frontier Company",
    "summary": "重点关注 行业动态、技巧与观点、产品发布/更新、论文研究。核心信号是：claude-real-video 让通用大模型获得可落地的视频理解入口；阿里达摩院 Elements Claw 用 AI 智能体发现并验证新超导材料；Microsoft Frontier Company 以 6000 名 AI 工程师驻场企业客户，企业 AI 从采购工具走向共同交付。",
    "link": "/posts/70303/",
    "tags": [
      "AI HOT",
      "Agent",
      "Microsoft",
      "视频理解"
    ]
  },
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
