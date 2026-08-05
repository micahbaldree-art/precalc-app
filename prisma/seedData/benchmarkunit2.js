const { functionGraphSvg } = require('../../lib/svgGraphs');

module.exports = {
  title: 'Benchmark Review - Unit 2',
  questions: [
    {
      prompt: 'Use synthetic division to perform each division.\\n\\n$$\\dfrac{3c^3+11c^2+9c-7}{c+2}$$',
      parts: [{
        id: 'mc', type: 'mc', label: 'Choose the correct quotient.',
        choices: [
          { text: '$$3c^2-5c-1+\\dfrac{5}{c+2}$$' },
          { text: '$$3c^2+5c+1+\\dfrac{5}{c+2}$$' },
          { text: '$$3c^2+5c-1-\\dfrac{5}{c+2}$$' },
          { text: '$$3c^2+5c-1-5$$' },
        ],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'Use the Factor Theorem to determine whether x + 3 is a factor of $$4x^3+7x^2-17x-1$$.',
      parts: [
        {
          id: 'mc', type: 'mc', label: 'Is x + 3 a factor?',
          choices: ['No, because f(k) = ___.', 'Yes, because f(k) = ___.'],
          correctIndex: 0,
        },
        { id: 'fk', type: 'expr', label: 'f(k) =', correctAnswer: '5' },
      ],
    },
    {
      prompt: 'Let f be a polynomial function with $$f(-1)=0$$. Which of the following statements is not true?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$x-1$$ is a factor of f(x).' },
          { text: 'The remainder when f(x) is divided by $$x+1$$ is zero.' },
          { text: '$$x+1$$ is a factor of f(x).' },
          { text: '$$-1$$ is an x-intercept of f(x).' },
          { text: '$$x=-1$$ is a zero of f(x).' },
        ],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'For the following, find the function P defined by a polynomial of degree 3 with real coefficients that satisfy the given conditions.\\n\\nThe zeros are -3, -1, and 4. The leading coefficient is 7.',
      parts: [{ id: 'p', type: 'expr', label: 'P(x) =', correctAnswer: '7*x^3-91*x-84' }],
    },
    {
      prompt: 'Add or subtract and simplify.\\n\\n$$(6+4i)+(8-i)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '14+3*i' }],
    },
    {
      prompt: 'Multiply.\\n\\n$$(3+8i)(6-9i)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '90+21*i' }],
    },
    {
      prompt: 'Express in terms of i.\\n\\n$$\\sqrt{-3}$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: 'sqrt(3)*i' }],
    },
    {
      prompt: 'Find the product of the complex number and its conjugate.\\n\\n$$-2+7i$$',
      parts: [{ id: 'ans', type: 'expr', label: 'The product is', correctAnswer: '53' }],
    },
    {
      prompt: 'Write the quotient in the form a + bi, where a and b are real numbers.\\n\\n$$\\dfrac{1}{3+2i}$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '3/13-(2/13)*i' }],
    },
    {
      prompt: 'Graph the function in a viewing window that shows all of its extrema and x-intercepts. Describe the end behavior using limits.\\n\\n$$f(x)=(x-2)(x+3)(x+5)$$',
      parts: [
        {
          id: 'graph', type: 'mc', label: 'Choose the correct graph.',
          choices: [
            { svg: functionGraphSvg('(x-2)*(x+3)*(x+5)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
            { svg: functionGraphSvg('-(x-2)*(x+3)*(x+5)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
            { svg: functionGraphSvg('(x-2)*(x-3)*(x-5)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
            { svg: functionGraphSvg('(x+2)*(x+3)*(x+5)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
          ],
          correctIndex: 0,
        },
        {
          id: 'endbehavior', type: 'mc', label: 'Describe the end behavior using limits.',
          choices: [
            { text: '$$\\lim_{x\\to\\infty}f(x)=-\\infty \\text{ and } \\lim_{x\\to-\\infty}f(x)=-\\infty$$' },
            { text: '$$\\lim_{x\\to\\infty}f(x)=\\infty \\text{ and } \\lim_{x\\to-\\infty}f(x)=-\\infty$$' },
            { text: '$$\\lim_{x\\to\\infty}f(x)=\\infty \\text{ and } \\lim_{x\\to-\\infty}f(x)=\\infty$$' },
            { text: '$$\\lim_{x\\to\\infty}f(x)=-\\infty \\text{ and } \\lim_{x\\to-\\infty}f(x)=\\infty$$' },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      prompt: 'Describe the end behavior of the polynomial function using $$\\lim_{x\\to\\infty}f(x)$$ and $$\\lim_{x\\to-\\infty}f(x)$$.\\n\\n$$f(x)=6x^2-x^3+2x-4$$',
      parts: [
        { id: 'limpinf', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '-Infinity' },
        { id: 'limninf', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: 'Infinity' },
        { id: 'order', type: 'expr', label: 'Order n of the polynomial', correctAnswer: '3' },
        { id: 'leading', type: 'expr', label: 'Leading coefficient', correctAnswer: '-1' },
      ],
    },
    {
      prompt: 'State how many complex and real zeros the function has.\\n\\n$$f(x)=x^2-2x+17$$',
      parts: [
        { id: 'complex', type: 'mc', label: 'How many complex zeros are there?', choices: ['0', '1', '2'], correctIndex: 2 },
        { id: 'real', type: 'mc', label: 'How many real zeros are there?', choices: ['0', '1', '2'], correctIndex: 0 },
      ],
    },
    {
      prompt: 'Find all of the zeros and write a linear factorization of the function.\\n\\n$$f(x)=x^4+x^3+8x^2-x-9$$',
      parts: [
        {
          id: 'zerosmc', type: 'mc', label: 'Choose the correct answer for the zeros of the function.',
          choices: [
            { text: '$$x=1,-1,-\\dfrac{1}{2}+\\dfrac{35}{2}i,-\\dfrac{1}{2}-\\dfrac{35}{2}i$$' },
            { text: '$$x=1,-1,-\\dfrac{1}{2}+\\dfrac{\\sqrt{35}}{2}i,-\\dfrac{1}{2}-\\dfrac{\\sqrt{35}}{2}i$$' },
            { text: '$$x=1,-1,\\dfrac{1}{2}+\\dfrac{\\sqrt{35}}{2}i,\\dfrac{1}{2}-\\dfrac{\\sqrt{35}}{2}i$$' },
            { text: '$$x=1,-1,\\dfrac{1}{2}+\\dfrac{35}{2}i,\\dfrac{1}{2}-\\dfrac{35}{2}i$$' },
          ],
          correctIndex: 1,
        },
        {
          id: 'factormc', type: 'mc', label: 'Choose the correct answer for the linear factorization of the function.',
          choices: [
            { text: '$$f(x)=\\dfrac{1}{2}(x-1)(x+1)\\left(2x+1-\\sqrt{35}\\right)\\left(2x+1+\\sqrt{35}\\right)$$' },
            { text: '$$f(x)=\\dfrac{1}{2}(x-1)(x+1)\\left(x-1-\\sqrt{35}\\right)\\left(x-1+\\sqrt{35}\\right)$$' },
            { text: '$$f(x)=\\dfrac{1}{4}(x-1)(x+1)\\left(2x+1-\\sqrt{35}\\,i\\right)\\left(2x+1+\\sqrt{35}\\,i\\right)$$' },
            { text: '$$f(x)=\\dfrac{1}{4}(x-1)(x+1)\\left(x-1-\\sqrt{35}\\,i\\right)\\left(x-1+\\sqrt{35}\\,i\\right)$$' },
          ],
          correctIndex: 2,
        },
      ],
    },
    {
      prompt: 'Write the function as a product of linear and irreducible quadratic factors, all with real coefficients.\\n\\n$$f(x)=x^4+24x^3-12x^2+312x-325$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '(x-1)*(x+25)*(x^2+13)' }],
    },
    {
      prompt: 'Find the domain of the function f. Use limits to describe the behavior of f at value(s) of x not in its domain.\\n\\n$$f(x)=\\dfrac{1}{x+6}$$',
      parts: [
        { id: 'excluded', type: 'list', label: 'Excluded from domain, x =', correctList: ['-6'] },
        { id: 'limleft', type: 'expr', label: 'lim f(x) as x→-6⁻', correctAnswer: '-Infinity' },
        { id: 'limright', type: 'expr', label: 'lim f(x) as x→-6⁺', correctAnswer: 'Infinity' },
      ],
    },
    {
      prompt: 'Find the vertical asymptote, and x- and y-intercepts of the function. Then graph the function.\\n\\n$$f(x)=\\dfrac{x^2-9x+18}{x+3}$$\\n\\nThe x-intercepts are 3 and ___.',
      parts: [
        { id: 'vasym', type: 'expr', label: 'Vertical asymptote, x =', correctAnswer: '-3' },
        { id: 'xint', type: 'expr', label: 'Other x-intercept', correctAnswer: '6' },
        { id: 'yint', type: 'expr', label: 'y-intercept', correctAnswer: '6' },
        {
          id: 'graph', type: 'mc', label: 'Choose the correct graph of f(x).',
          choices: [
            { svg: functionGraphSvg('(x^2-9*x+18)/(x+3)', { xMin: -10, xMax: 10, yMin: -50, yMax: 50 }) },
            { svg: functionGraphSvg('-(x^2-9*x+18)/(x+3)', { xMin: -10, xMax: 10, yMin: -50, yMax: 50 }) },
            { svg: functionGraphSvg('(x^2+9*x+18)/(x-3)', { xMin: -10, xMax: 10, yMin: -50, yMax: 50 }) },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      prompt: 'Solve the equation algebraically.\\n\\n$$\\dfrac{6x}{x+7}+\\dfrac{1}{x-2}=\\dfrac{9}{x^2+5x-14}$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '-1/6' }],
    },
    {
      prompt: 'Solve.\\n\\n$$\\dfrac{4}{x}+\\dfrac{x}{x+3}=\\dfrac{9}{x^2+3x}$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '-1' }],
    },
    {
      prompt: 'Find the unique polynomial with real coefficients that meets these conditions.\\n\\nDegree 4; zeros at x = 3, x = -2, and x = 2 - 2i; f(0) = -144',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: '3*x^4-15*x^3+18*x^2+48*x-144' }],
    },
    {
      prompt: 'Using the given zero, find all of the zeros and write a linear factorization of f(x).\\n\\n$$5i$$ is a zero of $$f(x)=x^4+14x^2-275$$',
      parts: [
        { id: 'zeros', type: 'list', label: 'The zeros are', correctList: ['-5*i', '5*i', '-sqrt(11)', 'sqrt(11)'] },
        { id: 'factor', type: 'expr', label: 'The linear factorization of the function is f(x) =', correctAnswer: '(x-sqrt(11))*(x+sqrt(11))*(x-5*i)*(x+5*i)' },
      ],
    },
  ],
};
