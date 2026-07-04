const episode = {
  "date": "2026-07-04",
  "title": "AI HOT 日报：pxpipe、Claude、阿里达摩院发布",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 技巧与观点、论文研究、行业动态、产品发布/更新、模型发布/更新。核心信号是：pxpipe：通过图像化压缩输入token降低Claude Code成本；claude-real-video ─ 让任何大语言模型（LLM）都能观看视频；阿里达摩院发布超导材料发现AI智能体Elements Claw。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "tip",
      "title": "pxpipe：通过图像化压缩输入token降低Claude Code成本",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/teamchong/pxpipe",
      "date": "2026-07-04",
      "score": 83,
      "tags": [
        "AI HOT",
        "Claude",
        "Claude Code",
        "观点"
      ],
      "summary": "pxpipe是一个本地代理，将系统提示、工具文档和历史记录等密集文本渲染为PNG图像，利用图像token成本取决于像素尺寸的特性压缩输入token。在Fable 5模型上，约25k文本token压缩为约2.7k图像token，端到端账单降低59-70%。SWE-bench Lite 10个实例全部…",
      "publishedAt": "2026-07-03T19:19:45.726Z",
      "category": "tip",
      "comment": "点评：pxpipe 把“文本上下文”转成低成本图像 token，本质是在探索多模态计费差异下的上下文压缩。它能显著降本，但也提醒我们：一旦上下文被有损压缩，精确 ID、代码片段和安全证据必须保留文本链路。",
      "advice": "建议：可在非敏感、可回放任务中小规模试验上下文压缩；对文件路径、代码 diff、凭证、测试日志等关键证据保持原文输入，并用固定任务集对比成本、成功率和误读率。"
    },
    {
      "topic": "tip",
      "title": "claude-real-video ─ 让任何大语言模型（LLM）都能观看视频",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/HUANGCHIHHUNGLeo/claude-real-video",
      "date": "2026-07-04",
      "score": 81,
      "tags": [
        "AI HOT",
        "Claude",
        "开源",
        "观点"
      ],
      "summary": "claude-real-video 是一个开源工具，让大语言模型基于视频画面而非字幕进行理解。它通过场景变化检测提取关键帧、滑动窗口去重并转录音频，生成干净的本地文件夹供模型读取。支持 YouTube 链接或本地文件，依赖 ffmpeg 和 Whisper，通过 pip 安装。全部处理在本地完成，…",
      "publishedAt": "2026-07-03T04:56:06.814Z",
      "category": "tip",
      "comment": "点评：claude-real-video 的价值不是炫技，而是把视频理解拆成抽帧、转写、去重和本地文件包，让通用模型能基于可复核素材分析视频。多模态 Agent 正在从“看一眼”走向“留下证据”。",
      "advice": "建议：做视频复盘、课程摘要或产品演示分析时，优先建立“本地抽帧 + 转写 + 引用帧号”的流程；涉及隐私视频时不要默认上传云端。"
    },
    {
      "topic": "paper",
      "title": "阿里达摩院发布超导材料发现AI智能体Elements Claw",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/972/089.htm",
      "date": "2026-07-04",
      "score": 80,
      "tags": [
        "AI HOT",
        "论文"
      ],
      "summary": "7月3日，阿里达摩院联合中国人民大学、中国科学院大学发布首个超导材料发现AI智能体Elements Claw。该智能体采用\"专通融合\"架构，基于1.25亿分子/晶体结构预训练的1B参数原子基础模型Elements，判断超导性AUC达0.996，预测临界温度平均误差小于1K。AI仅用28个GPU小时…",
      "publishedAt": "2026-07-03T03:27:15.000Z",
      "category": "paper",
      "comment": "点评：Elements Claw 的看点在于“预测—筛选—实验验证”闭环，而不是单纯宣称 AI 发现材料。AI for Science 真正的壁垒会落在领域模型、实验设计、失败样本和可复现数据上。",
      "advice": "建议：评估 AI for Science 项目时，看候选空间、实验验证比例、负样本披露、数据开放和复现实验路径，不要只被“发现新材料”标题吸引。"
    },
    {
      "topic": "industry",
      "title": "国家网信办就《互联网信息服务管理办法》再次征求意见，首设\"智能信息服务\"专章规范AI服务",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/972/341.htm",
      "date": "2026-07-04",
      "score": 79,
      "tags": [
        "AI HOT",
        "产业"
      ],
      "summary": "7月3日，国家互联网信息办公室就《互联网信息服务管理办法（修订草案征求意见稿）》再次公开征求意见。草案新增\"智能信息服务\"专章，要求AI服务提供者公示技术基本原理、训练数据来源，对生成合成内容进行标识，禁止强制用户使用智能服务或利用算法扰乱网络舆论。草案还强化用户账号管理，明确对超过6个月不登录账…",
      "publishedAt": "2026-07-03T09:15:08.000Z",
      "category": "industry",
      "comment": "点评：监管草案把“智能信息服务”单列成章，说明 AI 服务正在从功能创新进入责任披露阶段。训练数据来源、公示机制、合成内容标识和强制使用边界，都会影响产品上线节奏。",
      "advice": "建议：面向公众的 AI 产品应提前准备模型说明、数据来源口径、生成内容标识、用户关闭入口和舆情风险处理机制，别等合规审查时再补。"
    },
    {
      "topic": "product",
      "title": "Wan Video 推出\"音乐伴舞\"新功能",
      "source": "X：阿里云 / Alibaba Cloud (@alibaba_cloud)",
      "url": "https://x.com/alibaba_cloud/status/2072967570441834771",
      "date": "2026-07-04",
      "score": 77,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "Wan Video 新功能：**音乐伴舞** 💃 上传一个角色，添加一首歌曲，让 Wan Video 生成与节奏同步的舞蹈视频。 可用舞种： • 街舞 • 踢踏舞 • 拉丁舞 • K-Pop • 中国古典舞 从节拍至动作，你的角色随音乐起舞。 前往 wan.video 体验音乐伴舞 👉 htt…",
      "publishedAt": "2026-07-03T08:55:57.000Z",
      "category": "ai-products",
      "comment": "点评：音乐伴舞把视频生成与节拍控制结合，说明 AIGC 正在进入更细的可控编辑阶段。内容产品的竞争会从“能生成”转向“能否按音乐、角色和风格精准控制”。",
      "advice": "建议：营销和短视频团队可用它做角色舞蹈素材 A/B 测试，但要关注音乐版权、肖像授权、动作稳定性和导出后二次剪辑效率。"
    },
    {
      "topic": "safety",
      "title": "全球首例 AI Agent 勒索攻击曝光，从漏洞利用到数据库加密全程自主完成",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/972/424.htm",
      "date": "2026-07-04",
      "score": 76,
      "tags": [
        "AI HOT",
        "OpenAI",
        "Anthropic",
        "Google",
        "Gemini",
        "产业"
      ],
      "summary": "安全厂商 Sysdig 首次记录到 AI Agent\"JADEPUFFER\"自动完成的勒索攻击。攻击利用暴露的 Langflow 服务漏洞 CVE-2025-3248 远程执行 Python 代码，随后自主收集 OpenAI、Anthropic、DeepSeek、Gemini 等 API 密钥及阿…",
      "publishedAt": "2026-07-03T11:57:00.000Z",
      "category": "industry",
      "comment": "点评：AI Agent 勒索攻击的危险在于自动化链路完整：侦察、利用、凭证收集、横向移动和加密勒索都可连续执行。安全风险已经从“模型会不会回答坏问题”升级到“Agent 能不能操作真实系统”。",
      "advice": "建议：立即排查暴露的 Langflow、Nacos、MinIO、数据库与云凭证；把 AI/LLM 服务密钥纳入密钥轮换，限制横向访问，并为 Agent 行为检测建立异常命令告警。"
    },
    {
      "topic": "tip",
      "title": "藏师傅PPT与Pencil结合使用技巧",
      "source": "X：歸藏 (@op7418)",
      "url": "https://x.com/op7418/status/2073020264083050811",
      "date": "2026-07-04",
      "score": 75,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "用户将藏师傅的AI生成PPT导入Pencil设计软件，可在Pencil中一次性浏览所有页面并手动调整AI常见的排版问题，如元素重叠、对齐不准、字体错误。Pencil提供比PPT更强的编辑能力（对齐、嵌套、打组），支持导出网页和编辑文件，也可导出PNG后直接放入PPT演示。这种工作流昨天经朋友分享验…",
      "publishedAt": "2026-07-03T12:25:20.000Z",
      "category": "tip",
      "comment": "点评：这类技巧的价值在于承认 AI 输出仍需后期编辑：让 AI 先生成草稿，再用更强的设计工具统一检查对齐、字体和层级，能显著提升交付质量。",
      "advice": "建议：把 AI PPT 定位为初稿生成器，交付前增加一轮设计软件校对：统一字体、网格、留白、对齐和导出格式，避免直接拿 AI 草稿汇报。"
    },
    {
      "topic": "tip",
      "title": "Fable 的判断力：Simon Willison 从 Claude Code 团队获得的效率技巧",
      "source": "Simon Willison 博客",
      "url": "https://simonwillison.net/2026/Jul/3/judgement",
      "date": "2026-07-04",
      "score": 73,
      "tags": [
        "AI HOT",
        "Claude",
        "Claude Code",
        "观点"
      ],
      "summary": "Simon Willison 在 AIE 上与 Claude Code 团队交流后建议，让 Fable（以及 Opus）用自己的判断力工作，而非硬性规定行为。例如，直接让 Fable 自行决定何时编写测试，比给出具体规则更好。为应对价格即将上涨、节省 Fable token，Jesse Vince…",
      "publishedAt": "2026-07-03T18:51:06.000Z",
      "category": "tip",
      "comment": "点评：Simon Willison 的经验说明，强模型适合承担判断、审计和综合，小模型适合机械执行。Agent 工作流的核心不是让最贵模型包办一切，而是做任务分层和成本路由。",
      "advice": "建议：为编码 Agent 设计模型分工：强模型负责需求澄清、计划、审查和关键判断，便宜模型负责批量机械修改，并用成本看板验证节省是否真实。"
    },
    {
      "topic": "product",
      "title": "面向 Web 开发者的 Safari MCP 服务器",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://webkit.org/blog/18136/introducing-the-safari-mcp-server-for-web-developers",
      "date": "2026-07-04",
      "score": 72,
      "tags": [
        "AI HOT",
        "MCP",
        "产品"
      ],
      "summary": "Safari Technology Preview 247 推出 Safari MCP 服务器，基于 Model Context Protocol，允许任何 MCP 兼容客户端连接 Safari 浏览器窗口。智能体可获取 DOM、网络请求、截图、控制台输出等信息，自主完成调试、性能分析、可访问性检…",
      "publishedAt": "2026-07-03T09:59:42.679Z",
      "category": "ai-products",
      "comment": "点评：Safari MCP Server 把浏览器调试能力开放给 Agent，意味着前端开发将更依赖“可观测浏览器”。Agent 不再只读代码，还能看 DOM、网络、控制台和截图。",
      "advice": "建议：前端团队可把浏览器 MCP 纳入调试链路，但要隔离测试环境、限制敏感 cookie、记录 Agent 操作，并保留人工确认的发布门禁。"
    },
    {
      "topic": "model",
      "title": "生数科技发布 Vidu S1，推动视频生成迈向\"实时交互\"新时代",
      "source": "公众号：生数科技（Vidu·视频）",
      "url": "https://mp.weixin.qq.com/s/RuukpnoOA2tI0ERCNrLgtQ",
      "date": "2026-07-04",
      "score": 70,
      "tags": [
        "AI HOT",
        "模型"
      ],
      "summary": "7月3日，生数科技在2026全球数字经济大会上发布Vidu S1实时交互模型，支持实时视频通话和语音控制视频走向，实现无限时长连续互动。模型采用自回归扩散路线，基于已生成画面和语音指令持续预测后续内容；无需传统建模，一张图片即可创建角色并自定义音色。Vidu S1在540P分辨率下实现25FPS（…",
      "publishedAt": "2026-07-03T11:17:47.000Z",
      "category": "ai-models",
      "comment": "点评：Vidu S1 指向视频生成的新门槛：从离线生成短片走向实时交互。只要延迟和成本继续下降，视频模型会更像可对话的视觉角色，而不是一次性素材生成器。",
      "advice": "建议：视频团队可关注实时交互在虚拟主播、客服、教育陪练和游戏 NPC 中的延迟、成本与内容安全；内测阶段重点验证长时一致性和失控兜底。"
    },
    {
      "topic": "tip",
      "title": "《Fable》通关指南：短绳AI编程法",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://blog.okturtles.org/2026/07/short-leash-ai-method",
      "date": "2026-07-04",
      "score": 70,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "专业开发者经过一年多研究，总结出使用AI编码代理的\"短绳方法\"。该方法要求开发者全程参与：先规划并分解任务，从不使用YOLO模式，每次变更前审查差异并拒绝不想要的更改，每个子任务后提交以防止AI误操作（如Opus曾出现破坏性行为）。最终需进行人工与AI双重PR审查，PR须注明使用模型，提交者须亲自…",
      "publishedAt": "2026-07-03T06:16:11.377Z",
      "category": "tip",
      "comment": "点评：“短绳 AI 编程法”强调人类保持任务拆解、差异审查和提交节奏控制。它反驳了完全放手的幻想：高质量 AI 编程更像受控协作，而不是无人驾驶。",
      "advice": "建议：研发团队使用 AI 编程时，应坚持小步任务、小步提交、每步看 diff、禁止 YOLO 执行高风险命令，并在 PR 中标注模型参与范围。"
    },
    {
      "topic": "product",
      "title": "JoyAI App 上线 UGC 数字人功能，用户可\"捏\"出专属虚拟玩伴",
      "source": "公众号：京东JoyAI",
      "url": "https://mp.weixin.qq.com/s/XfpxdblzNWa5HxahRoT9pg",
      "date": "2026-07-04",
      "score": 68,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "JoyAI App 近日上线 UGC 数字人功能，用户只需上传一张照片即可生成专属虚拟数字分身，支持一键复刻写实形象或通过模板重塑为卡通风格，搭配用户自己的语音即可解锁专属陪伴。该功能复用\"万能博士\"技术底座，集成 JoyAI 语言、语音、数字人大模型，实现行业领先的全双工对话，支持随时打断、自然…",
      "publishedAt": "2026-07-03T10:03:25.000Z",
      "category": "ai-products",
      "comment": "点评：UGC 数字人把照片、声音和对话能力组合成陪伴入口，说明消费级 AI 正在从工具效率走向情绪交互。机会在个性化，风险也在肖像、声音授权和未成年人保护。",
      "advice": "建议：数字人产品要把肖像/声音授权、内容边界、未成年人保护和删除机制做成默认能力；先从低风险陪伴和生活助手场景验证留存。"
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
      "url": "https://github.com/teamchong/pxpipe",
      "note": "pxpipe：通过图像化压缩输入token降低Claude Code成本"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/HUANGCHIHHUNGLeo/claude-real-video",
      "note": "claude-real-video ─ 让任何大语言模型（LLM）都能观看视频"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/972/089.htm",
      "note": "阿里达摩院发布超导材料发现AI智能体Elements Claw"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/972/341.htm",
      "note": "国家网信办就《互联网信息服务管理办法》再次征求意见，首设\"智能信息服务\"专章规…"
    },
    {
      "name": "X：阿里云 / Alibaba Cloud (@alibaba_cloud)",
      "url": "https://x.com/alibaba_cloud/status/2072967570441834771",
      "note": "Wan Video 推出\"音乐伴舞\"新功能"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/972/424.htm",
      "note": "全球首例 AI Agent 勒索攻击曝光，从漏洞利用到数据库加密全程自主完成"
    },
    {
      "name": "X：歸藏 (@op7418)",
      "url": "https://x.com/op7418/status/2073020264083050811",
      "note": "藏师傅PPT与Pencil结合使用技巧"
    }
  ]
};

const episodeHistory = [
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
