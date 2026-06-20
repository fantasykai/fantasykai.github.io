const episode = {
  "date": "2026-06-20",
  "title": "AI HOT 日报：开源、机器人、Nvidia",
  "intro": "本期基于 AI HOT 过去 24 小时精选动态，重点关注 产品发布/更新、行业动态、技巧与观点。核心信号是：阿里开源向量数据库Zvec，UCSD黄碧薇教授提出因果AI第四代范式；Figure机器人数首超人类员工；NVIDIA Research 发布 SpatialClaw：免训练空间推理框架。",
  "conclusion": "今天的 AI 竞争继续从单点模型能力转向系统效率、产品闭环、治理边界和组织执行力。建议团队把新闻转成可验证的评测、预算、权限和复盘机制，而不是只停留在热点追踪。",
  "items": [
    {
      "topic": "product",
      "title": "阿里开源向量数据库Zvec，UCSD黄碧薇教授提出因果AI第四代范式",
      "source": "X：阿易 AI Notes (@AYi_AInotes)",
      "url": "https://x.com/AYi_AInotes/status/2067832098816250346",
      "date": "2026-06-20",
      "score": 79,
      "tags": [
        "AI HOT",
        "开源",
        "产品"
      ],
      "summary": "阿里开源内部向量数据库Zvec，pip install zvec免费使用，对标Pinecone每月70美元能力。支持十亿向量毫秒级检索，无需单独起服务，全平台兼容；v0.5.0新增原生全文混合搜索。UCSD黄碧薇教授（causal-learn作者）提出AI四代范式：相关性小模型→因果小模型→相关性…",
      "publishedAt": "2026-06-19T04:49:25.000Z",
      "category": "ai-products",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：产品团队应明确它解决的高频任务、接入的数据源、人工接管点和可量化指标。"
    },
    {
      "topic": "industry",
      "title": "Figure机器人数首超人类员工",
      "source": "X：Rohan Paul (@rohanpaul_ai)",
      "url": "https://x.com/rohanpaul_ai/status/2068089038213693800",
      "date": "2026-06-20",
      "score": 78,
      "tags": [
        "AI HOT",
        "机器人",
        "产业"
      ],
      "summary": "我们已超越理论阶段。 有史以来第一次，Figure的机器人数量超过了人类员工数量。",
      "publishedAt": "2026-06-19T21:50:24.000Z",
      "category": "industry",
      "comment": "点评：这条动态值得从产业资本、平台竞争和组织变化三个维度继续跟踪，短期看产品信号，长期看能否沉淀为稳定能力。",
      "advice": "建议：企业决策时同步评估供应商持续性、集成成本、组织影响和未来三个月的复盘指标。"
    },
    {
      "topic": "product",
      "title": "NVIDIA Research 发布 SpatialClaw：免训练空间推理框架",
      "source": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/06/19/nvidia-ai-introduce-spatialclaw-a-training-free-agent-that-treats-code-as-the-action-interface-for-spatial-reasoning",
      "date": "2026-06-20",
      "score": 77,
      "tags": [
        "AI HOT",
        "Nvidia",
        "Qwen",
        "推理",
        "产品"
      ],
      "summary": "NVIDIA Research 发布 SpatialClaw，一个免训练的空间推理框架。它通过将代码作为动作接口，让智能体调用感知工具（Depth Anything 3、SAM 3）并自由组合输出，解决视觉语言模型在 3D 空间判断上的弱点。在 20 项基准测试中平均准确率达 59.9%，比近期智…",
      "publishedAt": "2026-06-19T22:51:59.000Z",
      "category": "ai-products",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：产品团队应明确它解决的高频任务、接入的数据源、人工接管点和可量化指标。"
    },
    {
      "topic": "tip",
      "title": "Humanize PPT v0.9：为演讲而生的开源PPT Skill",
      "source": "公众号：卡尔的AI沃茨",
      "url": "https://mp.weixin.qq.com/s/rGoYnUcBRkfRKQPbIaawyg",
      "date": "2026-06-20",
      "score": 77,
      "tags": [
        "AI HOT",
        "开源",
        "观点"
      ],
      "summary": "Humanize PPT v0.9 是一款专为演讲场景设计的PPT Skill，核心通过AST（Audience， State， Transfer）逻辑重新编排大纲，将页面渲染外包给下游Skill。渲染前先输出4张真实预览页，并将图片、视频素材的占位与生成prompt写入大纲。新增质检环节自动修复…",
      "publishedAt": "2026-06-19T09:48:28.000Z",
      "category": "tip",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "tip",
      "title": "DeepSeek研究员开源AutoResearch：AI自主跑通285B模型RL研究闭环",
      "source": "X：阿易 AI Notes (@AYi_AInotes)",
      "url": "https://x.com/AYi_AInotes/status/2067819352926150953",
      "date": "2026-06-20",
      "score": 76,
      "tags": [
        "AI HOT",
        "DeepSeek",
        "开源",
        "观点"
      ],
      "summary": "DeepSeek研究员Deli Chen将AutoResearch协议开源，并发布Self-play综述论文。其AI智能体首次完全自主地在DeepSeek 285B模型上完成完整RL研究闭环--从实验设计、写代码、提交GPU任务、debug到结论总结，全程零人工干预。系统调用了GRPO工具，被视为…",
      "publishedAt": "2026-06-19T03:58:46.000Z",
      "category": "tip",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "safety",
      "title": "JAWBONE Act：一项打击政府为压制合法网络言论而施压的新法案",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://www.eff.org/deeplinks/2026/06/new-bill-takes-aim-government-pressure-silence-lawful-online-speech",
      "date": "2026-06-20",
      "score": 75,
      "tags": [
        "AI HOT",
        "Meta",
        "产业"
      ],
      "summary": "上周，参议员Ted Cruz和Ron Wyden提出两党法案JAWBONE Act，为受政府胁迫的广播商、互动计算机服务商及AI提供商创建针对政府官员的联邦诉讼权，并建立政府与中间方就用户表达问题沟通的透明度体系。法案旨在应对政府施压私营公司审查受第一修正案保护的言论。EFF支持该法案，并举证：2…",
      "publishedAt": "2026-06-19T19:41:30.069Z",
      "category": "industry",
      "comment": "点评：AI 能力越深入生产，治理越不能停留在原则口号，必须落到权限、审计、数据边界和责任链。",
      "advice": "建议：管理者应把合规、审计、权限和员工沟通前置，避免 AI 项目因信任问题受阻。"
    },
    {
      "topic": "tip",
      "title": "baoyu-design Skill迭代：修复导出样式与渐变丢失问题，支持AI配图导出PPTX",
      "source": "X：宝玉 (@dotey)",
      "url": "https://x.com/dotey/status/2068042001895809420",
      "date": "2026-06-20",
      "score": 75,
      "tags": [
        "AI HOT",
        "Agent",
        "观点"
      ],
      "summary": "宝玉分享 baoyu-design Skill 的迭代过程：用户测试发现导出问题（样式表未铺满整页、渐变色丢失），他在本地复现后让 Agent 分析原因、给出解决方案并添加测试覆盖，修复后效果改善。该 Skill 可在制作 PPT、动画视频或网站时调用 AI 生图配图，支持 Codex 内置画图或…",
      "publishedAt": "2026-06-19T18:43:30.000Z",
      "category": "tip",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "tip",
      "title": "/youtube-notetaker：YT 视频转 Artifacts",
      "source": "X：Elvis Saravia (@omarsar0, DAIR.AI)",
      "url": "https://x.com/omarsar0/status/2067952726282031411",
      "date": "2026-06-20",
      "score": 75,
      "tags": [
        "AI HOT",
        "观点"
      ],
      "summary": "YT 视频 -> Artifacts 看看我如何使用新的 /youtube-notetaker 技能从 YT 视频生成 Artifacts。 捕获幻灯片、笔记、转录内容…… 快去试试 ↓",
      "publishedAt": "2026-06-19T12:48:45.000Z",
      "category": "tip",
      "comment": "点评：这条动态值得从方法论、最佳实践和落地风险三个维度继续跟踪，短期看产品信号，长期看能否沉淀为稳定能力。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "tip",
      "title": "我们在 Elasticsearch 上构建了一个持久化代理内存层，其召回率为0.89",
      "source": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://www.elastic.co/search-labs/blog/agent-memory-elasticsearch",
      "date": "2026-06-20",
      "score": 73,
      "tags": [
        "AI HOT",
        "Agent",
        "MCP",
        "开源",
        "观点"
      ],
      "summary": "Agent Builder 正式上市（GA）。基于 Elasticsearch 的持久化内存层将记忆分为情景、语义、程序三类，分别存入独立索引，各设不同写速率与过期规则。召回采用 BM25 与 Jina v5 稠密向量的 RRF 融合，再经交叉编码器重排序。在 168 道 QA 题评估中，R@10…",
      "publishedAt": "2026-06-19T05:01:18.006Z",
      "category": "tip",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "industry",
      "title": "AlphaFold 负责人 John Jumper 离职 Google DeepMind，加入 Anthropic",
      "source": "X：Demis Hassabis (@demishassabis)",
      "url": "https://x.com/demishassabis/status/2068002732250640603",
      "date": "2026-06-20",
      "score": 72,
      "tags": [
        "AI HOT",
        "Anthropic",
        "Google",
        "产业"
      ],
      "summary": "AlphaFold 团队负责人 John Jumper 宣布，在 Google DeepMind 工作近 9 年后决定离职，将加入 Anthropic（先休整一段时间）。DeepMind CEO Demis Hassabis 表示，过去 9 年与 Jumper 的非凡合作改变了世界，AlphaFo…",
      "publishedAt": "2026-06-19T16:07:27.000Z",
      "category": "industry",
      "comment": "点评：这条动态值得从产业资本、平台竞争和组织变化三个维度继续跟踪，短期看产品信号，长期看能否沉淀为稳定能力。",
      "advice": "建议：企业决策时同步评估供应商持续性、集成成本、组织影响和未来三个月的复盘指标。"
    },
    {
      "topic": "tip",
      "title": "OpenRouter vs LiteLLM：如何选择 LLM 网关",
      "source": "OpenRouter：Announcements（RSS）",
      "url": "https://openrouter.ai/blog/insights/openrouter-vs-litellm",
      "date": "2026-06-20",
      "score": 68,
      "tags": [
        "AI HOT",
        "开源",
        "观点"
      ],
      "summary": "OpenRouter 是托管在 Cloudflare 边缘的 LLM 网关，无需管理基础设施，收取 5.5% 平台费（前 100 万次请求免费），支持 70+ 提供商和自动故障转移。LiteLLM 是自部署代理（Docker/PostgreSQL/Redis），数据不离开内网，免费开源，但需承担基…",
      "publishedAt": "2026-06-19T15:00:00.000Z",
      "category": "tip",
      "comment": "点评：模型竞争已经进入能力、速度、成本和可部署性的复合阶段，单看榜单分数会低估工程效率的重要性。",
      "advice": "建议：把观点转成可执行清单，例如评测脚本、流程模板、成本看板或团队使用规范。"
    },
    {
      "topic": "product",
      "title": "Cloudflare 为 AI 智能体推出临时账户",
      "source": "Cloudflare Blog",
      "url": "https://blog.cloudflare.com/temporary-accounts",
      "date": "2026-06-20",
      "score": 62,
      "tags": [
        "AI HOT",
        "产品"
      ],
      "summary": "Cloudflare 在 Workers 上推出临时账户（Temporary Accounts），允许 AI 智能体直接运行 `wrangler deploy --temporary`，在数秒内获取一个可用的实时 Worker，无需绕开面向人类设计的部署流程。该功能旨在降低智能体部署门槛。",
      "publishedAt": "2026-06-19T13:00:00.000Z",
      "category": "ai-products",
      "comment": "点评：Agent 正在从单次对话走向可审计的任务执行系统，真正的门槛会落在权限、上下文、评测和回滚。",
      "advice": "建议：产品团队应明确它解决的高频任务、接入的数据源、人工接管点和可量化指标。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "过去 24 小时 AI 动态与中文摘要来源"
    },
    {
      "name": "X：阿易 AI Notes (@AYi_AInotes)",
      "url": "https://x.com/AYi_AInotes/status/2067832098816250346",
      "note": "阿里开源向量数据库Zvec，UCSD黄碧薇教授提出因果AI第四代范式"
    },
    {
      "name": "X：Rohan Paul (@rohanpaul_ai)",
      "url": "https://x.com/rohanpaul_ai/status/2068089038213693800",
      "note": "Figure机器人数首超人类员工"
    },
    {
      "name": "MarkTechPost（RSS）",
      "url": "https://www.marktechpost.com/2026/06/19/nvidia-ai-introduce-spatialclaw-a-training-free-agent-that-treats-code-as-the-action-interface-for-spatial-reasoning",
      "note": "NVIDIA Research 发布 SpatialClaw：免训练空间推理框架"
    },
    {
      "name": "公众号：卡尔的AI沃茨",
      "url": "https://mp.weixin.qq.com/s/rGoYnUcBRkfRKQPbIaawyg",
      "note": "Humanize PPT v0.9：为演讲而生的开源PPT Skill"
    },
    {
      "name": "X：阿易 AI Notes (@AYi_AInotes)",
      "url": "https://x.com/AYi_AInotes/status/2067819352926150953",
      "note": "DeepSeek研究员开源AutoResearch：AI自主跑通285B模型R…"
    },
    {
      "name": "Hacker News 热门（buzzing.cc 中文翻译）",
      "url": "https://www.eff.org/deeplinks/2026/06/new-bill-takes-aim-government-pressure-silence-lawful-online-speech",
      "note": "JAWBONE Act：一项打击政府为压制合法网络言论而施压的新法案"
    },
    {
      "name": "X：宝玉 (@dotey)",
      "url": "https://x.com/dotey/status/2068042001895809420",
      "note": "baoyu-design Skill迭代：修复导出样式与渐变丢失问题，支持AI…"
    }
  ]
};

const episodeHistory = [
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
