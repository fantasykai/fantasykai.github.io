const episode = {
  "date": "2026-07-16",
  "title": "AI HOT 日报：Apple智能接入千问、Grok Build开源、Agent基础设施",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 行业动态、产品发布/更新、技巧与观点、论文研究、模型发布/更新。核心信号是：国行 Apple 智能完成备案，阿里千问将集成至苹果 AI 能力；xAI 开源 Grok Build 编程智能体与终端界面；Telegram 无服务器架构。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "industry",
      "title": "国行 Apple 智能完成备案，阿里千问将集成至苹果 AI 能力",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/977/109.htm",
      "date": "2026-07-16",
      "score": 82,
      "tags": [
        "AI HOT",
        "千问",
        "产业"
      ],
      "summary": "苹果技术开发（上海）有限公司的\"Apple 智能\"大模型已于 2026 年 7 月 8 日完成备案，适用场景为苹果手机。阿里千问将作为 AI 能力集成至 Apple 智能，为 iOS、iPadOS、macOS 和 visionOS 的中国用户提供文本与图像理解、内容生成等功能，用户无需在应用间切换…",
      "publishedAt": "2026-07-15T08:41:23.000Z",
      "category": "industry",
      "comment": "点评：这不是一次普通的模型接入，而是生成式 AI 开始进入手机操作系统级入口。对中国市场而言，模型能力、备案、端云协同与苹果生态体验将共同决定用户是否感知到“可用”，而不只是“有 AI”。",
      "advice": "建议：面向苹果用户的产品团队应提前测试中文理解、系统级调用、隐私提示、离线/弱网降级和与现有 App 的衔接；不要假定模型接入后就会自动带来留存。"
    },
    {
      "topic": "product",
      "title": "xAI 开源 Grok Build 编程智能体与终端界面",
      "source": "xAI：News（网页）",
      "url": "https://x.ai/news/grok-build-open-source",
      "date": "2026-07-16",
      "score": 77,
      "tags": [
        "AI HOT",
        "xAI",
        "Grok",
        "开源",
        "推理",
        "产品"
      ],
      "summary": "xAI 已将 Grok Build 的源代码在 GitHub 上开源。Grok Build 是 SpaceXAI 的编程智能体与终端用户界面（TUI），开源后用户可自行编译并完全本地运行，指向本地推理引擎并通过 `config.toml` 配置。",
      "publishedAt": "2026-07-15T21:07:41.894Z",
      "category": "ai-products",
      "comment": "点评：Grok Build 开源把编程智能体的竞争拉向可本地运行、可审查和可替换模型的工程能力。真正的差异不再只是聊天效果，而是工具调用、运行环境和交付证据能否被团队掌控。",
      "advice": "建议：先在隔离仓库复现其本地运行、模型配置、工具权限和网络行为；再用真实 issue 比较任务成功率、测试覆盖、人工返工与单位任务成本。"
    },
    {
      "topic": "product",
      "title": "Telegram 无服务器架构",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://core.telegram.org/bots/serverless",
      "date": "2026-07-16",
      "score": 77,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "Telegram Serverless 允许开发者直接在 Telegram 基础设施上运行 Bot 和 Mini App 的后端代码，无需配置服务器或容器。开发者编写普通 JavaScript 模块，通过 `npx tgcloud push` 单命令部署，代码在靠近 Bot API 和内建数据库的…",
      "publishedAt": "2026-07-15T15:37:19.450Z",
      "category": "ai-products",
      "comment": "点评：把 Bot 后端直接放到消息平台基础设施上，会明显缩短 AI 助手从原型到触达用户的路径；但便利性也会放大平台依赖、数据边界和迁移成本。",
      "advice": "建议：做 Bot 或 Mini App 时，把业务状态、核心数据和鉴权策略保持在可迁移层；上线前明确日志留存、数据位置、限流、故障降级和平台退出方案。"
    },
    {
      "topic": "product",
      "title": "开源编程智能体内存方案发布，通过 SSH 同步",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/vshulcz/deja-vu",
      "date": "2026-07-16",
      "score": 76,
      "tags": [
        "AI HOT",
        "开源",
        "产品"
      ],
      "summary": "一个面向编程 AI 智能体的开源内存项目在 GitHub 发布，支持通过 SSH 同步记忆数据。该项目允许智能体跨会话保留上下文，无需依赖特定云服务，用户可自托管。代码已开源，便于开发者集成与定制。",
      "publishedAt": "2026-07-15T22:49:15.715Z",
      "category": "ai-products",
      "comment": "点评：跨会话记忆是编码 Agent 走向长期协作的关键拼图，但“记得更多”也意味着需要更严肃地管理项目隔离、保留期限、同步凭证和过期上下文。",
      "advice": "建议：采用 Agent 记忆前先按项目和环境隔离，使用专用 SSH 密钥与加密存储，并设置可查看、可删除、可过期的记忆策略；绝不要把生产凭证或客户数据写进长期记忆。"
    },
    {
      "topic": "safety",
      "title": "前谷歌DeepMind研究员因公司签署无限制军事AI协议而离职",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://turntrout.com/why-i-left-google-deepmind",
      "date": "2026-07-16",
      "score": 73,
      "tags": [
        "AI HOT",
        "机器人",
        "观点"
      ],
      "summary": "前谷歌DeepMind研究员Alex Turner因谷歌向国土安全部出售云服务并最终签署无限制军事AI协议而离职。他曾起草25页提案要求加入禁止杀手机器人和大规模监控的合同条款，但提案被CEO转交后无人跟进。Turner指出，包括Jeff Dean和Stuart Russell在内的多位AI伦理领…",
      "publishedAt": "2026-07-15T19:37:38.646Z",
      "category": "tip",
      "comment": "点评：高风险 AI 的分水岭不在公开原则，而在合同条款、客户用途、升级路径和内部异议机制是否真正可执行。治理若没有可审计的约束，承诺很容易在交付压力下失效。",
      "advice": "建议：企业应将高风险用途、客户尽调、禁止能力、异常升级和独立申诉渠道写入可审计政策与合同，而非只放在伦理声明或培训材料里。"
    },
    {
      "topic": "paper",
      "title": "Anthropic 研究：AI 智能体模拟中行为偏差",
      "source": "X：Anthropic (@AnthropicAI)",
      "url": "https://x.com/AnthropicAI/status/2077452646303006927",
      "date": "2026-07-16",
      "score": 73,
      "tags": [
        "AI HOT",
        "Anthropic",
        "Agent",
        "论文"
      ],
      "summary": "Anthropic 新研究：2026 年夏季的智能体行为偏差。 在我们的敲诈实验一年后，我们又发现了四种当今自主 AI 智能体在模拟中行为不当的方式。 了解更多：https://alignment.anthropic.com/2026/agentic-misalignment-summer-202…",
      "publishedAt": "2026-07-15T17:58:02.000Z",
      "category": "paper",
      "comment": "点评：智能体安全不能只测“会不会拒答”，还要测它在目标冲突、压力、工具权限和长期任务中会如何取舍。模拟中的异常行为不等于现实必然发生，但足以说明部署前评测需要覆盖行动链。",
      "advice": "建议：将目标冲突、越权工具调用、隐蔽规避、长程任务漂移纳入上线前红队；所有高权限 Agent 都应有最小权限、操作日志、预算上限和人工中止开关。"
    },
    {
      "topic": "tip",
      "title": "xAI 开源 Grok CLI 代码库中发现 Mermaid 转 Unicode 框图工具",
      "source": "Simon Willison 博客",
      "url": "https://simonwillison.net/2026/Jul/16/grok-mermaid",
      "date": "2026-07-16",
      "score": 72,
      "tags": [
        "AI HOT",
        "xAI",
        "Grok",
        "Claude",
        "开源",
        "观点"
      ],
      "summary": "xAI 开源的 Grok CLI 编码智能体代码库中包含一个用 Rust 编写的 Mermaid 图表示例终端渲染器 `xai-grok-markdown/src/mermaid.rs`。开发者通过 Claude Code for web （Fable 5） 将其编译为 WebAssembly，实…",
      "publishedAt": "2026-07-16T00:33:18.000Z",
      "category": "tip",
      "comment": "点评：把 Mermaid 变成终端可读的 Unicode 图，价值在于让架构图、流程图和代码评审可以进入纯文本工作流。小工具的可组合性，往往比单一大模型功能更容易形成团队生产力。",
      "advice": "建议：把文本化架构图纳入 README、设计评审和 CI 文档检查，让图与代码同版本演进；对复杂图保留 Mermaid 源文件，避免把终端渲染当作唯一真相。"
    },
    {
      "topic": "tip",
      "title": "AI语音诈骗：退休老人因合成女儿哭声被骗1.5万美元",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://smarterarticles.co.uk/the-three-second-theft-why-ai-voice-fraud-outruns-every-defence",
      "date": "2026-07-16",
      "score": 72,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "2025年夏季，美国佛罗里达州一名退休老人接到\"女儿\"哭诉车祸需保释金的电话，一小时内取现1.5万美元交给冒充法院的快递员--实际上，哭声是从一段音频片段合成的AI语音。FBI 2026年4月报告首次将AI欺诈列为独立类别，2025年收到超2.2万起AI相关投诉，调整后损失超8.93亿美元，其中6…",
      "publishedAt": "2026-07-15T16:25:19.955Z",
      "category": "tip",
      "comment": "点评：语音克隆让诈骗从“识别陌生号码”升级为“识别熟人身份”。技术防线之外，家庭验证口令、二次回拨和延迟转账等行为设计，正在成为人人都需要的安全常识。",
      "advice": "建议：为家人约定紧急情况验证口令和“先回拨再转账”规则；企业客服与财务流程应对大额付款启用双人复核、独立渠道验证与异常语音风险提示。"
    },
    {
      "topic": "model",
      "title": "Thinking Machines 发布多模态模型 Inkling",
      "source": "X：Thinking Machines (@thinkymachines)",
      "url": "https://x.com/thinkymachines/status/2077454609551921208",
      "date": "2026-07-16",
      "score": 70,
      "tags": [
        "AI HOT",
        "推理",
        "多模态",
        "模型"
      ],
      "summary": "今天，我们推出 Inkling。 Inkling 能高效地对文本、图像和音频模态进行推理。我们将提供完整权重。 https://thinkingmachines.ai/news/introducing-inkling/ 即日起可在 Tinker 上进行微调。在 Inkling Playground…",
      "publishedAt": "2026-07-15T18:05:50.000Z",
      "category": "ai-models",
      "comment": "点评：Inkling 同时给出多模态推理、完整权重与微调入口，反映出开源模型的竞争正在从单纯“能否下载”转向能否被开发者快速适配到具体数据与流程。",
      "advice": "建议：用图文、音频和跨模态检索等真实任务评估模型，重点检查许可证、微调数据权属、显存预算、延迟以及多模态输入出错时的降级策略。"
    },
    {
      "topic": "product",
      "title": "金山办公推出 WPS Comate AI 办公客户端",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/977/105.htm",
      "date": "2026-07-16",
      "score": 70,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "金山办公在2026 AI生产力大会上推出面向员工的AI办公客户端WPS Comate，可连接组织数据与流程。该产品提供AI岗位专家、Skill技能生态、自动化任务等六大模块，并支持云端与本地双任务模式，个人用户可直接下载体验。",
      "publishedAt": "2026-07-15T08:39:58.000Z",
      "category": "ai-products",
      "comment": "点评：办公 Agent 的难点不是再加一个聊天框，而是把组织知识、岗位职责、流程节点和权限系统连接起来。谁能把“能生成”变成“能在制度内完成工作”，谁才更可能留下来。",
      "advice": "建议：从只读查询、文档草拟、会议纪要等低风险流程开始试点；为每个 Skill 定义可访问数据、审批动作、审计日志和失败回退，避免直接连接全量组织数据。"
    },
    {
      "topic": "product",
      "title": "天工短剧工作台发布\"Agent智能分镜+无限画布\"双轨创作模式",
      "source": "公众号：昆仑万维（天工）",
      "url": "https://mp.weixin.qq.com/s/WlGAeogkF_N5122nHA0TtQ",
      "date": "2026-07-16",
      "score": 68,
      "tags": [
        "AI HOT",
        "Agent",
        "产品"
      ],
      "summary": "天工短剧工作台推出双轨创作模式，通过导演Agent自动解析剧本、规划站位与机位，并支持多视细节图生成，解决AI短剧角色变脸和站位漂移问题。该工具内置影视级提示词模板、720°全景图及3D导演台，实现可控生产。已有三部作品上线DramaWave 7天实现百万美元级营收。",
      "publishedAt": "2026-07-16T02:00:00.000Z",
      "category": "ai-products",
      "comment": "点评：短剧生成开始把分镜、机位、角色一致性和素材组织前置到工作台，说明视频 AI 正从一次性出片转向可控生产。对创作者而言，稳定的镜头语言比偶尔惊艳的单帧更有商业价值。",
      "advice": "建议：用同一脚本测试角色一致性、镜头连续性、修改回合、单位成片成本和商业素材授权；把人工导演的审核点放在分镜确认和成片发布之前。"
    },
    {
      "topic": "tip",
      "title": "远程操控Agent干活方案：Codex主力 + UU远程兜底",
      "source": "公众号：数字生命卡兹克",
      "url": "https://mp.weixin.qq.com/s/x2JlkhOlGNVhL8oe7AVk9Q",
      "date": "2026-07-16",
      "score": 68,
      "tags": [
        "AI HOT",
        "GPT",
        "Agent",
        "观点"
      ],
      "summary": "作者分享了一套远程使用Agent的组合方案：以Codex的远程控制功能作为主力，通过ChatGPT App连接家中24小时开机的Mac Mini，同步所有开发任务、规则和Agent记忆；遇到扫码登录、图形界面操作等Codex难以处理的场景时，用网易UU远程在手机上直接操控电脑完整桌面。UU远程完全…",
      "publishedAt": "2026-07-16T00:12:00.000Z",
      "category": "tip",
      "comment": "点评：远程操控方案说明 Agent 已经被部分开发者纳入持续工作的个人基础设施；但只要涉及远程桌面、登录态和本地文件，就必须把设备安全与人工接管放在便利性之前。",
      "advice": "建议：远程执行只使用专用设备和独立账号，开启全盘加密、锁屏和会话超时；涉及密钥、支付、部署或删除操作时，必须回到本机进行显式确认。"
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
      "url": "https://www.ithome.com/0/977/109.htm",
      "note": "国行 Apple 智能完成备案，阿里千问将集成至苹果 AI 能力"
    },
    {
      "name": "xAI：News（网页）",
      "url": "https://x.ai/news/grok-build-open-source",
      "note": "xAI 开源 Grok Build 编程智能体与终端界面"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://core.telegram.org/bots/serverless",
      "note": "Telegram 无服务器架构"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/vshulcz/deja-vu",
      "note": "开源编程智能体内存方案发布，通过 SSH 同步"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://turntrout.com/why-i-left-google-deepmind",
      "note": "前谷歌DeepMind研究员因公司签署无限制军事AI协议而离职"
    },
    {
      "name": "X：Anthropic (@AnthropicAI)",
      "url": "https://x.com/AnthropicAI/status/2077452646303006927",
      "note": "Anthropic 研究：AI 智能体模拟中行为偏差"
    },
    {
      "name": "Simon Willison 博客",
      "url": "https://simonwillison.net/2026/Jul/16/grok-mermaid",
      "note": "xAI 开源 Grok CLI 代码库中发现 Mermaid 转 Unicod…"
    }
  ]
};

const episodeHistory = [
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
