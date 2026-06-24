const episode = {
  "date": "2026-06-24",
  "title": "AI HOT 日报：Qwen-AgentWorld、豆包专业版、Bidi 1",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 模型发布/更新、产品发布/更新、行业动态、论文研究、技巧与观点。核心信号是：豆包专业版把办公 Agent 推向订阅化；Qwen-AgentWorld 开源“先预测，再行动”的智能体世界模型；OpenAI ChatGPT 语音测试 Bidi 1，实时双向交互继续升温。",
  "conclusion": "今天的 AI 主线是“Agent 产品化 + 多模态提速 + 治理压力上升”。建议团队把新闻转成三件事：可复现的任务评测、可审计的工具权限、可量化的成本与风险看板。",
  "items": [
    {
      "topic": "product",
      "title": "今天，豆包正式推出专业版",
      "source": "公众号：豆包（字节）",
      "url": "https://mp.weixin.qq.com/s/Sb-NMXTrWFQES1EDO_Gr2g",
      "date": "2026-06-24",
      "score": 77,
      "tags": [
        "AI HOT",
        "豆包",
        "产品"
      ],
      "summary": "豆包专业版基于豆包2.1系列大模型上线，面向复杂办公与生产力场景。办公任务模式接入可执行Agent任务的豆包2.1模型，支持操作本地电脑、浏览器、调用Skills技能、定时任务，内置Office办公套件，并可生成带后端数据库的在线应用。免费用户可体验豆包2.1 Turbo版办公任务模式，专业版接入豆包2.1 Pro模型。定价：标准套餐68元/月（连续包月），加强套餐200元/月，高级套餐500元/月。大学生认证后标准套餐38元/月，持续6个月。",
      "publishedAt": "2026-06-24T01:00:00.000Z",
      "category": "ai-products",
      "comment": "点评：豆包专业版把办公 Agent、本地电脑操作、Skills 和应用生成打包，说明通用助手正在向“可执行生产力套件”演进。",
      "advice": "建议：团队试用这类产品时，不要只看模型强弱，要验证它能否稳定完成表格、文档、浏览器和内部流程的端到端任务。"
    },
    {
      "topic": "safety",
      "title": "Oracle因AI应用裁员21000人，债务驱动云基础设施投资",
      "source": "Ars Technica：AI（RSS）",
      "url": "https://arstechnica.com/ai/2026/06/oracles-21000-layoffs-help-drive-its-debt-fueled-ai-investments",
      "date": "2026-06-24",
      "score": 76,
      "tags": [
        "AI HOT",
        "Oracle",
        "产业",
        "治理"
      ],
      "summary": "Oracle在截至5月31日的财年裁员21000人，员工总数降至141，000人，降幅12.9%。公司称AI技术的采用导致劳动力缩减，同时重组成本达18亿美元，同比增长481%。Oracle计划2026年通过债务和股权筹集450至500亿美元，扩建Oracle Cloud Infrastructure，服务OpenAI、xAI、AMD、Nvidia、Meta等客户。公司债务超1200亿美元。分析人士指出裁员有助于改善现金流，但Oracle也承认大规模裁员可能带来生产力下降、人才短缺和员工士气受损等风险。",
      "publishedAt": "2026-06-23T20:17:38.000Z",
      "category": "industry",
      "comment": "点评：AI 基建扩张与组织裁员同时发生，说明大厂正在用现金流和债务押注云算力，但组织风险也在上升。",
      "advice": "建议：企业做 AI 投资时，应同步评估算力预算、债务压力、人才保留和关键系统交付风险。"
    },
    {
      "topic": "model",
      "title": "OpenAI ChatGPT 语音最大规模升级：双向AI语音模型 Bidi 1 已上线测试",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/967/852.htm",
      "date": "2026-06-24",
      "score": 74,
      "tags": [
        "AI HOT",
        "OpenAI",
        "语音",
        "模型"
      ],
      "summary": "6月23日，部分用户反馈 ChatGPT 网页版和 App 版上线了双向 AI 语音模型 Bidi 1，位于设置模型选择器中，与标准语音和高级语音并列。该模型支持边说话边监听，用户可在对话中途打断并发出新指令，例如要求从1数到10时中途喊停倒数，模型会立即切换执行。OpenAI 尚未官宣，预计本周启动更大范围测试。",
      "publishedAt": "2026-06-24T04:34:24.000Z",
      "category": "ai-models",
      "comment": "点评：双向语音模型的关键不是更像人说话，而是能被打断、能实时改任务，这会改变客服、陪练、会议和车载交互。",
      "advice": "建议：语音产品应重点测试打断、纠错、多轮上下文和噪声环境，而不是只比较音色自然度。"
    },
    {
      "topic": "model",
      "title": "Qwen-AgentWorld 开源：让 Agent 学会\"先预测，再行动\"",
      "source": "公众号：通义实验室（千问）",
      "url": "https://mp.weixin.qq.com/s/NV9WGpGsfFz35jww5agM9g",
      "date": "2026-06-24",
      "score": 74,
      "tags": [
        "AI HOT",
        "Qwen",
        "Agent",
        "模型"
      ],
      "summary": "通义千问推出首个原生语言世界模型 Qwen-AgentWorld，覆盖 MCP、Search、Terminal、SWE、Web、OS、Android 七大领域。模型基于超 1000 万条真实交互轨迹，经 CPT→SFT→RL 三阶段训练，在 AgentWorldBench 上超越 GPT-5.4（58.25）和 Claude Opus 4.8，Qwen-AgentWorld-397B-A17B 取得 58.71 分。两种范式已验证其能力：作为解耦环境模拟器实现可控 Sim RL，在 WideSearch 上超越真实…",
      "publishedAt": "2026-06-24T03:32:04.000Z",
      "category": "ai-models",
      "comment": "点评：Agent 竞争正在从“会调用工具”升级为“理解行动后果”。先预测再行动，本质上是在给智能体补上世界模型和试错沙箱。",
      "advice": "建议：做企业 Agent 时，优先建设可回放的任务轨迹、仿真环境和评测集，不要急着把高风险动作直接交给模型。"
    },
    {
      "topic": "safety",
      "title": "五眼联盟警告：AI网络威胁数月内将影响普通用户",
      "source": "Artificial Intelligence News（RSS）",
      "url": "https://www.artificialintelligence-news.com/news/five-eyes-warning-ai-cyber-threats",
      "date": "2026-06-24",
      "score": 74,
      "tags": [
        "AI HOT",
        "Agent",
        "产业",
        "治理"
      ],
      "summary": "2026年6月22日，五眼联盟（美、英、加、澳、新）网络安全部门联合警告，即将到来的AI模型（如OpenAI的GPT-5.5-Cyber、Anthropic的Mythos）将降低编写复杂攻击代码的门槛。自动化智能体可全天候扫描互联网漏洞，大幅缩短安全窗口期。AI驱动的超个性化钓鱼诈骗已在亚太蔓延，印度2026年初勒索软件事件激增165%。五眼联盟建议企业部署自动化防御AI，个人用户开启多因素认证、删除闲置账户。",
      "publishedAt": "2026-06-23T08:00:00.000Z",
      "category": "industry",
      "comment": "点评：AI 攻防门槛下降会让漏洞扫描、钓鱼、恶意代码生成更自动化，安全窗口被进一步压缩。",
      "advice": "建议：安全团队应把自动化防御、MFA、资产暴露面清理和钓鱼演练列为短期优先项。"
    },
    {
      "topic": "model",
      "title": "FastWan-QAD：单卡5090上1.8秒生成5秒视频",
      "source": "X：Sky Computing Lab (@haoailab)",
      "url": "https://x.com/haoailab/status/2069493820732170695",
      "date": "2026-06-24",
      "score": 73,
      "tags": [
        "AI HOT",
        "模型"
      ],
      "summary": "Sky Computing Lab 发布 FastWan-QAD 视频生成模型系列，基于 FastVideo 的量化感知蒸馏（QAD）方案训练。在单张 NVIDIA GeForce RTX 5090 上，端到端生成一段 5 秒 480P 视频仅需 1.8 秒。模型、代码及博客已开源。",
      "publishedAt": "2026-06-23T18:52:30.000Z",
      "category": "ai-models",
      "comment": "点评：视频生成继续向更快、更便宜、更高分辨率推进，创意工作流会从“少量成片”转向“批量试稿”。",
      "advice": "建议：内容团队应建立提示词模板、品牌风格库和版权审查流程，避免只追求生成速度。"
    },
    {
      "topic": "product",
      "title": "IBM 开源 CUGA：轻量级智能体框架，提供二十余个单文件示例应用",
      "source": "Hugging Face：Blog（RSS）",
      "url": "https://huggingface.co/blog/ibm-research/cuga-apps",
      "date": "2026-06-24",
      "score": 73,
      "tags": [
        "AI HOT",
        "Agent",
        "产品"
      ],
      "summary": "IBM 开源了 CUGA（Configurable Generalist Agent），一个处理规划、执行循环、工具调用和状态管理的轻量级智能体框架。开发者只需提供工具列表和提示词即可构建 CugaAgent。内置计划-执行-反思循环，在 AppWorld（2025年7月-2026年2月）和 WebArena（2025年2月-9月）基准上排名第一。支持 Fast / Balanced / Accurate 三种推理模式，代码执行可在本地、Docker 或 E2B 沙箱中运行。可互换工具支持 OpenAPI、MCP…",
      "publishedAt": "2026-06-23T12:51:55.000Z",
      "category": "ai-products",
      "comment": "点评：轻量级 Agent 框架开始强调规划、循环、工具和状态管理，开发者门槛正在从“搭框架”转向“设计任务闭环”。",
      "advice": "建议：评估 Agent 框架时，重点看工具接入、状态可观测、失败恢复、沙箱执行和评测样例，而不是只看 Demo。"
    },
    {
      "topic": "product",
      "title": "Runway推出Seedance 4K等三款新模型",
      "source": "X：Runway (@runwayml)",
      "url": "https://x.com/runwayml/status/2069535148450705517",
      "date": "2026-06-24",
      "score": 72,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "Seedance 4K。Seedance Mini。Kling 3.0 Turbo。现已推出。 全球最佳模型，汇聚一处。  使用优惠码 30RUNWAY，前三个月可享七折优惠。  通过下方链接开始使用。",
      "publishedAt": "2026-06-23T21:36:44.000Z",
      "category": "ai-products",
      "comment": "点评：视频生成继续向更快、更便宜、更高分辨率推进，创意工作流会从“少量成片”转向“批量试稿”。",
      "advice": "建议：内容团队应建立提示词模板、品牌风格库和版权审查流程，避免只追求生成速度。"
    },
    {
      "topic": "model",
      "title": "网易有道发布 Confucius4-TTS：14 语种跨语种无口音语音克隆开源模型",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/967/636.htm",
      "date": "2026-06-24",
      "score": 72,
      "tags": [
        "AI HOT",
        "语音",
        "模型"
      ],
      "summary": "网易有道推出\"子曰 4.0\"TTS 引擎 Confucius4-TTS，声称是业内首个支持 14 种语言跨语种无口音、且无需参考文本即可完成语音克隆的开源模型。用户仅需 3 秒音频即可实现零样本音色克隆，克隆音色与原声相似度超 85%，任务准确度达 97%。模型支持中文、英语等 14 种语言，首创音频 Prompt 情感克隆迁移。底层采用 GPT 式语义大模型、SSL 预训练特征与 ECAPA-TDNN 说话人编码器、Flow Matching 框架。已全量开源（Apache 协议），提供 54GB 资源包供本地部…",
      "publishedAt": "2026-06-23T11:00:00.000Z",
      "category": "ai-models",
      "comment": "点评：跨语种无口音语音克隆降低了本地化内容成本，也同步提高了声音版权和身份冒用风险。",
      "advice": "建议：语音应用应增加授权证明、水印或声纹检测，并明确克隆音色的使用边界。"
    },
    {
      "topic": "safety",
      "title": "AI招聘工具存在种族偏见和系统性排斥；黑人占比26%，亚裔占比15%",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://hai.stanford.edu/news/ai-hiring-tools-can-yield-racial-bias-and-systemic-rejection",
      "date": "2026-06-24",
      "score": 71,
      "tags": [
        "AI HOT",
        "治理"
      ],
      "summary": "一项覆盖340万人、400万份申请、150家雇主和1700个职位的大规模实地研究发现，AI招聘筛选工具存在显著的种族歧视：26%的黑人申请者和15%的亚裔申请者遭遇算法对其族群的系统性排斥；若AI按推荐率最高群体（通常为白人）标准执行，将有4万份额外申请进入下一轮。多数雇主依赖同一第三方供应商算法，形成\"算法单一文化\"，导致10%提交4份申请者被所有职位拒绝。对比同期未用AI的招聘数据（8.3万份申请、108家财富500强企业），未发现此类模式。研究呼吁对算法招聘进行独立监管。",
      "publishedAt": "2026-06-23T21:48:25.964Z",
      "category": "paper",
      "comment": "点评：AI 招聘不是简单提高效率的问题，同一供应商算法被大规模复用后，偏见会变成系统性排斥。",
      "advice": "建议：HR 和合规团队应要求供应商提供独立审计、分群通过率监控和人工申诉通道。"
    },
    {
      "topic": "model",
      "title": "Krea 2 技术报告正式发布",
      "source": "X：Krea AI (@krea_ai)",
      "url": "https://x.com/krea_ai/status/2069473417804591191",
      "date": "2026-06-24",
      "score": 71,
      "tags": [
        "AI HOT",
        "模型"
      ],
      "summary": "我们的技术报告已发布。  深入解析创建 Krea 2 所用的数据、架构及训练技巧。  https：//www.krea.ai/blog/krea-2-technical-report",
      "publishedAt": "2026-06-23T17:31:26.000Z",
      "category": "ai-models",
      "comment": "点评：这条动态体现了 AI 从能力展示走向工程落地，真正价值取决于场景、数据和流程闭环。",
      "advice": "建议：先做小规模试点，验证质量、成本、延迟和人工接管点，再扩大使用范围。"
    },
    {
      "topic": "product",
      "title": "无限制OCR：单次长时域解析",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/baidu/Unlimited-OCR",
      "date": "2026-06-24",
      "score": 70,
      "tags": [
        "AI HOT",
        "OCR",
        "产品"
      ],
      "summary": "Unlimited OCR 是一个托管在 GitHub 的项目，实现单次长时域解析（One-Shot Long-Horizon Parsing），旨在一次性处理长时间跨度的 OCR 任务。",
      "publishedAt": "2026-06-23T13:32:22.612Z",
      "category": "ai-products",
      "comment": "点评：文档智能仍是企业 AI 的刚需。边界框、块分类和置信度分数，能让 OCR 从“提取文本”升级为“可审计的数据入口”。",
      "advice": "建议：知识库、合同、票据和工单场景可优先试点带置信度的 OCR，并把低置信度结果送人工复核。"
    },
    {
      "topic": "model",
      "title": "Mistral OCR 4",
      "source": "Mistral AI：News（网页）",
      "url": "https://mistral.ai/news/ocr-4",
      "date": "2026-06-24",
      "score": 68,
      "tags": [
        "AI HOT",
        "OCR",
        "模型"
      ],
      "summary": "Mistral AI 发布 OCR 4，新增边界框、块分类（标题、表格、方程式、签名等）及逐页逐词置信度分数。支持 170 种语言、10 个语系，可单容器全自托管部署。在 OlmOCRBench 上得分 85.20，独立标注者偏好率平均 72%。定价每 1000 页 $4，Batch API 享 50% 折扣。可通过 API 或 Mistral Studio 的 Document AI 调用。",
      "publishedAt": "2026-06-23T14:24:55.949Z",
      "category": "ai-models",
      "comment": "点评：文档智能仍是企业 AI 的刚需。边界框、块分类和置信度分数，能让 OCR 从“提取文本”升级为“可审计的数据入口”。",
      "advice": "建议：知识库、合同、票据和工单场景可优先试点带置信度的 OCR，并把低置信度结果送人工复核。"
    },
    {
      "topic": "tip",
      "title": "MiniCPM-V 4.6 在 Apple Core AI 上高速运行",
      "source": "X：面壁智能 OpenBMB (@OpenBMB)",
      "url": "https://x.com/OpenBMB/status/2069676334381728106",
      "date": "2026-06-24",
      "score": 65,
      "tags": [
        "AI HOT"
      ],
      "summary": "🥳感谢分享，@MLBoy_DaisukeMajima 🚀 MiniCPM-V 4.6 在设备上以这样的速度运行，实在令人印象深刻--尤其是在 Apple Core AI 上以不到 2B 参数跑出。 干得漂亮，推动高效多模态 AI 向前发展。🫡",
      "publishedAt": "2026-06-24T06:57:45.000Z",
      "category": "tip",
      "comment": "点评：端侧多模态模型速度提升，意味着隐私敏感、低延迟和离线场景会更快落地。",
      "advice": "建议：移动端团队可以关注小模型在拍照理解、文档识别、离线助手中的真实功耗和延迟。"
    },
    {
      "topic": "product",
      "title": "国内首个高考志愿AI测评出炉，千问多项表现超过资深咨询师",
      "source": "公众号：千问APP（阿里）",
      "url": "https://mp.weixin.qq.com/s/oGHVP4MgGS1rbmT8s8St8Q",
      "date": "2026-06-24",
      "score": 60,
      "tags": [
        "AI HOT",
        "Qwen",
        "产品"
      ],
      "summary": "友松实验室发布国内首个高考志愿AI能力测评报告，测试千问高考志愿填报Agent四大模块。与53位平均从业4.6年的人类咨询师对照，千问表现更稳定精确：44道事实题全对；模拟10个志愿中6个可录取；100场匿名对比中专家58次倾向千问回答。使用千问辅助后，人类咨询师正确率提升，耗时减少约27%。该Agent基于千问高考志愿大模型和夸克8年高考数据，覆盖约3000所院校、2000多个专业。",
      "publishedAt": "2026-06-23T10:54:49.000Z",
      "category": "ai-products",
      "comment": "点评：这条动态体现了 AI 从能力展示走向工程落地，真正价值取决于场景、数据和流程闭环。",
      "advice": "建议：先做小规模试点，验证质量、成本、延迟和人工接管点，再扩大使用范围。"
    },
    {
      "topic": "product",
      "title": "Anthropic 推出 Claude Tag：在 Slack 中通过 @Claude 协作",
      "source": "Anthropic：Newsroom（网页）",
      "url": "https://www.anthropic.com/news/introducing-claude-tag",
      "date": "2026-06-24",
      "score": 56,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "Anthropic 推出 Claude Tag，一种在 Slack 频道中通过 @Claude 委托任务的新协作方式。Claude 可记住频道上下文，支持多用户交互，经授权后可自动学习其他频道和数据源。开启\"环境\"行为后，能主动更新未解决的线程或任务。支持异步工作，可自主推进项目数小时或数天。即日起面向 Claude Enterprise 和 Team 客户提供 beta 版。管理员可精细控制工具和渠道访问权限、设置 token 消耗限额，并查看所有操作日志。",
      "publishedAt": "2026-06-23T17:09:41.902Z",
      "category": "ai-products",
      "comment": "点评：这条动态体现了 AI 从能力展示走向工程落地，真正价值取决于场景、数据和流程闭环。",
      "advice": "建议：先做小规模试点，验证质量、成本、延迟和人工接管点，再扩大使用范围。"
    },
    {
      "topic": "safety",
      "title": "GitHub联合开源联盟呼吁修改加州AI透明度法案以保护开源",
      "source": "GitHub Blog",
      "url": "https://github.blog/news-insights/policy-news-and-insights/github-joins-coalition-advocating-for-fixes-to-california-ai-transparency-act-to-protect-open-source",
      "date": "2026-06-24",
      "score": 56,
      "tags": [
        "AI HOT",
        "产业",
        "治理"
      ],
      "summary": "GitHub 联合 Black Forest Labs、Hugging Face 与 Mozilla Corporation 组成开源联盟，呼吁对加州 AI 透明度法案（SB 942，拟由 SB 1000 修正）进行针对性修改。当前草案要求开发者在下游用户未履行义务时撤销开源许可证，这与开源许可证永久不可撤销的性质冲突。联盟认为该要求非必要，已有直接监管和执法机制，并建议参考欧盟 AI 法案的透明度实践规范，以向下游用户通知最佳实践文档的方式替代撤销条款。GitHub 支持这些修正，以在保持透明度目标的同时兼容开源…",
      "publishedAt": "2026-06-23T15:48:00.000Z",
      "category": "industry",
      "comment": "点评：AI 产业信号越来越体现为监管、组织、资本和开源生态的联动，而不只是模型发布。",
      "advice": "建议：管理者应把政策、供应商依赖、开源许可和数据合规纳入 AI 项目立项清单。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "公众号：豆包（字节）",
      "url": "https://mp.weixin.qq.com/s/Sb-NMXTrWFQES1EDO_Gr2g",
      "note": "今天，豆包正式推出专业版"
    },
    {
      "name": "Ars Technica：AI（RSS）",
      "url": "https://arstechnica.com/ai/2026/06/oracles-21000-layoffs-help-drive-its-debt-fueled-ai-investments",
      "note": "Oracle因AI应用裁员21000人，债务驱动云基础设施投资"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/967/852.htm",
      "note": "OpenAI ChatGPT 语音最大规模升级：双向AI语音模型 Bidi 1 已上…"
    },
    {
      "name": "公众号：通义实验室（千问）",
      "url": "https://mp.weixin.qq.com/s/NV9WGpGsfFz35jww5agM9g",
      "note": "Qwen-AgentWorld 开源：让 Agent 学会\"先预测，再行动\""
    },
    {
      "name": "Artificial Intelligence News（RSS）",
      "url": "https://www.artificialintelligence-news.com/news/five-eyes-warning-ai-cyber-threats",
      "note": "五眼联盟警告：AI网络威胁数月内将影响普通用户"
    },
    {
      "name": "X：Sky Computing Lab (@haoailab)",
      "url": "https://x.com/haoailab/status/2069493820732170695",
      "note": "FastWan-QAD：单卡5090上1.8秒生成5秒视频"
    },
    {
      "name": "Hugging Face：Blog（RSS）",
      "url": "https://huggingface.co/blog/ibm-research/cuga-apps",
      "note": "IBM 开源 CUGA：轻量级智能体框架，提供二十余个单文件示例应用"
    },
    {
      "name": "X：Runway (@runwayml)",
      "url": "https://x.com/runwayml/status/2069535148450705517",
      "note": "Runway推出Seedance 4K等三款新模型"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/967/636.htm",
      "note": "网易有道发布 Confucius4-TTS：14 语种跨语种无口音语音克隆开源模型"
    }
  ]
};

const episodeHistory = [
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
