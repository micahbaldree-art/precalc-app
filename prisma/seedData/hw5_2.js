// HW 5.2 - Advanced ID's — transcribed from the printed assignment + answer key.
// Choices keep the printed order. Where the original repeats a choice (Q10 A = D)
// it is repeated here too. The blanks inside the half-angle formula choices are
// graded as separate "box" parts.
const R = String.raw;

const ONE_FN = { min: 1, max: 1 };
const choice = (letter, latex) => ({ text: `${letter}. $$${latex}$$` });
const val = (id, label, answer) => ({ id, type: 'expr', exact: true, label, correctAnswer: answer });
const box = (id, label, answer) => ({ id, type: 'expr', exact: true, label, correctAnswer: answer });

module.exports = {
  title: "HW 5.2 - Advanced ID's",
  questions: [
    // 1
    {
      prompt: R`Use one or more of the six sum and difference identities to find the exact value of the expression.

$$\sin(105^\circ)$$`,
      parts: [val('v', R`$$\sin(105^\circ)=$$ (Type an exact answer, using fraction, radicals and a rationalized denominator. Simplify your answer.)`, '(sqrt(6)+sqrt(2))/4')],
    },
    // 2
    {
      prompt: R`Use a sum or difference identity to find the exact value of the expression.

$$\tan 135^\circ$$`,
      parts: [
        {
          id: 'mc', type: 'mc', label: R`Which difference formula should be used to find $$\tan 135^\circ$$? Choose the correct answer.`,
          choices: [
            choice('A', R`\tan 135^\circ=\dfrac{1-\tan 180^\circ\tan 45^\circ}{\tan 180^\circ+\tan 45^\circ}`),
            choice('B', R`\tan 135^\circ=\dfrac{\tan 180^\circ+\tan 45^\circ}{1-\tan 180^\circ\tan 45^\circ}`),
            choice('C', R`\tan 135^\circ=\dfrac{1+\tan 180^\circ\tan 45^\circ}{\tan 180^\circ-\tan 45^\circ}`),
            choice('D', R`\tan 135^\circ=\dfrac{\tan 180^\circ-\tan 45^\circ}{1+\tan 180^\circ\tan 45^\circ}`),
          ],
          correctIndex: 3,
        },
        val('v', R`The exact value of $$\tan 135^\circ$$ is (Simplify your answer. Use integers or fractions for any numbers in the expression.)`, '-1'),
      ],
    },
    // 3
    {
      prompt: R`Use a sum or difference identity to find the exact value of the expression.

$$\tan 105^\circ$$`,
      parts: [val('v', R`$$\tan 105^\circ=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '-2-sqrt(3)')],
    },
    // 4
    {
      prompt: R`Use a sum or difference identity to find the exact value of the expression.

$$\sin 105^\circ$$`,
      parts: [
        {
          id: 'mc', type: 'mc', label: R`Which sum or difference formula should be used to find $$\sin 105^\circ$$? Choose the correct answer below.`,
          choices: [
            choice('A', R`\sin 105^\circ=\cos 45^\circ\cos 60^\circ-\sin 45^\circ\sin 60^\circ`),
            choice('B', R`\sin 105^\circ=\cos 45^\circ\cos 60^\circ+\sin 45^\circ\sin 60^\circ`),
            choice('C', R`\sin 105^\circ=\sin 45^\circ\cos 60^\circ+\cos 45^\circ\sin 60^\circ`),
            choice('D', R`\sin 105^\circ=\sin 45^\circ\cos 60^\circ-\cos 45^\circ\sin 60^\circ`),
          ],
          correctIndex: 2,
        },
        val('v', R`The exact value of $$\sin 105^\circ$$ is (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '(sqrt(6)+sqrt(2))/4'),
      ],
    },
    // 5
    {
      prompt: R`Use one or more of the six sum and difference identities to find the exact value of the expression.

$$\sin(15^\circ)$$`,
      parts: [val('v', R`$$\sin(15^\circ)=$$ (Type an exact answer, using fraction, radicals and a rationalized denominator. Simplify your answer.)`, '(sqrt(6)-sqrt(2))/4')],
    },
    // 6
    {
      prompt: R`Use a cosine sum or difference identity to find the exact value.

$$\cos\dfrac{\pi}{12}$$`,
      parts: [
        {
          id: 'mc', type: 'mc', label: R`Which sum or difference formula should be used to find $$\cos\dfrac{\pi}{12}$$? Choose the correct answer below.`,
          choices: [
            choice('A', R`\cos\dfrac{\pi}{12}=\sin\dfrac{\pi}{3}\cos\dfrac{\pi}{4}-\cos\dfrac{\pi}{3}\sin\dfrac{\pi}{4}`),
            choice('B', R`\cos\dfrac{\pi}{12}=\sin\dfrac{\pi}{3}\cos\dfrac{\pi}{4}+\cos\dfrac{\pi}{3}\sin\dfrac{\pi}{4}`),
            choice('C', R`\cos\dfrac{\pi}{12}=\cos\dfrac{\pi}{3}\cos\dfrac{\pi}{4}+\sin\dfrac{\pi}{3}\sin\dfrac{\pi}{4}`),
            choice('D', R`\cos\dfrac{\pi}{12}=\cos\dfrac{\pi}{3}\cos\dfrac{\pi}{4}-\sin\dfrac{\pi}{3}\sin\dfrac{\pi}{4}`),
          ],
          correctIndex: 2,
        },
        val('v', R`The exact value of $$\cos\dfrac{\pi}{12}$$ is (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '(sqrt(2)+sqrt(6))/4'),
      ],
    },
    // 7
    {
      prompt: R`Use a cosine sum or difference identity to find the exact value.

$$\cos\left(\dfrac{7\pi}{12}\right)$$`,
      parts: [val('v', R`$$\cos\left(\dfrac{7\pi}{12}\right)=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '(sqrt(2)-sqrt(6))/4')],
    },
    // 8
    {
      prompt: R`Use a sum or difference identity to find the exact value of the expression.

$$\tan\dfrac{7\pi}{12}$$`,
      parts: [
        {
          id: 'mc', type: 'mc', label: R`Which sum formula should be used to find $$\tan\dfrac{7\pi}{12}$$? Choose the correct answer below.`,
          choices: [
            choice('A', R`\tan\dfrac{7\pi}{12}=\dfrac{\tan\frac{\pi}{4}+\tan\frac{\pi}{3}}{1-\tan\frac{\pi}{4}\tan\frac{\pi}{3}}`),
            choice('B', R`\tan\dfrac{7\pi}{12}=\dfrac{1+\tan\frac{\pi}{4}\tan\frac{\pi}{3}}{\tan\frac{\pi}{4}-\tan\frac{\pi}{3}}`),
            choice('C', R`\tan\dfrac{7\pi}{12}=\dfrac{\tan\frac{\pi}{4}-\tan\frac{\pi}{3}}{1+\tan\frac{\pi}{4}\tan\frac{\pi}{3}}`),
            choice('D', R`\tan\dfrac{7\pi}{12}=\dfrac{1-\tan\frac{\pi}{4}\tan\frac{\pi}{3}}{\tan\frac{\pi}{4}+\tan\frac{\pi}{3}}`),
          ],
          correctIndex: 0,
        },
        val('v', R`The exact value of $$\tan\dfrac{7\pi}{12}$$ is (Simplify your answer. Use integers or fractions for any numbers in the expression.)`, '-2-sqrt(3)'),
      ],
    },
    // 9
    {
      prompt: R`Use a sum or difference identity to find the exact value of the expression.

$$\tan\left(\dfrac{13\pi}{12}\right)$$`,
      parts: [val('v', R`$$\tan\left(\dfrac{13\pi}{12}\right)=$$ (Simplify your answer. Use integers or fractions for any numbers in the expression.)`, '2-sqrt(3)')],
    },
    // 10
    {
      prompt: R`Use a cosine sum or difference identity to find the exact value.

$$\cos\dfrac{11\pi}{12}$$`,
      parts: [
        {
          id: 'mc', type: 'mc', label: R`Which sum or difference formula should be used to find $$\cos\dfrac{11\pi}{12}$$? Choose the correct answer below.`,
          choices: [
            choice('A', R`\cos\dfrac{11\pi}{12}=\sin\dfrac{\pi}{4}\cos\dfrac{2\pi}{3}+\cos\dfrac{\pi}{4}\sin\dfrac{2\pi}{3}`),
            choice('B', R`\cos\dfrac{11\pi}{12}=\cos\dfrac{\pi}{4}\cos\dfrac{2\pi}{3}+\sin\dfrac{\pi}{4}\sin\dfrac{2\pi}{3}`),
            choice('C', R`\cos\dfrac{11\pi}{12}=\cos\dfrac{\pi}{4}\cos\dfrac{2\pi}{3}-\sin\dfrac{\pi}{4}\sin\dfrac{2\pi}{3}`),
            choice('D', R`\cos\dfrac{11\pi}{12}=\sin\dfrac{\pi}{4}\cos\dfrac{2\pi}{3}+\cos\dfrac{\pi}{4}\sin\dfrac{2\pi}{3}`),
          ],
          correctIndex: 2,
        },
        val('v', R`The exact value of $$\cos\dfrac{11\pi}{12}$$ is (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, '-(sqrt(2)+sqrt(6))/4'),
      ],
    },
    // 11
    {
      prompt: R`Simplify the expression by using the appropriate identities. Do not use a calculator.

$$\sin 6^\circ\cos 11^\circ-\cos 6^\circ\sin 11^\circ$$`,
      parts: [{ id: 'v', type: 'expr', degrees: true, trigCalls: ONE_FN, label: R`$$\sin 6^\circ\cos 11^\circ-\cos 6^\circ\sin 11^\circ=$$ (Type an exact answer in simplified form. Type your answer in degrees. Do not include the degree symbol in your answer.)`, correctAnswer: '-sin(5)' }],
    },
    // 12
    {
      prompt: R`Write the expression as the sine, cosine, or tangent of an angle.

$$\sin\dfrac{5\pi}{12}\cos\dfrac{\pi}{3}+\cos\dfrac{5\pi}{12}\sin\dfrac{\pi}{3}$$`,
      parts: [{ id: 'v', type: 'expr', trigForm: { fn: 'sin', angle: '3*pi/4' }, correctAnswer: 'sin(3*pi/4)', label: R`$$\sin\dfrac{5\pi}{12}\cos\dfrac{\pi}{3}+\cos\dfrac{5\pi}{12}\sin\dfrac{\pi}{3}=$$` }],
    },
    // 13
    {
      prompt: R`Write the expression as the sine, cosine, or tangent of an angle.

$$\dfrac{\tan 25^\circ+\tan 27^\circ}{1-\tan 25^\circ\tan 27^\circ}$$`,
      parts: [
        { id: 'fn', type: 'mc', label: 'The expression equals the ___ of the angle below.', choices: ['sin', 'cos', 'tan'], correctIndex: 2 },
        { id: 'angle', type: 'expr', label: 'Angle: ___° (Simplify your answer.)', correctAnswer: '52' },
      ],
    },
    // 14
    {
      prompt: R`Simplify the expression by using appropriate identities. Do not use a calculator.

$$\dfrac{\tan(\pi/5)-\tan(\pi/9)}{1+\tan(\pi/5)\tan(\pi/9)}$$`,
      parts: [{ id: 'v', type: 'expr', trigForm: { fn: 'tan', angle: '4*pi/45' }, correctAnswer: 'tan(4*pi/45)', label: R`$$\dfrac{\tan(\pi/5)-\tan(\pi/9)}{1+\tan(\pi/5)\tan(\pi/9)}=$$ (Type an exact answer in simplified form. Use integers or fractions for any numbers in the expression.)` }],
    },
    // 15
    {
      prompt: R`Write the expression as the sine, cosine, or tangent of an angle.

$$\sin 3x\cos x-\cos 3x\sin x$$`,
      parts: [{ id: 'v', type: 'expr', trigForm: { fn: 'sin', angle: '2*x' }, correctAnswer: 'sin(2*x)', label: R`$$\sin 3x\cos x-\cos 3x\sin x=$$ (Simplify your answer.)` }],
    },
    // 16
    {
      prompt: R`Write the expression as the sine, cosine, or tangent of an angle.

$$\dfrac{\tan 6y+\tan 2x}{1-\tan 6y\tan 2x}$$`,
      parts: [{ id: 'v', type: 'expr', trigForm: { fn: 'tan', angle: '6*y+2*x' }, correctAnswer: 'tan(6*y+2*x)', label: R`$$\dfrac{\tan 6y+\tan 2x}{1-\tan 6y\tan 2x}=$$ (Simplify your answer.)` }],
    },
    // 17
    {
      prompt: R`Use half-angle identities to find an exact value without a calculator.

$$\sin\dfrac{\pi}{8}$$`,
      parts: [
        {
          id: 'mc', type: 'mc', label: R`Which of the following half-angle formulas should be used for $$\sin\dfrac{\pi}{8}$$? Select the correct choice below and fill in the answer boxes to complete your choice. (Type an exact answer, using π as needed. Use integers or fractions for any numbers in the expression.)`,
          choices: [
            choice('A', R`\sin\dfrac{\square}{2}=-\sqrt{\dfrac{1+\cos\square}{2}}`),
            choice('B', R`\sin\dfrac{\square}{2}=\sqrt{\dfrac{1+\cos\square}{2}}`),
            choice('C', R`\sin\dfrac{\square}{2}=\sqrt{\dfrac{1-\cos\square}{2}}`),
            choice('D', R`\sin\dfrac{\square}{2}=-\sqrt{\dfrac{1-\cos\square}{2}}`),
          ],
          correctIndex: 2,
        },
        box('b1', 'Box in the left side, sin(___/2):', 'pi/4'),
        box('b2', 'Box inside cos(___):', 'pi/4'),
        val('v', R`$$\sin\dfrac{\pi}{8}=$$ (Simplify your answer. Type an exact answer, using radicals as needed.)`, 'sqrt(2-sqrt(2))/2'),
      ],
    },
    // 18
    {
      prompt: R`Find the exact value of $$\sin\dfrac{\pi}{12}$$ using the half-angle identity.`,
      parts: [{
        id: 'mc', type: 'mc', label: R`Choose the exact value of $$\sin\dfrac{\pi}{12}$$.`,
        choices: [choice('A', R`\dfrac{1}{4}`), choice('B', R`\dfrac{\sqrt{2-\sqrt{3}}}{2}`), choice('C', R`\dfrac{\sqrt{2+\sqrt{3}}}{2}`), choice('D', R`-\dfrac{\sqrt{2-\sqrt{3}}}{2}`)],
        correctIndex: 1,
      }],
    },
    // 19
    {
      prompt: R`Use half-angle identities to find an exact value without a calculator.

$$\cos\dfrac{3\pi}{8}$$`,
      parts: [
        {
          id: 'mc', type: 'mc', label: R`Which of the following half-angle formulas should be used for $$\cos\dfrac{3\pi}{8}$$? Select the correct choice below and fill in the answer boxes to complete your choice. (Type an exact answer, using π as needed. Use integers or fractions for any numbers in the expression.)`,
          choices: [
            choice('A', R`\cos\dfrac{\square}{2}=-\sqrt{\dfrac{1+\cos\square}{2}}`),
            choice('B', R`\cos\dfrac{\square}{2}=-\sqrt{\dfrac{1-\cos\square}{2}}`),
            choice('C', R`\cos\dfrac{\square}{2}=\sqrt{\dfrac{1+\cos\square}{2}}`),
            choice('D', R`\cos\dfrac{\square}{2}=\sqrt{\dfrac{1-\cos\square}{2}}`),
          ],
          correctIndex: 2,
        },
        box('b1', 'Box in the left side, cos(___/2):', '3*pi/4'),
        box('b2', 'Box inside cos(___):', '3*pi/4'),
        val('v', R`$$\cos\dfrac{3\pi}{8}=$$ (Simplify your answer. Type an exact answer, using radicals as needed.)`, 'sqrt(2-sqrt(2))/2'),
      ],
    },
    // 20
    {
      prompt: R`Use the half-angle formulas to find the exact value of the trigonometric function $$\sin 22.5^\circ$$.`,
      parts: [val('v', R`$$\sin 22.5^\circ=$$ (Type an exact answer, using radicals as needed.)`, 'sqrt(2-sqrt(2))/2')],
    },
    // 21
    {
      prompt: R`Use half-angle identities to find an exact value without a calculator.

$$\tan\left(\dfrac{3\pi}{8}\right)$$`,
      parts: [
        {
          id: 'mc', type: 'mc', label: R`Which of the following half-angle formulas should be used for $$\tan\left(\dfrac{3\pi}{8}\right)$$? Select the correct choice below and fill in the answer boxes to complete your choice. (Type an exact answer, using π as needed. Use integers or fractions for any numbers in the expression.)`,
          choices: [
            choice('A', R`\tan\dfrac{\square}{2}=\dfrac{\sin\square}{1-\cos\square}`),
            choice('B', R`\tan\dfrac{\square}{2}=\dfrac{\sin\square}{1+\cos\square}`),
            choice('C', R`\tan\dfrac{\square}{2}=\dfrac{\cos\square}{1+\sin\square}`),
            choice('D', R`\tan\dfrac{\square}{2}=\dfrac{\cos\square}{1-\sin\square}`),
          ],
          correctIndex: 1,
        },
        box('b1', 'Box in the left side, tan(___/2):', '3*pi/4'),
        box('b2', 'Box in the numerator:', '3*pi/4'),
        box('b3', 'Box in the denominator:', '3*pi/4'),
        val('v', R`$$\tan\left(\dfrac{3\pi}{8}\right)=$$ (Simplify your answer. Type an exact answer, using radicals as needed. Rationalize the denominator.)`, 'sqrt(2)+1'),
      ],
    },
    // 22
    {
      prompt: R`Find the exact value of $$\tan\dfrac{5\pi}{12}$$ using the half-angle identity.`,
      parts: [val('v', R`$$\tan\dfrac{5\pi}{12}=$$ (Simplify your answer. Type an exact answer, using radicals as needed.)`, '2+sqrt(3)')],
    },
    // 23
    {
      prompt: R`Use half-angle identities to find an exact value without a calculator.

$$\cos\left(\dfrac{3\pi}{8}\right)$$`,
      parts: [
        {
          id: 'mc', type: 'mc', label: R`Which of the following half-angle formulas should be used for $$\cos\left(\dfrac{3\pi}{8}\right)$$? Select the correct choice below and fill in the answer boxes to complete your choice. (Type your answer in radians. Type an exact answer, using π as needed. Use integers or fractions for any numbers in the expression.)`,
          choices: [
            choice('A', R`\cos\dfrac{\square}{2}=-\sqrt{\dfrac{1-\cos\square}{2}}`),
            choice('B', R`\cos\dfrac{\square}{2}=\sqrt{\dfrac{1-\cos\square}{2}}`),
            choice('C', R`\cos\dfrac{\square}{2}=-\sqrt{\dfrac{1+\cos\square}{2}}`),
            choice('D', R`\cos\dfrac{\square}{2}=\sqrt{\dfrac{1+\cos\square}{2}}`),
          ],
          correctIndex: 3,
        },
        box('b1', 'Box in the left side, cos(___/2):', '3*pi/4'),
        box('b2', 'Box inside cos(___):', '3*pi/4'),
        val('v', R`$$\cos\left(\dfrac{3\pi}{8}\right)=$$ (Type an exact answer. Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, 'sqrt(2-sqrt(2))/2'),
      ],
    },
    // 24  (the printed assignment asks cos(3pi/8) a third time; this one uses pi/8 so the three questions differ)
    {
      prompt: R`Use half-angle identities to find an exact value without a calculator.

$$\cos\left(\dfrac{\pi}{8}\right)$$`,
      parts: [val('v', R`$$\cos\left(\dfrac{\pi}{8}\right)=$$ (Type an exact answer. Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, 'sqrt(2+sqrt(2))/2')],
    },
  ],
};
