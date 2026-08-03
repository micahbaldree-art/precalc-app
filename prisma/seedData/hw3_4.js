module.exports = {
  title: 'HW 3.4 - Solving Logs and Exponentials',
  questions: [
    {
      prompt: 'Find the exact solution algebraically, and check it by substituting into the original equation.\\n\\n$$12\\\\left(\\\\dfrac{1}{2}\\\\right)^{x/5}=3$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '10' }],
    },
    {
      prompt: 'Find the exact solution algebraically, and check it by substituting into the original equation.\\n\\n$$3\\\\cdot2^{x/4}=48$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '16' }],
    },
    {
      prompt: 'Find the exact solution algebraically, and check it by substituting into the original equation.\\n\\n$$\\\\log x=3$$\\n\\nChange the equation from logarithmic to exponential form, then solve for x.',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '1000' }],
    },
    {
      prompt: 'Find the exact solution algebraically, and check it by substituting into the original equation.\\n\\n$$\\\\log_2(x-4)=-1$$\\n\\nChange the equation from logarithmic to exponential form, then solve for x.',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '4.5' }],
    },
    {
      prompt: 'Solve the equation algebraically. Obtain a numerical approximation for your solution and check it by substituting into the original equation. Round to three decimal places.\\n\\n$$1.17^x=4.1$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '8.987' }],
    },
    {
      prompt: 'Solve the equation algebraically. Obtain a numerical approximation for your solution and check it by substituting into the original equation. Round to the nearest thousandth.\\n\\n$$100e^{0.091t}=700$$',
      parts: [{ id: 't', type: 'expr', label: 't =', correctAnswer: '21.384' }],
    },
    {
      prompt: 'Solve the equation algebraically. Obtain a numerical approximation for your solution and check it by substituting into the original equation. Round to three decimal places.\\n\\n$$29+2e^{-x}=58$$',
      parts: [{ id: 'x', type: 'expr', label: 'x ≈', correctAnswer: '-2.674' }],
    },
    {
      prompt: 'Solve the equation algebraically. Obtain a numerical approximation for your solution and check it by substituting into the original equation. Round to three decimal places.\\n\\n$$7\\\\ln(x-7)+5=6$$',
      parts: [{ id: 'x', type: 'expr', label: 'x ≈', correctAnswer: '8.154' }],
    },
    {
      prompt: 'Solve the equation by the method of your choice. Support your solution by a second method. Round to three decimal places.\\n\\n$$\\\\dfrac{12^x-12^{-x}}{13}=14$$',
      parts: [{ id: 'x', type: 'expr', label: 'x ≈', correctAnswer: '2.094' }],
    },
    {
      prompt: 'Solve the equation by the method of your choice. Support your solution by a second method. Round to the nearest thousandths.\\n\\n$$\\\\dfrac{e^x+e^{-x}}{2}=6$$',
      parts: [{ id: 'x', type: 'list', label: 'x ≈', correctList: ['2.478', '-2.478'] }],
    },
    {
      prompt: 'Solve the equation.\\n\\n$$\\\\ln(x-35)+\\\\ln(x+180)=3\\\\ln6$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '36' }],
    },
    {
      prompt: 'Solve the equation by the method of your choice. Support your solution by a second method. Round to three decimal places.\\n\\n$$\\\\dfrac{3^x-3^{-x}}{4}=5$$',
      parts: [{ id: 'x', type: 'expr', label: 'x ≈', correctAnswer: '2.729' }],
    },
    {
      prompt: 'Solve the equation by the method of your choice. Support your solution by a second method. Round to the nearest thousandths.\\n\\n$$\\\\dfrac{e^x+e^{-x}}{2}=6$$',
      parts: [{ id: 'x', type: 'list', label: 'x ≈', correctList: ['2.478', '-2.478'] }],
    },
    {
      prompt: 'Solve the equation.\\n\\n$$\\\\ln(x-8)+\\\\ln(x+18)=3\\\\ln3$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '9' }],
    },
  ],
};
