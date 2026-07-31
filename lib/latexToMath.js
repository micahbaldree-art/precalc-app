// Converts the LaTeX a MathLive <math-field> produces into a plain-text
// expression that mathjs can parse. Good enough for algebra/precalc-level
// input: fractions, roots, exponents, pi, e, absolute value, infinity, and
// the interval/union symbols students need for Chapter 1.

function latexToMath(latex) {
  if (!latex) return '';
  let s = latex;

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

  // text-ish commands
  s = s.replace(/\\cdot/g, '*');
  s = s.replace(/\\times/g, '*');
  s = s.replace(/\\div/g, '/');
  s = s.replace(/\\pi/g, 'pi');
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
// group, a backslash-command token (e.g. \pi), or a single character.
function readArg(str, startIdx) {
  if (startIdx >= str.length) return null;
  if (str[startIdx] === '{') {
    const { content, end } = readBraceGroup(str, startIdx);
    return { content, end };
  }
  if (str[startIdx] === '\\') {
    const m = /^\\[a-zA-Z]+/.exec(str.slice(startIdx));
    if (m) return { content: m[0], end: startIdx + m[0].length };
    return { content: str[startIdx + 1] || '', end: startIdx + 2 };
  }
  return { content: str[startIdx], end: startIdx + 1 };
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
