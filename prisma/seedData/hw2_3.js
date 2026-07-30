const { functionGraphSvg } = require('../../lib/svgGraphs');

module.exports = {
  title: 'HW 2.3 - Poly Key Features',
  questions: [
    {
      prompt: 'Graph the polynomial function, and locate its extrema and zeros (window [-4,5] by [-15,15]).\\n\\n$$f(x)=-x^4+12x$$\\n\\nChoose the correct graph, then give the local extremum and the zeros (rounded to two decimal places).',
      parts: [
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('x^4-12*x', { xMin: -4, xMax: 5, yMin: -15, yMax: 15 }) },
            { svg: functionGraphSvg('-x^4+12*x', { xMin: -4, xMax: 5, yMin: -15, yMax: 15 }) },
            { svg: functionGraphSvg('-x^4-12*x', { xMin: -4, xMax: 5, yMin: -15, yMax: 15 }) },
            { svg: functionGraphSvg('x^4+12*x', { xMin: -4, xMax: 5, yMin: -15, yMax: 15 }) },
          ],
          correctIndex: 1,
        },
        { id: 'extremum', type: 'point', label: 'Local maximum (there is no local minimum)', correctPoints: [[1.44, 12.98]] },
        { id: 'zeros', type: 'list', label: 'Zeros (x ≈)', correctList: ['0.00', '2.29'] },
      ],
    },
    {
      prompt: 'Graph the polynomial function, and locate its extrema and zeros (window [-4,5] by [-15,15]).\\n\\n$$f(x)=-x^4+12x$$\\n\\nChoose the correct graph, then give the local extremum and the zeros (rounded to two decimal places).',
      parts: [
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('x^4-12*x', { xMin: -4, xMax: 5, yMin: -15, yMax: 15 }) },
            { svg: functionGraphSvg('-x^4+12*x', { xMin: -4, xMax: 5, yMin: -15, yMax: 15 }) },
            { svg: functionGraphSvg('-x^4-12*x', { xMin: -4, xMax: 5, yMin: -15, yMax: 15 }) },
            { svg: functionGraphSvg('x^4+12*x', { xMin: -4, xMax: 5, yMin: -15, yMax: 15 }) },
          ],
          correctIndex: 1,
        },
        { id: 'extremum', type: 'point', label: 'Local maximum (there is no local minimum)', correctPoints: [[1.44, 12.98]] },
        { id: 'zeros', type: 'list', label: 'Zeros (x ≈)', correctList: ['0.00', '2.29'] },
      ],
    },
    {
      prompt: 'Graph the function in a viewing window that shows all of its extrema and x-intercepts (window [-8,5] by [-33,18]). Describe the end behavior using limits.\\n\\n$$f(x)=(x-1)(x+2)(x+5)$$',
      parts: [
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('(x-1)*(x+2)*(x+5)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
            { svg: functionGraphSvg('-(x-1)*(x+2)*(x+5)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
            { svg: functionGraphSvg('(x+1)*(x-2)*(x+5)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
            { svg: functionGraphSvg('(x-1)*(x-2)*(x+5)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
          ],
          correctIndex: 0,
        },
        { id: 'limpos', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: 'Infinity' },
        { id: 'limneg', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: '-Infinity' },
      ],
    },
    {
      prompt: 'Graph the function in a viewing window that shows all of its extrema and x-intercepts (window [-8,5] by [-33,18]). Describe the end behavior using limits.\\n\\n$$f(x)=(x-1)(x+3)(x+4)$$',
      parts: [
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('(x-1)*(x+3)*(x+4)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
            { svg: functionGraphSvg('-(x-1)*(x+3)*(x+4)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
            { svg: functionGraphSvg('(x+1)*(x-3)*(x+4)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
            { svg: functionGraphSvg('(x-1)*(x-3)*(x+4)', { xMin: -8, xMax: 5, yMin: -33, yMax: 18, color: '#dc2626' }) },
          ],
          correctIndex: 0,
        },
        { id: 'limpos', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: 'Infinity' },
        { id: 'limneg', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: '-Infinity' },
      ],
    },
    {
      prompt: 'Graph the function in a viewing window that shows all of its extrema and x-intercepts (window [-6,6] by [-200,200]). Describe the end behavior using limits.\\n\\n$$f(x)=2x^4-5x^3-17x^2+14x+41$$',
      parts: [
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('2*x^4+5*x^3-17*x^2-14*x+41', { xMin: -6, xMax: 6, yMin: -200, yMax: 200, color: '#dc2626' }) },
            { svg: functionGraphSvg('-2*x^4-5*x^3+17*x^2+14*x-41', { xMin: -6, xMax: 6, yMin: -200, yMax: 200, color: '#dc2626' }) },
            { svg: functionGraphSvg('2*x^4-5*x^3+17*x^2+14*x+41', { xMin: -6, xMax: 6, yMin: -200, yMax: 200, color: '#dc2626' }) },
            { svg: functionGraphSvg('2*x^4-5*x^3-17*x^2+14*x+41', { xMin: -6, xMax: 6, yMin: -200, yMax: 200, color: '#dc2626' }) },
          ],
          correctIndex: 3,
        },
        { id: 'limpos', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: 'Infinity' },
        { id: 'limneg', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: 'Infinity' },
      ],
    },
    {
      prompt: 'Graph the function in a viewing window that shows all of its extrema and x-intercepts (window [-6,6] by [-200,200]). Describe the end behavior using limits.\\n\\n$$f(x)=2x^4-6x^3-15x^2+14x+43$$',
      parts: [
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('2*x^4-6*x^3-15*x^2+14*x+43', { xMin: -6, xMax: 6, yMin: -200, yMax: 200, color: '#dc2626' }) },
            { svg: functionGraphSvg('-2*x^4+6*x^3+15*x^2-14*x-43', { xMin: -6, xMax: 6, yMin: -200, yMax: 200, color: '#dc2626' }) },
            { svg: functionGraphSvg('2*x^4+6*x^3-15*x^2-14*x+43', { xMin: -6, xMax: 6, yMin: -200, yMax: 200, color: '#dc2626' }) },
            { svg: functionGraphSvg('2*x^4-6*x^3+15*x^2+14*x+43', { xMin: -6, xMax: 6, yMin: -200, yMax: 200, color: '#dc2626' }) },
          ],
          correctIndex: 0,
        },
        { id: 'limpos', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: 'Infinity' },
        { id: 'limneg', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: 'Infinity' },
      ],
    },
    {
      prompt: 'Describe the end behavior of the polynomial function using limits.\\n\\n$$f(x)=-5x^4-4x^2-3$$',
      parts: [
        { id: 'limpos', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '-Infinity' },
        { id: 'limneg', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: '-Infinity' },
      ],
    },
    {
      prompt: 'Describe the end behavior of the polynomial function using limits.\\n\\n$$f(x)=7x^2-x^3+2x-4$$',
      parts: [
        { id: 'limpos', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '-Infinity' },
        { id: 'limneg', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: 'Infinity' },
      ],
    },
    {
      prompt: 'Find the zeros of the function algebraically.\\n\\n$$f(w)=w^2+3w-28$$',
      parts: [{ id: 'w', type: 'list', correctList: ['4', '-7'] }],
    },
  ],
};
