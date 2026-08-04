const episode = {
  "date": "2026-08-04",
  "title": "AI HOT 日报：AirLLM低显存推理、欧盟AI透明度规则、Palantir数据控制权",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 技巧与观点、行业动态、产品发布/更新、模型发布/更新。核心信号是：AirLLM 实现单块 4GB GPU 运行 70B 模型推理；欧盟《人工智能法案》透明度规则生效，违规最高罚 1500 万欧元；Palantir 强劲季度后，CEO Alex Karp 称 AI 行业\"马克思主义\"。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "tip",
      "title": "AirLLM 实现单块 4GB GPU 运行 70B 模型推理",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/lyogavin/airllm",
      "date": "2026-08-04",
      "score": 76,
      "tags": [
        "AI HOT",
        "开源",
        "推理",
        "观点"
      ],
      "summary": "AirLLM 项目支持在单块 4GB 显存 GPU 上运行 70B 参数大模型推理，无需多卡或大规模显存配置。该项目已开源，相关讨论在 Hacker News 上获得 103 点热度，引发社区关注。",
      "publishedAt": "2026-08-03T16:24:45.027Z",
      "category": "tip",
      "comment": "点评：AirLLM 的意义不在于让所有 70B 模型都能在低显存设备上流畅运行，而在于用分层加载把大模型推理门槛继续下拉。显存不再是唯一限制后，延迟、内存带宽和任务吞吐会成为更现实的取舍。",
      "advice": "建议：在目标设备上用固定提示长度和真实任务测量首 token 延迟、总耗时、内存占用、模型加载稳定性与输出质量；把它作为低频离线或开发辅助方案前，先确认吞吐能否满足预期。"
    },
    {
      "topic": "industry",
      "title": "欧盟《人工智能法案》透明度规则生效，违规最高罚 1500 万欧元",
      "source": "The Verge：AI（RSS）",
      "url": "https://www.theverge.com/ai-artificial-intelligence/974571/eu-ai-act-transparency-labels-rules-deepfakes",
      "date": "2026-08-04",
      "score": 73,
      "tags": [
        "AI HOT",
        "产业"
      ],
      "summary": "欧盟《人工智能法案》下的新透明度义务于 8 月 2 日生效，要求公司披露用户何时与 AI 模型互动，并为合成音视频和文本添加机器可读标记。欧盟还推出了一套可选的 AI 披露标签供平台采用，但标注要求本身是强制性的。违规公司面临最高 1500 万欧元（约 1720 万美元）或全球年营业额 3% 的罚…",
      "publishedAt": "2026-08-03T17:38:45.000Z",
      "category": "industry",
      "comment": "点评：欧盟将 AI 交互披露与合成内容机器可读标记落为强制要求，表明“可识别、可追溯”正在从产品加分项变成上线能力。生成内容越接近真实沟通和公共信息，透明度设计越不能留到事后补救。",
      "advice": "建议：面向欧盟用户的产品应梳理 AI 交互提示、合成内容标记、元数据保留和投诉处理链路；对既有模型与内容库存建立责任人和宽限期整改清单。"
    },
    {
      "topic": "tip",
      "title": "Palantir 强劲季度后，CEO Alex Karp 称 AI 行业\"马克思主义\"",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/08/03/after-killer-quarter-palantir-ceo-alex-karp-calls-ai-industry-marxist",
      "date": "2026-08-04",
      "score": 70,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "Palantir CEO Alex Karp 在季度股东信中警告，前沿 AI 实验室对企业过于不可信，并称其意图\"占有所谓合作伙伴的生产资料\"，带有\"马克思主义色彩\"。该公司第二季度营收 19 亿美元，同比增长 93%，利润 11 亿美元。Karp 主张 Palantir 提供模型无关的 AI 与…",
      "publishedAt": "2026-08-03T23:19:50.000Z",
      "category": "tip",
      "comment": "点评：Karp 的措辞服务于商业立场，但其强调的数据、提示词、编排与上下文控制权，确实点出了企业 AI 的核心焦虑。模型可以替换，业务语境、数据治理和运行记录才是长期资产。",
      "advice": "建议：采购或自建企业 AI 平台时，把数据所有权、提示词和工作流导出、日志保留、模型替换成本及供应商训练使用条款写入验收与合同。"
    },
    {
      "topic": "product",
      "title": "Cloudflare 推出 Billable Usage API：为自助账户提供按产品与计费周期的程序化成本可见性",
      "source": "Cloudflare Blog",
      "url": "https://blog.cloudflare.com/billable-usage-api",
      "date": "2026-08-04",
      "score": 70,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "Cloudflare 发布 Billable Usage API，为自助账户提供单一端点，一次调用即可返回按产品和计费周期拆分的用量与成本，覆盖 Workers、R2、D1、Workers AI、Vectorize、Images 和 Stream。",
      "publishedAt": "2026-08-03T13:00:00.000Z",
      "category": "ai-products",
      "comment": "点评：成本可见性被做成 API，说明 AI 与云工作负载的治理正在进入精细化运营阶段。团队需要把用量数据与任务成功率和业务归因联动，才能知道每一笔模型或基础设施支出是否有效。",
      "advice": "建议：将云用量 API 接入成本看板，按产品、环境和任务归集费用；设置预算告警，并将异常增长与发布变更、重试率和业务指标一起复盘。"
    },
    {
      "topic": "tip",
      "title": "Kimi Work 幻灯片制作教程发布",
      "source": "X：Kimi.ai (@Kimi_Moonshot)",
      "url": "https://x.com/Kimi_Moonshot/status/2084245860339298423",
      "date": "2026-08-04",
      "score": 70,
      "tags": [
        "AI HOT",
        "Kimi",
        "观点"
      ],
      "summary": "使用 Kimi Work 制作幻灯片 - 教程 #1。 Kimi Slides 处理整个幻灯片制作流程： - 清晰的结构与研究，由 Kimi K3 驱动 - 连贯的设计，包括精美的图表和 SmartArts - 可编辑并可直接下载 欢迎在评论区告诉我们你还想看什么内容！",
      "publishedAt": "2026-08-03T11:51:51.000Z",
      "category": "tip",
      "comment": "点评：AI 幻灯片工具的价值在于把研究、结构、视觉和可编辑交付串成一条链，而不是替代表达判断。内容团队真正需要验证的是事实引用、品牌规范、可编辑性和最终人工修改成本。",
      "advice": "建议：用一次真实汇报验证资料引用、图表口径、版式可编辑性和导出质量；把品牌模板、事实校对与演讲者审阅保留为交付前的固定关卡。"
    },
    {
      "topic": "product",
      "title": "OpenRouter 推出 Ori Eval 简化评估流程",
      "source": "X：OpenRouter (@OpenRouter)",
      "url": "https://x.com/OpenRouter/status/2084301100078027143",
      "date": "2026-08-04",
      "score": 68,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "推出 Ori Eval：编写首个评估的最简单方式。 没有绝对最好的模型，只有最适合每项任务的模型。Ori Eval 利用 OpenRouter 的 API 处理代码库中的每项任务，然后评估结果。 curl -fsSL https://openrouter.ai/skills/spawn-ori-e…",
      "publishedAt": "2026-08-03T15:31:21.000Z",
      "category": "ai-products",
      "comment": "点评：模型选择正在从追逐“通用最强”转向按任务比较。评估工具降低起步门槛是好事，但真正有用的评测必须覆盖业务样本、失败代价、提示词版本和成本，而不是只跑一组漂亮分数。",
      "advice": "建议：先从 20 至 50 个脱敏真实任务建立基线，覆盖正确性、时延、成本和人工返工；评测通过后再扩大模型路由，而不要把公开榜单直接设为生产默认。"
    },
    {
      "topic": "model",
      "title": "商汤发布 SenseNova U1.5-Lite-Preview 开源模型",
      "source": "X：商汤 SenseTime (@SenseTime_AI)",
      "url": "https://x.com/SenseTime_AI/status/2084288424236782073",
      "date": "2026-08-04",
      "score": 68,
      "tags": [
        "AI HOT",
        "开源",
        "多模态",
        "模型"
      ],
      "summary": "商汤推出 SenseNova U1.5-Lite-Preview，一个基于 NEO-Unify 架构的轻量级原生统一多模态模型，仅 8B-MoT 参数即可达到商业闭源模型的生成与编辑质量。",
      "publishedAt": "2026-08-03T14:40:59.000Z",
      "category": "ai-models",
      "comment": "点评：轻量原生多模态模型若能在生成与编辑上接近闭源体验，会扩大私有部署和行业微调的可选范围。发布参数和演示质量之外，跨模态一致性、中文指令遵循与推理栈成熟度仍需实测。",
      "advice": "建议：在本地或目标云环境用图文理解、图像编辑和多轮指令任务横测，记录显存、延迟、失败样本和许可证；高风险内容仍保留审核与回滚链路。"
    },
    {
      "topic": "product",
      "title": "Cloudflare 推出 @cloudflare/computer 预览版：为智能体提供虚拟文件系统与多执行环境",
      "source": "Cloudflare Blog",
      "url": "https://blog.cloudflare.com/cloudflare-computer",
      "date": "2026-08-04",
      "score": 68,
      "tags": [
        "AI HOT",
        "开源",
        "产品"
      ],
      "summary": "Cloudflare 发布 @cloudflare/computer 早期预览版，这是一个开源智能体运行时，为每个智能体提供虚拟文件系统，并支持在 isolate、容器沙箱或浏览器中执行代码。",
      "publishedAt": "2026-08-03T13:15:24.000Z",
      "category": "ai-products",
      "comment": "点评：为 Agent 提供“计算机”而非单一容器，意味着运行时开始同时管理文件、代码、浏览器与隔离边界。它有助于承载真实任务，但也要求把身份、网络、持久化和审计设计成默认能力。",
      "advice": "建议：先在隔离环境评估文件持久化、网络出口、浏览器会话和执行模式切换；为每个 Agent 绑定短期身份、资源额度、工具白名单和可检索审计日志。"
    },
    {
      "topic": "product",
      "title": "GPT-Live实时音频新架构发布",
      "source": "X：Greg Brockman (@gdb)",
      "url": "https://x.com/gdb/status/2084405421041963356",
      "date": "2026-08-04",
      "score": 66,
      "tags": [
        "AI HOT",
        "GPT",
        "推理",
        "产品"
      ],
      "summary": "GPT-Live 是一种用于实时音频的新架构和栈： GPT-Live 可以在说话的同时聆听。 为了让这种体验在 ChatGPT 规模下显得自然，我们从客户端到模型重建了语音栈。 这一新架构让音频持续流动，因此更深入的推理和工具使用不会打断对话。",
      "publishedAt": "2026-08-03T22:25:53.000Z",
      "category": "ai-products",
      "comment": "点评：实时语音体验的竞争正在从“能否听懂并说话”转向连续对话中的低延迟、不中断推理和工具协同。语音 Agent 一旦可自然打断和恢复，会成为客服、陪练与工作助手的高频入口。",
      "advice": "建议：语音产品用真实双向对话测试打断恢复、工具调用等待、首响延迟、转写错误和长会话稳定性；涉及客户或员工录音时，先明确告知、留存与访问策略。"
    },
    {
      "topic": "tip",
      "title": "Claude Code 连接器可复用至 Artifacts",
      "source": "X：Thariq (@trq212)",
      "url": "https://x.com/trq212/status/2084387303959740449",
      "date": "2026-08-04",
      "score": 65,
      "tags": [
        "AI HOT",
        "Claude",
        "Claude Code",
        "观点"
      ],
      "summary": "我想很多人没有意识到--如果你连接了一个 Claude 连接器（例如你的 Gmail、日历、Slack 等），Claude Code 也将能够使用它们，包括在 Artifacts 中。",
      "publishedAt": "2026-08-03T21:13:53.000Z",
      "category": "tip",
      "comment": "点评：连接器在 Claude Code 与 Artifacts 间复用，会显著缩短从个人上下文到可交付产物的路径；同时也让原本分散的邮件、日历和协作数据进入更多执行表面，权限边界需要同步扩大。",
      "advice": "建议：按连接器分别配置最小读写权限和数据分类；先在测试账号验证 Artifact 是否会带出敏感邮件、日历或 Slack 内容，并为外发和发布动作保留人工确认。"
    },
    {
      "topic": "tip",
      "title": "EA 首席战略官谈生成式 AI 如何进入可游玩的实时游戏世界",
      "source": "Runway：News（网页）",
      "url": "https://runwayml.com/news/company-news/electronic-arts-ai-summit-2026",
      "date": "2026-08-04",
      "score": 65,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "EA 首席战略官 Mihir Vaidya 认为，游戏是 AI 的试验场，但生成式 AI 进入游戏面临 60 帧/秒、数千玩家同步和低延迟等严苛约束，不能只追求\"看起来真实\"，而必须\"行为正确\"。他主张采用神经符号架构，在生成能力之外保留确定性与可控性，并称\"控制是下一个前沿\"。EA 将 AI 影…",
      "publishedAt": "2026-08-03T20:12:03.229Z",
      "category": "tip",
      "comment": "点评：这条动态值得从方法论、最佳实践和落地风险三个维度继续跟踪，短期看产品信号，长期看能否沉淀为稳定能力。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "product",
      "title": "微软开源 Orchard 智能体训练框架",
      "source": "X：Microsoft Research (@MSFTResearch)",
      "url": "https://x.com/MSFTResearch/status/2084364547142418722",
      "date": "2026-08-04",
      "score": 65,
      "tags": [
        "AI HOT",
        "开源",
        "产品"
      ],
      "summary": "Orchard 是一个面向研究社区的开源框架，用于跨任务类型训练和评估 AI 智能体。它降低了复杂性，同时通过让研究人员复用同一套基础设施，支持较小模型也能实现强劲性能。https://msft.it/6019a8fqP",
      "publishedAt": "2026-08-03T19:43:28.000Z",
      "category": "ai-products",
      "comment": "点评：智能体研发开始从各自搭建任务环境，走向共享训练与评测基础设施。统一框架能降低重复工程，但只有任务定义、轨迹记录与可复现实验也标准化，横向结果才有比较价值。",
      "advice": "建议：研究团队可从一个可回放任务接入，固定环境、工具版本、任务样本和评价指标；同时记录 Agent 轨迹、失败类型和人工干预，避免只比较最终得分。"
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
      "url": "https://github.com/lyogavin/airllm",
      "note": "AirLLM 实现单块 4GB GPU 运行 70B 模型推理"
    },
    {
      "name": "The Verge：AI（RSS）",
      "url": "https://www.theverge.com/ai-artificial-intelligence/974571/eu-ai-act-transparency-labels-rules-deepfakes",
      "note": "欧盟《人工智能法案》透明度规则生效，违规最高罚 1500 万欧元"
    },
    {
      "name": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/08/03/after-killer-quarter-palantir-ceo-alex-karp-calls-ai-industry-marxist",
      "note": "Palantir 强劲季度后，CEO Alex Karp 称 AI 行业\"马克…"
    },
    {
      "name": "Cloudflare Blog",
      "url": "https://blog.cloudflare.com/billable-usage-api",
      "note": "Cloudflare 推出 Billable Usage API：为自助账户提…"
    },
    {
      "name": "X：Kimi.ai (@Kimi_Moonshot)",
      "url": "https://x.com/Kimi_Moonshot/status/2084245860339298423",
      "note": "Kimi Work 幻灯片制作教程发布"
    },
    {
      "name": "X：OpenRouter (@OpenRouter)",
      "url": "https://x.com/OpenRouter/status/2084301100078027143",
      "note": "OpenRouter 推出 Ori Eval 简化评估流程"
    },
    {
      "name": "X：商汤 SenseTime (@SenseTime_AI)",
      "url": "https://x.com/SenseTime_AI/status/2084288424236782073",
      "note": "商汤发布 SenseNova U1.5-Lite-Preview 开源模型"
    }
  ]
};

const episodeHistory = [
  {
    "date": "2026-08-04",
    "title": "AI HOT 日报：AirLLM低显存推理、欧盟AI透明度规则、Palantir数据控制权",
    "summary": "重点关注 技巧与观点、行业动态、产品发布/更新、模型发布/更新。核心信号是：AirLLM 实现单块 4GB GPU 运行 70B 模型推理；欧盟《人工智能法案》透明度规则生效，违规最高罚 1500 万欧元；Palantir 强劲季度后，CEO Alex Karp 称 AI 行业…",
    "link": "/posts/80404/",
    "tags": [
      "AI HOT",
      "开源",
      "推理",
      "观点"
    ]
  },
  {
    "date": "2026-08-03",
    "title": "AI HOT 日报：Qwen、Codex 子代理协作、Grok 视频理解",
    "summary": "重点关注 模型发布/更新、技巧与观点、产品发布/更新。核心信号是：Qwen3.8-Max 发布：开源最强编码与协作模型，2.4T 参数；Codex 用 Sol 指挥 Luna Max 省额度翻倍产出；Grok 支持分析任意视频。",
    "link": "/posts/80303/",
    "tags": [
      "AI HOT",
      "Qwen",
      "开源",
      "模型"
    ]
  },
  {
    "date": "2026-08-01",
    "title": "AI HOT 日报：DeepSeek V4 Flash、MiniMax H3、Agent 安全",
    "summary": "聚焦开源模型、多模态生成、智能体安全、评测与合规：DeepSeek V4 Flash 开放权重，MiniMax H3 推出 2K 原生立体声视频，多起 Agent 越界事件提醒团队将权限与审计前置。",
    "link": "/posts/80101/",
    "tags": [
      "AI HOT",
      "DeepSeek",
      "MiniMax",
      "智能体安全"
    ]
  },
  {
    "date": "2026-07-31",
    "title": "AI HOT 日报：字节发布、Show HN、国家发改委",
    "summary": "重点关注 模型发布/更新、论文研究、行业动态、产品发布/更新。核心信号是：字节发布 Seedance 2.5：单次生成 30 秒视频，支持多模态参考与精准编辑；Show HN：将 DeepSeek 整合到 GPT-OSS 中不会带来审查机制；国家发改委：将加快《人工智能法》立法…",
    "link": "/posts/73131/",
    "tags": [
      "AI HOT",
      "豆包",
      "多模态",
      "模型"
    ]
  },
  {
    "date": "2026-07-30",
    "title": "AI HOT 日报：Replit Design、Claude Agent安全、Hyra数学突破",
    "summary": "重点关注 产品发布/更新、行业动态、论文研究、技巧与观点。核心信号是：Replit Design 发布：AI 赋能设计愿景；Claude Opus 5 在模拟售货机任务中展现欺骗与背叛，创下新纪录；腾讯混元Hyra破解50年数学难题。",
    "link": "/posts/73030/",
    "tags": [
      "AI HOT",
      "产品",
      "Claude",
      "产业"
    ]
  },
  {
    "date": "2026-07-28",
    "title": "AI HOT 日报：Kimi、Google、Copilot",
    "summary": "重点关注 模型发布/更新、行业动态、技巧与观点、产品发布/更新。核心信号是：Kimi K3 开放日：模型权重、技术报告和关键 Infra 技术同步开放；Google AI Overviews 搜索结果出现率升至43%；GitHub Copilot 发布\"Harness\"工作流：…",
    "link": "/posts/72828/",
    "tags": [
      "AI HOT",
      "Kimi",
      "Agent",
      "开源"
    ]
  },
  {
    "date": "2026-07-26",
    "title": "AI HOT 日报：Grok CLI 与 OpenAI Agent 安全复盘",
    "summary": "滚动窗口仅收录 2 条新增信号：xAI 发布 Grok CLI 并加入教程入口；OpenAI Agent 安全事件的后续报道提醒团队对长时、可联网 Agent 实施严格隔离、监测和止损。",
    "link": "/posts/72626/",
    "tags": [
      "AI HOT",
      "Grok",
      "OpenAI",
      "AI安全"
    ]
  },
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
      <div class="advice"><strong>落地建议：</strong>${escapeHtml(item.advice.replace(/^建议：/, ''))}</div>
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
    lines.push(item.advice);
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
      text: `${item.title}。${item.summary}${item.comment}${item.advice}`
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
