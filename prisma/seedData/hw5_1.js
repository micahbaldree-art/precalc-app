// HW 5.1 - Trig Identities — transcribed from the printed assignment + answer key.
// "Simplify" answers must actually be simplified: trigCalls limits how many
// trig functions the answer may contain, so the unchanged original expression
// (which is numerically equal) is not accepted.
const R = String.raw;

const ONE_FN = { min: 1, max: 1 };
const NO_FN = { max: 0 };

module.exports = {
  title: "HW 5.1 - Basic ID's and Equations",
  questions: [
    // 1  (printed order: cos, then sin)
    {
      prompt: R`Evaluate using the Pythagorean identities.

Find $$\sin\theta$$ and $$\cos\theta$$ if $$\tan\theta=\dfrac{1}{5}$$ and $$\sin\theta>0$$.`,
      parts: [
        { id: 'cos', type: 'expr', exact: true, label: R`$$\cos\theta=$$ (Simplify your answer. Type an exact answer, using radicals as needed.)`, correctAnswer: '5/sqrt(26)' },
        { id: 'sin', type: 'expr', exact: true, label: R`$$\sin\theta=$$ (Simplify your answer. Type an exact answer, using radicals as needed.)`, correctAnswer: '1/sqrt(26)' },
      ],
    },
    // 2
    {
      prompt: R`Use identities to find the value of the expression.

If $$\sin(\theta)=0.17$$, find $$\sin(-\theta)$$.`,
      parts: [{ id: 'v', type: 'expr', label: R`$$\sin(-\theta)=$$`, correctAnswer: '-0.17' }],
    },
    // 3
    {
      prompt: R`Use identities to find the value of the expression.

If $$\sin\left(\theta-\dfrac{\pi}{2}\right)=0.62$$, find $$\cos(-\theta)$$.`,
      parts: [{ id: 'v', type: 'expr', label: R`$$\cos(-\theta)=$$`, correctAnswer: '-0.62' }],
    },
    // 4
    {
      prompt: R`Use basic identities to simplify the expression.

$$\tan x\cos x$$`,
      parts: [{ id: 'v', type: 'expr', trigCalls: ONE_FN, label: R`$$\tan x\cos x=$$`, correctAnswer: 'sin(x)' }],
    },
    // 5
    {
      prompt: R`Use basic identities to simplify the expression.

$$\csc x\sin x$$`,
      parts: [{ id: 'v', type: 'expr', trigCalls: NO_FN, label: R`$$\csc x\sin x=$$`, correctAnswer: '1' }],
    },
    // 6
    {
      prompt: R`Perform the indicated operation and simplify the result.

$$\dfrac{1}{\cos x+1}-\dfrac{1}{\cos x-1}$$`,
      parts: [{
        id: 'mc', type: 'mc', label: R`What does $$\dfrac{1}{\cos x+1}-\dfrac{1}{\cos x-1}$$ equal?`,
        choices: [{ text: R`A. $$-\sin^2 x$$` }, { text: 'B. $$1$$' }, { text: R`C. $$2\csc^2 x$$` }, { text: R`D. $$\dfrac{2}{-\sin^2 x}$$` }],
        correctIndex: 2,
      }],
    },
    // 7
    {
      prompt: R`Combine the fractions and simplify to a multiple of a power of a basic trigonometric function.

$$\dfrac{\sec x}{\sin x}-\dfrac{\sin x}{\cos x}$$`,
      parts: [{ id: 'v', type: 'expr', trigCalls: ONE_FN, label: R`$$\dfrac{\sec x}{\sin x}-\dfrac{\sin x}{\cos x}=$$`, correctAnswer: 'cot(x)' }],
    },
    // 8
    {
      prompt: R`Use basic identities to simplify the expression.

$$\csc y\cos\left(\dfrac{\pi}{2}-y\right)$$`,
      parts: [{ id: 'v', type: 'expr', trigCalls: NO_FN, label: R`$$\csc y\cos\left(\dfrac{\pi}{2}-y\right)=$$ (Simplify your answer.)`, correctAnswer: '1' }],
    },
    // 9
    {
      prompt: R`Complete the identity.

$$\dfrac{\csc^2\alpha-1}{\cot\alpha}=\underline{\hspace{2em}}$$`,
      parts: [{
        id: 'mc', type: 'mc', label: 'Choose the correct answer below.',
        choices: [
          { text: R`A. $$-\tan^2\alpha$$` }, { text: R`B. $$\tan^2\alpha$$` }, { text: R`C. $$\sin\alpha$$` }, { text: R`D. $$-\cot\alpha$$` },
          { text: R`E. $$\tan\alpha$$` }, { text: R`F. $$\cot\alpha$$` }, { text: R`G. $$-\tan\alpha$$` }, { text: R`H. $$-\sin\alpha$$` },
        ],
        correctIndex: 5,
      }],
    },
    // 10
    {
      prompt: R`Simplify the expression $$\cos(x)\cdot\tan(-x)$$.`,
      parts: [{
        id: 'mc', type: 'mc', label: R`Choose the correct simplified form of $$\cos(x)\cdot\tan(-x)$$.`,
        choices: [{ text: R`A. $$-\sin x$$` }, { text: R`B. $$\cos x$$` }, { text: R`C. $$\tan x$$` }, { text: R`D. $$\sin x$$` }],
        correctIndex: 0,
      }],
    },
    // 11
    {
      prompt: R`Simplify the expression.

$$\cos(-x)\csc\left(\dfrac{\pi}{2}-x\right)$$`,
      parts: [{ id: 'v', type: 'expr', trigCalls: NO_FN, label: R`$$\cos(-x)\csc\left(\dfrac{\pi}{2}-x\right)=$$ (Simplify your answer.)`, correctAnswer: '1' }],
    },
    // 12
    {
      prompt: R`Simplify the expression to either a constant or a basic trigonometric function. Support your result graphically.

$$\dfrac{\tan\left(\dfrac{\pi}{2}-x\right)\csc x}{\csc^2 x}$$`,
      parts: [{ id: 'v', type: 'expr', trigCalls: ONE_FN, label: R`$$\dfrac{\tan\left(\frac{\pi}{2}-x\right)\csc x}{\csc^2 x}=$$`, correctAnswer: 'cos(x)' }],
    },
    // 13
    {
      prompt: R`Perform the indicated operation and simplify the result.

$$\cot x(\sec x-\tan x)$$`,
      parts: [{ id: 'v', type: 'expr', trigCalls: ONE_FN, label: 'The answer is', correctAnswer: 'csc(x)-1' }],
    },
    // 14
    {
      prompt: R`Use the basic identities to change the expression to one involving only sines and cosines. Then simplify to a basic trigonometric function.

$$\dfrac{1}{\csc^2 x\tan x}+\dfrac{1}{\sec^2 x\tan x}$$`,
      parts: [{ id: 'v', type: 'expr', trigCalls: ONE_FN, label: 'The basic trigonometric function equivalent to the expression is', correctAnswer: 'cot(x)' }],
    },
    // 15
    {
      prompt: R`Simplify the expression.

$$\dfrac{4-\cos^2 x}{2-\cos x}$$`,
      parts: [{
        id: 'mc', type: 'mc', label: R`Choose the correct answer for $$\dfrac{4-\cos^2 x}{2-\cos x}$$.`,
        choices: [{ text: R`A. $$2+\cos x$$` }, { text: R`B. $$2-\cos x$$` }, { text: R`C. $$\cos x-2$$` }, 'D. Cannot be simplified'],
        correctIndex: 0,
      }],
    },
    // 16
    {
      prompt: R`Write the expression as an algebraic expression of a single trigonometric function.

$$\dfrac{\sin^2 x}{1-\cos x}$$`,
      parts: [{ id: 'v', type: 'expr', trigCalls: ONE_FN, label: R`$$\dfrac{\sin^2 x}{1-\cos x}=$$ (Simplify your answer.)`, correctAnswer: '1+cos(x)' }],
    },
    // 17
    {
      prompt: R`Determine which of the following could not be set equal to $$\sin x$$ as an identity?`,
      parts: [{
        id: 'mc', type: 'mc', label: 'Choose the correct answer below.',
        choices: [
          { text: R`A. $$-\sin(-x)$$` }, { text: R`B. $$\pm\sqrt{1-\cos^2 x}$$` }, { text: R`C. $$\tan x\sec x$$` },
          { text: R`D. $$\cos\left(\dfrac{\pi}{2}-x\right)$$` }, { text: R`E. $$\cos\left(x-\dfrac{\pi}{2}\right)$$` },
        ],
        correctIndex: 2,
      }],
    },
    // 18
    {
      prompt: R`What is the simplified form of $$(\sec\theta+1)(\sec\theta-1)$$?`,
      parts: [{
        id: 'mc', type: 'mc', label: 'Choose the correct answer below.',
        choices: [{ text: R`A. $$\sec^2\theta$$` }, { text: R`B. $$\tan^2\theta$$` }, { text: R`C. $$\sin^2\theta$$` }, { text: R`D. $$\cot^2\theta$$` }, { text: R`E. $$\cos^2\theta$$` }],
        correctIndex: 1,
      }],
    },
  ],
};
