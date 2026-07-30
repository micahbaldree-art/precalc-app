const { functionGraphSvg } = require('../../lib/svgGraphs');

module.exports = {
  title: 'Practice 1.1 - 1.3',
  questions: [
    {
      prompt: 'Write the polynomial below in standard form and state its degree.\\n\\n$$3x - 4 + 2x^2$$',
      parts: [
        { id: 'standard', type: 'expr', correctAnswer: '2*x^2+3*x-4' },
        { id: 'degree', type: 'expr', correctAnswer: '2' },
      ],
    },
    {
      prompt: 'State whether the following expression is a polynomial.\\n\\n$$2x^{-2} + 6$$',
      parts: [{ id: 'mc', type: 'mc', choices: ['The expression is a polynomial.', 'The expression is not a polynomial.'], correctIndex: 1 }],
    },
    {
      prompt: 'Add the polynomials.\\n\\n$$(8x^2+7x-9)+(4x^2+4x-8)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '12*x^2+11*x-17' }],
    },
    {
      prompt: 'Subtract.\\n\\n$$(-6x+7)-(x^2+x-2)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '-x^2-7*x+9' }],
    },
    {
      prompt: 'Find the product.\\n\\n$$(3x-1)(x+8)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '3*x^2+23*x-8' }],
    },
    {
      prompt: 'Square the binomial.\\n\\n$$(6x+8y)^2$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '36*x^2+96*x*y+64*y^2' }],
    },
    {
      prompt: 'Factor the difference of two squares.\\n\\n$$49x^2-121y^2$$',
      parts: [{ id: 'ans', type: 'factor', isPrime: false, correctAnswer: '(7*x+11*y)*(7*x-11*y)' }],
    },
    {
      prompt: 'Factor the sum or difference of two cubes shown below.\\n\\n$$x^3-27$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '(x-3)*(x^2+3*x+9)' }],
    },
    {
      prompt: 'Factor the trinomial, or state the trinomial is prime.\\n\\n$$x^2+12x+27$$',
      parts: [{ id: 'ans', type: 'factor', isPrime: false, correctAnswer: '(x+9)*(x+3)' }],
    },
    {
      prompt: 'Factor the following trinomial, or state that the trinomial is prime.\\n\\n$$6x^2-13x+6$$',
      parts: [{ id: 'ans', type: 'factor', isPrime: false, correctAnswer: '(3*x-2)*(2*x-3)' }],
    },
    {
      prompt: 'Factor by grouping.\\n\\n$$10x^3-6x^2+35x-21$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '(2*x^2+7)*(5*x-3)' }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^2$$ can be transformed to the graph of $$y=(x-7)^2$$.',
      parts: [{ id: 'mc', type: 'mc', choices: ['A translation of the graph to the right by 7 units', 'A translation of the graph down by 7 units', 'A translation of the graph to the left by 7 units', 'A translation of the graph up by 7 units'], correctIndex: 0 }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^2$$ can be transformed to the graph of $$y=(x-4)^2+3$$.',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          'A translation of the graph to the left by 3 units and up by 4 units',
          'A translation of the graph to the right by 3 units and down by 4 units',
          'A translation of the graph to the left by 4 units and up by 3 units',
          'A translation of the graph to the right by 4 units and up by 3 units',
        ],
        correctIndex: 3,
      }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^3$$ can be transformed to the graph of $$y=0.4x^3$$.',
      parts: [{ id: 'mc', type: 'mc', choices: ['A vertical stretch by a factor of 0.4.', 'A vertical shrink by a factor of 0.4.'], correctIndex: 1 }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^3$$ can be transformed to the graph of $$y=(0.5x)^3$$.',
      parts: [{ id: 'mc', type: 'mc', choices: ['A horizontal shrink by a factor of 1/0.5.', 'A horizontal stretch by a factor of 1/0.5.'], correctIndex: 1 }],
    },
    {
      prompt: 'Describe how to transform the graph of f into the graph of g.\\n\\n$$f(x)=(x-7)^3, \\\\; g(x)=-(x+7)^3$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          'Translate right 14 units, and reflect across the x-axis to get g(x).',
          'Translate left 14 units, and reflect across the y-axis to get g(x).',
          'Translate left 14 units, and reflect across the x-axis to get g(x).',
          'Translate right 14 units, and reflect across the y-axis to get g(x).',
        ],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'Find the equation of the given graph — a decreasing square-root-shaped curve near (3,-1), flattening to the right.',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [{ text: '$$y=-\\\\sqrt{x-3}-1$$' }, { text: '$$y=-\\\\sqrt{x}-3+1$$' }, { text: '$$y=\\\\sqrt{x-3}-1$$' }],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'Find the equation of the reflection of $$f(x)=x^3+8x^2-4x-2$$ across (a) the x-axis and (b) the y-axis.',
      parts: [
        { id: 'a', type: 'expr', label: 'Reflection across x-axis', correctAnswer: '-x^3-8*x^2+4*x+2' },
        { id: 'b', type: 'expr', label: 'Reflection across y-axis', correctAnswer: '-x^3+8*x^2+4*x-2' },
      ],
    },
    {
      prompt: 'Use the graph of $$y=f(x)$$ (an increasing line through the origin) to choose the graph of $$y=|f(x)|$$.',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { svg: functionGraphSvg('x', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
          { svg: functionGraphSvg('-x', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
          { svg: functionGraphSvg('abs(x)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
          { svg: functionGraphSvg('-abs(x)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
        ],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'Refer to the graph of $$y=f(x)$$ (a downward hump through the origin area). Sketch the graph of $$y=-|f(x)|$$.',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { svg: functionGraphSvg('-abs(-x^2+4)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
          { svg: functionGraphSvg('abs(-x^2+4)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
          { svg: functionGraphSvg('x^2-4', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
          { svg: functionGraphSvg('-x^2+4', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
        ],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'Transform $$f(x)=x^3-3x$$ by (a) a vertical stretch by a factor of 4, (b) a horizontal shrink by a factor of 1/5. (Do not factor.)',
      parts: [
        { id: 'a', type: 'expr', correctAnswer: '4*x^3-12*x' },
        { id: 'b', type: 'expr', correctAnswer: '125*x^3-15*x' },
      ],
    },
    {
      prompt: 'The graph of $$y=-\\\\tfrac{1}{4}|x+3|+4$$ can be obtained from the graph of $$y=|x|$$ by which transformations?',
      parts: [
        { id: 'shift_h', type: 'mc', label: 'Horizontal shift', choices: ['3 units to the right', '3 units to the left', '4 units to the left', '4 units to the right'], correctIndex: 1 },
        { id: 'stretch', type: 'mc', label: 'Stretch/shrink and reflection', choices: ['shrunk vertically by a factor of 1/4; reflected over the y-axis', 'stretched vertically by a factor of 4; reflected over the x-axis', 'stretched vertically by a factor of 4; reflected over the y-axis', 'shrunk vertically by a factor of 1/4; reflected over the x-axis'], correctIndex: 3 },
        { id: 'shift_v', type: 'mc', label: 'Vertical shift', choices: ['3 units downward', '4 units upward', '4 units downward', '3 units upward'], correctIndex: 1 },
      ],
    },
    {
      prompt: 'A graph G is obtained from a graph of $$y=|x|$$: shift left 4 units, then a vertical stretch by a factor of 7, and finally a shift down 5 units. Write an equation whose graph is G.',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '7*abs(x+4)-5' }],
    },
    {
      prompt: 'Given a function f, which of the following represents a horizontal stretch by a factor of 2?',
      parts: [{ id: 'mc', type: 'mc', choices: [{ text: '$$f(x/2)$$' }, { text: '$$f(2x)$$' }, { text: '$$2f(x)$$' }, { text: '$$f(x)/2$$' }], correctIndex: 0 }],
    },
    {
      prompt: 'Solve.\\n\\n$$16x^2=9$$',
      parts: [{ id: 'x', type: 'list', correctList: ['3/4', '-3/4'] }],
    },
    {
      prompt: 'Solve for x by using the quadratic formula.\\n\\n$$x^2+18x+4=0$$',
      parts: [{ id: 'x', type: 'list', correctList: ['-9+sqrt(77)', '-9-sqrt(77)'] }],
    },
    {
      prompt: 'Solve the equation using the quadratic formula.\\n\\n$$4x+12=x^2$$',
      parts: [{ id: 'x', type: 'list', correctList: ['6', '-2'] }],
    },
    {
      prompt: 'Solve with a grapher.\\n\\n$$x^3-9x^2-156x+704=0$$',
      parts: [{ id: 'x', type: 'list', correctList: ['-11', '4', '16'] }],
    },
    {
      prompt: 'Solve the equation graphically by finding intersections.\\n\\n$$|x-9|=11$$',
      parts: [{ id: 'x', type: 'list', correctList: ['-2', '20'] }],
    },
    {
      prompt: 'Solve the equation graphically by finding intersections.\\n\\n$$|2x+2|=10$$',
      parts: [{ id: 'x', type: 'list', correctList: ['4', '-6'] }],
    },
    {
      prompt: 'Use a method of your choice to solve the equation.\\n\\n$$x^2+3x-18=0$$',
      parts: [{ id: 'x', type: 'list', correctList: ['-6', '3'] }],
    },
    {
      prompt: 'Solve.\\n\\n$$|2x-3|=6$$',
      parts: [{ id: 'x', type: 'list', correctList: ['9/2', '-3/2'] }],
    },
  ],
};
