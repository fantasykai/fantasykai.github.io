const episode = {
  date: '2026-06-14',
  title: 'AI HOT 日报：GLM-5.2 开源、AI 治理升温与订阅经济压力',
  intro: '本期基于 AI HOT 2026-06-14 日报：智谱 GLM-5.2 全量开放并宣布下周开源，Suno 和 OpenRouter 分别推进音乐制作与复合模型路由；同时 Anthropic、OpenAI、Google、Meta 都出现监管、伦理或组织调整信号，说明 AI 行业正在从模型竞速进入能力、治理和商业模式同时竞争的新阶段。',
  conclusion: 'GLM-5.2 代表模型能力继续上探，Suno 与 Fusion API 代表产品链路继续下沉；但 Anthropic、OpenAI、Google、Meta 的动态提醒我们，AI 越强，越需要治理、组织和商业模式一起跟上。',
  items: [
    {
      topic: 'model',
      title: '智谱 GLM-5.2：1M 上下文与国产 Coding 模型继续开源竞速',
      source: '公众号：智谱（GLM）',
      url: 'https://mp.weixin.qq.com/s/LDrbtLM0wiCTJorvd5GY9w',
      date: '2026-06-14',
      score: 96,
      tags: ['GLM', '长上下文', 'Coding'],
      summary: 'GLM-5.2 面向 GLM Coding Plan 全量用户开放，支持 1M 上下文，API 与开源版本预计下周上线，并采用 MIT 协议。',
      comment: '点评：这条新闻的价值在于把长上下文、代码能力和开源许可打包。企业应等待权重与技术细节落地后，用真实仓库 issue 做端到端评测。'
    },
    {
      topic: 'product',
      title: 'Suno 音轨分离升级：音乐 AI 进入后期制作链路',
      source: 'X：Suno (@suno)',
      url: 'https://x.com/suno/status/2065862499765821916',
      date: '2026-06-14',
      score: 89,
      tags: ['Suno', '音乐生成', '音轨分离'],
      summary: 'Suno 升级音轨分离能力，从零重新生成更纯净的音轨，目标是减少伪影并直接进入 DAW 工作流。',
      comment: '点评：音乐 AI 的关键从一键生成转向可编辑、可混音、可局部重做。创作者应关注它能否进入专业生产流程。'
    },
    {
      topic: 'product',
      title: 'OpenRouter Fusion API：复合模型开始售卖性价比智能',
      source: 'X：OpenRouter (@OpenRouter)',
      url: 'https://x.com/OpenRouter/status/2065856853989270011',
      date: '2026-06-14',
      score: 88,
      tags: ['OpenRouter', '模型路由', '成本'],
      summary: 'Fusion API 宣称以一半价格达到 Fable 级智能，指向模型组合、路由和级联调用的新接口形态。',
      comment: '点评：应用开发者不要把业务绑死在单一模型上，应提前设计模型抽象层、降级、重试和成本上限。'
    },
    {
      topic: 'safety',
      title: 'Anthropic 模型撤回风波：安全叙事进入监管两难',
      source: 'TechCrunch：AI（RSS）',
      url: 'https://techcrunch.com/2026/06/12/anthropics-safety-warnings-may-have-just-backfired-the-government-has-pulled-the-plug-on-its-most-powerful-ai',
      date: '2026-06-14',
      score: 91,
      tags: ['Anthropic', 'AI安全', '政府采购'],
      summary: 'Anthropic 对政府撤回其强大 AI 模型表达不满，认为基于狭窄潜在越狱发现召回商业模型并不合理。',
      comment: '点评：高风险客户会更保守，模型公司越强调风险越可能触发审查；企业产品要提前准备模型卡、红队报告和应急下线机制。'
    },
    {
      topic: 'safety',
      title: 'Google 安全负责人辞职：军事 AI 合作带来组织伦理冲突',
      source: 'IT之家（RSS）',
      url: 'https://www.ithome.com/0/963/888.htm',
      date: '2026-06-14',
      score: 90,
      tags: ['Google', 'AI伦理', '军事AI'],
      summary: 'Google Android 平台安全负责人 René Mayrhofer 辞职，批评公司 AI 原则变化、能源目标和军事合作方向。',
      comment: '点评：AI 伦理已经会影响人才留存和组织信任。敏感合作必须有透明沟通、伦理审查和员工反馈渠道。'
    },
    {
      topic: 'industry',
      title: 'Anthropic 秘密申请上市：基础模型估值继续冲高',
      source: 'Bloomberg：Technology（RSS）',
      url: 'https://www.bloomberg.com/news/articles/2026-06-13/global-capitalism-bets-it-all-on-ai-future-that-alarms-voters',
      date: '2026-06-14',
      score: 87,
      tags: ['Anthropic', 'IPO', '资本市场'],
      summary: 'Bloomberg 报道 Anthropic 估值达 9650 亿美元，并已秘密提交 IPO 申请。',
      comment: '点评：估值越高，市场对收入、毛利、算力效率和企业续费的要求越高；应用层公司要警惕上游定价和策略变化。'
    },
    {
      topic: 'industry',
      title: 'Meta 承认 AI 转型脱轨：组织调整比模型接入更难',
      source: 'IT之家（RSS）',
      url: 'https://www.ithome.com/0/963/858.htm',
      date: '2026-06-14',
      score: 86,
      tags: ['Meta', '组织转型', 'AI战略'],
      summary: '扎克伯格承认 Meta AI 转型中组织调整过快，裁员和转岗带来管理跨度、协作和安置问题。',
      comment: '点评：AI 转型不是改组织名或转岗人数，而是业务目标、工具链、绩效和治理一起重构。'
    },
    {
      topic: 'safety',
      title: 'OpenAI 遭多州总检察长调查：平台级监管压力扩大',
      source: 'Bloomberg：Technology（RSS）',
      url: 'https://www.bloomberg.com/news/articles/2026-06-13/openai-probed-by-coalition-of-state-attorneys-general',
      date: '2026-06-14',
      score: 88,
      tags: ['OpenAI', '监管', '合规'],
      summary: 'OpenAI 正被多州总检察长联盟调查，相关方已索取广泛主题的信息。',
      comment: '点评：AI 平台越像基础设施，监管越会覆盖隐私、儿童安全、消费者保护和市场竞争。AI 应用也应提前补齐合规流程。'
    },
    {
      topic: 'workflow',
      title: 'SemiAnalysis Token 经济：200 美元订阅可能透支算力补贴',
      source: 'IT之家（RSS）',
      url: 'https://www.ithome.com/0/963/834.htm',
      date: '2026-06-14',
      score: 92,
      tags: ['Token经济', '订阅制', '成本'],
      summary: 'SemiAnalysis 测算显示，重度用户可从 200 美元订阅中消耗相当于 40 至 70 倍 API 价值的 token。',
      comment: '点评：个人重度使用短期划算，但企业不能把个人订阅当生产基础设施；需要 API 成本、配额、审计和 SLA。'
    },
    {
      topic: 'workflow',
      title: '/architect 工作流：强模型规划审核，Codex 负责构建',
      source: 'Hacker News 热门（buzzing.cc 中文翻译）',
      url: 'https://github.com/DanMcInerney/architect-loop',
      date: '2026-06-14',
      score: 85,
      tags: ['Agent工作流', 'Codex', '成本优化'],
      summary: '/architect 项目尝试减少 80% Fable token，让强模型负责协调和审核，Codex 负责构建。',
      comment: '点评：AI 开发会走向分工制：Planner 负责拆解，Executor 负责实现，Verifier 负责验证，用模型协作控制成本。'
    }
  ],
  sources: [
    {
      name: 'AI HOT',
      url: 'https://aihot.virxact.com',
      note: '本期日报与中文摘要来源'
    },
    {
      name: '智谱 GLM',
      url: 'https://mp.weixin.qq.com/s/LDrbtLM0wiCTJorvd5GY9w',
      note: 'GLM-5.2 全量开放与开源计划'
    },
    {
      name: 'Suno',
      url: 'https://x.com/suno/status/2065862499765821916',
      note: '音轨分离产品更新'
    },
    {
      name: 'OpenRouter',
      url: 'https://x.com/OpenRouter/status/2065856853989270011',
      note: 'Fusion API 与复合模型路由'
    },
    {
      name: 'TechCrunch AI',
      url: 'https://techcrunch.com/2026/06/12/anthropics-safety-warnings-may-have-just-backfired-the-government-has-pulled-the-plug-on-its-most-powerful-ai',
      note: 'Anthropic 模型撤回与安全争议'
    },
    {
      name: 'Bloomberg Technology',
      url: 'https://www.bloomberg.com/news/articles/2026-06-13/openai-probed-by-coalition-of-state-attorneys-general',
      note: 'OpenAI 调查与 Anthropic 资本动态'
    },
    {
      name: '本站 AI 日报文章',
      url: '/posts/61414/',
      note: '完整文字版、点评与建议'
    }
  ]
};

const episodeHistory = [
  {
    date: '2026-06-14',
    title: 'AI HOT 日报：GLM-5.2 开源、AI 治理升温与订阅经济压力',
    summary: '本期基于 AI HOT 2026-06-14 日报：智谱 GLM-5.2 全量开放并宣布下周开源，Suno 和 OpenRouter 分别推进音乐制作与复合模型路由；同时 Anthropic、OpenAI、Google、Meta 都出现监管、伦理或组织调整信号，说明 AI 行业正在从模型竞速进入能力、治理和商业模式同时竞争的新阶段。',
    link: '/posts/61414/',
    tags: ['AI HOT', 'GLM-5.2', 'AI治理', 'Token经济']
  },
  {
    date: '2026-06-13',
    title: 'AI HOT 日报：代码模型开源、Agent 产品化与企业治理补课',
    summary: 'MiniMax M3 与 Kimi-K2.7-Code 推动国产代码模型开源；豆包、Codex、Claude Code 把 Agent 做进任务执行、浏览器调试和企业管控。',
    link: '/posts/61313/',
    tags: ['AI HOT', '代码模型', 'Agent', '企业治理']
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
