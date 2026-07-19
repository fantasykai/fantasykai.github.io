const episode = {
  "date": "2026-07-19",
  "title": "AI HOT 日报：DAIR.AI 发布、Index Vent、Nvidia",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 技巧与观点、行业动态、模型发布/更新、产品发布/更新。核心信号是：DAIR.AI 发布 X 智能体技能：自动追踪 AI 前沿动态；Index Ventures 联合创始人 Neil Rimer 认为 AI 财富将面临\"再分配\"；使用 NVIDIA NeMo AutoModel 在单 GPU Colab 上对 Qwen3-0.6B 进行 LoRA 微调。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "tip",
      "title": "DAIR.AI 发布 X 智能体技能：自动追踪 AI 前沿动态",
      "source": "X：Elvis Saravia (@omarsar0, DAIR.AI)",
      "url": "https://x.com/omarsar0/status/2078573267015885136",
      "date": "2026-07-19",
      "score": 73,
      "tags": [
        "AI HOT",
        "Claude",
        "Agent",
        "MCP",
        "观点"
      ],
      "summary": "DAIR.AI 创始人 Elvis Saravia 发布了一款名为\"x-agent-intelligence\"的 AI 智能体技能，可自动追踪 X 平台高信号账号的 AI 新闻、论文和项目。该技能基于 X MCP 工具构建，支持 Codex、Claude 等智能体，能生成美观的 HTML 摘要页面…",
      "publishedAt": "2026-07-18T20:10:59.000Z",
      "category": "tip",
      "comment": "点评：自动化追踪信息源的价值，不在于再多抓几条新闻，而在于能否把账号白名单、去重、可信度判断和团队分发规则做成可审计流程；否则只会更快地制造信息噪声。",
      "advice": "建议：为新闻追踪 Agent 设定可信账号白名单、主题规则、去重阈值、原文链接和人工抽检；先用于内部晨报，再决定是否自动对外发布。"
    },
    {
      "topic": "tip",
      "title": "Index Ventures 联合创始人 Neil Rimer 认为 AI 财富将面临\"再分配\"",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/17/neil-rimer-thinks-the-ai-money-is-coming-back-out",
      "date": "2026-07-19",
      "score": 70,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "Index Ventures 联合创始人 Neil Rimer 表示，围绕 AI 积累的巨额财富将面临\"某种形式的再分配\"，无论是自愿还是强制。他呼吁科技领袖在推动自愿再分配中发挥主导作用。与此同时，美国慈善捐赠总额虽创新高，但捐赠人数持续下降，而加州正考虑对亿万富翁征收 5% 的一次性财富税。",
      "publishedAt": "2026-07-18T04:47:25.000Z",
      "category": "tip",
      "comment": "点评：这类表态反映了 AI 收益分配已经从抽象伦理问题进入资本、税收与公共信任议题。技术公司若无法证明生产率收益能被更广泛地分享，监管与社会压力会持续上升。",
      "advice": "建议：管理层把 AI 项目的收益与影响纳入同一复盘：除节省成本外，持续记录岗位变化、培训投入、客户影响和数据权益，并提前准备可解释的治理口径。"
    },
    {
      "topic": "tip",
      "title": "使用 NVIDIA NeMo AutoModel 在单 GPU Colab 上对 Qwen3-0.6B 进行 LoRA 微调",
      "source": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/18/fine-tuning-qwen3-with-lora-using-nvidia-nemo-automodel-a-complete-single-gpu-google-colab-workflow-tutorial",
      "date": "2026-07-19",
      "score": 68,
      "tags": [
        "AI HOT",
        "Google",
        "Nvidia",
        "Qwen",
        "观点"
      ],
      "summary": "本教程展示了在 Google Colab 单 GPU 环境下，使用 NVIDIA NeMo AutoModel 对 Qwen3-0.6B 进行 LoRA 参数高效微调的完整流程。",
      "publishedAt": "2026-07-19T01:08:52.000Z",
      "category": "tip",
      "comment": "点评：单 GPU 微调门槛下降，意味着差异化将更多来自数据质量、评测设计和部署闭环，而不是“是否能跑通教程”。小模型微调尤其适合验证垂直任务的性价比。",
      "advice": "建议：用自有脱敏样本划分训练、验证和留出测试集；与基础模型比较准确率、幻觉、延迟和每次任务成本，并保留可回滚的模型、数据与训练配置版本。"
    },
    {
      "topic": "safety",
      "title": "Moonshot AI 发布开源模型 Kimi K3，性能接近前沿闭源模型",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/18/kimi-threat-or-menace",
      "date": "2026-07-19",
      "score": 67,
      "tags": [
        "AI HOT",
        "Claude",
        "GPT",
        "Kimi",
        "开源",
        "产业"
      ],
      "summary": "中国公司 Moonshot AI 本周发布新版开源模型 Kimi K3。Moonshot 称其虽仍落后于 Claude Fable 5 和 GPT 5.6 Sol，但在评测中持续优于其他测试模型，Arena.ai 和 Vals AI 的独立分析也表明 Kimi 可与前沿旗舰模型竞争。该消息引发美国…",
      "publishedAt": "2026-07-18T18:51:07.000Z",
      "category": "industry",
      "comment": "点评：开源模型逼近前沿闭源能力，会让企业模型选型从单纯比较排行榜，转向比较本地部署、数据控制、工具调用稳定性和单位任务成本。性能声明仍需用自己的任务集复核。",
      "advice": "建议：用中文长文档、代码修改、函数调用和安全边界等真实任务与现有模型对跑；同时核查许可证、权重获取、推理栈、更新节奏和私有部署成本。"
    },
    {
      "topic": "tip",
      "title": "可灵AI教你打造梦幻云门效果",
      "source": "X：可灵 Kling AI (@Kling_ai)",
      "url": "https://x.com/Kling_ai/status/2078495005241700399",
      "date": "2026-07-19",
      "score": 66,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "如何使用可灵AI打造一扇通往云端的梦幻之门？",
      "publishedAt": "2026-07-18T15:00:00.000Z",
      "category": "tip",
      "comment": "点评：这类教程显示视频生成的竞争正转向“可复刻的制作流程”。对内容团队而言，能否稳定复用参考图、镜头运动和后期模板，比单个炫酷效果更具生产价值。",
      "advice": "建议：把提示词、参考图、参数、镜头脚本和后期步骤沉淀为模板；用同一模板测试角色一致性、生成耗时、可编辑性和商业素材授权。"
    },
    {
      "topic": "tip",
      "title": "用GPT-Image-2+剪映一键生成爆款跳舞视频",
      "source": "X：阿易 AI Notes (@AYi_AInotes)",
      "url": "https://x.com/AYi_AInotes/status/2078508800475029833",
      "date": "2026-07-19",
      "score": 65,
      "tags": [
        "AI HOT",
        "GPT",
        "观点"
      ],
      "summary": "用户用GPT-Image-2生成游艇美女图，再导入剪映搜索\"梦的翅膀受了伤\"选剪同款，即可生成不带AI标志的跳舞视频。该方法操作简单，适合抖音、小红书快速起号。",
      "publishedAt": "2026-07-18T15:54:49.000Z",
      "category": "tip",
      "comment": "点评：一键式素材链路降低了短视频试错成本，也放大了肖像、音乐和平台标识规避等风险。传播效率不该成为绕过授权、标注或平台规则的理由。",
      "advice": "建议：营销团队仅使用已获授权的人物、音乐和平台素材，并保留生成记录、版权凭证和人工审核；不要以去除或规避 AI 标识作为增长策略。"
    },
    {
      "topic": "safety",
      "title": "设置备用 Mac 让 Claude Code 完全控制：分步指南",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://ykdojo.github.io/claude-controls-mac",
      "date": "2026-07-19",
      "score": 63,
      "tags": [
        "AI HOT",
        "Claude",
        "Claude Code",
        "观点"
      ],
      "summary": "一篇分步指南介绍如何将备用 Mac 设置为可由 Claude Code 完全控制的常开机器，启用 computer use 功能。该方案通过 SSH 从主 Mac 连接，并可通过手机上的 Claude 应用控制，从而在主机器上隔离风险。指南建议在备用 Mac 上创建不含个人数据的新本地账户，并配置…",
      "publishedAt": "2026-07-18T19:37:23.960Z",
      "category": "tip",
      "comment": "点评：把高权限 Agent 放到隔离设备是比直接授权主力电脑更成熟的做法，但隔离设备仍是生产资产：远程访问、凭证、网络出口和误操作恢复都需要工程化控制。",
      "advice": "建议：使用专用设备、独立账号和最小权限密钥，限制可访问目录与出站网络；删除、部署、付款和共享凭证等动作必须要求人工确认并保留审计日志。"
    },
    {
      "topic": "tip",
      "title": "腾讯 WorkBuddy 成中国版 Codex，月活 885 万",
      "source": "X：X.PIN (@thexpin)",
      "url": "https://x.com/thexpin/status/2078522123522572338",
      "date": "2026-07-19",
      "score": 61,
      "tags": [
        "AI HOT",
        "OpenAI",
        "GPT",
        "开源",
        "观点"
      ],
      "summary": "腾讯云办公 AI 智能体平台 WorkBuddy 以 885 万月活成为中国同类最大产品，其目标用户是非技术人员的普通办公者，通过预设工作流让用户无需理解智能体或提示词即可直接使用。相比之下，OpenAI 的 Codex 和 ChatGPT Work 周活合计刚超 800 万。WorkBuddy …",
      "publishedAt": "2026-07-18T16:47:45.000Z",
      "category": "tip",
      "comment": "点评：面向非技术用户的 Agent 产品，竞争重点不再是提示词能力，而是预设流程是否真的减少理解和操作成本。高月活需要进一步用任务完成率、复用率和人工兜底率检验。",
      "advice": "建议：试点时挑选一个可量化办公流程，跟踪任务完成率、平均耗时、人工修订率、权限异常与持续使用率，不要把注册量或月活直接等同于业务价值。"
    },
    {
      "topic": "tip",
      "title": "无人机编队表演舞蹈与特技",
      "source": "X：fofr (@fofrAI)",
      "url": "https://x.com/fofrAI/status/2078624943021928715",
      "date": "2026-07-19",
      "score": 60,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "在繁忙交通堵塞上空，小型无人机搭载舞者表演宝莱坞舞蹈，每架无人机一人，聚焦舞蹈动作。 （SD2） 啦啦队员身穿飞行服，在游乐园上空的无人机上进行特技表演，最后组成人塔，由地面业余电影人拍摄，白天。镜头稍微拉近，重新对焦。 （SD2）",
      "publishedAt": "2026-07-18T23:36:20.000Z",
      "category": "tip",
      "comment": "点评：生成式视频正在把复杂的物理场景变成低成本创意素材，但视觉逼真度越高，越需要清楚地区分虚构演示与真实拍摄，避免误导传播或诱发不安全模仿。",
      "advice": "建议：发布此类素材时明确标注生成属性，避免与真实公共安全事件混淆；品牌团队还应建立物理风险、误导风险和平台审核的发布检查清单。"
    },
    {
      "topic": "industry",
      "title": "作家埃格斯受邀给 OpenAI 员工演讲，批评 ChatGPT 正夺走一代人的表达能力",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/978/607.htm",
      "date": "2026-07-19",
      "score": 58,
      "tags": [
        "AI HOT",
        "OpenAI",
        "GPT",
        "产业"
      ],
      "summary": "美国作家戴夫·埃格斯（Dave Eggers）应 OpenAI CEO 萨姆·奥尔特曼邀请，为约 200 名 OpenAI 员工发表演讲。他批评 ChatGPT 给教育工作者带来\"灾难性\"影响，称学生若用它写作将永远学不会真正表达，自己的声音会被夺走，导致一两代人陷入沉默。埃格斯此前曾公开批评 A…",
      "publishedAt": "2026-07-18T23:12:58.000Z",
      "category": "industry",
      "comment": "点评：对写作能力的担忧不应被简化为“禁用或拥抱 AI”。关键在于把 AI 放在构思、反馈和修订环节，而不是替代学生或员工形成观点、组织证据和承担署名责任。",
      "advice": "建议：教育与知识工作场景可要求保留提纲、资料来源、修改记录和个人反思；把 AI 用作批评者、陪练和改稿工具，而不是无痕代笔。"
    },
    {
      "topic": "model",
      "title": "商汤发布原生多模态旗舰模型SenseNova U1 Pro",
      "source": "X：商汤 SenseTime (@SenseTime_AI)",
      "url": "https://x.com/SenseTime_AI/status/2078510614889238997",
      "date": "2026-07-19",
      "score": 58,
      "tags": [
        "AI HOT",
        "推理",
        "多模态",
        "模型"
      ],
      "summary": "商汤发布旗舰原生多模态基础模型SenseNova U1 Pro，基于NEO-Unify架构，统一理解、生成与行动能力，并支持原生交织视觉-语言推理。相比U1 Lite，U1 Pro支持数十轮智能体生成循环、8K原生分辨率输出、超低文字渲染错误率，以及超宽/超高图像生成。预览版现已开放邀请，2026…",
      "publishedAt": "2026-07-18T16:02:02.000Z",
      "category": "ai-models",
      "comment": "点评：原生多模态和长循环 Agent 能力的价值，要靠复杂任务中的一致性来证明。图像生成指标、上下文长度和演示效果之外，真实业务更关心工具调用成功率、错误恢复和可观测性。",
      "advice": "建议：用包含文本、图像和多轮工具调用的真实任务集测试，并记录成功率、重试次数、成本、延迟和失败恢复；高风险输出保留人工审核与回滚路径。"
    },
    {
      "topic": "product",
      "title": "NVIDIA 发布 DeepStream 9.1，新增 13 项智能体技能与多视角 3D 追踪",
      "source": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/18/nvidia-released-deepstream-9-1-bringing-agentic-ai-to-vision-ai-with-13-skills-and-multi-view-3d-tracking",
      "date": "2026-07-19",
      "score": 56,
      "tags": [
        "AI HOT",
        "Nvidia",
        "Agent",
        "产品"
      ],
      "summary": "NVIDIA 发布 DeepStream 9.1，新增 13 项 agentic skills，支持通过自然语言描述构建多摄像头视觉管线。核心技能 MV3DT 将多摄像头检测投影至统一 3D 坐标系，为跨视角目标分配全局一致的 ID；AMC 技能可自动估算摄像头内外参，替代手动棋盘格标定。",
      "publishedAt": "2026-07-18T19:16:22.000Z",
      "category": "ai-products",
      "comment": "点评：视觉 AI 正从单摄像头识别走向跨摄像头空间理解，这更接近安防、零售、物流和工业场景的真实需求。落地难点会集中在现场标定、数据漂移、隐私合规与持续运维。",
      "advice": "建议：先在受控现场以有限摄像头试点，验证标定维护、遮挡场景、误报漏报、数据留存和告警闭环；涉及人员追踪时应先完成隐私与合规评估。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "X：Elvis Saravia (@omarsar0, DAIR.AI)",
      "url": "https://x.com/omarsar0/status/2078573267015885136",
      "note": "DAIR.AI 发布 X 智能体技能：自动追踪 AI 前沿动态"
    },
    {
      "name": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/17/neil-rimer-thinks-the-ai-money-is-coming-back-out",
      "note": "Index Ventures 联合创始人 Neil Rimer 认为 AI 财…"
    },
    {
      "name": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/18/fine-tuning-qwen3-with-lora-using-nvidia-nemo-automodel-a-complete-single-gpu-google-colab-workflow-tutorial",
      "note": "使用 NVIDIA NeMo AutoModel 在单 GPU Colab 上…"
    },
    {
      "name": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/07/18/kimi-threat-or-menace",
      "note": "Moonshot AI 发布开源模型 Kimi K3，性能接近前沿闭源模型"
    },
    {
      "name": "X：可灵 Kling AI (@Kling_ai)",
      "url": "https://x.com/Kling_ai/status/2078495005241700399",
      "note": "可灵AI教你打造梦幻云门效果"
    },
    {
      "name": "X：阿易 AI Notes (@AYi_AInotes)",
      "url": "https://x.com/AYi_AInotes/status/2078508800475029833",
      "note": "用GPT-Image-2+剪映一键生成爆款跳舞视频"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://ykdojo.github.io/claude-controls-mac",
      "note": "设置备用 Mac 让 Claude Code 完全控制：分步指南"
    }
  ]
};

const episodeHistory = [
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
