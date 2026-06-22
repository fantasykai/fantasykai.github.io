const episode = {
  "date": "2026-06-22",
  "title": "AI HOT 日报：NSA局长、Mythos 数小时、Claude",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 行业动态、产品发布/更新、技巧与观点、论文研究。核心信号是：NSA局长：Mythos数小时内攻破其几乎所有机密系统；Mythos 数小时内攻破 NSA 全系统，下一代已出；美团tabbit国际版免费接入GPT-5.5/Claude Opus 4.8等旗舰模型。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "safety",
      "title": "NSA局长：Mythos数小时内攻破其几乎所有机密系统",
      "source": "X：AI Safety Memes (@AISafetyMemes)",
      "url": "https://x.com/AISafetyMemes/status/2068718552174252477",
      "date": "2026-06-22",
      "score": 80,
      "tags": [
        "AI HOT",
        "Google",
        "产业"
      ],
      "summary": "美国NSA局长称，Mythos在数小时内攻破了其几乎所有机密系统。此前Mythos已在5天内破解MacOS。而顶级漏洞团队Google Project Zero完成同等攻击需6个月，单个MacOS零日漏洞价值约200万美元。苹果原假设全球仅10-20个团队具备此能力，Mythos将使该数字增至数千…",
      "publishedAt": "2026-06-21T15:31:52.000Z",
      "category": "industry",
      "comment": "点评：AI 能力越深入生产，治理越不能停留在原则口号，必须落到权限、审计、数据边界和责任链。",
      "advice": "建议：管理者应把合规、审计、权限和员工沟通前置，避免 AI 项目因信任问题受阻。"
    },
    {
      "topic": "safety",
      "title": "Mythos 数小时内攻破 NSA 全系统，下一代已出",
      "source": "X：Kim (@kimmonismus)",
      "url": "https://x.com/kimmonismus/status/2068787804516053385",
      "date": "2026-06-22",
      "score": 79,
      "tags": [
        "AI HOT",
        "产业"
      ],
      "summary": "据《经济学人》报道，6月11日，在亚马逊发现越狱的同一天，AI模型 Mythos 据称在数小时内攻破了美国国家安全局（NSA）和网络司令部的几乎所有机密系统，而非此前认为的数周。参议院情报委员会副主席 Mark Warner 转述 NSA 局长 Joshua Rudd 的话确认了此事。主推文还透露…",
      "publishedAt": "2026-06-21T20:07:03.000Z",
      "category": "industry",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：管理者应把合规、审计、权限和员工沟通前置，避免 AI 项目因信任问题受阻。"
    },
    {
      "topic": "product",
      "title": "美团tabbit国际版免费接入GPT-5.5/Claude Opus 4.8等旗舰模型",
      "source": "X：阿易 AI Notes (@AYi_AInotes)",
      "url": "https://x.com/AYi_AInotes/status/2068637890247016607",
      "date": "2026-06-22",
      "score": 78,
      "tags": [
        "AI HOT",
        "Claude",
        "Gemini",
        "GPT",
        "Kimi",
        "产品"
      ],
      "summary": "美团近期上线tabbit国际版应用，免费集成多家顶级AI模型的最新旗舰版，包括GPT-5.5、Claude Opus 4.8、Gemini 3.5 Flash，以及国内Kimi-2.6、GLM-5.1、MiniMax-M3。用户无需单独订阅即可使用这些模型。需注意：只有国际版包含海外模型，国内版仅…",
      "publishedAt": "2026-06-21T10:11:21.000Z",
      "category": "ai-products",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：产品团队应明确它解决的高频任务、接入的数据源、人工接管点和可量化指标。"
    },
    {
      "topic": "product",
      "title": "Cloudflare 临时账户 for AI agents",
      "source": "Simon Willison 博客",
      "url": "https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts",
      "date": "2026-06-22",
      "score": 72,
      "tags": [
        "AI HOT",
        "GPT",
        "Agent",
        "产品"
      ],
      "summary": "Cloudflare 推出临时账户功能，无需注册即可通过 `npx wrangler deploy --temporary` 部署 Workers 项目，临时项目存活 60 分钟。该功能虽标称为 AI 智能体设计，但普通用户同样适用。作者使用 GPT-5.5 xhigh 在 Codex Deskt…",
      "publishedAt": "2026-06-21T22:01:04.000Z",
      "category": "ai-products",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：产品团队应明确它解决的高频任务、接入的数据源、人工接管点和可量化指标。"
    },
    {
      "topic": "tip",
      "title": "Nature研究：AI或削弱专业人士硬技能",
      "source": "X：Rohan Paul (@rohanpaul_ai)",
      "url": "https://x.com/rohanpaul_ai/status/2068938534212530631",
      "date": "2026-06-22",
      "score": 71,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "一项发表于《自然》的研究指出，AI虽能节省时间，但可能削弱专业人士依赖的硬技能。波兰结肠镜研究显示，引入AI工作流后，有经验内镜医师独立操作的腺瘤检出率从28.4%降至22.4%。AI并非让人瞬间疏忽，而是改变了技能培养的\"摩擦\"机制--从主动搜索变为被动确认。类似现象也出现在软件开发中：一项20…",
      "publishedAt": "2026-06-22T06:06:00.000Z",
      "category": "tip",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "product",
      "title": "Netflix 工程师开源工具 Headroom，减少 95% token 消耗",
      "source": "X：阿易 AI Notes (@AYi_AInotes)",
      "url": "https://x.com/AYi_AInotes/status/2068836642916315344",
      "date": "2026-06-22",
      "score": 71,
      "tags": [
        "AI HOT",
        "Agent",
        "开源",
        "产品"
      ],
      "summary": "Netflix 工程师开源 Headroom，在 Codex、Cursor 等 AI 编码工具外包围本地 Agent，自动压缩日志、JSON 和代码，保留逻辑准确性，减少 95% token 消耗。数据本地化，无需改代码，已获 35k GitHub 星标。核心将降本从改提示词、换模型转向输入前置处…",
      "publishedAt": "2026-06-21T23:21:07.000Z",
      "category": "ai-products",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：产品团队应明确它解决的高频任务、接入的数据源、人工接管点和可量化指标。"
    },
    {
      "topic": "safety",
      "title": "Sakana AI 发布 Fugu Ultra 多模型编排系统",
      "source": "X：Rohan Paul (@rohanpaul_ai)",
      "url": "https://x.com/rohanpaul_ai/status/2068909919873757456",
      "date": "2026-06-22",
      "score": 70,
      "tags": [
        "AI HOT",
        "OpenAI",
        "产品"
      ],
      "summary": "Sakana AI 推出 Fugu Ultra，一个多智能体编排层，通过单一 OpenAI 兼容端点动态调用多个模型处理子任务。Fugu 本身是一个 LLM，被训练来自主决定是直接回答还是将子任务分发给模型池中的其他模型（包括递归调用自身），最后整合输出。在大多数基准测试中，Fugu Ultra …",
      "publishedAt": "2026-06-22T04:12:18.000Z",
      "category": "ai-products",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：管理者应把合规、审计、权限和员工沟通前置，避免 AI 项目因信任问题受阻。"
    },
    {
      "topic": "tip",
      "title": "Codex 自动化循环测试应用所有功能",
      "source": "X：Greg Brockman (@gdb)",
      "url": "https://x.com/gdb/status/2068761809318990054",
      "date": "2026-06-22",
      "score": 69,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "Greg Brockman 展示 Codex 的\"循环\"自动化能力：通过一句 /goal 指令，Codex 自动扫描应用的每个功能，基于代码创建用户故事与预期行为，并维护统一电子表格跟踪状态；完成后自动切换为测试每个用户故事并记录所有错误；接着修复所有逻辑与 UX 错误，最后再次验证用户行为。该循…",
      "publishedAt": "2026-06-21T18:23:45.000Z",
      "category": "tip",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "safety",
      "title": "特朗普政府要求 Anthropic 下线两模型引争议",
      "source": "TechCrunch：AI（RSS）",
      "url": "https://techcrunch.com/2026/06/21/when-the-trump-administration-cracks-down-on-anthropic-who-benefits",
      "date": "2026-06-22",
      "score": 68,
      "tags": [
        "AI HOT",
        "Anthropic",
        "产业"
      ],
      "summary": "特朗普政府以国家安全为由要求 Anthropic 将 Fable 5 和 Mythos 5 模型下线。Anthropic 因难以限制外国国民使用而全面撤下模型。据悉，白宫接到亚马逊 CEO Andy Jassy 举报--亚马逊研究人员发现可绕过 Fable 5 的护栏。网络安全专家签署公开信要求撤…",
      "publishedAt": "2026-06-21T15:28:17.000Z",
      "category": "industry",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：管理者应把合规、审计、权限和员工沟通前置，避免 AI 项目因信任问题受阻。"
    },
    {
      "topic": "tip",
      "title": "前Meta/Microsoft主任工程师kunchenguid的Agentic工程工作流",
      "source": "X：邵猛 (@shao__meng)",
      "url": "https://x.com/shao__meng/status/2068855273088074173",
      "date": "2026-06-22",
      "score": 67,
      "tags": [
        "AI HOT",
        "Meta",
        "Microsoft",
        "Agent",
        "MCP",
        "观点"
      ],
      "summary": "kunchenguid发布45分钟视频，讲解每天交付40-50个生产级PR的工作流。四层：1）终端中心（WezTerm+tmux+Neovim）；2）船员入职：全局memory精简27行，项目级memory由agent自写；3）协作：语音输入OpenSuperWhisper，AXI标准（MCP比C…",
      "publishedAt": "2026-06-22T00:35:09.000Z",
      "category": "tip",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "tip",
      "title": "AI用得好不好，跟你会不会管人，我觉得越来越是同一件事。",
      "source": "X：卡兹克 (@Khazix0918)",
      "url": "https://x.com/Khazix0918/status/2068927263035506977",
      "date": "2026-06-22",
      "score": 66,
      "tags": [
        "AI HOT",
        "Claude",
        "GPT",
        "观点"
      ],
      "summary": "作者在端午节假期用Claude Opus 4.8重构AI新闻聚合站AIHOT的聚簇机制，消耗2000多万token，耗时一天屡次改阈值（0.72→0.71）、补多语言等边界情况仍问题百出。对比怀念已被下架的Claude Fable 5--后者只需给模糊目标就能自动跑完并填坑。由此总结：管理AI与管…",
      "publishedAt": "2026-06-22T05:21:12.000Z",
      "category": "tip",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "paper",
      "title": "皮尤研究中心发布\"Americans and AI 2026\"报告",
      "source": "X：Rohan Paul (@rohanpaul_ai)",
      "url": "https://x.com/rohanpaul_ai/status/2068902049643901191",
      "date": "2026-06-22",
      "score": 65,
      "tags": [
        "AI HOT",
        "Meta",
        "Grok",
        "Claude",
        "Gemini",
        "论文"
      ],
      "summary": "皮尤研究中心最新报告显示，仅16%美国成年人预期AI在未来20年帮助社会，40%预期伤害。24%每天使用聊天机器人，51%从未使用。聊天机器人首要用途是搜索信息（42%），38%上班族用于工作，10%用于情感支持，4%用于陪伴。ChatGPT使用率最高（44%），其次Gemini（24%）、Cop…",
      "publishedAt": "2026-06-22T03:41:01.000Z",
      "category": "paper",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：技术团队可先复现实验结论，再判断是否能转化为检索、推理、评测或数据处理链路中的收益。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "X：AI Safety Memes (@AISafetyMemes)",
      "url": "https://x.com/AISafetyMemes/status/2068718552174252477",
      "note": "NSA局长：Mythos数小时内攻破其几乎所有机密系统"
    },
    {
      "name": "X：Kim (@kimmonismus)",
      "url": "https://x.com/kimmonismus/status/2068787804516053385",
      "note": "Mythos 数小时内攻破 NSA 全系统，下一代已出"
    },
    {
      "name": "X：阿易 AI Notes (@AYi_AInotes)",
      "url": "https://x.com/AYi_AInotes/status/2068637890247016607",
      "note": "美团tabbit国际版免费接入GPT-5.5/Claude Opus 4.8等…"
    },
    {
      "name": "Simon Willison 博客",
      "url": "https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts",
      "note": "Cloudflare 临时账户 for AI agents"
    },
    {
      "name": "X：Rohan Paul (@rohanpaul_ai)",
      "url": "https://x.com/rohanpaul_ai/status/2068938534212530631",
      "note": "Nature研究：AI或削弱专业人士硬技能"
    },
    {
      "name": "X：阿易 AI Notes (@AYi_AInotes)",
      "url": "https://x.com/AYi_AInotes/status/2068836642916315344",
      "note": "Netflix 工程师开源工具 Headroom，减少 95% token 消耗"
    },
    {
      "name": "X：Rohan Paul (@rohanpaul_ai)",
      "url": "https://x.com/rohanpaul_ai/status/2068909919873757456",
      "note": "Sakana AI 发布 Fugu Ultra 多模型编排系统"
    }
  ]
};

const episodeHistory = [
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
