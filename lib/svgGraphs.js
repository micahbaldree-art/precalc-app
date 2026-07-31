// Small, dependency-free SVG generators used to build the graph-matching
// answer choices at seed time (so the app never needs to fetch external
// images — everything renders from inline SVG strings stored in the DB).

const math = require('mathjs');

const W = 160, H = 160, PAD = 6;

function toSvgXY(x, y, xMin, xMax, yMin, yMax) {
  const px = PAD + ((x - xMin) / (xMax - xMin)) * (W - 2 * PAD);
  const py = H - PAD - ((y - yMin) / (yMax - yMin)) * (H - 2 * PAD);
  return [px, py];
}

// Builds just the SVG path "d" string for one function over a window —
// factored out so multiple curves can be overlaid on one set of axes.
function buildPathD(fnStr, xMin, xMax, yMin, yMax) {
  const compiled = math.parse(fnStr).compile();
  const N = 240;
  let d = '';
  let prevValid = false;
  for (let i = 0; i <= N; i++) {
    const x = xMin + (i / N) * (xMax - xMin);
    let y;
    try {
      y = compiled.evaluate({ x });
    } catch (e) {
      prevValid = false;
      continue;
    }
    if (typeof y !== 'number' || !isFinite(y) || y < yMin - (yMax - yMin) * 0.15 || y > yMax + (yMax - yMin) * 0.15) {
      prevValid = false;
      continue;
    }
    const [px, py] = toSvgXY(x, y, xMin, xMax, yMin, yMax);
    d += (prevValid ? ' L ' : ' M ') + px.toFixed(1) + ' ' + py.toFixed(1);
    prevValid = true;
  }
  return d;
}

// fnStr: a mathjs-parseable expression in x, e.g. "sqrt(x-4)"
function functionGraphSvg(fnStr, { xMin = -10, xMax = 10, yMin = -10, yMax = 10, color = '#2563eb', highlight = false } = {}) {
  const [ox0, oy0] = toSvgXY(xMin, 0, xMin, xMax, yMin, yMax);
  const [ox1] = toSvgXY(xMax, 0, xMin, xMax, yMin, yMax);
  const [, oy1] = toSvgXY(0, yMin, xMin, xMax, yMin, yMax);
  const [, oy2] = toSvgXY(0, yMax, xMin, xMax, yMin, yMax);
  const d = buildPathD(fnStr, xMin, xMax, yMin, yMax);

  const borderColor = highlight ? '#16a34a' : '#cbd5e1';
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="background:white;overflow:hidden">
    <rect x="1" y="1" width="${W - 2}" height="${H - 2}" fill="none" stroke="${borderColor}" stroke-width="2"/>
    <line x1="${ox0.toFixed(1)}" y1="${oy0.toFixed(1)}" x2="${ox1.toFixed(1)}" y2="${oy0.toFixed(1)}" stroke="#94a3b8" stroke-width="1"/>
    <line x1="${W / 2}" y1="${oy1.toFixed(1)}" x2="${W / 2}" y2="${oy2.toFixed(1)}" stroke="#94a3b8" stroke-width="1"/>
    <path d="${d}" fill="none" stroke="${color}" stroke-width="2" clip-path="inset(0)"/>
  </svg>`;
}

// Two curves on one set of axes: the function as a solid line and a second
// curve (typically an end-behavior/slant asymptote) as a dashed overlay —
// matching how the textbook shows f(x) together with its asymptote.
function functionWithAsymptoteSvg(fnStr, asymStr, { xMin = -10, xMax = 10, yMin = -10, yMax = 10, fnColor = '#111827', asymColor = '#2563eb', highlight = false } = {}) {
  const [ox0, oy0] = toSvgXY(xMin, 0, xMin, xMax, yMin, yMax);
  const [ox1] = toSvgXY(xMax, 0, xMin, xMax, yMin, yMax);
  const [, oy1] = toSvgXY(0, yMin, xMin, xMax, yMin, yMax);
  const [, oy2] = toSvgXY(0, yMax, xMin, xMax, yMin, yMax);
  const dFn = buildPathD(fnStr, xMin, xMax, yMin, yMax);
  const dAsym = buildPathD(asymStr, xMin, xMax, yMin, yMax);

  const borderColor = highlight ? '#16a34a' : '#cbd5e1';
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="background:white;overflow:hidden">
    <rect x="1" y="1" width="${W - 2}" height="${H - 2}" fill="none" stroke="${borderColor}" stroke-width="2"/>
    <line x1="${ox0.toFixed(1)}" y1="${oy0.toFixed(1)}" x2="${ox1.toFixed(1)}" y2="${oy0.toFixed(1)}" stroke="#94a3b8" stroke-width="1"/>
    <line x1="${W / 2}" y1="${oy1.toFixed(1)}" x2="${W / 2}" y2="${oy2.toFixed(1)}" stroke="#94a3b8" stroke-width="1"/>
    <path d="${dAsym}" fill="none" stroke="${asymColor}" stroke-width="1.5" stroke-dasharray="4 3" clip-path="inset(0)"/>
    <path d="${dFn}" fill="none" stroke="${fnColor}" stroke-width="2" clip-path="inset(0)"/>
  </svg>`;
}

// A single number-line graphic with an open/closed bracket and a ray or segment shaded.
// intervals: array of {left, right, leftClosed, rightClosed} using -Infinity/Infinity for rays
function numberLineSvg(intervals, { min = -20, max = 20, step = 4 } = {}) {
  const w = 420, h = 70, pad = 20;
  const scale = (v) => pad + ((v - min) / (max - min)) * (w - 2 * pad);
  let ticks = '';
  for (let v = min; v <= max; v += step) {
    const x = scale(v);
    ticks += `<line x1="${x}" y1="${h / 2 - 5}" x2="${x}" y2="${h / 2 + 5}" stroke="#475569" stroke-width="1"/>`;
    ticks += `<text x="${x}" y="${h / 2 + 20}" font-size="10" text-anchor="middle" fill="#475569">${v}</text>`;
  }
  let segs = '';
  for (const iv of intervals) {
    const leftIsInf = iv.left === -Infinity;
    const rightIsInf = iv.right === Infinity;
    const x1 = leftIsInf ? pad - 10 : scale(iv.left);
    const x2 = rightIsInf ? w - pad + 10 : scale(iv.right);
    segs += `<line x1="${x1}" y1="${h / 2}" x2="${x2}" y2="${h / 2}" stroke="#2563eb" stroke-width="4"/>`;
    if (leftIsInf) {
      segs += arrowHead(x1, h / 2, 'left');
    } else {
      segs += bracket(x1, h / 2, iv.leftClosed, 'left');
    }
    if (rightIsInf) {
      segs += arrowHead(x2, h / 2, 'right');
    } else {
      segs += bracket(x2, h / 2, iv.rightClosed, 'right');
    }
  }
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="background:white">
    <line x1="${pad - 12}" y1="${h / 2}" x2="${w - pad + 12}" y2="${h / 2}" stroke="#cbd5e1" stroke-width="1"/>
    ${ticks}
    ${segs}
  </svg>`;
}

function bracket(x, y, closed, dir) {
  if (closed) {
    return `<circle cx="${x}" cy="${y}" r="5" fill="#2563eb"/>`;
  }
  return `<circle cx="${x}" cy="${y}" r="5" fill="white" stroke="#2563eb" stroke-width="2"/>`;
}

function arrowHead(x, y, dir) {
  const d = dir === 'left' ? `M ${x + 10} ${y - 6} L ${x} ${y} L ${x + 10} ${y + 6}` : `M ${x - 10} ${y - 6} L ${x} ${y} L ${x - 10} ${y + 6}`;
  return `<path d="${d}" fill="none" stroke="#2563eb" stroke-width="3"/>`;
}

module.exports = { functionGraphSvg, functionWithAsymptoteSvg, numberLineSvg };
