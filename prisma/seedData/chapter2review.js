const { functionGraphSvg } = require('../../lib/svgGraphs');

module.exports = {
  title: 'Chapter 2 Review',
  questions: [
    {
      prompt: 'Use synthetic division to perform the division and choose the correct quotient.\\n\\n$$\\dfrac{4x^3+25x^2+22x-19}{x+5}$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$4x^2+5x-3-\\dfrac{4}{x+5}$$' },
          { text: '$$4x^2-5x-3+\\dfrac{4}{x+5}$$' },
          { text: '$$4x^2+5x+3+\\dfrac{4}{x+5}$$' },
          { text: '$$4x^2+5x-3-4$$' },
        ],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'Use the Remainder Theorem to find the remainder when f(x) is divided by x − k.\\n\\n$$f(x)=4x^2+5x-23, \\ k=-3$$',
      parts: [{ id: 'r', type: 'expr', label: 'Remainder', correctAnswer: '-2' }],
    },
    {
      prompt: 'Use the Factor Theorem to determine whether x + 4 is a factor of $$9x^3+30x^2-28x-14$$.',
      parts: [
        { id: 'mc', type: 'mc', label: 'Is x + 4 a factor?', choices: ['No', 'Yes'], correctIndex: 0 },
        { id: 'fk', type: 'expr', label: 'f(k) =', correctAnswer: '2' },
      ],
    },
    {
      prompt: 'Find the function P defined by a polynomial of degree 3 with real coefficients that satisfies the given conditions.\\n\\nThe zeros are $$-3, -1,$$ and $$4$$. The leading coefficient is $$-3$$.',
      parts: [{ id: 'p', type: 'expr', label: 'P(x) =', correctAnswer: '-3*x^3+39*x+36' }],
    },
    {
      prompt: 'Find all of the real zeros of the function.\\n\\n$$f(x)=5x^3-7x^2-15x+21$$',
      parts: [{ id: 'zeros', type: 'list', label: 'Real zero(s)', correctList: ['7/5', 'sqrt(3)', '-sqrt(3)'] }],
    },
    {
      prompt: 'Let f be a polynomial function with f(-7) = 0. Which of the following statements is not true?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          'The remainder when f(x) is divided by x + 7 is zero.',
          'x − 7 is a factor of f(x).',
          '− 7 is an x-intercept of f(x).',
          'x = − 7 is a zero of f(x).',
          'x + 7 is a factor of f(x).',
        ],
        correctIndex: 1,
      }],
    },
    {
      prompt: 'Add and simplify.\\n\\n$$(7+9i)+(8-i)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '15+8*i' }],
    },
    {
      prompt: 'Multiply.\\n\\n$$(2+8i)(6-3i)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '36+42*i' }],
    },
    {
      prompt: 'Express in terms of i.\\n\\n$$\\sqrt{-14}$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: 'sqrt(14)*i' }],
    },
    {
      prompt: 'Find the product of the complex number and its conjugate.\\n\\n$$-6+6i$$',
      parts: [{ id: 'ans', type: 'expr', label: 'Product', correctAnswer: '72' }],
    },
    {
      prompt: 'Write the quotient in the form a + bi, where a and b are real numbers.\\n\\n$$\\dfrac{1}{3+2i}$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '3/13-2*i/13' }],
    },
    {
      prompt: 'Graph the function in a viewing window that shows all of its extrema and x-intercepts (window [-8,5] by [-33,18]). Describe the end behavior using limits.\\n\\n$$f(x)=(x-1)(x+2)(x+3)$$',
      parts: [
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('(x-1)*(x+2)*(x+3)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
            { svg: functionGraphSvg('-(x-1)*(x+2)*(x+3)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
            { svg: functionGraphSvg('(x+1)*(x-2)*(x+3)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
            { svg: functionGraphSvg('(x-1)*(x-2)*(x+3)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
          ],
          correctIndex: 0,
        },
        { id: 'limpos', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: 'Infinity' },
        { id: 'limneg', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: '-Infinity' },
      ],
    },
    {
      prompt: 'Describe the end behavior of the polynomial function using limits.\\n\\n$$f(x)=6x^2-x^3+3x-4$$',
      parts: [
        { id: 'limpos', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '-Infinity' },
        { id: 'limneg', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: 'Infinity' },
      ],
    },
    {
      prompt: 'Write a polynomial function in standard form with real coefficients whose zeros include $$2, 9i,$$ and $$-9i$$.',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: 'x^3-2*x^2+81*x-162' }],
    },
    {
      prompt: 'Write a polynomial function of minimum degree in standard form with real coefficients whose zeros and their multiplicities include those listed.\\n\\n$$1 \\text{ (multiplicity 2)}, -4 \\text{ (multiplicity 3)}$$',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: 'x^5+10*x^4+25*x^3-20*x^2-80*x+64' }],
    },
    {
      prompt: 'State how many complex and real zeros the function has.\\n\\n$$f(x)=x^2-6x+34$$',
      parts: [
        { id: 'complex', type: 'expr', label: 'Number of complex zeros', correctAnswer: '2' },
        { id: 'real', type: 'expr', label: 'Number of real zeros', correctAnswer: '0' },
      ],
    },
    {
      prompt: 'Find all of the zeros and write a linear factorization of the function.\\n\\n$$f(x)=x^4+x^3+7x^2-x-8$$',
      parts: [
        { id: 'zeros', type: 'list', label: 'Zeros', correctList: ['1', '-1', '-1/2+sqrt(31)*i/2', '-1/2-sqrt(31)*i/2'] },
        { id: 'lf', type: 'expr', label: 'Linear factorization', correctAnswer: '(1/4)*(x-1)*(x+1)*(2*x+1-sqrt(31)*i)*(2*x+1+sqrt(31)*i)' },
      ],
    },
    {
      prompt: 'Write the function as a product of linear and irreducible quadratic factors, all with real coefficients.\\n\\n$$f(x)=x^4+8x^3-2x^2+56x-63$$',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: '(x-1)*(x+9)*(x^2+7)' }],
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
      prompt: 'Find the horizontal and vertical asymptotes of f(x). Use limits to describe the corresponding behavior.\\n\\n$$f(x)=\\dfrac{6x+5}{x^2-x}$$',
      parts: [
        { id: 'vasym', type: 'list', label: 'Vertical asymptote(s), x =', correctList: ['0', '1'] },
        { id: 'hasym', type: 'expr', label: 'Horizontal asymptote, y =', correctAnswer: '0' },
        { id: 'lim0left', type: 'expr', label: 'lim f(x) as x→0⁻', correctAnswer: 'Infinity' },
        { id: 'lim0right', type: 'expr', label: 'lim f(x) as x→0⁺', correctAnswer: '-Infinity' },
        { id: 'lim1left', type: 'expr', label: 'lim f(x) as x→1⁻', correctAnswer: '-Infinity' },
        { id: 'lim1right', type: 'expr', label: 'lim f(x) as x→1⁺', correctAnswer: 'Infinity' },
        { id: 'limninf', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: '0' },
        { id: 'limpinf', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '0' },
      ],
    },
    {
      prompt: 'Find the intercepts and asymptotes of the function, and choose the graph (window [-5,5] by [-20,20]).\\n\\n$$f(x)=\\dfrac{7x^2+x-7}{x^2-1}$$',
      parts: [
        { id: 'intercepts', type: 'point', label: 'Intercepts (rounded to three decimals)', correctPoints: [[0.931, 0], [-1.074, 0], [0, 7]] },
        { id: 'vasym', type: 'list', label: 'Vertical asymptote(s), x =', correctList: ['-1', '1'] },
        { id: 'hasym', type: 'expr', label: 'Horizontal asymptote, y =', correctAnswer: '7' },
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('(7*x^2+x-7)/(x^2-1)', { xMin: -5, xMax: 5, yMin: -20, yMax: 20, color: '#111827' }) },
            { svg: functionGraphSvg('-(7*x^2+x-7)/(x^2-1)', { xMin: -5, xMax: 5, yMin: -20, yMax: 20, color: '#111827' }) },
            { svg: functionGraphSvg('(7*x^2-x-7)/(x^2-1)', { xMin: -5, xMax: 5, yMin: -20, yMax: 20, color: '#111827' }) },
            { svg: functionGraphSvg('(7*x^2+x-7)/(x^2+1)', { xMin: -5, xMax: 5, yMin: -20, yMax: 20, color: '#111827' }) },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      prompt: 'Find the vertical asymptote, and x- and y-intercepts of the function. Then choose the graph (window [-10,10] by [-50,50]).\\n\\n$$f(x)=\\dfrac{x^2-4x+3}{x+1}$$\\n\\nThe x-intercepts are 1 and ___.',
      parts: [
        { id: 'vasym', type: 'expr', label: 'Vertical asymptote, x =', correctAnswer: '-1' },
        { id: 'xint', type: 'expr', label: 'Other x-intercept', correctAnswer: '3' },
        { id: 'yint', type: 'expr', label: 'y-intercept', correctAnswer: '3' },
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('(x^2-4*x+3)/(x+1)', { xMin: -10, xMax: 10, yMin: -50, yMax: 50, color: '#111827' }) },
            { svg: functionGraphSvg('-(x^2-4*x+3)/(x+1)', { xMin: -10, xMax: 10, yMin: -50, yMax: 50, color: '#111827' }) },
            { svg: functionGraphSvg('(x^2+4*x+3)/(x-1)', { xMin: -10, xMax: 10, yMin: -50, yMax: 50, color: '#111827' }) },
            { svg: functionGraphSvg('(x^2-4*x+3)/(x-1)', { xMin: -10, xMax: 10, yMin: -50, yMax: 50, color: '#111827' }) },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      prompt: 'Solve the equation algebraically.\\n\\n$$x+\\dfrac{9x}{x-8}=\\dfrac{72}{x-8}$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '-9' }],
    },
    {
      prompt: 'Solve the equation algebraically.\\n\\n$$\\dfrac{3x}{x+6}+\\dfrac{1}{x-2}=\\dfrac{8}{x^2+4x-12}$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '-1/3' }],
    },
    {
      prompt: 'Solve.\\n\\n$$\\dfrac{5}{x}+\\dfrac{x}{x+4}=\\dfrac{16}{x^2+4x}$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '-1' }],
    },
  ],
};
