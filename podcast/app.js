const episode = {
  date: '2026-06-13',
  title: 'AI HOT 日报：代码模型开源、Agent 产品化与企业治理补课',
  intro: '本期基于 AI HOT 2026-06-13 日报：MiniMax M3 与 Kimi-K2.7-Code 推动国产代码模型开源；豆包、Codex、Claude Code 把 Agent 做进任务执行、浏览器调试和企业管控；TCS 与 Anthropic 合作说明受监管行业开始组织化采用 Claude；Google Research 的皮肤健康研究提醒我们，医疗 AI 应先做辅助理解而不是替代诊断。',
  items: [
    {
      topic: 'model',
      title: 'MiniMax M3：开源权重模型上架 HuggingFace',
      source: 'X：MiniMax (@MiniMax_AI)',
      url: 'https://x.com/MiniMax_AI/status/2065436935188058208',
      date: '2026-06-13',
      score: 95,
      tags: ['MiniMax', '代码模型', '多模态'],
      summary: 'MiniMax 发布 M3，约 428B 总参数、23B 激活参数，强调编码、智能体、长上下文和原生多模态，并同步上线 MiniMax Code 与 API 平台。',
      comment: '点评：代码模型开始围绕真实工程任务竞争，长上下文、工具调用和端到端成功率比单点问答更重要。'
    },
    {
      topic: 'model',
      title: 'Kimi-K2.7-Code：开源代码模型继续强化效率',
      source: 'X：Kimi.ai (@Kimi_Moonshot)',
      url: 'https://x.com/Kimi_Moonshot/status/2065377579130142937',
      date: '2026-06-13',
      score: 93,
      tags: ['Kimi', '开源', 'Coding Agent'],
      summary: 'Kimi 发布并开源 Kimi-K2.7-Code，相比 K2.6 在多项代码评测上提升，并降低推理 token 使用量。',
      comment: '点评：模型厂商已经把成本、效率和长任务成功率放到台前，企业评测应使用真实 issue，而不是只看榜单。'
    },
    {
      topic: 'agent',
      title: '豆包任务模式：AI 应用进入可执行任务阶段',
      source: 'IT之家（RSS）',
      url: 'https://www.ithome.com/0/963/725.htm',
      date: '2026-06-13',
      score: 91,
      tags: ['豆包', '任务模式', 'Agent'],
      summary: '豆包上线任务模式，支持定时执行、零代码网页生成、一键 PPT 和数据可视化分析，思考模式升级为专家模式。',
      comment: '点评：这代表 AI 产品从聊天助手转向任务代理，产品经理要重点设计失败处理、人工确认和交付物验收。'
    },
    {
      topic: 'agent',
      title: 'Codex 浏览器开发者模式：AI 开始读控制台和网络面板',
      source: 'X：OpenAI Developers (@OpenAIDevs)',
      url: 'https://x.com/OpenAIDevs/status/2065226355495895521',
      date: '2026-06-13',
      score: 92,
      tags: ['Codex', 'Chrome DevTools', '前端调试'],
      summary: 'Codex 引入浏览器开发者模式，可通过 Chrome DevTools 协议分析控制台、网络、性能和页面状态。',
      comment: '点评：前端 AI 编程的验收标准要升级为能复现问题、读取运行时信号并给出最小修复。'
    },
    {
      topic: 'agent',
      title: 'Claude Code 管控更新：企业白名单和默认模型约束补齐',
      source: 'Claude Code：GitHub Releases（RSS）',
      url: 'https://github.com/anthropics/claude-code/releases/tag/v2.1.175',
      date: '2026-06-13',
      score: 88,
      tags: ['Claude Code', '企业治理', '模型白名单'],
      summary: 'Claude Code v2.1.175 新增 enforceAvailableModels 管理设置，后续版本继续修复白名单、环境变量、远程控制和 Bedrock 凭证等问题。',
      comment: '点评：AI 编程助手进入组织后，模型可用范围、环境变量、远程会话和审计边界会比提示词本身更关键。'
    },
    {
      topic: 'industry',
      title: 'TCS 与 Anthropic：Claude 进入受监管行业交付体系',
      source: 'Anthropic：Newsroom（网页）',
      url: 'https://www.anthropic.com/news/tcs-anthropic-partnership',
      date: '2026-06-13',
      score: 90,
      tags: ['Anthropic', 'TCS', '受监管行业'],
      summary: 'TCS 将向 56 个国家的 5 万名员工提供 Claude，并为金融、医疗等客户构建基于 Claude 的产品和培训体系。',
      comment: '点评：大厂咨询体系入场后，AI 落地会从单点工具采购转向技能、插件、交付方法论和治理平台。'
    },
    {
      topic: 'industry',
      title: 'Google Research：医疗 AI 应先帮助用户理解问题',
      source: 'Google Research：Blog（网页）',
      url: 'https://research.google/blog/research-into-how-ai-can-help-users-understand-skin-conditions',
      date: '2026-06-13',
      score: 86,
      tags: ['Google Research', '医疗 AI', '皮肤健康'],
      summary: 'Google Research 发表皮肤健康相关研究，探索 AI 如何帮助用户识别问题、理解信息并决定下一步行动。',
      comment: '点评：医疗 AI 的正确姿势是辅助理解和就医准备，不是替代医生；产品边界必须写清楚。'
    },
    {
      topic: 'workflow',
      title: 'Spec 驱动开发：把 AI 编程纳入规格与验证闭环',
      source: 'X：邵猛 (@shao__meng)',
      url: 'https://x.com/shao__meng/status/2065234132431675439',
      date: '2026-06-13',
      score: 89,
      tags: ['SDD', 'Skills', 'Verify'],
      summary: 'Spec 驱动开发用产品规格、技术规格、实现与验证覆盖 AI 开发闭环，强调规格随 PR 一起提交。',
      comment: '点评：团队要把需求、架构和验收命令写给 AI 看，才能减少“看似完成但不可验证”的代码。'
    },
    {
      topic: 'workflow',
      title: '人味儿写作心法：AI 写作需要作者的真实位置',
      source: 'X：Oran Ge (@oran_ge)',
      url: 'https://x.com/oran_ge/status/2065566882774868125',
      date: '2026-06-13',
      score: 84,
      tags: ['写作', 'Skill', '内容创作'],
      summary: 'Oran Ge 开源写作技能，主张保留作者的具体处境、代价和存在感，避免 AI 改稿越改越空。',
      comment: '点评：内容创作者不要把 AI 当代笔，应该先给出个人经历和判断，再让 AI 做结构和润色。'
    },
    {
      topic: 'safety',
      title: 'Anthropic 公众调查：期待与担忧同时上升',
      source: 'Anthropic：Newsroom（网页）',
      url: 'https://www.anthropic.com/news/anthropic-public-record',
      date: '2026-06-13',
      score: 87,
      tags: ['AI治理', '公众调查', '风险'],
      summary: 'Anthropic 调查显示，公众期待 AI 在疾病、无障碍等方面发挥作用，同时担忧失业、认知依赖和信息误导。',
      comment: '点评：AI 公司和企业用户都要重视信任建设，透明度、隐私、儿童安全和责任归属会成为长期议题。'
    }
  ],
  sources: [
    {
      name: 'AI HOT',
      url: 'https://aihot.virxact.com',
      note: '本期日报与中文摘要来源'
    },
    {
      name: 'MiniMax',
      url: 'https://x.com/MiniMax_AI/status/2065436935188058208',
      note: 'M3 开源权重模型动态'
    },
    {
      name: 'Kimi',
      url: 'https://x.com/Kimi_Moonshot/status/2065377579130142937',
      note: 'Kimi-K2.7-Code 开源动态'
    },
    {
      name: 'OpenAI Developers',
      url: 'https://x.com/OpenAIDevs/status/2065226355495895521',
      note: 'Codex 浏览器开发者模式'
    },
    {
      name: 'Anthropic Newsroom',
      url: 'https://www.anthropic.com/news/tcs-anthropic-partnership',
      note: 'Claude 企业合作与治理动态'
    },
    {
      name: 'Google Research',
      url: 'https://research.google/blog/research-into-how-ai-can-help-users-understand-skin-conditions',
      note: '医疗健康 AI 研究'
    },
    {
      name: '本站 AI 日报文章',
      url: '/posts/61313/',
      note: '完整文字版、点评与建议'
    }
  ]
};

const state = {
  filteredTopic: 'all',
  currentIndex: 0,
  isPlaying: false,
  utterance: null,
  voices: []
};

const newsGrid = document.querySelector('#newsGrid');
const sourceList = document.querySelector('#sourceList');
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

  lines.push('最后给出本期结论：代码模型会继续开源提速，Agent 产品会从问答走向可执行任务。建议先建立真实任务评测、规格驱动开发、模型白名单、工具权限和人工确认机制，再扩大自动化范围。');
  return lines.join('\n');
}

function segments() {
  return [
    { title: '今日总览', text: `大家好，欢迎收听 AI 资讯播客。本期日期：${episode.date}。${episode.intro}` },
    ...episode.items.map((item, index) => ({
      title: `${index + 1}. ${item.title}`,
      text: `${item.title}。${item.summary}${item.comment}`
    })),
    { title: '本期结论', text: '本期结论：代码模型会继续开源提速，Agent 产品会从问答走向可执行任务。建议先建立真实任务评测、规格驱动开发、模型白名单、工具权限和人工确认机制，再扩大自动化范围。' }
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
    state.voices = window.speechSynthesis.getVoices();
    const zhVoices = state.voices.filter((voice) => /^zh|Chinese|普通话|中文/i.test(`${voice.lang} ${voice.name}`));
    const usableVoices = zhVoices.length ? zhVoices : state.voices;
    voiceSelect.innerHTML = usableVoices.map((voice, index) => `<option value="${state.voices.indexOf(voice)}">${escapeHtml(voice.name)} · ${escapeHtml(voice.lang)}${index === 0 ? '（推荐）' : ''}</option>`).join('') || '<option>系统默认音色</option>';
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
