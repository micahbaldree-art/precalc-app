const { functionGraphSvg } = require('../../lib/svgGraphs');

module.exports = {
  title: 'HW 1.3 - Solving Equations',
  questions: [
    {
      prompt: 'Solve the equation graphically by finding x-intercepts. Confirm by using factoring to solve the equation.\\n\\n$$x^2 - 6x - 27 = 0$$\\n\\nGraph the function in the viewing window [-10,10] by [-50,50], choose the matching graph, then give the x-intercepts.',
      parts: [
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('x^2-6*x-27', { xMin: -10, xMax: 10, yMin: -50, yMax: 50 }) },
            { svg: functionGraphSvg('-x^2-6*x-27', { xMin: -10, xMax: 10, yMin: -50, yMax: 50 }) },
            { svg: functionGraphSvg('x^2-6*x+27', { xMin: -10, xMax: 10, yMin: -50, yMax: 50 }) },
            { svg: functionGraphSvg('x^2+6*x-27', { xMin: -10, xMax: 10, yMin: -50, yMax: 50 }) },
          ],
          correctIndex: 0,
        },
        { id: 'x', type: 'list', label: 'x =', correctList: ['9', '-3'] },
      ],
    },
    {
      prompt: 'Solve.\\n\\n$$81x^2 = 4$$',
      parts: [{ id: 'x', type: 'list', correctList: ['2/9', '-2/9'] }],
    },
    {
      prompt: 'Solve the equation by extracting square roots.\\n\\n$$3(x+4)^2 = 7$$',
      parts: [{ id: 'x', type: 'list', correctList: ['(-12-sqrt(21))/3', '(-12+sqrt(21))/3'] }],
    },
    {
      prompt: 'Solve by completing the square.\\n\\n$$x^2 + 6x = 16$$',
      parts: [{ id: 'x', type: 'list', correctList: ['-8', '2'] }],
    },
    {
      prompt: 'Solve by completing the square.\\n\\n$$x^2 - 9x + \\tfrac{61}{4} = 0$$',
      parts: [{ id: 'x', type: 'list', correctList: ['9/2+sqrt(5)', '9/2-sqrt(5)'] }],
    },
    {
      prompt: 'Solve for x by using the quadratic formula.\\n\\n$$x^2 + 6x + 4 = 0$$',
      parts: [{ id: 'x', type: 'list', correctList: ['-3+sqrt(5)', '-3-sqrt(5)'] }],
    },
    {
      prompt: 'Solve the equation using the quadratic formula.\\n\\n$$4x + 5 = x^2$$',
      parts: [{ id: 'x', type: 'list', correctList: ['5', '-1'] }],
    },
    {
      prompt: 'Solve the equation graphically by finding intersections.\\n\\n$$|x-2| = 17$$',
      parts: [{ id: 'x', type: 'list', correctList: ['-15', '19'] }],
    },
    {
      prompt: 'Solve the equation graphically by finding intersections.\\n\\n$$|2x+8| = 16$$',
      parts: [{ id: 'x', type: 'list', correctList: ['4', '-12'] }],
    },
    {
      prompt: 'Use a method of your choice to solve the equation.\\n\\n$$x^2 + 3x - 10 = 0$$',
      parts: [{ id: 'x', type: 'list', correctList: ['-5', '2'] }],
    },
    {
      prompt: "Jana's den is 8 feet longer than it is wide. If the den's area is 240 square feet, what are the dimensions of the room?",
      parts: [{ id: 'dims', type: 'list', label: 'Dimensions (ft)', correctList: ['12', '20'] }],
    },
    {
      prompt: 'What are the solutions to the equation $$|x-4| = -8$$?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: ['Only x = 12', 'x = 12 and x = -4', 'Only x = 4', 'Only x = -4', 'There are no solutions.'],
        correctIndex: 4,
      }],
    },
  ],
};
