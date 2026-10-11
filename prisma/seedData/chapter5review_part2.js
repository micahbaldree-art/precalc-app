// Chapter 5 Review Part 2 — transcribed from the printed assignment + answer key.
// Choices keep their printed order (including repeated/identical distractors).
// Q5 is printed identically to Q4 in the original; here Q5 uses cos y csc(pi/2 - y)
// so the two questions differ (same type, answer 1).
const R = String.raw;
const { deg, rad, sdChoices, haChoices } = require('../../lib/trigSeedHelpers');

const ONE_FN = { min: 1, max: 1 };
const NO_FN = { max: 0 };
const L = (letter, latex) => ({ text: `${letter}. $$${latex}$$` });
const val = (id, label, answer) => ({ id, type: 'expr', exact: true, label, correctAnswer: answer });
const box = (id, label, answer) => ({ id, type: 'expr', exact: true, label, correctAnswer: answer });
const mc = (label, choices, correctIndex, id = 'mc') => ({ id, type: 'mc', label, choices, correctIndex });
const simp = (id, label, answer, rule = ONE_FN) => ({ id, type: 'expr', trigCalls: rule, label, correctAnswer: answer });

const A180 = deg(180), B45 = deg(45);
const PI3 = rad(1, 3), PI4 = rad(1, 4), TWO3 = rad(2, 3);

module.exports = {
  title: 'Chapter 5 Review Part 2',
  questions: [
    // 1
    { prompt: R`Use identities to find the value of the expression.

If $$\sin(\theta)=0.17$$, find $$\cos\left(\dfrac{\pi}{2}-\theta\right)$$.`, parts: [{ id: 'v', type: 'expr', label: R`$$\cos\left(\dfrac{\pi}{2}-\theta\right)=$$`, correctAnswer: '0.17' }] },
    // 2
    { prompt: R`Use identities to find the value of the expression.

If $$\sin\left(\theta-\dfrac{\pi}{2}\right)=0.74$$, find $$\cos(-\theta)$$.`, parts: [{ id: 'v', type: 'expr', label: R`$$\cos(-\theta)=$$`, correctAnswer: '-0.74' }] },
    // 3
    { prompt: R`Use basic identities to simplify the expression.

$$\cot x\sin x$$`, parts: [simp('v', R`$$\cot x\sin x=$$`, 'cos(x)')] },
    // 4
    { prompt: R`Use basic identities to simplify the expression.

$$\sin y\sec\left(\dfrac{\pi}{2}-y\right)$$`, parts: [simp('v', R`$$\sin y\sec\left(\dfrac{\pi}{2}-y\right)=$$ (Simplify your answer.)`, '1', NO_FN)] },
    // 5 (varied: printed Q5 is identical to Q4)
    { prompt: R`Use basic identities to simplify the expression.

$$\cos y\csc\left(\dfrac{\pi}{2}-y\right)$$`, parts: [simp('v', R`$$\cos y\csc\left(\dfrac{\pi}{2}-y\right)=$$ (Simplify your answer.)`, '1', NO_FN)] },
    // 6
    {
      prompt: R`Complete the identity.

$$\dfrac{\cot^2\alpha+1}{\csc\alpha}=\underline{\hspace{2em}}$$`,
      parts: [mc('Choose the correct answer below.', [L('A', R`\sin\alpha`), L('B', R`-\cos\alpha`), L('C', R`-\sin\alpha`), L('D', R`\csc\alpha`), L('E', R`-\csc\alpha`), L('F', R`-\sec\alpha`), L('G', R`\cos\alpha`), L('H', R`\sec\alpha`)], 3)],
    },
    // 7
    {
      prompt: R`Complete the identity.

$$\dfrac{1+\cot^2\alpha}{\csc\alpha}=\underline{\hspace{2em}}$$`,
      parts: [mc('Choose the correct answer below.', [L('A', R`\cos\alpha`), L('B', R`\sin\alpha`), L('C', R`-\sec\alpha`), L('D', R`\csc\alpha`), L('E', R`-\cos\alpha`), L('F', R`\sec\alpha`), L('G', R`-\sin\alpha`), L('H', R`-\csc\alpha`)], 3)],
    },
    // 8
    {
      prompt: R`Simplify the expression $$\cos(-x)\cdot\tan(-x)$$.`,
      parts: [mc(R`Choose the correct simplified form of $$\cos(-x)\cdot\tan(-x)$$.`, [L('A', R`\sin x`), L('B', R`-\sin x`), L('C', R`\cos x`), L('D', R`\tan x`)], 1)],
    },
    // 9
    { prompt: R`Simplify the expression.

$$\cos(-x)\csc\left(\dfrac{\pi}{2}-x\right)$$`, parts: [simp('v', R`$$\cos(-x)\csc\left(\dfrac{\pi}{2}-x\right)=$$ (Simplify your answer.)`, '1', NO_FN)] },
    // 10
    {
      prompt: R`Simplify the expression to either a constant or a basic trigonometric function. Support your result graphically.

$$\dfrac{\tan\left(\dfrac{\pi}{2}-x\right)\csc x}{\csc^2 x}$$`,
      parts: [simp('v', R`$$\dfrac{\tan\left(\frac{\pi}{2}-x\right)\csc x}{\csc^2 x}=$$`, 'cos(x)')],
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
      parts: [mc(R`What does $$\dfrac{1}{1+\cos x}-\dfrac{1}{1-\cos x}$$ equal?`, [L('A', R`\dfrac{\sec x}{-2\cot x\csc x}`), L('B', R`\sin^2 x`), L('C', R`-2\cot x\csc x`), L('D', R`\dfrac{2\cos x}{\sin^2 x}`)], 2)],
    },
    // 14
    {
      prompt: R`Combine the fractions and simplify to a multiple of a power of a basic trigonometric function.

$$\dfrac{\csc x}{\cot^2 x}-\dfrac{\tan^2 x}{\csc x}$$`,
      parts: [simp('v', R`$$\dfrac{\csc x}{\cot^2 x}-\dfrac{\tan^2 x}{\csc x}=$$`, 'sin(x)')],
    },
    // 15
    {
      prompt: R`Simplify the expression.

$$\dfrac{25-\cos^2 x}{5-\cos x}$$`,
      parts: [mc(R`Choose the correct answer for $$\dfrac{25-\cos^2 x}{5-\cos x}$$.`, [L('A', R`5-\cos x`), L('B', R`\cos x-5`), L('C', R`5+\cos x`), 'D. Cannot be simplified'], 2)],
    },
    // 16
    {
      prompt: R`Determine which of the following could not be set equal to $$\sin x$$ as an identity?`,
      parts: [mc('Choose the correct answer below.', [L('A', R`\tan x\sec x`), L('B', R`\cos\left(x-\dfrac{\pi}{2}\right)`), L('C', R`-\sin(-x)`), L('D', R`\pm\sqrt{1-\cos^2 x}`), L('E', R`\cos\left(\dfrac{\pi}{2}-x\right)`)], 0)],
    },
    // 17
    {
      prompt: R`What is the simplified form of $$(\sec\theta+1)(\sec\theta-1)$$?`,
      parts: [mc('Choose the correct answer below.', [L('A', R`\cot^2\theta`), L('B', R`\tan^2\theta`), L('C', R`\cos^2\theta`), L('D', R`\sec^2\theta`), L('E', R`\sin^2\theta`)], 1)],
    },
    // 18
    {
      prompt: R`Establish the identity.

$$\cot u-\csc u=-\dfrac{\sin u}{1+\cos u}$$`,
      parts: [mc('Which of the following statements establishes the identity?', [
        { text: R`A. $$\begin{array}{l}\cot u-\csc u=\dfrac{\cos u}{\sin u}-\dfrac{1}{\sin u}=\left(\dfrac{\cos u-1}{\sin u}\right)\cdot\left(\dfrac{\cos u+1}{\cos u+1}\right)=\dfrac{\cos^2 u-1}{\sin u(\cos u+1)}\\[8pt]=\dfrac{-\sin^2 u}{\sin u(\cos u+1)}=-\dfrac{\sin u}{\cos u+1}\end{array}$$` },
        { text: R`B. $$\begin{array}{l}\cot u-\csc u=\dfrac{\sin u}{\cos u}-\dfrac{1}{\cos u}=\left(\dfrac{\sin u-1}{\cos u}\right)\cdot\left(\dfrac{\sin u+1}{\sin u+1}\right)=\dfrac{\sin^2 u+1}{\cos u(\sin u+1)}\\[8pt]=-\dfrac{\sin u}{\cos u+1}\end{array}$$` },
        { text: R`C. $$\begin{array}{l}\cot u-\csc u=\dfrac{\cos u}{\sin u}-\dfrac{1}{\sin u}=\left(\dfrac{\cos u-1}{\sin u}\right)\cdot\left(\dfrac{\cos u+1}{\cos u+1}\right)=\dfrac{\cos^2 u+1}{\sin u(\cos u+1)}\\[8pt]=\dfrac{-\sin^2 u}{\sin u(\cos u+1)}=-\dfrac{\sin u}{\cos u+1}\end{array}$$` },
      ], 0)],
    },
    // 19
    {
      prompt: R`Prove the identity.

$$\dfrac{1-\cos^2 x}{\cos x}=\tan x\sin x$$

To prove the identity, start with the more complicated side and transform it to look like the other side. Choose the correct transformations and transform the expression at each step.`,
      parts: [
        { id: 'step', type: 'expr', onlyTrig: ['sin'], label: R`$$\dfrac{1-\cos^2 x}{\cos x}=\dfrac{\text{(blank)}}{\cos x}$$ — fill in the blank:`, correctAnswer: 'sin(x)^2' },
        mc('(1) The step above was:', ['Apply a reciprocal identity.', 'Apply a Pythagorean identity.', 'Apply a quotient identity.', 'Cancel common factors.'], 1, 'just1'),
        mc(R`(2) The next step, $$\dfrac{\sin^2 x}{\cos x}=\tan x\sin x$$, was:`, ['Divide out the common factor and then use a reciprocal identity.', 'Use a reciprocal identity.', 'Use a quotient identity.', 'Divide out the common factor and then use a quotient identity.'], 2, 'just2'),
      ],
    },
    // 20
    {
      prompt: R`Prove the identity.

$$\dfrac{10}{1-\sin x}+\dfrac{10}{1+\sin x}=20\sec^2 x$$

To prove the identity, start with the more complicated side and transform it to look like the other side. Choose the correct transformations and transform the expression at each step.`,
      parts: [
        { id: 'n1', type: 'expr', trigCalls: NO_FN, label: R`$$\dfrac{10}{1-\sin x}+\dfrac{10}{1+\sin x}=\dfrac{\text{(blank)}}{1-\sin^2 x}$$ — fill in the blank:`, correctAnswer: '20' },
        mc('(1) The step above was:', ['Combine like terms.', 'Cancel common factors.', 'Combine using the least common denominator.', 'Apply a Pythagorean identity.'], 2, 'just1'),
        { id: 'n2', type: 'expr', onlyTrig: ['cos'], label: R`$$=\text{(blank)}$$ — fill in the blank:`, correctAnswer: '20/cos(x)^2' },
        mc('(2) The step above was:', ['Apply a reciprocal identity.', 'Apply a quotient identity.', 'Cancel common factors.', 'Apply a Pythagorean identity.'], 3, 'just2'),
        mc(R`(3) The final step, $$=20\sec^2 x$$, was:`, ['Apply a quotient identity.', 'Cancel common factors.', 'Apply a Pythagorean identity.', 'Apply a reciprocal identity.'], 3, 'just3'),
      ],
    },
    // 21
    {
      prompt: R`Prove the following trigonometric identity.

$$\dfrac{1-\sin^2 x}{\sin^2 x+\cos^2 x}=\cos^2 x$$`,
      parts: [
        { id: 'num', type: 'expr', onlyTrig: ['cos'], label: R`Use a trigonometric identity to write an equivalent expression for the numerator: $$\dfrac{\text{(blank)}}{\sin^2 x+\cos^2 x}=\cos^2 x$$`, correctAnswer: 'cos(x)^2' },
        { id: 'den', type: 'expr', trigCalls: NO_FN, label: R`Use a trigonometric identity to write an equivalent expression for the denominator: $$\dfrac{\cos^2 x}{\text{(blank)}}=\cos^2 x$$`, correctAnswer: '1' },
      ],
    },
    // 22
    { prompt: R`Use one or more of the six sum and difference identities to find the exact value of the expression.

$$\sin(15^\circ)$$`, parts: [val('v', R`$$\sin(15^\circ)=$$ (Type an exact answer, using fraction, radicals and a rationalized denominator. Simplify your answer.)`, '(sqrt(6)-sqrt(2))/4')] },
    // 23
    {
      prompt: R`Use a sum or difference identity to find the exact value of the expression.

$$\tan 135^\circ$$`,
      parts: [
        mc(R`Which difference formula should be used to find $$\tan 135^\circ$$? Choose the correct answer.`, sdChoices(R`\tan 135^\circ`, A180, B45, ['t1', 't3', 't2', 't4']), 2),
        val('v', R`The exact value of $$\tan 135^\circ$$ is (Simplify your answer. Use integers or fractions for any numbers in the expression.)`, '-1'),
      ],
    },
    // 24
    { prompt: R`Use a sum or difference identity to find the exact value of the expression.

$$\tan 15^\circ$$`, parts: [val('v', R`$$\tan 15^\circ=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '2-sqrt(3)')] },
    // 25
    {
      prompt: R`Use a sum or difference identity to find the exact value of the expression.

$$\sin 135^\circ$$`,
      parts: [
        mc(R`Which sum or difference formula should be used to find $$\sin 135^\circ$$? Choose the correct answer below.`, sdChoices(R`\sin 135^\circ`, A180, B45, ['f1', 'f2', 'f4', 'f3']), 2),
        val('v', R`The exact value of $$\sin 135^\circ$$ is (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, 'sqrt(2)/2'),
      ],
    },
    // 26
    { prompt: R`Use one or more of the six sum and difference identities to find the exact value of the expression.

$$\sin(15^\circ)$$`, parts: [val('v', R`$$\sin(15^\circ)=$$ (Type an exact answer, using fraction, radicals and a rationalized denominator. Simplify your answer.)`, '(sqrt(6)-sqrt(2))/4')] },
    // 27
    {
      prompt: R`Use a cosine sum or difference identity to find the exact value.

$$\cos\left(-\dfrac{\pi}{12}\right)$$`,
      parts: [
        mc(R`Which sum or difference formula should be used to find $$\cos\left(-\dfrac{\pi}{12}\right)$$? Choose the correct answer below.`, sdChoices(R`\cos\left(-\dfrac{\pi}{12}\right)`, PI4, PI3, ['f2', 'f1', 'f4', 'f3']), 0),
        val('v', R`The exact value of $$\cos\left(-\dfrac{\pi}{12}\right)$$ is (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '(sqrt(2)+sqrt(6))/4'),
      ],
    },
    // 28
    { prompt: R`Use a cosine sum or difference identity to find the exact value.

$$\cos\left(\dfrac{7\pi}{12}\right)$$`, parts: [val('v', R`$$\cos\left(\dfrac{7\pi}{12}\right)=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '(sqrt(2)-sqrt(6))/4')] },
    // 29
    {
      prompt: R`Use a sum or difference identity to find the exact value of the expression.

$$\tan\left(-\dfrac{\pi}{12}\right)$$`,
      parts: [
        mc(R`Which difference formula should be used to find $$\tan\left(-\dfrac{\pi}{12}\right)$$? Choose the correct answer below.`, sdChoices(R`\tan\left(-\dfrac{\pi}{12}\right)`, PI4, PI3, ['t1', 't3', 't2', 't4']), 2),
        val('v', R`The exact value of $$\tan\left(-\dfrac{\pi}{12}\right)$$ is (Simplify your answer. Use integers or fractions for any numbers in the expression.)`, 'sqrt(3)-2'),
      ],
    },
    // 30
    { prompt: R`Use a sum or difference identity to find the exact value of the expression.

$$\tan\left(\dfrac{13\pi}{12}\right)$$`, parts: [val('v', R`$$\tan\left(\dfrac{13\pi}{12}\right)=$$ (Simplify your answer. Use integers or fractions for any numbers in the expression.)`, '2-sqrt(3)')] },
    // 31
    {
      prompt: R`Use a cosine sum or difference identity to find the exact value.

$$\cos\dfrac{11\pi}{12}$$`,
      parts: [
        mc(R`Which sum or difference formula should be used to find $$\cos\dfrac{11\pi}{12}$$? Choose the correct answer below.`, sdChoices(R`\cos\dfrac{11\pi}{12}`, PI4, TWO3, ['f3', 'f2', 'f1', 'f3']), 2),
        val('v', R`The exact value of $$\cos\dfrac{11\pi}{12}$$ is (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '-(sqrt(2)+sqrt(6))/4'),
      ],
    },
    // 32
    {
      prompt: R`Simplify the expression by using the appropriate identities. Do not use a calculator.

$$\sin 3^\circ\cos 6^\circ-\cos 3^\circ\sin 6^\circ$$`,
      parts: [{ id: 'v', type: 'expr', degrees: true, trigCalls: ONE_FN, label: R`$$\sin 3^\circ\cos 6^\circ-\cos 3^\circ\sin 6^\circ=$$ (Type an exact answer in simplified form. Type your answer in degrees. Do not include the degree symbol in your answer.)`, correctAnswer: '-sin(3)' }],
    },
    // 33
    {
      prompt: R`Write the expression as the sine, cosine, or tangent of an angle.

$$\sin\dfrac{\pi}{6}\cos\dfrac{\pi}{2}+\cos\dfrac{\pi}{6}\sin\dfrac{\pi}{2}$$`,
      parts: [{ id: 'v', type: 'expr', trigForm: { fn: 'sin', angle: '2*pi/3' }, correctAnswer: 'sin(2*pi/3)', label: R`$$\sin\dfrac{\pi}{6}\cos\dfrac{\pi}{2}+\cos\dfrac{\pi}{6}\sin\dfrac{\pi}{2}=$$` }],
    },
    // 34
    {
      prompt: R`Write the expression as the sine, cosine, or tangent of an angle.

$$\dfrac{\tan 21^\circ+\tan 36^\circ}{1-\tan 21^\circ\tan 36^\circ}$$`,
      parts: [
        mc('The expression equals the ___ of the angle below.', ['tan', 'sin', 'cos'], 0, 'fn'),
        { id: 'angle', type: 'expr', label: 'Angle: ___° (Simplify your answer.)', correctAnswer: '57' },
      ],
    },
    // 35
    {
      prompt: R`Simplify the expression by using appropriate identities. Do not use a calculator.

$$\dfrac{\tan(\pi/3)-\tan(\pi/10)}{1+\tan(\pi/3)\tan(\pi/10)}$$`,
      parts: [{ id: 'v', type: 'expr', trigForm: { fn: 'tan', angle: '7*pi/30' }, correctAnswer: 'tan(7*pi/30)', label: R`$$\dfrac{\tan(\pi/3)-\tan(\pi/10)}{1+\tan(\pi/3)\tan(\pi/10)}=$$ (Type an exact answer in simplified form. Use integers or fractions for any numbers in the expression.)` }],
    },
    // 36
    {
      prompt: R`Write the expression as the sine, cosine, or tangent of an angle.

$$\sin 4x\cos x-\cos 4x\sin x$$`,
      parts: [{ id: 'v', type: 'expr', trigForm: { fn: 'sin', angle: '3*x' }, correctAnswer: 'sin(3*x)', label: R`$$\sin 4x\cos x-\cos 4x\sin x=$$ (Simplify your answer.)` }],
    },
    // 37
    {
      prompt: R`Write the expression as the sine, cosine, or tangent of an angle.

$$\dfrac{\tan 4y+\tan x}{1-\tan 4y\tan x}$$`,
      parts: [{ id: 'v', type: 'expr', trigForm: { fn: 'tan', angle: '4*y+x' }, correctAnswer: 'tan(4*y+x)', label: R`$$\dfrac{\tan 4y+\tan x}{1-\tan 4y\tan x}=$$ (Simplify your answer.)` }],
    },
    // 38
    {
      prompt: R`Use half-angle identities to find an exact value without a calculator.

$$\sin 105^\circ$$`,
      parts: [
        mc(R`Which of the following half-angle formulas should be used for $$\sin 105^\circ$$? Select the correct choice below and fill in the answer boxes to complete your choice. (Type an exact answer, using π as needed. Use integers or fractions for any numbers in the expression.)`, haChoices('sin', ['+1-', '-1-', '-1+', '+1+']), 0),
        box('b1', 'Box in the left side, sin(___/2) (in degrees):', '210'),
        box('b2', 'Box inside cos(___) (in degrees):', '210'),
        val('v', R`$$\sin 105^\circ=$$ (Simplify your answer. Type an exact answer, using radicals as needed.)`, 'sqrt(2+sqrt(3))/2'),
      ],
    },
    // 39
    {
      prompt: R`Find the exact value of $$\sin 22.5^\circ$$ using the half-angle identity.`,
      parts: [mc(R`Choose the exact value of $$\sin 22.5^\circ$$.`, [L('A', R`\dfrac{\sqrt{2+\sqrt{2}}}{2}`), L('B', R`\dfrac{\sqrt{2-\sqrt{2}}}{2}`), L('C', R`-\dfrac{\sqrt{2-\sqrt{2}}}{2}`), L('D', R`\dfrac{\sqrt{2}}{4}`)], 1)],
    },
    // 40
    {
      prompt: R`Use half-angle identities to find an exact value without a calculator.

$$\cos 15^\circ$$`,
      parts: [
        mc(R`Which of the following half-angle formulas should be used for $$\cos 15^\circ$$? Select the correct choice below and fill in the answer boxes to complete your choice. (Type an exact answer, using π as needed. Use integers or fractions for any numbers in the expression.)`, haChoices('cos', ['+1-', '-1-', '+1+', '-1+']), 2),
        box('b1', 'Box in the left side, cos(___/2) (in degrees):', '30'),
        box('b2', 'Box inside cos(___) (in degrees):', '30'),
        val('v', R`$$\cos 15^\circ=$$ (Simplify your answer. Type an exact answer, using radicals as needed.)`, 'sqrt(2+sqrt(3))/2'),
      ],
    },
    // 41
    { prompt: R`Use the half-angle formulas to find the exact value of the trigonometric function $$\cos 75^\circ$$.`, parts: [val('v', R`$$\cos 75^\circ=$$ (Type an exact answer, using radicals as needed.)`, 'sqrt(2-sqrt(3))/2')] },
    // 42
    {
      prompt: R`Use half-angle identities to find an exact value without a calculator.

$$\tan\left(\dfrac{3\pi}{8}\right)$$`,
      parts: [
        mc(R`Which of the following half-angle formulas should be used for $$\tan\left(\dfrac{3\pi}{8}\right)$$? Select the correct choice below and fill in the answer boxes to complete your choice. (Type an exact answer, using π as needed. Use integers or fractions for any numbers in the expression.)`, haChoices('tan', ['cos/1-sin', 'cos/1+sin', 'sin/1-cos', 'sin/1+cos']), 3),
        box('b1', 'Box in the left side, tan(___/2):', '3*pi/4'),
        box('b2', 'Box in the numerator:', '3*pi/4'),
        box('b3', 'Box in the denominator:', '3*pi/4'),
        val('v', R`$$\tan\left(\dfrac{3\pi}{8}\right)=$$ (Simplify your answer. Type an exact answer, using radicals as needed. Rationalize the denominator.)`, 'sqrt(2)+1'),
      ],
    },
    // 43
    { prompt: R`Find the exact value of $$\tan\dfrac{5\pi}{12}$$ using the half-angle identity.`, parts: [val('v', R`$$\tan\dfrac{5\pi}{12}=$$ (Simplify your answer. Type an exact answer, using radicals as needed.)`, '2+sqrt(3)')] },
    // 44
    {
      prompt: R`Use half-angle identities to find an exact value without a calculator.

$$\cos\left(\dfrac{\pi}{12}\right)$$`,
      parts: [
        mc(R`Which of the following half-angle formulas should be used for $$\cos\left(\dfrac{\pi}{12}\right)$$? Select the correct choice below and fill in the answer boxes to complete your choice. (Type your answer in radians. Type an exact answer, using π as needed. Use integers or fractions for any numbers in the expression.)`, haChoices('cos', ['+1-', '+1+', '-1-', '-1+']), 1),
        box('b1', 'Box in the left side, cos(___/2):', 'pi/6'),
        box('b2', 'Box inside cos(___):', 'pi/6'),
        val('v', R`$$\cos\left(\dfrac{\pi}{12}\right)=$$ (Type an exact answer. Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, 'sqrt(2+sqrt(3))/2'),
      ],
    },
    // 45
    { prompt: R`Use half-angle identities to find an exact value without a calculator.

$$\cos\left(\dfrac{7\pi}{8}\right)$$`, parts: [val('v', R`$$\cos\left(\dfrac{7\pi}{8}\right)=$$ (Type an exact answer. Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '-sqrt(2+sqrt(2))/2')] },
  ],
};
