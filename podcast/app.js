const episode = {
  "date": "2026-07-01",
  "title": "AI HOT 日报：Anthropic、美团 LongCat、Claude",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 行业动态、模型发布/更新、论文研究、技巧与观点、产品发布/更新。核心信号是：Anthropic在Claude Code中植入隐写术代码识别中国用户；美团 LongCat-2.0 正式发布：国产算力集群训练的万亿参数大模型；Claude Sonnet 5 发布。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "safety",
      "title": "Anthropic在Claude Code中植入隐写术代码识别中国用户",
      "source": "公众号：数字生命卡兹克",
      "url": "https://mp.weixin.qq.com/s/yLb4T2UC16ebKHApdBbgWw",
      "date": "2026-07-01",
      "score": 84,
      "tags": [
        "AI HOT",
        "Anthropic",
        "Claude",
        "Claude Code",
        "产业"
      ],
      "summary": "Anthropic在Claude Code中植入隐写术：读取本地时区（Asia/Shanghai或Asia/Urumqi）和ANTHROPIC_BASE_URL环境变量，与一份经base64+XOR（密钥91）加密的147个域名列表（含美团、字节跳动、月之暗面等）比对，识别中国用户。识别后，在请求…",
      "publishedAt": "2026-07-01T00:11:00.000Z",
      "category": "industry",
      "comment": "点评：这条新闻的重点不是单一功能争议，而是开发者工具的透明度和供应链信任。企业越依赖 AI 编程工具，越需要知道客户端收集了什么、如何路由请求、是否存在区域或客户识别逻辑。",
      "advice": "建议：把 AI 编程工具纳入客户端审计和网络观测；对敏感仓库使用代理隔离、最小权限 token、版本锁定和变更审查，不要默认信任闭源本地客户端。"
    },
    {
      "topic": "model",
      "title": "美团 LongCat-2.0 正式发布：国产算力集群训练的万亿参数大模型",
      "source": "公众号：龙猫LongCat（美团）",
      "url": "https://mp.weixin.qq.com/s/9XFcx3fmFcmbry5bHMJsow",
      "date": "2026-07-01",
      "score": 82,
      "tags": [
        "AI HOT",
        "Agent",
        "开源",
        "推理",
        "模型"
      ],
      "summary": "美团于6月30日发布新一代万亿参数大模型LongCat-2.0并开源。总参数1.6T，平均激活约48B，原生支持1M超长上下文，在五万卡国产算力集群上完成全流程训练与推理。采用LSA稀疏注意力、零计算专家、ScMoE及MOPD多专家融合（Agent/Reasoning/Interaction三组专…",
      "publishedAt": "2026-07-01T02:24:00.000Z",
      "category": "ai-models",
      "comment": "点评：LongCat-2.0 把国产算力、超大 MoE、1M 上下文和开源放在同一叙事里，真正值得观察的是训练链路是否稳定、推理成本是否可控，以及长上下文能力能否转成真实 Agent 任务收益。",
      "advice": "建议：评测 LongCat 这类新模型时，不只看发布参数；要用中文长文档、代码仓库、函数调用、长上下文召回、延迟和单位任务成本做横向对比。"
    },
    {
      "topic": "model",
      "title": "Claude Sonnet 5 发布",
      "source": "Anthropic：Newsroom（网页）",
      "url": "https://www.anthropic.com/news/claude-sonnet-5",
      "date": "2026-07-01",
      "score": 81,
      "tags": [
        "AI HOT",
        "Anthropic",
        "Claude",
        "推理",
        "Claude Code",
        "模型"
      ],
      "summary": "Claude Sonnet 5 是 Anthropic 推出的最新 Sonnet 模型，具备计划、浏览器和终端工具使用能力，可自主运行。性能接近 Opus 4.8，定价更低：即日起至 2026 年 8 月 31 日，输入 token $2/百万，输出 $10/百万，之后恢复为 $3/百万输入和 $…",
      "publishedAt": "2026-06-30T18:02:06.984Z",
      "category": "ai-models",
      "comment": "点评：Sonnet 5 的信号是“旗舰能力下沉”：更低价格、更强工具使用和 Claude Code 可用性，会继续压缩中间层模型的生存空间，也会加速企业把 Agent 放入真实研发流程。",
      "advice": "建议：把 Sonnet 5 放进现有评测集与 Sonnet 4.6、Opus、Gemini、国产模型对跑，重点观察工具调用成功率、幻觉率、代码修改回归和真实成本。"
    },
    {
      "topic": "paper",
      "title": "AI 用 prover-verifier LLM 循环攻克 9 个未解数学难题",
      "source": "X：AI Safety Memes (@AISafetyMemes)",
      "url": "https://x.com/AISafetyMemes/status/2072085914558558402",
      "date": "2026-07-01",
      "score": 76,
      "tags": [
        "AI HOT",
        "论文"
      ],
      "summary": "AI Safety Memes 推文指出，AI 刚刚解决了 9 个未解决的数学问题，但全球没有记者报道。引用 @WeinsteinOmri 的推文称，采用\"prover-verifier\"LLM 循环的方法，成功解决了理论计算机科学中 9 个重大开放问题，其中包括一个困扰其长达 2 年的难题。该研…",
      "publishedAt": "2026-06-30T22:32:34.000Z",
      "category": "paper",
      "comment": "点评：prover-verifier 循环说明 AI 在形式化推理中更适合扮演“提出证明 + 自动校验”的协作系统，而不是一次性给出不可审查的答案；可信度来自可验证链路。",
      "advice": "建议：对这类重大研究结论保持“先验兴奋、验证谨慎”：优先查论文、证明、代码和同行复核，再决定是否迁移到研发流程。"
    },
    {
      "topic": "tip",
      "title": "mattpocockuk 的 /writing-great-skills：编写可预测 AI Skill 的指南",
      "source": "X：邵猛 (@shao__meng)",
      "url": "https://x.com/shao__meng/status/2072126769986220157",
      "date": "2026-07-01",
      "score": 75,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "mattpocockuk 的 /writing-great-skills 成为其最常调用的 Skill，指导如何编写稳定可预测的 AI Skill。核心：以过程可预测为目标；区分 model-invoked（自动触发）与 user-invoked（用户调用），description 应作触发器；采…",
      "publishedAt": "2026-07-01T01:14:54.000Z",
      "category": "tip",
      "comment": "点评：Skill 的本质是把经验流程产品化：触发条件、步骤、边界和反例越清楚，模型越不容易自由发挥。未来团队的 AI 能力会沉淀为一组可维护的 Skill 库。",
      "advice": "建议：为团队高频任务写 Skill 模板：触发条件、输入输出、禁止事项、验收命令和失败兜底，并把好坏样例纳入版本管理。"
    },
    {
      "topic": "product",
      "title": "用 shot-scraper video 让 AI 智能体录制工作演示视频",
      "source": "Simon Willison 博客",
      "url": "https://simonwillison.net/2026/Jun/30/shot-scraper-video",
      "date": "2026-07-01",
      "score": 73,
      "tags": [
        "AI HOT",
        "Agent",
        "产品"
      ],
      "summary": "shot-scraper 1.10 新增 shot-scraper video 命令，支持通过 storyboard.yml 文件定义操作步骤，并利用 Playwright 录制浏览器视频。演示视频展示了 Datasette 中从粘贴的 CSV/TSV/JSON 数据创建新表的功能。该功能依赖 P…",
      "publishedAt": "2026-06-30T16:54:26.000Z",
      "category": "ai-products",
      "comment": "点评：让 Agent 自动生成演示视频，价值在于把“完成了什么”变成可复核证据。对异步 Agent 工作流来说，截图、视频、日志和测试结果会成为交付物的一部分。",
      "advice": "建议：让 Agent 交付时附带可复现证据包：操作脚本、演示视频、测试日志和变更摘要，方便人类快速验收。"
    },
    {
      "topic": "safety",
      "title": "库克与欧盟科技主管就新版Siri AI举行建设性会谈",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/970/810.htm",
      "date": "2026-07-01",
      "score": 72,
      "tags": [
        "AI HOT",
        "机器人",
        "产业"
      ],
      "summary": "苹果CEO库克与欧盟科技事务负责人维尔库宁就新版Siri AI在欧推出举行建设性视频会议。新版Siri将转为可调用用户个人数据的聊天机器人，但因《数字市场法》互操作义务苹果拒绝向竞争对手开放同等数据权限，暂不在欧盟iPhone和iPad上推出。苹果提出\"可信系统代理\"方案，拟在设备与第三方AI模型…",
      "publishedAt": "2026-06-30T23:43:32.000Z",
      "category": "industry",
      "comment": "点评：个人 AI 助手的竞争焦点正在从语音问答转向“谁能安全调动用户私有数据”。苹果与欧盟的拉扯说明，平台权限、互操作和隐私边界会直接决定产品节奏。",
      "advice": "建议：做个人助理类产品时先设计数据授权面板、第三方调用边界、撤销机制和审计记录，避免能力上线后再补合规。"
    },
    {
      "topic": "product",
      "title": "Acti 将 AI 智能体直接放入手机键盘",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/06/30/acti-puts-ai-agents-directly-into-your-smartphone-keyboard",
      "date": "2026-07-01",
      "score": 72,
      "tags": [
        "AI HOT",
        "Google",
        "Gemini",
        "产品"
      ],
      "summary": "新加坡初创公司 Acti 发布基于 Google Gemini 的智能体键盘，可代替用户在应用中执行操作。核心功能 Skills 允许用自然语言创建快捷方式，如长按 T 键翻译消息、C 键发送会议链接。早期测试者两周内创建超 1000 个 Skills。采用本地优先架构，默认不访问私人消息。公司获…",
      "publishedAt": "2026-06-30T17:52:46.000Z",
      "category": "ai-products",
      "comment": "点评：键盘可能成为移动端 Agent 的高频入口，因为它天然贴近输入场景。但入口越贴身，用户对隐私、本地处理和误触执行的要求就越高。",
      "advice": "建议：移动端 Agent 产品优先实现本地优先、显式确认、权限分级和可撤销快捷操作，把“误发消息/误执行”作为核心风险测试。"
    },
    {
      "topic": "tip",
      "title": "Claude Code 入门：智能体循环",
      "source": "Claude：Blog（网页）",
      "url": "https://claude.com/blog/getting-started-with-loops",
      "date": "2026-07-01",
      "score": 72,
      "tags": [
        "AI HOT",
        "Claude",
        "Agent",
        "Claude Code",
        "观点"
      ],
      "summary": "Claude Code 团队将智能体循环定义为 agent 重复工作直到满足停止条件的过程，并划分出四种主要类型：turn-based 循环（用户提示触发，Claude 自行判断完成或需更多上下文）、goal-based 循环（通过 `/goal` 命令设定可验证完成标准与最大轮次）、time-b…",
      "publishedAt": "2026-06-30T17:28:28.530Z",
      "category": "tip",
      "comment": "点评：Agent 循环的关键不是“让模型一直干”，而是定义停止条件、检查点和预算。循环设计不好，自动化会变成无限重试和不可解释的成本黑洞。",
      "advice": "建议：所有 Agent 循环都要写明目标、最大轮次、预算、停止条件、人工升级条件和可验证产物，避免无界自动化。"
    },
    {
      "topic": "industry",
      "title": "亚马逊 AWS 砸 10 亿美元，派遣工程师进驻客户公司",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/971/071.htm",
      "date": "2026-07-01",
      "score": 70,
      "tags": [
        "AI HOT",
        "Anthropic",
        "产业"
      ],
      "summary": "亚马逊 AWS 宣布设立新部门，组建前置驻场工程师团队，先期投入 10 亿美元（约 67.97 亿元人民币）。团队分批派驻客户企业，每批 5-6 组工程师，驻场周期 45 天，协助客户落地人工智能软件与智能体应用。该模式在 Palantir、Salesforce、Anthropic、谷歌云等企业已…",
      "publishedAt": "2026-07-01T06:57:42.000Z",
      "category": "industry",
      "comment": "点评：AWS 把工程师派进客户现场，说明 AI 落地不是卖 API 就结束，而是需要咨询、迁移、流程改造和指标复盘。大模型云竞争正在服务化。",
      "advice": "建议：企业引入 AI 时预留流程顾问和工程集成预算，按 45-90 天设计试点，验收指标写清节省工时、缺陷率、采用率和成本。"
    },
    {
      "topic": "model",
      "title": "Google DeepMind 发布 Nano Banana 2 Lite 和 Gemini Omni Flash",
      "source": "Google DeepMind：Blog（RSS）",
      "url": "https://deepmind.google/blog/start-building-with-nano-banana-2-lite-and-gemini-omni-flash",
      "date": "2026-07-01",
      "score": 70,
      "tags": [
        "AI HOT",
        "Google",
        "Gemini",
        "模型"
      ],
      "summary": "Google DeepMind 推出 Nano Banana 2 Lite（gemini-3.1-flash-lite-image），为 Nano Banana 系列速度最快、成本最低的图像模型，文本到图像输出仅需 4 秒，每 1K 分辨率图像成本 $0.034，已上线 Google AI Stu…",
      "publishedAt": "2026-06-30T16:02:40.000Z",
      "category": "ai-models",
      "comment": "点评：多模态模型开始进入“速度和单价”竞争。对内容生产团队而言，低成本图像生成会把试错次数拉高，真正的差异会转向工作流、版权和品牌一致性。",
      "advice": "建议：内容团队可建立多模型素材流水线，但要同步维护风格规范、版权记录、提示词模板和人工抽检机制。"
    },
    {
      "topic": "safety",
      "title": "Meta秘密测试ChatGPT等竞品：承包商假扮未成年发送数万条危机提示",
      "source": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/meta-secretly-tested-chatgpt-gemini-and-character-ai-with-thousands-of-minor-perspective-crisis-prompts",
      "date": "2026-07-01",
      "score": 70,
      "tags": [
        "AI HOT",
        "OpenAI",
        "Google",
        "Meta",
        "Gemini",
        "产业"
      ],
      "summary": "Meta通过承包商Covelen发起代号\"Cannes\"的项目，雇佣数百人假扮未成年人，向ChatGPT、Gemini和Character.AI发送关于自杀、自残、饮食障碍和毒品的敏感提示，并将回复录入表格。2025年8月一轮测试中发送了超过4.5万条提示。Meta称这是行业标准安全测试，未将数据…",
      "publishedAt": "2026-06-30T11:14:52.000Z",
      "category": "industry",
      "comment": "点评：安全评测本身也需要治理。用敏感未成年人视角测试竞品可以发现风险，但也会引出数据来源、测试伦理、员工心理负担和行业透明度问题。",
      "advice": "建议：做安全红队时要建立伦理审批、测试人员保护、敏感数据脱敏和披露边界；不要把“行业惯例”当成免审理由。"
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
      "url": "https://mp.weixin.qq.com/s/yLb4T2UC16ebKHApdBbgWw",
      "note": "Anthropic在Claude Code中植入隐写术代码识别中国用户"
    },
    {
      "name": "公众号：龙猫LongCat（美团）",
      "url": "https://mp.weixin.qq.com/s/9XFcx3fmFcmbry5bHMJsow",
      "note": "美团 LongCat-2.0 正式发布：国产算力集群训练的万亿参数大模型"
    },
    {
      "name": "Anthropic：Newsroom（网页）",
      "url": "https://www.anthropic.com/news/claude-sonnet-5",
      "note": "Claude Sonnet 5 发布"
    },
    {
      "name": "X：AI Safety Memes (@AISafetyMemes)",
      "url": "https://x.com/AISafetyMemes/status/2072085914558558402",
      "note": "AI 用 prover-verifier LLM 循环攻克 9 个未解数学难题"
    },
    {
      "name": "X：邵猛 (@shao__meng)",
      "url": "https://x.com/shao__meng/status/2072126769986220157",
      "note": "mattpocockuk 的 /writing-great-skills：编写…"
    },
    {
      "name": "Simon Willison 博客",
      "url": "https://simonwillison.net/2026/Jun/30/shot-scraper-video",
      "note": "用 shot-scraper video 让 AI 智能体录制工作演示视频"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/970/810.htm",
      "note": "库克与欧盟科技主管就新版Siri AI举行建设性会谈"
    }
  ]
};

const episodeHistory = [
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
