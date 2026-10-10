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

// sec/csc/cot MUST be listed here: otherwise expandImplicitProducts() below
// would split "sec" into "s*e*c" and silently turn every secant answer into
// nonsense.
const KNOWN_NAMES = new Set(['sqrt', 'cbrt', 'nthRoot', 'abs', 'log', 'log10', 'sin', 'cos', 'tan', 'sec', 'csc', 'cot', 'asin', 'acos', 'atan', 'pi', 'e', 'i', 'Infinity', 'U', 'EMPTYSET']);

// Greek letters students use as variables (angles). They are multi-letter
// names that must stay ONE variable instead of being split into a product.
const VAR_WORDS = new Set(['theta', 'alpha', 'beta', 'gamma', 'phi', 'varphi', 'omega']);

const TRIG_FUNCS = new Set(['sin', 'cos', 'tan', 'sec', 'csc', 'cot']);

// Angle-valued variables get sample points spread over all four quadrants
// (and away from the multiples of pi/2 where tan/sec/csc/cot blow up) so that
// identity checks such as sin^2(theta)+cos^2(theta) vs 1 are actually tested.
const ANGLE_SAMPLES = [
  [0.7, 2.1, 3.6, 5.4],
  [1.3, 2.8, 4.2, 5.9],
  [0.4, 1.9, 3.3, 5.1],
  [1.1, 2.5, 3.9, 6.0],
  [0.9, 2.3, 4.5, 5.6],
  [0.6, 2.9, 3.4, 5.3],
];
const ANGLE_NAMES = ['theta', 'alpha', 'beta', 'gamma', 'phi', 'varphi', 'omega'];
SAMPLE_SETS.forEach((set, idx) => {
  ANGLE_NAMES.forEach((name, n) => {
    set[name] = ANGLE_SAMPLES[n % ANGLE_SAMPLES.length][idx];
  });
});

// Any other variable name (a, c, z, k, ...) previously fell back to the same
// constant 0.777 in every sample, so two different variables could not be told
// apart. Give each name its own deterministic, POSITIVE value per sample set
// (positive so log/sqrt of it stays real).
function fallbackSample(name, idx) {
  let h = 7;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) % 997;
  return 0.45 + (((h + idx * 131) % 233) / 233) * 2.4;
}

// mathjs's tokenizer treats a run of letters with no operator between them
// (e.g. "xy" typed by a student for "x times y") as ONE multi-character
// symbol, not implicit multiplication of two variables — so it either
// throws "Undefined symbol xy" or, worse, silently treats it as its own
// unrelated variable. Split any letter-run that isn't a known function or
// constant name into explicit single-character products: "112xy" -> "112x*y".
// Separately, mathjs parses an identifier immediately followed by "(" as a
// FUNCTION CALL ("z(...)" calls z), not multiplication — so "yz(z^2-16z+11)"
// needs a "*" inserted before the paren too, unless the identifier really is
// a known function name (sqrt, sin, ...), in which case leave it alone.
function expandImplicitProducts(expr) {
  return expr.replace(/[a-zA-Z]+/g, (run, offset, full) => {
    const isKnown = KNOWN_NAMES.has(run) || VAR_WORDS.has(run);
    let replaced = isKnown || run.length === 1 ? run : run.split('').join('*');
    if (!isKnown && full[offset + run.length] === '(') replaced += '*';
    return replaced;
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
const D2R = Math.PI / 180;
// Used when a part says degrees:true — the answer is typed "in degrees", so
// sin(30) must mean sin 30 degrees. Overrides mathjs's radian trig functions
// in the evaluation scope for BOTH the student's and the stored expression.
const DEGREE_SCOPE = {
  sin: (x) => Math.sin(x * D2R),
  cos: (x) => Math.cos(x * D2R),
  tan: (x) => Math.tan(x * D2R),
  sec: (x) => 1 / Math.cos(x * D2R),
  csc: (x) => 1 / Math.sin(x * D2R),
  cot: (x) => 1 / Math.tan(x * D2R),
};

// opts: { degrees: bool, tol: number }
function exprEquivalent(studentExpr, correctExpr, opts = {}) {
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

    const base = opts.degrees ? DEGREE_SCOPE : {};

    if (vars.size === 0) {
      const va = nodeA.evaluate({ ...base });
      const vc = nodeC.evaluate({ ...base });
      return closeEnough(va, vc, opts.tol);
    }

    for (let sIdx = 0; sIdx < SAMPLE_SETS.length; sIdx++) {
      const sample = SAMPLE_SETS[sIdx];
      const scope = { ...base };
      for (const v of vars) scope[v] = sample[v] !== undefined ? sample[v] : fallbackSample(v, sIdx);
      let va, vc;
      try {
        va = nodeA.evaluate({ ...scope });
        vc = nodeC.evaluate({ ...scope });
      } catch (e) {
        return false;
      }
      if (!closeEnough(va, vc, opts.tol)) return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}

function closeEnough(a, b, tol) {
  if (a && a.re !== undefined) a = math.complex(a);
  if (b && b.re !== undefined) b = math.complex(b);
  try {
    const diff = math.abs(math.subtract(a, b));
    const scale = Math.max(1, math.abs(a), math.abs(b));
    // Loose enough to accept answers rounded to 3 decimal places (as many
    // Pearson prompts instruct), tight enough to catch genuine errors.
    // tol is only passed for exact-value questions, where a decimal
    // approximation must not be allowed to pass for a radical/fraction.
    if (tol !== undefined) return diff < tol;
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

// Finds top-level "(...)" groups in a string, respecting nesting — needed
// because a coordinate can itself contain parens, e.g. a fraction converted
// to "((1)/(2))", which a simple non-nested regex can't see past.
function findTopLevelGroups(str) {
  const groups = [];
  let depth = 0;
  let start = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      if (depth === 0) start = i + 1;
      depth++;
    } else if (str[i] === ')') {
      depth--;
      if (depth === 0 && start !== -1) {
        groups.push(str.slice(start, i));
        start = -1;
      }
    }
  }
  return groups;
}

// Ordered pairs / points, e.g. "(6,3),(4,-2)" compared as a set
function pointSetEquivalent(studentRaw, correctPoints) {
  const cleaned = studentRaw.replace(/\s/g, '');
  const groups = findTopLevelGroups(cleaned);
  if (groups.length !== correctPoints.length) return false;
  const used = new Array(correctPoints.length).fill(false);
  for (const g of groups) {
    const coords = splitTopLevel(g);
    if (coords.length !== 2) return false;
    const [gx, gy] = coords;
    let matched = false;
    for (let i = 0; i < correctPoints.length; i++) {
      if (used[i]) continue;
      const [cx, cy] = correctPoints[i];
      if (exprEquivalent(gx, String(cx)) && exprEquivalent(gy, String(cy))) {
        used[i] = true;
        matched = true;
        break;
      }
    }
    if (!matched) return false;
  }
  return true;
}

// Parses an expression the same way exprEquivalent does, for structural checks.
function parseForStructure(expr) {
  try {
    return math.parse(expandImplicitProducts(expr.trim()));
  } catch (e) {
    return null;
  }
}

// Names of the trig functions an expression calls, e.g. ['sin','cos','sin'].
function trigNamesUsed(expr) {
  const node = parseForStructure(expr);
  if (!node) return null;
  return node.filter((n) => n.isFunctionNode && TRIG_FUNCS.has(n.fn.name)).map((n) => n.fn.name);
}

function countTrigCalls(expr) {
  const node = parseForStructure(expr);
  if (!node) return -1;
  return node.filter((n) => n.isFunctionNode && TRIG_FUNCS.has(n.fn.name)).length;
}

// "Write the expression as the sine/cosine/tangent of an angle": the answer
// must literally BE fn(angle) — not just have the same value. sin(pi/4) has
// the same value as sin(3pi/4) but is a different answer, so the angle itself
// is compared, not the result.
function matchesTrigForm(expr, form) {
  let node = parseForStructure(expr);
  if (!node) return false;
  while (node.isParenthesisNode) node = node.content;
  if (!node.isFunctionNode || node.fn.name !== form.fn || node.args.length !== 1) return false;
  // Tight tolerance: an angle is a structural answer, not a rounded value.
  return exprEquivalent(node.args[0].toString(), form.angle, { tol: 1e-9 });
}

// A decimal literal such as 0.707 or .5 (used to reject decimal approximations
// when an exact value is required).
const DECIMAL_LITERAL = /(\d\.\d|\.\d|\d\.(?!\d))/;

// Optional per-part rules for expression answers (all additive; parts that
// don't set them behave exactly as before):
//   exact: true        - reject decimals; require near-machine-precision equality
//   degrees: true      - trig arguments are in degrees
//   trigCalls: {min,max} - how many sin/cos/tan/sec/csc/cot calls the answer
//                        may contain (forces "simplified to one function")
//   trigForm: {fn, angle} - answer must be exactly fn(angle)
function checkExpr(part, expr) {
  if (part.exact && DECIMAL_LITERAL.test(expr)) return false;
  if (part.trigCalls) {
    const n = countTrigCalls(expr);
    if (n < 0) return false;
    if (part.trigCalls.min !== undefined && n < part.trigCalls.min) return false;
    if (part.trigCalls.max !== undefined && n > part.trigCalls.max) return false;
  }
  // onlyTrig: ['sin'] — the answer must use trig functions and ONLY these.
  // Used for "show the next step" blanks in identity proofs, where e.g. the
  // step that is supposed to turn cos^2 x - 1 into -sin^2 x must not be
  // answered with the unchanged cos^2 x - 1 (which is equal but is not the step).
  if (part.onlyTrig) {
    const used = trigNamesUsed(expr);
    if (!used || used.length === 0) return false;
    if (used.some((nm) => !part.onlyTrig.includes(nm))) return false;
  }
  if (part.trigForm) return matchesTrigForm(expr, part.trigForm);
  const opts = {};
  if (part.degrees) opts.degrees = true;
  if (part.exact) opts.tol = 1e-9;
  // Optional explicit tolerance for answers too small for the default
  // absolute tolerance (e.g. 0.000001, where 0.001 must NOT be accepted).
  if (part.tol !== undefined) opts.tol = part.tol;
  return exprEquivalent(expr, part.correctAnswer, opts);
}

// "Write an equation relating x, ..." answers, e.g. the lighthouse problem whose
// printed key is  x = 125 / tan 12.  There are many equivalent ways to write
// that (tan 12 = 125/x, x tan 12 = 125, ...), so instead of matching text this
// checks that the equation is TRUE at the correct solution and is not just an
// identity (0 = 0). part.solution is an expression for the correct value of
// part.variable (default x); part.degrees makes trig arguments degrees.
function checkEquation(part, expr) {
  const sides = expr.split('=');
  if (sides.length !== 2 || !sides[0].trim() || !sides[1].trim()) return false;
  if (part.trigCalls) {
    const n = countTrigCalls(sides[0]) + countTrigCalls(sides[1]);
    if (n < 0) return false;
    if (part.trigCalls.min !== undefined && n < part.trigCalls.min) return false;
    if (part.trigCalls.max !== undefined && n > part.trigCalls.max) return false;
  }
  const v = part.variable || 'x';
  const base = part.degrees ? DEGREE_SCOPE : {};
  try {
    const nodeL = math.parse(expandImplicitProducts(sides[0].trim()));
    const nodeR = math.parse(expandImplicitProducts(sides[1].trim()));
    const vars = new Set([...extractVars(sides[0]), ...extractVars(sides[1])]);
    for (const name of vars) if (name !== v) return false; // only the stated variable
    const sol = math.evaluate(part.solution, { ...base });
    const gap = (val) => {
      const l = nodeL.evaluate({ ...base, [v]: val });
      const r = nodeR.evaluate({ ...base, [v]: val });
      const scale = Math.max(1, Math.abs(l), Math.abs(r));
      return Math.abs(l - r) / scale;
    };
    if (!(gap(sol) < 1e-6)) return false;
    // Not an identity: it must fail somewhere other than the solution.
    return gap(sol * 1.37 + 0.9) > 1e-6 || gap(sol * 0.61 - 0.4) > 1e-6;
  } catch (e) {
    return false;
  }
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
      return checkExpr(part, expr);
    }
    case 'equation': {
      const expr = normalizeStudentInput(studentValue, part.isLatex !== false);
      return checkEquation(part, expr);
    }
    case 'list': {
      const expr = normalizeStudentInput(studentValue, part.isLatex !== false);
      return listEquivalent(expr, part.correctList);
    }
    case 'interval': {
      const expr = normalizeStudentInput(studentValue, part.isLatex !== false);
      return intervalEquivalent(expr, part.correctAnswer);
    }
    case 'point': {
      const expr = normalizeStudentInput(studentValue, part.isLatex !== false);
      return pointSetEquivalent(expr, part.correctPoints);
    }
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
