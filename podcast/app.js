const episode = {
  "date": "2026-06-25",
  "title": "AI HOT 日报：xAI争议、Figma AI 画布、AI Coding 实践",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 模型发布/更新、产品发布/更新、行业动态、论文研究、技巧与观点。核心信号是：xAI 与 SpaceX 的 AI 叙事受到投资人质疑；Figma 在 Config 2026 把设计画布扩展到代码、动画与 3D；字节跳动复盘 AI Coding，提醒不要只看代码生成占比。",
  "conclusion": "今天的主线不是“又有几个新模型”，而是 AI 正在进入可执行工作流：语音可被实时打断，设计画布能生成代码与动画，开发团队开始用吞吐率和正确率衡量 AI Coding。建议把每条新闻落到三张表：任务评测表、权限与数据边界表、成本与 ROI 复盘表。",
  "items": [
    {
      "topic": "tip",
      "title": "里德·霍夫曼称SpaceX\"不是一家人工智能公司\"，xAI则是\"彻底的灾难\"",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://fortune.com/2026/06/24/reid-hoffman-spacex-musk-openai-anthropic-gen-z-mistake",
      "date": "2026-06-25",
      "score": 78,
      "tags": [
        "AI HOT",
        "OpenAI",
        "Anthropic",
        "xAI",
        "Grok",
        "观点"
      ],
      "summary": "LinkedIn联合创始人、Anthropic和OpenAI投资者Reid Hoffman在播客中公开批评SpaceX和xAI。他指出SpaceX\"不是一家人工智能公司\"，6月12日上市后收购AI编程工具Cursor属于\"花钱买相关性\"；xAI则是\"彻底的灾难\"，所有11位联合创始人已离职，Gro…",
      "publishedAt": "2026-06-24T14:20:14.340Z",
      "category": "tip",
      "comment": "点评：投资人对 xAI 与 SpaceX 的批评，本质上是在质疑“把 AI 标签贴到一切业务上”的叙事泡沫。AI 公司最终还是要用模型能力、产品留存、组织稳定性和商业收入证明自己。",
      "advice": "建议：看 AI 公司或相关标的时，不要只看估值和创始人光环，应拆开看团队稳定性、技术路线、客户付费、数据闭环和现金消耗。"
    },
    {
      "topic": "product",
      "title": "Figma在Config 2026押注人类判断，画布AI能力却来自第三方",
      "source": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/figma-bets-on-human-judgment-at-config-2026-while-the-ai-powering-its-canvas-belongs-to-someone-else",
      "date": "2026-06-25",
      "score": 74,
      "tags": [
        "AI HOT",
        "OpenAI",
        "Anthropic",
        "Google",
        "推理",
        "产品"
      ],
      "summary": "Figma在Config 2026将设计画布扩展至代码、动画、3D深度和着色器效果，并集成去年收购的Weave工作流系统。新功能包括Code Layers（代码与设计并存）、Motion动画、深度层、Shader及Generative Plugins。协作方面，团队可搜索复用AI提示词、保存工作流…",
      "publishedAt": "2026-06-24T16:49:01.000Z",
      "category": "ai-products",
      "comment": "点评：Figma 的方向很清楚：设计工具正在从静态画布变成“产品生产画布”。但核心 AI 能力来自外部模型，也说明应用层护城河会更多来自工作流、协作和设计资产，而不是底层模型本身。",
      "advice": "建议：设计和产品团队可以试点“设计稿—代码—动画—评审”的一体化流程，但要保留设计规范、组件库和人工审核，避免生成内容破坏品牌一致性。"
    },
    {
      "topic": "tip",
      "title": "字节跳动技术副总裁洪定坤：AI Coding 的实践与探索",
      "source": "公众号：火山引擎",
      "url": "https://mp.weixin.qq.com/s/mdmaAyUIvxE8WT_GEbF2wQ",
      "date": "2026-06-25",
      "score": 74,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "在火山引擎Force大会，字节跳动技术副总裁洪定坤分享AI Coding实践。过去一年，字节AI代码贡献率增长6倍，tokens消耗增长5倍，但过度关注单一指标可能失真--TRAE团队代码超90%由AI生成，人均需求吞吐率仅提升60%。900次实验显示，主流Coding模型组合代码正确率超80%，…",
      "publishedAt": "2026-06-24T14:02:42.000Z",
      "category": "tip",
      "comment": "点评：AI Coding 已经从“代码有多少由 AI 写”进入“需求吞吐、正确率、评审负担、缺陷率是否改善”的阶段。只追求生成占比，很容易制造漂亮但失真的指标。",
      "advice": "建议：研发管理者应把 AI Coding 评估指标改成端到端交付效率：需求周期、一次通过率、线上缺陷、代码审查耗时和开发者满意度。"
    },
    {
      "topic": "paper",
      "title": "DFlash：块扩散草稿模型实现最高15倍吞吐量提升",
      "source": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/06/24/dflash-speculative-decoding-drafts-whole-token-blocks-in-parallel-for-up-to-15x-higher-throughput-on-nvidia-blackwell",
      "date": "2026-06-25",
      "score": 74,
      "tags": [
        "AI HOT",
        "Nvidia",
        "GPT",
        "Qwen",
        "推理",
        "论文"
      ],
      "summary": "DFlash 由 UC San Diego 团队提出，是一种用于投机解码的轻量块扩散草稿模型。它一次前向推理生成整块 token，再由目标模型并行验证，保证输出无损。相比 EAGLE-3，DFlash 实现最高 2.5 倍加速，在 Qwen3-8B 等多种模型上平均无损加速超过 6 倍（MATH-…",
      "publishedAt": "2026-06-24T07:21:10.000Z",
      "category": "paper",
      "comment": "点评：投机解码与块扩散草稿模型说明推理侧仍有巨大工程红利。对于企业来说，吞吐提升往往比单点能力提升更快转化为成本下降和体验改善。",
      "advice": "建议：平台团队可关注这类无损加速方案是否能接入现有推理栈，并用真实负载测试延迟、吞吐、显存和答案一致性。"
    },
    {
      "topic": "model",
      "title": "OpenAI ChatGPT 语音最大规模升级：双向AI语音模型 Bidi 1 已上线测试",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/967/852.htm",
      "date": "2026-06-25",
      "score": 74,
      "tags": [
        "AI HOT",
        "OpenAI",
        "GPT",
        "模型"
      ],
      "summary": "6月23日，部分用户反馈 ChatGPT 网页版和 App 版上线了双向 AI 语音模型 Bidi 1，位于设置模型选择器中，与标准语音和高级语音并列。该模型支持边说话边监听，用户可在对话中途打断并发出新指令，例如要求从1数到10时中途喊停倒数，模型会立即切换执行。OpenAI 尚未官宣，预计本周…",
      "publishedAt": "2026-06-24T04:34:24.000Z",
      "category": "ai-models",
      "comment": "点评：双向语音的关键不是“声音更像人”，而是模型能边听边说、被打断、实时改任务。这会推动客服、陪练、会议助手和车载交互从播报式体验走向协作式体验。",
      "advice": "建议：语音产品应重点测试打断、纠错、噪声环境、多说话人和任务切换，而不是只比较音色自然度。"
    },
    {
      "topic": "model",
      "title": "Qwen-AgentWorld 开源：让 Agent 学会\"先预测，再行动\"",
      "source": "公众号：通义实验室（千问）",
      "url": "https://mp.weixin.qq.com/s/NV9WGpGsfFz35jww5agM9g",
      "date": "2026-06-25",
      "score": 74,
      "tags": [
        "AI HOT",
        "Claude",
        "GPT",
        "通义",
        "千问",
        "模型"
      ],
      "summary": "通义千问推出首个原生语言世界模型 Qwen-AgentWorld，覆盖 MCP、Search、Terminal、SWE、Web、OS、Android 七大领域。模型基于超 1000 万条真实交互轨迹，经 CPT→SFT→RL 三阶段训练，在 AgentWorldBench 上超越 GPT-5.4（…",
      "publishedAt": "2026-06-24T03:32:04.000Z",
      "category": "ai-models",
      "comment": "点评：Agent 竞争正在从“会调用工具”升级为“理解行动后果”。先预测再行动，本质上是在给智能体补上世界模型、可回放轨迹和低风险试错空间。",
      "advice": "建议：做企业 Agent 时，优先建设任务轨迹、仿真环境、评测集和回滚机制，不要急着把高风险动作直接交给模型。"
    },
    {
      "topic": "model",
      "title": "Gemini 3.5 Flash 中的计算机使用",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash",
      "date": "2026-06-25",
      "score": 71,
      "tags": [
        "AI HOT",
        "Google",
        "Gemini",
        "Agent",
        "模型"
      ],
      "summary": "Google 将计算机使用（Computer use）作为内置工具集成至 Gemini 3.5 Flash，使开发者能构建跨浏览器、移动端和桌面环境的智能体。此前该功能仅作为独立模型在 Gemini 2.5 中提供，现已原生整合至主 Flash 模型。开发者可通过 Gemini API 及 Gem…",
      "publishedAt": "2026-06-24T21:16:01.786Z",
      "category": "ai-models",
      "comment": "点评：Computer Use 进入主模型，说明浏览器、桌面和移动端操作会成为通用 Agent 的基础能力。但能力越通用，权限边界和误操作风险越需要工程化治理。",
      "advice": "建议：试点此类能力时，先限定沙箱、白名单网站、只读数据和人工确认点，再逐步开放写入、支付、发布等高风险操作。"
    },
    {
      "topic": "safety",
      "title": "在与Anthropic的纠纷中，NSA失去了对Mythos的访问权限",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://www.nytimes.com/2026/06/23/us/politics/nsa-lost-access-anthropic-tool.html",
      "date": "2026-06-25",
      "score": 71,
      "tags": [
        "AI HOT",
        "Anthropic",
        "产业"
      ],
      "summary": "美国国家安全局（NSA）因与人工智能公司Anthropic的纠纷，失去了对Mythos系统的访问权限。",
      "publishedAt": "2026-06-24T19:08:32.032Z",
      "category": "industry",
      "comment": "点评：这类事件提醒我们，关键 AI 系统不仅是工具，也是供应链和治理资产。一旦访问权、合同或信任关系变化，业务连续性会受到直接影响。",
      "advice": "建议：企业采购关键 AI 能力时，应准备替代模型、数据导出、权限审计和应急降级方案，避免单一供应商锁死核心流程。"
    },
    {
      "topic": "tip",
      "title": "AI被认为会取代工程岗位，但新数据显示工程是2025年最具韧性的岗位",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/06/24/ai-was-supposed-to-kill-engineering-jobs-but-new-data-suggests-theyre-the-most-resilient",
      "date": "2026-06-25",
      "score": 70,
      "tags": [
        "AI HOT",
        "Anthropic",
        "Meta",
        "Nvidia",
        "观点"
      ],
      "summary": "风投机构SignalFire追踪8000万家公司数百万员工数据发现，工程是2025年最具韧性的岗位。大型科技公司总招聘较2019年下降25%，工程岗仅降11%；工程岗占Alphabet、Meta等12家\"Tech Majors\"新招员工的55%（2019年为46%）。早期初创公司2025年工程师招…",
      "publishedAt": "2026-06-24T21:56:41.000Z",
      "category": "tip",
      "comment": "点评：“AI 取代工程师”的叙事过于粗糙。更现实的变化是工程师岗位会重组：会用 AI 分解任务、写规格、评审和验证的人，反而更稀缺。",
      "advice": "建议：个人应把学习重点放在系统设计、需求澄清、测试验证和 Agent 协作；团队则应把 AI 培训纳入工程规范，而不是只买工具。"
    },
    {
      "topic": "paper",
      "title": "思考即回忆：推理如何解锁LLM中的参数化知识",
      "source": "Google Research：Blog（网页）",
      "url": "https://research.google/blog/thinking-to-recall-how-reasoning-unlocks-parametric-knowledge-in-llms",
      "date": "2026-06-25",
      "score": 69,
      "tags": [
        "AI HOT",
        "Google",
        "Gemini",
        "Qwen",
        "推理",
        "论文"
      ],
      "summary": "Google Research研究发现，推理（chain-of-thought）能帮助大语言模型（LLM）回忆简单事实，即使这些事实无需复杂推导。在Gemini-2.5 Flash和Pro以及Qwen3-32B上，启用推理后模型能够回答原本无法直接回答的简单问题，pass@k显示正确事实存在于输出…",
      "publishedAt": "2026-06-24T17:05:40.380Z",
      "category": "paper",
      "comment": "点评：这项研究说明“推理”有时不只是解决复杂题，也能激活模型内部已有知识。它提醒我们，提示词和推理预算会影响事实召回，而不仅影响数学题表现。",
      "advice": "建议：知识问答场景应对比直接回答、短推理、长推理和 RAG 的效果差异，避免在所有问题上无差别开启高成本推理。"
    },
    {
      "topic": "safety",
      "title": "OpenRouter 零数据留存（ZDR）实践：97 款新模型，流量占比近半",
      "source": "OpenRouter：Announcements（RSS）",
      "url": "https://openrouter.ai/blog/insights/when-zero-means-zero",
      "date": "2026-06-25",
      "score": 68,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "OpenRouter 的零数据留存（ZDR）保证用户提示词和模型响应不被存储，元数据一般安全。自 1 月以来新增 97 款支持 ZDR 的模型，月度 token 量增长 4.3 倍，约占全部路由流量一半。ZDR 在三个层面执行：账户级（整个供应商开启）、护栏级（按 API Key 或组织成员限定）…",
      "publishedAt": "2026-06-24T16:00:00.000Z",
      "category": "tip",
      "comment": "点评：ZDR 流量占比上升，说明企业用户越来越在意模型路由中的数据留存和合规边界。隐私能力会成为模型平台的重要产品特性。",
      "advice": "建议：企业接入模型路由平台时，应逐项确认提示词、响应、日志、元数据的留存策略，并把不同业务按敏感级别分配模型与 Key。"
    },
    {
      "topic": "model",
      "title": "GPT-5.5 Instant 新版本，对话更有趣",
      "source": "X：OpenAI (@OpenAI)",
      "url": "https://x.com/OpenAI/status/2069843083701915755",
      "date": "2026-06-25",
      "score": 67,
      "tags": [
        "AI HOT",
        "GPT",
        "模型"
      ],
      "summary": "我们为你带来了新版 GPT-5.5 Instant，它现在聊起天来有趣多了。 我们最常用的模型现在能更好地理解问题背后的意图，并相应地调整回应。 它也能更可靠地处理复杂约束，让购物和本地推荐更加实用和连贯。 今天向付费用户推送，明天向免费用户推送。",
      "publishedAt": "2026-06-24T18:00:21.000Z",
      "category": "ai-models",
      "comment": "点评：通用模型继续打磨“意图理解 + 约束遵循 + 推荐质量”，说明日常助手的竞争正在转向更稳定的长尾任务体验。",
      "advice": "建议：团队评测通用模型时，应加入多约束推荐、本地信息检索、连续追问和拒答边界，而不是只看一次性问答。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://fortune.com/2026/06/24/reid-hoffman-spacex-musk-openai-anthropic-gen-z-mistake",
      "note": "里德·霍夫曼称SpaceX\"不是一家人工智能公司\"，xAI则是\"彻底的灾难\""
    },
    {
      "name": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/figma-bets-on-human-judgment-at-config-2026-while-the-ai-powering-its-canvas-belongs-to-someone-else",
      "note": "Figma在Config 2026押注人类判断，画布AI能力却来自第三方"
    },
    {
      "name": "公众号：火山引擎",
      "url": "https://mp.weixin.qq.com/s/mdmaAyUIvxE8WT_GEbF2wQ",
      "note": "字节跳动技术副总裁洪定坤：AI Coding 的实践与探索"
    },
    {
      "name": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/06/24/dflash-speculative-decoding-drafts-whole-token-blocks-in-parallel-for-up-to-15x-higher-throughput-on-nvidia-blackwell",
      "note": "DFlash：块扩散草稿模型实现最高15倍吞吐量提升"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/967/852.htm",
      "note": "OpenAI ChatGPT 语音最大规模升级：双向AI语音模型 Bidi 1…"
    },
    {
      "name": "公众号：通义实验室（千问）",
      "url": "https://mp.weixin.qq.com/s/NV9WGpGsfFz35jww5agM9g",
      "note": "Qwen-AgentWorld 开源：让 Agent 学会\"先预测，再行动\""
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash",
      "note": "Gemini 3.5 Flash 中的计算机使用"
    }
  ]
};

const episodeHistory = [
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
