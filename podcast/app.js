const episode = {
  "date": "2026-07-10",
  "title": "AI HOT 日报：ChatGPT Work、Flint、LongCat-2.0",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 模型发布/更新、产品发布/更新、行业动态、技巧与观点。核心信号是：OpenAI 推出 ChatGPT Work：可跨应用自主工作的 AI 智能体；微软发布Flint：面向AI智能体的可视化语言；美团 LongCat-2.0 正式开源，同步开放国产卡推理代码。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "model",
      "title": "OpenAI 推出 ChatGPT Work：可跨应用自主工作的 AI 智能体",
      "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
      "url": "https://openai.com/index/chatgpt-for-your-most-ambitious-work",
      "date": "2026-07-10",
      "score": 80,
      "tags": [
        "AI HOT",
        "OpenAI",
        "GPT",
        "推理",
        "模型"
      ],
      "summary": "OpenAI 发布 ChatGPT Work，一个能跨应用和文件收集信息、将复杂项目分解为小步骤独立完成并持续工作数小时的 AI 智能体。它内置 Codex 技术，目前每周超 500 万用户使用 Codex，其中超 100 万用于非软件开发场景。ChatGPT Work 由今天同步推出的最新前沿模…",
      "publishedAt": "2026-07-09T10:00:00.000Z",
      "category": "ai-models",
      "comment": "点评：ChatGPT Work 把 Agent 从“会调用工具”推进到“能跨应用持续交付”。能力边界不再只看模型聪明程度，而在于能否安全访问文件、系统和协作流程。",
      "advice": "建议：先在低权限、可回滚的工作流试点，明确每个连接器可读写的数据范围、最大执行时长、人工确认点和异常中止规则。"
    },
    {
      "topic": "product",
      "title": "微软发布Flint：面向AI智能体的可视化语言",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://microsoft.github.io/flint-chart",
      "date": "2026-07-10",
      "score": 75,
      "tags": [
        "AI HOT",
        "MCP",
        "开源",
        "产品"
      ],
      "summary": "微软研究院推出Flint，一种可视化中间语言，让AI智能体通过简洁的人类可编辑spec自动生成美观图表。用户只需提供数据、语义类型和图表类型，Flint编译器即可推导坐标轴、配色、布局等底层参数。支持46种图表类型，可渲染到Vega-Lite、ECharts和Chart.js三个后端。项目通过np…",
      "publishedAt": "2026-07-09T21:46:19.253Z",
      "category": "ai-products",
      "comment": "点评：Flint 的价值不在于多一个图表库，而在于给 Agent 一层可读、可编辑、可审查的可视化规格。它有机会减少“图画出来了但语义错了”的黑箱问题。",
      "advice": "建议：把图表 spec 纳入版本控制和评审，针对指标口径、坐标轴、筛选条件和数据来源建立自动检查，避免 Agent 输出“好看但误导”的图。"
    },
    {
      "topic": "model",
      "title": "美团 LongCat-2.0 正式开源，同步开放国产卡推理代码",
      "source": "公众号：龙猫LongCat（美团）",
      "url": "https://mp.weixin.qq.com/s/iCq4jVlTdKOt74zAMYIIdw",
      "date": "2026-07-10",
      "score": 74,
      "tags": [
        "AI HOT",
        "Agent",
        "开源",
        "推理",
        "模型"
      ],
      "summary": "美团万亿参数大模型 LongCat-2.0 正式开源，总参数 1.6T，平均激活约 48B，专为真实 Agentic Coding 任务设计。模型引入 LongCat 稀疏注意力机制与 N-gram Embedding，提升长上下文处理效率与 Token 级表示能力。LongCat-2.0 是业界…",
      "publishedAt": "2026-07-09T11:58:00.000Z",
      "category": "ai-models",
      "comment": "点评：LongCat-2.0 同时开放权重和国产卡推理代码，竞争点从“是否开源”推进到“能否在本地算力稳定、低成本地跑起来”。这对 Agentic Coding 的真实落地更关键。",
      "advice": "建议：在目标国产算力上用真实代码仓、上下文长度、并发和单位任务成本做验证；同时检查许可证、权重下载、推理栈和模型更新的长期可维护性。"
    },
    {
      "topic": "safety",
      "title": "Elon Musk称赞Anthropic并承诺不切断其算力",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/09/elon-musk-praises-mythos-fable-promises-not-to-cut-off-anthropic",
      "date": "2026-07-10",
      "score": 73,
      "tags": [
        "AI HOT",
        "Anthropic",
        "xAI",
        "产业"
      ],
      "summary": "Elon Musk近日在X上承认此前对Anthropic的判断有误，称其\"显然是当前AI领域的领导者\"，盛赞Mythos/Fable模型\"目前最好\"，并承诺不会恶意切断其计算资源。2026年7月起，Anthropic成为SpaceX最大客户之一--双方5月签署协议，Anthropic以每月12.5…",
      "publishedAt": "2026-07-09T21:57:42.000Z",
      "category": "industry",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：管理者应把合规、审计、权限和员工沟通前置，避免 AI 项目因信任问题受阻。"
    },
    {
      "topic": "safety",
      "title": "AI 能否回答 3 万亿美元的问题？",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/09/can-ai-answer-the-3-trillion-question",
      "date": "2026-07-10",
      "score": 73,
      "tags": [
        "AI HOT",
        "OpenAI",
        "Anthropic",
        "Meta",
        "观点"
      ],
      "summary": "Sequoia 合伙人 David Cahn 更新 AI 基础设施支出估算：2026 年全球投入达 1.5 万亿美元，行业需产生 3 万亿美元收入才能回本。Anthropic 年化收入（ARR）达 600 亿美元，OpenAI 2025 年收入 130 亿美元（11 月称 ARR 200 亿美元）…",
      "publishedAt": "2026-07-09T21:47:50.000Z",
      "category": "tip",
      "comment": "点评：三万亿美元问题本质是 AI 基建投资的回报压力。行业最终要靠可持续的企业收入和可验证的生产率收益，而不是靠更高的训练预算来闭环。",
      "advice": "建议：企业立项时把增量收入、节省工时、推理成本和数据中心投入放进同一张财务模型，并按季度复核是否真的创造可回收价值。"
    },
    {
      "topic": "safety",
      "title": "Claude 推出反思功能（Beta）",
      "source": "Anthropic：Newsroom（网页）",
      "url": "https://www.anthropic.com/news/reflect-with-claude",
      "date": "2026-07-10",
      "score": 73,
      "tags": [
        "AI HOT",
        "Anthropic",
        "Claude",
        "产品"
      ],
      "summary": "Anthropic 为 Claude 推出一项反思功能（Beta），帮助用户追踪使用模式。用户可回顾过去 1、3、6 或 12 个月的活动总结，涵盖关键主题、使用频率和任务类型。功能结合 4D AI Fluency Framework（委托、描述、辨别、勤勉）提供协作分析，支持设定静音时段或定时休…",
      "publishedAt": "2026-07-09T13:40:30.163Z",
      "category": "ai-products",
      "comment": "点评：Claude 的反思功能把“如何使用 AI”也变成产品能力。对个人它能暴露习惯盲点；对团队则提示采用率不应只看调用量，还要看任务结构与协作质量。",
      "advice": "建议：团队复盘 AI 使用时只聚合脱敏指标，避免把个人对话内容变成绩效监控；重点衡量任务完成质量、返工率和知识沉淀。"
    },
    {
      "topic": "model",
      "title": "蚂蚁灵波开源实时交互世界模型 LingBot-World 2.0",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/974/508.htm",
      "date": "2026-07-10",
      "score": 73,
      "tags": [
        "AI HOT",
        "Agent",
        "开源",
        "推理",
        "模型"
      ],
      "summary": "蚂蚁灵波开源新一代实时交互世界模型 LingBot-World 2.0（14B 参数），支持施法、攻击、跳跃等丰富角色动作及文本驱动事件（如切换场景、召唤风暴），内置 Pilot Agent 与 Director Agent 实现世界持续演化，并支持多人同时交互。模型采用因果预训练范式和混合双向自…",
      "publishedAt": "2026-07-09T06:53:40.000Z",
      "category": "ai-models",
      "comment": "点评：LingBot-World 把世界模型、角色控制与多智能体交互连接起来，说明具身智能正从单次生成走向持续运行的模拟环境；长期价值取决于物理一致性和可控性。",
      "advice": "建议：游戏与机器人团队应先在封闭场景评估长时一致性、多人干扰、安全边界和资源成本，再决定是否连接真实控制系统。"
    },
    {
      "topic": "safety",
      "title": "社交媒体AI生成内容泛滥：LinkedIn超过40%长文为AI写作",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://www.pangram.com/blog/ai-in-your-feed",
      "date": "2026-07-10",
      "score": 72,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "安全公司Pangram通过Chrome扩展收集超100万条帖子，分析发现社交媒体AI生成内容泛滥。整体AI检测率13.8%，长文（超250词）中25.72%完全由AI生成。LinkedIn最为严重，超40%长文帖子被标记为完全AI生成，占全部AI内容的62%；X/Twitter近一半文章（23.9…",
      "publishedAt": "2026-07-09T21:46:29.789Z",
      "category": "tip",
      "comment": "点评：当 AI 生成内容成为信息流常态，稀缺的将不是写作能力而是可信信号：来源、经验、证据和独特判断。内容平台也会面临分发质量与用户信任的再平衡。",
      "advice": "建议：内容团队优先强化一手案例、署名责任、引用链和编辑校验；平台方则应给读者可理解的来源提示和反馈机制，而不是只依赖检测分数。"
    },
    {
      "topic": "model",
      "title": "OpenAI 发布最强模型与最佳博文",
      "source": "X：Sam Altman (@sama)",
      "url": "https://x.com/sama/status/2075266471316615436",
      "date": "2026-07-10",
      "score": 72,
      "tags": [
        "AI HOT",
        "OpenAI",
        "GPT",
        "模型"
      ],
      "summary": "显然是我们有史以来最好的模型，也是我们写得最好的博文之一： https://openai.com/index/gpt-5-6/",
      "publishedAt": "2026-07-09T17:10:58.000Z",
      "category": "ai-models",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：不要只做问答 Demo，优先用真实长文档、代码仓库、多轮工具调用和成本曲线来评测。"
    },
    {
      "topic": "model",
      "title": "蚂蚁灵波开源全球首个面向具身智能的MoE视频基模LingBot-Video",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/974/517.htm",
      "date": "2026-07-10",
      "score": 72,
      "tags": [
        "AI HOT",
        "开源",
        "推理",
        "机器人",
        "模型"
      ],
      "summary": "蚂蚁灵波科技正式开源LingBot-Video，这是全球首个基于MoE架构、面向具身智能的视频生成基础模型。总参数30B，推理时仅激活约3B，效率较同规模Dense架构提升约3倍。模型引入7万小时VLA、VLN、Ego等机器人数据，并通过多维强化学习奖励系统对齐物理合理性与任务完成度。在RBenc…",
      "publishedAt": "2026-07-09T07:06:00.000Z",
      "category": "ai-models",
      "comment": "点评：面向具身智能的视频模型强调的不是视觉效果，而是动作、物理约束和任务完成度。若能稳定建模失败与反馈，它会成为机器人训练和仿真的重要数据层。",
      "advice": "建议：用明确的物理任务和失败案例评测视频模型，重点检查动作可执行性、跨帧一致性、仿真到真实的偏差和数据授权边界。"
    },
    {
      "topic": "safety",
      "title": "Bun 被 Anthropic 收购后用 Rust 重写，月下载超 2200 万",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://bun.com/blog/bun-in-rust",
      "date": "2026-07-10",
      "score": 71,
      "tags": [
        "AI HOT",
        "Anthropic",
        "Claude",
        "Claude Code",
        "观点"
      ],
      "summary": "Bun 于 2025 年 12 月被 Anthropic 收购，作者使用预发布版 Claude Fable 5 进行了大量 Rust 重写。Bun 最初用 Zig 在一年内构建，如今 CLI 月下载超 2200 万，被 Claude Code 等采用。广泛功能带来稳定性挑战，v1.3.14 修复了…",
      "publishedAt": "2026-07-09T21:46:21.422Z",
      "category": "tip",
      "comment": "点评：Bun 的 Rust 重写说明 Agent 已能参与大型工程迁移，但“模型写了多少”不应替代架构、性能、兼容性和维护成本的审查。AI 更适合加速重构，而非取消工程责任。",
      "advice": "建议：用 AI 做语言迁移时按模块切分，保留基准测试、兼容性测试、人工代码审查和可逆提交；不要把大规模重写一次性推入主分支。"
    },
    {
      "topic": "model",
      "title": "Cognition 推出 SWE-1.7，接近 GPT 5.5 与 Opus 智能水平",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://cognition.com/blog/swe-1-7",
      "date": "2026-07-10",
      "score": 71,
      "tags": [
        "AI HOT",
        "GPT",
        "Kimi",
        "模型"
      ],
      "summary": "Cognition 发布迄今最强模型 SWE-1.7，基于 Kimi K2.7 基座训练，通过强化学习管线改进（基础设施、训练稳定性、数据质量、长程任务技术）实现前沿智能水平并大幅降低成本。在 FrontierCode 1.1 Main 基准上达 42.3%（Kimi K2.7 Code 为 30…",
      "publishedAt": "2026-07-09T21:46:17.901Z",
      "category": "ai-models",
      "comment": "点评：代码模型的竞争越来越像系统工程：训练数据、长程任务、工具调用和成本控制共同决定体验。单一基准接近旗舰模型，不等于真实仓库中的端到端交付已同等可靠。",
      "advice": "建议：把新代码模型放进带测试、代码审查和回滚的真实仓库任务中对比；同时记录成功率、人工返工时长、成本和安全例外。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
      "url": "https://openai.com/index/chatgpt-for-your-most-ambitious-work",
      "note": "OpenAI 推出 ChatGPT Work：可跨应用自主工作的 AI 智能体"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://microsoft.github.io/flint-chart",
      "note": "微软发布Flint：面向AI智能体的可视化语言"
    },
    {
      "name": "公众号：龙猫LongCat（美团）",
      "url": "https://mp.weixin.qq.com/s/iCq4jVlTdKOt74zAMYIIdw",
      "note": "美团 LongCat-2.0 正式开源，同步开放国产卡推理代码"
    },
    {
      "name": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/09/elon-musk-praises-mythos-fable-promises-not-to-cut-off-anthropic",
      "note": "Elon Musk称赞Anthropic并承诺不切断其算力"
    },
    {
      "name": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/09/can-ai-answer-the-3-trillion-question",
      "note": "AI 能否回答 3 万亿美元的问题？"
    },
    {
      "name": "Anthropic：Newsroom（网页）",
      "url": "https://www.anthropic.com/news/reflect-with-claude",
      "note": "Claude 推出反思功能（Beta）"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/974/508.htm",
      "note": "蚂蚁灵波开源实时交互世界模型 LingBot-World 2.0"
    }
  ]
};

const episodeHistory = [
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
