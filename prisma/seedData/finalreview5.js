// Final Review 5 — transcribed from the printed assignment + answer key.
// Q5 is printed identically to Q4 in the original; here Q5 uses sin y sec(pi/2 - y)
// so the two questions differ (same type, answer 1).
const R = String.raw;

const ONE_FN = { min: 1, max: 1 };
const NO_FN = { max: 0 };
const L = (letter, latex) => ({ text: `${letter}. $$${latex}$$` });
const val = (id, label, answer) => ({ id, type: 'expr', exact: true, label, correctAnswer: answer });
const mc = (label, choices, correctIndex, id = 'mc') => ({ id, type: 'mc', label, choices, correctIndex });
const simp = (id, label, answer, rule = ONE_FN) => ({ id, type: 'expr', trigCalls: rule, label, correctAnswer: answer });

module.exports = {
  title: 'Final Review 5',
  questions: [
    // 1
    { prompt: R`Use identities to find the value of the expression.

If $$\sin(\theta)=0.23$$, find $$\sin(-\theta)$$.`, parts: [{ id: 'v', type: 'expr', label: R`$$\sin(-\theta)=$$`, correctAnswer: '-0.23' }] },
    // 2
    { prompt: R`Use identities to find the value of the expression.

If $$\sin\left(\theta-\dfrac{\pi}{2}\right)=0.67$$, find $$\cos(-\theta)$$.`, parts: [{ id: 'v', type: 'expr', label: R`$$\cos(-\theta)=$$`, correctAnswer: '-0.67' }] },
    // 3
    { prompt: R`Use basic identities to simplify the expression.

$$\csc x\sin x$$`, parts: [simp('v', R`$$\csc x\sin x=$$`, '1', NO_FN)] },
    // 4
    { prompt: R`Use basic identities to simplify the expression.

$$\cos y\csc\left(\dfrac{\pi}{2}-y\right)$$`, parts: [simp('v', R`$$\cos y\csc\left(\dfrac{\pi}{2}-y\right)=$$ (Simplify your answer.)`, '1', NO_FN)] },
    // 5 (varied: printed Q5 is identical to Q4)
    { prompt: R`Use basic identities to simplify the expression.

$$\sin y\sec\left(\dfrac{\pi}{2}-y\right)$$`, parts: [simp('v', R`$$\sin y\sec\left(\dfrac{\pi}{2}-y\right)=$$ (Simplify your answer.)`, '1', NO_FN)] },
    // 6
    {
      prompt: R`Complete the identity.

$$\dfrac{\tan^2\alpha+1}{-\sec\alpha}=\underline{\hspace{2em}}$$`,
      parts: [mc('Choose the correct answer below.', [L('A', R`-\cos\alpha`), L('B', R`\cos\alpha`), L('C', R`\sin\alpha`), L('D', R`-\sec\alpha`), L('E', R`\sec\alpha`), L('F', R`-\sin\alpha`), L('G', R`-\csc\alpha`), L('H', R`\csc\alpha`)], 3)],
    },
    // 7
    {
      prompt: R`Complete the identity.

$$\dfrac{1+\cot^2\alpha}{-\csc\alpha}=\underline{\hspace{2em}}$$`,
      parts: [mc('Choose the correct answer below.', [L('A', R`-\csc\alpha`), L('B', R`-\sec\alpha`), L('C', R`\csc\alpha`), L('D', R`-\sin\alpha`), L('E', R`\cos\alpha`), L('F', R`\sin\alpha`), L('G', R`\sec\alpha`), L('H', R`-\cos\alpha`)], 0)],
    },
    // 8
    {
      prompt: R`Simplify the expression $$\sin(x)\cdot\cot(-x)$$.`,
      parts: [mc(R`Choose the correct simplified form of $$\sin(x)\cdot\cot(-x)$$.`, [L('A', R`-\cos x`), L('B', R`\cos x`), L('C', R`\cot x`), L('D', R`\sin x`)], 0)],
    },
    // 9
    { prompt: R`Simplify the expression.

$$\sec(-x)\sin\left(\dfrac{\pi}{2}-x\right)$$`, parts: [simp('v', R`$$\sec(-x)\sin\left(\dfrac{\pi}{2}-x\right)=$$ (Simplify your answer.)`, '1', NO_FN)] },
    // 10
    {
      prompt: R`Simplify the expression to either a constant or a basic trigonometric function. Support your result graphically.

$$\dfrac{\cot\left(\dfrac{\pi}{2}-x\right)\sec x}{\sec^2 x}$$`,
      parts: [simp('v', R`$$\dfrac{\cot\left(\frac{\pi}{2}-x\right)\sec x}{\sec^2 x}=$$`, 'sin(x)')],
    },
    // 11
    { prompt: R`Perform the indicated operation and simplify the result.

$$\tan x(\csc x-\cot x)$$`, parts: [simp('v', 'The answer is', 'sec(x)-1')] },
    // 12
    {
      prompt: R`Use the basic identities to change the expression to one involving only sines and cosines. Then simplify to a basic trigonometric function.

$$\dfrac{\tan x}{\sec^2 x}+\dfrac{\tan x}{\csc^2 x}$$`,
      parts: [simp('v', 'The basic trigonometric function equivalent to the expression is', 'tan(x)')],
    },
    // 13
    {
      prompt: R`Perform the indicated operation and simplify the result.

$$\dfrac{1}{1+\cos x}-\dfrac{1}{1-\cos x}$$`,
      parts: [mc(R`What does $$\dfrac{1}{1+\cos x}-\dfrac{1}{1-\cos x}$$ equal?`, [L('A', R`-2\cot x\csc x`), L('B', R`\sin^2 x`), L('C', R`\dfrac{\sec x}{-2\cot x\csc x}`), L('D', R`\dfrac{2\cos x}{\sin^2 x}`)], 0)],
    },
    // 14
    {
      prompt: R`Combine the fractions and simplify to a multiple of a power of a basic trigonometric function.

$$\dfrac{\cos^2 x}{\tan x}+\dfrac{\tan x}{\sec^2 x}$$`,
      parts: [simp('v', R`$$\dfrac{\cos^2 x}{\tan x}+\dfrac{\tan x}{\sec^2 x}=$$`, 'cot(x)')],
    },
    // 15
    {
      prompt: R`Simplify the expression.

$$\dfrac{\cos^2 x-25}{\cos x-5}$$`,
      parts: [mc(R`Choose the correct answer for $$\dfrac{\cos^2 x-25}{\cos x-5}$$.`, [L('A', R`\cos x-5`), L('B', R`\cos x+5`), L('C', R`5-\cos x`), 'D. Cannot be simplified'], 1)],
    },
    // 16
    {
      prompt: R`Determine which of the following could not be set equal to $$\tan x$$ as an identity?`,
      parts: [mc('Choose the correct answer below.', [L('A', R`\cot\left(\dfrac{\pi}{2}-x\right)`), L('B', R`-\cot\left(x-\dfrac{\pi}{2}\right)`), L('C', R`-\tan(-x)`), L('D', R`\pm\sqrt{\sec^2 x-1}`), L('E', R`\cot x\csc x`)], 4)],
    },
    // 17
    {
      prompt: R`What is the simplified form of $$(\cos\theta+1)(\cos\theta-1)$$?`,
      parts: [mc('Choose the correct answer below.', [L('A', R`-\sin^2\theta`), L('B', R`-\csc^2\theta`), L('C', R`-\cos^2\theta`), L('D', R`-\cot^2\theta`), L('E', R`-\tan^2\theta`)], 0)],
    },
    // 18
    {
      prompt: R`Establish the identity.

$$\csc u-\cot u=\dfrac{\sin u}{1+\cos u}$$`,
      parts: [mc('Which of the following statements establishes the identity?', [
        { text: R`A. $$\begin{array}{l}\csc u-\cot u=\dfrac{1}{\sin u}-\dfrac{\cos u}{\sin u}=\left(\dfrac{1-\cos u}{\sin u}\right)\cdot\left(\dfrac{1+\cos u}{1+\cos u}\right)=\dfrac{1-\cos^2 u}{\sin u(1+\cos u)}\\[8pt]=\dfrac{\sin^2 u}{\sin u(1+\cos u)}=\dfrac{\sin u}{1+\cos u}\end{array}$$` },
        { text: R`B. $$\begin{array}{l}\csc u-\cot u=\dfrac{1}{\cos u}-\dfrac{\sin u}{\cos u}=\left(\dfrac{1-\sin u}{\cos u}\right)\cdot\left(\dfrac{1+\sin u}{1+\sin u}\right)=\dfrac{1+\sin^2 u}{\cos u(1+\sin u)}\\[8pt]=\dfrac{\sin u}{1+\cos u}\end{array}$$` },
        { text: R`C. $$\begin{array}{l}\csc u-\cot u=\dfrac{1}{\sin u}-\dfrac{\cos u}{\sin u}=\left(\dfrac{1-\cos u}{\sin u}\right)\cdot\left(\dfrac{1+\cos u}{1+\cos u}\right)=\dfrac{1+\cos^2 u}{\sin u(1+\cos u)}\\[8pt]=\dfrac{\sin^2 u}{\sin u(1+\cos u)}=\dfrac{\sin u}{1+\cos u}\end{array}$$` },
      ], 0)],
    },
    // 19
    {
      prompt: R`Prove the identity.

$$\dfrac{\cos^2 x-1}{\cos x}=-\tan x\sin x$$

To prove the identity, start with the more complicated side and transform it to look like the other side. Choose the correct transformations and transform the expression at each step.`,
      parts: [
        { id: 'step', type: 'expr', onlyTrig: ['sin'], label: R`$$\dfrac{\cos^2 x-1}{\cos x}=\dfrac{\text{(blank)}}{\cos x}$$ — fill in the blank:`, correctAnswer: '-sin(x)^2' },
        mc('(1) The step above was:', ['Apply a reciprocal identity.', 'Apply a Pythagorean identity.', 'Cancel common factors.', 'Apply a quotient identity.'], 1, 'just1'),
        mc(R`(2) The next step, $$\dfrac{-\sin^2 x}{\cos x}=-\tan x\sin x$$, was:`, ['Use a reciprocal identity.', 'Divide out the common factor and then use a quotient identity.', 'Use a quotient identity.', 'Divide out the common factor and then use a reciprocal identity.'], 2, 'just2'),
      ],
    },
    // 20
    {
      prompt: R`Prove the identity.

$$\dfrac{2}{1-\sin x}+\dfrac{2}{1+\sin x}=4\sec^2 x$$

To prove the identity, start with the more complicated side and transform it to look like the other side. Choose the correct transformations and transform the expression at each step.`,
      parts: [
        { id: 'n1', type: 'expr', trigCalls: NO_FN, label: R`$$\dfrac{2}{1-\sin x}+\dfrac{2}{1+\sin x}=\dfrac{\text{(blank)}}{1-\sin^2 x}$$ — fill in the blank:`, correctAnswer: '4' },
        mc('(1) The step above was:', ['Cancel common factors.', 'Combine like terms.', 'Combine using the least common denominator.', 'Apply a Pythagorean identity.'], 2, 'just1'),
        { id: 'n2', type: 'expr', onlyTrig: ['cos'], label: R`$$=\text{(blank)}$$ — fill in the blank:`, correctAnswer: '4/cos(x)^2' },
        mc('(2) The step above was:', ['Apply a quotient identity.', 'Apply a Pythagorean identity.', 'Cancel common factors.', 'Apply a reciprocal identity.'], 1, 'just2'),
        mc(R`(3) The final step, $$=4\sec^2 x$$, was:`, ['Apply a reciprocal identity.', 'Cancel common factors.', 'Apply a Pythagorean identity.', 'Apply a quotient identity.'], 0, 'just3'),
      ],
    },
    // 21
    {
      prompt: R`Prove the following trigonometric identity.

$$\dfrac{\sec^2 x-1}{\sin^2 x+\cos^2 x}=\tan^2 x$$`,
      parts: [
        { id: 'num', type: 'expr', onlyTrig: ['tan'], label: R`Use a trigonometric identity to write an equivalent expression for the numerator: $$\dfrac{\text{(blank)}}{\sin^2 x+\cos^2 x}=\tan^2 x$$`, correctAnswer: 'tan(x)^2' },
        { id: 'den', type: 'expr', trigCalls: NO_FN, label: R`Use a trigonometric identity to write an equivalent expression for the denominator: $$\dfrac{\tan^2 x}{\text{(blank)}}=\tan^2 x$$`, correctAnswer: '1' },
      ],
    },
    // 22
    { prompt: R`Use one or more of the six sum and difference identities to find the exact value of the expression.

$$\sin(15^\circ)$$`, parts: [val('v', R`$$\sin(15^\circ)=$$ (Type an exact answer, using fraction, radicals and a rationalized denominator. Simplify your answer.)`, '(sqrt(6)-sqrt(2))/4')] },
    // 23
    { prompt: R`Use a sum or difference identity to find the exact value of the expression.

$$\tan 15^\circ$$`, parts: [val('v', R`$$\tan 15^\circ=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '2-sqrt(3)')] },
    // 24
    { prompt: R`Use one or more of the six sum and difference identities to find the exact value of the expression.

$$\sin(105^\circ)$$`, parts: [val('v', R`$$\sin(105^\circ)=$$ (Type an exact answer, using fraction, radicals and a rationalized denominator. Simplify your answer.)`, '(sqrt(6)+sqrt(2))/4')] },
    // 25
    { prompt: R`Use a cosine sum or difference identity to find the exact value.

$$\cos\left(\dfrac{5\pi}{12}\right)$$`, parts: [val('v', R`$$\cos\left(\dfrac{5\pi}{12}\right)=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '(sqrt(6)-sqrt(2))/4')] },
    // 26
    { prompt: R`Use a sum or difference identity to find the exact value of the expression.

$$\tan\left(\dfrac{-5\pi}{12}\right)$$`, parts: [val('v', R`$$\tan\left(\dfrac{-5\pi}{12}\right)=$$ (Simplify your answer. Use integers or fractions for any numbers in the expression.)`, '-(2+sqrt(3))')] },
    // 27
    {
      prompt: R`Simplify the expression by using the appropriate identities. Do not use a calculator.

$$\sin 6^\circ\cos 8^\circ-\cos 6^\circ\sin 8^\circ$$`,
      parts: [{ id: 'v', type: 'expr', degrees: true, trigCalls: ONE_FN, label: R`$$\sin 6^\circ\cos 8^\circ-\cos 6^\circ\sin 8^\circ=$$ (Type an exact answer in simplified form. Type your answer in degrees. Do not include the degree symbol in your answer.)`, correctAnswer: '-sin(2)' }],
    },
    // 28
    {
      prompt: R`Write the expression as the sine, cosine, or tangent of an angle.

$$\sin\dfrac{\pi}{12}\cos\dfrac{7\pi}{12}+\cos\dfrac{\pi}{12}\sin\dfrac{7\pi}{12}$$`,
      parts: [{ id: 'v', type: 'expr', trigForm: { fn: 'sin', angle: '2*pi/3' }, correctAnswer: 'sin(2*pi/3)', label: R`$$\sin\dfrac{\pi}{12}\cos\dfrac{7\pi}{12}+\cos\dfrac{\pi}{12}\sin\dfrac{7\pi}{12}=$$` }],
    },
    // 29
    {
      prompt: R`Write the expression as the sine, cosine, or tangent of an angle.

$$\dfrac{\tan 26^\circ+\tan 29^\circ}{1-\tan 26^\circ\tan 29^\circ}$$`,
      parts: [
        mc('The expression equals the ___ of the angle below.', ['cos', 'tan', 'sin'], 1, 'fn'),
        { id: 'angle', type: 'expr', label: 'Angle: ___° (Simplify your answer.)', correctAnswer: '55' },
      ],
    },
    // 30
    {
      prompt: R`Simplify the expression by using appropriate identities. Do not use a calculator.

$$\dfrac{\tan(\pi/6)-\tan(\pi/7)}{1+\tan(\pi/6)\tan(\pi/7)}$$`,
      parts: [{ id: 'v', type: 'expr', trigForm: { fn: 'tan', angle: 'pi/42' }, correctAnswer: 'tan(pi/42)', label: R`$$\dfrac{\tan(\pi/6)-\tan(\pi/7)}{1+\tan(\pi/6)\tan(\pi/7)}=$$ (Type an exact answer in simplified form. Use integers or fractions for any numbers in the expression.)` }],
    },
    // 31
    {
      prompt: R`Write the expression as the sine, cosine, or tangent of an angle.

$$\sin 6x\cos 4x-\cos 6x\sin 4x$$`,
      parts: [{ id: 'v', type: 'expr', trigForm: { fn: 'sin', angle: '2*x' }, correctAnswer: 'sin(2*x)', label: R`$$\sin 6x\cos 4x-\cos 6x\sin 4x=$$ (Simplify your answer.)` }],
    },
    // 32
    {
      prompt: R`Write the expression as the sine, cosine, or tangent of an angle.

$$\dfrac{\tan 6y+\tan x}{1-\tan 6y\tan x}$$`,
      parts: [{ id: 'v', type: 'expr', trigForm: { fn: 'tan', angle: '6*y+x' }, correctAnswer: 'tan(6*y+x)', label: R`$$\dfrac{\tan 6y+\tan x}{1-\tan 6y\tan x}=$$ (Simplify your answer.)` }],
    },
    // 33
    {
      prompt: R`Find the exact value of $$\sin 22.5^\circ$$ using the half-angle identity.`,
      parts: [mc(R`Choose the exact value of $$\sin 22.5^\circ$$.`, [L('A', R`\dfrac{\sqrt{2+\sqrt{2}}}{2}`), L('B', R`-\dfrac{\sqrt{2-\sqrt{2}}}{2}`), L('C', R`\dfrac{\sqrt{2-\sqrt{2}}}{2}`), L('D', R`\dfrac{\sqrt{2}}{4}`)], 2)],
    },
    // 34
    { prompt: R`Use the half-angle formulas to find the exact value of the trigonometric function $$\cos 67.5^\circ$$.`, parts: [val('v', R`$$\cos 67.5^\circ=$$ (Type an exact answer, using radicals as needed.)`, 'sqrt(2-sqrt(2))/2')] },
    // 35
    { prompt: R`Find the exact value of $$\tan\dfrac{\pi}{12}$$ using the half-angle identity.`, parts: [val('v', R`$$\tan\dfrac{\pi}{12}=$$ (Simplify your answer. Type an exact answer, using radicals as needed.)`, '2-sqrt(3)')] },
    // 36
    { prompt: R`Use half-angle identities to find an exact value without a calculator.

$$\cos\left(\dfrac{7\pi}{8}\right)$$`, parts: [val('v', R`$$\cos\left(\dfrac{7\pi}{8}\right)=$$ (Type an exact answer. Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '-sqrt(2+sqrt(2))/2')] },
  ],
};
