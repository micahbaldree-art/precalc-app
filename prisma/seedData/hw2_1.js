module.exports = {
  title: 'HW 2.1 - Polynomial Division',
  questions: [
    {
      prompt: 'Use synthetic division to perform the division and choose the correct quotient.\\n\\n$$\\dfrac{2c^3+12c^2+17c-9}{c+3}$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$2c^2-6c-1+\\dfrac{6}{c+3}$$' },
          { text: '$$2c^2+6c-1-6$$' },
          { text: '$$2c^2+6c-1-\\dfrac{6}{c+3}$$' },
          { text: '$$2c^2+6c+1+\\dfrac{6}{c+3}$$' },
        ],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'Use synthetic division to divide and choose the correct quotient.\\n\\n$$\\dfrac{4x^3-104x-27}{x+5}$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$4x^2-20x+4-\\dfrac{7}{x+5}$$' },
          { text: '$$4x^2-20x-4-\\dfrac{7}{x+5}$$' },
          { text: '$$4x^2+20x-4-\\dfrac{7}{x+5}$$' },
          { text: '$$4x^2-20x-4+\\dfrac{7}{x+5}$$' },
        ],
        correctIndex: 1,
      }],
    },
    {
      prompt: 'Divide using synthetic division, and choose the correct summary statement in fraction form.\\n\\n$$\\dfrac{6x^4-4x+1}{5-x}$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$-6x^3-30x^2-150x-746+\\dfrac{3731}{5-x}$$' },
          { text: '$$-6x^3-30x^2-150x-754+\\dfrac{3731}{5-x}$$' },
          { text: '$$-6x^3-30x^2-150x-754+\\dfrac{-3729}{5-x}$$' },
          { text: '$$-6x^3-30x^2-150x-746+\\dfrac{-3729}{5-x}$$' },
        ],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'Use the Remainder Theorem to find the remainder when f(x) is divided by x − k.\\n\\n$$f(x)=4x^2-19x+20, \\ k=3$$',
      parts: [{ id: 'r', type: 'expr', label: 'Remainder', correctAnswer: '-1' }],
    },
    {
      prompt: 'Use the Remainder Theorem to find the remainder when f(x) is divided by x − k. Check by using synthetic division.\\n\\n$$f(x)=x^3-7x^2+11, \\ k=-10$$',
      parts: [{ id: 'r', type: 'expr', label: 'Remainder', correctAnswer: '-1689' }],
    },
    {
      prompt: 'Use the Remainder Theorem to find the remainder when f(x) is divided by x − k.\\n\\n$$f(x)=-x^3-7x^2-12x+7, \\ k=-3$$',
      parts: [{ id: 'r', type: 'expr', label: 'Remainder', correctAnswer: '7' }],
    },
    {
      prompt: 'Use the Factor Theorem to determine whether the first polynomial is a factor of the second polynomial.\\n\\n$$x+6; \\quad x^3+8x^2+4x-48$$\\n\\nIs x + 6 a factor?',
      parts: [{ id: 'mc', type: 'mc', choices: ['No', 'Yes'], correctIndex: 1 }],
    },
    {
      prompt: 'Use the Factor Theorem to determine whether the first polynomial is a factor of the second polynomial.\\n\\n$$x-2; \\quad x^3+3x-14$$\\n\\nIs x − 2 a factor?',
      parts: [{ id: 'mc', type: 'mc', choices: ['Yes', 'No'], correctIndex: 0 }],
    },
    {
      prompt: 'Use the Factor Theorem to determine whether x + 5 is a factor of $$2x^3+9x^2-7x-19$$.',
      parts: [
        { id: 'mc', type: 'mc', label: 'Is x + 5 a factor?', choices: ['Yes', 'No'], correctIndex: 1 },
        { id: 'fk', type: 'expr', label: 'f(k) =', correctAnswer: '-9' },
      ],
    },
    {
      prompt: 'Find the function P defined by a polynomial of degree 3 with real coefficients that satisfies the given conditions.\\n\\nThe zeros are $$-3, -1,$$ and $$4$$. The leading coefficient is $$-4$$.\\n\\nGive P(x) in standard form.',
      parts: [{ id: 'p', type: 'expr', label: 'P(x) =', correctAnswer: '-4*x^3+52*x+48' }],
    },
    {
      prompt: 'Let f be a polynomial function with f(1) = 0. Which of the following statements is not true?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          'x = 1 is a zero of f(x).',
          'The remainder when f(x) is divided by x − 1 is zero.',
          'x + 1 is a factor of f(x).',
          'x − 1 is a factor of f(x).',
          '1 is an x-intercept of f(x).',
        ],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'Find all of the real zeros of the function.\\n\\n$$f(x)=25x^4+26x^3+51x^2+52x+2$$',
      parts: [{ id: 'zeros', type: 'list', label: 'Real zero(s)', correctList: ['-1', '-1/25'] }],
    },
    {
      prompt: 'Find all of the real zeros of the function, giving exact values.\\n\\n$$f(x)=x^4-3x^3-7x^2+9x+12$$',
      parts: [
        { id: 'rational', type: 'list', label: 'Rational zero(s)', correctList: ['-1', '4'] },
        { id: 'irrational', type: 'list', label: 'Irrational zero(s) (leave blank if there are none)', correctList: ['sqrt(3)', '-sqrt(3)'] },
      ],
    },
  ],
};
