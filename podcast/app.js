const episode = {
  "date": "2026-07-14",
  "title": "AI HOT 日报：OpenAI、前沿模型实际成本、Meta",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 技巧与观点、行业动态、模型发布/更新。核心信号是：OpenAI 面向普通用户发布提示词指南：从结果出发，少写步骤；前沿模型实际成本：tokenizer 差异导致隐性涨价；Meta 宣布扩建路易斯安那州数据中心至 5GW，总投资超 500 亿美元。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "tip",
      "title": "OpenAI 面向普通用户发布提示词指南：从结果出发，少写步骤",
      "source": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/openais-new-prompting-guide-tells-users-to-stop-overthinking-and-start-with-the-result",
      "date": "2026-07-14",
      "score": 78,
      "tags": [
        "AI HOT",
        "OpenAI",
        "GPT",
        "观点"
      ],
      "summary": "OpenAI 整合了一份面向普通用户的提示词指南，涵盖目标、上下文、输出格式和边界四个可选模块。指南建议以结果而非步骤开头，用一两条硬性规则替代逐步骤脚本。Chat 处理快速任务，基于 Codex 技术和 GPT-5.6 模型的 ChatGPT Work 负责多源、多步骤的复杂项目。Codex 新…",
      "publishedAt": "2026-07-13T17:47:39.000Z",
      "category": "tip",
      "comment": "点评：OpenAI 这份指南的信号是提示词正在从“咒语工程”回到产品化表达：先说结果、补充上下文、限定边界，比堆复杂步骤更适合普通用户和企业流程沉淀。",
      "advice": "建议：团队可以把高频提示词模板改成“目标、上下文、输出格式、边界”四段式，并为每类任务保留好坏样例，让非技术成员也能稳定复用。"
    },
    {
      "topic": "tip",
      "title": "前沿模型实际成本：tokenizer 差异导致隐性涨价",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://playcode.io/blog/real-price-of-frontier-models",
      "date": "2026-07-14",
      "score": 77,
      "tags": [
        "AI HOT",
        "Anthropic",
        "Claude",
        "GPT",
        "观点"
      ],
      "summary": "同一份 TypeScript 文件在 GPT-5.x 上为 681 个 token，在 Claude 最新 tokenizer 下为 1，178 个，相差 1.73 倍。Anthropic 新 tokenizer 比旧版多产生约 30% 的 token，标价不变，构成隐性涨价。Claude Opu…",
      "publishedAt": "2026-07-13T21:50:30.963Z",
      "category": "tip",
      "comment": "点评：这条真正提醒的是模型成本不能只看标价。不同 tokenizer 会让同一份代码、文档和日志产生完全不同的计费结果，企业做模型路由时必须把“实际 token 化后成本”纳入评测。",
      "advice": "建议：模型评测要先用真实代码库、长文档和日志跑 tokenizer 统计，再比较单任务成本、成功率和返工率；不要只拿官网每百万 token 标价做采购决策。"
    },
    {
      "topic": "industry",
      "title": "Meta 宣布扩建路易斯安那州数据中心至 5GW，总投资超 500 亿美元",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/976/149.htm",
      "date": "2026-07-14",
      "score": 77,
      "tags": [
        "AI HOT",
        "Meta",
        "产业"
      ],
      "summary": "Meta 将其路易斯安那州数据中心算力扩至 5GW，总投资超 500 亿美元，为全球最大 AI 基础设施投资之一。Meta 承诺承担全部能源及水资源费用，并另投超 10 亿美元改善当地道路及供水系统。此外，Meta 与安特吉公司达成协议，为新建天然气发电厂、储能电池及核电增容项目提供资金支持。",
      "publishedAt": "2026-07-13T09:58:56.000Z",
      "category": "industry",
      "comment": "点评：Meta 的 5GW 数据中心把 AI 竞争拉到了能源、土地、水资源和电网层面。前沿模型的护城河不只在算法，也在能否长期获得低成本、可持续、可扩展的基础设施。",
      "advice": "建议：企业做 AI 基建规划时，把电力、冷却、水资源、网络、折旧和监管社区关系纳入模型；采购云算力也要评估供应商区域容量和长期价格稳定性。"
    },
    {
      "topic": "model",
      "title": "腾讯混元发布 HyOCR-1.5：端到端 OCR 大模型全栈开源，推理提速 6.37 倍",
      "source": "公众号：腾讯混元",
      "url": "https://mp.weixin.qq.com/s/vKFCa9FfoGBUGK8J1MhFag",
      "date": "2026-07-14",
      "score": 76,
      "tags": [
        "AI HOT",
        "Agent",
        "开源",
        "推理",
        "模型"
      ],
      "summary": "腾讯混元发布 HyOCR-1.5，这是端到端 OCR 大模型领域首个将训练、推理、模型权重完整开源的专家模型。仅 1B 参数，覆盖 8 种以上 text-centric 任务。引入 DFlash 投机解码框架，在 Transformers 下实现 6.37× 加速，vLLM 下 2.14× 加速，…",
      "publishedAt": "2026-07-13T11:12:59.000Z",
      "category": "ai-models",
      "comment": "点评：HyOCR-1.5 的价值在于把 OCR 从单点识别工具推进到可训练、可推理、可部署的开源专家模型。对文档自动化团队来说，速度、版面理解和可本地化部署同样关键。",
      "advice": "建议：有票据、合同、表格、截图处理需求的团队，可用自有样本测试版面还原、低质图鲁棒性、推理延迟和私有部署成本，再决定是否替换传统 OCR pipeline。"
    },
    {
      "topic": "tip",
      "title": "Seedream 5.0 Pro 测评：图像编辑门槛爆降",
      "source": "X：歸藏 (@op7418)",
      "url": "https://x.com/op7418/status/2076604797202161800",
      "date": "2026-07-14",
      "score": 75,
      "tags": [
        "AI HOT",
        "GPT",
        "豆包",
        "观点"
      ],
      "summary": "字节跳动发布 Seedream 5.0 Pro，图像质量与提示词理解追平 GPT-Image 2.0，综合能力仅次于后者。核心亮点是\"可编辑\"交互：用户可在图上打点、画框、涂鸦，提示词中直接 @ 标记，实现精准局部编辑（如换沙发、改墙面颜色），其他区域不变。实测案例涵盖家装改造（一次替换六件家具）…",
      "publishedAt": "2026-07-13T09:48:59.000Z",
      "category": "tip",
      "comment": "点评：Seedream 5.0 Pro 的重点是把图像生成从“写提示词抽卡”推进到可视化编辑。局部可控、区域不变和自然交互会直接降低设计、家装、营销素材的使用门槛。",
      "advice": "建议：把它放进真实设计流程试用：家装改造、商品图、海报和社媒素材分别测试局部一致性、文字准确性、人物/品牌保持和导出后可编辑性。"
    },
    {
      "topic": "model",
      "title": "商汤开源 SenseNova-Vision-7B-MoT 多任务视觉模型",
      "source": "X：商汤 SenseTime (@SenseTime_AI)",
      "url": "https://x.com/SenseTime_AI/status/2076828658531262619",
      "date": "2026-07-14",
      "score": 74,
      "tags": [
        "AI HOT",
        "开源",
        "模型"
      ],
      "summary": "商汤发布并完全开源 SenseNova-Vision-7B-MoT，一个统一处理检测、OCR、GUI、深度与法线估计、分割、多视图等主要视觉任务的模型。该模型支持通过自然语言定义新的视觉任务变体，跨传统任务边界重组视觉能力。开源内容包括模型权重及 SenseNova-Vision Corpus（含…",
      "publishedAt": "2026-07-14T00:38:32.000Z",
      "category": "ai-models",
      "comment": "点评：SenseNova-Vision-7B-MoT 指向视觉模型的“任务统一化”：检测、OCR、GUI、分割和几何理解开始被自然语言任务描述串起来，这会降低多视觉 pipeline 的集成复杂度。",
      "advice": "建议：视觉团队可以用统一任务描述评测跨任务能力，但仍要分场景检查检测精度、OCR 准确率、GUI 操作成功率、分割边界和许可证约束。"
    },
    {
      "topic": "industry",
      "title": "视频生成创企 PixVerse 完成 4.39 亿美元 C 轮扩展融资，估值超 20 亿美元",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/13/video-generation-startup-pixverse-raises-439m-valuation-soars-past-2b",
      "date": "2026-07-14",
      "score": 70,
      "tags": [
        "AI HOT",
        "产业"
      ],
      "summary": "新加坡视频生成初创公司 PixVerse 完成 C 轮扩展融资，共筹集 4.39 亿美元，估值突破 20 亿美元。公司提供 V 系列（消费者及 API）、C 系列（专业影视）及今年初发布的 R 系列世界模型（游戏开发）。用户可生成最高 4k 分辨率并自带音频的视频，消费端注册用户超 1.5 亿，月…",
      "publishedAt": "2026-07-14T00:00:00.000Z",
      "category": "industry",
      "comment": "点评：PixVerse 融资说明视频生成仍是资本最愿意押注的应用层赛道之一。消费端规模、API、影视工作流和世界模型叙事正在合流，但最终要看留存、单位生成成本和版权风险。",
      "advice": "建议：内容团队评估视频生成平台时，除画质外要看批量生产成本、版权与肖像授权、API 稳定性、素材可控性、后期编辑链路和商业使用条款。"
    },
    {
      "topic": "model",
      "title": "德国AI协会发布开源模型Soofi S，在英语和德语基准测试中领先",
      "source": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/german-ai-consortium-releases-soofi-s-an-open-30b-model-that-tops-benchmarks-in-both-english-and-german",
      "date": "2026-07-14",
      "score": 70,
      "tags": [
        "AI HOT",
        "开源",
        "模型"
      ],
      "summary": "德国AI协会协调的研究联盟发布开源大语言模型Soofi S 30B-A3B。该模型总参数量316亿，每个token仅激活约32亿参数，采用Mamba-2与标准注意力层混合的MoE架构。模型完全在德国电信慕尼黑工业AI云上训练，训练数据中德语占比从第一阶段的7.2%提升至第二阶段的15.3%。在基准…",
      "publishedAt": "2026-07-13T11:41:01.000Z",
      "category": "ai-models",
      "comment": "点评：Soofi S 的意义在于主权 AI 与语言覆盖。它不一定挑战最大闭源模型，但对欧洲企业和公共部门来说，训练地点、语言能力、开源权重和合规边界本身就是产品价值。",
      "advice": "建议：面向欧洲市场或德语场景的团队，应把本地语言、数据驻留、许可证、行业合规和部署成本纳入模型选型，而不是只看英文通用榜单。"
    },
    {
      "topic": "tip",
      "title": "面壁智能CTO曾国洋专访：端侧模型是AI落地关键路径",
      "source": "公众号：面壁智能（MiniCPM）",
      "url": "https://mp.weixin.qq.com/s/s75qDGt5iNqLXyMbjpwxeQ",
      "date": "2026-07-14",
      "score": 61,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "面壁智能CTO曾国洋指出，端侧模型是AI落地的关键路径。其原创方法论\"模型风洞\"可在小规模实验中预测完整训练效果，并基于\"知识密度\"提出\"面壁定律\"：知识密度每3.5个月翻一番。2B参数的MiniCPM表现优于同期8B竞品。面壁已完成高通、联发科、英特尔、英伟达、AMD等芯片适配，新发布的BitC…",
      "publishedAt": "2026-07-14T02:29:00.000Z",
      "category": "tip",
      "comment": "点评：面壁的端侧路线强调的是 AI 落地的另一条曲线：不是所有能力都上云，低延迟、隐私、本地成本和芯片适配会决定大量真实场景能否跑起来。",
      "advice": "建议：做端侧 AI 时先锁定设备、延迟、功耗、内存和隐私约束，用小模型真实任务集验证；同时规划云端兜底和端云协同，不要只追参数规模。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/openais-new-prompting-guide-tells-users-to-stop-overthinking-and-start-with-the-result",
      "note": "OpenAI 面向普通用户发布提示词指南：从结果出发，少写步骤"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://playcode.io/blog/real-price-of-frontier-models",
      "note": "前沿模型实际成本：tokenizer 差异导致隐性涨价"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/976/149.htm",
      "note": "Meta 宣布扩建路易斯安那州数据中心至 5GW，总投资超 500 亿美元"
    },
    {
      "name": "公众号：腾讯混元",
      "url": "https://mp.weixin.qq.com/s/vKFCa9FfoGBUGK8J1MhFag",
      "note": "腾讯混元发布 HyOCR-1.5：端到端 OCR 大模型全栈开源，推理提速 6…"
    },
    {
      "name": "X：歸藏 (@op7418)",
      "url": "https://x.com/op7418/status/2076604797202161800",
      "note": "Seedream 5.0 Pro 测评：图像编辑门槛爆降"
    },
    {
      "name": "X：商汤 SenseTime (@SenseTime_AI)",
      "url": "https://x.com/SenseTime_AI/status/2076828658531262619",
      "note": "商汤开源 SenseNova-Vision-7B-MoT 多任务视觉模型"
    },
    {
      "name": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/13/video-generation-startup-pixverse-raises-439m-valuation-soars-past-2b",
      "note": "视频生成创企 PixVerse 完成 4.39 亿美元 C 轮扩展融资，估值超…"
    }
  ]
};

const episodeHistory = [
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
