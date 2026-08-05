const { functionGraphSvg } = require('../../lib/svgGraphs');

module.exports = {
  title: 'Benchmark Review - All Units',
  questions: [
    {
      prompt: 'Write the polynomial below in standard form and state its degree.\\n\\n$$5x^2-4x+2$$',
      parts: [
        { id: 'standard', type: 'expr', label: 'Standard form', correctAnswer: '5*x^2-4*x+2' },
        { id: 'degree', type: 'expr', label: 'Degree', correctAnswer: '2' },
      ],
    },
    {
      prompt: 'State whether the following expression is a polynomial.\\n\\n$$3x^{-5}+5$$',
      parts: [{ id: 'mc', type: 'mc', choices: ['The expression is a polynomial.', 'The expression is not a polynomial.'], correctIndex: 1 }],
    },
    {
      prompt: 'Subtract.\\n\\n$$(-2x+9)-(x^2+x-3)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '-x^2-3*x+12' }],
    },
    {
      prompt: 'Factor the trinomial, or state the trinomial is prime.\\n\\n$$x^2+12x+32$$',
      parts: [{ id: 'ans', type: 'factor', isPrime: false, correctAnswer: '(x+8)*(x+4)' }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^2$$ can be transformed to the graph of the given equation.\\n\\n$$y=(x-8)^2+6$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: ['A translation of the graph to the left by 6 units and up by 8 units', 'A translation of the graph to the left by 8 units and up by 6 units', 'A translation of the graph to the right by 6 units and down by 8 units', 'A translation of the graph to the right by 8 units and up by 6 units'],
        correctIndex: 3,
      }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^3$$ can be transformed to the graph of $$y=(0.4x)^3$$.',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [{ text: 'A horizontal shrink by a factor of $$\\dfrac{1}{0.4}$$.' }, { text: 'A horizontal stretch by a factor of $$\\dfrac{1}{0.4}$$.' }],
        correctIndex: 1,
      }],
    },
    {
      prompt: 'Find the equation of the reflection of f across (a) the x-axis and (b) the y-axis.\\n\\n$$f(x)=x^3+7x^2-8x+3$$',
      parts: [
        { id: 'a', type: 'expr', label: 'Reflection across x-axis', correctAnswer: '-x^3-7*x^2+8*x-3' },
        { id: 'b', type: 'expr', label: 'Reflection across y-axis', correctAnswer: '-x^3+7*x^2+8*x+3' },
      ],
    },
    {
      prompt: 'Refer to the graph of $$y=f(x)$$ where $$f(x)=x^2-4$$ (a parabola crossing the x-axis at ±2). Sketch the graph of the new function $$y=-|f(x)|$$.',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { svg: functionGraphSvg('-abs(x^2-4)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
          { svg: functionGraphSvg('abs(x^2-4)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
          { svg: functionGraphSvg('x^2-4', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
          { svg: functionGraphSvg('-(x^2-4)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
        ],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'A graph of $$y=f(x)$$ is given (no formula for f). Which best describes the graph of $$g(x)=f(4x)$$?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: ['A horizontal stretch of the graph of f by a factor of 4.', 'A vertical stretch of the graph of f by a factor of 4.', 'A vertical compression of the graph of f by a factor of 4.', 'A horizontal compression of the graph of f by a factor of 4.'],
        correctIndex: 3,
      }],
    },
    {
      prompt: 'Given a function f, which of the following represents a vertical stretch by a factor of 8?',
      parts: [{ id: 'mc', type: 'mc', choices: [{ text: '$$\\dfrac{f(x)}{8}$$' }, { text: '$$f\\left(\\dfrac{x}{8}\\right)$$' }, { text: '$$8f(x)$$' }, { text: '$$f(8x)$$' }], correctIndex: 2 }],
    },
    {
      prompt: 'Solve the inequality. Use algebra to solve the corresponding equation.\\n\\n$$2x^2+19x+35\\leq0$$',
      parts: [{ id: 'interval', type: 'interval', correctAnswer: '[-7,-5/2]' }],
    },
    {
      prompt: 'Solve the following problem without using a calculator.\\n\\nWhich of the following is the solution to $$x^2>16?$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [{ text: '$$(-4,4)$$' }, { text: '$$[-4,4]$$' }, { text: '$$(-\\infty,-4)\\cup(4,\\infty)$$' }, { text: '$$(-\\infty,-4]\\cup[4,\\infty)$$' }, { text: 'There is no solution.' }],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'Find the formulas for the functions f + g, f - g, and fg. Give the domain of each.\\n\\n$$f(x)=x^2 \\text{ and } g(x)=4x-2$$',
      parts: [
        { id: 'sum', type: 'expr', label: 'f + g =', correctAnswer: 'x^2+4*x-2' },
        { id: 'sumdom', type: 'interval', label: 'Domain of f + g', correctAnswer: '(-Infinity,Infinity)' },
        { id: 'diff', type: 'expr', label: 'f - g =', correctAnswer: 'x^2-4*x+2' },
        { id: 'diffdom', type: 'interval', label: 'Domain of f - g', correctAnswer: '(-Infinity,Infinity)' },
        { id: 'prod', type: 'expr', label: 'fg =', correctAnswer: '4*x^3-2*x^2' },
        { id: 'proddom', type: 'interval', label: 'Domain of fg', correctAnswer: '(-Infinity,Infinity)' },
      ],
    },
    {
      prompt: 'Find $$(f\\circ g)(0)$$ and $$(g\\circ f)(0)$$.\\n\\n$$f(x)=4x-1; g(x)=x^2-2$$',
      parts: [
        { id: 'fg0', type: 'expr', label: '(f∘g)(0) =', correctAnswer: '-9' },
        { id: 'gf0', type: 'expr', label: '(g∘f)(0) =', correctAnswer: '-1' },
      ],
    },
    {
      prompt: 'Use synthetic division to perform each division.\\n\\n$$\\dfrac{2s^3+12s^2+15s-13}{s+3}$$',
      parts: [{
        id: 'mc', type: 'mc', label: 'Choose the correct quotient.',
        choices: [
          { text: '$$2s^2+6s-3-\\dfrac{4}{s+3}$$' },
          { text: '$$2s^2+6s-3-4$$' },
          { text: '$$2s^2-6s-3+\\dfrac{4}{s+3}$$' },
          { text: '$$2s^2+6s+3+\\dfrac{4}{s+3}$$' },
        ],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'Use the Factor Theorem to determine whether x + 5 is a factor of $$7x^3+23x^2-61x-15$$.',
      parts: [
        {
          id: 'mc', type: 'mc', label: 'Is x + 5 a factor?',
          choices: ['Yes, because f(k) = ___.', 'No, because f(k) = ___.'],
          correctIndex: 1,
        },
        { id: 'fk', type: 'expr', label: 'f(k) =', correctAnswer: '-10' },
      ],
    },
    {
      prompt: 'Let f be a polynomial function with $$f(2)=0$$. Which of the following statements is not true?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$x+2$$ is a factor of f(x).' },
          { text: '$$x-2$$ is a factor of f(x).' },
          { text: '$$x=2$$ is a zero of f(x).' },
          { text: 'The remainder when f(x) is divided by $$x-2$$ is zero.' },
          { text: '2 is an x-intercept of f(x).' },
        ],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'For the following, find the function P defined by a polynomial of degree 3 with real coefficients that satisfy the given conditions.\\n\\nThe zeros are -3, -1, and 4. The leading coefficient is -6.',
      parts: [{ id: 'p', type: 'expr', label: 'P(x) =', correctAnswer: '-6*x^3+78*x+72' }],
    },
    {
      prompt: 'Add or subtract and simplify.\\n\\n$$(4+2i)+(7-i)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '11+i' }],
    },
    {
      prompt: 'Write the difference in the standard form a + bi without using a calculator.\\n\\n$$\\left(i^3+5\\right)-\\left(8+i^2\\right)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '-2-i' }],
    },
    {
      prompt: 'Find the product of the complex number and its conjugate.\\n\\n$$-5+9i$$',
      parts: [{ id: 'ans', type: 'expr', label: 'The product is', correctAnswer: '106' }],
    },
    {
      prompt: 'Write the quotient in the form a + bi, where a and b are real numbers.\\n\\n$$\\dfrac{1}{6+4i}$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '3/26-(1/13)*i' }],
    },
    {
      prompt: 'Describe the end behavior of the polynomial function using $$\\lim_{x\\to\\infty}f(x)$$ and $$\\lim_{x\\to-\\infty}f(x)$$.\\n\\n$$f(x)=5x^2-x^3+2x-4$$',
      parts: [
        { id: 'limpinf', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '-Infinity' },
        { id: 'limninf', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: 'Infinity' },
        { id: 'order', type: 'expr', label: 'Order n of the polynomial', correctAnswer: '3' },
        { id: 'leading', type: 'expr', label: 'Leading coefficient', correctAnswer: '-1' },
      ],
    },
    {
      prompt: 'State how many complex and real zeros the function has.\\n\\n$$f(x)=x^2-4x+8$$',
      parts: [
        { id: 'complex', type: 'mc', label: 'How many complex zeros are there?', choices: ['0', '1', '2'], correctIndex: 2 },
        { id: 'real', type: 'mc', label: 'How many real zeros are there?', choices: ['0', '1', '2'], correctIndex: 0 },
      ],
    },
    {
      prompt: 'Using the given zero, find all of the zeros and write a linear factorization of f(x).\\n\\n$$3i$$ is a zero of $$f(x)=x^4+4x^2-45$$',
      parts: [
        { id: 'zeros', type: 'list', label: 'The zeros are', correctList: ['-3*i', '3*i', '-sqrt(5)', 'sqrt(5)'] },
        { id: 'factor', type: 'expr', label: 'The linear factorization of the function is f(x) =', correctAnswer: '(x-sqrt(5))*(x+sqrt(5))*(x-3*i)*(x+3*i)' },
      ],
    },
    {
      prompt: 'Find the horizontal and vertical asymptotes of f(x). Use limits to describe the corresponding behavior.\\n\\n$$f(x)=\\dfrac{4x+3}{x^2-x}$$',
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
      prompt: 'Solve the equation algebraically.\\n\\n$$x+\\dfrac{7x}{x-2}=\\dfrac{14}{x-2}$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '-7' }],
    },
    {
      prompt: 'Which of the following functions is exponential?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [{ text: '$$f(x)=8^x$$' }, { text: '$$f(x)=\\sqrt[3]{x}$$' }, { text: '$$f(x)=a^2$$' }, { text: '$$f(x)=x^3$$' }, { text: '$$f(x)=x^{2/3}$$' }],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'Determine a formula for the exponential function whose values are given in the table.\\n\\n$$\\begin{array}{c|c} \\mathbf{x} & \\mathbf{f(x)} \\\\[8pt] -2 & 42 \\\\[8pt] -1 & 7 \\\\[8pt] 0 & \\dfrac{7}{6} \\\\[8pt] 1 & \\dfrac{7}{36} \\\\[8pt] 2 & \\dfrac{7}{216} \\end{array}$$',
      parts: [{ id: 'formula', type: 'expr', label: 'f(x) =', correctAnswer: '(7/6)*(1/6)^x' }],
    },
    {
      prompt: 'State whether the function is an exponential growth function or exponential decay function. Describe its end behavior using limits.\\n\\n$$f(x)=0.1^x$$',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: [
            'The function is an exponential growth function because the base is 0 < b < 1.',
            'The function is an exponential decay function because the base is 0 < b < 1.',
            'The function is an exponential growth function because the exponent is a positive x.',
            'The function is an exponential decay function because the constant in the exponent is 1.',
          ],
          correctIndex: 1,
        },
        { id: 'limninf', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: 'Infinity' },
        { id: 'liminf', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '0' },
      ],
    },
    {
      prompt: 'The number B of bacteria in a petri dish culture after t hours is given by $$B=100e^{0.698t}$$.\\n\\n(a) What is the initial number of bacteria present?\\n(b) How many bacteria are present after 4 hours?',
      parts: [
        { id: 'a', type: 'expr', label: '(a) Initial number of bacteria', correctAnswer: '100' },
        { id: 'b', type: 'expr', label: '(b) Bacteria present after 4 hours', correctAnswer: '1631' },
      ],
    },
    {
      prompt: 'Tell whether the function is an exponential growth function or an exponential decay function, and find the constant percentage rate of growth or decay for the function.\\n\\n$$f(x)=3.6\\cdot1.16^x$$',
      parts: [
        { id: 'type', type: 'mc', choices: ['Exponential decay', 'Exponential growth'], correctIndex: 1 },
        { id: 'rate', type: 'expr', label: 'Rate (%)', correctAnswer: '16' },
      ],
    },
    {
      prompt: 'Determine the exponential function that satisfies the given conditions.\\n\\nInitial value = 8, increasing at the rate of 17% per year.',
      parts: [{ id: 'formula', type: 'expr', label: 'P(t) =', correctAnswer: '8*1.17^t' }],
    },
    {
      prompt: 'The 2000 population of a city was 684,000 and was increasing at the rate of 1.54% each year. At that rate, when will the population be 1 million?',
      parts: [{ id: 'year', type: 'expr', label: 'Year', correctAnswer: '2025' }],
    },
    {
      prompt: 'What is the constant percentage growth rate of $$P(t)=1.76\\cdot1.063^t?$$',
      parts: [{ id: 'mc', type: 'mc', choices: ['6.3%', '1.76%', '76%', '7.6%', '63%'], correctIndex: 0 }],
    },
    {
      prompt: 'Assuming d is a positive real number, use properties of logarithms to write the expression as a sum or difference of logarithms or multiples of logarithms. Expand the expression as far as possible.\\n\\n$$\\log_2\\left(d^9\\right)$$',
      parts: [{ id: 'expand', type: 'expr', label: '$$\\log_2\\left(d^9\\right)=$$', correctAnswer: '9*log(d,2)' }],
    },
    {
      prompt: 'Rewrite as a sum or difference of multiples of logarithms without exponents. Assume x and y are positive real numbers. Expand the expression as far as possible.\\n\\n$$\\log\\left(x^2y^3\\right)$$',
      parts: [{ id: 'expand', type: 'expr', label: '$$\\log\\left(x^2y^3\\right)=$$', correctAnswer: '2*log10(x)+3*log10(y)' }],
    },
    {
      prompt: 'Assuming x and y are positive, use properties of logarithms to write the expression as a sum or difference of logarithms or multiples of logarithms. Expand the expression as far as possible.\\n\\n$$\\ln\\dfrac{x^7}{y^5}$$',
      parts: [{ id: 'expand', type: 'expr', label: '$$\\ln\\dfrac{x^7}{y^5}=$$', correctAnswer: '7*log(x)-5*log(y)' }],
    },
    {
      prompt: 'Find the exact solution algebraically, and check it by substituting into the original equation.\\n\\n$$98\\left(\\dfrac{1}{7}\\right)^{x/5}=2$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '10' }],
    },
    {
      prompt: 'Solve the equation algebraically. Obtain a numerical approximation for your solution and check it by substituting into the original equation. Round to three decimal places.\\n\\n$$1.25^x=6.3$$',
      parts: [{ id: 'x', type: 'expr', label: 'x ≈', correctAnswer: '8.248' }],
    },
    {
      prompt: 'Solve the equation.\\n\\n$$\\ln(x-8)+\\ln(x+18)=3\\ln3$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '9' }],
    },
    {
      prompt: 'Find the amount A accumulated after investing a principal P for t years at an interest rate r compounded k times per year.\\n\\nP = $18,500, r = 2.1%, t = 11, k = 12',
      parts: [{ id: 'amount', type: 'expr', label: 'Amount after 11 years, $', correctAnswer: '23302.69' }],
    },
    {
      prompt: 'Complete the table about continuous compounding.\\n\\n$$\\begin{array}{c|c|c} \\mathbf{Initial\\ Investment} & \\mathbf{APR} & \\mathbf{Time\\ to\\ double} \\\\[8pt] \\$12{,}500 & 7\\% & ? \\end{array}$$\\n\\nAfter finding the doubling time, also find the approximate value of the investment after 14 years.',
      parts: [
        { id: 'years', type: 'expr', label: 'Years to double', correctAnswer: '9.902' },
        { id: 'amount', type: 'expr', label: 'Value after 14 years, $', correctAnswer: '33305.7' },
      ],
    },
  ],
};
