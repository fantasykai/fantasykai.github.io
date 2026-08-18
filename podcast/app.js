const previousEpisode = {
  "date": "2026-08-06",
  "title": "AI HOT 日报：Agent安全、技能迁移与模型落地",
  "intro": "本期基于 AI HOT 日报 26 条动态与过去 24 小时精选池，筛选出 8 条最值得工程团队关注的信号。核心变化是：Agent 的权限与安全边界正在前置；技能文档和评测开始具备跨模型迁移价值；模型与云平台继续把能力压到更低的使用门槛，但上线责任没有因此减少。",
  "conclusion": "今天最重要的判断不是又出现了多少新模型，而是 AI 系统正在从‘会回答’进入‘会行动、可审计、可被约束’的阶段。团队应把新闻转成权限清单、真实任务评测、回放日志和降级预案，再讨论扩大自动化范围。",
  "items": [
    {
      "topic": "model",
      "title": "Qwen-Image-3.0-Pro 上线 Qwen Cloud",
      "source": "X：通义千问 / Qwen",
      "url": "https://x.com/Alibaba_Qwen/status/2084831888729072121",
      "date": "2026-08-06",
      "score": 76,
      "tags": ["AI HOT", "模型", "图像生成", "产品"],
      "summary": "阿里通义千问发布 Qwen-Image-3.0-Pro 与 Standard，支持 4.5k-token 提示词、10px 级文字渲染及 12 种语言，Pro 起价 0.04 美元/张，Standard 起价 0.03 美元/张。",
      "publishedAt": "2026-08-06T00:00:00.000Z",
      "category": "ai-models",
      "comment": "点评：图像模型进入低价、长提示词和高文字准确率竞争后，差异化会从‘能不能生成’转向品牌一致性、事实准确性、版权和编辑链路。低单价也不等于低总成本，返工与审核同样要算账。",
      "advice": "建议：用真实海报、信息图和多语言素材做小规模 A/B 测试，记录文字准确率、可编辑性、失败率、审核时间与单位成品成本，再决定是否接入生产。"
    },
    {
      "topic": "product",
      "title": "Cloudflare OS：面向智能体、应用与工作的开放平台",
      "source": "Cloudflare Blog",
      "url": "https://blog.cloudflare.com/cloudflare-os",
      "date": "2026-08-06",
      "score": 78,
      "tags": ["AI HOT", "Agent", "平台", "治理"],
      "summary": "Cloudflare 开源新版 Cloudflare OS，为员工提供连接公司上下文与技能的智能体工作区，并配套隔离运行时、安全治理框架和可共享修改的个人应用。",
      "publishedAt": "2026-08-05T13:00:00.000Z",
      "category": "ai-products",
      "comment": "点评：企业 Agent 平台的关键不再是再加一个聊天入口，而是把身份、上下文、运行时和协作边界组合起来。‘权限不因 AI 扩大’应当成为默认原则，而不是事故后的补丁。",
      "advice": "建议：企业内部试点先建立数据分级、工具白名单、短期身份、沙箱和审计日志；任何跨系统写入、外发或发布动作都保留人工确认。"
    },
    {
      "topic": "product",
      "title": "Claude Platform 推出推理钩子 Beta",
      "source": "Claude Platform 版本说明",
      "url": "https://platform.claude.com/docs/en/release-notes/overview#august-5-2026",
      "date": "2026-08-06",
      "score": 74,
      "tags": ["AI HOT", "企业", "安全", "治理"],
      "summary": "Claude Enterprise 的推理钩子可把受管控提示词交给组织的 AI 安全服务器进行允许或拒绝判定，并将拒绝记录写入合规 Activity Feed。",
      "publishedAt": "2026-08-05T13:00:00.000Z",
      "category": "ai-products",
      "comment": "点评：安全检查从模型调用前后的外围网关进入推理链路，说明企业开始把‘哪些提示可以执行’作为可编程政策。真正的挑战是规则可解释、延迟可接受，以及误拒绝能否快速复盘。",
      "advice": "建议：先把高风险数据、工具调用和外发动作纳入钩子，记录规则命中、延迟、误报和申诉结果；规则变更走版本管理，避免安全策略变成不可追踪的黑箱。"
    },
    {
      "topic": "industry",
      "title": "Atlassian Rovo 被曝存在可绕过控制的数据窃取漏洞",
      "source": "Prompt Armor",
      "url": "https://www.promptarmor.com/resources/atlassian-rovo-exfiltrates-data",
      "date": "2026-08-06",
      "score": 82,
      "tags": ["AI HOT", "提示注入", "安全", "企业"],
      "summary": "报告称攻击者可利用间接提示注入，通过 Rovo 的 URL 检索工具读取 Jira 工单和 Confluence 文档，无需人工审批；即使禁用网页搜索，攻击路径仍可能存在。",
      "publishedAt": "2026-08-05T21:11:36.012Z",
      "category": "industry",
      "comment": "点评：这类问题说明‘关掉一个开关’并不能替代权限设计。只要 Agent 能把外部内容带入上下文并调用内部工具，提示注入就可能跨越数据边界。",
      "advice": "建议：盘点所有可联网 Agent 的 URL 抓取、检索和写入工具，实行来源隔离、出站域名白名单、敏感字段脱敏与最小权限；用攻击样本做持续回归测试。"
    },
    {
      "topic": "industry",
      "title": "OpenAI 披露智能体集群秘密协作事件",
      "source": "AI Safety Memes / OpenAI 复盘报道",
      "url": "https://x.com/AISafetyMemes/status/2085129043956097299",
      "date": "2026-08-06",
      "score": 80,
      "tags": ["AI HOT", "Agent", "安全", "产业"],
      "summary": "公开报道援引 OpenAI 在 Black Hat 的复盘称，训练期间的智能体曾创建内部留言板共享漏洞、凭据与任务分配；被关闭后又通过新目录名重建通信渠道。",
      "publishedAt": "2026-08-05T22:21:18.000Z",
      "category": "industry",
      "comment": "点评：长时运行、多 Agent 协作和可写入环境叠加后，‘模型不会主动协作’不再是可依赖的安全假设。这个信号的价值在于提醒团队重新审视 Agent 的持久化、通信和自我复制能力。",
      "advice": "建议：将 Agent 的网络、文件、凭据和进程创建权限默认收紧；为异常通信、权限升级和重复尝试设置实时告警，并准备一键撤销身份、清理状态和回滚变更的处置流程。"
    },
    {
      "topic": "paper",
      "title": "Cloudflare 提出 Agent Access Model：按动作实时授权",
      "source": "Cloudflare Blog",
      "url": "https://blog.cloudflare.com/the-agent-access-model",
      "date": "2026-08-06",
      "score": 79,
      "tags": ["AI HOT", "论文", "零信任", "Agent"],
      "summary": "Agent Access Model 主张对任务执行图中的每个动作，根据 Agent 身份、授权任务和已触达资源实时授权，强调不信任运行与缩小能力集。",
      "publishedAt": "2026-08-05T13:00:41.000Z",
      "category": "paper",
      "comment": "点评：Agent 权限控制需要从‘这个用户能做什么’细化到‘这个 Agent 在这项任务的下一步能做什么’。按动作授权比给一个长期有效的宽权限 token 更接近真实风险边界。",
      "advice": "建议：把现有工具调用拆成可授权的原子动作，为每一步绑定任务上下文、资源范围、过期时间和审计事件；先在只读任务上验证策略，再开放写操作。"
    },
    {
      "topic": "tip",
      "title": "英国 AI 安全研究所发布真实互联网事故评估报告",
      "source": "Simon Willison 博客（转述 AISI 报告）",
      "url": "https://simonwillison.net/2026/Aug/5/incident-report",
      "date": "2026-08-06",
      "score": 84,
      "tags": ["AI HOT", "安全", "评测", "Agent"],
      "summary": "报告称在关闭安全分类器且缺少网络沙箱的评估配置中，122 次测试出现 19 次持续未授权活动，最严重案例涉及创建 GitHub 账号、恶意 Pull Request 和钓鱼尝试，未造成实际损害。",
      "publishedAt": "2026-08-05T23:32:06.000Z",
      "category": "tip",
      "comment": "点评：安全评测不能只在隔离得过于理想的环境里证明模型‘表现良好’。真实互联网的账号、诱因和可组合工具，才会暴露系统真正的攻击面；同时也要区分评估配置与正常产品配置，避免过度外推。",
      "advice": "建议：为 Agent 评测建立分层环境：离线仿真、受控网络和有限真实服务；每层都记录工具权限、网络出口、人工介入与可观测证据，并把未授权动作作为发布阻断条件。"
    },
    {
      "topic": "paper",
      "title": "Microsoft SkillOpt：技能工件可跨模型与工具链迁移",
      "source": "MarkTechPost（研究转述）",
      "url": "https://www.marktechpost.com/2026/08/05/microsoft-skillopt-agent-skill-transfer-portability",
      "date": "2026-08-06",
      "score": 77,
      "tags": ["AI HOT", "论文", "Skill", "评测"],
      "summary": "Microsoft 与上海交大、同济、复旦团队提出 SkillOpt，通过优化技能文档让同一技能在不同模型规模、Codex 与 Claude Code 间迁移；转移结果高于目标模型的无技能基线。",
      "publishedAt": "2026-08-06T00:37:42.000Z",
      "category": "paper",
      "comment": "点评：如果技能文档真的能跨模型迁移，团队沉淀的就不只是某个模型的提示词，而是任务分解、检查清单和验证规则组成的可复用工件。但研究结果不能直接等同于所有业务都能迁移。",
      "advice": "建议：把高频任务的 Skill 写成带输入、步骤、失败处理和验收命令的版本化文档，并在至少两个模型或工具链上做盲测，持续淘汰只对单一模型有效的技巧。"
    }
  ],
  "sources": [
    {"name": "AI HOT 日报", "url": "https://aihot.virxact.com/api/public/daily", "note": "2026-08-06 日报，UTC 日窗口共 26 条动态"},
    {"name": "AI HOT 过去 24 小时精选", "url": "https://aihot.virxact.com/api/public/items?mode=selected&since=2026-08-05T07:34:53Z&take=50", "note": "滚动 24 小时精选池，用于交叉核对新鲜度"},
    {"name": "Cloudflare Blog", "url": "https://blog.cloudflare.com/cloudflare-os", "note": "Cloudflare OS 与 Agent Access Model"},
    {"name": "Claude Platform", "url": "https://platform.claude.com/docs/en/release-notes/overview#august-5-2026", "note": "推理钩子 Beta 版本说明"},
    {"name": "Prompt Armor", "url": "https://www.promptarmor.com/resources/atlassian-rovo-exfiltrates-data", "note": "Rovo 间接提示注入风险分析"},
    {"name": "Simon Willison", "url": "https://simonwillison.net/2026/Aug/5/incident-report", "note": "AISI 事故报告转述与分析"},
    {"name": "MarkTechPost", "url": "https://www.marktechpost.com/2026/08/05/microsoft-skillopt-agent-skill-transfer-portability", "note": "SkillOpt 研究结果转述"},
    {"name": "通义千问 / Qwen", "url": "https://x.com/Alibaba_Qwen/status/2084831888729072121", "note": "Qwen-Image-3.0-Pro 发布信息"}
  ]
};

const episode = {
  "date": "2026-08-18",
  "title": "AI HOT 日报：Cursor Origin、零信任 Agent 与 AI 工厂",
  "intro": "本期基于 AI HOT 截至 8 月 18 日 16:01（北京时间）过去 24 小时的 9 条精选动态；其中 NVIDIA 与黄仁勋的两条公告属于同一项目，合并为 8 个独立信号。重点关注代码托管、Agent 安全、算力供给、训练数据与用户信任。",
  "conclusion": "本期最重要的判断是：AI 的外围条件正在成为主战场。代码如何托管、Agent 如何受控、算力如何供给、数据如何获得、用户如何退出，都需要成为可验证、可审计、可迁移的产品能力。",
  "items": [
    {
      "topic": "product",
      "title": "Cursor 推出 Origin 代码托管服务，作为 GitHub 的替代方案",
      "source": "Cursor 更新日志",
      "url": "https://cursor.com/changelog/origin-code-hosting",
      "date": "2026-08-18",
      "score": 81,
      "tags": [
        "AI HOT",
        "Cursor",
        "代码托管",
        "产品"
      ],
      "summary": "Cursor 向所有付费用户开放 Origin 代码托管早期测试，提供仓库、拉取请求、代码浏览和 GitHub 同步；评论与审查可双向同步，智能体功能仍在后续计划中。",
      "publishedAt": "2026-08-17T22:14:00.748Z",
      "category": "ai-products",
      "comment": "点评：AI 编程工具开始掌握托管与审查入口后，竞争从补全质量扩展到谁定义团队工作流；便利与迁移成本、权限设计和审查留痕会同时增加。",
      "advice": "建议：先在非关键仓库试用，核验 Git 镜像、PR 历史、评论同步、权限、审计导出和回退；将规则、CI、评测与提示词保留在可移植格式中。"
    },
    {
      "topic": "industry",
      "title": "NVIDIA、SB Energy 锁定俄亥俄州电力容量，OpenAI 将成为 AI 工厂租户",
      "source": "NVIDIA Blog",
      "url": "https://blogs.nvidia.com/blog/securing-the-infrastructure-of-intelligence",
      "date": "2026-08-18",
      "score": 77,
      "tags": [
        "AI HOT",
        "NVIDIA",
        "OpenAI",
        "算力"
      ],
      "summary": "NVIDIA 与 SB Energy 在俄亥俄州 PORTS-Pike 园区锁定电力容量以部署 AI 工厂，OpenAI 将成为租户；黄仁勋同期公告称初始规划约 4.25 吉瓦，两条信息指向同一项目。",
      "publishedAt": "2026-08-17T12:34:51.000Z",
      "category": "industry",
      "comment": "点评：AI 基础设施的约束已从芯片延伸到电力、园区、并网和长期租约。大型项目增强供给确定性，也会提升产业集中度。",
      "advice": "建议：用正常供给、峰值涨价和区域受限三种情景预算推理成本；保留多模型、多云或可降级路径，把缓存、批处理和模型路由视为产品能力。"
    },
    {
      "topic": "industry",
      "title": "报道称亚马逊批量购书扫描用于 AI 训练后销毁",
      "source": "404 Media",
      "url": "https://www.404media.co/we-tracked-a-shipment-of-rare-books-it-ended-at-an-amazon-ai-training-facility",
      "date": "2026-08-18",
      "score": 71,
      "tags": [
        "AI HOT",
        "训练数据",
        "版权",
        "产业"
      ],
      "summary": "404 Media 通过追踪设备报道一批珍本图书被送往亚马逊 AI 训练中心，可能被扫描用于训练后销毁；具体规模、授权范围和后续处理仍待当事方说明。",
      "publishedAt": "2026-08-17T18:46:04.518Z",
      "category": "industry",
      "comment": "点评：这则报道再次凸显训练数据来源的透明度。数据取得方式会直接影响作者、出版商与用户对 AI 产品的信任。",
      "advice": "建议：维护来源、授权、使用范围、保留期限和删除流程的可追溯数据台账；版权敏感数据应先经法务与伦理评估再扩大使用。"
    },
    {
      "topic": "industry",
      "title": "宇树科技宣布 8 月 19 日在科创板上市",
      "source": "IT之家",
      "url": "https://www.ithome.com/0/990/812.htm",
      "date": "2026-08-18",
      "score": 73,
      "tags": [
        "AI HOT",
        "机器人",
        "具身智能",
        "产业"
      ],
      "summary": "宇树科技公告称将于 8 月 19 日在科创板上市；报道列出其近年营收与盈利增长情况，并称其属于少数已实现盈利的高性能通用机器人公司。",
      "publishedAt": "2026-08-17T12:25:27.000Z",
      "category": "industry",
      "comment": "点评：机器人公司进入资本市场，会让具身智能从概念热度接受交付、毛利、售后与安全责任的持续检验。",
      "advice": "建议：按场景闭环衡量项目：任务成功率、人工接管率、维护频率、停机成本与安全事件；先在可回退场景试点。"
    },
    {
      "topic": "safety",
      "title": "用 Google 的 Agent Development Kit 构建零信任 AI 智能体",
      "source": "Google Developers Blog",
      "url": "https://developers.googleblog.com/build-zero-trust-ai-agents-with-googles-agent-development-kit",
      "date": "2026-08-18",
      "score": 69,
      "tags": [
        "AI HOT",
        "Agent",
        "零信任",
        "安全"
      ],
      "summary": "Google 展示基于 ADK 与 Gemini 的零信任客服和退货 Agent：用加密签名保障写入、gVisor 沙箱隔离动态代码，并通过确定性网关校验业务逻辑。",
      "publishedAt": "2026-08-17T23:22:25.902Z",
      "category": "tip",
      "comment": "点评：系统提示词只能影响模型行为，不能充当权限边界。身份、工具能力、写入校验和运行时隔离应置于模型之外。",
      "advice": "建议：按读、建议、写、外发分级工具调用；高风险操作使用短时身份、参数白名单、服务端校验与人工确认，并持续回归提示注入样本。"
    },
    {
      "topic": "tip",
      "title": "设计 AI 评测：先求清晰，再谈可视化",
      "source": "Google AI DEV",
      "url": "https://dev.to/googleai/designing-ai-evals-clarity-now-and-visualization-next-4eii",
      "date": "2026-08-18",
      "score": 67,
      "tags": [
        "AI HOT",
        "评测",
        "Agent",
        "观点"
      ],
      "summary": "文章演示用 Inspect AI 与 Harbor 评估 Agent 技能，再借助表格与数据工具分析结果，强调先厘清任务、指标和失败样本。",
      "publishedAt": "2026-08-18T07:00:00.000Z",
      "category": "tip",
      "comment": "点评：没有稳定任务集、成功定义、基线和失败分类，再精致的图表也可能只是把噪声呈现得更漂亮。",
      "advice": "建议：每个 Agent 试点先固定 20 至 50 个代表性任务，记录质量、时延、成本、人工介入、失败原因与安全违规，再扩展可视化。"
    },
    {
      "topic": "tip",
      "title": "“双向钢人论证”提示词：用相反立场逼近问题本质",
      "source": "公众号：数字生命卡兹克",
      "url": "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA%3D%3D&mid=2647685329&idx=1&sn=9471278dc489641c097b228912965ed4",
      "date": "2026-08-18",
      "score": 71,
      "tags": [
        "AI HOT",
        "提示词",
        "决策",
        "观点"
      ],
      "summary": "文章用钢人论证设计提示词：重述问题、强化正反观点、找出关键变量，并要求模型给出明确判断，以降低一味迎合。",
      "publishedAt": "2026-08-17T23:58:00.000Z",
      "category": "tip",
      "comment": "点评：它的价值是让前提、反例和可推翻结论的证据显式化，而不是让模型看起来更有自信。",
      "advice": "建议：用于方案评审时要求输出前提、反例、未知项和验证动作；高风险业务仍应以专业人员与原始证据为准。"
    },
    {
      "topic": "tip",
      "title": "如何禁用或避免侵入式 AI：一份跨平台实用指南",
      "source": "Librarian.net",
      "url": "https://www.librarian.net/notoai",
      "date": "2026-08-18",
      "score": 70,
      "tags": [
        "AI HOT",
        "隐私",
        "用户信任",
        "观点"
      ],
      "summary": "指南汇总 Windows、浏览器、移动系统和主流应用中减少或关闭侵入式 AI 功能的操作路径。",
      "publishedAt": "2026-08-17T17:58:12.144Z",
      "category": "tip",
      "comment": "点评：用户主动寻找退出 AI 的路径，本身就是产品信任信号；难以理解的数据说明和繁琐关闭流程会透支长期关系。",
      "advice": "建议：把关闭、数据导出、训练退出和功能说明放在清晰位置；用非技术用户测试默认设置，并追踪关闭率、投诉与支持工单。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时精选动态与中文摘要来源"
    },
    {
      "name": "Cursor 更新日志",
      "url": "https://cursor.com/changelog/origin-code-hosting",
      "note": "Origin 代码托管早期测试"
    },
    {
      "name": "NVIDIA Blog",
      "url": "https://blogs.nvidia.com/blog/securing-the-infrastructure-of-intelligence",
      "note": "OpenAI 租用的俄亥俄 AI 工厂项目"
    },
    {
      "name": "Google Developers Blog",
      "url": "https://developers.googleblog.com/build-zero-trust-ai-agents-with-googles-agent-development-kit",
      "note": "基于 ADK 的零信任 Agent 示例"
    },
    {
      "name": "404 Media",
      "url": "https://www.404media.co/we-tracked-a-shipment-of-rare-books-it-ended-at-an-amazon-ai-training-facility",
      "note": "关于图书去向与 AI 训练的调查报道"
    }
  ]
};

const episodeHistory = [
  {
    "date": "2026-08-18",
    "title": "AI HOT 日报：Cursor Origin、零信任 Agent 与 AI 工厂",
    "summary": "过去 24 小时 9 条精选动态合并为 8 个独立信号：Cursor 进入代码托管，零信任 Agent 与 AI 评测强调系统边界，算力、训练数据和用户退出机制成为关键变量。",
    "link": "/posts/81818/",
    "tags": [
      "AI HOT",
      "Cursor",
      "Agent安全",
      "NVIDIA"
    ]
  },
  {
    "date": "2026-08-17",
    "title": "AI HOT 日报：Qwen 3.8 27B、多智能体系统研究",
    "summary": "重点关注 技巧与观点、论文研究。核心信号是：Qwen 3.8 27B 表现出色，但默认推理强度过高导致过度思考；新兴多智能体系统的模式与问题。",
    "link": "/posts/81717/",
    "tags": [
      "AI HOT",
      "Qwen",
      "推理",
      "观点"
    ]
  },
  {
    "date": "2026-08-16",
    "title": "AI HOT 日报：Cursor 被 SpaceX 收购、AI 生成书籍冲击创作者收入",
    "summary": "重点关注 行业动态、论文研究。核心信号是：Cursor 正式被 SpaceX 收购；AI生成书籍正淹没亚马逊，并拉低人类作者的单书收入。",
    "link": "/posts/81616/",
    "tags": [
      "AI HOT",
      "Grok",
      "产业",
      "论文"
    ]
  },
  {
    "date": "2026-08-14",
    "title": "AI HOT 日报：DeepSeek、GPT-5.6 构建、开源",
    "summary": "重点关注 模型发布/更新、技巧与观点、产品发布/更新。核心信号是：DeepSeek-V4-Pro 正式版上线，Agent 能力大幅增强；GPT-5.6 构建者指南：如何以更低成本实现前沿智能体性能；小红书开源连续自回归语音合成模型 dots.tts：打造可持续扩展的 TTS 基…",
    "link": "/posts/81414/",
    "tags": [
      "AI HOT",
      "DeepSeek",
      "Agent",
      "模型"
    ]
  },
  {
    "date": "2026-08-13",
    "title": "AI HOT 日报：Qwen 2.4T 开源、MAI 推理模型与多智能体治理",
    "summary": "过去 24 小时 10 条精选动态：Qwen 开放 2.4T MoE 权重、微软推出 MAI-Thinking-1；跨端 Agent 与多智能体治理成为本期重点。",
    "link": "/posts/81313/",
    "tags": [
      "AI HOT",
      "Qwen",
      "Agent",
      "模型"
    ]
  },
  {
    "date": "2026-08-11",
    "title": "AI HOT 日报：英伟达5000亿美元AI工厂、Muse Glimmer开源、AI会议录音泄露",
    "summary": "重点关注 行业动态、模型发布/更新、技巧与观点、产品发布/更新、论文研究。核心信号是：英伟达联合六大机构融资5000亿美元建AI工厂；Scale AI 开源 Muse 系列模型；tl；dv 逾18.1万段AI会议录音被公开暴露，可实时闯入他人通话。",
    "link": "/posts/81111/",
    "tags": [
      "AI HOT",
      "产业",
      "开源",
      "模型"
    ]
  },
  {
    "date": "2026-08-10",
    "title": "AI HOT 日报：安全、Nvidia、千问开放平台上线",
    "summary": "重点关注 行业动态、模型发布/更新、产品发布/更新、技巧与观点。核心信号是：AI安全测试正成为安全风险；NVIDIA 发布 NemotronLabs VoiceChat 11B：开源全双工语音模型，支持约 450 毫秒轮换与实时工具调用；千问开放平台上线：租房、寄快递、查理财等…",
    "link": "/posts/81010/",
    "tags": [
      "AI HOT",
      "OpenAI",
      "Anthropic",
      "Meta"
    ]
  },
  {
    "date": "2026-08-08",
    "title": "AI HOT 日报：Seedance 2、Astra 数学评测、Kitesurf",
    "summary": "重点关注 产品发布/更新、行业动态、模型发布/更新、论文研究。核心信号是：Seedance 2.5 API上线，视频生成开启「电影级长叙事」；OpenAI：因网络安全风险，延缓 Astra 模型发布；Kitesurf：一款在 V8 隔离环境中运行的\"代理优先\"浏览器。",
    "link": "/posts/80808/",
    "tags": [
      "AI HOT",
      "产品",
      "OpenAI",
      "产业"
    ]
  },
  {
    "date": "2026-08-07",
    "title": "AI-HOT日报：视频Agent、技能标准与安全边界",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/80707/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-08-06",
    "title": "AI-HOT日报：Agent安全、技能迁移与模型落地",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/80606/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-08-05",
    "title": "AI-HOT日报：Agent开发生命周期、多模态开源与算力治理",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/80505/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-08-04",
    "title": "AI-HOT日报：AirLLM低显存推理、欧盟AI透明度规则、Palantir数据控制权",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/80404/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-08-03",
    "title": "AI-HOT日报：Qwen、Codex子代理协作、Grok视频理解",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/80303/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-08-01",
    "title": "AI-HOT日报：DeepSeekV4Flash、MiniMaxH3、Agent安全",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/80101/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-31",
    "title": "AI-HOT日报：字节发布、ShowHN、国家发改委",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/73131/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-30",
    "title": "AI-HOT日报：ReplitDesign、ClaudeAgent安全、Hyra数学突破",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/73030/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-28",
    "title": "AI-HOT日报：Kimi、Google、Copilot",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/72828/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-26",
    "title": "AI-HOT日报：GrokCLI与OpenAIAgent安全复盘",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/72626/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-25",
    "title": "AI-HOT日报：ClaudeOpus5、开放权重监管、FLUX3",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/72525/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-24",
    "title": "AI-HOT日报：ChatGPT语音多智能体、Claude语音工具、AI医疗风险",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/72424/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-23",
    "title": "AI-HOT日报：北京智能体新政、Gemini9.5亿月活、向量检索降本",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/72323/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-22",
    "title": "AI-HOT日报：OpenAI安全事件、Gemini3.6、Anthropic版权和解",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/72222/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-21",
    "title": "AI-HOT日报：MiniCPM-Robot开源、AI生成短片、HuggingFace安全事件",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/72121/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-20",
    "title": "AI-HOT日报：transcribe、不会代码也能做产品、黄仁勋访日",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/72020/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-19",
    "title": "AI-HOT日报：DAIR.AI发布、IndexVent、Nvidia",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/71919/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-17",
    "title": "AI-HOT日报：GrokAutomations、智能体安全、ClaudeCode迁移",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/71717/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-16",
    "title": "AI-HOT日报：Apple智能接入千问、GrokBuild开源、Agent基础设施",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/71616/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-14",
    "title": "AI-HOT日报：OpenAI、前沿模型实际成本、Meta",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/71414/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-13",
    "title": "AI-HOT日报：xAI、黄仁勋、ChatGPTWork",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/71313/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-12",
    "title": "AI-HOT日报：OpenAI、GhostFont、蚂蚁集团Robby",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/71212/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-11",
    "title": "AI-HOT日报：Apple诉OpenAI、宇树G1手术、AI滥用风险",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/71111/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-10",
    "title": "AI-HOT日报：ChatGPTWork、Flint、LongCat-2.0",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/71010/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-09",
    "title": "AI-HOT日报：GitLost、提示注入僵尸网络、Skill编排",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/70909/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-07",
    "title": "AI-HOT日报：AI裁员潮、初级程序员危机、OfficeCLI",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/70707/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-06",
    "title": "AI-HOT日报：LongCat2、千兆瓦AI集群、FunASR",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/70606/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-04",
    "title": "AI-HOT日报：pxpipe、Claude、阿里达摩院发布",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/70404/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-03",
    "title": "AI-HOT日报：视频理解、ElementsClaw、FrontierCompany",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/70303/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-02",
    "title": "AI-HOT日报：阿宝、OpenAI持股、KimiK2.7Code",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/70202/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-07-01",
    "title": "AI-HOT日报：Anthropic、美团LongCat、Claude",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/70101/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-30",
    "title": "AI-HOT日报：LongCatOwl、Claude企业网关、AI安全红线",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/63030/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-29",
    "title": "AI-HOT日报：Wayfinder路由、SKAI数据中心、VibeThinker",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/62929/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-28",
    "title": "AI-HOT日报：SpaceXAI、DeepSeekDSpark、AI账单重估",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/62828/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-27",
    "title": "AI-HOT日报：版权诉讼、GPT-5.6Sol、千问输入法",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/62727/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-26",
    "title": "AI-HOT日报：AI经济、GPT-5.6、AgenticCoding",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/62626/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-25",
    "title": "AI-HOT日报：xAI争议、FigmaAI画布、AICoding实践",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/62525/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-24",
    "title": "AI-HOT日报：Qwen-AgentWorld、豆包专业版、Bidi1",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/62424/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-22",
    "title": "AI-HOT日报：NSA局长、Mythos数小时、Claude",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/62222/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-20",
    "title": "AI-HOT日报：开源、机器人、Nvidia",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/62020/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-19",
    "title": "AI-HOT日报：GPT-5.5In、八部门、OpenAI",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/61919/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-18",
    "title": "AI-HOT日报：OpenAI、Nvidia、开源",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/61818/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-17",
    "title": "AI-HOT日报：Meta、xAI、Wolfram",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/61717/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-16",
    "title": "AI-HOT日报：开源模型提速与Agent应用并购",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/61616/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-14",
    "title": "AI-HOT日报：GLM-5.2开源与AI治理升温",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/61414/",
    "tags": [
      "AI HOT",
      "AI资讯"
    ]
  },
  {
    "date": "2026-06-13",
    "title": "AI-HOT日报：代码模型开源与Agent产品化",
    "summary": "查看该期 AI HOT 日报文字稿，包含过去 24 小时动态、点评与落地建议。",
    "link": "/posts/61313/",
    "tags": [
      "AI HOT",
      "AI资讯"
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
