const math = require('mathjs');
const { latexToMath } = require('./latexToMath');

const EPS = 1e-6;

// Sample points chosen to avoid coincidental equality for typo'd expressions
// (avoid 0, 1, -1 which are common "accidental" roots).
const SAMPLE_SETS = [
  { x: 0.5773, y: -1.315, w: 2.718, t: 1.919, b: -0.618, p: 3.303, m: 0.4142, s: -2.236 },
  { x: -2.191, y: 0.874, w: -1.033, t: -0.732, b: 2.449, p: -1.847, m: -3.162, s: 1.732 },
  { x: 1.618, y: 2.302, w: 0.577, t: -2.645, b: 1.101, p: 0.918, m: 2.001, s: -0.577 },
  { x: -0.333, y: -0.5, w: 1.5, t: 2.5, b: -1.5, p: -2.5, m: 0.75, s: 3.14 },
];

const KNOWN_NAMES = new Set(['sqrt', 'cbrt', 'nthRoot', 'abs', 'log', 'log10', 'sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'pi', 'e', 'i', 'Infinity', 'U', 'EMPTYSET']);

// mathjs's tokenizer treats a run of letters with no operator between them
// (e.g. "xy" typed by a student for "x times y") as ONE multi-character
// symbol, not implicit multiplication of two variables — so it either
// throws "Undefined symbol xy" or, worse, silently treats it as its own
// unrelated variable. Split any letter-run that isn't a known function or
// constant name into explicit single-character products: "112xy" -> "112x*y".
function expandImplicitProducts(expr) {
  return expr.replace(/[a-zA-Z]+/g, (run) => {
    if (KNOWN_NAMES.has(run) || run.length === 1) return run;
    return run.split('').join('*');
  });
}

function extractVars(expr) {
  const found = new Set();
  const re = /[a-zA-Z][a-zA-Z0-9]*/g;
  let m;
  while ((m = re.exec(expr))) {
    const name = m[0];
    if (!KNOWN_NAMES.has(name)) found.add(name);
  }
  return [...found];
}

function normalizeStudentInput(raw, isLatex) {
  if (raw == null) return '';
  return isLatex ? latexToMath(raw) : String(raw);
}

// Compares two math expressions for algebraic equivalence via numeric sampling.
function exprEquivalent(studentExpr, correctExpr) {
  const a0 = studentExpr.trim();
  const c0 = correctExpr.trim();
  if (!a0) return false;
  if (a0.replace(/\s/g, '') === c0.replace(/\s/g, '')) return true;

  const a = expandImplicitProducts(a0);
  const c = expandImplicitProducts(c0);

  try {
    const vars = new Set([...extractVars(a), ...extractVars(c)]);
    const nodeA = math.parse(a);
    const nodeC = math.parse(c);

    if (vars.size === 0) {
      const va = nodeA.evaluate();
      const vc = nodeC.evaluate();
      return closeEnough(va, vc);
    }

    for (const sample of SAMPLE_SETS) {
      const scope = {};
      for (const v of vars) scope[v] = sample[v] !== undefined ? sample[v] : 0.777;
      let va, vc;
      try {
        va = nodeA.evaluate({ ...scope });
        vc = nodeC.evaluate({ ...scope });
      } catch (e) {
        return false;
      }
      if (!closeEnough(va, vc)) return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}

function closeEnough(a, b) {
  if (a && a.re !== undefined) a = math.complex(a);
  if (b && b.re !== undefined) b = math.complex(b);
  try {
    const diff = math.abs(math.subtract(a, b));
    const scale = Math.max(1, math.abs(a), math.abs(b));
    // Loose enough to accept answers rounded to 3 decimal places (as many
    // Pearson prompts instruct), tight enough to catch genuine errors.
    return diff < 2e-3 || diff / scale < 1e-4;
  } catch (e) {
    return false;
  }
}

// Unordered list of expressions, e.g. "9,-3" vs "-3, 9"
function listEquivalent(studentRaw, correctList) {
  const studentParts = splitTopLevel(studentRaw).map((s) => s.trim()).filter(Boolean);
  const correctParts = correctList.map((s) => s.trim());
  if (studentParts.length !== correctParts.length) return false;
  const used = new Array(correctParts.length).fill(false);
  for (const sp of studentParts) {
    let matched = false;
    for (let i = 0; i < correctParts.length; i++) {
      if (used[i]) continue;
      if (exprEquivalent(sp, correctParts[i])) {
        used[i] = true;
        matched = true;
        break;
      }
    }
    if (!matched) return false;
  }
  return true;
}

function splitTopLevel(str) {
  const out = [];
  let depth = 0;
  let cur = '';
  for (const ch of str) {
    if (ch === '(' || ch === '[') depth++;
    if (ch === ')' || ch === ']') depth--;
    if (ch === ',' && depth === 0) {
      out.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  if (cur.trim()) out.push(cur);
  return out;
}

// Interval notation, e.g. "(-Infinity,-11]U[1,Infinity)"
function intervalEquivalent(studentRaw, correctRaw) {
  const a = parseIntervals(studentRaw);
  const b = parseIntervals(correctRaw);
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  const used = new Array(b.length).fill(false);
  for (const iv of a) {
    let matched = false;
    for (let i = 0; i < b.length; i++) {
      if (used[i]) continue;
      if (
        iv.leftBracket === b[i].leftBracket &&
        iv.rightBracket === b[i].rightBracket &&
        exprEquivalent(iv.left, b[i].left) &&
        exprEquivalent(iv.right, b[i].right)
      ) {
        used[i] = true;
        matched = true;
        break;
      }
    }
    if (!matched) return false;
  }
  return true;
}

function parseIntervals(raw) {
  if (!raw) return null;
  const cleaned = raw.replace(/\s/g, '').replace(/infinity/gi, 'Infinity').replace(/oo/g, 'Infinity');
  const pieces = cleaned.split(/[U∪]/);
  const intervals = [];
  for (const piece of pieces) {
    const m = piece.match(/^([\[(])(.+),(.+)([\])])$/);
    if (!m) return null;
    intervals.push({
      leftBracket: m[1],
      left: m[2],
      right: m[3],
      rightBracket: m[4],
    });
  }
  return intervals;
}

// Ordered pairs / points, e.g. "(6,3),(4,-2)" compared as a set
function pointSetEquivalent(studentRaw, correctPoints) {
  const cleaned = studentRaw.replace(/\s/g, '');
  const matches = [...cleaned.matchAll(/\(([^(),]+),([^(),]+)\)/g)];
  if (matches.length !== correctPoints.length) return false;
  const used = new Array(correctPoints.length).fill(false);
  for (const m of matches) {
    let matched = false;
    for (let i = 0; i < correctPoints.length; i++) {
      if (used[i]) continue;
      const [cx, cy] = correctPoints[i];
      if (exprEquivalent(m[1], String(cx)) && exprEquivalent(m[2], String(cy))) {
        used[i] = true;
        matched = true;
        break;
      }
    }
    if (!matched) return false;
  }
  return true;
}

// Checks one answer "part" given its definition and the student's raw input.
// part.type: 'mc' | 'multi' | 'expr' | 'list' | 'interval' | 'point' | 'text'
function checkPart(part, studentValue) {
  switch (part.type) {
    case 'mc':
      return Number(studentValue) === Number(part.correctIndex);
    case 'multi': {
      const sel = Array.isArray(studentValue) ? studentValue.map(Number).sort() : [];
      const correct = [...part.correctIndices].sort();
      return sel.length === correct.length && sel.every((v, i) => v === correct[i]);
    }
    case 'expr': {
      const expr = normalizeStudentInput(studentValue, part.isLatex !== false);
      return exprEquivalent(expr, part.correctAnswer);
    }
    case 'list': {
      const expr = normalizeStudentInput(studentValue, part.isLatex !== false);
      return listEquivalent(expr, part.correctList);
    }
    case 'interval':
      return intervalEquivalent(String(studentValue || ''), part.correctAnswer);
    case 'point':
      return pointSetEquivalent(String(studentValue || ''), part.correctPoints);
    case 'text': {
      const norm = (s) => String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');
      return norm(studentValue) === norm(part.correctAnswer);
    }
    // Radio choice between "factor it" (needs a math blank) and "it's prime" —
    // common Pearson pattern. studentValue = { choice: 'factor'|'prime', expr }
    case 'factor': {
      if (part.isPrime) {
        return studentValue && studentValue.choice === 'prime';
      }
      if (!studentValue || studentValue.choice !== 'factor') return false;
      const expr = normalizeStudentInput(studentValue.expr, part.isLatex !== false);
      return exprEquivalent(expr, part.correctAnswer);
    }
    default:
      return false;
  }
}

// A question is correct only if every part is correct (all-or-nothing).
function checkQuestion(parts, studentAnswers) {
  return parts.every((part) => checkPart(part, studentAnswers ? studentAnswers[part.id] : undefined));
}

module.exports = { checkPart, checkQuestion, exprEquivalent, latexToMath: normalizeStudentInput };
