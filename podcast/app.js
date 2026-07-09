const episode = {
  "date": "2026-07-09",
  "title": "AI HOT 日报：GitLost、提示注入僵尸网络、Skill编排",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 行业动态、论文研究、技巧与观点、模型发布/更新、产品发布/更新。核心信号是：GitLost：Noma Labs 发现 GitHub AI 代理提示词注入漏洞；黑客可利用9款最流行的AI工具组装大规模僵尸网络；在校研究生Kunkun开源管理相互调用Skill的方法。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "safety",
      "title": "GitLost：Noma Labs 发现 GitHub AI 代理提示词注入漏洞",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos",
      "date": "2026-07-09",
      "score": 81,
      "tags": [
        "AI HOT",
        "Claude",
        "Agent",
        "Copilot",
        "产业"
      ],
      "summary": "Noma Labs 在 GitHub Agentic Workflows 中发现严重提示词注入漏洞 GitLost。未认证攻击者仅需在属于同一组织的公共仓库中创建一个嵌有恶意指令的 Issue，即可诱使基于 Claude 或 GitHub Copilot 的 AI 代理读取并公开该组织内私有仓库的…",
      "publishedAt": "2026-07-08T08:29:47.091Z",
      "category": "industry",
      "comment": "点评：GitLost 再次说明，代码托管平台里的 AI Agent 不能默认信任同组织公共仓库、Issue 或 README。提示词注入已经从聊天风险升级为跨仓库数据泄露风险。",
      "advice": "建议：给代码 Agent 设置仓库级最小权限，禁止公共输入直接触达私有仓库；把 Issue、PR、README、依赖描述都当作不可信输入，并在执行前做策略过滤和日志审计。"
    },
    {
      "topic": "safety",
      "title": "黑客可利用9款最流行的AI工具组装大规模僵尸网络",
      "source": "Ars Technica：AI（RSS）",
      "url": "https://arstechnica.com/security/2026/07/hackers-can-use-9-of-the-most-popular-ai-tools-to-assemble-massive-botnets",
      "date": "2026-07-09",
      "score": 78,
      "tags": [
        "AI HOT",
        "论文"
      ],
      "summary": "提示注入已成为AI安全的首要威胁--大语言模型无法区分合法指令与恶意指令。此前推送式和拉取式攻击规模均有限。研究人员提出一种名为HalluSquatting的新型拉取式提示注入攻击，首次能组装大规模僵尸网络、执行分布式拒绝服务攻击（DDoS）并大规模感染设备。该攻击可作用于AI编码工具，标志着提示…",
      "publishedAt": "2026-07-08T07:00:51.000Z",
      "category": "paper",
      "comment": "点评：提示词注入正在从“让模型说错话”升级为“让工具链执行错误动作”。一旦编码 Agent、包管理器和自动化脚本串联，攻击面就会变成供应链级别。",
      "advice": "建议：编码 Agent 不要自动安装陌生包、执行下载脚本或读取网络指令；为包名、命令、网络访问和凭证调用设置白名单，并把异常工具调用纳入安全告警。"
    },
    {
      "topic": "tip",
      "title": "在校研究生Kunkun开源管理相互调用Skill的方法",
      "source": "X：Berry Xia (@berryxia)",
      "url": "https://x.com/berryxia/status/2074827915779580055",
      "date": "2026-07-09",
      "score": 76,
      "tags": [
        "AI HOT",
        "开源",
        "观点"
      ],
      "summary": "在校研究生Kunkun开源了一套管理大量互相调用Skill的方法。核心方案包括：1）搭建HTML后台，按运行模式（手动/自动）、链路位置、专业领域三类标签筛选Skill；2）将连环调用的Skill绘制成Mermaid流程图，根据debug、新功能、合PR、改设计等阶段定位对应技能组；3）仿照Mat…",
      "publishedAt": "2026-07-08T12:08:18.000Z",
      "category": "tip",
      "comment": "点评：Skill 编排从个人技巧走向工程资产管理：当技能数量变多，真正难点不再是写一个提示词，而是分类、依赖、触发边界、调试链路和复用治理。",
      "advice": "建议：团队可以把 Skill 当作轻量知识库治理：每个 Skill 写清触发词、输入输出、依赖、禁止事项和验收方式，并用流程图标出可组合链路。"
    },
    {
      "topic": "safety",
      "title": "加拿大不列颠哥伦比亚省拟起诉OpenAI：未上报ChatGPT暴力对话致校园枪击惨案",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/974/169.htm",
      "date": "2026-07-09",
      "score": 75,
      "tags": [
        "AI HOT",
        "OpenAI",
        "GPT",
        "产业"
      ],
      "summary": "加拿大不列颠哥伦比亚省7月7日宣布将起诉OpenAI，指控其未向执法部门上报一名ChatGPT用户2025年6月封禁前的暴力相关对话内容。该用户随后于今年2月在塔布勒岭制造校园枪击案，杀害8人。OpenAI CEO萨姆·奥尔特曼今年4月为此公开致歉，承认本应上报但未执行。受害家属已在加州法院提起诉…",
      "publishedAt": "2026-07-08T09:55:17.000Z",
      "category": "industry",
      "comment": "点评：AI 能力越深入生产，治理越不能停留在原则口号，必须落到权限、审计、数据边界和责任链。",
      "advice": "建议：管理者应把合规、审计、权限和员工沟通前置，避免 AI 项目因信任问题受阻。"
    },
    {
      "topic": "industry",
      "title": "利润超10亿美元、ARR剑指千亿，Anthropic抢先OpenAI冲击IPO",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/974/275.htm",
      "date": "2026-07-09",
      "score": 73,
      "tags": [
        "AI HOT",
        "OpenAI",
        "Anthropic",
        "Claude",
        "Claude Code",
        "产业"
      ],
      "summary": "Anthropic今年第三季度利润预计超10亿美元，已于6月1日秘密提交IPO申请，若成功将成为规模最大AI实验室IPO。其与OpenAI的年度经常性收入合计接近1000亿美元。凭借Claude Code在软件开发领域的快速普及，Anthropic在2026年实现AI模型盈利变现，成为B2B市场领…",
      "publishedAt": "2026-07-08T22:30:38.000Z",
      "category": "industry",
      "comment": "点评：Anthropic 的商业信号说明 AI 实验室正在从融资叙事进入利润、客户结构和资本市场检验期。Claude Code 的 B2B 牵引也证明“开发者工作流”已成为模型变现主战场。",
      "advice": "建议：企业采购模型时关注供应商财务可持续性、企业服务能力、价格稳定性和迁移成本；创业团队则要警惕被单一模型生态锁定。"
    },
    {
      "topic": "safety",
      "title": "诉讼：男子使用Grok制作7000张继女色情图像后自杀",
      "source": "Ars Technica：AI（RSS）",
      "url": "https://arstechnica.com/tech-policy/2026/07/lawsuit-grok-user-made-7k-child-sex-images-xai-only-reported-one-gang-rape-prompt",
      "date": "2026-07-09",
      "score": 72,
      "tags": [
        "AI HOT",
        "Grok",
        "产业"
      ],
      "summary": "一男子使用Grok生成7000张继女儿童性虐待材料（CSAM）后自杀。更多年轻女孩起诉X平台，指控其涉及Grok生成CSAM，并包庇儿童性犯罪者。",
      "publishedAt": "2026-07-08T19:56:37.000Z",
      "category": "industry",
      "comment": "点评：Grok 相关诉讼把未成年人保护、生成式内容拦截、上报机制和平台责任放到同一张考卷上。消费级 AI 产品必须把高风险内容处置做成系统能力，而不是事后公关。",
      "advice": "建议：面向公众的图像/聊天产品应默认启用未成年人保护、内容哈希比对、风险上报、账号处置和人工复核机制；不要把安全策略只放在服务条款里。"
    },
    {
      "topic": "model",
      "title": "Robbyant 发布 LingBot-VLA 2.0：开源 6B 跨实体机器人视觉-语言-动作模型",
      "source": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/08/lingbot-vla-2-0",
      "date": "2026-07-09",
      "score": 70,
      "tags": [
        "AI HOT",
        "Qwen",
        "开源",
        "机器人",
        "模型"
      ],
      "summary": "Robbyant 推出 LingBot-VLA 2.0，一个 6B 参数的开源视觉-语言-动作（VLA）基础模型。它以 Qwen3-VL-4B-Instruct 为骨干，采用 MoE 动作专家架构，通过 55 维规范向量统一表示不同机器人的状态和动作。训练数据涵盖约 60，000 小时高质量数据（…",
      "publishedAt": "2026-07-09T00:45:39.000Z",
      "category": "ai-models",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：不要只做问答 Demo，优先用真实长文档、代码仓库、多轮工具调用和成本曲线来评测。"
    },
    {
      "topic": "paper",
      "title": "OpenAI 审计 SWE-Bench Pro 发现约 30% 的评测任务存在缺陷",
      "source": "OpenAI：官网动态（RSS · 排除企业/客户案例）",
      "url": "https://openai.com/index/separating-signal-from-noise-coding-evaluations",
      "date": "2026-07-09",
      "score": 70,
      "tags": [
        "AI HOT",
        "OpenAI",
        "论文"
      ],
      "summary": "OpenAI 对编码评测基准 SWE-Bench Pro 进行详细审计，发现约 30% 的任务存在缺陷。在 731 个任务的公开子集中，前沿模型通过率在八个月内从 23.3% 提升至 80.3%，但数据质量检查显示大量任务存在测试过于严格、提示词描述不足、测试覆盖不全或误导性提示等问题。OpenA…",
      "publishedAt": "2026-07-08T13:00:00.000Z",
      "category": "paper",
      "comment": "点评：OpenAI 审计 SWE-Bench Pro 的信号是：评测集本身也会成为瓶颈。当前沿模型快速刷高通过率，任务质量、测试覆盖和提示清晰度会直接决定榜单是否可信。",
      "advice": "建议：不要只引用公开榜单。内部评测要抽检任务质量、补充真实仓库用例、记录失败原因，并把“测试是否代表真实需求”作为评测项。"
    },
    {
      "topic": "product",
      "title": "Seedream 5.0 Pro 登陆 Runway，支持14种语言",
      "source": "X：Runway (@runwayml)",
      "url": "https://x.com/runwayml/status/2074982268175630814",
      "date": "2026-07-09",
      "score": 69,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "Seedream 5.0 Pro 现已登陆 Runway。可通过提示词或参考图生成高细节图像，图像内文字清晰可读，支持多达14种语言。立即点击下方链接尝试。",
      "publishedAt": "2026-07-08T22:21:38.000Z",
      "category": "ai-products",
      "comment": "点评：Seedream 进入 Runway 的意义在于图像生成能力继续平台化。多语言文字可读性若稳定，会让广告、封面、海报和本地化素材生产更接近可交付状态。",
      "advice": "建议：内容团队可用它测试多语言海报和广告素材，但交付前必须检查文字准确性、商标版权、人物一致性和不同地区合规要求。"
    },
    {
      "topic": "safety",
      "title": "面向AI模型双重用途知识的\"开关\"：Anthropic与AE Studio提出GRAM方法",
      "source": "Anthropic：Research（发表成果 · 网页）",
      "url": "https://www.anthropic.com/research/off-switch-dual-use",
      "date": "2026-07-09",
      "score": 68,
      "tags": [
        "AI HOT",
        "Anthropic",
        "论文"
      ],
      "summary": "Anthropic与AE Studio联合提出梯度路由辅助模块（GRAM）方法，通过在Transformer每层添加可移除的神经元模块，使模型在训练时将病毒学、网络安全、核物理、专业编程语言等双重用途知识仅路由到对应模块，而非扩散至全局。训练后删除模块即可消除该能力，保留则供可信部署使用。实验在合…",
      "publishedAt": "2026-07-08T23:27:02.554Z",
      "category": "paper",
      "comment": "点评：GRAM 把“模型安全”从事后拒答推向训练期能力隔离。它的价值在于给高风险知识做可插拔边界，但也需要警惕删除模块后能力是否真的不可恢复。",
      "advice": "建议：安全团队可跟踪能力隔离类训练方法，但落地前要用红队复测、能力回归测试和审计日志验证“删除模块”后的残留风险。"
    },
    {
      "topic": "product",
      "title": "Replit 推出社区档案与力量排名",
      "source": "X：Replit (@Replit)",
      "url": "https://x.com/Replit/status/2074871322220339515",
      "date": "2026-07-09",
      "score": 68,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "本周新功能 🚀 Replit 社区档案--vibe coders 的工作证明。 你的档案，你的展示。获取你的智能体使用和检查点的活跃度图表，外加面向专业用户的 Replit 力量排名。 登录，认领你的档案，挑选你最棒的项目，与朋友分享你的数据。 立即查看 → http://replit.com/…",
      "publishedAt": "2026-07-08T15:00:47.000Z",
      "category": "ai-products",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：产品团队应明确它解决的高频任务、接入的数据源、人工接管点和可量化指标。"
    },
    {
      "topic": "safety",
      "title": "OpenRouter聊天室推出一键零数据保留",
      "source": "X：OpenRouter (@OpenRouter)",
      "url": "https://x.com/OpenRouter/status/2074870468394250461",
      "date": "2026-07-09",
      "score": 65,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "新功能：聊天室一键ZDR（零数据保留） 在完全隐私保护下横向对比模型：https://openrouter.ai/chat",
      "publishedAt": "2026-07-08T14:57:23.000Z",
      "category": "ai-products",
      "comment": "点评：模型路由平台开始把隐私承诺做成显性开关，说明企业用户不只要“可选模型”，还要明确的数据保留边界和审计口径。",
      "advice": "建议：敏感场景做模型对比时，优先选择零保留、可审计、可关闭日志的链路；同时保留本地脱敏样本，避免把客户数据直接用于横评。"
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
      "url": "https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos",
      "note": "GitLost：Noma Labs 发现 GitHub AI 代理提示词注入漏洞"
    },
    {
      "name": "Ars Technica：AI（RSS）",
      "url": "https://arstechnica.com/security/2026/07/hackers-can-use-9-of-the-most-popular-ai-tools-to-assemble-massive-botnets",
      "note": "黑客可利用9款最流行的AI工具组装大规模僵尸网络"
    },
    {
      "name": "X：Berry Xia (@berryxia)",
      "url": "https://x.com/berryxia/status/2074827915779580055",
      "note": "在校研究生Kunkun开源管理相互调用Skill的方法"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/974/169.htm",
      "note": "加拿大不列颠哥伦比亚省拟起诉OpenAI：未上报ChatGPT暴力对话致校园枪…"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/974/275.htm",
      "note": "利润超10亿美元、ARR剑指千亿，Anthropic抢先OpenAI冲击IPO"
    },
    {
      "name": "Ars Technica：AI（RSS）",
      "url": "https://arstechnica.com/tech-policy/2026/07/lawsuit-grok-user-made-7k-child-sex-images-xai-only-reported-one-gang-rape-prompt",
      "note": "诉讼：男子使用Grok制作7000张继女色情图像后自杀"
    },
    {
      "name": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/08/lingbot-vla-2-0",
      "note": "Robbyant 发布 LingBot-VLA 2.0：开源 6B 跨实体机器…"
    }
  ]
};

const episodeHistory = [
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
