const episode = {
  "date": "2026-07-07",
  "title": "AI HOT 日报：AI裁员潮、初级程序员危机、OfficeCLI",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 行业动态、技巧与观点、产品发布/更新、模型发布/更新。核心信号是：2026年科技公司AI裁员名单：Microsoft、Oracle、GitLab等十家公司裁减数千岗位；AI颠覆初级程序员就业市场：斯坦福数据揭示年轻开发者就业锐减19%；OfficeCLI：为AI智能体设计的开源Office套件。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "industry",
      "title": "2026年科技公司AI裁员名单：Microsoft、Oracle、GitLab等十家公司裁减数千岗位",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/06/the-running-list-major-tech-layoffs-in-2026-where-employers-cited-ai",
      "date": "2026-07-07",
      "score": 78,
      "tags": [
        "AI HOT",
        "Google",
        "Meta",
        "Microsoft",
        "产业"
      ],
      "summary": "2026年以来，多家科技公司以AI为由大规模裁员。Microsoft裁减约4800岗位（2.1%），Oracle裁减21000人（13%），GitLab裁减350人（14%）以投资AI基础设施，Google Cloud持续裁减员工（外界估计1500-3000+工程师），Intuit裁减3000人（…",
      "publishedAt": "2026-07-06T18:35:00.000Z",
      "category": "industry",
      "comment": "点评：资本和组织信号说明 AI 正在进入商业兑现期，团队需要同时关注增长故事和真实 ROI。",
      "advice": "建议：企业决策时同步评估供应商持续性、集成成本、组织影响和未来三个月的复盘指标。"
    },
    {
      "topic": "tip",
      "title": "AI颠覆初级程序员就业市场：斯坦福数据揭示年轻开发者就业锐减19%",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://seldo.com/posts/ai-has-torched-the-market-for-junior-programmers",
      "date": "2026-07-07",
      "score": 77,
      "tags": [
        "AI HOT",
        "Agent",
        "Copilot",
        "观点"
      ],
      "summary": "斯坦福数字经济实验室基于ADP薪资数据发现，美国22-25岁软件开发人员就业较2022年峰值下降19%，而41-49岁增长14%。入门级岗位招聘减少28%，计算机科学毕业生失业率达6.1%，高于文科专业。核心推手是2024-2025年兴起的智能体编程（Agentic programming）。总程…",
      "publishedAt": "2026-07-06T11:51:40.808Z",
      "category": "tip",
      "comment": "点评：初级岗位正在被 Agent 编程挤压，经验溢价上升。新人不再只靠“会写代码”入场，而要证明能用 AI 交付、调试、测试、部署并理解业务上下文。",
      "advice": "建议：新人作品集要覆盖测试、部署、代码审查、故障定位、需求拆解和领域理解；团队也要重设计师徒制，让新人从 AI 辅助交付和真实复盘中积累判断力。"
    },
    {
      "topic": "product",
      "title": "OfficeCLI：为AI智能体设计的开源Office套件",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/iOfficeAI/OfficeCLI",
      "date": "2026-07-07",
      "score": 75,
      "tags": [
        "AI HOT",
        "Claude",
        "开源",
        "Copilot",
        "Claude Code",
        "产品"
      ],
      "summary": "OfficeCLI是全球首个专为AI智能体设计的开源Office套件，以单二进制文件运行，无需安装Office或任何依赖。它内置HTML渲染引擎，可将.docx/.xlsx/.pptx转换为HTML或PNG，形成\"渲染→查看→修复\"的视觉闭环，使AI代理能自主创建、读取和修改Word、Excel、…",
      "publishedAt": "2026-07-06T23:03:34.910Z",
      "category": "ai-products",
      "comment": "点评：OfficeCLI 把 Office 文件处理做成 Agent 可调用、可渲染、可修复的工具链，补齐了企业文档自动化里的关键闭环：不是只生成文件，而是能看见并修正结果。",
      "advice": "建议：文档自动化场景应把“生成—渲染—视觉检查—修复—导出”写成流水线，并保留人工抽检点，尤其关注格式兼容、字体缺失和复杂表格。"
    },
    {
      "topic": "safety",
      "title": "Google 更新隐私设置，默认用媒体数据训练 AI，用户可手动退出",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/06/if-you-use-google-youre-training-its-ai-heres-how-to-opt-out",
      "date": "2026-07-07",
      "score": 75,
      "tags": [
        "AI HOT",
        "Google",
        "Meta",
        "观点"
      ],
      "summary": "Google 于 6 月通过客户邮件低调更新了搜索服务隐私设置，新增\"搜索服务历史\"和\"个性化推荐\"两项开关，默认将用户上传的图片、文件、音频和视频录制等媒体数据保存并用于训练 AI 模型。该更新适用于搜索、地图、购物、航班、酒店、翻译、新闻等服务。用户可通过取消勾选\"保存媒体\"框来退出，同时可设…",
      "publishedAt": "2026-07-06T17:04:58.000Z",
      "category": "tip",
      "comment": "点评：AI 能力越深入生产，治理越不能停留在原则口号，必须落到权限、审计、数据边界和责任链。",
      "advice": "建议：管理者应把合规、审计、权限和员工沟通前置，避免 AI 项目因信任问题受阻。"
    },
    {
      "topic": "tip",
      "title": "免费开源API中转站监测网站tokhub.me上线",
      "source": "X：Vista (@vista8)",
      "url": "https://x.com/vista8/status/2074130700421456089",
      "date": "2026-07-07",
      "score": 75,
      "tags": [
        "AI HOT",
        "开源",
        "观点"
      ],
      "summary": "作者与姚老师合作开发中转站评测网站tokhub.me，通过真实充值调用API进行模型监控，区别于单纯速度评测。代码完全开源，支持一键Docker部署，还可作为公司内部Token和网关管理系统，省去繁杂的API Key和Base URL管理。开源代码见Github评论区。",
      "publishedAt": "2026-07-06T13:57:49.000Z",
      "category": "tip",
      "comment": "点评：API 中转与监测工具变热，说明团队开始关心真实调用里的延迟、成功率、价格和供应商稳定性，而不是只看模型发布会和榜单。",
      "advice": "建议：企业内部模型网关至少要监控延迟、成功率、错误类型、单位成本、余额风险和供应商波动；避免把不透明中转站直接接入生产敏感数据。"
    },
    {
      "topic": "tip",
      "title": "AT&T 1956年专利法令：公共天才的私有化",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://www.wysr.xyz/p/the-private-capture-of-public-genius",
      "date": "2026-07-07",
      "score": 75,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "1956年1月24日，全球最大私营公司AT&T签署专利法令，将其7，820项未过期专利免费授权给所有美国企业，并承诺未来专利按\"合理费率\"许可。作为交换，AT&T得以保留Western Electric，但被禁止进入电信以外的业务。贝尔实验室69%的非电信专利（涵盖化学、半导体、光学等）迅速公开，…",
      "publishedAt": "2026-07-06T08:55:43.404Z",
      "category": "tip",
      "comment": "点评：AT&T 专利开放是公共创新与私有垄断之间的历史样本。放到 AI 时代看，模型、数据、推理代码、专利与治理开放程度，会直接塑造生态竞争格局。",
      "advice": "建议：评估 AI 开源时不要只看许可证，还要看权重、训练数据、推理代码、专利风险、贡献治理和商业使用边界。"
    },
    {
      "topic": "safety",
      "title": "Meta 被曝让外包人员伪装未成年人，诱导竞争对手 AI 聊敏感话题",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/973/207.htm",
      "date": "2026-07-07",
      "score": 73,
      "tags": [
        "AI HOT",
        "OpenAI",
        "Meta",
        "Gemini",
        "GPT",
        "产业"
      ],
      "summary": "据《连线》报道，Meta 通过外包公司 Covalen 开展代号\"Cannes\"的项目，让数百名外包人员伪装成未成年人，向 OpenAI ChatGPT、谷歌 Gemini 及 Character.AI 发送涉及自杀、自残、进食障碍等高风险提示词，以测试竞品聊天机器人的安全拦截机制。项目持续至 4…",
      "publishedAt": "2026-07-06T09:23:28.000Z",
      "category": "industry",
      "comment": "点评：安全评测本身也需要治理。用敏感未成年人视角测试竞品可以发现风险，但也会引出数据来源、测试伦理、员工心理负担和行业透明度问题。",
      "advice": "建议：做安全红队时要建立伦理审批、测试人员保护、敏感数据脱敏和披露边界；不要把“行业惯例”当成免审理由。"
    },
    {
      "topic": "model",
      "title": "Fun-ASR-Realtime 发布：单模型支持30种语言与16种方言，识别准确率领先",
      "source": "公众号：通义实验室（千问）",
      "url": "https://mp.weixin.qq.com/s/ntw0SliBi4f8LROnFY26kA",
      "date": "2026-07-07",
      "score": 73,
      "tags": [
        "AI HOT",
        "通义",
        "模型"
      ],
      "summary": "通义实验室发布Fun-ASR-Realtime实时语音识别模型。单模型覆盖30种语言及16种方言，针对东亚、东南亚地区重点优化。在工业级方言测评inhouse上取得87.8%的语义准确率，大幅领先，多地方言接近人工水平。引入上下文理解与动态热词注入，实现同音词、品牌名等语义消歧。流式识别首字延迟控…",
      "publishedAt": "2026-07-06T06:09:29.000Z",
      "category": "ai-models",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：不要只做问答 Demo，优先用真实长文档、代码仓库、多轮工具调用和成本曲线来评测。"
    },
    {
      "topic": "safety",
      "title": "Sysdig 澄清首例\"智能体勒索软件\"JadePuffer：AI 执行攻击但人类仍负责设置与选目标",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/06/the-first-ai-run-ransomware-attack-still-needed-a-human",
      "date": "2026-07-07",
      "score": 72,
      "tags": [
        "AI HOT",
        "OpenAI",
        "Anthropic",
        "Gemini",
        "DeepSeek",
        "产业"
      ],
      "summary": "云安全公司 Sysdig 记录了首例\"智能体勒索软件\"攻击 JadePuffer，AI 智能体独立完成入侵、窃取凭证、横向移动、加密超 1，300 条配置记录并撰写赎金信，还能在 31 秒内修复失败登录并以自然语言注释解释推理过程。但 Sysdig 高级威胁研究总监 Michael Clark 澄…",
      "publishedAt": "2026-07-06T23:56:14.000Z",
      "category": "industry",
      "comment": "点评：AI Agent 勒索攻击的危险在于自动化链路完整：侦察、利用、凭证收集、横向移动和加密勒索都可连续执行。安全风险已经从“模型会不会回答坏问题”升级到“Agent 能不能操作真实系统”。",
      "advice": "建议：立即排查暴露的 Langflow、Nacos、MinIO、数据库与云凭证；把 AI/LLM 服务密钥纳入密钥轮换，限制横向访问，并为 Agent 行为检测建立异常命令告警。"
    },
    {
      "topic": "product",
      "title": "Synthetic Sciences 发布 OpenScience：面向机器学习、生物学、物理学和化学研究的开源模型无关 AI 工作台",
      "source": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/05/synthetic-sciences-releases-openscience-an-open-source-model-agnostic-ai-workbench-for-machine-learning-biology-physics-and-chemistry-research",
      "date": "2026-07-07",
      "score": 71,
      "tags": [
        "AI HOT",
        "Anthropic",
        "Claude",
        "Gemini",
        "GPT",
        "产品"
      ],
      "summary": "Synthetic Sciences 推出开源（Apache 2.0）AI 科研工作台 OpenScience，覆盖机器学习、生物学、物理学、化学。它运行从文献、假设、代码、实验到分析与撰写的完整科研循环，支持按请求切换任意模型（Claude、GPT、Gemini、GLM、Kimi、DeepSee…",
      "publishedAt": "2026-07-06T05:07:12.000Z",
      "category": "ai-products",
      "comment": "点评：OpenScience 的重点是模型无关的科研工作台，而不是某个单点模型。真正价值在于把文献、假设、代码、实验、分析和撰写连成可追踪的科研闭环。",
      "advice": "建议：先用一个小而可复现的研究任务试跑，检查引用来源、数据权限、实验日志、代码可复现性和模型切换成本，再决定是否进入正式科研流程。"
    },
    {
      "topic": "tip",
      "title": "Claude Code 团队详解四种智能体循环类型",
      "source": "X：Claude Devs (@ClaudeDevs)",
      "url": "https://x.com/ClaudeDevs/status/2074208949205881033",
      "date": "2026-07-07",
      "score": 70,
      "tags": [
        "AI HOT",
        "Claude",
        "Claude Code",
        "观点"
      ],
      "summary": "Claude Code 团队将\"设计循环\"定义为智能体重复工作直到满足停止条件，划分四种类型：1）回合循环--手动提示触发，Claude 自判完成，适合短任务，可通过 SKILL.md 提升验证；2）目标循环--`/goal` 手动触发，达成目标或达最大轮数停止，需确定性完成标准（如测试通过数）；…",
      "publishedAt": "2026-07-06T19:08:45.000Z",
      "category": "tip",
      "comment": "点评：Agent 循环的关键不是“让模型一直干”，而是定义停止条件、检查点和预算。循环设计不好，自动化会变成无限重试和不可解释的成本黑洞。",
      "advice": "建议：所有 Agent 循环都要写明目标、最大轮次、预算、停止条件、人工升级条件和可验证产物，避免无界自动化。"
    },
    {
      "topic": "tip",
      "title": "Claude Fable实地指南：发现你的未知",
      "source": "Claude：Blog（网页）",
      "url": "https://claude.com/blog/a-field-guide-to-claude-fable-finding-your-unknowns",
      "date": "2026-07-07",
      "score": 70,
      "tags": [
        "AI HOT",
        "Claude",
        "Claude Code",
        "观点"
      ],
      "summary": "Claude Fable是第一款要求用户主动澄清未知才能获得高质量工作的模型。与Claude Fable协作是一个在实现前后迭代发现未知的过程。通过将问题分解为已知的已知、已知的未知、未知的已知和未知的未知四类，用户可以借助Claude Fable和Claude Code进行盲点检查、头脑风暴、原…",
      "publishedAt": "2026-07-06T18:20:11.364Z",
      "category": "tip",
      "comment": "点评：Claude Fable 强调的不是更会执行命令，而是帮助用户发现盲点。高质量人机协作正在从“下指令”转向“共同暴露假设、未知和验证路径”。",
      "advice": "建议：每次交给模型实现前，先让它列出假设、未知、风险、反例和验证计划；完成后再让它对照这些清单做一次盲点复盘。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/06/the-running-list-major-tech-layoffs-in-2026-where-employers-cited-ai",
      "note": "2026年科技公司AI裁员名单：Microsoft、Oracle、GitLab…"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://seldo.com/posts/ai-has-torched-the-market-for-junior-programmers",
      "note": "AI颠覆初级程序员就业市场：斯坦福数据揭示年轻开发者就业锐减19%"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/iOfficeAI/OfficeCLI",
      "note": "OfficeCLI：为AI智能体设计的开源Office套件"
    },
    {
      "name": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/06/if-you-use-google-youre-training-its-ai-heres-how-to-opt-out",
      "note": "Google 更新隐私设置，默认用媒体数据训练 AI，用户可手动退出"
    },
    {
      "name": "X：Vista (@vista8)",
      "url": "https://x.com/vista8/status/2074130700421456089",
      "note": "免费开源API中转站监测网站tokhub.me上线"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://www.wysr.xyz/p/the-private-capture-of-public-genius",
      "note": "AT&T 1956年专利法令：公共天才的私有化"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/973/207.htm",
      "note": "Meta 被曝让外包人员伪装未成年人，诱导竞争对手 AI 聊敏感话题"
    }
  ]
};

const episodeHistory = [
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
