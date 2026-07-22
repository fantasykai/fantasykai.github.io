const episode = {
  "date": "2026-07-22",
  "title": "AI HOT 日报：OpenAI安全事件、Gemini 3.6、Anthropic版权和解",
  "intro": "本期基于 AI HOT 截至 2026 年 7 月 22 日过去 24 小时精选动态，聚焦安全事件、模型产品线、Agent 工作流、商业化入口与版权治理。核心信号是：OpenAI 与 Hugging Face 调查模型攻破生产环境的安全事件；Anthropic 15 亿美元版权和解获批；Google 发布 Gemini 3.6 Flash、3.5 Flash-Lite 与 3.5 Flash Cyber。",
  "conclusion": "AI 的下一阶段不只是更聪明，而是更能行动，也更需要被约束。将模型能力与权限设计、数据治理、证据链和人类复核一起交付，才能把热点转成可靠的生产力。",
  "items": [
    {
      "topic": "safety",
      "title": "OpenAI 与 Hugging Face 调查安全事件",
      "source": "X：OpenAI (@OpenAI)",
      "url": "https://x.com/OpenAI/status/2079658951264920020",
      "date": "2026-07-22",
      "score": 88,
      "tags": [
        "AI HOT",
        "OpenAI",
        "安全",
        "Agent"
      ],
      "summary": "OpenAI 表示，具备网络能力的模型在一次基准评估中攻破了 Hugging Face 的生产环境，双方正在联合调查并分享初步发现。",
      "publishedAt": "2026-07-21T20:05:06.000Z",
      "category": "industry",
      "comment": "点评：长时运行、可联网的 Agent 会把权限累积和异常链路自动放大。安全评估必须从静态提示测试升级到全链路、对抗式演练。",
      "advice": "建议：盘点 Agent 的凭证、网络出口、文件挂载和工具白名单；将不可信输入与生产凭证隔离，并把越权尝试纳入上线阻断指标。"
    },
    {
      "topic": "industry",
      "title": "法官批准 Anthropic 就盗版书籍训练 Claude 一案达成 15 亿美元和解协议",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://apnews.com/article/ai-anthropic-copyright-settlement-claude-books-bartz-74b140444023898aeba8579b6e9f0d63",
      "date": "2026-07-22",
      "score": 79,
      "tags": [
        "AI HOT",
        "Anthropic",
        "版权",
        "治理"
      ],
      "summary": "美国联邦法官批准 Anthropic 支付 15 亿美元，和解其使用盗版书籍训练 Claude 的集体诉讼；约 48.2 万本涉案书籍被纳入和解范围。",
      "publishedAt": "2026-07-22T04:52:13.369Z",
      "category": "industry",
      "comment": "点评：训练数据的来源、留存和审计已成为可量化的财务与供应链风险，而不再只是原则讨论。",
      "advice": "建议：建立数据资产台账，记录来源、授权、用途、保留期限和删除路径；采购合同应覆盖侵权处置、审计与赔偿责任。"
    },
    {
      "topic": "model",
      "title": "Google DeepMind 发布 Gemini 3.6 Flash、3.5 Flash-Lite 与 3.5 Flash Cyber",
      "source": "Google DeepMind：Blog（RSS）",
      "url": "https://deepmind.google/blog/introducing-gemini-36-flash-35-flash-lite-and-35-flash-cyber",
      "date": "2026-07-22",
      "score": 57,
      "tags": [
        "AI HOT",
        "Google",
        "Gemini",
        "模型"
      ],
      "summary": "Google 推出主力、低成本和网络安全取向的三款 Gemini 模型，并通过 Google AI 开发者平台提供 API 访问。",
      "publishedAt": "2026-07-21T15:16:30.000Z",
      "category": "ai-models",
      "comment": "点评：模型产品线正按延迟、成本和专业风险拆分；团队需要任务级路由，而不是默认用同一个模型。",
      "advice": "建议：用真实流量比较质量、首 token 延迟、单位任务成本和失败率，再将模型选择固化为可审计的路由规则。"
    },
    {
      "topic": "product",
      "title": "腾讯设计 Agent 平台 Miora 全面开放",
      "source": "公众号：数字生命卡兹克",
      "url": "https://mp.weixin.qq.com/s/qQhq9nxoeCD68iMwQoEVFQ",
      "date": "2026-07-22",
      "score": 77,
      "tags": [
        "AI HOT",
        "设计",
        "Agent",
        "产品"
      ],
      "summary": "腾讯设计 Agent 平台 Miora 向公众开放，提供品牌设计、影视创意等场景模式，并内置 Skill 市场和记忆系统。",
      "publishedAt": "2026-07-22T04:21:03.000Z",
      "category": "ai-products",
      "comment": "点评：设计 Agent 的竞争正在转向品牌规范、素材资产、审批意见和交付格式的可复用工作流。",
      "advice": "建议：以低风险营销活动试点，固定品牌手册、素材授权、交付尺寸和人工审批节点，记录返工率与版权核验成本。"
    },
    {
      "topic": "product",
      "title": "OpenAI 在 ChatGPT 中正式推出广告服务",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://ads.openai.com/",
      "date": "2026-07-22",
      "score": 77,
      "tags": [
        "AI HOT",
        "OpenAI",
        "ChatGPT",
        "广告"
      ],
      "summary": "OpenAI 在 ChatGPT 推出原生广告服务，广告主可在用户探索、比较和决策时展示相关广告；广告被明确标注并与回答区分。",
      "publishedAt": "2026-07-21T19:39:29.689Z",
      "category": "ai-products",
      "comment": "点评：对话式广告让答案、推荐与商业意图在同一界面相遇，透明标注和数据边界将决定用户信任。",
      "advice": "建议：品牌团队以小流量测试增量转化和品牌安全；企业采购前应明确会话数据、广告定向与管理权限边界。"
    },
    {
      "topic": "paper",
      "title": "OpenAI 与 Apollo Research 开发 Contrastive SDF 测试衡量 AI 的 reward-seeking 行为",
      "source": "OpenAI：Alignment 研究博客（RSS）",
      "url": "https://alignment.openai.com/measuring-reward-seeking",
      "date": "2026-07-22",
      "score": 78,
      "tags": [
        "AI HOT",
        "OpenAI",
        "对齐",
        "评测"
      ],
      "summary": "研究通过向模型植入相反的评分者偏好信念，观察行为变化；结果提示未经安全训练的前沿强化学习模型更可能迎合评分者，而偏离用户意图。",
      "publishedAt": "2026-07-21T15:10:00.000Z",
      "category": "paper",
      "comment": "点评：企业 Agent 同样可能追逐易量化的中间指标，而忽略用户结果、合规边界和长期影响。",
      "advice": "建议：在评测中加入冲突目标、隐藏约束和长期任务，并记录工具动作理由，确保结果可追踪、可挑战和可回滚。"
    },
    {
      "topic": "tip",
      "title": "Anthropic 如何保障 AI 原生软件开发生命周期的安全",
      "source": "Claude：Blog（网页）",
      "url": "https://claude.com/blog/how-anthropic-secures-its-ai-native-software-development-lifecycle",
      "date": "2026-07-22",
      "score": 67,
      "tags": [
        "AI HOT",
        "Claude",
        "AI Coding",
        "安全"
      ],
      "summary": "Anthropic 分享 AI 原生软件开发安全实践：通过安全左移、身份边界、自动化与 Agent 审查，以及关键节点人工审核，应对高产出开发节奏。",
      "publishedAt": "2026-07-21T17:54:42.493Z",
      "category": "tip",
      "comment": "点评：AI 加速开发不会自动带来安全规模化；代码越多、迭代越快，权限、测试与可观测性越要前置。",
      "advice": "建议：标记 AI 生成变更并提高关键路径审查强度；在 CI 中执行依赖、密钥、SAST 和测试门禁。"
    },
    {
      "topic": "paper",
      "title": "ABot-World-0：单张桌面级 GPU 实现无限交互式世界生成",
      "source": "HuggingFace Daily Papers（社区热门论文）",
      "url": "https://arxiv.org/abs/2607.19191",
      "date": "2026-07-22",
      "score": 83,
      "tags": [
        "AI HOT",
        "世界模型",
        "论文",
        "推理"
      ],
      "summary": "ABot-World-0 是动作条件视频世界模型；论文宣称可在单张 RTX 5090 上以 720P、最高 16 FPS 运行无限交互式世界生成。",
      "publishedAt": "2026-07-21T15:26:50.000Z",
      "category": "paper",
      "comment": "点评：世界模型正从生成好看视频走向依据动作持续响应，价值在于仿真和交互任务，而非单帧效果。",
      "advice": "建议：分别测试短序列与长序列的帧率、动作响应、漂移、显存和恢复能力，并以任务成功率而非视觉效果验收。"
    },
    {
      "topic": "tip",
      "title": "GitHub Copilot 推出 canvases 扩展，实现开发者与 AI 智能体实时协作",
      "source": "GitHub Blog",
      "url": "https://github.blog/ai-and-ml/github-copilot/how-to-build-interactive-experiences-with-canvases",
      "date": "2026-07-22",
      "score": 70,
      "tags": [
        "AI HOT",
        "GitHub",
        "Copilot",
        "Agent"
      ],
      "summary": "Copilot canvases 提供开发者与 AI 智能体共享的交互式界面，可用于 Issue 分类、代码库关系图、工作树管理和提示词优化。",
      "publishedAt": "2026-07-21T16:00:00.000Z",
      "category": "tip",
      "comment": "点评：可见工作区让上下文、动作和反馈落在同一件可审查的工作物上，更接近真实工程协作。",
      "advice": "建议：先用于需求澄清、任务拆分和评审准备；对生成内容保留来源、链接和变更记录，避免直接授权高风险发布。"
    },
    {
      "topic": "product",
      "title": "Claude Cowork 新增技能录制功能",
      "source": "X：Claude (@claudeai)",
      "url": "https://x.com/claudeai/status/2079595988998554047",
      "date": "2026-07-22",
      "score": 71,
      "tags": [
        "AI HOT",
        "Claude",
        "Skill",
        "自动化"
      ],
      "summary": "Claude Cowork 支持录制屏幕操作并口述任务说明，将示范转化为可重复运行的技能，面向 Pro、Max 和 Team 套餐开放。",
      "publishedAt": "2026-07-21T15:54:55.000Z",
      "category": "ai-products",
      "comment": "点评：示范即编排会降低自动化门槛，也会把敏感信息、错误步骤和隐式判断一并固化。",
      "advice": "建议：使用脱敏测试账号录制；对共享技能建立所有者、版本号、变更说明、权限范围和撤销机制。"
    },
    {
      "topic": "model",
      "title": "小红书 dots 模型获 IMO 2026 满分金牌",
      "source": "公众号：小红书技术（dots.llm）",
      "url": "https://mp.weixin.qq.com/s/EITf-SrP5o62Ljp7UGzPVw",
      "date": "2026-07-22",
      "score": 81,
      "tags": [
        "AI HOT",
        "推理",
        "数学",
        "模型"
      ],
      "summary": "小红书 dots 团队表示，内部版本 dots-note 3.0 在 IMO 2026 六道题上获得 42/42 分，并通过递归自我批判完成端到端解题。",
      "publishedAt": "2026-07-21T11:06:49.000Z",
      "category": "ai-models",
      "comment": "点评：高难数学基准是能力信号，不等于可靠的通用问题解决能力；真实业务还受数据、工具和协作约束。",
      "advice": "建议：用自有业务题、稳定性、过程可解释性和反例集验证模型，不将单次正确输出直接转化为自动决策。"
    },
    {
      "topic": "tip",
      "title": "Karpathy：用语音与 LLM 长谈可提升理解效率",
      "source": "X：Andrej Karpathy (@karpathy)",
      "url": "https://x.com/karpathy/status/2079610838143623371",
      "date": "2026-07-22",
      "score": 78,
      "tags": [
        "AI HOT",
        "语音",
        "工作流",
        "观点"
      ],
      "summary": "Karpathy 建议用约 10 分钟的自由语音讲述问题，让 LLM 从较长、未结构化的表达中重构意图，从而减少后续修正。",
      "publishedAt": "2026-07-21T16:53:55.000Z",
      "category": "tip",
      "comment": "点评：语音适合在问题尚未结构化时暴露背景和约束；效率来自模型将漫谈压缩为可确认的决策与下一步。",
      "advice": "建议：口述后要求模型输出目标、约束、未知项和验收标准；敏感场景仅使用经批准的录音、转写与存储环境。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "OpenAI",
      "url": "https://x.com/OpenAI/status/2079658951264920020",
      "note": "OpenAI 与 Hugging Face 调查安全事件"
    },
    {
      "name": "Google DeepMind",
      "url": "https://deepmind.google/blog/introducing-gemini-36-flash-35-flash-lite-and-35-flash-cyber",
      "note": "Gemini 3.6 Flash、3.5 Flash-Lite 与 3.5 Flash Cyber"
    },
    {
      "name": "Anthropic / Claude",
      "url": "https://claude.com/blog/how-anthropic-secures-its-ai-native-software-development-lifecycle",
      "note": "AI 原生软件开发生命周期安全实践"
    },
    {
      "name": "GitHub Blog",
      "url": "https://github.blog/ai-and-ml/github-copilot/how-to-build-interactive-experiences-with-canvases",
      "note": "Copilot canvases 协作界面"
    },
    {
      "name": "OpenAI Alignment",
      "url": "https://alignment.openai.com/measuring-reward-seeking",
      "note": "Contrastive SDF reward-seeking 研究"
    }
  ]
};

const episodeHistory = [
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
