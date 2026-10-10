// HW 4.4 — transcribed from the printed assignment + answer key.
// NOTE: the order of the choices is kept exactly as printed. In particular
// Q6(b) lists "positive everywhere" first but Q7(b) lists "negative everywhere"
// first, so the correct index differs between otherwise similar questions.
const R = String.raw;
const F = require('../../lib/trigFigures');

const trig = (name) => '$$' + '\\' + name + R`\theta=$$`;
const ex = (name, answer) => ({ id: name, type: 'expr', exact: true, label: trig(name), correctAnswer: answer });

// Choices for the sign-by-quadrant questions. A backslash cannot sit directly
// before ${...} in a template literal, so the function name is concatenated.
const bs = '\\';
const sinceMath = (fnName, iv) => '$$' + bs + fnName + R`\,t$$`;
function opt(fnName, iv, kind) {
  const ivm = '$$' + iv + '$$';
  if (kind === 'pos') return { text: 'The sign of ' + sinceMath(fnName) + ' is positive everywhere in ' + ivm + '.' };
  if (kind === 'neg') return { text: 'The sign of ' + sinceMath(fnName) + ' is negative everywhere in ' + ivm + '.' };
  return { text: 'The sign of ' + sinceMath(fnName) + ' is positive for some angles in ' + ivm + ' and negative for other angles in ' + ivm + '.' };
}

const IV6 = R`\left(\dfrac{\pi}{2},\dfrac{5\pi}{6}\right)`;
const IV7 = R`\left(\dfrac{5\pi}{3},2\pi\right)`;

module.exports = {
  title: 'HW 4.4 - Trigonometric Functions of Any Angle',
  questions: [
    // 1
    {
      prompt: R`Find the exact value of $$\sin\left(\dfrac{\pi}{4}\right)$$.`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\sin\left(\dfrac{\pi}{4}\right)=$$ (Type a simplified fraction. Type an exact answer, using radicals as needed. Rationalize the denominator.)`, correctAnswer: 'sqrt(2)/2' }],
    },
    // 2
    {
      prompt: R`Find the exact value of $$\cos\left(\dfrac{\pi}{6}\right)$$.`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\cos\left(\dfrac{\pi}{6}\right)=$$ (Type a simplified fraction. Type an exact answer, using radicals as needed. Rationalize the denominator.)`, correctAnswer: 'sqrt(3)/2' }],
    },
    // 3
    {
      prompt: R`Evaluate $$\csc\left(\dfrac{5\pi}{3}\right)$$ using a calculator. Give an exact value, not an approximate answer.`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\csc\left(\dfrac{5\pi}{3}\right)=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '-2*sqrt(3)/3' }],
    },
    // 4
    {
      prompt: R`Find the six trigonometric function values for the angle $$\theta$$ shown.`,
      svg: F.terminalSideSvg({ px: -5, py: 3, pointLabel: 'P(-5,3)' }),
      parts: [
        ex('sin', '3/sqrt(34)'), ex('cos', '-5/sqrt(34)'), ex('tan', '-3/5'),
        ex('csc', 'sqrt(34)/3'), ex('sec', '-sqrt(34)/5'), ex('cot', '-5/3'),
      ],
    },
    // 5
    {
      prompt: R`Point P is on the terminal side of angle $$\theta$$. Evaluate the six trigonometric functions for $$\theta$$.

$$P(-7,-24)$$`,
      parts: [
        ex('sin', '-24/25'), ex('cos', '-7/25'), ex('tan', '24/7'),
        ex('csc', '-25/24'), ex('sec', '-25/7'), ex('cot', '7/24'),
      ],
    },
    // 6
    {
      prompt: R`State the sign (+ or −) of (a) $$\sin t$$, (b) $$\cos t$$, and (c) $$\tan t$$ for values of t in the interval below.

$$\left(\dfrac{\pi}{2},\dfrac{5\pi}{6}\right)$$`,
      parts: [
        { id: 'a', type: 'mc', label: '(a) Choose the correct answer below.', choices: [opt('sin', IV6, 'pos'), opt('sin', IV6, 'neg'), opt('sin', IV6, 'mixed')], correctIndex: 0 },
        { id: 'b', type: 'mc', label: '(b) Choose the correct answer below.', choices: [opt('cos', IV6, 'pos'), opt('cos', IV6, 'neg'), opt('cos', IV6, 'mixed')], correctIndex: 1 },
        { id: 'c', type: 'mc', label: '(c) Choose the correct answer below.', choices: [opt('tan', IV6, 'neg'), opt('tan', IV6, 'pos'), opt('tan', IV6, 'mixed')], correctIndex: 0 },
      ],
    },
    // 7
    {
      prompt: R`State the sign (+ or −) of (a) $$\sin t$$, (b) $$\cos t$$, and (c) $$\tan t$$ for values of t in the interval below.

$$\left(\dfrac{5\pi}{3},2\pi\right)$$`,
      parts: [
        { id: 'a', type: 'mc', label: '(a) Choose the correct answer below.', choices: [opt('sin', IV7, 'pos'), opt('sin', IV7, 'neg'), opt('sin', IV7, 'mixed')], correctIndex: 1 },
        { id: 'b', type: 'mc', label: '(b) Choose the correct answer below.', choices: [opt('cos', IV7, 'neg'), opt('cos', IV7, 'pos'), opt('cos', IV7, 'mixed')], correctIndex: 1 },
        { id: 'c', type: 'mc', label: '(c) Choose the correct answer below.', choices: [opt('tan', IV7, 'neg'), opt('tan', IV7, 'pos'), opt('tan', IV7, 'mixed')], correctIndex: 0 },
      ],
    },
    // 8
    {
      prompt: R`Find the sign of the given value without the use of a calculator.

$$\cos 42^\circ$$`,
      parts: [{ id: 'sign', type: 'mc', label: R`The sign of $$\cos 42^\circ$$ is`, choices: ['negative.', 'positive.'], correctIndex: 1 }],
    },
    // 9
    {
      prompt: R`Determine the sign (+ or −) of the given value without the use of a calculator.

$$\cos\dfrac{3\pi}{4}$$`,
      parts: [{ id: 'sign', type: 'mc', label: R`The sign of $$\cos\dfrac{3\pi}{4}$$ is`, choices: ['+.', '−.'], correctIndex: 1 }],
    },
    // 10
    {
      prompt: R`Choose a point on the terminal side of $$\theta$$.

$$\theta=300^\circ$$`,
      parts: [{
        id: 'pt', type: 'mc', label: R`Choose a point on the terminal side of $$\theta$$.`,
        choices: [{ text: R`A. $$\left(-1,-\sqrt{3}\right)$$` }, { text: R`B. $$\left(\sqrt{3},-1\right)$$` }, { text: R`C. $$\left(1,-\sqrt{3}\right)$$` }, { text: R`D. $$\left(-1,\sqrt{3}\right)$$` }],
        correctIndex: 2,
      }],
    },
    // 11
    {
      prompt: R`Evaluate without using a calculator by using ratios in a reference triangle.

$$\cos 240^\circ$$`,
      parts: [
        { id: 'ref', type: 'expr', label: 'The reference angle is ___°. (Simplify your answer.)', correctAnswer: '60' },
        { id: 'v', type: 'expr', exact: true, label: R`$$\cos 240^\circ=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '-1/2' },
      ],
    },
    // 12
    {
      prompt: R`Use reference angles to find the exact value of the following expression.

$$\sin 210^\circ$$`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\sin 210^\circ=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed. Rationalize all denominators.)`, correctAnswer: '-1/2' }],
    },
    // 13
    {
      prompt: R`Evaluate without using a calculator by using ratios in a reference triangle.

$$\sec\dfrac{\pi}{3}$$`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\sec\dfrac{\pi}{3}=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '2' }],
    },
    // 14
    {
      prompt: R`Evaluate without using a calculator by using ratios in a reference triangle.

$$\sin\dfrac{8\pi}{3}$$`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\sin\dfrac{8\pi}{3}=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, correctAnswer: 'sqrt(3)/2' }],
    },
    // 15
    {
      prompt: R`Evaluate without using a calculator by using ratios in a reference triangle.

$$\tan\left(-\dfrac{11\pi}{3}\right)$$`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\tan\left(-\dfrac{11\pi}{3}\right)=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression. Type an exact answer, using radicals as needed. Rationalize all denominators.)`, correctAnswer: 'sqrt(3)' }],
    },
    // 16
    {
      prompt: R`Evaluate without using a calculator by using ratios in a reference triangle.

$$\cos\dfrac{11\pi}{4}$$`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\cos\dfrac{11\pi}{4}=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression. Type an exact answer, using radicals as needed. Rationalize all denominators.)`, correctAnswer: '-sqrt(2)/2' }],
    },
    // 17
    {
      prompt: R`Evaluate without using a calculator.

Find $$\sin\theta$$ and $$\tan\theta$$ if $$\cos\theta=\dfrac{5}{7}$$ and $$\cot\theta>0$$.`,
      parts: [
        { id: 'sin', type: 'expr', exact: true, label: R`$$\sin\theta=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed. Rationalize all denominators.)`, correctAnswer: '2*sqrt(6)/7' },
        { id: 'tan', type: 'expr', exact: true, label: R`$$\tan\theta=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed. Rationalize all denominators.)`, correctAnswer: '2*sqrt(6)/5' },
      ],
    },
    // 18
    {
      prompt: R`Evaluate without using a calculator.

Find $$\tan\theta$$ and $$\sec\theta$$ if $$\sin\theta=-\dfrac{6}{7}$$ and $$\cos\theta>0$$.`,
      parts: [
        { id: 'tan', type: 'expr', exact: true, label: R`$$\tan\theta=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed.)`, correctAnswer: '-6/sqrt(13)' },
        { id: 'sec', type: 'expr', exact: true, label: R`$$\sec\theta=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed.)`, correctAnswer: '7/sqrt(13)' },
      ],
    },
    // 19
    {
      prompt: R`Find $$\sec\theta$$ and $$\csc\theta$$ if $$\cot\theta=-\dfrac{3}{4}$$ and $$\cos\theta<0$$.`,
      parts: [
        { id: 'sec', type: 'expr', exact: true, label: R`$$\sec\theta=$$ (Type an exact answer, using radicals as needed. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '-5/3' },
        { id: 'csc', type: 'expr', exact: true, label: R`$$\csc\theta=$$ (Type an exact answer, using radicals as needed. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '5/4' },
      ],
    },
    // 20
    {
      prompt: R`Answer without using a calculator.

If $$\sin\theta=0.1$$, what does $$\sin(-\theta)+\csc\theta$$ equal?`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct answer below.', choices: ['10.1', '0', '9.9', '2'], correctIndex: 2 }],
    },
  ],
};
