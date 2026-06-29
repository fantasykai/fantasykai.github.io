const episode = {
  "date": "2026-06-29",
  "title": "AI HOT 日报：Wayfinder 路由、SK AI 数据中心、VibeThinker",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注模型路由、AI 基建、低成本推理模型、Agent 长周期评测与 Vibe Coding 审查闭环。核心信号是：Wayfinder Router 让企业能按提示词结构在本地和托管模型之间确定性路由；SK 集团计划到 2035 年建设 15GW AI 数据中心，AI 竞争继续外溢到电力、半导体和国家基础设施；VibeThinker-3B 与 CEO-Bench 则说明推理能力可以被压缩，但事实知识、长期策略和稳定经营仍要靠评测与系统约束。",
  "conclusion": "今天的主线是：AI 正在从“单个模型更聪明”走向“系统更会分配资源”。企业下一步应建立模型路由、真实评测、成本看板和安全审查四件套，而不是只追热点模型名称。",
  "items": [
    {
      "topic": "product",
      "title": "Wayfinder Router：在本地和托管的大语言模型之间进行确定性查询路由",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://github.com/itsthelore/wayfinder-router",
      "date": "2026-06-29",
      "score": 75,
      "tags": [
        "AI HOT",
        "Wayfinder",
        "模型路由",
        "产品"
      ],
      "summary": "Wayfinder Router 通过分析提示词结构和硬约束特征，在微秒级完成本地模型与托管模型之间的路由决策。它完全离线，不需要额外调用模型，可支持 OpenAI 兼容 API、Ollama、Anthropic、Groq、vLLM 等。",
      "publishedAt": "2026-06-28T16:58:56.073Z",
      "category": "ai-products",
      "comment": "点评：模型路由正在从规则 if/else 升级为可校准的成本控制层。简单任务留在本地或低成本模型，复杂任务交给强模型，能同时降低延迟、费用和供应商锁定风险。",
      "advice": "建议：先建立三档路由：低风险本地模型、中等复杂度便宜托管模型、高风险强模型；持续记录命中率、失败率、平均延迟和单次成本。"
    },
    {
      "topic": "industry",
      "title": "SK 集团会长崔泰源：到 2035 年建设 15GW AI 数据中心，总投资达 1000 万亿韩元",
      "source": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/969/953.htm",
      "date": "2026-06-29",
      "score": 71,
      "tags": [
        "AI HOT",
        "SK",
        "AI数据中心",
        "产业"
      ],
      "summary": "SK 集团计划到 2035 年建成 15GW AI 数据中心容量，项目总投资 1000 万亿韩元；SK 海力士也将向韩国西南部投资 400 万亿韩元，半导体供应项目总投资达 1100 万亿韩元。",
      "publishedAt": "2026-06-29T06:44:15.000Z",
      "category": "industry",
      "comment": "点评：AI 基建竞争已经不只是 GPU 采购，而是电力、数据中心、半导体、网络和主权产业链的长期工程。15GW 量级意味着能源和芯片供应会继续成为 AI 约束。",
      "advice": "建议：战略和 CIO 团队应同时跟踪电力规划、数据中心 PUE、HBM、存储、光模块和本地政策；AI 预算要把算力与能源弹性一起考虑。"
    },
    {
      "topic": "tip",
      "title": "分享两个 Vibe Coding 必备 Prompt：第一性原理与对抗式审查",
      "source": "公众号：数字生命卡兹克",
      "url": "https://mp.weixin.qq.com/s/umPqTD_-IubbhXIgiS47eQ",
      "date": "2026-06-29",
      "score": 70,
      "tags": [
        "AI HOT",
        "Vibe Coding",
        "Prompt",
        "观点"
      ],
      "summary": "作者分享 Vibe Coding 中两个关键 Prompt：一是从第一性原理出发，要求 AI 从基本事实重新推导；二是对抗式审查，让 AI 站在恶意用户角度检查 OOM、死循环、未来时间污染等问题。",
      "publishedAt": "2026-06-29T02:08:00.000Z",
      "category": "tip",
      "comment": "点评：Vibe Coding 的核心不是只让 AI 写得快，而是把 AI 拆成建设者和审计者。第一性原理避免路径依赖，对抗式审查负责发现边界条件。",
      "advice": "建议：重要代码固定两轮提示：先列约束、事实和不可违反条件，再换角色做攻击式评审；不要跳过测试、资源上限、异常输入和权限边界。"
    },
    {
      "topic": "model",
      "title": "Grok 4.5 私测于 SpaceX 和 Tesla，性能接近 Opus",
      "source": "X：Elon Musk (@elonmusk, xAI)",
      "url": "https://x.com/elonmusk/status/2071184354756477041",
      "date": "2026-06-29",
      "score": 70,
      "tags": [
        "AI HOT",
        "Grok",
        "xAI",
        "模型"
      ],
      "summary": "Grok 4.5 基于 1.5T V9 基础模型，并在补充训练中加入 Cursor 数据，已在 SpaceX 和 Tesla 进入私测。初步评估显示其性能接近或可能超过 Opus，Grok Build 工具链也在完善。",
      "publishedAt": "2026-06-28T10:50:05.000Z",
      "category": "ai-models",
      "comment": "点评：重点不只是又一个强模型，而是模型进入 SpaceX、Tesla 这类真实复杂组织中试跑。业务数据、工程工具链和员工反馈会成为模型迭代资产。",
      "advice": "建议：评估模型时准备自己的私测任务包：真实代码仓库、运营数据、内部知识库、权限限制和回滚方案，用业务完成率衡量模型。"
    },
    {
      "topic": "paper",
      "title": "仅有三个 AI 模型在 500 天创业测试中盈利超过起始资本",
      "source": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/only-three-ai-models-finished-above-starting-capital-in-a-500-day-startup-survival-test",
      "date": "2026-06-29",
      "score": 70,
      "tags": [
        "AI HOT",
        "CEO-Bench",
        "Agent评测",
        "论文"
      ],
      "summary": "普林斯顿大学推出 CEO-Bench，让 AI 智能体在模拟环境中运营订阅软件公司 500 天。14 个模型中只有 Claude Fable 5、Claude Opus 4.8 和 GPT-5.5 在最佳运行中超过起始资本。",
      "publishedAt": "2026-06-28T10:16:13.000Z",
      "category": "paper",
      "comment": "点评：短任务表现强，不代表能做长期经营。价格、配额、研发投入、市场反馈和现金流管理需要持续一致策略，多数 Agent 仍容易在长周期中漂移。",
      "advice": "建议：不要急着让 Agent 自主经营业务闭环。更现实的是让 AI 做局部建议和模拟推演，人类保留预算、定价、招聘、合规等关键决策权。"
    },
    {
      "topic": "model",
      "title": "新浪开源 VibeThinker-3B：推理可压缩，事实知识不能",
      "source": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/sinas-open-model-vibethinker-3b-aims-to-show-reasoning-compresses-well-but-factual-knowledge-doesnt",
      "date": "2026-06-29",
      "score": 70,
      "tags": [
        "AI HOT",
        "VibeThinker",
        "小模型",
        "推理"
      ],
      "summary": "新浪发布 3B 参数模型 VibeThinker-3B，在数学和编程基准上表现突出，但在知识密集型 GPQA-Diamond 上明显落后。研究提出逻辑推理可压缩，广泛事实知识仍需要大参数或外部知识补足。",
      "publishedAt": "2026-06-28T07:44:41.000Z",
      "category": "ai-models",
      "comment": "点评：小模型未必不能做推理，但更适合结构清晰、规则稳定、知识边界明确的任务；事实密集任务仍需要检索增强、引用校验或强模型兜底。",
      "advice": "建议：数学、代码、结构化推理可优先测试小模型；行业知识、政策问答、医疗法律金融等任务，应配合 RAG 和强模型复核。"
    },
    {
      "topic": "tip",
      "title": "Artifacts 22：Zyphra、Cohere 和 Poolside 正在扩展生态系统广度",
      "source": "Nathan Lambert：Interconnects（RSS）",
      "url": "https://www.interconnects.ai/p/artifacts-22-zyphra-cohere-and-poolside",
      "date": "2026-06-29",
      "score": 60,
      "tags": [
        "AI HOT",
        "开源模型",
        "Cohere",
        "生态"
      ],
      "summary": "开源模型生态变得更多元，纯模型厂商、主权 AI 玩家、科技巨头和产品公司都在训练不同定位的模型。NVIDIA 发布 Nemotron-3-Ultra，Cohere 以 Apache 2.0 开源 Command A+。",
      "publishedAt": "2026-06-28T17:03:07.000Z",
      "category": "tip",
      "comment": "点评：开源生态正从少数大模型追赶闭源前沿，走向多类型模型满足不同部署场景。通用大模型、主权模型、行业模型、产品内嵌小模型会并存。",
      "advice": "建议：选型时看许可证、商用限制、本地部署、目标语言、工具调用、上下文和维护频率。开源不等于无成本，评测和运维也要预算。"
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
      "url": "https://github.com/itsthelore/wayfinder-router",
      "note": "Wayfinder Router：在本地和托管的大语言模型之间进行确定性查询路由"
    },
    {
      "name": "IT之家（RSS）",
      "url": "https://www.ithome.com/0/969/953.htm",
      "note": "SK 集团会长崔泰源：到 2035 年建设 15GW AI 数据中心，总投资达 1000 万亿韩元"
    },
    {
      "name": "公众号：数字生命卡兹克",
      "url": "https://mp.weixin.qq.com/s/umPqTD_-IubbhXIgiS47eQ",
      "note": "分享两个 Vibe Coding 必备 Prompt：第一性原理与对抗式审查"
    },
    {
      "name": "X：Elon Musk (@elonmusk, xAI)",
      "url": "https://x.com/elonmusk/status/2071184354756477041",
      "note": "Grok 4.5 私测于 SpaceX 和 Tesla，性能接近 Opus"
    },
    {
      "name": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/only-three-ai-models-finished-above-starting-capital-in-a-500-day-startup-survival-test",
      "note": "仅有三个 AI 模型在 500 天创业测试中盈利超过起始资本"
    },
    {
      "name": "The Decoder：AI News（RSS）",
      "url": "https://the-decoder.com/sinas-open-model-vibethinker-3b-aims-to-show-reasoning-compresses-well-but-factual-knowledge-doesnt",
      "note": "新浪开源 VibeThinker-3B：推理可压缩，事实知识不能"
    },
    {
      "name": "Nathan Lambert：Interconnects（RSS）",
      "url": "https://www.interconnects.ai/p/artifacts-22-zyphra-cohere-and-poolside",
      "note": "Artifacts 22：Zyphra、Cohere 和 Poolside 正在扩展生态系统广度"
    }
  ]
};

const episodeHistory = [
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
