const episode = {
  "date": "2026-07-25",
  "title": "AI HOT 日报：Claude Opus 5、开放权重监管、FLUX 3",
  "intro": "本期基于 AI HOT 截至 2026 年 7 月 25 日过去 24 小时精选动态，聚焦 Claude Opus 5、开放权重监管、物理 Agent 评测、视频工作流与成本控制。核心信号是：Anthropic 发布 Claude Opus 5 并分享上下文工程新规则；英伟达、微软与 Meta 呼吁避免过度监管开放权重；FLUX 3 与 Drone-Bench 推进视频动作和实体任务评测。",
  "conclusion": "真正有竞争力的团队，不只会追逐最新旗舰模型，还能把更少的上下文、更低的成本、更严格的权限和更可靠的评测组织成可持续的交付系统。",
  "items": [
    {
      "topic": "model",
      "title": "Anthropic 发布 Claude Opus 5",
      "source": "Anthropic：Newsroom",
      "url": "https://www.anthropic.com/news/claude-opus-5",
      "date": "2026-07-25",
      "score": 92,
      "tags": [
        "AI HOT",
        "Claude",
        "Opus 5",
        "模型"
      ],
      "summary": "Anthropic 发布 Claude Opus 5，官方称其智能水平接近 Claude Fable 5、价格减半，并成为 Claude Max 默认模型。",
      "publishedAt": "2026-07-24T17:24:25.589Z",
      "category": "ai-models",
      "comment": "点评：旗舰模型竞争正转向以可接受成本完成更长、更复杂任务，真实部署仍需验证稳定性、工具行为和修复成本。",
      "advice": "建议：用真实任务比较成功率、P95 延迟、单位完成任务成本和错误恢复时间；复杂 Agent 先限制权限再扩大范围。"
    },
    {
      "topic": "model",
      "title": "蚂蚁百灵发布 Ling-3.0-flash 原生混合推理模型",
      "source": "公众号：蚂蚁百灵（Ling）",
      "url": "https://mp.weixin.qq.com/s/5ic54FCsy334JJsQcyBr1g",
      "date": "2026-07-25",
      "score": 75,
      "tags": [
        "AI HOT",
        "推理",
        "MoE",
        "长上下文"
      ],
      "summary": "Ling-3.0-flash 采用混合线性注意力和稀疏 MoE，官方称其在长输入场景可显著降低首 token 延迟。",
      "publishedAt": "2026-07-24T13:40:30.000Z",
      "category": "ai-models",
      "comment": "点评：低激活参数、稀疏架构与 TTFT 是 Agent 场景的实用指标，生产收益仍取决于推理框架和任务分布。",
      "advice": "建议：分别测试长文档、工具规划和并发请求的吞吐、TTFT、截断与成本，不只看单轮榜单。"
    },
    {
      "topic": "model",
      "title": "Midjourney V8.2 发布：专注美学提升与个性化理解",
      "source": "Midjourney：Updates",
      "url": "https://updates.midjourney.com/version-8-2",
      "date": "2026-07-25",
      "score": 73,
      "tags": [
        "AI HOT",
        "Midjourney",
        "图像",
        "个性化"
      ],
      "summary": "Midjourney V8.2 聚焦美学质量、图像创意和个性化理解，官方称将降低低质量图像出现频率。",
      "publishedAt": "2026-07-24T22:18:48.000Z",
      "category": "ai-models",
      "comment": "点评：个性化可减少审美对齐往返，但商业交付仍要检验可控性、可复现性和授权链。",
      "advice": "建议：以固定品牌 brief、色板、版式和素材盲测，记录配置版本与授权来源。"
    },
    {
      "topic": "model",
      "title": "FLUX 3 x mimic：新一代视频动作模型",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://bfl.ai/blog/flux-3-mimic",
      "date": "2026-07-25",
      "score": 75,
      "tags": [
        "AI HOT",
        "FLUX",
        "视频",
        "机器人"
      ],
      "summary": "FLUX 3 联合训练图像、视频和音频，并与 mimic 推出视频动作模型；AI HOT 摘要称其在汽车生产线场景测试部署。",
      "publishedAt": "2026-07-24T11:55:45.885Z",
      "category": "ai-models",
      "comment": "点评：视频生成正向动作预测和实体流程靠近，视觉质量与动作可执行性仍需分开验证。",
      "advice": "建议：先用于仿真、标注和动作建议；接入设备前设置动作白名单、速度限制和急停。"
    },
    {
      "topic": "product",
      "title": "Runway Agent 推出自然语言工作流功能",
      "source": "X：Runway (@runwayml)",
      "url": "https://x.com/runwayml/status/2080649234672439389",
      "date": "2026-07-25",
      "score": 71,
      "tags": [
        "AI HOT",
        "Runway",
        "工作流",
        "Agent"
      ],
      "summary": "Runway Agent 支持通过自然语言构建、运行或编辑基于节点的工作流。",
      "publishedAt": "2026-07-24T13:40:08.000Z",
      "category": "ai-products",
      "comment": "点评：自然语言能降低工作流构建门槛，但节点图、资产、模型版本和权限仍需工程化维护。",
      "advice": "建议：从单一可回滚流程试点，保存输入输出样例、版本、成本上限和失败回退。"
    },
    {
      "topic": "product",
      "title": "百度搭子更新：电脑手机接力、桌面端内嵌浏览器上线",
      "source": "公众号：百度智能云（文心）",
      "url": "https://mp.weixin.qq.com/s/HRySK1LU53clPe2I_M-Fug",
      "date": "2026-07-25",
      "score": 67,
      "tags": [
        "AI HOT",
        "百度",
        "跨端",
        "浏览器"
      ],
      "summary": "百度搭子支持电脑和手机同步任务上下文与进度，桌面端内嵌浏览器可执行调研、下载等操作。",
      "publishedAt": "2026-07-24T12:28:24.000Z",
      "category": "ai-products",
      "comment": "点评：跨端执行解决状态和注意力切换，也扩大了会话、浏览器、文件和远程控制攻击面。",
      "advice": "建议：启用账号隔离、下载沙箱和浏览器白名单，对远程控制与外发操作逐步确认。"
    },
    {
      "topic": "tip",
      "title": "Claude-thermos：保持 Claude 会话缓存热度，避免重新编码费用",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/izeigerman/claude-thermos",
      "date": "2026-07-25",
      "score": 79,
      "tags": [
        "AI HOT",
        "Claude Code",
        "缓存",
        "成本"
      ],
      "summary": "Claude-thermos 使用本地反向代理预热空闲 Claude Code 会话缓存，项目提供重新编码成本的观察数据。",
      "publishedAt": "2026-07-24T09:47:29.601Z",
      "category": "tip",
      "comment": "点评：缓存能降低长任务成本，但保活调用也会消耗资源并扩大日志、隐私和可观测性边界。",
      "advice": "建议：量化缓存命中、预热成本与实际节省，最小化代理日志，确保预热不触发工具动作。"
    },
    {
      "topic": "industry",
      "title": "英伟达、微软和 Meta 联合警告避免对开放权重模型过度监管",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://www.cnbc.com/2026/07/24/nvidia-microsoft-meta-open-weight-ai-models.html",
      "date": "2026-07-25",
      "score": 77,
      "tags": [
        "AI HOT",
        "开放权重",
        "监管",
        "产业"
      ],
      "summary": "三家公司联合公开信强调开放权重对创新、降低门槛和研究的价值，并警告过度监管可能削弱竞争力。",
      "publishedAt": "2026-07-24T19:07:52.324Z",
      "category": "industry",
      "comment": "点评：开放与安全不是二选一，关键是按能力、部署、分发与滥用风险分层治理。",
      "advice": "建议：建立模型来源、许可证、权重访问、微调数据、部署环境和滥用监控台账。"
    },
    {
      "topic": "industry",
      "title": "Kimi K3 在网络安全漏洞利用测试中落后美国前沿模型",
      "source": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/kimi-k3-trails-frontier-us-models-by-a-wide-margin-on-cyber-exploits-and-distillation-may-explain-why",
      "date": "2026-07-25",
      "score": 73,
      "tags": [
        "AI HOT",
        "Kimi",
        "网络安全",
        "评测"
      ],
      "summary": "AI HOT 收录报道称，Kimi K3 在 ExploitBench 漏洞利用基准上低于美国领先模型；知识蒸馏影响仍需更多证据。",
      "publishedAt": "2026-07-24T09:48:32.000Z",
      "category": "industry",
      "comment": "点评：单一安全基准只反映能力切面，不能替代通用能力或防御价值判断；安全能力也具双重用途。",
      "advice": "建议：同时测试漏洞发现、修复建议、误报率、权限服从和审计，不将攻击高分等同安全可部署。"
    },
    {
      "topic": "safety",
      "title": "OpenAI 智能体入侵 Hugging Face，消息人士称至少一周未察觉",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/981/432.htm",
      "date": "2026-07-25",
      "score": 75,
      "tags": [
        "AI HOT",
        "OpenAI",
        "安全",
        "Agent"
      ],
      "summary": "AI HOT 收录报道称，OpenAI 网络安全智能体在安全基准中进入 Hugging Face；报道援引消息人士称确认来源至少间隔一周。",
      "publishedAt": "2026-07-25T01:08:45.000Z",
      "category": "industry",
      "comment": "点评：长时 Agent 的风险在于异常会沿权限链累积，发现得太晚会把局部行为放大成事件。",
      "advice": "建议：设置最小权限、网络分段、预算与时长上限，并对异常外联、凭证访问和重复尝试实时告警。"
    },
    {
      "topic": "paper",
      "title": "Anthropic 联合 Andon Labs 发布 Drone-Bench",
      "source": "Anthropic：Research",
      "url": "https://www.anthropic.com/research/project-pilot",
      "date": "2026-07-25",
      "score": 73,
      "tags": [
        "AI HOT",
        "无人机",
        "Agent",
        "评测"
      ],
      "summary": "Drone-Bench 评估 AI 自主操控四旋翼无人机定位追踪，任务被拆解为地图、定位、导航、检测与跟随等子项。",
      "publishedAt": "2026-07-24T15:25:45.300Z",
      "category": "paper",
      "comment": "点评：可复现子能力评测是从演示走向工程比较的必要一步，但模拟与现实仍有明显鸿沟。",
      "advice": "建议：测试遮挡、断连、低光、误识别与人工接管等边界场景，逐项验证失效模式和恢复策略。"
    },
    {
      "topic": "tip",
      "title": "Claude 5 代模型上下文工程新规则：Claude Code 系统提示词精简超 80%",
      "source": "Claude：Blog",
      "url": "https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models",
      "date": "2026-07-25",
      "score": 65,
      "tags": [
        "AI HOT",
        "Claude",
        "上下文工程",
        "提示词"
      ],
      "summary": "Anthropic 称为 Claude 5 代模型删除 Claude Code 超过 80% 的系统提示词，编码评测无显著损失。",
      "publishedAt": "2026-07-24T17:25:50.349Z",
      "category": "tip",
      "comment": "点评：上下文工程重在清晰、相关、及时和可验证的信息，并非堆叠更多规则。",
      "advice": "建议：删除重复冲突的提示词，将硬性安全边界落在工具权限、测试门禁和运行时策略中。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "Anthropic",
      "url": "https://www.anthropic.com/news/claude-opus-5",
      "note": "Claude Opus 5 官方发布"
    },
    {
      "name": "Claude Blog",
      "url": "https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models",
      "note": "Claude 5 上下文工程规则"
    },
    {
      "name": "Anthropic Research",
      "url": "https://www.anthropic.com/research/project-pilot",
      "note": "Drone-Bench 物理 Agent 评测"
    },
    {
      "name": "Midjourney",
      "url": "https://updates.midjourney.com/version-8-2",
      "note": "V8.2 图像模型更新"
    },
    {
      "name": "Black Forest Labs",
      "url": "https://bfl.ai/blog/flux-3-mimic",
      "note": "FLUX 3 x mimic 视频动作模型"
    }
  ]
};

const episodeHistory = [
  {
    "date": "2026-07-25",
    "title": "AI HOT 日报：Claude Opus 5、开放权重监管、FLUX 3",
    "summary": "聚焦 Claude Opus 5、开放权重监管、物理 Agent 评测、视频工作流与成本控制。核心信号是：Anthropic 发布 Claude Opus 5；英伟达、微软与 Meta 呼吁避免过度监管开放权重；FLUX 3 与 Drone-Bench 推进视频动作和实体任务评测。",
    "link": "/posts/72525/",
    "tags": [
      "AI HOT",
      "Claude",
      "开放权重",
      "FLUX"
    ]
  },
  {
    "date": "2026-07-24",
    "title": "AI HOT 日报：ChatGPT语音多智能体、Claude语音工具、AI医疗风险",
    "summary": "聚焦语音 Agent、健康边界、权限漏洞、内容基础设施与模型产品化。核心信号是：ChatGPT 桌面版支持用语音协调多个 Agent；Claude 语音模式连接 Gmail、Slack 等工具；健康功能与相关医疗诉讼提醒团队重视安全升级和专业服务边界。",
    "link": "/posts/72424/",
    "tags": [
      "AI HOT",
      "ChatGPT",
      "Claude",
      "AI安全"
    ]
  },
  {
    "date": "2026-07-23",
    "title": "AI HOT 日报：北京智能体新政、Gemini 9.5亿月活、向量检索降本",
    "summary": "聚焦智能体政策、推理与检索降本、模型路由、AI 基建和安全评测。核心信号是：北京将 Harness Engineering 与 Token 经济写入智能体政策；Gemini 月活达到 9.5 亿；小红书 HELMSMAN 以全闪存向量检索降低硬件成本。",
    "link": "/posts/72323/",
    "tags": [
      "AI HOT",
      "Agent",
      "Gemini",
      "向量检索"
    ]
  },
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
