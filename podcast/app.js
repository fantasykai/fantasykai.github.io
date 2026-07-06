const episode = {
  "date": "2026-07-06",
  "title": "AI HOT 日报：LongCat-2.0、千兆瓦 AI 集群、Fun-ASR",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 模型发布/更新、行业动态、产品发布/更新、技巧与观点。核心信号是：美团 LongCat-2.0 完全开源，国产 MoE 大模型进入长上下文与 Agent 工具链竞争；Meta 千兆瓦级 AI 集群与 SK 海力士上市计划继续放大 AI 基础设施资本战；Fun-ASR-Realtime 与 OpenScience 则说明语音识别、科研工作台正在从演示走向可部署工作流。",
  "conclusion": "今天的主线不是单个模型刷榜，而是模型开源、算力资本、垂直工作台和治理约束同时加速。建议团队把热点拆成四张表：可用模型清单、算力与供应链风险、真实任务评测、合规与权限边界。",
  "items": [
    {
      "topic": "industry",
      "title": "扎克伯格：建千兆瓦级AI集群，集中精英与资本",
      "source": "X：Rohan Paul (@rohanpaul_ai)",
      "url": "https://x.com/rohanpaul_ai/status/2073834219659534816",
      "date": "2026-07-06",
      "score": 84,
      "tags": [
        "AI HOT",
        "产业"
      ],
      "summary": "Mark Zuckerberg 表示，Meta 正在建设名为 Prometheus 的千兆瓦级 AI 集群，并把自己的核心职责定义为集中顶尖人才、资本和基础设施。",
      "publishedAt": "2026-07-05T18:19:42.000Z",
      "category": "industry",
      "comment": "点评：Meta 把 AI 竞争重新定义为人才、资本和电力的集中能力。千兆瓦级集群意味着前沿模型门槛继续抬高，也意味着中小团队更难复制基础设施优势。",
      "advice": "建议：企业不要跟随巨头拼裸算力，应优先做数据、流程和场景护城河；模型选型要预设供应商锁定、推理成本和长期算力可得性。"
    },
    {
      "topic": "model",
      "title": "美团 LongCat-2.0 完全开源（MIT 许可），1.6T MoE 模型开放权重与推理代码",
      "source": "X：美团 LongCat (@Meituan_LongCat)",
      "url": "https://x.com/Meituan_LongCat/status/2073768940078317713",
      "date": "2026-07-05",
      "score": 81,
      "tags": [
        "AI HOT",
        "LongCat",
        "Claude",
        "Agent",
        "开源"
      ],
      "summary": "美团今日宣布 LongCat-2.0 完全开源（MIT 许可），公开模型权重与推理代码。该模型为 MoE 架构，总参数量 1.6T，每 token 激活约 48B，支持 1M token 上下文。技术亮点包括 LongCat Sparse Attention 高效处理长文本、Zero-Compute Experts 动态激活 33B-56B 零浪费计算、MOPD 按任务路由 Agent/Reasoning/Interaction 三组专家。Benchmark 成绩：Terminal-Bench 2.1 70.8；…",
      "publishedAt": "2026-07-05T14:00:18.000Z",
      "category": "ai-models",
      "comment": "点评：LongCat-2.0 以 MIT 许可开放权重与推理代码，重点不只是参数规模，而是长上下文、任务路由和 Agent 工具链适配。国产开源模型正在从“能用”走向“能嵌入生产工作流”。",
      "advice": "建议：研发团队可用内部代码库、长文档问答和 Agent 任务做同题评测；重点看部署成本、中文理解、工具调用稳定性、长上下文衰减和许可证合规。"
    },
    {
      "topic": "industry",
      "title": "NVIDIA Kyber NVL144 延迟超 12 个月至 2028",
      "source": "X：SemiAnalysis (@SemiAnalysis_)",
      "url": "https://x.com/SemiAnalysis_/status/2073874671498387899",
      "date": "2026-07-06",
      "score": 76,
      "tags": [
        "AI HOT",
        "NVIDIA",
        "产业"
      ],
      "summary": "重大延迟：Jensen 在 GTC 上展示 Kyber NVL144 仅 3 个月后，该项目遭遇重大挫折，已推迟超过 12 个月，延至 2028 年。下文我们将解释 Kyber 为何面临大幅延迟，以及 NVIDIA 的 NVL72x2 背靠背机架架构为何也被取消，导致 Rubin Ultra 的扩展域受限。👇️ 1/6🧵",
      "publishedAt": "2026-07-05T21:00:27.000Z",
      "category": "industry",
      "comment": "点评：Kyber NVL144 延迟提醒市场：AI 基础设施不是线性扩容，机架、互联、供电、散热和供应链任何一环都可能拖慢模型迭代节奏。",
      "advice": "建议：采购 GPU/集群时不要只按路线图做容量规划，应准备多供应商方案、租赁与自建组合、模型压缩策略和关键项目的算力降级预案。"
    },
    {
      "topic": "model",
      "title": "Fun-ASR-Realtime 发布：单模型支持30种语言与16种方言，识别准确率领先",
      "source": "公众号：通义实验室（千问）",
      "url": "https://mp.weixin.qq.com/s/ntw0SliBi4f8LROnFY26kA",
      "date": "2026-07-06",
      "score": 73,
      "tags": [
        "AI HOT",
        "Fun-ASR",
        "模型"
      ],
      "summary": "通义实验室发布Fun-ASR-Realtime实时语音识别模型。单模型覆盖30种语言及16种方言，针对东亚、东南亚地区重点优化。在工业级方言测评inhouse上取得87.8%的语义准确率，大幅领先，多地方言接近人工水平。引入上下文理解与动态热词注入，实现同音词、品牌名等语义消歧。流式识别首字延迟控制在百毫秒级，准确率接近离线水平，支持多语言无缝切换。API已上线阿里云百炼平台。",
      "publishedAt": "2026-07-06T06:09:29.000Z",
      "category": "ai-models",
      "comment": "点评：Fun-ASR-Realtime 的价值在于实时、多语言、方言和热词消歧同时推进。语音入口正在从“能转文字”升级为能服务客服、会议、车载和跨境业务的基础能力。",
      "advice": "建议：语音产品评测时要加入方言、噪声、品牌词、多人打断、延迟和跨语言切换场景；不要只用普通话清晰录音做验收。"
    },
    {
      "topic": "tip",
      "title": "分享8个Claude Fable 5下线前必跑的超实用Prompt",
      "source": "公众号：卡尔的AI沃茨",
      "url": "https://mp.weixin.qq.com/s/ZkMsdeTK6wmgkaER0iPT8w",
      "date": "2026-07-06",
      "score": 73,
      "tags": [
        "AI HOT",
        "Claude",
        "Agent",
        "观点"
      ],
      "summary": "Claude Fable 5即将下线，作者整理了8个经实战验证的提示词：/goal提示语让模型自主跑25次实验（花费165美元，构建速度提高50%、token开销降60%）；工作模式提示语将用户习惯转化为可复用Skills；行动规范提示语约束subagent行为；subagent分配提示语智能分配任务；25个定时循环工作流（含Shadow prompt loop做A/B测试）；自治运行+自动暂停提示语；记忆系统提示语保留错题本；反向面试提示语确保95%把握再执行。这些提示词可迁移至API计费后继续使用，核心是让模…",
      "publishedAt": "2026-07-06T01:19:09.000Z",
      "category": "tip",
      "comment": "点评：这组提示词反映出 Agent 使用从“写一句 prompt”转向工作流资产化：目标循环、记忆、反向面试、subagent 分配和自动暂停，都是可迁移的操作系统。",
      "advice": "建议：把高价值 prompt 沉淀成团队 Skill 或模板，并记录适用模型、成本、失败案例和验收命令；不要让个人经验散落在聊天记录里。"
    },
    {
      "topic": "tip",
      "title": "Anthropic Claude Design 反向工程提示词开源更新",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/Trystan-SA/claude-design-system-prompt",
      "date": "2026-07-05",
      "score": 73,
      "tags": [
        "AI HOT",
        "Claude",
        "开源",
        "观点"
      ],
      "summary": "Anthropic 旗下 Claude Design 的反向工程系统提示词在 GitHub 以 MIT 许可证开源，包含 20 章提示词和 14 项技能，覆盖内容纪律、美学、无障碍（WCAG、语义 HTML、键盘导航）、交互状态、系统思维等。近日针对 Fable 5/Opus 4.7+ 系列校准，新增自主决策条款：小决定直接执行记录而不询问。项目支持 Claude Code/Claude.ai 及 Codex 两种变体。",
      "publishedAt": "2026-07-05T15:35:42.919Z",
      "category": "tip",
      "comment": "点评：Claude Design 提示词被开源和适配，说明设计 Agent 的竞争焦点已经从审美描述转向系统规范：无障碍、交互状态、语义结构和自主决策边界。",
      "advice": "建议：设计团队可以借鉴其结构化规范，但要替换为自己的品牌 token、组件库、可访问性标准和评审流程，避免直接复制导致风格同质化。"
    },
    {
      "topic": "product",
      "title": "Synthetic Sciences 发布 OpenScience：面向机器学习、生物学、物理学和化学研究的开源模型无关 AI 工作台",
      "source": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/05/synthetic-sciences-releases-openscience-an-open-source-model-agnostic-ai-workbench-for-machine-learning-biology-physics-and-chemistry-research",
      "date": "2026-07-06",
      "score": 71,
      "tags": [
        "AI HOT",
        "Claude",
        "OpenScience",
        "开源",
        "产品"
      ],
      "summary": "Synthetic Sciences 推出开源（Apache 2.0）AI 科研工作台 OpenScience，覆盖机器学习、生物学、物理学、化学。它运行从文献、假设、代码、实验到分析与撰写的完整科研循环，支持按请求切换任意模型（Claude、GPT、Gemini、GLM、Kimi、DeepSeek 及本地微调模型）。内置 250 余项可编辑技能和 UniProt、PDB、ChEMBL、arXiv 等约 30 个科学数据库作为智能体工具。用户可自带 API 密钥在自己的基础设施上免费运行，安装命令为 `npm i…",
      "publishedAt": "2026-07-06T05:07:12.000Z",
      "category": "ai-products",
      "comment": "点评：OpenScience 把科研流程做成模型无关工作台，核心优势是技能、数据库和实验循环，而不是绑定某个大模型。AI for Science 正在走向“工具链平台化”。",
      "advice": "建议：科研和企业研发团队试用时，应先选一个可复现的小课题，检查文献追踪、实验记录、代码执行、数据权限和结果引用是否闭环。"
    },
    {
      "topic": "industry",
      "title": "SK 海力士将启动 280 亿美元美股上市，有望成史上第二大 IPO",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/972/896.htm",
      "date": "2026-07-06",
      "score": 71,
      "tags": [
        "AI HOT",
        "SK 海力士",
        "产业"
      ],
      "summary": "SK 海力士于本周一启动规模约 280 亿美元的美股上市计划，将在纳斯达克通过存托凭证发行 1779 万股新股，每 10 份存托凭证对应 1 股普通股。发行价区间周一公布，最终发行价周四敲定，股票周五挂牌交易。受益于全球人工智能热潮，该股年内涨幅超 270%。本次募资规模预计为史上第二大新股发行，仅次于上月 SpaceX 的 857 亿美元 IPO。SK 海力士是高带宽内存芯片核心供应商，产品用于英伟达、谷歌等 AI 设备。",
      "publishedAt": "2026-07-06T01:09:29.000Z",
      "category": "industry",
      "comment": "点评：SK 海力士上市计划凸显 HBM 和存储供应链在 AI 产业中的战略地位。模型热潮正在把芯片、内存和资本市场绑定得更紧。",
      "advice": "建议：关注 AI 成本时不能只看 GPU 单价，也要跟踪 HBM 供给、云厂商采购节奏和资本市场波动；预算模型要预留硬件涨价与交付延期。"
    },
    {
      "topic": "tip",
      "title": "三周前，我不小心创办了一家小公司",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://extelligence.substack.com/p/i-accidentally-started-a-small-business",
      "date": "2026-07-06",
      "score": 70,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "一位父亲为患有自闭症的非语言儿子开发了一款沟通应用，在言语治疗室的等候区展示时，所有非语言儿童的母亲看到后都忍不住流泪，言语治疗师也啜泣了五分钟。他意外发现产品市场匹配，决定腾出时间让更多孩子能用上，即使这意味着几周睡眠不足。应用本身是专为理解语言困难的儿童设计的，与传统的AAC设备不同--后者主要面向身体障碍但语言理解正常的成人。",
      "publishedAt": "2026-07-05T17:43:57.442Z",
      "category": "tip",
      "comment": "点评：这个故事提醒我们，AI 创业机会不一定来自宏大技术叙事，也可能来自一个被长期忽视的真实痛点。强烈的用户情绪反馈往往比流量指标更早揭示产品市场匹配。",
      "advice": "建议：创业者应多观察高痛点、低服务的人群，用小产品快速验证；尤其在辅助沟通、教育和无障碍场景中，先做可用和可信，再谈规模化。"
    },
    {
      "topic": "safety",
      "title": "欧盟理事会通过快速通道强制推行\"聊天管控\"（Chat Control 2.0）",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://www.heise.de/en/news/Chat-Control-1-0-EU-Council-forces-messenger-scans-via-fast-track-11353659.html",
      "date": "2026-07-06",
      "score": 70,
      "tags": [
        "AI HOT",
        "治理"
      ],
      "summary": "欧盟理事会通过书面程序快速通过一项新法规，强制要求科技集团对加密通信进行无差别扫描（Chat Control 2.0），以填补过渡性规定4月3日到期后的法律漏洞，并向欧洲议会施压。批评者指责该做法试图绕过民主监督。草案将在夏季休会前以紧急程序提交议会表决，多数议员可能已离会，反对需绝对多数，几乎无法阻止。理事会称扫描限于必要范围，处理的数据须在检测后12个月内不可撤销地删除。",
      "publishedAt": "2026-07-05T16:23:44.440Z",
      "category": "industry",
      "comment": "点评：Chat Control 2.0 再次把安全治理与加密通信隐私推向冲突中心。对 AI 产品来说，合规压力会从内容生成扩展到通信扫描、数据留存和用户权利。",
      "advice": "建议：面向欧洲用户的产品应提前梳理加密、内容检测、数据删除、透明披露和法务响应流程；不要把隐私设计留到政策落地后再补。"
    },
    {
      "topic": "industry",
      "title": "Runway 宣布设立巴黎办公室",
      "source": "Runway：News（网页）",
      "url": "https://runwayml.com/news/announcing-our-paris-office",
      "date": "2026-07-06",
      "score": 65,
      "tags": [
        "AI HOT",
        "Runway",
        "产业"
      ],
      "summary": "原文正文仅包含网站 Cookie 设置说明，未提供关于巴黎办公室的部门、规模、职能或开业时间等具体信息。",
      "publishedAt": "2026-07-06T08:33:02.716Z",
      "category": "industry",
      "comment": "点评：Runway 设立巴黎办公室释放出本地化和欧洲创意生态扩张信号，但当前可见正文信息有限，不宜过度解读规模、职能或时间表。",
      "advice": "建议：关注 Runway 后续招聘、合作伙伴和产品发布；做区域市场判断时，应以官方细节、岗位分布和客户案例交叉验证。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "X：Rohan Paul (@rohanpaul_ai)",
      "url": "https://x.com/rohanpaul_ai/status/2073834219659534816",
      "note": "扎克伯格：建千兆瓦级AI集群，集中精英与资本"
    },
    {
      "name": "X：美团 LongCat (@Meituan_LongCat)",
      "url": "https://x.com/Meituan_LongCat/status/2073768940078317713",
      "note": "美团 LongCat-2.0 完全开源（MIT 许可），1.6T MoE 模型开放…"
    },
    {
      "name": "X：SemiAnalysis (@SemiAnalysis_)",
      "url": "https://x.com/SemiAnalysis_/status/2073874671498387899",
      "note": "NVIDIA Kyber NVL144 延迟超 12 个月至 2028"
    },
    {
      "name": "公众号：通义实验室（千问）",
      "url": "https://mp.weixin.qq.com/s/ntw0SliBi4f8LROnFY26kA",
      "note": "Fun-ASR-Realtime 发布：单模型支持30种语言与16种方言，识别准确…"
    },
    {
      "name": "公众号：卡尔的AI沃茨",
      "url": "https://mp.weixin.qq.com/s/ZkMsdeTK6wmgkaER0iPT8w",
      "note": "分享8个Claude Fable 5下线前必跑的超实用Prompt"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/Trystan-SA/claude-design-system-prompt",
      "note": "Anthropic Claude Design 反向工程提示词开源更新"
    },
    {
      "name": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/07/05/synthetic-sciences-releases-openscience-an-open-source-model-agnostic-ai-workbench-for-machine-learning-biology-physics-and-chemistry-research",
      "note": "Synthetic Sciences 发布 OpenScience：面向机器学习、…"
    }
  ]
};

const episodeHistory = [
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
