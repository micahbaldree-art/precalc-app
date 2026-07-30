const { functionGraphSvg } = require('../../lib/svgGraphs');

function graphChoice(fn, opts) {
  return { svg: functionGraphSvg(fn, opts) };
}

module.exports = {
  title: 'HW 1.2 - Transformations',
  questions: [
    {
      prompt: 'Describe how the graph of $$y=x^2$$ can be transformed to the graph of the given equation.\\n\\n$$y = (x-5)^2$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: ['A translation of the graph to the left by 5 units', 'A translation of the graph to the right by 5 units', 'A translation of the graph up by 5 units', 'A translation of the graph down by 5 units'],
        correctIndex: 1,
      }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^2$$ can be transformed to the graph of the given equation.\\n\\n$$y = (x+6)^2 + 5$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          'A translation of the graph to the left by 5 units and down by 6 units',
          'A translation of the graph to the left by 6 units and up by 5 units',
          'A translation of the graph to the right by 5 units and up by 6 units',
          'A translation of the graph to the right by 6 units and up by 5 units',
        ],
        correctIndex: 1,
      }],
    },
    {
      prompt: 'Describe how the graph of $$y=\\sqrt{x}$$ can be transformed to the graph of the given function.\\n\\n$$f(x) = \\sqrt{-x} - 4$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          'Reflection across the y-axis, vertical translation down by 4 units',
          'Reflection across the y-axis, vertical translation up by 4 units',
          'Reflection across the x-axis, vertical translation up by 4 units',
          'Reflection across the x-axis, vertical translation down by 4 units',
        ],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^3$$ can be transformed to the graph of $$y=2x^3$$.',
      parts: [{ id: 'mc', type: 'mc', choices: ['A vertical stretch by a factor of 2.', 'A vertical shrink by a factor of 2.'], correctIndex: 0 }],
    },
    {
      prompt: 'Describe how the graph of $$y=x^3$$ can be transformed to the graph of $$y=(0.8x)^3$$.',
      parts: [{ id: 'mc', type: 'mc', choices: ['A horizontal shrink by a factor of 1/0.8.', 'A horizontal stretch by a factor of 1/0.8.'], correctIndex: 1 }],
    },
    {
      prompt: 'Sketch the graphs of f, g, and h, then choose the matching graph for each.\\n\\n$$f(x) = \\sqrt[3]{x-4}$$\\n$$g(x) = 4\\sqrt[3]{x} + 1$$\\n$$h(x) = -\\sqrt[3]{x+9}$$',
      parts: [
        {
          id: 'f', type: 'mc', label: 'Graph of f',
          choices: [
            graphChoice('cbrt(x-4)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }),
            graphChoice('cbrt(x+4)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }),
            graphChoice('-cbrt(x-4)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }),
            graphChoice('cbrt(x)-4', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }),
          ],
          correctIndex: 0,
        },
        {
          id: 'g', type: 'mc', label: 'Graph of g',
          choices: [
            graphChoice('4*cbrt(x-1)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }),
            graphChoice('4*cbrt(x)+1', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }),
            graphChoice('-4*cbrt(x)+1', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }),
            graphChoice('cbrt(x)+1', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }),
          ],
          correctIndex: 1,
        },
        {
          id: 'h', type: 'mc', label: 'Graph of h',
          choices: [
            graphChoice('-cbrt(x+9)', { xMin: -20, xMax: 20, yMin: -10, yMax: 10 }),
            graphChoice('cbrt(x+9)', { xMin: -20, xMax: 20, yMin: -10, yMax: 10 }),
            graphChoice('-cbrt(x)+9', { xMin: -20, xMax: 20, yMin: -10, yMax: 10 }),
            graphChoice('-cbrt(x-9)', { xMin: -20, xMax: 20, yMin: -10, yMax: 10 }),
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      prompt: 'Find the equation of the given graph (a decreasing square-root-shaped curve passing near (-4,4) and (7,2), flattening to the right).',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$y=-\\sqrt{x+5}-5$$' },
          { text: '$$y=\\sqrt{x+5}+5$$' },
          { text: '$$y=-\\sqrt{x+5}+5$$' },
        ],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'Find the equation of the reflection of $$f(x)=x^3+6x^2-6x+7$$ across (a) the x-axis and (b) the y-axis.',
      parts: [
        { id: 'a', type: 'expr', label: 'Reflection across x-axis', correctAnswer: '-x^3-6*x^2+6*x-7' },
        { id: 'b', type: 'expr', label: 'Reflection across y-axis', correctAnswer: '-x^3+6*x^2+6*x+7' },
      ],
    },
    {
      prompt: 'Transform $$f(x)=x^3-3x$$ by (a) a vertical stretch by a factor of 2, (b) a horizontal shrink by a factor of 1/5. (Do not factor.)',
      parts: [
        { id: 'a', type: 'expr', label: 'Vertical stretch by 2', correctAnswer: '2*x^3-6*x' },
        { id: 'b', type: 'expr', label: 'Horizontal shrink by 1/5', correctAnswer: '125*x^3-15*x' },
      ],
    },
    {
      prompt: 'Describe a basic graph and a sequence of transformations that can be used to produce a graph of $$y=2(x-5)^2+1$$. Fill in the blanks for the correct description: "Start with y = ___, translate ___ unit(s) to the right, vertically stretch by a factor of ___, and translate up ___ unit(s)."',
      parts: [
        { id: 'base', type: 'expr', label: 'Start with y =', correctAnswer: 'x^2' },
        { id: 'right', type: 'expr', label: 'Translate right (units)', correctAnswer: '5' },
        { id: 'stretch', type: 'expr', label: 'Vertical stretch factor', correctAnswer: '2' },
        { id: 'up', type: 'expr', label: 'Translate up (units)', correctAnswer: '1' },
      ],
    },
    {
      prompt: 'The graph of $$y=-\\tfrac{1}{2}|x+5|-4$$ can be obtained from the graph of $$y=|x|$$ by which transformations?',
      parts: [
        { id: 'shift_h', type: 'mc', label: 'Horizontal shift', choices: ['5 units to the right', '5 units to the left', '4 units to the right', '4 units to the left'], correctIndex: 1 },
        { id: 'stretch', type: 'mc', label: 'Vertical stretch/shrink and reflection', choices: ['stretched vertically by a factor of 2; reflected over the y-axis', 'stretched vertically by a factor of 2; reflected over the x-axis', 'shrunk vertically by a factor of 1/2; reflected over the y-axis', 'shrunk vertically by a factor of 1/2; reflected over the x-axis'], correctIndex: 3 },
        { id: 'shift_v', type: 'mc', label: 'Vertical shift', choices: ['5 units downward', '4 units downward', '5 units upward', '4 units upward'], correctIndex: 1 },
      ],
    },
    {
      prompt: 'A graph G is obtained from a graph of $$y=x^2$$ by a vertical stretch by a factor of 8, then a shift right 6 units. Write an equation whose graph is G.',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '8*(x-6)^2' }],
    },
  ],
};
