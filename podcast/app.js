const episode = {
  "date": "2026-06-16",
  "title": "AI HOT 日报：开源模型提速、Agent 应用并购与 AI 成本重估",
  "intro": "本期基于 AI HOT 2026-06-16 日报：MiniMax M3 开源权重与 MSA 论文、DFlash 与 Spec V2 推动推理加速；Grok Build、Kimi、Claude Code 把 Agent 编程推向多会话调度、极速交互和权限治理；Salesforce 以 36 亿美元收购 Fin，Nvidia 计划发行 200 亿美元债券，说明 AI 应用价值与基础设施成本正在同时被重估。",
  "conclusion": "今天的关键词不是单点模型突破，而是系统效率、Agent 闭环和组织成本。下一阶段，能同时控制能力、速度、权限、成本和组织接受度的团队，才更可能把 AI 真正放进生产系统。",
  "items": [
    {
      "topic": "model",
      "title": "MiniMax M3：开源权重与 MSA 把长上下文成本摆上台面",
      "source": "公众号：MiniMax（稀宇科技）",
      "url": "https://mp.weixin.qq.com/s/AW6L89QZkwN-jD27hQ84ww",
      "date": "2026-06-16",
      "score": 96,
      "tags": [
        "MiniMax",
        "开源模型",
        "长上下文"
      ],
      "summary": "MiniMax 开源 428B 总参数、23B 激活参数的 M3 模型权重，并发布 MSA 技术论文，强调降低长上下文计算成本和提升输出速度。",
      "comment": "点评：开源模型竞争已从参数和榜单扩展到系统工程。企业评测时要看长仓库、长文档、多轮工具调用和真实吞吐。"
    },
    {
      "topic": "model",
      "title": "DFlash 与 Spec V2：投机解码成为推理成本战场",
      "source": "LMSYS：Blog（Chatbot Arena 团队）",
      "url": "https://www.lmsys.org/blog/2026-06-15-next-generation-speculative-decoding-dflash-v2",
      "date": "2026-06-16",
      "score": 92,
      "tags": [
        "推理加速",
        "投机解码",
        "SGLang"
      ],
      "summary": "Z Lab、Modal 与 SGLang 团队发布 DFlash 和 Spec V2，通过块扩散与 KV 注入并行生成 draft token，在特定基准中显著提升吞吐。",
      "comment": "点评：AI 应用的可持续性越来越取决于推理系统。高频场景应同时评估质量、延迟、吞吐和单位成本。"
    },
    {
      "topic": "workflow",
      "title": "Grok Build Agent Dashboard：编码 Agent 进入多会话调度",
      "source": "xAI：News",
      "url": "https://x.ai/news/agent-dashboard",
      "date": "2026-06-16",
      "score": 90,
      "tags": [
        "Grok Build",
        "Agent工作台",
        "编码助手"
      ],
      "summary": "xAI 为 Grok Build 推出 Agent Dashboard，可在单屏管理多个编码会话，查看状态、分支、权限模式和最新输出。",
      "comment": "点评：AI 编程正在从聊天框走向任务队列。团队需要分支隔离、任务日志、等待人工输入和回滚点。"
    },
    {
      "topic": "workflow",
      "title": "Kimi K2.7 Code 高速版：代码模型开始卖速度",
      "source": "公众号：月之暗面（Kimi）",
      "url": "https://mp.weixin.qq.com/s/p87ebkY1xqKtkGZ2N3DGSw",
      "date": "2026-06-16",
      "score": 91,
      "tags": [
        "Kimi",
        "代码模型",
        "速度"
      ],
      "summary": "Kimi K2.7 Code 高速版上线，常规编程场景约 180 Token/s，短上下文可达 260 Token/s，但 API 定价和用量消耗更高。",
      "comment": "点评：速度会显著改善开发者体验，但不是免费午餐。交互式调试用高速模型，批量任务可用普通模型。"
    },
    {
      "topic": "workflow",
      "title": "Claude Code v2.1.178：权限规则细到工具参数",
      "source": "Claude Code：GitHub Releases",
      "url": "https://github.com/anthropics/claude-code/releases/tag/v2.1.178",
      "date": "2026-06-16",
      "score": 88,
      "tags": [
        "Claude Code",
        "权限治理",
        "Skills"
      ],
      "summary": "Claude Code 新增 Tool(param:value) 权限规则，支持嵌套 skills 自动加载，并修复 OAuth、WebSocket、后台恢复等问题。",
      "comment": "点评：企业落地 AI 编程助手时，参数级权限、项目级 skill 管理和会话审计会变成基本能力。"
    },
    {
      "topic": "industry",
      "title": "Salesforce 36 亿美元收购 Fin：客服 Agent 价值被验证",
      "source": "TechCrunch：AI",
      "url": "https://techcrunch.com/2026/06/15/salesforce-acquires-ai-customer-service-platform-fin-for-3-6b",
      "date": "2026-06-16",
      "score": 94,
      "tags": [
        "Salesforce",
        "Fin",
        "客服Agent"
      ],
      "summary": "Salesforce 宣布以 36 亿美元收购 AI 客服平台 Fin，用于增强 Agentforce 企业智能体平台。",
      "comment": "点评：垂直 Agent 的价值在于解决率、渠道集成、质检审计和 CRM 闭环，而不是单纯对话能力。"
    },
    {
      "topic": "industry",
      "title": "Nvidia 发行 200 亿美元债券：AI 基建进入重资本周期",
      "source": "The Decoder：AI News",
      "url": "https://the-decoder.com/nvidia-joins-ai-debt-boom-with-20-billion-bond-sale",
      "date": "2026-06-16",
      "score": 89,
      "tags": [
        "Nvidia",
        "AI基建",
        "债务融资"
      ],
      "summary": "Nvidia 计划通过债券发行筹集至少 200 亿美元，显示 AI 基础设施扩张进入更重资本、更长周期阶段。",
      "comment": "点评：AI 不是纯软件浪潮。企业预算要关注上游算力价格、供应商融资压力和长期合同风险。"
    },
    {
      "topic": "industry",
      "title": "Cloudflare 引入 Ensemble AI：边缘推理继续降本",
      "source": "Cloudflare Blog",
      "url": "https://blog.cloudflare.com/ensemble-ai-talent-joins-cloudflare",
      "date": "2026-06-16",
      "score": 87,
      "tags": [
        "Cloudflare",
        "模型压缩",
        "边缘AI"
      ],
      "summary": "Cloudflare 引入 Ensemble AI 团队，整合模型压缩和高效推理成果到 Workers AI，提升推理效率与部署经济性。",
      "comment": "点评：面向全球用户的 AI 应用应关注边缘推理、缓存、模型压缩和区域合规。"
    },
    {
      "topic": "product",
      "title": "Meta Facebook AI Mode：社交内容成为答案引擎燃料",
      "source": "TechCrunch：AI",
      "url": "https://techcrunch.com/2026/06/15/metas-new-ai-mode-on-facebook-pulls-from-public-info-across-its-platforms",
      "date": "2026-06-16",
      "score": 86,
      "tags": [
        "Meta",
        "AI搜索",
        "社交数据"
      ],
      "summary": "Meta 在 Facebook 推出 AI Mode，从公开帖子、群组和 Reels 提取信息并合成答案，同时继续扩展 AI 编辑和订阅能力。",
      "comment": "点评：AI 产品竞争正在转向上下文资产。垂直社区和专业数据会成为比模型 API 更难复制的壁垒。"
    },
    {
      "topic": "safety",
      "title": "AI 裁员浪潮：效率叙事正在冲击组织信任",
      "source": "TechCrunch：AI",
      "url": "https://techcrunch.com/2026/06/15/the-ai-layoff-wave-is-becoming-a-powder-keg",
      "date": "2026-06-16",
      "score": 90,
      "tags": [
        "AI转型",
        "裁员",
        "组织管理"
      ],
      "summary": "科技公司裁员速度加快，AI 连续三个月被列为裁员首要原因，而 AI 公司估值和资本热度仍在高位。",
      "comment": "点评：AI 转型如果只被员工理解为裁员工具，会损害组织信任。管理者应先做任务重组、培训和人机协作流程。"
    }
  ],
  "sources": [
    {
      "name": "AI HOT",
      "url": "https://aihot.virxact.com",
      "note": "本期日报与中文摘要来源"
    },
    {
      "name": "MiniMax M3",
      "url": "https://mp.weixin.qq.com/s/AW6L89QZkwN-jD27hQ84ww",
      "note": "M3 权重开源与 MSA 论文"
    },
    {
      "name": "LMSYS Blog",
      "url": "https://www.lmsys.org/blog/2026-06-15-next-generation-speculative-decoding-dflash-v2",
      "note": "DFlash 与 Spec V2 推理加速"
    },
    {
      "name": "xAI Grok Build",
      "url": "https://x.ai/news/agent-dashboard",
      "note": "Agent Dashboard 多会话管理"
    },
    {
      "name": "Kimi K2.7 Code",
      "url": "https://mp.weixin.qq.com/s/p87ebkY1xqKtkGZ2N3DGSw",
      "note": "高速版代码模型"
    },
    {
      "name": "Salesforce / Fin",
      "url": "https://techcrunch.com/2026/06/15/salesforce-acquires-ai-customer-service-platform-fin-for-3-6b",
      "note": "AI 客服 Agent 并购"
    },
    {
      "name": "本站 AI 日报文章",
      "url": "/posts/61616/",
      "note": "完整文字版、点评与建议"
    }
  ]
};

const episodeHistory = [
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
