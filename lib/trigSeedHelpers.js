// Builders for the repeated "which formula should be used?" choice sets in the
// Chapter 5 assignments. Each choice is generated from a small code so the many
// look-alike options (that differ only by a sign or by cos/sin order) are
// produced consistently. The LaTeX is plain strings (backslashes are doubled
// only in this file's string literals).

const tr = (fn, a) => '\\' + fn + ' ' + a;
const deg = (n) => `${n}^\\circ`;
const rad = (n, d) => `\\dfrac{${n === 1 ? '' : n}\\pi}{${d}}`;

// Sum / difference formula bodies for angles A and B.
//   f1 cosAcosB - sinAsinB      f2 cosAcosB + sinAsinB
//   f3 sinAcosB + cosAsinB      f4 sinAcosB - cosAsinB
//   t1 (tA+tB)/(1-tAtB)         t2 (tA-tB)/(1+tAtB)
//   t3 (1+tAtB)/(tA-tB)         t4 (1-tAtB)/(tA+tB)
function sdForm(kind, A, B) {
  const s = (x) => tr('sin', x), c = (x) => tr('cos', x), t = (x) => tr('tan', x);
  switch (kind) {
    case 'f1': return `${c(A)}${c(B)}-${s(A)}${s(B)}`;
    case 'f2': return `${c(A)}${c(B)}+${s(A)}${s(B)}`;
    case 'f3': return `${s(A)}${c(B)}+${c(A)}${s(B)}`;
    case 'f4': return `${s(A)}${c(B)}-${c(A)}${s(B)}`;
    case 't1': return `\\dfrac{${t(A)}+${t(B)}}{1-${t(A)}${t(B)}}`;
    case 't2': return `\\dfrac{${t(A)}-${t(B)}}{1+${t(A)}${t(B)}}`;
    case 't3': return `\\dfrac{1+${t(A)}${t(B)}}{${t(A)}-${t(B)}}`;
    case 't4': return `\\dfrac{1-${t(A)}${t(B)}}{${t(A)}+${t(B)}}`;
    default: throw new Error('unknown formula kind ' + kind);
  }
}

// sdChoices('\\sin 105^\\circ', A, B, ['f1','f4','f2','f3']) -> A. ... D. ...
function sdChoices(lhs, A, B, kinds) {
  return kinds.map((k, i) => ({ text: `${'ABCDEFGH'[i]}. $$${lhs}=${sdForm(k, A, B)}$$` }));
}

// Half-angle formula for sin/cos: sign '+'|'-', radicand numerator '1+'|'1-'.
function haSinCos(fn, sign, num) {
  return `${tr(fn, '\\dfrac{\\square}{2}')}=${sign === '-' ? '-' : ''}\\sqrt{\\dfrac{${num}\\cos\\square}{2}}`;
}
// Half-angle formula for tan: top 'sin'|'cos', denominator '1+cos' etc.
function haTan(top, den) {
  const d = den === '1+cos' ? '1+\\cos\\square' : den === '1-cos' ? '1-\\cos\\square' : den === '1+sin' ? '1+\\sin\\square' : '1-\\sin\\square';
  return `\\tan\\dfrac{\\square}{2}=\\dfrac{${tr(top, '\\square')}}{${d}}`;
}
// codes: ['+1+','-1-',...] for sin/cos; ['cos/1+sin', ...] for tan
function haChoices(fn, codes) {
  return codes.map((code, i) => {
    let body;
    if (fn === 'tan') { const [top, den] = code.split('/'); body = haTan(top, den.replace('1+sin', '1+sin').replace('1-sin', '1-sin').replace('1+cos', '1+cos').replace('1-cos', '1-cos')); }
    else body = haSinCos(fn, code[0], code.slice(1));
    return { text: `${'ABCDEFGH'[i]}. $$${body}$$` };
  });
}

module.exports = { tr, deg, rad, sdForm, sdChoices, haChoices };
