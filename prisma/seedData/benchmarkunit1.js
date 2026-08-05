const { functionGraphSvg, numberLineSvg } = require('../../lib/svgGraphs');

module.exports = {
  title: 'Benchmark Review - Unit 1',
  questions: [
    {
      prompt: 'Write the polynomial below in standard form and state its degree.\\n\\n$$9-2x^2+3x$$',
      parts: [
        { id: 'standard', type: 'expr', label: 'Standard form', correctAnswer: '-2*x^2+3*x+9' },
        { id: 'degree', type: 'expr', label: 'Degree', correctAnswer: '2' },
      ],
    },
    {
      prompt: 'State whether the following expression is a polynomial.\\n\\n$$4x^{-6}+6$$',
      parts: [{ id: 'mc', type: 'mc', choices: ['The expression is a polynomial.', 'The expression is not a polynomial.'], correctIndex: 1 }],
    },
    {
      prompt: 'Subtract.\\n\\n$$(-7x+7)-(x^2+x-2)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '-x^2-8*x+9' }],
    },
    {
      prompt: 'Use the FOIL method to multiply the binomials.\\n\\n$$(x+8)(x-3)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: 'x^2+5*x-24' }],
    },
    {
      prompt: 'Factor out the greatest common factor.\\n\\n$$5a-10$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '5*(a-2)' }],
    },
    {
      prompt: 'Factor out the common factor.\\n\\n$$yz^3-15yz^2+17yz$$',
      parts: [{ id: 'ans', type: 'factor', isPrime: false, correctAnswer: 'y*z*(z^2-15*z+17)' }],
    },
    {
      prompt: 'Factor the trinomial, or state the trinomial is prime.\\n\\n$$x^2+13x+36$$',
      parts: [{ id: 'ans', type: 'factor', isPrime: false, correctAnswer: '(x+4)*(x+9)' }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^2$$ can be transformed to the graph of the given equation.\\n\\n$$y=(x-5)^2$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: ['A translation of the graph down by 5 units', 'A translation of the graph up by 5 units', 'A translation of the graph to the right by 5 units', 'A translation of the graph to the left by 5 units'],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^2$$ can be transformed to the graph of the given equation.\\n\\n$$y=(x+5)^2+2$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: ['A translation of the graph to the right by 2 units and up by 5 units', 'A translation of the graph to the left by 5 units and up by 2 units', 'A translation of the graph to the left by 2 units and down by 5 units', 'A translation of the graph to the right by 5 units and up by 2 units'],
        correctIndex: 1,
      }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^3$$ can be transformed to the graph of $$y=0.5x^3$$.',
      parts: [{ id: 'mc', type: 'mc', choices: ['A vertical shrink by a factor of 0.5.', 'A vertical stretch by a factor of 0.5.'], correctIndex: 0 }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^3$$ can be transformed to the graph of $$y=2x^3$$.',
      parts: [{ id: 'mc', type: 'mc', choices: ['A vertical shrink by a factor of 2.', 'A vertical stretch by a factor of 2.'], correctIndex: 1 }],
    },
    {
      prompt: 'Find the equation of the given graph — a decreasing square-root-shaped curve starting near (4,-4) and flattening as it moves right, passing through roughly (8,-6).',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [{ text: '$$y=\\sqrt{x-4}-4$$' }, { text: '$$y=-\\sqrt{x-4}+4$$' }, { text: '$$y=-\\sqrt{x-4}-4$$' }],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'Find the equation of the reflection of f across (a) the x-axis and (b) the y-axis.\\n\\n$$f(x)=x^3+4x^2+3x+9$$',
      parts: [
        { id: 'a', type: 'expr', label: 'Reflection across x-axis', correctAnswer: '-x^3-4*x^2-3*x-9' },
        { id: 'b', type: 'expr', label: 'Reflection across y-axis', correctAnswer: '-x^3+4*x^2-3*x+9' },
      ],
    },
    {
      prompt: 'Refer to the graph of $$y=f(x)$$ where $$f(x)=x^3-4x$$ (a wiggling cubic through the origin). Sketch the graph of the new function $$y=-|f(x)|$$.',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { svg: functionGraphSvg('-abs(x^3-4*x)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
          { svg: functionGraphSvg('abs(x^3-4*x)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
          { svg: functionGraphSvg('x^3-4*x', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
          { svg: functionGraphSvg('-(x^3-4*x)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
        ],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'Describe a basic graph and a sequence of transformations that can be used to produce a graph of the given function.\\n\\n$$y=4(x-3)^2-3$$\\n\\nFill in the blanks: "Start with y = ___, translate ___ unit(s) to the right, vertically stretch by a factor of ___, and translate down ___ unit(s)."',
      parts: [
        { id: 'base', type: 'expr', label: 'Start with y =', correctAnswer: 'x^2' },
        { id: 'right', type: 'expr', label: 'Translate right (units)', correctAnswer: '3' },
        { id: 'stretch', type: 'expr', label: 'Vertical stretch factor', correctAnswer: '4' },
        { id: 'down', type: 'expr', label: 'Translate down (units)', correctAnswer: '3' },
      ],
    },
    {
      prompt: 'A graph of $$y=f(x)$$ is given (no formula for f). Which best describes the graph of $$g(x)=f(4x)$$?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: ['A horizontal compression of the graph of f by a factor of 4.', 'A horizontal stretch of the graph of f by a factor of 4.', 'A vertical stretch of the graph of f by a factor of 4.', 'A vertical compression of the graph of f by a factor of 4.'],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'Given a function f, which of the following represents a horizontal stretch by a factor of 2?',
      parts: [{ id: 'mc', type: 'mc', choices: [{ text: '$$f(2x)$$' }, { text: '$$\\dfrac{f(x)}{2}$$' }, { text: '$$2f(x)$$' }, { text: '$$f\\left(\\dfrac{x}{2}\\right)$$' }], correctIndex: 3 }],
    },
    {
      prompt: 'Solve.\\n\\n$$36x^2=49$$',
      parts: [{ id: 'x', type: 'list', correctList: ['7/6', '-7/6'] }],
    },
    {
      prompt: 'Solve for x by using the quadratic formula.\\n\\n$$x^2+18x+4=0$$',
      parts: [{ id: 'x', type: 'list', correctList: ['-9+sqrt(77)', '-9-sqrt(77)'] }],
    },
    {
      prompt: 'Solve the equation graphically by finding intersections.\\n\\n$$|x-4|=12$$',
      parts: [{ id: 'x', type: 'list', correctList: ['-8', '16'] }],
    },
    {
      prompt: 'Solve the inequality algebraically. Write the solution in interval notation and draw its number line graph.\\n\\n$$|x+4|\\geq8$$',
      parts: [
        { id: 'interval', type: 'interval', label: 'Solution (interval notation)', correctAnswer: '(-Infinity,-12]U[4,Infinity)' },
        {
          id: 'graph', type: 'mc', label: 'Correct number line graph',
          choices: [
            { svg: numberLineSvg([{ left: -Infinity, right: -12, rightClosed: true }, { left: 4, right: Infinity, leftClosed: true }], { min: -20, max: 20, step: 4 }) },
            { svg: numberLineSvg([{ left: -Infinity, right: 4, rightClosed: true }, { left: -4, right: Infinity, leftClosed: true }], { min: -20, max: 20, step: 4 }) },
            { svg: numberLineSvg([{ left: -12, right: 4, leftClosed: true, rightClosed: true }], { min: -20, max: 20, step: 4 }) },
            { svg: numberLineSvg([{ left: -Infinity, right: -4, rightClosed: true }, { left: 12, right: Infinity, leftClosed: true }], { min: -20, max: 20, step: 4 }) },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      prompt: 'Solve the inequality. Use algebra to solve the corresponding equation.\\n\\n$$2x^2+19x+42\\leq0$$',
      parts: [{ id: 'interval', type: 'interval', correctAnswer: '[-6,-7/2]' }],
    },
    {
      prompt: 'Solve the following problem without using a calculator.\\n\\nWhich of the following is the solution to $$x^2\\geq16?$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [{ text: '$$(-\\infty,-4)\\cup(4,\\infty)$$' }, { text: '$$(-\\infty,-4]\\cup[4,\\infty)$$' }, { text: '$$[-4,4]$$' }, { text: '$$(-4,4)$$' }, { text: 'There is no solution.' }],
        correctIndex: 1,
      }],
    },
    {
      prompt: 'Find the formulas for the functions f + g, f - g, and fg. Give the domain of each.\\n\\n$$f(x)=x^2 \\text{ and } g(x)=4x-8$$',
      parts: [
        { id: 'sum', type: 'expr', label: 'f + g =', correctAnswer: 'x^2+4*x-8' },
        { id: 'sumdom', type: 'interval', label: 'Domain of f + g', correctAnswer: '(-Infinity,Infinity)' },
        { id: 'diff', type: 'expr', label: 'f - g =', correctAnswer: 'x^2-4*x+8' },
        { id: 'diffdom', type: 'interval', label: 'Domain of f - g', correctAnswer: '(-Infinity,Infinity)' },
        { id: 'prod', type: 'expr', label: 'fg =', correctAnswer: '4*x^3-8*x^2' },
        { id: 'proddom', type: 'interval', label: 'Domain of fg', correctAnswer: '(-Infinity,Infinity)' },
      ],
    },
    {
      prompt: 'Find formulas for f/g and g/f. Give the domain of each.\\n\\n$$f(x)=\\sqrt{x+4} \\text{ ; } g(x)=x^2$$',
      parts: [
        { id: 'fg', type: 'expr', label: 'f/g =', correctAnswer: 'sqrt(x+4)/x^2' },
        { id: 'fgdom', type: 'interval', label: 'Domain of f/g', correctAnswer: '[-4,0)U(0,Infinity)' },
        { id: 'gf', type: 'expr', label: 'g/f =', correctAnswer: 'x^2/sqrt(x+4)' },
        { id: 'gfdom', type: 'interval', label: 'Domain of g/f', correctAnswer: '(-4,Infinity)' },
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
      prompt: 'Find f(g(x)) and g(f(x)). State the domain of each.\\n\\n$$f(x)=9x+8; g(x)=x-4$$',
      parts: [
        { id: 'fg', type: 'expr', label: 'f(g(x)) =', correctAnswer: '9*x-28' },
        { id: 'fgdom', type: 'interval', label: 'Domain of f(g(x))', correctAnswer: '(-Infinity,Infinity)' },
        { id: 'gf', type: 'expr', label: 'g(f(x)) =', correctAnswer: '9*x+4' },
        { id: 'gfdom', type: 'interval', label: 'Domain of g(f(x))', correctAnswer: '(-Infinity,Infinity)' },
      ],
    },
    {
      prompt: 'Find f(x) and g(x) such that $$h(x)=(f\\circ g)(x)$$.\\n\\n$$h(x)=(5-8x)^2$$\\n\\nSuppose that $$g(x)=5-8x$$.',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: 'x^2' }],
    },
  ],
};
