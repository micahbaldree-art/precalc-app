// Converts the LaTeX a MathLive <math-field> produces into a plain-text
// expression that mathjs can parse. Good enough for algebra/precalc-level
// input: fractions, roots, exponents, pi, e, absolute value, infinity, and
// the interval/union symbols students need for Chapter 1.

function latexToMath(latex) {
  if (!latex) return '';
  let s = latex;

  // Strip \left \right sizing commands
  s = s.replace(/\\left/g, '').replace(/\\right/g, '');

  // \frac{a}{b} -> ((a)/(b))  -- handles nested braces via manual scan
  s = replaceCommand(s, '\\frac', (a, b) => `((${a})/(${b}))`, 2);
  s = replaceCommand(s, '\\dfrac', (a, b) => `((${a})/(${b}))`, 2);

  // \sqrt[n]{a} and \sqrt{a}
  s = s.replace(/\\sqrt\[([^\]]*)\]/g, '__NTHROOT__$1__');
  s = replaceCommandWithMarker(s, '__NTHROOT__', '__');
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

// Finds `cmd{group1}{group2}...` (nargs groups) and replaces with fn(groups)
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
        if (str[pos] !== '{') { ok = false; break; }
        const { content, end } = readBraceGroup(str, pos);
        groups.push(content);
        pos = end;
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

function replaceCommandWithMarker() {
  // placeholder no-op (nth-root marker handling simplified below)
  return arguments[0];
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
