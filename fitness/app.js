const DATA_URL = 'data/exercises.zh.json';
const STORE = {
  favorites: 'fitness:favorites:v1',
  plans: 'fitness:plans:v1',
  history: 'fitness:history:v1',
  workout: 'fitness:current-workout:v1',
  goals: 'fitness:goals:v1'
};

const state = {
  exercises: [],
  meta: {},
  view: 'home',
  query: '',
  filters: { body: '', equipment: '', tag: '' },
  favorites: new Set(readJson(STORE.favorites, [])),
  plans: readJson(STORE.plans, []),
  history: readJson(STORE.history, []),
  workout: readJson(STORE.workout, null),
  randomSet: [],
  timerId: null
};

const runningRecipes = [
  { id: 'easy_run_30', title: '30 分钟轻松跑', goal: 'recovery', level: 'beginner', place: ['outdoor', 'treadmill'], minutes: 30, intensity: '低到中等', warmup: ['high knee against wall', 'short stride run', 'back and forth step'], main: '轻松慢跑 25 分钟，保持能说完整句子的强度。', cooldown: ['calf stretch with hands against wall', 'assisted lying glutes stretch', 'assisted prone hamstring'] },
  { id: 'interval_24', title: '24 分钟入门间歇跑', goal: 'speed', level: 'regular', place: ['outdoor', 'treadmill'], minutes: 24, intensity: '中高', warmup: ['walking high knees lunge', 'short stride run', 'half knee bends (male)'], main: '热身后做 6 组：快跑 1 分钟 / 慢跑或走 2 分钟。', cooldown: ['calf stretch with hands against wall', 'assisted lying glutes stretch'] },
  { id: 'tempo_35', title: '35 分钟节奏跑', goal: 'sweat', level: 'regular', place: ['outdoor', 'treadmill'], minutes: 35, intensity: '中等偏上', warmup: ['high knee against wall', 'skater hops', 'short stride run'], main: '轻松 10 分钟后，稍吃力但可控跑 15-18 分钟，最后放松慢跑。', cooldown: ['calf stretch with hands against wall', 'assisted prone hamstring'] },
  { id: 'long_slow_50', title: '50 分钟长距离慢跑', goal: 'endurance', level: 'regular', place: ['outdoor'], minutes: 50, intensity: '低', warmup: ['back and forth step', 'high knee against wall', 'walking high knees lunge'], main: '低强度慢跑 45 分钟左右，重在稳定呼吸和轻松步频。', cooldown: ['calf stretch with hands against wall', 'assisted lying glutes stretch', 'assisted prone hamstring'] },
  { id: 'indoor_cardio_20', title: '20 分钟室内替代跑', goal: 'indoor', level: 'beginner', place: ['indoor'], minutes: 20, intensity: '中等', warmup: ['half knee bends (male)', 'back and forth step'], main: '原地跑、高抬腿、登山跑、开合跳各 40 秒，休息 20 秒，循环 4 轮。', cooldown: ['calf stretch with hands against wall', 'assisted lying glutes stretch'] }
];

const runnerStrengthTemplates = [
  { id: 'runner_warmup_10', title: '10 分钟跑前激活', scenario: 'before', level: 'beginner', minutes: 10, intensity: '轻', benefit: '唤醒臀腿和小腿弹性，适合跑前。', items: [['high knee against wall', '2×30 秒', '身体站高，核心收紧'], ['short stride run', '2×30 秒', '小步快频，不追求大步幅'], ['glute bridge march', '2×12', '骨盆稳定，感受臀部发力'], ['bodyweight standing calf raise', '2×15', '脚掌稳定发力']] },
  { id: 'runner_strength_20_beginner', title: '20 分钟新手跑者力量', scenario: 'offday', level: 'beginner', minutes: 20, intensity: '中等', benefit: '建立基础臀腿、小腿和核心稳定。', items: [['band squat', '3×10', '膝盖朝脚尖方向'], ['low glute bridge on floor', '3×12', '顶端停 1 秒'], ['bodyweight standing calf raise', '3×15', '慢上慢下'], ['front plank with twist', '3×30 秒', '保持骨盆稳定'], ['forward lunge (male)', '2×8/侧', '步幅舒适']] },
  { id: 'runner_5k_30', title: '30 分钟 5K 辅助力量', scenario: 'offday', level: 'regular', minutes: 30, intensity: '中等', benefit: '提升单腿稳定、蹬地和核心控制。', items: [['split squats', '3×8/侧', '身体直上直下'], ['dumbbell single leg deadlift', '3×8/侧', '髋部折叠，背部平直'], ['dumbbell step-up', '3×10/侧', '完整踩稳再发力'], ['side plank hip adduction', '3×30 秒/侧', '保持肩髋成线'], ['jump rope', '4×45 秒', '轻落地，保持节奏']] },
  { id: 'runner_advanced_45', title: '45 分钟进阶跑者力量', scenario: 'offday', level: 'advanced', minutes: 45, intensity: '中高', benefit: '强化后链、单腿控制和小腿耐力。', items: [['dumbbell romanian deadlift', '4×8', '感受腘绳肌拉长'], ['dumbbell single leg split squat', '3×8/侧', '稳定膝盖轨迹'], ['single leg calf raise (on a dumbbell)', '4×12/侧', '控制离心下放'], ['dumbbell step up single leg balance with bicep curl', '3×10/侧', '登阶后停稳'], ['push-up to side plank', '3×8/侧', '核心抗旋转']] },
  { id: 'runner_recovery_12', title: '12 分钟跑后恢复力量', scenario: 'after', level: 'beginner', minutes: 12, intensity: '轻', benefit: '跑后低强度激活和放松，不追求力竭。', items: [['low glute bridge on floor', '2×12', '轻柔发力'], ['reverse plank with leg lift', '2×8/侧', '动作慢一点'], ['bodyweight standing calf raise', '2×12', '小范围控制'], ['calf stretch with hands against wall', '2×45 秒/侧', '舒适拉伸']] }
];

const planTemplates = [
  { id: 'full_body_beginner', title: '全身入门 20 分钟', desc: '自重为主，适合不知道从哪开始的训练日。', names: ['bodyweight squat', 'push-up', 'low glute bridge on floor', 'front plank with twist'] },
  { id: 'glute_leg_day', title: '臀腿日 30 分钟', desc: '深蹲、弓步、臀桥和小腿，适合下肢训练。', names: ['band squat', 'forward lunge (male)', 'low glute bridge on floor', 'bodyweight standing calf raise'] },
  { id: 'core_day', title: '核心稳定 15 分钟', desc: '腹部与躯干稳定训练，适合跑后或居家。', names: ['3/4 sit-up', 'air bike', 'front plank with twist', 'reverse plank with leg lift'] },
  { id: 'home_cardio', title: '无器械心肺 18 分钟', desc: '原地跑、登山跑和跳跃动作，室内出汗。', names: ['run', 'mountain climber', 'jump rope', 'skater hops'] }
];

const $ = (selector) => document.querySelector(selector);
const app = $('#app');
const statusBar = $('#statusBar');

init();

async function init() {
  bindGlobalEvents();
  try {
    const response = await fetch(DATA_URL);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    state.exercises = data.exercises || [];
    state.meta = data.meta || {};
    statusBar.textContent = `已加载 ${state.exercises.length} 个中文动作，可搜索、收藏、计划和跟练。`;
    statusBar.className = 'status-bar ready';
    seedDefaultPlans();
    route();
  } catch (error) {
    statusBar.textContent = `动作库加载失败：${error.message}`;
    statusBar.className = 'status-bar error';
  }
}

function bindGlobalEvents() {
  window.addEventListener('hashchange', route);
  $('#heroSearchForm').addEventListener('submit', (event) => {
    event.preventDefault();
    state.query = $('#heroSearchInput').value.trim();
    location.hash = '#library';
  });
  app.addEventListener('click', onAppClick);
  app.addEventListener('change', onAppChange);
  app.addEventListener('input', onAppInput);
  $('#detailModal').addEventListener('click', (event) => {
    if (event.target.id === 'detailModal' || event.target.dataset.action === 'close-modal') closeModal();
  });
}

function route() {
  const next = (location.hash || '#home').replace('#', '').split('?')[0] || 'home';
  state.view = ['home', 'library', 'gym', 'plans', 'running', 'strength', 'workout', 'history'].includes(next) ? next : 'home';
  document.querySelectorAll('.bottom-tabs a').forEach((tab) => tab.classList.toggle('active', tab.dataset.tab === state.view));
  render();
}

function render() {
  if (!state.exercises.length) return;
  stopWorkoutTimer();
  const views = { home: renderHome, library: renderLibrary, gym: renderGym, plans: renderPlans, running: renderRunning, strength: renderStrength, workout: renderWorkout, history: renderHistory };
  app.innerHTML = views[state.view]();
  if (state.view === 'workout') setupWorkoutTimer();
}

function renderHome() {
  const hot = pickExercises({ tag: '跑者力量' }, 3).concat(pickExercises({ tag: '心肺有氧' }, 3)).slice(0, 6);
  const last = state.history[0];
  const favoriteCount = state.favorites.size;
  const weekCount = workoutsThisWeek();
  return `
    <section class="slot-machine">
      <div class="section-title">
        <div><p class="eyebrow">随机一把</p><h2>不知道练啥，抽一组动作</h2><p>按身体部位、动作和心情生成一组可直接跟练的训练。</p></div>
        <button class="primary-btn" data-action="randomize">摇一摇</button>
      </div>
      <div class="slot-display">
        <div class="slot-cell"><div><span>部位</span><strong>${state.randomSet[0]?.body_part_zh || '臀腿'}</strong></div></div>
        <div class="slot-cell"><div><span>动作</span><strong>${displayName(state.randomSet[1]) || '罗马尼亚硬拉'}</strong></div></div>
        <div class="slot-cell"><div><span>心情</span><strong>${randomMood()}</strong></div></div>
      </div>
      <div class="actions">
        <button class="primary-btn" data-action="start-random">开始这组</button>
        <button class="ghost-btn" data-action="save-random-plan">存成计划</button>
        <span class="tag">5% 概率：今日宜休息</span>
      </div>
    </section>

    <section class="grid four">
      ${quickCard('#library', '🏋️', '训练动作库', '按中文、部位、器械检索 1,324 个动作')}
      ${quickCard('#running', '🏃', '跑步推荐', '轻松跑、间歇、跑步机和跑前激活')}
      ${quickCard('#strength', '🦵', '跑者力量', '臀腿、小腿踝、单腿稳定和核心')}
      ${quickCard('#plans', '📋', '训练计划', '模板、自定义计划和跟练')}
    </section>

    <section class="paper-card">
      <div class="section-title"><div><p class="eyebrow">今日概览</p><h2>训练仪表盘</h2></div><a class="ghost-btn" href="#history">训练记录</a></div>
      <div class="overview-row">
        <div class="metric"><span>收藏动作</span><strong>${favoriteCount}</strong></div>
        <div class="metric"><span>本周训练</span><strong>${weekCount} 次</strong></div>
        <div class="metric"><span>上次训练</span><strong>${last ? escapeHtml(last.title).slice(0, 8) : '未开始'}</strong></div>
      </div>
    </section>

    <section class="paper-card">
      <div class="section-title"><div><p class="eyebrow">热门动作</p><h2>适合今天开练</h2></div><a class="ghost-btn" href="#library">查看全部</a></div>
      <div class="exercise-grid">${hot.map(renderExerciseCard).join('')}</div>
    </section>`;
}

function renderLibrary() {
  const bodyOptions = optionList(unique(state.exercises.map((e) => e.body_part_zh)), state.filters.body, '全部部位');
  const equipmentOptions = optionList(unique(state.exercises.map((e) => e.equipment_zh)), state.filters.equipment, '全部器械');
  const tagOptions = optionList(['跑步辅助', '跑者力量', '心肺有氧', '拉伸恢复', '居家', '健身房'], state.filters.tag, '全部标签');
  const matches = filterExercises();
  const result = matches.slice(0, 72);
  return `
    <section class="paper-card">
      <div class="section-title"><div><p class="eyebrow">Exercise Library</p><h2>训练动作库</h2><p>中文步骤、肌群、器械和收藏都在这里。</p></div><span id="libraryCount" class="tag">${matches.length} / ${state.exercises.length}</span></div>
      <div class="filters">
        <input id="librarySearch" type="search" value="${escapeAttr(state.query)}" placeholder="搜索：深蹲 / 跑步 / 哑铃 / 腹肌">
        <select id="bodyFilter">${bodyOptions}</select>
        <select id="equipmentFilter">${equipmentOptions}</select>
        <select id="tagFilter">${tagOptions}</select>
      </div>
    </section>
    <section id="libraryResults" class="exercise-grid">${result.map(renderExerciseCard).join('') || empty('没有找到动作，换个关键词试试。')}</section>`;
}

function renderGym() {
  const favorites = [...state.favorites].map(getExercise).filter(Boolean);
  return `
    <section class="paper-card">
      <div class="section-title"><div><p class="eyebrow">My Gym</p><h2>我的健身房</h2><p>收藏动作、最近训练和本地记录都只保存在当前浏览器。</p></div><button class="primary-btn" data-action="plan-from-favorites">收藏生成计划</button></div>
      <div class="overview-row"><div class="metric"><span>收藏</span><strong>${favorites.length}</strong></div><div class="metric"><span>计划</span><strong>${state.plans.length}</strong></div><div class="metric"><span>记录</span><strong>${state.history.length}</strong></div></div>
    </section>
    <section class="paper-card"><div class="section-title"><div><p class="eyebrow">Favorites</p><h2>收藏动作</h2></div><a class="ghost-btn" href="#library">去收藏</a></div><div class="exercise-grid">${favorites.map(renderExerciseCard).join('') || empty('还没有收藏动作，先去动作库点亮星星。')}</div></section>`;
}

function renderPlans() {
  return `
    <section class="paper-card">
      <div class="section-title"><div><p class="eyebrow">Plans</p><h2>训练计划</h2><p>可以从模板、随机组或收藏动作生成计划。</p></div><button class="primary-btn" data-action="plan-from-favorites">收藏生成计划</button></div>
      <div class="grid two">${planTemplates.map(renderTemplateCard).join('')}</div>
    </section>
    <section class="paper-card">
      <div class="section-title"><div><p class="eyebrow">Saved</p><h2>我的计划</h2></div></div>
      <div class="plan-list">${state.plans.map(renderPlanItem).join('') || empty('还没有计划。可以保存模板、随机组或收藏动作。')}</div>
    </section>`;
}

function renderRunning() {
  return `
    <section class="paper-card">
      <div class="section-title"><div><p class="eyebrow">Running</p><h2>今天想怎么跑？</h2><p>按目标、水平、时间、场地生成跑前激活、主训练和跑后放松。</p></div><a class="ghost-btn" href="/running-ocr/">导入跑步截图 OCR</a></div>
      <div class="grid four">
        ${selectField('runGoal', '目标', [['recovery','恢复'], ['sweat','出汗'], ['speed','提速'], ['endurance','耐力'], ['indoor','室内']])}
        ${selectField('runLevel', '水平', [['beginner','新手'], ['regular','有基础'], ['advanced','进阶']])}
        ${selectField('runTime', '时间', [['20','20 分钟'], ['30','30 分钟'], ['45','45 分钟'], ['60','60 分钟']])}
        ${selectField('runPlace', '场地', [['outdoor','户外'], ['treadmill','跑步机'], ['indoor','室内无器械']])}
      </div>
      <div class="actions" style="margin-top:14px"><button class="primary-btn" data-action="generate-running">生成跑步建议</button><button class="ghost-btn" data-action="manual-run-record">手动记录一次跑步</button></div>
    </section>
    <section id="runningResult">${renderRunningPlan(selectRunningRecipe())}</section>`;
}

function renderStrength() {
  return `
    <section class="paper-card">
      <div class="section-title"><div><p class="eyebrow">Runner Strength</p><h2>今天补一块跑步短板</h2><p>跑前激活、非跑步日力量、跑后恢复，全部可加入计划或直接跟练。</p></div></div>
      <div class="grid three">
        ${selectField('strengthScenario', '安排', [['before','跑前激活'], ['offday','非跑步日力量'], ['after','跑后恢复']])}
        ${selectField('strengthLevel', '水平', [['beginner','新手'], ['regular','有基础'], ['advanced','进阶']])}
        ${selectField('strengthTime', '时长', [['10','10 分钟'], ['20','20 分钟'], ['30','30 分钟'], ['45','45 分钟']])}
      </div>
      <div class="actions" style="margin-top:14px"><button class="primary-btn" data-action="generate-strength">推荐力量计划</button></div>
    </section>
    <section id="strengthResult">${renderStrengthPlan(selectStrengthPlan())}</section>`;
}

function renderWorkout() {
  const workout = state.workout;
  if (!workout || !workout.items?.length) return `<section class="paper-card">${empty('还没有开始的训练。先从首页、跑步、跑者力量或计划开始。')}<p><a class="primary-btn" href="#home">回首页</a></p></section>`;
  const index = Math.min(workout.index || 0, workout.items.length - 1);
  const item = workout.items[index];
  const exercise = item.id ? getExercise(item.id) : null;
  normalizeWorkoutItem(item);
  const title = item.title || displayName(exercise) || '训练动作';
  const steps = exercise?.steps_zh?.length ? exercise.steps_zh : [item.cue || item.runner_cue || '保持动作稳定，按自己的节奏完成。'];
  const phaseLabel = item.phase === 'rest' ? '组间休息' : '训练中';
  const remaining = Math.max(0, item.remaining ?? item.work_seconds ?? 45);
  return `
    <section class="paper-card workout-card">
      <p class="eyebrow">Workout Player</p>
      <h2>${escapeHtml(workout.title)}</h2>
      <p>${index + 1} / ${workout.items.length} · 第 ${item.current_set}/${item.sets} 组 · ${phaseLabel}</p>
      ${exercise ? `<div class="workout-media">${renderExerciseMedia(exercise, false)}</div>` : ''}
      <div class="workout-count"><div><strong id="countdownText">${formatSeconds(remaining)}</strong><span>${phaseLabel}</span></div></div>
      <h1 style="font-size:clamp(32px,6vw,58px)">${escapeHtml(title)}</h1>
      <p>${escapeHtml(item.prescription || item.reps || item.duration || '按计划完成')}</p>
      <ol class="step-list">${steps.slice(0, 5).map((step) => `<li>${escapeHtml(step)}</li>`).join('')}</ol>
      ${item.runner_cue ? `<p class="tag">跑步提示：${escapeHtml(item.runner_cue)}</p>` : ''}
      <p class="disclaimer">如出现疼痛、头晕或明显不适，请立即停止。</p>
      <div class="actions" style="justify-content:center">
        <button class="ghost-btn" data-action="prev-workout">上一个</button>
        <button class="primary-btn" data-action="toggle-timer">${item.timer_running ? '暂停倒计时' : '继续倒计时'}</button>
        <button class="ghost-btn" data-action="reset-set">重置本组</button>
        <button class="ghost-btn" data-action="next-workout">${index === workout.items.length - 1 ? '完成训练' : '下一个'}</button>
        <button class="ghost-btn" data-action="finish-workout">结束并记录</button>
      </div>
    </section>`;
}

function renderHistory() {
  return `<section class="paper-card"><div class="section-title"><div><p class="eyebrow">History</p><h2>训练记录</h2></div><button class="ghost-btn" data-action="clear-history">清空记录</button></div><div class="plan-list">${state.history.map((record) => `<article class="plan-item"><div><strong>${escapeHtml(record.title)}</strong><p>${new Date(record.completed_at).toLocaleString('zh-CN')} · ${record.count} 个动作</p></div><span class="tag">完成</span></article>`).join('') || empty('还没有训练记录。')}</div></section>`;
}

function renderTemplateCard(template) {
  return `<article class="panel"><h3>${escapeHtml(template.title)}</h3><p>${escapeHtml(template.desc)}</p><div class="actions"><button class="primary-btn" data-action="start-template" data-id="${template.id}">开始</button><button class="ghost-btn" data-action="save-template" data-id="${template.id}">保存</button></div></article>`;
}

function renderPlanItem(plan) {
  return `<article class="plan-item"><div><strong>${escapeHtml(plan.title)}</strong><p>${plan.items.length} 个动作 · ${escapeHtml(plan.desc || '自定义计划')}</p></div><div class="actions"><button class="primary-btn" data-action="start-plan" data-id="${plan.id}">开始</button><button class="ghost-btn" data-action="delete-plan" data-id="${plan.id}">删除</button></div></article>`;
}

function renderExerciseCard(exercise) {
  const favorite = state.favorites.has(exercise.id);
  return `<article class="exercise-card">
    ${renderExerciseMedia(exercise, true)}
    <h3>${escapeHtml(displayName(exercise))}</h3>
    <p>${escapeHtml(exercise.target_zh)} · ${escapeHtml(exercise.equipment_zh)} · ${escapeHtml(exercise.body_part_zh)}</p>
    <div class="tags">${[exercise.target_zh, exercise.difficulty, ...(exercise.tags || []).slice(0, 2)].map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
    <div class="card-actions"><button class="tiny-btn" data-action="detail" data-id="${exercise.id}">详情</button><button class="tiny-btn ${favorite ? 'favorite-on' : ''}" data-action="favorite" data-id="${exercise.id}">${favorite ? '★ 已藏' : '☆ 收藏'}</button></div>
  </article>`;
}

function renderExerciseMedia(exercise, compact = true) {
  const alt = `${displayName(exercise)} 动作动图`;
  const fallback = compact ? '动图加载失败' : '动图暂不可用';
  const cls = compact ? 'exercise-media compact' : 'exercise-media large';
  if (!exercise.gif_url) {
    return `<div class="${cls} media-fallback" aria-label="${escapeAttr(alt)}">${fallback}</div>`;
  }
  return `<div class="${cls}">
    <img src="${escapeAttr(exercise.gif_url)}" alt="${escapeAttr(alt)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
    <span class="media-fallback" hidden>${fallback}</span>
  </div>`;
}

function renderRunningPlan(plan) {
  const warmup = namesToExercises(plan.warmup);
  const cooldown = namesToExercises(plan.cooldown);
  return `<section class="paper-card"><div class="section-title"><div><p class="eyebrow">今日跑步签</p><h2>${escapeHtml(plan.title)}</h2><p>${plan.minutes} 分钟 · ${plan.intensity}强度 · ${escapeHtml(plan.main)}</p></div><button class="primary-btn" data-action="start-running" data-id="${plan.id}">开始分段提示</button></div><div class="timeline"><div class="timeline-step"><b>热</b><div><strong>跑前激活</strong><p>${warmup.map(displayName).filter(Boolean).join('、')}</p></div></div><div class="timeline-step"><b>跑</b><div><strong>主训练</strong><p>${escapeHtml(plan.main)}</p></div></div><div class="timeline-step"><b>松</b><div><strong>跑后放松</strong><p>${cooldown.map(displayName).filter(Boolean).join('、') || '小腿、臀部、髋屈肌舒适拉伸'}</p></div></div></div><h3>跑前动作</h3><div class="exercise-grid">${warmup.map(renderExerciseCard).join('')}</div></section>`;
}

function renderStrengthPlan(plan) {
  const items = plan.items.map(([name, prescription, cue]) => ({ exercise: findByName(name), prescription, cue }));
  return `<section class="paper-card"><div class="section-title"><div><p class="eyebrow">推荐计划</p><h2>${escapeHtml(plan.title)}</h2><p>${plan.minutes} 分钟 · ${plan.intensity} · ${escapeHtml(plan.benefit)}</p></div><div class="actions"><button class="primary-btn" data-action="start-strength" data-id="${plan.id}">开始跟练</button><button class="ghost-btn" data-action="save-strength" data-id="${plan.id}">保存计划</button></div></div><div class="timeline">${items.map((item, index) => `<div class="timeline-step"><b>${index + 1}</b><div><strong>${escapeHtml(displayName(item.exercise) || plan.items[index][0])}</strong><p>${escapeHtml(item.prescription)} · ${escapeHtml(item.cue)}</p></div></div>`).join('')}</div></section>`;
}

function onAppClick(event) {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  const id = button.dataset.id;
  if (action === 'randomize') { state.randomSet = makeRandomSet(); render(); toast('已随机生成一组动作'); }
  if (action === 'start-random') startWorkoutFromExercises(state.randomSet.length ? state.randomSet : makeRandomSet(), '随机推荐动作');
  if (action === 'save-random-plan') savePlan('随机推荐动作', state.randomSet.length ? state.randomSet : makeRandomSet());
  if (action === 'detail') openDetail(id);
  if (action === 'favorite') toggleFavorite(id);
  if (action === 'start-template') startPlanTemplate(id);
  if (action === 'save-template') saveTemplate(id);
  if (action === 'start-plan') startSavedPlan(id);
  if (action === 'delete-plan') deletePlan(id);
  if (action === 'plan-from-favorites') planFromFavorites();
  if (action === 'generate-running') $('#runningResult').innerHTML = renderRunningPlan(readRunningForm());
  if (action === 'start-running') startRunning(id || selectRunningRecipe().id);
  if (action === 'manual-run-record') saveHistory('手动跑步记录', 1);
  if (action === 'generate-strength') $('#strengthResult').innerHTML = renderStrengthPlan(readStrengthForm());
  if (action === 'start-strength') startStrength(id || selectStrengthPlan().id);
  if (action === 'save-strength') saveStrength(id || selectStrengthPlan().id);
  if (action === 'prev-workout') moveWorkout(-1);
  if (action === 'next-workout') moveWorkout(1);
  if (action === 'toggle-timer') toggleWorkoutTimer();
  if (action === 'reset-set') resetWorkoutSet();
  if (action === 'finish-workout') finishWorkout();
  if (action === 'clear-history') clearHistory();
}

function onAppChange(event) {
  if (event.target.id === 'bodyFilter') state.filters.body = event.target.value;
  if (event.target.id === 'equipmentFilter') state.filters.equipment = event.target.value;
  if (event.target.id === 'tagFilter') state.filters.tag = event.target.value;
  if (['bodyFilter', 'equipmentFilter', 'tagFilter'].includes(event.target.id)) render();
}

function onAppInput(event) {
  if (event.target.id === 'librarySearch') {
    state.query = event.target.value.trim();
    updateLibraryResults();
  }
}

function updateLibraryResults() {
  const matches = filterExercises();
  const result = matches.slice(0, 72);
  const count = $('#libraryCount');
  const results = $('#libraryResults');
  if (count) count.textContent = `${matches.length} / ${state.exercises.length}`;
  if (results) results.innerHTML = result.map(renderExerciseCard).join('') || empty('没有找到动作，换个关键词试试。');
}

function filterExercises() {
  const q = state.query.toLowerCase();
  return state.exercises.filter((exercise) => {
    if (q && !exercise.search_text.includes(q)) return false;
    if (state.filters.body && exercise.body_part_zh !== state.filters.body) return false;
    if (state.filters.equipment && exercise.equipment_zh !== state.filters.equipment) return false;
    if (state.filters.tag && !exercise.tags.includes(state.filters.tag)) return false;
    return true;
  });
}

function pickExercises({ tag, body, equipment } = {}, count = 6) {
  const pool = state.exercises.filter((exercise) => (!tag || exercise.tags.includes(tag)) && (!body || exercise.body_part_zh === body) && (!equipment || exercise.equipment_zh === equipment));
  return shuffle(pool).slice(0, count);
}

function makeRandomSet() {
  const bodies = ['臀腿', '腰腹核心', '胸部', '背部', '肩部', '心肺有氧'];
  const body = bodies[Math.floor(Math.random() * bodies.length)];
  const pool = state.exercises.filter((e) => e.body_part_zh === body || (body === '心肺有氧' && e.tags.includes('心肺有氧')));
  return shuffle(pool.length ? pool : state.exercises).slice(0, 5);
}

function startWorkoutFromExercises(exercises, title) {
  if (!exercises.length) return toast('没有可开始的动作');
  const items = exercises.map((exercise) => createWorkoutItem(exercise, exercise.body_part === 'cardio' ? '3 组 × 40 秒' : '3 组 × 45 秒', exercise.tags.includes('跑者力量') ? '保持膝髋踝稳定，动作质量优先。' : ''));
  state.workout = { id: uid(), title, index: 0, items, started_at: new Date().toISOString() };
  writeJson(STORE.workout, state.workout);
  location.hash = '#workout';
  render();
}

function startPlanTemplate(id) {
  const template = planTemplates.find((item) => item.id === id);
  startWorkoutFromExercises(namesToExercises(template.names), template.title);
}

function saveTemplate(id) {
  const template = planTemplates.find((item) => item.id === id);
  savePlan(template.title, namesToExercises(template.names), template.desc);
}

function savePlan(title, exercises, desc = '') {
  const plan = { id: uid(), title, desc, items: exercises.map((exercise) => createWorkoutItem(exercise, exercise.body_part === 'cardio' ? '3 组 × 40 秒' : '3 组 × 45 秒')), created_at: new Date().toISOString() };
  state.plans.unshift(plan);
  writeJson(STORE.plans, state.plans);
  toast('计划已保存');
  render();
}

function startSavedPlan(id) {
  const plan = state.plans.find((item) => item.id === id);
  state.workout = { ...plan, index: 0, started_at: new Date().toISOString() };
  writeJson(STORE.workout, state.workout);
  location.hash = '#workout';
}

function deletePlan(id) {
  state.plans = state.plans.filter((plan) => plan.id !== id);
  writeJson(STORE.plans, state.plans);
  toast('计划已删除');
  render();
}

function planFromFavorites() {
  const favorites = [...state.favorites].map(getExercise).filter(Boolean).slice(0, 8);
  if (!favorites.length) return toast('先收藏几个动作');
  savePlan('我的收藏训练', favorites, '由收藏动作生成');
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) { state.favorites.delete(id); toast('已取消收藏'); }
  else { state.favorites.add(id); toast('已收藏到我的健身房'); }
  writeJson(STORE.favorites, [...state.favorites]);
  render();
}

function openDetail(id) {
  const exercise = getExercise(id);
  if (!exercise) return;
  const modal = $('#detailModal');
  modal.innerHTML = `<section class="modal-sheet"><div class="modal-head"><div><p class="eyebrow">${escapeHtml(exercise.body_part_zh)} · ${escapeHtml(exercise.equipment_zh)}</p><h2>${escapeHtml(displayName(exercise))}</h2><p>动作编号：${escapeHtml(exercise.id)} · 动图来自外部媒体源</p></div><button class="ghost-btn" data-action="close-modal">关闭</button></div>${renderExerciseMedia(exercise, false)}<div class="tags">${[exercise.target_zh, exercise.muscle_group_zh, ...exercise.secondary_muscles_zh, ...exercise.tags].slice(0, 9).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div><h3>中文步骤</h3><ol class="step-list">${exercise.steps_zh.map((step) => `<li>${escapeHtml(step)}</li>`).join('')}</ol><p class="disclaimer">动图通过数据源 media_id 从外部地址加载，未打包进本站仓库。练习时请量力而行，疼痛或头晕请停止。</p><div class="actions"><button class="primary-btn" data-action="modal-start" onclick="window.fitnessStartSingle('${exercise.id}')">直接跟练</button><button class="ghost-btn" onclick="window.fitnessToggleFavorite('${exercise.id}')">${state.favorites.has(exercise.id) ? '取消收藏' : '收藏动作'}</button></div></section>`;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
}

window.fitnessStartSingle = (id) => { closeModal(); startWorkoutFromExercises([getExercise(id)].filter(Boolean), '单动作跟练'); };
window.fitnessToggleFavorite = (id) => { toggleFavorite(id); openDetail(id); };
function closeModal() { const modal = $('#detailModal'); modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true'); }

function selectRunningRecipe() { return runningRecipes[0]; }
function readRunningForm() {
  const goal = $('#runGoal')?.value || 'recovery';
  const level = $('#runLevel')?.value || 'beginner';
  const place = $('#runPlace')?.value || 'outdoor';
  return runningRecipes.find((recipe) => recipe.goal === goal && recipe.place.includes(place) && (recipe.level === level || level !== 'advanced')) || runningRecipes.find((recipe) => recipe.goal === goal) || runningRecipes[0];
}
function startRunning(id) {
  const plan = runningRecipes.find((item) => item.id === id) || readRunningForm();
  const warmup = namesToExercises(plan.warmup).map((e) => createWorkoutItem(e, '2 组 × 40 秒'));
  const cooldown = namesToExercises(plan.cooldown).map((e) => createWorkoutItem(e, '1 组 × 45 秒'));
  state.workout = { id: uid(), title: plan.title, index: 0, items: [...warmup, { title: '主跑步训练', prescription: `${plan.minutes} 分钟`, cue: plan.main, sets: 1, current_set: 1, work_seconds: Math.max(60, plan.minutes * 60), rest_seconds: 0, remaining: Math.max(60, plan.minutes * 60), phase: 'work', timer_running: true }, ...cooldown], started_at: new Date().toISOString() };
  writeJson(STORE.workout, state.workout);
  location.hash = '#workout';
}

function selectStrengthPlan() { return runnerStrengthTemplates[1]; }
function readStrengthForm() {
  const scenario = $('#strengthScenario')?.value || 'offday';
  const level = $('#strengthLevel')?.value || 'beginner';
  return runnerStrengthTemplates.find((plan) => plan.scenario === scenario && plan.level === level) || runnerStrengthTemplates.find((plan) => plan.scenario === scenario) || runnerStrengthTemplates[1];
}
function startStrength(id) {
  const plan = runnerStrengthTemplates.find((item) => item.id === id) || readStrengthForm();
  const items = plan.items.map(([name, prescription, cue]) => {
    const exercise = findByName(name);
    return exercise ? createWorkoutItem(exercise, prescription, cue) : { title: name, prescription, runner_cue: cue, sets: 3, current_set: 1, work_seconds: 45, rest_seconds: 30, remaining: 45, phase: 'work', timer_running: true };
  });
  state.workout = { id: uid(), title: plan.title, index: 0, items, started_at: new Date().toISOString() };
  writeJson(STORE.workout, state.workout);
  location.hash = '#workout';
}
function saveStrength(id) {
  const plan = runnerStrengthTemplates.find((item) => item.id === id) || readStrengthForm();
  const exercises = plan.items.map(([name]) => findByName(name)).filter(Boolean);
  savePlan(plan.title, exercises, plan.benefit);
}

function moveWorkout(delta) {
  if (!state.workout) return;
  const lastIndex = state.workout.items.length - 1;
  if (delta > 0 && state.workout.index >= lastIndex) return finishWorkout();
  state.workout.index = Math.max(0, Math.min(lastIndex, (state.workout.index || 0) + delta));
  writeJson(STORE.workout, state.workout);
  render();
}
function finishWorkout() {
  if (!state.workout) return;
  saveHistory(state.workout.title, state.workout.items.length);
  state.workout = null;
  localStorage.removeItem(STORE.workout);
  location.hash = '#history';
}
function saveHistory(title, count) {
  state.history.unshift({ id: uid(), title, count, completed_at: new Date().toISOString() });
  state.history = state.history.slice(0, 120);
  writeJson(STORE.history, state.history);
  toast('训练记录已保存');
}
function clearHistory() { state.history = []; writeJson(STORE.history, state.history); render(); toast('训练记录已清空'); }

function seedDefaultPlans() {
  if (state.plans.length) return;
  const seed = planTemplates.slice(0, 2).map((template) => ({ id: template.id, title: template.title, desc: template.desc, items: namesToExercises(template.names).map((exercise) => createWorkoutItem(exercise, exercise.body_part === 'cardio' ? '3 组 × 40 秒' : '3 组 × 45 秒')), created_at: new Date().toISOString() }));
  state.plans = seed;
  writeJson(STORE.plans, state.plans);
}

function createWorkoutItem(exercise, prescription = '3 组 × 45 秒', runnerCue = '') {
  const timing = parseTiming(prescription, exercise);
  return {
    id: exercise.id,
    title: displayName(exercise),
    prescription,
    runner_cue: runnerCue,
    sets: timing.sets,
    current_set: 1,
    work_seconds: timing.work_seconds,
    rest_seconds: timing.rest_seconds,
    remaining: timing.work_seconds,
    phase: 'work',
    timer_running: true
  };
}

function parseTiming(prescription = '', exercise = null) {
  const setsMatch = String(prescription).match(/(\d+)\s*组/);
  const secondsMatch = String(prescription).match(/(\d+)\s*秒/);
  const minutesMatch = String(prescription).match(/(\d+)\s*分钟/);
  const sets = setsMatch ? Number(setsMatch[1]) : 3;
  let workSeconds = secondsMatch ? Number(secondsMatch[1]) : 45;
  if (!secondsMatch && minutesMatch) workSeconds = Number(minutesMatch[1]) * 60;
  if (exercise?.body_part === 'cardio' && !secondsMatch && !minutesMatch) workSeconds = 40;
  const restSeconds = exercise?.body_part === 'cardio' ? 20 : 30;
  return { sets, work_seconds: Math.max(10, workSeconds), rest_seconds: restSeconds };
}

function normalizeWorkoutItem(item) {
  if (!item.sets) item.sets = parseTiming(item.prescription).sets;
  if (!item.current_set) item.current_set = 1;
  if (!item.work_seconds) item.work_seconds = parseTiming(item.prescription).work_seconds;
  if (typeof item.rest_seconds !== 'number') item.rest_seconds = parseTiming(item.prescription).rest_seconds;
  if (!item.phase) item.phase = 'work';
  if (typeof item.remaining !== 'number') item.remaining = item.phase === 'rest' ? item.rest_seconds : item.work_seconds;
  if (typeof item.timer_running !== 'boolean') item.timer_running = true;
}

function setupWorkoutTimer() {
  const workout = state.workout;
  if (!workout?.items?.length) return;
  const item = workout.items[Math.min(workout.index || 0, workout.items.length - 1)];
  normalizeWorkoutItem(item);
  updateCountdownDom(item);
  if (!item.timer_running) return;
  state.timerId = window.setInterval(() => {
    item.remaining = Math.max(0, (item.remaining || 0) - 1);
    updateCountdownDom(item);
    writeJson(STORE.workout, state.workout);
    if (item.remaining <= 0) advanceWorkoutPhase();
  }, 1000);
}

function stopWorkoutTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateCountdownDom(item) {
  const node = $('#countdownText');
  if (node) node.textContent = formatSeconds(item.remaining || 0);
}

function advanceWorkoutPhase() {
  const workout = state.workout;
  if (!workout) return;
  const item = workout.items[workout.index || 0];
  normalizeWorkoutItem(item);
  if (item.phase === 'work' && item.current_set < item.sets && item.rest_seconds > 0) {
    item.phase = 'rest';
    item.remaining = item.rest_seconds;
  } else if (item.phase === 'rest' && item.current_set < item.sets) {
    item.phase = 'work';
    item.current_set += 1;
    item.remaining = item.work_seconds;
  } else {
    item.phase = 'work';
    item.current_set = 1;
    item.remaining = item.work_seconds;
    moveWorkout(1);
    return;
  }
  writeJson(STORE.workout, workout);
  render();
}

function toggleWorkoutTimer() {
  const item = state.workout?.items?.[state.workout.index || 0];
  if (!item) return;
  normalizeWorkoutItem(item);
  item.timer_running = !item.timer_running;
  writeJson(STORE.workout, state.workout);
  render();
}

function resetWorkoutSet() {
  const item = state.workout?.items?.[state.workout.index || 0];
  if (!item) return;
  normalizeWorkoutItem(item);
  item.phase = 'work';
  item.remaining = item.work_seconds;
  item.timer_running = true;
  writeJson(STORE.workout, state.workout);
  render();
}

function namesToExercises(names) { return names.map(findByName).filter(Boolean); }
function findByName(name) {
  const lower = name.toLowerCase();
  return state.exercises.find((e) => e.name.toLowerCase() === lower) || state.exercises.find((e) => e.name.toLowerCase().includes(lower)) || state.exercises.find((e) => e.search_text.includes(lower));
}
function getExercise(id) { return state.exercises.find((exercise) => exercise.id === id); }
function displayName(exercise) { return exercise ? (exercise.name_zh || exercise.display_name || '中文动作') : ''; }
function figureFor(exercise) {
  if (!exercise?.gif_url) return '暂无动图';
  return '动图加载失败';
}
function optionList(items, selected, allLabel) { return [`<option value="">${allLabel}</option>`, ...items.sort().map((item) => `<option value="${escapeAttr(item)}" ${item === selected ? 'selected' : ''}>${escapeHtml(item)}</option>`)].join(''); }
function selectField(id, label, options) { return `<label class="field"><span>${label}</span><select id="${id}">${options.map(([value, text]) => `<option value="${value}">${text}</option>`).join('')}</select></label>`; }
function quickCard(href, icon, title, text) { return `<a class="quick-card" href="${href}"><i>${icon}</i><b>${title}</b><span>${text}</span></a>`; }
function empty(text) { return `<div class="empty">${escapeHtml(text)}</div>`; }
function randomMood() { return ['又燃又开心', '轻松开练', '稳住节奏', '今天练一点', '冲但不硬撑'][Math.floor(Math.random() * 5)]; }
function workoutsThisWeek() { const now = Date.now(); const week = 7 * 24 * 60 * 60 * 1000; return state.history.filter((record) => now - new Date(record.completed_at).getTime() < week).length; }
function shuffle(items) { return [...items].sort(() => Math.random() - 0.5); }
function unique(items) { return [...new Set(items.filter(Boolean))]; }
function uid() { return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`; }
function formatSeconds(total) {
  const seconds = Math.max(0, Number(total) || 0);
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${minutes}:${String(rest).padStart(2, '0')}`;
}
function readJson(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
function writeJson(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function escapeHtml(value = '') { return String(value).replace(/[&<>'"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch])); }
function escapeAttr(value = '') { return escapeHtml(value); }
function debounce(fn, wait) { let timer; return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), wait); }; }
function toast(message) { const el = $('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('show'), 1800); }
