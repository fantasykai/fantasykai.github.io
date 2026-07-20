const episode = {
  "date": "2026-07-20",
  "title": "AI HOT 日报：transcribe、不会代码也能做产品、黄仁勋访日",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 产品发布/更新、技巧与观点、行业动态、模型发布/更新。核心信号是：transcribe.cpp 发布：基于 ggml 的跨平台语音转录库，支持 16 个 ASR 模型族；不会代码也能做产品：一份从0开始的Vibe Coding保姆级教程；黄仁勋访日：Nvidia 联手日本打造物理 AI 时代，Noetra 主权 AI 工厂与 Cosmos 机器人联盟落地。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "product",
      "title": "transcribe.cpp 发布：基于 ggml 的跨平台语音转录库，支持 16 个 ASR 模型族",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://workshop.cjpais.com/projects/transcribe-cpp",
      "date": "2026-07-20",
      "score": 78,
      "tags": [
        "AI HOT",
        "Meta",
        "产品"
      ],
      "summary": "transcribe.cpp v0.1.0 发布，一个基于 ggml 的语音转录库，支持 16 个 ASR 模型族（60+ 模型），并通过 Vulkan、Metal、CUDA 和 TinyBLAS 实现 GPU 加速。",
      "publishedAt": "2026-07-19T02:49:15.657Z",
      "category": "ai-products",
      "comment": "点评：本地语音转录正在从单一 Whisper 工具走向多模型、跨硬件的基础库形态。对播客、会议纪要和客服质检来说，离线部署、批量吞吐和模型可替换性会比单次 Demo 更关键。",
      "advice": "建议：音频团队可用同一批中文、英文、噪声、多人会议样本横测不同 ASR 模型，记录字错率、时间戳质量、吞吐、显存/CPU 占用和离线部署成本，再决定是否替换现有转写链路。"
    },
    {
      "topic": "tip",
      "title": "不会代码也能做产品：一份从0开始的Vibe Coding保姆级教程",
      "source": "公众号：数字生命卡兹克",
      "url": "https://mp.weixin.qq.com/s/EeHjsju08ARLbwtwFcViqg",
      "date": "2026-07-20",
      "score": 76,
      "tags": [
        "AI HOT",
        "Kimi",
        "Qwen",
        "Agent",
        "观点"
      ],
      "summary": "本文面向零代码用户，提供一套使用国产大模型（Kimi、GLM、Qwen等）从零开发并上线产品的完整流程。核心步骤包括购买Coding Plan、下载官方Agent编程产品、注册域名与服务器并同步做ICP备案，然后通过Agent的Plan模式描述需求并让AI自动执行开发。上线后建议建立分支保护与测试…",
      "publishedAt": "2026-07-20T00:08:00.000Z",
      "category": "tip",
      "comment": "点评：Vibe Coding 的门槛下降，会让更多非工程背景的人直接进入产品验证；但“能上线”不等于“可维护”，真正的分水岭是需求拆解、测试、分支保护、数据安全和持续迭代。",
      "advice": "建议：非技术创业者先把需求写成一页 PRD、验收清单和数据权限表；让 Agent 小步生成、小步测试，并在上线前补齐分支保护、备份、监控、ICP备案和人工回滚方案。"
    },
    {
      "topic": "industry",
      "title": "黄仁勋访日：Nvidia 联手日本打造物理 AI 时代，Noetra 主权 AI 工厂与 Cosmos 机器人联盟落地",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/19/what-to-watch-for-after-jensen-huangs-japan-visit",
      "date": "2026-07-20",
      "score": 75,
      "tags": [
        "AI HOT",
        "Nvidia",
        "机器人",
        "产业"
      ],
      "summary": "Nvidia CEO 黄仁勋在 7 月 15-16 日访日期间，宣布为日本建设\"Vera Rubin AI 工厂\"，配备 13，750 颗 Vera CPU 和 27，500 颗 Rubin GPU，预计 2028 年投运。",
      "publishedAt": "2026-07-19T21:16:07.000Z",
      "category": "industry",
      "comment": "点评：Nvidia 与日本的合作说明 AI 基础设施正在与国家产业战略、机器人和主权算力绑定。未来竞争不只是买 GPU，而是能否把算力、电力、软件生态和本地行业场景组织成长期能力。",
      "advice": "建议：关注日本制造、机器人和工业软件场景的团队，可以跟踪 Cosmos、Omniverse、合成数据和本地算力服务；做预算时同步评估能源、网络、人才和供应商锁定风险。"
    },
    {
      "topic": "model",
      "title": "Qwen3.8 开源发布，2.4T 参数模型上线",
      "source": "X：通义千问 / Qwen (@Alibaba_Qwen)",
      "url": "https://x.com/Alibaba_Qwen/status/2078754377473601787",
      "date": "2026-07-20",
      "score": 75,
      "tags": [
        "AI HOT",
        "Qwen",
        "开源",
        "模型"
      ],
      "summary": "Qwen3.8 即将发布并很快开源权重！🌐 该模型拥有 2.4T 海量参数，正在持续进化。我们相信它是目前最强大的模型之一，可与领先的前沿 AI 模型媲美，仅次于 Fable 5。 你无需等待即可测试。就在刚才，Qwen3.8-Max-Preview 已在阿里巴巴的 Token Plan、Qod…",
      "publishedAt": "2026-07-19T08:10:39.000Z",
      "category": "ai-models",
      "comment": "点评：Qwen3.8 把国产开源模型继续推向超大参数与前沿对标区间。对企业来说，关注点应从“参数有多大”转向中文长上下文、代码、工具调用、部署成本和许可证能否支撑真实业务。",
      "advice": "建议：把 Qwen3.8 放进真实中文任务集评测：长文档问答、代码修改、函数调用、多轮 Agent、成本和延迟；如果考虑私有化，还要提前核查权重、许可证、推理栈和芯片适配。"
    },
    {
      "topic": "product",
      "title": "ChatGPT Work 功能：建站、邮件、文档处理",
      "source": "X：Tibo (@thsottiaux)",
      "url": "https://x.com/thsottiaux/status/2078697631019303273",
      "date": "2026-07-20",
      "score": 75,
      "tags": [
        "AI HOT",
        "GPT",
        "产品"
      ],
      "summary": "ChatGPT Work 适用于 ✅ 创建和托管网站 ✅ 为你管理电子邮件 ✅ 总结海量文档 ✅ 制作一流的文档、表格和幻灯片 已在你的移动应用或 http://chatgpt.com 上提供，包含在 Plus、Pro、Business 和 Enterprise 套餐中。",
      "publishedAt": "2026-07-19T04:25:10.000Z",
      "category": "ai-products",
      "comment": "点评：ChatGPT Work 把通用助手进一步推向跨应用执行入口。它的价值不在于能做多少种任务，而在于每个任务是否有清晰权限、可回滚输出和人类确认边界。",
      "advice": "建议：先选择一个低风险办公流程试点，例如资料汇总或草稿生成；明确邮箱、文档、网站托管等连接器的读写边界，并把发送邮件、发布页面、删除文件设为人工确认动作。"
    },
    {
      "topic": "industry",
      "title": "Ollama 获 8800 万美元融资，加速开放模型生态发展",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://ollama.com/blog/all-aboard-open-models",
      "date": "2026-07-20",
      "score": 73,
      "tags": [
        "AI HOT",
        "推理",
        "产业"
      ],
      "summary": "Ollama 宣布完成 8800 万美元融资，由 Benchmark、Theory Ventures 和 8VC 等领投。该平台已服务 890 万开发者，并被 85% 的财富 500 强企业使用，其云端 token 用量月均翻倍。资金将用于支持无缝混合推理、新模型发布当日集成，以及让开发者在不牺牲…",
      "publishedAt": "2026-07-20T01:45:09.765Z",
      "category": "industry",
      "comment": "点评：Ollama 融资体现了开放模型生态的基础设施价值：开发者希望在本地、云端和混合推理之间自由切换。模型越来越多以后，分发、更新、兼容和隐私边界本身会成为平台能力。",
      "advice": "建议：开发团队可把 Ollama 作为本地/云端模型评测入口，但要统一模型版本、Prompt、测试集和日志；生产场景还需补齐权限、镜像来源、更新策略和隐私审计。"
    },
    {
      "topic": "model",
      "title": "昆仑万维宣布2026为\"世界模型元年\"，发布Matrix-Game 3.5等模型",
      "source": "公众号：昆仑万维（天工）",
      "url": "https://mp.weixin.qq.com/s/LidvGePhOOoUY3KTor_w9g",
      "date": "2026-07-20",
      "score": 72,
      "tags": [
        "AI HOT",
        "开源",
        "模型"
      ],
      "summary": "昆仑万维董事长方汉在WAIC上宣布2026年为\"世界模型元年\"，并发布Matrix-Game 3.5世界模型、Mureka v9.5与O3音乐模型。Matrix-Game 3.5实现Patch级记忆注入，5B模型在720p分辨率下单卡可达20FPS实时生成，核心架构已开源。",
      "publishedAt": "2026-07-19T12:35:56.000Z",
      "category": "ai-models",
      "comment": "点评：世界模型叙事正在从概念展示走向实时生成、游戏交互和内容生产工具链。关键不只是 720p 或 20FPS，而是场景一致性、可控编辑、版权素材和下游应用能否闭环。",
      "advice": "建议：内容和游戏团队可用短脚本验证世界模型的连续性、镜头控制、交互延迟、素材授权和二次编辑成本；不要只看单条演示视频的视觉冲击力。"
    },
    {
      "topic": "model",
      "title": "面壁智能开源 MiniCPM-Robot 具身智能模型系列",
      "source": "X：面壁智能 OpenBMB (@OpenBMB)",
      "url": "https://x.com/OpenBMB/status/2078839529591759025",
      "date": "2026-07-20",
      "score": 71,
      "tags": [
        "AI HOT",
        "开源",
        "推理",
        "机器人",
        "模型"
      ],
      "summary": "面壁智能开源首个具身AI模型系列 MiniCPM-Robot，包含 1.5B 参数的通用视觉-语言-动作（VLA）模型 MiniCPM-RobotManip 和用于目标跟踪的 MiniCPM-RobotTrack。同时发布高性能推理框架 PhyAI，旨在让机器人实现理解、记忆与行动。",
      "publishedAt": "2026-07-19T13:49:01.000Z",
      "category": "ai-models",
      "comment": "点评：MiniCPM-Robot 指向小模型在机器人上的实用路线：理解、记忆、目标跟踪和动作执行需要在低延迟环境中协同。具身智能的胜负会更多取决于数据、推理框架和安全控制。",
      "advice": "建议：机器人团队先在仿真和低风险台架上测试抓取、跟踪、失败恢复与实时推理；所有真实设备测试都要设定速度限制、急停、日志回放和人工接管机制。"
    },
    {
      "topic": "tip",
      "title": "AI 热潮正在瓦解全球决策机制",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://ludic.mataroa.blog/blog/ai-mania-is-eviscerating-global-decision-making",
      "date": "2026-07-20",
      "score": 71,
      "tags": [
        "AI HOT",
        "机器人",
        "观点"
      ],
      "summary": "一位拥有 300 多次行业交流经验的从业者观察到，全球公私机构正陷入集体性 AI 狂热，决策层要么没有计划，要么只能低头回避。过去一年半中，其团队所见的所有 AI 项目均以失败告终（成功率 0%），失败原因常与 LLM 能力无关，而是企业本就难以有效运行软件项目，且 AI 项目叠加了额外风险。内部…",
      "publishedAt": "2026-07-19T05:13:24.607Z",
      "category": "tip",
      "comment": "点评：这条观点提醒我们，很多 AI 项目的失败不是模型不够强，而是组织原本就缺少清晰目标、数据流程和软件交付能力。AI 会放大管理问题，而不是自动修复管理问题。",
      "advice": "建议：启动 AI 项目前先做“反狂热”检查：目标是否可量化、数据是否可用、流程是否有人负责、失败如何回滚、三个月内如何复盘 ROI；答不清就不要急着采购或扩招。"
    },
    {
      "topic": "model",
      "title": "MiniCPM5-2B发布：4B以下全球性能第一，适配9款芯片",
      "source": "公众号：面壁智能（MiniCPM）",
      "url": "https://mp.weixin.qq.com/s/rjFxrUylyGMqa5QtgypCdw",
      "date": "2026-07-20",
      "score": 68,
      "tags": [
        "AI HOT",
        "Qwen",
        "开源",
        "模型"
      ],
      "summary": "面壁智能联合OpenBMB发布端侧模型MiniCPM5-2B，以2B参数量在AA-Index榜单取得4B以下模型最高分17分，平均分54.26，超越Qwen3.5-2B等竞品。模型原生支持混合思考与512K上下文，已完成华为昇腾、英伟达等9款芯片的Day0适配，即将开源。",
      "publishedAt": "2026-07-19T13:12:39.000Z",
      "category": "ai-models",
      "comment": "点评：MiniCPM5-2B 强调的是端侧小模型的性价比曲线：小参数、长上下文与多芯片适配组合起来，可能比更大模型更适合私有化、移动端和边缘设备场景。",
      "advice": "建议：端侧场景优先测试延迟、内存、功耗、上下文召回和离线安全；和云端大模型对比单位任务成本与失败率，再决定哪些任务适合下沉到本地。"
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
      "url": "https://workshop.cjpais.com/projects/transcribe-cpp",
      "note": "transcribe.cpp 发布：基于 ggml 的跨平台语音转录库，支持 …"
    },
    {
      "name": "公众号：数字生命卡兹克",
      "url": "https://mp.weixin.qq.com/s/EeHjsju08ARLbwtwFcViqg",
      "note": "不会代码也能做产品：一份从0开始的Vibe Coding保姆级教程"
    },
    {
      "name": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/19/what-to-watch-for-after-jensen-huangs-japan-visit",
      "note": "黄仁勋访日：Nvidia 联手日本打造物理 AI 时代，Noetra 主权 A…"
    },
    {
      "name": "X：通义千问 / Qwen (@Alibaba_Qwen)",
      "url": "https://x.com/Alibaba_Qwen/status/2078754377473601787",
      "note": "Qwen3.8 开源发布，2.4T 参数模型上线"
    },
    {
      "name": "X：Tibo (@thsottiaux)",
      "url": "https://x.com/thsottiaux/status/2078697631019303273",
      "note": "ChatGPT Work 功能：建站、邮件、文档处理"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://ollama.com/blog/all-aboard-open-models",
      "note": "Ollama 获 8800 万美元融资，加速开放模型生态发展"
    },
    {
      "name": "公众号：昆仑万维（天工）",
      "url": "https://mp.weixin.qq.com/s/LidvGePhOOoUY3KTor_w9g",
      "note": "昆仑万维宣布2026为\"世界模型元年\"，发布Matrix-Game 3.5等模型"
    }
  ]
};

const episodeHistory = [
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
