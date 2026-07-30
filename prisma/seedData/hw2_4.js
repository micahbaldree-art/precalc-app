const { functionGraphSvg } = require('../../lib/svgGraphs');

module.exports = {
  title: 'HW 2.4 - Solving Polynomials',
  questions: [
    {
      prompt: 'State the degree and list the zeros of the polynomial function. State the multiplicity of each zero and whether the graph crosses the x-axis at the corresponding x-intercept. Then choose the graph (window [-3,3] by [-10,10]).\\n\\n$$f(x)=x(x-2)^2$$',
      parts: [
        { id: 'degree', type: 'expr', label: 'Degree', correctAnswer: '3' },
        { id: 'leftzero', type: 'expr', label: 'Leftmost zero, x =', correctAnswer: '0' },
        { id: 'leftmult', type: 'expr', label: 'Multiplicity of leftmost zero', correctAnswer: '1' },
        { id: 'leftcross', type: 'mc', label: 'Behavior at leftmost zero', choices: ['Crosses the x-axis', 'Does not cross the x-axis'], correctIndex: 0 },
        { id: 'rightzero', type: 'expr', label: 'Rightmost zero, x =', correctAnswer: '2' },
        { id: 'rightmult', type: 'expr', label: 'Multiplicity of rightmost zero', correctAnswer: '2' },
        { id: 'rightcross', type: 'mc', label: 'Behavior at rightmost zero', choices: ['Crosses the x-axis', 'Does not cross the x-axis'], correctIndex: 1 },
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('x*(x-2)^2', { xMin: -3, xMax: 3, yMin: -10, yMax: 10 }) },
            { svg: functionGraphSvg('-x*(x-2)^2', { xMin: -3, xMax: 3, yMin: -10, yMax: 10 }) },
            { svg: functionGraphSvg('x*(x-2)^2+3', { xMin: -3, xMax: 3, yMin: -10, yMax: 10 }) },
            { svg: functionGraphSvg('x*(x+2)^2', { xMin: -3, xMax: 3, yMin: -10, yMax: 10 }) },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      prompt: 'State the degree and list the zeros of the polynomial function. State the multiplicity of each zero and whether the graph crosses the x-axis at the corresponding x-intercept. Then choose the graph (window [-10,10] by [-120,120]).\\n\\n$$f(x)=(x-3)^3(x+2)^2$$',
      parts: [
        { id: 'degree', type: 'expr', label: 'Degree', correctAnswer: '5' },
        { id: 'leftzero', type: 'expr', label: 'Leftmost zero, x =', correctAnswer: '-2' },
        { id: 'leftmult', type: 'expr', label: 'Multiplicity of leftmost zero', correctAnswer: '2' },
        { id: 'leftcross', type: 'mc', label: 'Behavior at leftmost zero', choices: ['Crosses the x-axis', 'Does not cross the x-axis'], correctIndex: 1 },
        { id: 'rightzero', type: 'expr', label: 'Rightmost zero, x =', correctAnswer: '3' },
        { id: 'rightmult', type: 'expr', label: 'Multiplicity of rightmost zero', correctAnswer: '3' },
        { id: 'rightcross', type: 'mc', label: 'Behavior at rightmost zero', choices: ['Crosses the x-axis', 'Does not cross the x-axis'], correctIndex: 0 },
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('(x-3)^3*(x+2)^2', { xMin: -10, xMax: 10, yMin: -120, yMax: 120, color: '#dc2626' }) },
            { svg: functionGraphSvg('-(x-3)^3*(x+2)^2', { xMin: -10, xMax: 10, yMin: -120, yMax: 120, color: '#dc2626' }) },
            { svg: functionGraphSvg('(x-3)^2*(x+2)^3', { xMin: -10, xMax: 10, yMin: -120, yMax: 120, color: '#dc2626' }) },
            { svg: functionGraphSvg('(x+3)^3*(x-2)^2', { xMin: -10, xMax: 10, yMin: -120, yMax: 120, color: '#dc2626' }) },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      prompt: 'State the degree and list the zeros of the polynomial function. State the multiplicity of each zero and whether the graph crosses the x-axis at the corresponding x-intercept. Then choose the graph (window [-5,5] by [-10,10]).\\n\\n$$f(x)=x(x-4)^2$$',
      parts: [
        { id: 'degree', type: 'expr', label: 'Degree', correctAnswer: '3' },
        { id: 'leftzero', type: 'expr', label: 'Leftmost zero, x =', correctAnswer: '0' },
        { id: 'leftmult', type: 'expr', label: 'Multiplicity of leftmost zero', correctAnswer: '1' },
        { id: 'leftcross', type: 'mc', label: 'Behavior at leftmost zero', choices: ['Crosses the x-axis', 'Does not cross the x-axis'], correctIndex: 0 },
        { id: 'rightzero', type: 'expr', label: 'Rightmost zero, x =', correctAnswer: '4' },
        { id: 'rightmult', type: 'expr', label: 'Multiplicity of rightmost zero', correctAnswer: '2' },
        { id: 'rightcross', type: 'mc', label: 'Behavior at rightmost zero', choices: ['Crosses the x-axis', 'Does not cross the x-axis'], correctIndex: 1 },
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('x*(x-4)^2-4', { xMin: -5, xMax: 5, yMin: -10, yMax: 10 }) },
            { svg: functionGraphSvg('-x*(x-4)^2', { xMin: -5, xMax: 5, yMin: -10, yMax: 10 }) },
            { svg: functionGraphSvg('x*(x+4)^2', { xMin: -5, xMax: 5, yMin: -10, yMax: 10 }) },
            { svg: functionGraphSvg('x*(x-4)^2', { xMin: -5, xMax: 5, yMin: -10, yMax: 10 }) },
          ],
          correctIndex: 3,
        },
      ],
    },
    {
      prompt: 'State the degree and list the zeros of the polynomial function. State the multiplicity of each zero and whether the graph crosses the x-axis at the corresponding x-intercept. Then choose the graph (window [-10,10] by [-120,120]).\\n\\n$$f(x)=(x-3)^3(x+1)^2$$',
      parts: [
        { id: 'degree', type: 'expr', label: 'Degree', correctAnswer: '5' },
        { id: 'leftzero', type: 'expr', label: 'Leftmost zero, x =', correctAnswer: '-1' },
        { id: 'leftmult', type: 'expr', label: 'Multiplicity of leftmost zero', correctAnswer: '2' },
        { id: 'leftcross', type: 'mc', label: 'Behavior at leftmost zero', choices: ['Crosses the x-axis', 'Does not cross the x-axis'], correctIndex: 1 },
        { id: 'rightzero', type: 'expr', label: 'Rightmost zero, x =', correctAnswer: '3' },
        { id: 'rightmult', type: 'expr', label: 'Multiplicity of rightmost zero', correctAnswer: '3' },
        { id: 'rightcross', type: 'mc', label: 'Behavior at rightmost zero', choices: ['Crosses the x-axis', 'Does not cross the x-axis'], correctIndex: 0 },
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('(x-3)^3*(x+1)^2', { xMin: -10, xMax: 10, yMin: -120, yMax: 120, color: '#dc2626' }) },
            { svg: functionGraphSvg('-(x-3)^3*(x+1)^2', { xMin: -10, xMax: 10, yMin: -120, yMax: 120, color: '#dc2626' }) },
            { svg: functionGraphSvg('(x-3)^2*(x+1)^3', { xMin: -10, xMax: 10, yMin: -120, yMax: 120, color: '#dc2626' }) },
            { svg: functionGraphSvg('(x+3)^3*(x-1)^2', { xMin: -10, xMax: 10, yMin: -120, yMax: 120, color: '#dc2626' }) },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      prompt: 'Find the zeros of the function.\\n\\n$$f(x)=x^3-2x^2-8x$$',
      parts: [{ id: 'zeros', type: 'list', correctList: ['0', '-2', '4'] }],
    },
    {
      prompt: 'Using only algebra, find a cubic function with the given zeros.\\n\\n$$-1, 2, -6$$\\n\\n$$f(x)=x^3+(\\underline{\\phantom{xx}})x^2-8x-12$$\\n\\nGive the value that fills the blank (the coefficient of x²).',
      parts: [{ id: 'coef', type: 'expr', label: 'Coefficient of x²', correctAnswer: '5' }],
    },
    {
      prompt: 'Which of the specified functions might have the given graph (window [-18,18], an odd-degree curve rising through the far left, dipping near the origin, and falling steeply beyond x = 13)?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$f(x)=-x(x+13)(13-x)$$' },
          { text: '$$f(x)=-x(x+13)^2(x-13)$$' },
          { text: '$$f(x)=-x(x+13)(x-13)$$' },
          { text: '$$f(x)=-x(x+13)(x-13)^2$$' },
          { text: '$$f(x)=-x^2(x+13)(x-13)$$' },
        ],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'Which of the specified functions might have the given graph (window [-22,22], an odd-degree curve rising through the far left, dipping near the origin, and falling steeply beyond x = 17)?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$f(x)=-x(x+17)(x-17)^2$$' },
          { text: '$$f(x)=-x(x+17)^2(x-17)$$' },
          { text: '$$f(x)=-x^2(x+17)(x-17)$$' },
          { text: '$$f(x)=-x(x+17)(17-x)$$' },
          { text: '$$f(x)=-x(x+17)(x-17)$$' },
        ],
        correctIndex: 4,
      }],
    },
    {
      prompt: 'Write a polynomial function of minimum degree in standard form with real coefficients whose zeros and their multiplicities include those listed.\\n\\n$$1 \\text{ (multiplicity 2)}, -2 \\text{ (multiplicity 3)}$$',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: 'x^5+4*x^4+x^3-10*x^2-4*x+8' }],
    },
    {
      prompt: 'Write a polynomial function of minimum degree in standard form with real coefficients whose zeros and their multiplicities include those listed.\\n\\n$$2 \\text{ (multiplicity 2)}, -7 \\text{ (multiplicity 3)}$$',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: 'x^5+17*x^4+67*x^3-161*x^2-784*x+1372' }],
    },
  ],
};
