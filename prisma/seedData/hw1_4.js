module.exports = {
  title: 'HW 1.4 - Inequalities',
  questions: [
    {
      prompt: 'Solve the inequality algebraically. Write the solution in interval notation.\\n\\n$$|x+5| \\ge 6$$',
      parts: [{ id: 'sol', type: 'interval', correctAnswer: '(-Infinity,-11]U[1,Infinity)' }],
    },
    {
      prompt: 'Solve the following inequality. Write the solution in interval notation.\\n\\n$$|x+19| \\le 15$$',
      parts: [{ id: 'sol', type: 'interval', correctAnswer: '[-34,-4]' }],
    },
    {
      prompt: 'Solve the inequality algebraically. Write the solution in interval notation.\\n\\n$$\\left|\\dfrac{x+5}{8}\\right| \\ge 1$$',
      parts: [{ id: 'sol', type: 'interval', correctAnswer: '(-Infinity,-13]U[3,Infinity)' }],
    },
    {
      prompt: 'Solve the inequality. Use algebra to solve the corresponding equation.\\n\\n$$2x^2+23x+56 \\le 0$$',
      parts: [{ id: 'sol', type: 'interval', correctAnswer: '[-8,-7/2]' }],
    },
    {
      prompt: 'Solve the inequality. Use algebra to solve the corresponding equation.\\n\\n$$2x^2+17x > 9$$',
      parts: [{ id: 'sol', type: 'interval', correctAnswer: '(-Infinity,-9)U(1/2,Infinity)' }],
    },
    {
      prompt: 'Solve.\\n\\n$$x^3-49x \\ge 0$$',
      parts: [{ id: 'sol', type: 'interval', correctAnswer: '[-7,0]U[7,Infinity)' }],
    },
    {
      prompt: 'Solve the inequality graphically.\\n\\n$$9x^2+11x-2 \\ge 0$$\\n\\n(Round to three decimal places if needed.)',
      parts: [{ id: 'sol', type: 'interval', correctAnswer: '(-Infinity,(-11-sqrt(193))/18]U[(-11+sqrt(193))/18,Infinity)' }],
    },
    {
      prompt: 'Solve the following problem without using a calculator.\\n\\nWhich of the following is the solution to $$x^2-6x+11 \\le 0$$?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [{ text: '$$(-\\infty,0]\\cup[6,\\infty)$$' }, { text: '$$[0,6]$$' }, { text: '$$(-\\infty,0)\\cup(6,\\infty)$$' }, { text: 'There is no solution.' }, { text: 'All real numbers' }],
        correctIndex: 3,
      }],
    },
  ],
};
