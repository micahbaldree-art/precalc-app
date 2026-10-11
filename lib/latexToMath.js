// Converts the LaTeX a MathLive <math-field> produces into a plain-text
// expression that mathjs can parse. Good enough for algebra/precalc-level
// input: fractions, roots, exponents, pi, e, absolute value, infinity, and
// the interval/union symbols students need for Chapter 1.

function latexToMath(latex) {
  if (!latex) return '';
  let s = latex;

  // Degree sign: "30^\circ", "30^{\circ}", "30\circ" or "30°". It is a unit
  // label, not part of the value, so drop it (parts that are in degrees say
  // so via degrees:true and are evaluated in degrees).
  s = s.replace(/\^\{?\\circ\}?/g, '').replace(/\\circ/g, '').replace(/°/g, '');


  // \lbrack / \rbrack are LaTeX's named synonyms for literal "[" / "]" —
  // MathLive emits these (not the bare characters) when a student types a
  // square bracket for interval notation.
  s = s.replace(/\\lbrack/g, '[').replace(/\\rbrack/g, ']');

  // Strip auto-sizing delimiter commands. MathLive emits \mleft/\mright (its
  // own extension, NOT plain \left/\right) for parens typed on the fly, plus
  // the standard \left/\right and the \big/\Big/\bigg/\Bigg (l/r/m suffixed)
  // family for larger delimiters. All of these just wrap a delimiter
  // character (e.g. "(" ")") that should survive untouched — only the
  // command name goes away. Longest names first so e.g. "Biggl" doesn't get
  // partially matched by "big".
  s = s.replace(/\\(mleft|mright|left|right|Biggl|Biggr|Biggm|Bigg|Bigl|Bigr|Bigm|Big|biggl|biggr|biggm|bigg|bigl|bigr|bigm|big)/g, '');
  // \mathopen{} \mathclose{} wrap invisible spacing groups around delimiters;
  // drop the command and whatever (usually empty) group follows it.
  s = s.replace(/\\math(open|close)\{[^{}]*\}/g, '');

  // \frac{a}{b} -> ((a)/(b))  -- handles nested braces via manual scan
  s = replaceCommand(s, '\\frac', (a, b) => `((${a})/(${b}))`, 2);
  s = replaceCommand(s, '\\dfrac', (a, b) => `((${a})/(${b}))`, 2);

  // \sqrt[n]{a} -> nthRoot(a,n). Mark the index first (it can itself contain
  // nested content), then consume the radicand group that follows.
  s = s.replace(/\\sqrt\[([^\]]*)\]/g, '\x00NTHROOT\x00$1\x00');
  s = replaceNthRootMarker(s);
  s = replaceCommand(s, '\\sqrt', (a) => `sqrt(${a})`, 1);

  // \sin, \cos, \tan, \sec, \csc, \cot (and the arc* forms) are not LaTeX
  // "commands with a brace argument" — MathLive writes the name followed by
  // whatever the student typed next. convertTrig() reads all the real-world
  // shapes in a single left-to-right pass:
  //   \sin(x)  \sin{x}  \sin x  \sin 2x  \sin x\cos x   (argument forms)
  //   \sin^2 x  \sin^{2}(x)  \sin^{-1}x                    (powers / inverse)
  s = convertTrig(s);

  // \log_{b}(x) or \log_b x -> log(x,b)  (mathjs's two-arg log() computes
  // log base b). This MUST run before the generic subscript-brace-drop pass
  // below and before the plain \log -> log10 rule, or the base digit gets
  // silently deleted and concatenated into the following argument (e.g.
  // "\log_{3}27" would otherwise become the garbage token "log1027").
  // Base subscript can be a {..} brace group or a single bare character.
  s = s.replace(/\\log_\{([^{}]*)\}/g, (m, b) => `\x00LOGBASE\x00${b}\x00`);
  s = s.replace(/\\log_([^\s{}\\])/g, (m, b) => `\x00LOGBASE\x00${b}\x00`);
  s = replaceLogBaseMarker(s);

  // text-ish commands
  s = s.replace(/\\cdot/g, '*');
  s = s.replace(/\\times/g, '*');
  s = s.replace(/\\div/g, '/');
  s = s.replace(/\\pi/g, ' pi ');
  // Greek letters used as angle variables. The spaces keep "2\theta" from
  // fusing into the unrelated word "2theta".
  s = s.replace(/\\(theta|alpha|beta|gamma|phi|varphi|omega)(?![a-zA-Z])/g, ' $1 ');
  s = s.replace(/\\infty/g, 'Infinity');
  s = s.replace(/\\cup/g, 'U');
  s = s.replace(/\\emptyset/g, 'EMPTYSET');
  s = s.replace(/\\varnothing/g, 'EMPTYSET');
  s = s.replace(/\\le/g, '<=');
  s = s.replace(/\\ge/g, '>=');
  s = s.replace(/\\ne/g, '!=');
  s = s.replace(/\\neq/g, '!=');

  // \left| x \right| and \lvert x \rvert -> abs(x); also plain | |
  s = s.replace(/\\lvert|\\rvert|\\vert/g, '|');
  s = replaceAbs(s);

  // exponent braces: x^{2} -> x^(2)
  s = s.replace(/\^\{([^{}]*)\}/g, '^($1)');
  // subscript braces (rare in student input) just drop
  s = s.replace(/_\{([^{}]*)\}/g, '');

  // remaining braces become parens
  s = s.replace(/\{/g, '(').replace(/\}/g, ')');

  // \log_{b} -> log(x,b) is rare here; \ln -> log
  s = s.replace(/\\ln/g, 'log');
  s = s.replace(/\\log/g, 'log10');

  // remove leftover backslash-commands we didn't handle (e.g. \, thin space)
  s = s.replace(/\\,/g, '');
  s = s.replace(/\\/g, '');

  return s.trim();
}

// ---- trig functions -------------------------------------------------------
// \ln and \log are read by the same scanner so "ln a", "ln 2" and "ln(a)" all work.
// (\log_b x, with a subscript, is left alone for the log-base handler below.)
const TRIG_CMD = /^\\(arcsin|arccos|arctan|sin|cos|tan|csc|sec|cot|ln|log)(?![a-zA-Z])/;
const TRIG_JS = { arcsin: 'asin', arccos: 'acos', arctan: 'atan', ln: 'log', log: 'log10' };
const INVERSE_OF = { sin: 'asin', cos: 'acos', tan: 'atan' };
const GREEK_TOKEN = /^\\(pi|theta|alpha|beta|gamma|phi|varphi|omega)(?![a-zA-Z])/;

// Reads the argument of a trig function starting at str[pos]. A (...) or {...}
// group is taken whole. Otherwise (the common "sin 2x" / "sin x" form) the
// argument is the run of number/letter/Greek/exponent tokens, stopping at an
// operator, space, parenthesis or the next backslash-command — so "sin x cos x"
// is sin(x)*cos(x) and "sin 2x + 1" is sin(2x)+1.
function readTrigArg(str, pos) {
  if (pos >= str.length) return null;
  if (str[pos] === '(' || str[pos] === '{') return readArg(str, pos);
  let j = pos;
  while (j < str.length) {
    const ch = str[j];
    if (/[0-9.a-zA-Z]/.test(ch)) { j++; continue; }
    if (ch === '^') {
      const e = readArg(str, j + 1);
      if (!e) break;
      j = e.end;
      continue;
    }
    if (ch === '\\') {
      const g = GREEK_TOKEN.exec(str.slice(j));
      if (g) {
        j += g[0].length;
        // LaTeX needs a space after a command name ("\pi x"), so that space is
        // syntax, not a separator: keep reading if the argument continues.
        let k = j;
        while (str[k] === ' ') k++;
        if (k > j && (/[0-9a-zA-Z.]/.test(str[k] || '') || GREEK_TOKEN.test(str.slice(k)))) j = k;
        continue;
      }
    }
    break;
  }
  if (j === pos) return null;
  return { content: str.slice(pos, j), end: j };
}

function convertTrig(str) {
  let out = '';
  let i = 0;
  while (i < str.length) {
    const m = str[i] === '\\' ? TRIG_CMD.exec(str.slice(i)) : null;
    if (!m) { out += str[i]; i++; continue; }
    const name = m[1];
    const fnName = TRIG_JS[name] || name;
    let pos = i + m[0].length;
    while (str[pos] === ' ') pos++;
    let exponent = null;
    if (str[pos] === '^') {
      const e = readArg(str, pos + 1);
      if (e) { exponent = e.content.trim(); pos = e.end; }
      while (str[pos] === ' ') pos++;
    }
    const arg = readTrigArg(str, pos);
    if (!arg) { out += m[0]; i += m[0].length; continue; }
    const inner = convertTrig(arg.content);
    // A space keeps "x\tan 12" from fusing into the single word "xtan".
    const sep = /[0-9a-zA-Z)]$/.test(out) ? ' ' : '';
    if (exponent === '-1' && INVERSE_OF[name]) {
      out += `${sep}${INVERSE_OF[name]}(${inner})`;       // sin^{-1} x means arcsin x
    } else if (exponent !== null) {
      out += `${sep}(${fnName}(${inner}))^(${exponent})`; // sin^2 x means (sin x)^2
    } else {
      out += `${sep}${fnName}(${inner})`;
    }
    i = arg.end;
  }
  return out;
}

// Finds `cmd{group1}{group2}...` (nargs groups) and replaces with fn(groups).
// Each argument may be a full {...} brace group OR, per standard LaTeX rules,
// a single token with no braces at all — MathLive's keyboard shortcuts and
// smart-fence typing commonly produce this for simple cases like \frac29 or
// \sqrt5 (meaning \frac{2}{9} and \sqrt{5}).
function replaceCommand(str, cmd, fn, nargs) {
  let result = '';
  let i = 0;
  while (i < str.length) {
    if (str.startsWith(cmd, i)) {
      let pos = i + cmd.length;
      const groups = [];
      let ok = true;
      for (let g = 0; g < nargs; g++) {
        while (str[pos] === ' ') pos++;
        const arg = readArg(str, pos);
        if (arg === null) { ok = false; break; }
        groups.push(arg.content);
        pos = arg.end;
      }
      if (ok && groups.length === nargs) {
        result += fn(...groups);
        i = pos;
        continue;
      }
    }
    result += str[i];
    i++;
  }
  return result;
}

// Reads one LaTeX command argument starting at str[startIdx]: a {...} brace
// group, a (...) paren group, a backslash-command token (e.g. \pi), or a
// single character.
function readArg(str, startIdx) {
  if (startIdx >= str.length) return null;
  if (str[startIdx] === '{') {
    const { content, end } = readBraceGroup(str, startIdx);
    return { content, end };
  }
  if (str[startIdx] === '(') {
    const { content, end } = readParenGroup(str, startIdx);
    return { content, end };
  }
  if (str[startIdx] === '\\') {
    const m = /^\\[a-zA-Z]+/.exec(str.slice(startIdx));
    if (m) return { content: m[0], end: startIdx + m[0].length };
    return { content: str[startIdx + 1] || '', end: startIdx + 2 };
  }
  return { content: str[startIdx], end: startIdx + 1 };
}

// Same idea as readBraceGroup but for a balanced (...) group, returning the
// inner content without the enclosing parens.
function readParenGroup(str, startIdx) {
  let depth = 0;
  let i = startIdx;
  let content = '';
  for (; i < str.length; i++) {
    if (str[i] === '(') depth++;
    else if (str[i] === ')') {
      depth--;
      if (depth === 0) { i++; break; }
    }
    if (i !== startIdx) content += str[i];
  }
  return { content, end: i };
}

// Resolves the \x00NTHROOT\x00 n \x00 markers left by the \sqrt[n]{a} pass
// above, consuming the radicand argument that immediately follows each one
// (a brace group or single token, same rule as any other LaTeX argument).
function replaceNthRootMarker(str) {
  let result = '';
  let i = 0;
  const MARK = '\x00NTHROOT\x00';
  while (i < str.length) {
    const idx = str.indexOf(MARK, i);
    if (idx === -1) {
      result += str.slice(i);
      break;
    }
    result += str.slice(i, idx);
    let pos = idx + MARK.length;
    const endMarkerIdx = str.indexOf('\x00', pos);
    if (endMarkerIdx === -1) {
      // malformed; bail out and keep the rest as-is
      result += str.slice(idx);
      break;
    }
    const n = str.slice(pos, endMarkerIdx);
    pos = endMarkerIdx + 1;
    while (str[pos] === ' ') pos++;
    const arg = readArg(str, pos);
    if (arg) {
      result += `nthRoot(${arg.content},${n})`;
      i = arg.end;
    } else {
      i = pos;
    }
  }
  return result;
}

// Resolves the \x00LOGBASE\x00 b \x00 markers left by the \log_{b} pass
// above, consuming the argument that immediately follows each one (a brace
// group, a paren group, or a single bare token — same rule as any other
// LaTeX argument, e.g. \log_3 27 with no braces at all around "27").
function replaceLogBaseMarker(str) {
  let result = '';
  let i = 0;
  const MARK = '\x00LOGBASE\x00';
  while (i < str.length) {
    const idx = str.indexOf(MARK, i);
    if (idx === -1) {
      result += str.slice(i);
      break;
    }
    result += str.slice(i, idx);
    let pos = idx + MARK.length;
    const endMarkerIdx = str.indexOf('\x00', pos);
    if (endMarkerIdx === -1) {
      result += str.slice(idx);
      break;
    }
    const b = str.slice(pos, endMarkerIdx);
    pos = endMarkerIdx + 1;
    while (str[pos] === ' ') pos++;
    // A bare (unbraced, unparenthesized) numeric argument, e.g. "27" in
    // "\log_3 27", should be read in full — unlike a single bare variable
    // letter, digits typed with no grouping are one number, not one token.
    const numMatch = /^\d+(\.\d+)?/.exec(str.slice(pos));
    let arg;
    if (numMatch) {
      arg = { content: numMatch[0], end: pos + numMatch[0].length };
    } else {
      arg = readArg(str, pos);
    }
    if (arg) {
      result += `log(${arg.content},${b})`;
      i = arg.end;
    } else {
      i = pos;
    }
  }
  return result;
}

function readBraceGroup(str, startIdx) {
  // str[startIdx] === '{'
  let depth = 0;
  let i = startIdx;
  let content = '';
  for (; i < str.length; i++) {
    if (str[i] === '{') depth++;
    else if (str[i] === '}') {
      depth--;
      if (depth === 0) { i++; break; }
    }
    if (depth > 0 && !(str[i] === '{' && depth === 1 && i === startIdx)) {
      if (i !== startIdx) content += str[i];
    }
  }
  return { content, end: i };
}

function replaceAbs(str) {
  // Replace pairs of | with abs( ... )
  const parts = str.split('|');
  if (parts.length < 3) return str;
  let out = parts[0];
  for (let i = 1; i < parts.length; i += 2) {
    if (i + 1 < parts.length) {
      out += `abs(${parts[i]})` + parts[i + 1];
    } else {
      out += '|' + parts[i];
    }
  }
  return out;
}

module.exports = { latexToMath };
