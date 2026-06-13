const fields = [
  '日期',
  '群昵称',
  '起跑时间',
  '距离(km)',
  '配速(分:秒)',
  '运动时长(时:分:秒)',
  '平均步频(步/分钟)',
  '平均步幅(cm)',
  '平均心率(bpm)',
  '打卡次数',
  '打卡图片',
  '数据状态'
];

const state = {
  files: [],
  rows: [],
  ocrLogs: []
};

const hasDocument = typeof document !== 'undefined';
const imageInput = hasDocument ? document.querySelector('#imageInput') : null;
const startButton = hasDocument ? document.querySelector('#startButton') : null;
const downloadButton = hasDocument ? document.querySelector('#downloadButton') : null;
const clearButton = hasDocument ? document.querySelector('#clearButton') : null;
const addBlankButton = hasDocument ? document.querySelector('#addBlankButton') : null;
const statusText = hasDocument ? document.querySelector('#statusText') : null;
const hintText = hasDocument ? document.querySelector('#hintText') : null;
const progressBar = hasDocument ? document.querySelector('#progressBar') : null;
const tableBody = hasDocument ? document.querySelector('#tableBody') : null;
const ocrText = hasDocument ? document.querySelector('#ocrText') : null;

if (hasDocument) {
  imageInput.addEventListener('change', () => {
    state.files = Array.from(imageInput.files || []);
    if (!state.files.length) {
      setStatus('请先选择 Keep 等运动 APP 的跑步打卡截图。', '支持 JPG、PNG、WebP 等常见图片格式。', 0);
      return;
    }

    setStatus(`已选择 ${state.files.length} 张截图。`, '点击“开始 OCR 解析”后会批量生成导入结果。', 0);
  });

  startButton.addEventListener('click', runOcrBatch);
  downloadButton.addEventListener('click', downloadExcel);
  clearButton.addEventListener('click', clearAll);
  addBlankButton.addEventListener('click', () => {
    addRow(createEmptyRow('手工新增'));
    renderRows();
    updateDownloadState();
  });
}

async function runOcrBatch() {
  if (!state.files.length) {
    setStatus('还没有选择图片。', '请先点击“选择截图”。', 0);
    return;
  }

  if (!window.Tesseract) {
    setStatus('OCR 组件加载失败。', '请检查网络后刷新页面，或先新增空白行手工录入。', 0);
    return;
  }

  startButton.disabled = true;
  const existingCount = state.rows.length;
  renderRows();

  for (let index = 0; index < state.files.length; index += 1) {
    const file = state.files[index];
    const baseProgress = index / state.files.length;
    setStatus(`正在识别 ${index + 1}/${state.files.length}：${file.name}`, '首次使用会下载 OCR 语言模型，请稍等。', baseProgress * 100);

    try {
      const text = await recognizeRunningImage(file, (partialProgress) => {
        const progress = (baseProgress + partialProgress / state.files.length) * 100;
        setProgress(progress);
      });
      const row = parseRunningRecord(text, file);
      addRow(row);
      state.ocrLogs.push(`### ${file.name}\n${text.trim() || '未识别到文字'}`);
    } catch (error) {
      const row = createEmptyRow(file.name);
      row['打卡图片'] = file.name;
      row['数据状态'] = '识别异常';
      addRow(row);
      state.ocrLogs.push(`### ${file.name}\nOCR 失败：${error.message || error}`);
    }

    renderRows();
  }

  startButton.disabled = false;
  updateDownloadState();
  setStatus(`已追加 ${state.files.length} 张截图解析结果，当前共 ${state.rows.length} 行。`, '请在表格中核对并修正后下载 Excel；点击“清空”才会删除已有结果。', 100);
  ocrText.textContent = state.ocrLogs.join('\n\n') || '暂无 OCR 原文。';
  state.files = [];
  imageInput.value = '';

  if (!existingCount && !state.rows.length) {
    renderRows();
  }
}

async function recognizeRunningImage(file, onProgress) {
  const targets = await createRecognitionTargets(file);
  const texts = [];

  for (let index = 0; index < targets.length; index += 1) {
    const target = targets[index];
    const result = await Tesseract.recognize(target.source, 'chi_sim+eng', {
      logger: (message) => {
        if (message.status === 'recognizing text' && typeof message.progress === 'number') {
          onProgress((index + message.progress) / targets.length);
        }
      }
    });
    const text = result?.data?.text?.trim();
    if (text) {
      texts.push(`--- ${target.label} ---\n${text}`);
    }
  }

  return texts.join('\n');
}

async function createRecognitionTargets(file) {
  const targets = [{ label: '完整截图', source: file }];

  try {
    const bitmap = await createImageBitmap(file);
    if (bitmap.height > bitmap.width * 1.4) {
      const topCrop = await cropImageForOcr(bitmap, 0, 0, bitmap.width, Math.round(bitmap.height * 0.30), 2);
      const summaryCrop = await cropImageForOcr(bitmap, 0, Math.round(bitmap.height * 0.16), bitmap.width, Math.round(bitmap.height * 0.56), 2);
      const cardCrop = await cropImageForOcr(bitmap, 0, Math.round(bitmap.height * 0.42), bitmap.width, Math.round(bitmap.height * 0.50), 2);
      targets.push({ label: '顶部日期区域', source: topCrop });
      targets.push({ label: '主体数据区域', source: summaryCrop });
      targets.push({ label: '运动数据卡片', source: cardCrop });
    }
    bitmap.close?.();
  } catch (error) {
    console.warn('图片裁剪预处理失败，将仅识别完整截图。', error);
  }

  return targets;
}

function cropImageForOcr(bitmap, sx, sy, sw, sh, scale = 2) {
  const canvas = document.createElement('canvas');
  canvas.width = sw * scale;
  canvas.height = sh * scale;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  context.drawImage(bitmap, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let index = 0; index < data.length; index += 4) {
    const gray = data[index] * 0.299 + data[index + 1] * 0.587 + data[index + 2] * 0.114;
    const contrast = Math.max(0, Math.min(255, (gray - 128) * 1.8 + 128));
    data[index] = contrast;
    data[index + 1] = contrast;
    data[index + 2] = contrast;
  }
  context.putImageData(imageData, 0, 0);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), 'image/png');
  });
}

function parseRunningRecord(text, file) {
  const normalized = normalizeText(text);
  const compact = normalized.replace(/[ \t]/g, '');
  const lines = normalized.split('\n').map((line) => line.trim()).filter(Boolean);
  const metricGrid = extractMetricGrid(lines);
  const row = createEmptyRow(file.name);

  row['日期'] = pickDate(normalized) || formatDate(new Date(file.lastModified || Date.now()));
  row['群昵称'] = pickNickname(lines) || '';
  row['起跑时间'] = pickStartTime(normalized) || '';
  row['距离(km)'] = metricGrid.distance ? Number(metricGrid.distance).toFixed(2) : pickDistanceFromLines(lines) || pickDistance(normalized, compact) || '';
  row['运动时长(时:分:秒)'] = formatDurationToken(metricGrid.duration) || pickDurationFromLines(lines) || pickDuration(normalized, compact) || '';
  row['配速(分:秒)'] = formatPaceToken(metricGrid.pace, true) || pickPaceFromLines(lines) || pickPace(normalized, compact) || derivePace(row['距离(km)'], row['运动时长(时:分:秒)']) || '';
  row['平均步频(步/分钟)'] = metricGrid.cadence || pickCadenceFromLines(lines) || pickNumberByLabels(compact, ['平均步频', '平均步数', '步频']) || '';
  row['平均步幅(cm)'] = formatStrideToken(metricGrid.stride) || pickStrideFromLines(lines) || pickStride(compact) || '';
  row['平均心率(bpm)'] = metricGrid.heartRate || pickHeartRateFromLines(lines) || pickNumberByLabels(compact, ['平均心率', '心率']) || '';
  row['打卡次数'] = pickCheckins(compact) || '';
  row['打卡图片'] = file.name;

  const missingRequired = ['日期', '群昵称', '起跑时间', '距离(km)', '配速(分:秒)', '运动时长(时:分:秒)']
    .filter((field) => !row[field]);
  row['数据状态'] = missingRequired.length >= 3 ? '识别异常' : missingRequired.length ? '待确认' : '已同步';

  return row;
}

function normalizeText(text) {
  return (text || '')
    .replace(/[，。]/g, ' ')
    .replace(/[：]/g, ':')
    .replace(/[｜|]/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

function pickDate(text) {
  const full = text.match(/(20\d{2})\s*[.\-/年]\s*(\d{1,2})\s*[.\-/月]\s*(\d{1,2})\s*日?/);
  if (full) {
    return `${full[1]}-${pad(full[2])}-${pad(full[3])}`;
  }

  const short = text.match(/(?:日期|运动日期|完成于)\s*(\d{1,2})\s*[.\-/月]\s*(\d{1,2})\s*日?/)
    || text.match(/(\d{1,2})\s*月\s*(\d{1,2})\s*日/);
  if (short) {
    return `${new Date().getFullYear()}-${pad(short[1])}-${pad(short[2])}`;
  }

  return '';
}

function pickNickname(lines) {
  const labelled = lines.join('\n').match(/(?:群昵称|昵称|用户|姓名|跑者|ID)\s*[:：]?\s*([^\n]{2,24})/i);
  if (labelled) {
    return cleanNickname(labelled[1]);
  }

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const compact = compactLine(line);
    const corosName = compact.match(/^距离([^\d公里千米km].{1,16})$/i)?.[1];
    if (corosName && !/(平均|配速|心率|步频|步幅)/.test(corosName)) {
      return cleanNickname(corosName);
    }

    const nextLine = cleanNickname(lines[index + 1] || '');
    const nextCompact = compactLine(nextLine);
    if (compact === '距离'
      && nextCompact.length >= 2
      && nextCompact.length <= 16
      && !/\d|公里|千米|km|平均|配速|心率|步频|步幅/i.test(nextCompact)) {
      return nextLine;
    }
  }

  const ignored = /(keep|coros|距离|里程|热量|卡路里|步数|爬升|下降|路线|公里|配速|速度|步频|步幅|心率|分钟|小时|打卡|户外跑|跑步|越野跑|运动|轨迹|日期|时间|分段|总计|圈数|详情|图表|bpm|km)/i;
  const firstMetricIndex = lines.findIndex((line) => ignored.test(compactLine(line)));
  const candidateLines = firstMetricIndex >= 0 ? lines.slice(0, firstMetricIndex) : lines;
  const candidate = candidateLines.find((line) => {
    const cleaned = cleanNickname(line);
    const cleanedCompact = cleaned.replace(/[ \t]/g, '');
    return cleaned.length >= 2
      && cleaned.length <= 24
      && !ignored.test(cleanedCompact)
      && !/^20\d{2}年\d{1,2}月\d{1,2}日/.test(cleanedCompact)
      && !/^\d/.test(cleanedCompact)
      && !/\d/.test(cleanedCompact)
      && !/[45]G|G\d/i.test(cleanedCompact)
      && !/\d{1,2}:?\d{2}:?\d{2}/.test(line.replace(/\s/g, ''))
      && !/[,，]/.test(line)
      && !/(千卡|干卡|kcal|大卡)/i.test(cleanedCompact)
      && !/[<>=@#%°℃]/.test(cleaned)
      && !/^[-—一\sA-Za-z]{1,6}$/.test(cleaned)
      && !/^[\d\s:：/\\.\-°℃%A-Za-z]+$/.test(cleaned)
      && /[\u4e00-\u9fa5a-zA-Z]/.test(cleaned);
  });

  return candidate ? cleanNickname(candidate) : '';
}

function extractMetricGrid(lines) {
  const metrics = {};

  lines.forEach((line, index) => {
    const labelLine = lines[index + 1] || '';
    const labelCompact = labelLine.replace(/[ \t]/g, '');
    const lineCompact = line.replace(/[ \t]/g, '');
    const values = extractMetricValues(line);

    if (values.length < 2 || /[\u4e00-\u9fa5]/.test(lineCompact) || /20\d{2}/.test(lineCompact)) {
      return;
    }

    if (/距离.*平均配[速違]|平均配[速違].*距离/.test(labelCompact)) {
      metrics.distance = chooseDecimal(values) || metrics.distance;
      metrics.pace = values[2] || values[values.length - 1] || metrics.pace;
    }

    if (/运动时间|运动时长|总时长|总时间/.test(labelCompact) && /平均配[速違]/.test(labelCompact)) {
      metrics.duration = values.find((value) => /\d{1,2}[:：]\d{2}[:：]\d{2}/.test(value)) || metrics.duration;
      const durationIndex = values.findIndex((value) => /\d{1,2}[:：]\d{2}[:：]\d{2}/.test(value));
      metrics.pace = values[durationIndex + 1] || values.find((value) => /^\d{3,4}$/.test(value)) || metrics.pace;
    }

    if (/(总时长|总时间|运动时长|用时).*平均心率|平均心率.*(总时长|总时间|运动时长|用时)/.test(labelCompact)) {
      metrics.duration = values.find((value) => /\d{1,2}[:：]\d{2}[:：]\d{2}/.test(value)) || metrics.duration;
      metrics.heartRate = chooseInteger(values.slice(-1)) || metrics.heartRate;
    }

    if (/平均心率/.test(labelCompact) && !/(总时长|总时间|运动时长|用时)/.test(labelCompact)) {
      const heartRateCandidate = values.find((value, valueIndex) => {
        const numericValue = Number(value);
        return valueIndex > 0 && Number.isFinite(numericValue) && numericValue >= 60 && numericValue <= 230;
      });
      metrics.heartRate = heartRateCandidate || metrics.heartRate;
    }

    if (/平均步幅.*平均步频|平均步频.*平均步幅/.test(labelCompact)) {
      metrics.stride = chooseDecimal(values) || metrics.stride;
      metrics.cadence = chooseInteger(values.slice(-1)) || metrics.cadence;
    }
  });

  return metrics;
}

function extractMetricValues(line) {
  return Array.from(line.matchAll(/\d{1,2}[:：]\d{2}[:：]\d{2}|\d{3,4}(?=\s*[\"″'′]?\s*m)|\d{1,4}(?:\.\d{1,3})?|--/gi))
    .map((match) => match[0].replace('：', ':'));
}

function chooseDecimal(values) {
  return values.find((value) => /^\d{1,3}\.\d{1,3}$/.test(value)) || '';
}

function chooseInteger(values) {
  return values.find((value) => /^\d{1,3}$/.test(value)) || '';
}

function formatPaceToken(value, allowCompactNumber = false) {
  if (!value) {
    return '';
  }

  const source = String(value);
  const quoted = source.match(/(\d{1,2})\s*[\'′’‘`´分]\s*(\d{2})/)
    || source.match(/\b(\d{1,2})(\d{2})\s*[\"″”]\s*(?:m|km|公里)?/i)
    || (allowCompactNumber ? pickCompactPaceMatch(source) : null);
  if (!quoted) {
    return '';
  }

  return `${Number(quoted[1])}分${pad(quoted[2])}秒`;
}

function pickCompactPaceMatch(source) {
  const tokens = String(source).match(/\b\d{3,4}\b/g) || [];
  for (const token of tokens) {
    const minute = Number(token.slice(0, -2));
    const second = Number(token.slice(-2));
    if (minute >= 2 && minute <= 30 && second < 60) {
      return [token, String(minute), pad(second)];
    }
  }

  return null;
}

function formatDurationToken(value) {
  const match = String(value || '').match(/(\d{1,2})[:：](\d{2})[:：](\d{2})/);
  return match ? `${Number(match[1])}时${match[2]}分${match[3]}秒` : '';
}

function formatStrideToken(value) {
  if (!value) {
    return '';
  }

  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) {
    return '';
  }

  return numericValue <= 3 ? (numericValue * 100).toFixed(2) : numericValue.toFixed(2);
}

function compactLine(line) {
  return String(line || '').replace(/[ \t]/g, '');
}

function lineHasLabel(line, labels) {
  const compact = compactLine(line);
  return labels.some((label) => compact.includes(label));
}

function firstNumber(value) {
  return String(value || '').match(/\d{1,4}(?:\.\d{1,3})?/)?.[0] || '';
}

function lastNumber(value) {
  const matches = String(value || '').match(/\d{1,4}(?:\.\d{1,3})?/g) || [];
  return matches[matches.length - 1] || '';
}

function pickNumberByLabelsFromLines(lines, labels) {
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!lineHasLabel(line, labels)) {
      continue;
    }

    const compact = compactLine(line);
    for (const label of labels) {
      const labelIndex = compact.indexOf(label);
      if (labelIndex < 0) {
        continue;
      }

      const before = compact.slice(0, labelIndex);
      const after = compact.slice(labelIndex + label.length);
      const sameLineAfter = firstNumber(after);
      if (sameLineAfter) {
        return sameLineAfter;
      }

      const sameLineBefore = lastNumber(before);
      if (sameLineBefore) {
        return sameLineBefore;
      }

      const nextLineValue = firstNumber(lines[index + 1] || '');
      const previousLine = lines[index - 1] || '';
      const previousLineValue = lastNumber(previousLine);
      if (/bpm|次\/分钟|次每分钟/i.test(previousLine) && previousLineValue) {
        return previousLineValue;
      }

      if (nextLineValue) {
        return nextLineValue;
      }

      if (previousLineValue) {
        return previousLineValue;
      }
    }
  }

  return '';
}

function numberInRange(value, min, max) {
  const numericValue = Number(String(value || '').replace(/,/g, ''));
  return Number.isFinite(numericValue) && numericValue >= min && numericValue <= max;
}

function compactWindow(lines, start, end) {
  return lines
    .slice(Math.max(0, start), Math.min(lines.length, end))
    .map((line) => compactLine(line).replace(/,/g, ''))
    .join('\n');
}

function pickUnitNumberNearLabel(lines, labels, unitPatterns, min, max) {
  for (let index = 0; index < lines.length; index += 1) {
    if (!lineHasLabel(lines[index], labels)) {
      continue;
    }

    const window = compactWindow(lines, index, index + 4);
    for (const pattern of unitPatterns) {
      const match = window.match(pattern);
      if (match && numberInRange(match[1], min, max)) {
        return String(match[1]).replace(/,/g, '');
      }
    }
  }

  return '';
}

function pickCadenceFromLines(lines) {
  return pickUnitNumberNearLabel(lines, ['平均步频', '平均步数', '步频'], [
    /(\d{2,3}(?:\.\d{1,2})?)步(?:\/|／|\[|每)?分钟/,
    /(\d{2,3}(?:\.\d{1,2})?)(?:spm|步\/min)/i
  ], 100, 260) || pickNumberByLabelsFromLines(lines, ['平均步频', '平均步数', '步频']);
}

function pickHeartRateFromLines(lines) {
  return pickUnitNumberNearLabel(lines, ['平均心率', '心率'], [
    /(\d{2,3})(?:bpm|次(?:\/|／|\[|每)?分钟)/i,
    /(?:平均心率|心率)[^\d\n]{0,8}(\d{2,3})/,
    /(\d{2,3})[^\d\n]{0,6}(?:平均心率|心率)/
  ], 60, 230) || pickNumberByLabelsFromLines(lines, ['平均心率', '心率']);
}

function pickStandaloneDistanceFromLines(lines) {
  const dateIndex = lines.findIndex((line) => /20\d{2}\s*[.\-/年]\s*\d{1,2}\s*[.\-/月]\s*\d{1,2}/.test(line));
  const start = dateIndex >= 0 ? dateIndex + 1 : 0;

  for (let index = start; index < lines.length; index += 1) {
    const line = lines[index];
    if (/(运动|配速|速度|步频|步幅|心率|热量|路线|累计|步数|时间|时长|分段|公里\s*[/／]?\s*(?:小时|小|h))/i.test(compactLine(line))) {
      continue;
    }

    if (/[A-Za-z\u4e00-\u9fa5]/.test(line) || /[:：%℃]/.test(line)) {
      continue;
    }

    const matches = line.match(/\d{1,3}\.\d{1,3}/g) || [];
    if (matches.length !== 1) {
      continue;
    }

    const value = Number(matches[0]);
    if (Number.isFinite(value) && value >= 1 && value <= 100) {
      return value.toFixed(2);
    }
  }

  return '';
}

function pickDistanceFromLines(lines) {
  for (const line of lines) {
    const compact = compactLine(line);
    const labelIndex = ['距离', '里程', '总里程']
      .map((label) => compact.indexOf(label))
      .filter((index) => index >= 0)
      .sort((a, b) => a - b)[0];
    if (labelIndex !== undefined) {
      const before = lastNumber(compact.slice(0, labelIndex));
      if (before) {
        return Number(before).toFixed(2);
      }

      const after = firstNumber(compact.slice(labelIndex));
      if (after) {
        return Number(after).toFixed(2);
      }

      const previous = lastNumber(lines[lines.indexOf(line) - 1] || '');
      const next = firstNumber(lines[lines.indexOf(line) + 1] || '');
      const adjacent = previous || next;
      if (adjacent) {
        return Number(adjacent).toFixed(2);
      }
    }
  }

  const standaloneDistance = pickStandaloneDistanceFromLines(lines);
  if (standaloneDistance) {
    return standaloneDistance;
  }

  const unitLine = lines.find((line) => /\d{1,3}(?:\.\d{1,3})?\s*(?:公里|千米|km)(?!\s*\/\s*h|\s*\/\s*小时|\s*每小时|\s*\/\s*时)/i.test(line));
  if (unitLine) {
    const value = unitLine.match(/(\d{1,3}(?:\.\d{1,3})?)\s*(?:公里|千米|km)(?!\s*\/\s*h|\s*\/\s*小时|\s*每小时|\s*\/\s*时)/i)?.[1];
    if (value) {
      return Number(value).toFixed(2);
    }
  }

  const value = pickNumberByLabelsFromLines(lines, ['距离', '里程', '总里程']);
  return value ? Number(value).toFixed(2) : '';
}

function pickPaceFromLines(lines) {
  const paceLabels = ['平均配速', '配速'];
  for (const line of lines) {
    const spacedPace = line.match(/(?:^|[^\d.])(\d{1,2})\s+([0-5]\d)\s*(?=\/\s*(?:公里|km))/i)
      || line.match(/(?:^|[^\d.])(\d{3,4})\s*(?=\/\s*(?:公里|km))/i);
    if (spacedPace) {
      if (spacedPace[2]) {
        return `${Number(spacedPace[1])}分${pad(spacedPace[2])}秒`;
      }
      const token = spacedPace[1];
      return `${Number(token.slice(0, -2))}分${pad(token.slice(-2))}秒`;
    }
  }

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const currentHasLabel = lineHasLabel(line, paceLabels);
    const previousHasLabel = lineHasLabel(lines[index - 1] || '', paceLabels);
    const nextHasLabel = lineHasLabel(lines[index + 1] || '', paceLabels);
    const isMetricValueLine = extractMetricValues(line).length >= 2 && !/[\u4e00-\u9fa5]/.test(line) && !/20\d{2}/.test(line);

    if (!currentHasLabel && !previousHasLabel && !(nextHasLabel && isMetricValueLine)) {
      continue;
    }

    const candidates = currentHasLabel ? [line, lines[index + 1] || '', lines[index - 1] || ''] : [line];
    for (const candidate of candidates) {
      const pace = formatPaceToken(candidate);
      if (pace) {
        return pace;
      }
    }
  }

  return '';
}

function pickDurationFromLines(lines) {
  const durationLabels = ['运动时长', '运动时间', '用时', '时长', '总用时', '总时长', '总时间'];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!lineHasLabel(line, durationLabels)) {
      continue;
    }

    const candidates = [line, lines[index - 1] || '', lines[index + 1] || ''];
    for (const candidate of candidates) {
      const duration = formatDurationToken(candidate.match(/\d{1,2}[:：]\d{2}[:：]\d{2}/)?.[0]);
      if (duration) {
        return duration;
      }
    }
  }

  return '';
}

function pickStrideFromLines(lines) {
  let value = '';
  for (let index = 0; index < lines.length; index += 1) {
    const compact = compactLine(lines[index]);
    const labelIndex = ['平均步幅', '步幅']
      .map((label) => compact.indexOf(label))
      .filter((position) => position >= 0)
      .sort((a, b) => a - b)[0];
    if (labelIndex === undefined) {
      continue;
    }

    const unitWindow = compactWindow(lines, index, index + 4);
    const cmMatch = unitWindow.match(/(\d{1,3}(?:\.\d{1,2})?)(?:厘米|公分|cm)/i);
    const meterMatch = unitWindow.match(/(\d(?:\.\d{1,2})?)(?:米\/步|米每步|m\/步|m每步)/i);
    if (cmMatch && numberInRange(cmMatch[1], 20, 250)) {
      return Number(cmMatch[1]).toFixed(2);
    }
    if (meterMatch && numberInRange(meterMatch[1], 0.2, 2.5)) {
      return (Number(meterMatch[1]) * 100).toFixed(2);
    }

    value = lastNumber(compact.slice(0, labelIndex))
      || firstNumber(compact.slice(labelIndex))
      || firstNumber(lines[index + 1] || '')
      || lastNumber(lines[index - 1] || '');
    if (value && Number(value) > 0) {
      break;
    }

    value = '';
  }

  return formatStrideToken(value);
}

function cleanNickname(value) {
  return value
    .replace(/[：:]/g, '')
    .replace(/^[\s@]+|[\s,，。]+$/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function pickStartTime(text) {
  const dateTime = text.match(/20\d{2}\s*[.\-/年]\s*\d{1,2}\s*[.\-/月]\s*\d{1,2}\s*日?(?:\s*\([^)]*\))?\s+([0-2]?\d)\s*[:：]\s*([0-5]\d)/i);
  if (dateTime) {
    return `${Number(dateTime[1])}:${dateTime[2]}`;
  }

  const labelled = text.match(/(?:起跑时间|开始时间|开跑时间|开始|起跑|Start)\s*[:：]?\s*([0-2]?\d)\s*[:：]\s*([0-5]\d)/i);
  if (labelled) {
    return `${Number(labelled[1])}:${labelled[2]}`;
  }

  const allTimes = Array.from(text.matchAll(/(^|[^\d:：])([0-2]?\d)\s*[:：]\s*([0-5]\d)(?!\s*[:：]\s*[0-5]\d)/g))
    .map((match) => `${Number(match[2])}:${match[3]}`)
    .filter((value) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(value));

  return allTimes[0] || '';
}

function pickDistance(text, compact) {
  const labelled = compact.match(/(?:距离|里程|总里程)[^0-9]{0,8}(\d{1,3}(?:\.\d{1,3})?)(?:公里|千米|km)?/i);
  const beforeLabel = compact.match(/(\d{1,3}(?:\.\d{1,3})?)(?:公里|千米|km)?[a-zA-Z/%()（）]*(?:距离|里程|总里程)(?:\(|（)?(?:公里|千米|km)?/i);
  const plain = text.match(/(\d{1,3}(?:\.\d{1,3})?)\s*(?:公里|千米|km)\b/i);
  const value = beforeLabel?.[1] || labelled?.[1] || plain?.[1] || '';
  return value ? Number(value).toFixed(2) : '';
}

function pickPace(text, compact) {
  const paceMark = '[\\\'′’‘`´分:：]';
  const endMark = '[\\\"″”秒]?';
  const labelled = compact.match(new RegExp(`(?:平均配速|配速|平均等强配速)[^0-9]{0,12}(\\d{1,2})${paceMark}(\\d{1,2})${endMark}`));
  const beforeLabel = compact.match(new RegExp(`(\\d{1,2})${paceMark}(\\d{1,2})${endMark}(?:/公里|/km|每公里)?[^\\u4e00-\\u9fa5]{0,8}(?:平均配速|配速|平均等强配速)`));
  const plain = text.match(/(\d{1,2})\s*[\'′’‘`´分]\s*(\d{1,2})\s*(?:[\"″”秒])?/);
  const match = labelled || beforeLabel || plain;
  if (!match) {
    return '';
  }

  return `${Number(match[1])}分${pad(match[2])}秒`;
}

function pickDuration(text, compact) {
  const durationLabels = '(?:运动时长|运动时间|用时|时长|总用时|总时长|总时间)';
  const beforeLabel = compact.match(new RegExp(`(\\d{1,2})[:：](\\d{1,2})[:：](\\d{1,2})[^0-9]{0,8}${durationLabels}`, 'i'));
  const hms = compact.match(new RegExp(`${durationLabels}(\\d{1,2})(?:小时|时|h|:)(\\d{1,2})(?:分钟|分|m|:)(\\d{1,2})(?:秒|s)?`, 'i'))
    || beforeLabel
    || text.match(/\b(\d{1,2})\s*[:：]\s*([0-5]\d)\s*[:：]\s*([0-5]\d)\b/);
  if (hms) {
    return `${Number(hms[1])}时${pad(hms[2])}分${pad(hms[3])}秒`;
  }

  const hm = compact.match(/(?:运动时长|运动时间|用时|时长|总用时|总时长|总时间)(\d{1,2})(?:小时|时|h)(\d{1,2})(?:分钟|分|m)/i);
  if (hm) {
    return `${Number(hm[1])}时${pad(hm[2])}分00秒`;
  }

  return '';
}

function pickNumberByLabels(compact, labels) {
  for (const label of labels) {
    const match = compact.match(new RegExp(`(\\d{1,3}(?:\\.\\d{1,2})?)[a-zA-Z/%()（）]*${label}`, 'i'))
      || compact.match(new RegExp(`${label}[^0-9]{0,10}(\\d{1,3}(?:\\.\\d{1,2})?)`, 'i'));
    if (match) {
      return match[1];
    }
  }

  return '';
}

function pickStride(compact) {
  const value = pickNumberByLabels(compact, ['平均步幅', '步幅']);
  if (!value) {
    return '';
  }

  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) {
    return '';
  }

  const strideContext = compact.match(/(?:\d{1,3}(?:\.\d{1,2})?[^0-9]{0,12})?(?:平均步幅|步幅)[^0-9]{0,12}(?:\d{1,3}(?:\.\d{1,2})?)?/i)?.[0] || '';
  const isMeter = /米\/步|米每步|m\/步|m每步/i.test(strideContext) || numericValue > 0 && numericValue <= 3;

  return isMeter ? (numericValue * 100).toFixed(2) : numericValue.toFixed(2);
}

function pickCheckins(compact) {
  const after = compact.match(/(?:连续打卡|累计打卡|打卡)[^0-9]{0,8}(\d{1,4})次/);
  const before = compact.match(/(\d{1,4})次(?:连续打卡|累计打卡|打卡)/);
  return after?.[1] ? `${after[1]}次` : before?.[1] ? `${before[1]}次` : '';
}

function derivePace(distanceValue, durationValue) {
  const distance = Number(distanceValue);
  const duration = String(durationValue || '').match(/(\d{1,2})时(\d{2})分(\d{2})秒/);
  if (!Number.isFinite(distance) || distance <= 0 || !duration) {
    return '';
  }

  const seconds = Number(duration[1]) * 3600 + Number(duration[2]) * 60 + Number(duration[3]);
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return '';
  }

  const paceSeconds = Math.round(seconds / distance);
  const minutes = Math.floor(paceSeconds / 60);
  const restSeconds = paceSeconds % 60;
  return `${minutes}分${pad(restSeconds)}秒`;
}

function createEmptyRow(fileName = '') {
  const row = fields.reduce((record, field) => {
    record[field] = '';
    return record;
  }, {});

  row['打卡图片'] = fileName;
  row['数据状态'] = '待确认';

  return row;
}

function addRow(row) {
  state.rows.push(row);
}

function renderRows() {
  if (!state.rows.length) {
    tableBody.innerHTML = '<tr class="empty-row"><td colspan="12">暂无数据，上传截图后会在这里展示识别结果。</td></tr>';
    return;
  }

  tableBody.innerHTML = state.rows.map((row, rowIndex) => {
    const statusClass = row['数据状态'] === '已同步'
      ? 'status-ok'
      : row['数据状态'] === '识别异常'
        ? 'status-error'
        : 'status-warn';

    return `<tr class="${statusClass}">${fields.map((field) => {
      const value = escapeHtml(row[field] || '');
      if (field === '数据状态') {
        return `<td><select data-row="${rowIndex}" data-field="${field}">
          ${['已同步', '待确认', '识别异常'].map((option) => `<option value="${option}" ${option === row[field] ? 'selected' : ''}>${option}</option>`).join('')}
        </select></td>`;
      }

      return `<td><input data-row="${rowIndex}" data-field="${field}" value="${value}" aria-label="${field}"></td>`;
    }).join('')}</tr>`;
  }).join('');

  tableBody.querySelectorAll('input, select').forEach((control) => {
    control.addEventListener('input', (event) => {
      const rowIndex = Number(event.target.dataset.row);
      const field = event.target.dataset.field;
      state.rows[rowIndex][field] = event.target.value;
      updateDownloadState();
    });
  });
}

function downloadExcel() {
  const rows = readRowsFromTable();
  if (!rows.length) {
    return;
  }

  if (window.XLSX) {
    const worksheet = XLSX.utils.json_to_sheet(rows, { header: fields });
    worksheet['!cols'] = fields.map((field) => ({ wch: Math.max(field.length + 4, 16) }));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '跑步打卡');
    XLSX.writeFile(workbook, `跑步打卡OCR_${formatDate(new Date())}.xlsx`);
    return;
  }

  const csv = [fields.join(','), ...rows.map((row) => fields.map((field) => csvCell(row[field])).join(','))].join('\n');
  const blob = new Blob(['\ufeff', csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `跑步打卡OCR_${formatDate(new Date())}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function readRowsFromTable() {
  const controls = Array.from(tableBody.querySelectorAll('input, select'));
  const rows = [];
  controls.forEach((control) => {
    const rowIndex = Number(control.dataset.row);
    const field = control.dataset.field;
    rows[rowIndex] = rows[rowIndex] || {};
    rows[rowIndex][field] = control.value.trim();
  });
  return rows.filter(Boolean);
}

function clearAll() {
  state.files = [];
  state.rows = [];
  state.ocrLogs = [];
  imageInput.value = '';
  renderRows();
  updateDownloadState();
  setStatus('请先选择 Keep 等运动 APP 的跑步打卡截图。', '建议截图中包含用户昵称、日期、距离、配速、运动时长、步频、步幅、心率等信息。', 0);
  ocrText.textContent = '暂无 OCR 原文。';
}

function updateDownloadState() {
  downloadButton.disabled = !state.rows.length && !readRowsFromTable().length;
}

function setStatus(title, hint, progress) {
  statusText.textContent = title;
  hintText.textContent = hint;
  setProgress(progress);
}

function setProgress(progress) {
  progressBar.style.width = `${Math.max(0, Math.min(100, progress))}%`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function formatDate(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function csvCell(value) {
  return `"${String(value || '').replace(/"/g, '""')}"`;
}

if (typeof module !== 'undefined') {
  module.exports = {
    parseRunningRecord,
    pickDate,
    pickDistance,
    pickDuration,
    pickNumberByLabels,
    pickPace,
    pickStartTime,
    pickStride
  };
}
