const episode = {
  "date": "2026-07-17",
  "title": "AI HOT 日报：Grok Automations、智能体安全、Claude Code迁移",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注产品自动化、智能体安全、真实场景评测、多模态可靠性与推理效率。核心信号是：Grok 让任务按计划或邮件触发；企业 Agent 的身份与评测缺口浮现；Claude Code 的大规模迁移案例显示收益必须与测试和回归一起衡量。",
  "conclusion": "今天的关键不是让 Agent 做更多事，而是先把身份、权限、评测、人工接管与回滚边界做清楚。可观察、可回滚、可追责的工作流，才是把热点转成生产力的稳妥路径。",
  "items": [
    {
      "topic": "product",
      "title": "Grok 推出 Automations 功能：定时或邮件触发，自动执行任务并汇报结果",
      "source": "xAI：News（网页）",
      "url": "https://x.ai/news/grok-automations",
      "date": "2026-07-17",
      "score": 85,
      "tags": [
        "AI HOT",
        "Grok",
        "Agent",
        "产品"
      ],
      "publishedAt": "2026-07-16T21:39:40.165Z",
      "category": "ai-products",
      "summary": "xAI 为 Grok 引入 Automations：用户可描述任务，并按一次、每日、工作日、每周等计划运行，或按邮件条件触发；每次执行会保存完整对话，结果支持邮件或应用内通知。",
      "comment": "点评：任务从聊天窗口走向定时和邮件触发，AI 的价值开始取决于能否稳定接入真实工作流；效率会被放大，错误、越权和噪声也会被同步放大。",
      "advice": "建议：先用于日报汇总、信息筛选和草稿生成等可复核任务；为每个自动化定义输入范围、输出收件人、失败通知、预算上限与人工复核点。"
    },
    {
      "topic": "product",
      "title": "Google Vids 上线 Gemini Omni 与个人数字分身功能",
      "source": "Google Blog：AI（RSS）",
      "url": "https://blog.google/products-and-platforms/products/workspace/gemini-omni-personal-avatars",
      "date": "2026-07-17",
      "score": 60,
      "tags": [
        "AI HOT",
        "Gemini",
        "视频",
        "产品"
      ],
      "publishedAt": "2026-07-16T16:00:00.000Z",
      "category": "ai-products",
      "summary": "Google Vids 新增 Gemini Omni，可用自然语言和图片参考生成、逐步编辑视频；个人数字分身允许用户上传自拍与语音录制，再通过文字让数字分身出镜，生成内容带有 SynthID 数字水印。",
      "comment": "点评：视频生成正从一次性片段走向按脚本持续编辑、由虚拟角色交付内容；企业真正的难题在肖像授权、品牌一致性、可编辑性和撤回机制。",
      "advice": "建议：优先在培训、内部说明和产品演示等低风险场景试点；建立人物授权台账、素材审批、生成标识和撤稿流程。"
    },
    {
      "topic": "product",
      "title": "面壁智能开源企业 AI 数字员工平台 StaffDeck",
      "source": "X：面壁智能 OpenBMB (@OpenBMB)",
      "url": "https://x.com/OpenBMB/status/2077741814799548451",
      "date": "2026-07-17",
      "score": 66,
      "tags": [
        "AI HOT",
        "Agent",
        "开源",
        "企业AI"
      ],
      "publishedAt": "2026-07-16T13:07:05.000Z",
      "category": "ai-products",
      "summary": "StaffDeck 是面向企业数字员工的开源平台，尝试把专业知识、标准作业程序和决策规则转化为可持续工作、改进并保留组织知识的任务系统，而非传统聊天机器人。",
      "comment": "点评：企业 AI 的焦点正在从部署问答机器人转向把岗位流程变成可监督任务系统；护城河仍是组织知识的结构化程度和权限治理质量。",
      "advice": "建议：从知识检索、会议纪要、资料归档等单一高频低权限流程开始，先固化 SOP、异常分支和验收标准。"
    },
    {
      "topic": "safety",
      "title": "xAI 起诉 Grok 用户制作儿童性虐待内容，不再否认模型被滥用",
      "source": "Ars Technica：AI（RSS）",
      "url": "https://arstechnica.com/tech-policy/2026/07/xai-cant-deny-grok-makes-csam-anymore-so-its-suing-users",
      "date": "2026-07-17",
      "score": 87,
      "tags": [
        "AI HOT",
        "Grok",
        "安全",
        "治理"
      ],
      "publishedAt": "2026-07-16T20:26:23.000Z",
      "category": "industry",
      "summary": "xAI 首次对一名 Grok 用户提起诉讼，指控其利用模型制作儿童性虐待图像。报道显示，争议不只在用户行为，也在平台如何识别、阻断和留存处置证据。",
      "comment": "点评：高风险滥用不是仅靠用户协议就能解决的问题；生成、编辑和自动化传播能力一旦上线，护栏、举报、处置时效和取证链路都会成为产品能力。",
      "advice": "建议：建立分级风控、快速举报与人工升级通道；涉及未成年人和非自愿私密内容时，采用保守的拦截和审查策略。"
    },
    {
      "topic": "safety",
      "title": "54% 企业已遭遇 AI 智能体安全事件，多数仍共享凭证",
      "source": "VentureBeat：AI（RSS）",
      "url": "https://venturebeat.com/ai/the-agent-security-gap-54-of-enterprises-have-already-had-an-ai-agent-incident-and-most-still-let-agents-share-credentials",
      "date": "2026-07-17",
      "score": 70,
      "tags": [
        "AI HOT",
        "Agent",
        "安全",
        "企业AI"
      ],
      "publishedAt": "2026-07-16T19:02:38.000Z",
      "category": "industry",
      "summary": "对 107 家企业的调查显示，54% 已遭遇 AI 智能体安全事件或险些酿成事故；仅 32% 为每个智能体分配独立身份凭证，30% 将高风险智能体隔离在沙箱中。",
      "comment": "点评：Agent 安全的最小单位不是模型，而是身份、工具、数据和操作范围；共享凭证会让审计、撤销、归因和最小权限全部失效。",
      "advice": "建议：为每个 Agent 建立独立服务身份、最小权限与短期令牌；高风险工具默认隔离，并对异常调用、密钥访问和外网请求设置告警。"
    },
    {
      "topic": "industry",
      "title": "企业 AI 智能体评估存在“现实对齐”缺口",
      "source": "VentureBeat：AI（RSS）",
      "url": "https://venturebeat.com/ai/the-agent-evaluation-gap-enterprise-ai-organizations-have-a-reality-alignment-problem-not-a-coverage-problem-and-most-are-shipping-to-production-anyway",
      "date": "2026-07-17",
      "score": 72,
      "tags": [
        "AI HOT",
        "Agent",
        "评测",
        "企业AI"
      ],
      "publishedAt": "2026-07-16T16:40:48.000Z",
      "category": "tip",
      "summary": "对 157 家企业的调查显示，约半数组织曾把通过内部测试的 AI Agent 或 LLM 功能部署到生产后却导致客户故障；只有少数组织完全信任自动化评估。",
      "comment": "点评：离线分数好看，不等于线上可无人值守。评测若没覆盖脏数据、外部依赖失败、并发和长尾流程，就无法代表真实业务风险。",
      "advice": "建议：用真实工单、匿名化历史数据和故障回放构建分层评测；采用灰度、影子运行、可回滚输出和人工兜底。"
    },
    {
      "topic": "industry",
      "title": "欧盟裁定 Google 必须向竞争对手开放 Android 和 Search，影响 Gemini 等 AI 服务",
      "source": "The Verge：AI（RSS）",
      "url": "https://www.theverge.com/policy/966438/eu-google-android-ai-interoperability-search-data-dma",
      "date": "2026-07-17",
      "score": 78,
      "tags": [
        "AI HOT",
        "Google",
        "Gemini",
        "产业"
      ],
      "publishedAt": "2026-07-16T12:06:51.000Z",
      "category": "industry",
      "summary": "欧盟依据《数字市场法案》要求 Google 向竞争对手开放 Android 和 Google Search 的关键部分，并为第三方 AI 助手和搜索引擎提供更大的访问空间。",
      "comment": "点评：AI 助手的竞争已从模型层延伸到系统入口、搜索分发和默认设置；数据接口、兼容标准与迁移成本正在成为战略变量。",
      "advice": "建议：把登录、数据导出、工具接口和模型路由设计成可替换模块，不要把增长完全建立在单一系统入口或单一搜索分发上。"
    },
    {
      "topic": "paper",
      "title": "Moonshot AI 发布 PerceptionBench：多模态模型视觉感知能力诊断基准",
      "source": "Moonshot AI：Kimi Blog",
      "url": "https://www.kimi.com/blog/perception-bench",
      "date": "2026-07-17",
      "score": 70,
      "tags": [
        "AI HOT",
        "多模态",
        "评测",
        "论文"
      ],
      "publishedAt": "2026-07-16T19:11:01.192Z",
      "category": "paper",
      "summary": "PerceptionBench 从 40 多个既有基准的失败案例归纳出 10 项原子感知能力与 3,000 道验证题；报告显示，被测模型准确率均未超过 60%，且部分正确答案无法稳定复现。",
      "comment": "点评：多模态系统最危险的错误是看错了却很自信。视觉理解进入质检、风控或机器人场景后，稳定性、可重复性和证据呈现比单次演示更重要。",
      "advice": "建议：记录模型版本、预处理与提示词；关键结论采用多次采样、规则校验或人工复核，不将一次模型回答直接写入业务系统。"
    },
    {
      "topic": "paper",
      "title": "HYPIC：混合注意力大模型的位置无关缓存系统",
      "source": "公众号：小红书技术（dots.llm）",
      "url": "https://mp.weixin.qq.com/s/RWveWvw9yBH6YQINBQ-XjA",
      "date": "2026-07-17",
      "score": 77,
      "tags": [
        "AI HOT",
        "推理",
        "性能",
        "论文"
      ],
      "publishedAt": "2026-07-16T10:00:00.000Z",
      "category": "paper",
      "summary": "HYPIC 面向混合注意力大模型实现位置无关缓存，报告称首 token 延迟平均降低 3.25 倍，在四个生产级模型上、同等服务目标下的持续 QPS 提升 1.66 倍。",
      "comment": "点评：真实产品体验不只由参数规模决定，首 token 延迟、并发、缓存命中与单位成本同样关键；推理系统优化决定模型像不像可用工具。",
      "advice": "建议：同时观察 P50/P95 延迟、缓存命中率、吞吐、输出质量与异常回退，不要只用单个平均值判断优化价值。"
    },
    {
      "topic": "tip",
      "title": "Anthropic 用 Claude Code 大规模迁移代码：Bun 百万行 Zig 转 Rust，两周完成",
      "source": "Claude：Blog（网页）",
      "url": "https://claude.com/blog/ai-code-migration",
      "date": "2026-07-17",
      "score": 65,
      "tags": [
        "AI HOT",
        "Claude Code",
        "编程",
        "Agent"
      ],
      "publishedAt": "2026-07-16T17:32:26.540Z",
      "category": "tip",
      "summary": "Anthropic 分享 Claude Code 推进大规模代码迁移的案例：Bun 的百万行 Zig 迁移至 Rust 在两周内完成，既有测试全部通过；合并后出现的 19 个回归问题也已修复。",
      "comment": "点评：案例的价值不在 AI 写了多少代码，而在测试、人工审查、回归修复与经济账一起被呈现；Agent 能加速迁移，但不能替代架构边界和验收责任。",
      "advice": "建议：大型迁移采用模块化切片、兼容层、可重复基准和逐步切流；记录生成比例、测试覆盖、人工返工、回归数量与成本。"
    },
    {
      "topic": "tip",
      "title": "Patter SDK 教程：构建带护栏、延迟仪表盘与评估检查的电话智能体",
      "source": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/16/patter-sdk-guide-to-building-a-restaurant-booking-phone-agent-with-dynamic-variables-guardrails-latency-dashboards-and-eval-checks",
      "date": "2026-07-17",
      "score": 72,
      "tags": [
        "AI HOT",
        "语音Agent",
        "护栏",
        "评测"
      ],
      "publishedAt": "2026-07-16T07:42:49.000Z",
      "category": "tip",
      "summary": "Patter SDK 的电话智能体示例覆盖动态变量、工具调用、PII 脱敏、话题护栏、脚本化通话模拟、延迟与成本追踪，以及回归式评估检查。",
      "comment": "点评：语音 Agent 的产品化不取决于声音像不像人，而取决于能否把身份、隐私、工具调用、超时、转人工和评估做成闭环。",
      "advice": "建议：先从预约、查询、回访等流程明确的任务做起；将脱敏、误解澄清、转人工阈值、告知与失败监控作为上线前必备项。"
    },
    {
      "topic": "tip",
      "title": "Decoy 字体：用空间频率混淆让 AI 看不清输入文字",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://www.mixfont.com/experiments/decoy-font",
      "date": "2026-07-17",
      "score": 70,
      "tags": [
        "AI HOT",
        "视觉模型",
        "安全",
        "观点"
      ],
      "publishedAt": "2026-07-16T18:32:23.680Z",
      "category": "ai-products",
      "summary": "Decoy Font 通过在同一字符中叠加不同空间频率图形，使人眼和视觉模型在不同观察条件下读取到不同文字，展示两者在感知上的差异。",
      "comment": "点评：把文字变成图片并不天然等于安全，也不应被当成隐藏敏感信息的手段；它更适合作为模型鲁棒性和人机感知差异的研究素材。",
      "advice": "建议：将此类对抗样本纳入 OCR、视觉审核和文档理解的测试集；安全仍应依赖权限控制、加密、审计与数据最小化。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "xAI：News（网页）",
      "url": "https://x.ai/news/grok-automations",
      "note": "Grok Automations"
    },
    {
      "name": "VentureBeat：AI（RSS）",
      "url": "https://venturebeat.com/ai/the-agent-security-gap-54-of-enterprises-have-already-had-an-ai-agent-incident-and-most-still-let-agents-share-credentials",
      "note": "企业 AI 智能体安全调查"
    },
    {
      "name": "Moonshot AI：Kimi Blog",
      "url": "https://www.kimi.com/blog/perception-bench",
      "note": "PerceptionBench 多模态视觉感知基准"
    },
    {
      "name": "Claude：Blog（网页）",
      "url": "https://claude.com/blog/ai-code-migration",
      "note": "Claude Code 大规模代码迁移案例"
    },
    {
      "name": "Google Blog：AI（RSS）",
      "url": "https://blog.google/products-and-platforms/products/workspace/gemini-omni-personal-avatars",
      "note": "Google Vids、Gemini Omni 与个人数字分身"
    }
  ]
};

const episodeHistory = [
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
