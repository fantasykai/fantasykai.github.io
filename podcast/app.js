const episode = {
  "date": "2026-07-13",
  "title": "AI HOT 日报：xAI、黄仁勋、ChatGPT Work",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 行业动态、产品发布/更新、模型发布/更新、技巧与观点。核心信号是：xAI 官方 Grok CLI 被曝静默上传整个代码库及用户密钥；黄仁勋：英伟达季度收入逼近千亿美元，Rubin Ultra 架构未延期；Codex与ChatGPT Work多项更新：取消5小时限制。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "safety",
      "title": "xAI 官方 Grok CLI 被曝静默上传整个代码库及用户密钥",
      "source": "公众号：数字生命卡兹克",
      "url": "https://mp.weixin.qq.com/s/6c6vGMJAVMbh6UhNVw4dcg",
      "date": "2026-07-13",
      "score": 86,
      "tags": [
        "AI HOT",
        "Google",
        "xAI",
        "Grok",
        "Claude",
        "产业"
      ],
      "summary": "安全研究者发现，xAI 官方 Grok CLI（npm 包 `@xai-official/grok` 0.2.93 版）会在每轮任务前后，将当前工作目录打包为 `before_codebase.tar.gz` 和 `after_codebase.tar.gz`，通过独立旁路通道静默上传至 xAI …",
      "publishedAt": "2026-07-13T00:05:00.000Z",
      "category": "industry",
      "comment": "点评：Grok CLI 争议把 AI 编程工具的信任问题直接摆上桌面：本地客户端一旦能读取仓库、密钥和历史 diff，上传边界必须透明、可审计、可关闭。开发者工具的安全不只是模型安全，也是供应链安全。",
      "advice": "建议：立即审计已安装的 AI CLI 和 npm 包，检查网络上传、遥测、忽略文件、密钥扫描和版本变更；敏感仓库应使用隔离账号、最小权限 token、出站网络控制和本地日志留存。"
    },
    {
      "topic": "industry",
      "title": "黄仁勋：英伟达季度收入逼近千亿美元，Rubin Ultra 架构未延期",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/975/865.htm",
      "date": "2026-07-13",
      "score": 77,
      "tags": [
        "AI HOT",
        "Anthropic",
        "产业"
      ],
      "summary": "英伟达CEO黄仁勋在摩根士丹利路演中表示，公司季度营收即将逼近1000亿美元，且增长速度仍在加快。他否认下一代旗舰架构Rubin Ultra延期传闻，称其仍按计划于明年出货，当前机架设计调整仅为系统架构优化。一个此前主要依赖ASIC的前沿AI模型项目，如今英伟达GPU算力占比已接近50%，市场普遍…",
      "publishedAt": "2026-07-13T00:55:29.000Z",
      "category": "industry",
      "comment": "点评：黄仁勋释放的是 AI 算力需求继续高烧的产业信号。即使模型效率提升，训练、推理、数据中心和网络系统的资本开支仍在放大，GPU 供应链会继续影响模型公司节奏。",
      "advice": "建议：企业规划 AI 基建时，把 GPU 供给、机架功耗、网络、折旧、云租赁价格和模型效率一起算账；避免只按短期热度采购，忽略未来迁移和利用率风险。"
    },
    {
      "topic": "product",
      "title": "Codex与ChatGPT Work多项更新：取消5小时限制",
      "source": "X：Tibo (@thsottiaux)",
      "url": "https://x.com/thsottiaux/status/2076365965915467978",
      "date": "2026-07-13",
      "score": 76,
      "tags": [
        "AI HOT",
        "GPT",
        "产品"
      ],
      "summary": "早上好。过去48小时里，Codex和ChatGPT Work非常忙碌！三项重要更新： - 暂时取消所有Plus、Business和Pro计划的5小时使用限制 - 正在推出变更，使GPT 5.6 Sol整体更高效，这将体现在使用量减少上，从而让你能走得更远。具体影响待量化后公布 - 我们已达到600…",
      "publishedAt": "2026-07-12T17:59:57.000Z",
      "category": "ai-products",
      "comment": "点评：ChatGPT Work 把 Agent 从“会调用工具”推进到“能跨应用持续交付”。能力边界不再只看模型聪明程度，而在于能否安全访问文件、系统和协作流程。",
      "advice": "建议：先在低权限、可回滚的工作流试点，明确每个连接器可读写的数据范围、最大执行时长、人工确认点和异常中止规则。"
    },
    {
      "topic": "model",
      "title": "腾讯混元发布Hy3模型：295B参数MoE架构，Agent向LLM定位，已集成微信服务10亿+用户",
      "source": "X：阿易 AI Notes (@AYi_AInotes)",
      "url": "https://x.com/AYi_AInotes/status/2076341952023310580",
      "date": "2026-07-13",
      "score": 75,
      "tags": [
        "AI HOT",
        "Agent",
        "推理",
        "模型"
      ],
      "summary": "腾讯混元团队发布Hy3模型，采用295B总参数、21B激活参数的MoE架构，推理效率可打平参数规模2-5倍的旗舰模型。Hy3定位为Agent向LLM，从preview到正式版基于50多个真实业务反馈迭代，内部WorkBuddy任务成功率从72%提升至90%，耗时降低34%，幻觉和常识错误持续下降。…",
      "publishedAt": "2026-07-12T16:24:32.000Z",
      "category": "ai-models",
      "comment": "点评：Hy3 的重点不是参数数字，而是把模型迭代压到微信级真实业务反馈里。Agent 向模型的竞争会越来越看重任务成功率、耗时、幻觉下降和生态入口，而不是单一榜单。",
      "advice": "建议：评估 Hy3 这类业务导向模型时，用真实 Agent 任务做 A/B：任务完成率、耗时、人工接管、幻觉率、微信生态接入成本和数据权限要一起看。"
    },
    {
      "topic": "tip",
      "title": "纳德拉提出\"反向信息悖论\"：企业使用AI时需保护自身知识",
      "source": "X：Satya Nadella (@satyanadella)",
      "url": "https://x.com/satyanadella/status/2076323181154230284",
      "date": "2026-07-13",
      "score": 75,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "微软CEO萨提亚·纳德拉提出\"反向信息悖论\"：AI时代，买家为使用AI支付金钱，同时必须暴露专有知识（提示词、工具使用、纠正反馈等），这些\"智力废气\"被模型学习，导致信息不对称向卖家倾斜。企业需要真正的信任边界，确保自身数据、痕迹、评估、适配权重和记忆在边界内积累，未经同意不得外泄。纳德拉呼吁企业…",
      "publishedAt": "2026-07-12T15:09:57.000Z",
      "category": "tip",
      "comment": "点评：纳德拉说的“反向信息悖论”击中了企业 AI 的核心焦虑：使用越深入，暴露给供应商的流程、提示词、反馈和记忆越有价值。AI 护城河会从模型选择转向知识边界。",
      "advice": "建议：企业应把提示词、工具调用、纠错反馈、评测集和长期记忆视为知识资产；采购 AI 平台时明确数据保留、训练使用、导出迁移和租户隔离条款。"
    },
    {
      "topic": "product",
      "title": "Mindwalk：在代码库 3D 地图上回放编码代理会话",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/cosmtrek/mindwalk",
      "date": "2026-07-13",
      "score": 74,
      "tags": [
        "AI HOT",
        "Claude",
        "Claude Code",
        "产品"
      ],
      "summary": "Mindwalk 是一款可视化工具，可将 Claude Code 和 Codex 的会话日志在代码库的 3D 地图上回放。它将仓库绘制成夜间地图，代理搜索、读取和编辑过的文件会发光，未触及区域保持黑暗，让用户一眼看清代理对任务的理解范围。单个 Go 二进制文件即可运行，所有会话数据完全本地处理，不…",
      "publishedAt": "2026-07-12T13:51:05.035Z",
      "category": "ai-products",
      "comment": "点评：Mindwalk 的价值在于让 Agent 的“思考路径”变成可观察对象。随着代码代理接手更多仓库任务，团队需要知道它看了哪里、忽略了哪里、为什么改这些文件。",
      "advice": "建议：把 Agent 会话可视化纳入代码审查和复盘流程，重点检查未读关键文件、异常大范围修改、重复搜索和上下文遗漏，帮助团队改进任务说明与权限边界。"
    },
    {
      "topic": "tip",
      "title": "OpenAI CEO Altman 改口称 AI 净创造就业，Anthropic CEO 也修正早期言论",
      "source": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/openai-ceo-altman-is-now-pretty-sure-ai-is-net-job-creating-which-is-quite-the-pivot-from-predicting-mass-layoffs",
      "date": "2026-07-13",
      "score": 71,
      "tags": [
        "AI HOT",
        "OpenAI",
        "Anthropic",
        "GPT",
        "观点"
      ],
      "summary": "OpenAI CEO Sam Altman 表示，他\"相当确信\"AI 迄今为止净创造了就业，并承认\"这并非我预期\"。此前他曾警告 AI 影响可能快得\"有点吓人\"。Anthropic CEO Dario Amodei 也修正了早期言论，将自动化描述为生产力倍增器而非岗位杀手。然而，多项研究未发现 A…",
      "publishedAt": "2026-07-12T09:15:49.000Z",
      "category": "tip",
      "comment": "点评：Altman 和 Amodei 的口径变化说明，就业影响不是一句“替代”或“创造”能概括。AI 更可能先重塑岗位内容、技能门槛和组织结构，再逐步反映到招聘数字上。",
      "advice": "建议：管理者不要用宏观口号替代组织设计；应按岗位拆分可自动化任务、需要增强的人类判断、培训路径和绩效指标，季度复盘净增产出与人员结构变化。"
    },
    {
      "topic": "tip",
      "title": "Ploy 将 AI 智能体默认模型从 Claude Opus 4.8 切换至 GPT-5.6 Sol",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://ploy.ai/blog/migrating-a-production-ai-agent-to-gpt-5-6",
      "date": "2026-07-13",
      "score": 70,
      "tags": [
        "AI HOT",
        "OpenAI",
        "Claude",
        "GPT",
        "观点"
      ],
      "summary": "Ploy 将其 AI 智能体默认模型从 Claude Opus 4.8 切换至 OpenAI 今晨发布的 GPT-5.6 Sol。在真实营销网站构建测试中，GPT-5.6 Sol 完成页面平均耗时 3 分 42 秒，较 Opus 4.8 的 8 分钟快 2.2 倍；每次构建成本从 3.06 美元降…",
      "publishedAt": "2026-07-12T23:41:11.951Z",
      "category": "tip",
      "comment": "点评：Ploy 的迁移案例很实用：模型替换不是信仰选择，而是用真实任务衡量速度、成功率、成本和输出质量。Agent 产品会更频繁地在多模型之间动态换挡。",
      "advice": "建议：建立模型迁移基准：固定真实任务集，对比成功率、端到端时长、成本、人工返工、失败类型和客户感知，再决定是否把新模型设为默认。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "公众号：数字生命卡兹克",
      "url": "https://mp.weixin.qq.com/s/6c6vGMJAVMbh6UhNVw4dcg",
      "note": "xAI 官方 Grok CLI 被曝静默上传整个代码库及用户密钥"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/975/865.htm",
      "note": "黄仁勋：英伟达季度收入逼近千亿美元，Rubin Ultra 架构未延期"
    },
    {
      "name": "X：Tibo (@thsottiaux)",
      "url": "https://x.com/thsottiaux/status/2076365965915467978",
      "note": "Codex与ChatGPT Work多项更新：取消5小时限制"
    },
    {
      "name": "X：阿易 AI Notes (@AYi_AInotes)",
      "url": "https://x.com/AYi_AInotes/status/2076341952023310580",
      "note": "腾讯混元发布Hy3模型：295B参数MoE架构，Agent向LLM定位，已集成…"
    },
    {
      "name": "X：Satya Nadella (@satyanadella)",
      "url": "https://x.com/satyanadella/status/2076323181154230284",
      "note": "纳德拉提出\"反向信息悖论\"：企业使用AI时需保护自身知识"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/cosmtrek/mindwalk",
      "note": "Mindwalk：在代码库 3D 地图上回放编码代理会话"
    },
    {
      "name": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/openai-ceo-altman-is-now-pretty-sure-ai-is-net-job-creating-which-is-quite-the-pivot-from-predicting-mass-layoffs",
      "note": "OpenAI CEO Altman 改口称 AI 净创造就业，Anthropi…"
    }
  ]
};

const episodeHistory = [
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
