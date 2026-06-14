(() => {
  const SIZE = 15;
  const EMPTY = 0;
  const BLACK = 1;
  const WHITE = 2;
  const WIN_SCORE = 100000000;
  const DIRECTIONS = [
    [1, 0],
    [0, 1],
    [1, 1],
    [1, -1]
  ];

  const themePalettes = {
    bamboo: {
      page: '#f5f1e8',
      boardA: '#f2c77d',
      boardB: '#d79a45',
      line: 'rgba(65, 38, 12, 0.72)',
      star: '#6b3f16'
    },
    ink: {
      page: '#edf2f7',
      boardA: '#d8e0e8',
      boardB: '#9fb2c5',
      line: 'rgba(26, 45, 62, 0.68)',
      star: '#1f3a4a'
    },
    night: {
      page: '#111827',
      boardA: '#4555a3',
      boardB: '#1f2a60',
      line: 'rgba(235, 239, 255, 0.58)',
      star: '#fbbf24'
    },
    jade: {
      page: '#e9f7ef',
      boardA: '#78c28d',
      boardB: '#2f7d57',
      line: 'rgba(11, 55, 36, 0.68)',
      star: '#08351f'
    }
  };

  const canvas = document.querySelector('#boardCanvas');
  const context = canvas.getContext('2d');
  const modeSelect = document.querySelector('#modeSelect');
  const difficultySelect = document.querySelector('#difficultySelect');
  const themeSelect = document.querySelector('#themeSelect');
  const soundToggle = document.querySelector('#soundToggle');
  const newGameButton = document.querySelector('#newGameButton');
  const undoButton = document.querySelector('#undoButton');
  const hintButton = document.querySelector('#hintButton');
  const replayButton = document.querySelector('#replayButton');
  const firstStepButton = document.querySelector('#firstStepButton');
  const prevStepButton = document.querySelector('#prevStepButton');
  const nextStepButton = document.querySelector('#nextStepButton');
  const autoReplayButton = document.querySelector('#autoReplayButton');
  const teachDemoButton = document.querySelector('#teachDemoButton');
  const statusTitle = document.querySelector('#statusTitle');
  const statusText = document.querySelector('#statusText');
  const turnBadge = document.querySelector('#turnBadge');
  const matchTitle = document.querySelector('#matchTitle');
  const blackCount = document.querySelector('#blackCount');
  const whiteCount = document.querySelector('#whiteCount');
  const resultSummary = document.querySelector('#resultSummary');
  const moveList = document.querySelector('#moveList');

  let board = createBoard();
  let moves = [];
  let currentPlayer = BLACK;
  let gameOver = false;
  let winner = EMPTY;
  let winningLine = [];
  let lastMove = null;
  let replayIndex = null;
  let replayTimer = null;
  let aiThinking = false;
  let hintMove = null;
  let audioContext = null;
  let layout = { size: 720, padding: 42, cell: 45.42 };

  const resizeObserver = new ResizeObserver(resizeCanvas);
  resizeObserver.observe(canvas);

  canvas.addEventListener('pointerdown', handleBoardClick);
  modeSelect.addEventListener('change', () => {
    updateMatchTitle();
    newGame();
  });
  difficultySelect.addEventListener('change', () => {
    updateMatchTitle();
    draw();
  });
  themeSelect.addEventListener('change', () => {
    applyPageTheme();
    draw();
  });
  soundToggle.addEventListener('change', () => {
    if (soundToggle.checked) {
      playStoneSound(currentPlayer, { preview: true });
    }
  });
  newGameButton.addEventListener('click', newGame);
  undoButton.addEventListener('click', undoMove);
  hintButton.addEventListener('click', showHint);
  replayButton.addEventListener('click', startReplay);
  firstStepButton.addEventListener('click', () => setReplayStep(0));
  prevStepButton.addEventListener('click', () => setReplayStep(Math.max(0, (replayIndex ?? moves.length) - 1)));
  nextStepButton.addEventListener('click', () => setReplayStep(Math.min(moves.length, (replayIndex ?? 0) + 1)));
  autoReplayButton.addEventListener('click', toggleAutoReplay);
  teachDemoButton.addEventListener('click', loadTeachingDemo);

  applyPageTheme();
  updateMatchTitle();
  newGame();

  function createBoard() {
    return Array.from({ length: SIZE }, () => Array(SIZE).fill(EMPTY));
  }

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const cssSize = Math.max(320, Math.floor(rect.width || 720));
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(cssSize * ratio);
    canvas.height = Math.round(cssSize * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    layout.size = cssSize;
    layout.padding = Math.max(24, cssSize * 0.07);
    layout.cell = (cssSize - layout.padding * 2) / (SIZE - 1);
    draw();
  }

  function applyPageTheme() {
    document.documentElement.style.setProperty('--page-bg', themePalettes[themeSelect.value].page);
  }

  function newGame() {
    stopAutoReplay();
    board = createBoard();
    moves = [];
    currentPlayer = BLACK;
    gameOver = false;
    winner = EMPTY;
    winningLine = [];
    lastMove = null;
    replayIndex = null;
    aiThinking = false;
    hintMove = null;
    resultSummary.className = 'summary empty';
    resultSummary.textContent = '暂无结果。完成一局后可逐手复盘。';
    setReplayButtons(false);
    updateStatus('黑棋先行', isAiMode() ? '你执黑先手，点击棋盘交叉点落子。' : '双人轮流落子，黑棋先手。');
    renderMoveList();
    updateCounts();
    draw();
  }

  function handleBoardClick(event) {
    if (gameOver || replayIndex !== null || aiThinking || isAiTurn()) {
      return;
    }

    const point = eventToPoint(event);
    if (!point || board[point.row][point.col] !== EMPTY) {
      return;
    }

    playMove(point.row, point.col, currentPlayer);
  }

  function eventToPoint(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const col = Math.round((x - layout.padding) / layout.cell);
    const row = Math.round((y - layout.padding) / layout.cell);
    if (!isInside(row, col)) {
      return null;
    }

    const px = layout.padding + col * layout.cell;
    const py = layout.padding + row * layout.cell;
    const distance = Math.hypot(px - x, py - y);
    return distance <= layout.cell * 0.45 ? { row, col } : null;
  }

  function playMove(row, col, player, options = {}) {
    board[row][col] = player;
    const move = { row, col, player };
    moves.push(move);
    lastMove = move;
    hintMove = null;
    if (!options.silent) {
      playStoneSound(player);
    }

    const line = findWinningLine(row, col, player);
    if (line.length >= 5) {
      gameOver = true;
      winner = player;
      winningLine = line;
      finishGame(`${playerName(player)}获胜`, `${playerName(player)}在第 ${moves.length} 手形成五连。`);
    } else if (moves.length === SIZE * SIZE) {
      gameOver = true;
      winner = EMPTY;
      finishGame('平局', '棋盘已满，本局没有形成五连。');
    } else {
      currentPlayer = opposite(player);
      updateStatus(`${playerName(currentPlayer)}落子`, nextStatusText());
    }

    updateCounts();
    renderMoveList();
    draw();

    if (!options.skipAi && !gameOver && isAiTurn()) {
      scheduleAiMove();
    }
  }

  function scheduleAiMove() {
    aiThinking = true;
    updateStatus('AI 思考中', `当前难度：${difficultyName()}。`);
    window.setTimeout(() => {
      const move = chooseAiMove(difficultySelect.value, WHITE);
      aiThinking = false;
      if (move && !gameOver) {
        playMove(move.row, move.col, WHITE);
      }
    }, difficultySelect.value === 'hard' ? 420 : 260);
  }

  function undoMove() {
    if (aiThinking || !moves.length || replayIndex !== null) {
      return;
    }

    const undoCount = isAiMode() && moves.length > 1 && moves[moves.length - 1].player === WHITE ? 2 : 1;
    for (let index = 0; index < undoCount; index += 1) {
      const move = moves.pop();
      if (move) {
        board[move.row][move.col] = EMPTY;
      }
    }

    gameOver = false;
    winner = EMPTY;
    winningLine = [];
    lastMove = moves[moves.length - 1] || null;
    currentPlayer = moves.length ? opposite(lastMove.player) : BLACK;
    if (isAiMode()) {
      currentPlayer = BLACK;
    }
    hintMove = null;
    resultSummary.className = 'summary empty';
    resultSummary.textContent = '暂无结果。完成一局后可逐手复盘。';
    setReplayButtons(false);
    updateStatus(`${playerName(currentPlayer)}落子`, nextStatusText());
    updateCounts();
    renderMoveList();
    draw();
  }

  function showHint() {
    if (gameOver || aiThinking || replayIndex !== null || isAiTurn()) {
      return;
    }

    hintMove = chooseAiMove('hard', currentPlayer);
    if (!hintMove) {
      return;
    }

    const reason = explainMove(hintMove, currentPlayer);
    updateStatus('推荐落点', `${coordinateName(hintMove)}：${reason}`);
    draw();
  }

  function finishGame(title, detail) {
    updateStatus(title, detail);
    resultSummary.className = 'summary';
    resultSummary.innerHTML = `<strong>${title}</strong><br>${detail}<br>共 ${moves.length} 手，可点击“复盘”逐手回看。`;
    replayButton.disabled = false;
    setReplayButtons(false);
  }

  function startReplay() {
    if (!moves.length) {
      return;
    }

    stopAutoReplay();
    replayIndex = 0;
    setReplayButtons(true);
    updateStatus('复盘模式', '使用上一步/下一步查看关键落子；重新开始可退出复盘。');
    draw();
    renderMoveList();
  }

  function setReplayStep(step) {
    replayIndex = Math.max(0, Math.min(moves.length, step));
    draw();
    renderMoveList();
  }

  function toggleAutoReplay() {
    if (replayTimer) {
      stopAutoReplay();
      return;
    }

    if (replayIndex === null) {
      replayIndex = 0;
    }
    autoReplayButton.textContent = '暂停播放';
    replayTimer = window.setInterval(() => {
      if ((replayIndex ?? 0) >= moves.length) {
        stopAutoReplay();
        return;
      }
      setReplayStep((replayIndex ?? 0) + 1);
    }, 520);
  }

  function stopAutoReplay() {
    if (replayTimer) {
      window.clearInterval(replayTimer);
      replayTimer = null;
    }
    autoReplayButton.textContent = '自动播放';
  }

  function setReplayButtons(enabled) {
    firstStepButton.disabled = !enabled;
    prevStepButton.disabled = !enabled;
    nextStepButton.disabled = !enabled;
    autoReplayButton.disabled = !enabled;
  }

  function loadTeachingDemo() {
    stopAutoReplay();
    board = createBoard();
    moves = [];
    currentPlayer = BLACK;
    gameOver = false;
    winner = EMPTY;
    winningLine = [];
    replayIndex = null;
    hintMove = null;

    [
      [7, 6, BLACK], [6, 6, WHITE], [7, 7, BLACK], [6, 7, WHITE],
      [8, 8, BLACK], [8, 7, WHITE], [7, 8, BLACK]
    ].forEach(([row, col, player]) => playMove(row, col, player, { skipAi: true, silent: true }));

    gameOver = false;
    winner = EMPTY;
    winningLine = [];
    currentPlayer = WHITE;
    resultSummary.className = 'summary';
    resultSummary.innerHTML = '<strong>教学棋形：黑棋活三</strong><br>第 7 手后，黑棋在 H 线形成连续三子且两端有空间。白棋下一步应优先堵住 F8 或 J8 附近的延伸点。';
    updateStatus('教学演示：活三', '观察黑棋第 3、5、7 手如何连成可继续扩张的进攻形。');
    updateCounts();
    renderMoveList();
    draw();
  }


  function playStoneSound(player, options = {}) {
    if (!soundToggle.checked) {
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      return;
    }

    try {
      audioContext = audioContext || new AudioContextClass();
      if (audioContext.state === 'suspended') {
        audioContext.resume().catch(() => {});
      }

      const now = audioContext.currentTime;
      const master = audioContext.createGain();
      const compressor = audioContext.createDynamicsCompressor();
      master.gain.setValueAtTime(options.preview ? 0.32 : 0.48, now);
      compressor.threshold.setValueAtTime(-18, now);
      compressor.knee.setValueAtTime(18, now);
      compressor.ratio.setValueAtTime(4, now);
      compressor.attack.setValueAtTime(0.002, now);
      compressor.release.setValueAtTime(0.09, now);
      master.connect(compressor);
      compressor.connect(audioContext.destination);

      playClickTransient(now, master, player);
      playWoodResonance(now + 0.004, master, player, options.preview);
      playStoneBody(now + 0.002, master, player, options.preview);
    } catch (error) {
      soundToggle.checked = false;
    }
  }

  function playClickTransient(startTime, destination, player) {
    const duration = 0.026;
    const bufferSize = Math.max(1, Math.floor(audioContext.sampleRate * duration));
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);

    for (let index = 0; index < bufferSize; index += 1) {
      const progress = index / bufferSize;
      const envelope = Math.exp(-progress * 24);
      const tick = Math.sin(progress * Math.PI * 120 + (player === BLACK ? 0.15 : 0.55));
      data[index] = (Math.random() * 2 - 1) * envelope * 0.72 + tick * envelope * 0.2;
    }

    const source = audioContext.createBufferSource();
    const highpass = audioContext.createBiquadFilter();
    const bandpass = audioContext.createBiquadFilter();
    const gain = audioContext.createGain();

    highpass.type = 'highpass';
    highpass.frequency.setValueAtTime(850, startTime);
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(player === BLACK ? 2450 : 2850, startTime);
    bandpass.Q.setValueAtTime(1.4, startTime);
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(0.42, startTime + 0.003);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    source.buffer = buffer;
    source.connect(highpass);
    highpass.connect(bandpass);
    bandpass.connect(gain);
    gain.connect(destination);
    source.start(startTime);
    source.stop(startTime + duration + 0.01);
  }

  function playWoodResonance(startTime, destination, player, preview) {
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const frequencies = player === BLACK ? [620, 930, 1320] : [700, 1040, 1480];
    const duration = preview ? 0.07 : 0.12;

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2600, startTime);
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(preview ? 0.08 : 0.16, startTime + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);
    gain.connect(filter);
    filter.connect(destination);

    frequencies.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const toneGain = audioContext.createGain();
      oscillator.type = index === 0 ? 'triangle' : 'sine';
      oscillator.frequency.setValueAtTime(frequency, startTime);
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.92, startTime + duration);
      toneGain.gain.setValueAtTime(1 / (index + 1.4), startTime);
      oscillator.connect(toneGain);
      toneGain.connect(gain);
      oscillator.start(startTime);
      oscillator.stop(startTime + duration + 0.02);
    });
  }

  function playStoneBody(startTime, destination, player, preview) {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const base = player === BLACK ? 205 : 238;
    const duration = preview ? 0.06 : 0.095;

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(base, startTime);
    oscillator.frequency.exponentialRampToValueAtTime(base * 0.72, startTime + duration);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(520, startTime);
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.exponentialRampToValueAtTime(preview ? 0.035 : 0.075, startTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(destination);
    oscillator.start(startTime);
    oscillator.stop(startTime + duration + 0.02);
  }

  function chooseAiMove(level, player) {
    const candidates = getCandidateMoves(2);
    if (!candidates.length) {
      return { row: 7, col: 7 };
    }

    const opponent = opposite(player);
    const winning = candidates.find((move) => wouldWin(move.row, move.col, player));
    if (winning) {
      return winning;
    }

    const blocking = candidates.find((move) => wouldWin(move.row, move.col, opponent));
    if (blocking) {
      return blocking;
    }

    if (level === 'easy') {
      const nearCenter = candidates.filter((move) => distanceToCenter(move) <= 5);
      return randomItem(nearCenter.length ? nearCenter : candidates);
    }

    const scored = candidates.map((move) => ({
      ...move,
      score: scoreMove(move.row, move.col, player, opponent, level)
    })).sort((a, b) => b.score - a.score || distanceToCenter(a) - distanceToCenter(b));

    if (level === 'hard') {
      return chooseHardMove(scored, player, opponent);
    }

    return scored[0];
  }

  function chooseHardMove(scored, player, opponent) {
    const shortlist = scored.slice(0, 10);
    let best = shortlist[0];
    let bestValue = -Infinity;

    for (const move of shortlist) {
      board[move.row][move.col] = player;
      const reply = getCandidateMoves(1)
        .map((candidate) => scoreMove(candidate.row, candidate.col, opponent, player, 'medium'))
        .sort((a, b) => b - a)[0] || 0;
      board[move.row][move.col] = EMPTY;
      const value = move.score - reply * 0.72;
      if (value > bestValue) {
        bestValue = value;
        best = move;
      }
    }

    return best;
  }

  function getCandidateMoves(radius) {
    if (!moves.length) {
      return [{ row: 7, col: 7 }];
    }

    const seen = new Set();
    const candidates = [];
    for (const move of moves) {
      for (let row = move.row - radius; row <= move.row + radius; row += 1) {
        for (let col = move.col - radius; col <= move.col + radius; col += 1) {
          const key = `${row},${col}`;
          if (isInside(row, col) && board[row][col] === EMPTY && !seen.has(key)) {
            seen.add(key);
            candidates.push({ row, col });
          }
        }
      }
    }

    return candidates.sort((a, b) => distanceToCenter(a) - distanceToCenter(b));
  }

  function scoreMove(row, col, player, opponent, level) {
    board[row][col] = player;
    const attack = evaluatePoint(row, col, player);
    board[row][col] = EMPTY;

    board[row][col] = opponent;
    const defense = evaluatePoint(row, col, opponent);
    board[row][col] = EMPTY;

    const centerBonus = Math.max(0, 14 - distanceToCenter({ row, col })) * 8;
    const defenseWeight = level === 'hard' ? 1.08 : 0.92;
    return attack * 1.16 + defense * defenseWeight + centerBonus;
  }

  function evaluatePoint(row, col, player) {
    let total = 0;
    for (const [dr, dc] of DIRECTIONS) {
      const forward = countDirection(row, col, dr, dc, player);
      const backward = countDirection(row, col, -dr, -dc, player);
      const count = forward.count + backward.count + 1;
      const open = forward.open + backward.open;
      total += patternScore(count, open);
    }
    return total;
  }

  function patternScore(count, open) {
    if (count >= 5) return WIN_SCORE;
    if (count === 4 && open === 2) return 1000000;
    if (count === 4 && open === 1) return 120000;
    if (count === 3 && open === 2) return 36000;
    if (count === 3 && open === 1) return 5000;
    if (count === 2 && open === 2) return 1400;
    if (count === 2 && open === 1) return 260;
    if (count === 1 && open === 2) return 50;
    return 8;
  }

  function countDirection(row, col, dr, dc, player) {
    let count = 0;
    let nextRow = row + dr;
    let nextCol = col + dc;
    while (isInside(nextRow, nextCol) && board[nextRow][nextCol] === player) {
      count += 1;
      nextRow += dr;
      nextCol += dc;
    }
    const open = isInside(nextRow, nextCol) && board[nextRow][nextCol] === EMPTY ? 1 : 0;
    return { count, open };
  }

  function wouldWin(row, col, player) {
    board[row][col] = player;
    const won = findWinningLine(row, col, player).length >= 5;
    board[row][col] = EMPTY;
    return won;
  }

  function findWinningLine(row, col, player) {
    for (const [dr, dc] of DIRECTIONS) {
      const line = [{ row, col }];
      collectLine(line, row, col, dr, dc, player);
      collectLine(line, row, col, -dr, -dc, player);
      if (line.length >= 5) {
        return line.sort((a, b) => a.row - b.row || a.col - b.col);
      }
    }
    return [];
  }

  function collectLine(line, row, col, dr, dc, player) {
    let nextRow = row + dr;
    let nextCol = col + dc;
    while (isInside(nextRow, nextCol) && board[nextRow][nextCol] === player) {
      line.push({ row: nextRow, col: nextCol });
      nextRow += dr;
      nextCol += dc;
    }
  }

  function draw() {
    const palette = themePalettes[themeSelect.value];
    const size = layout.size;
    context.clearRect(0, 0, size, size);
    drawBoardBackground(palette, size);
    drawGrid(palette);
    drawStones();
    drawHint();
    drawWinningLine();
  }

  function drawBoardBackground(palette, size) {
    const gradient = context.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, palette.boardA);
    gradient.addColorStop(1, palette.boardB);
    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);

    context.save();
    context.globalAlpha = 0.14;
    for (let index = 0; index < 34; index += 1) {
      const y = (index * 31) % size;
      context.beginPath();
      context.moveTo(0, y);
      context.bezierCurveTo(size * 0.25, y + 18, size * 0.65, y - 22, size, y + 8);
      context.strokeStyle = index % 2 ? '#fff' : '#3a220d';
      context.lineWidth = 1.2;
      context.stroke();
    }
    context.restore();
  }

  function drawGrid(palette) {
    const { padding, cell } = layout;
    context.save();
    context.strokeStyle = palette.line;
    context.lineWidth = Math.max(1, layout.size / 720);
    context.shadowColor = 'rgba(255,255,255,.22)';
    context.shadowBlur = 1;

    for (let index = 0; index < SIZE; index += 1) {
      const point = padding + index * cell;
      drawLine(padding, point, padding + cell * (SIZE - 1), point);
      drawLine(point, padding, point, padding + cell * (SIZE - 1));
    }

    context.fillStyle = palette.star;
    [3, 7, 11].forEach((row) => {
      [3, 7, 11].forEach((col) => {
        const center = gridToPixel(row, col);
        context.beginPath();
        context.arc(center.x, center.y, Math.max(3.5, cell * 0.08), 0, Math.PI * 2);
        context.fill();
      });
    });
    context.restore();
  }

  function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

  function drawStones() {
    const visibleMoves = replayIndex === null ? moves : moves.slice(0, replayIndex);
    visibleMoves.forEach((move, index) => {
      const point = gridToPixel(move.row, move.col);
      drawStone(point.x, point.y, move.player, index + 1, isSameMove(move, lastMove) && replayIndex === null);
    });
  }

  function drawStone(x, y, player, order, highlight) {
    const radius = layout.cell * 0.39;
    context.save();
    context.shadowColor = 'rgba(0, 0, 0, 0.32)';
    context.shadowBlur = radius * 0.55;
    context.shadowOffsetY = radius * 0.18;

    const gradient = context.createRadialGradient(x - radius * 0.35, y - radius * 0.42, radius * 0.08, x, y, radius);
    if (player === BLACK) {
      gradient.addColorStop(0, '#8d99a8');
      gradient.addColorStop(0.24, '#303946');
      gradient.addColorStop(0.72, '#090d14');
      gradient.addColorStop(1, '#010204');
    } else {
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.34, '#f8fafc');
      gradient.addColorStop(0.74, '#d9e0ea');
      gradient.addColorStop(1, '#aeb8c7');
    }

    context.fillStyle = gradient;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
    context.shadowColor = 'transparent';

    context.fillStyle = player === BLACK ? 'rgba(255,255,255,0.62)' : 'rgba(255,255,255,0.86)';
    context.beginPath();
    context.ellipse(x - radius * 0.28, y - radius * 0.33, radius * 0.22, radius * 0.12, -0.5, 0, Math.PI * 2);
    context.fill();

    if (highlight) {
      context.strokeStyle = '#fbbf24';
      context.lineWidth = 3;
      context.beginPath();
      context.arc(x, y, radius + 4, 0, Math.PI * 2);
      context.stroke();
    }

    if (replayIndex !== null || layout.size > 520) {
      context.fillStyle = player === BLACK ? 'rgba(255,255,255,0.72)' : 'rgba(15,23,42,0.58)';
      context.font = `${Math.max(9, radius * 0.62)}px -apple-system, BlinkMacSystemFont, sans-serif`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(String(order), x, y + 1);
    }

    context.restore();
  }

  function drawHint() {
    if (!hintMove || replayIndex !== null) {
      return;
    }

    const point = gridToPixel(hintMove.row, hintMove.col);
    context.save();
    context.strokeStyle = '#22c55e';
    context.lineWidth = 3;
    context.setLineDash([8, 6]);
    context.beginPath();
    context.arc(point.x, point.y, layout.cell * 0.33, 0, Math.PI * 2);
    context.stroke();
    context.restore();
  }

  function drawWinningLine() {
    if (!winningLine.length || replayIndex !== null) {
      return;
    }

    const first = gridToPixel(winningLine[0].row, winningLine[0].col);
    const last = gridToPixel(winningLine[winningLine.length - 1].row, winningLine[winningLine.length - 1].col);
    context.save();
    context.strokeStyle = '#ef4444';
    context.lineWidth = Math.max(5, layout.cell * 0.12);
    context.lineCap = 'round';
    context.shadowColor = 'rgba(239,68,68,.45)';
    context.shadowBlur = 12;
    drawLine(first.x, first.y, last.x, last.y);
    context.restore();
  }

  function renderMoveList() {
    if (!moves.length) {
      moveList.innerHTML = '<li>暂无落子。</li>';
      return;
    }

    moveList.innerHTML = moves.map((move, index) => {
      const active = replayIndex !== null && index === replayIndex - 1 ? ' class="active"' : '';
      return `<li${active}>${playerName(move.player)}：${coordinateName(move)}（第 ${index + 1} 手）</li>`;
    }).join('');
  }

  function updateStatus(title, text) {
    statusTitle.textContent = title;
    statusText.textContent = text;
    turnBadge.className = `stone-badge ${currentPlayer === BLACK ? 'black' : 'white'}`;
  }

  function updateCounts() {
    blackCount.textContent = String(moves.filter((move) => move.player === BLACK).length);
    whiteCount.textContent = String(moves.filter((move) => move.player === WHITE).length);
  }

  function updateMatchTitle() {
    difficultySelect.disabled = !isAiMode();
    matchTitle.textContent = `${isAiMode() ? '人机对战' : '双人对战'}${isAiMode() ? ` · ${difficultyName()}` : ''}`;
  }

  function nextStatusText() {
    if (isAiTurn()) {
      return `AI 执白，难度：${difficultyName()}。`;
    }
    return isAiMode() ? '你执黑，注意先堵对方四连威胁。' : '点击空白交叉点落子。';
  }

  function explainMove(move, player) {
    const opponent = opposite(player);
    if (wouldWin(move.row, move.col, player)) return '这一步可以直接形成五连。';
    if (wouldWin(move.row, move.col, opponent)) return '这里能挡住对方下一手成五。';
    board[move.row][move.col] = player;
    const attack = evaluatePoint(move.row, move.col, player);
    board[move.row][move.col] = EMPTY;
    if (attack > 30000) return '这一步能制造活三/冲四威胁。';
    return '靠近已有棋子并兼顾中心控制。';
  }

  function gridToPixel(row, col) {
    return {
      x: layout.padding + col * layout.cell,
      y: layout.padding + row * layout.cell
    };
  }

  function coordinateName(move) {
    return `${String.fromCharCode(65 + move.col)}${move.row + 1}`;
  }

  function playerName(player) {
    return player === BLACK ? '黑棋' : '白棋';
  }

  function difficultyName() {
    return difficultySelect.options[difficultySelect.selectedIndex].text.split('：')[0];
  }

  function isAiMode() {
    return modeSelect.value === 'ai';
  }

  function isAiTurn() {
    return isAiMode() && currentPlayer === WHITE && !gameOver;
  }

  function opposite(player) {
    return player === BLACK ? WHITE : BLACK;
  }

  function isInside(row, col) {
    return row >= 0 && row < SIZE && col >= 0 && col < SIZE;
  }

  function isSameMove(a, b) {
    return a && b && a.row === b.row && a.col === b.col && a.player === b.player;
  }

  function distanceToCenter(move) {
    return Math.hypot(move.row - 7, move.col - 7);
  }

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
})();
