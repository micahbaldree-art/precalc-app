const { functionGraphSvg, functionWithAsymptoteSvg } = require('../../lib/svgGraphs');

module.exports = {
  title: 'HW 2.6 - Rational Functions',
  questions: [
    {
      prompt: 'Find the domain of the function f. Use limits to describe the behavior of f at value(s) of x not in its domain.\\n\\n$$f(x)=\\dfrac{1}{x+4}$$',
      parts: [
        { id: 'excluded', type: 'list', label: 'Excluded from domain, x =', correctList: ['-4'] },
        { id: 'limleft', type: 'expr', label: 'lim f(x) as x→-4⁻', correctAnswer: '-Infinity' },
        { id: 'limright', type: 'expr', label: 'lim f(x) as x→-4⁺', correctAnswer: 'Infinity' },
      ],
    },
    {
      prompt: 'Find the domain of the function f. Use limits to describe the behavior of f at value(s) of x not in its domain.\\n\\n$$f(x)=\\dfrac{-1}{x^2-1}$$',
      parts: [
        { id: 'excluded', type: 'list', label: 'Excluded from domain, x =', correctList: ['-1', '1'] },
        { id: 'limleft1', type: 'expr', label: 'lim f(x) as x→-1⁻', correctAnswer: '-Infinity' },
        { id: 'limright1', type: 'expr', label: 'lim f(x) as x→-1⁺', correctAnswer: 'Infinity' },
        { id: 'limleft2', type: 'expr', label: 'lim f(x) as x→1⁻', correctAnswer: 'Infinity' },
        { id: 'limright2', type: 'expr', label: 'lim f(x) as x→1⁺', correctAnswer: '-Infinity' },
      ],
    },
    {
      prompt: 'Find the horizontal and vertical asymptotes of f(x). Use limits to describe the corresponding behavior.\\n\\n$$f(x)=\\dfrac{2x^2-1}{x^2+4}$$',
      parts: [
        { id: 'vasym', type: 'text', label: 'Vertical asymptote(s) (type "none" if there are none)', correctAnswer: 'none' },
        { id: 'hasym', type: 'expr', label: 'Horizontal asymptote, y =', correctAnswer: '2' },
        { id: 'limninf', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: '2' },
        { id: 'limpinf', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '2' },
      ],
    },
    {
      prompt: 'Find the horizontal and vertical asymptotes of f(x). Use limits to describe the corresponding behavior.\\n\\n$$f(x)=\\dfrac{7x+6}{x^2-x}$$',
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
      prompt: 'Find the intercepts and asymptotes of the function, and choose the graph (window [-5,5] by [-45,45]).\\n\\n$$h(x)=\\dfrac{4}{x^3-x}$$',
      parts: [
        { id: 'intercepts', type: 'mc', label: 'Are there any intercepts?', choices: ['Yes', 'No, there are no intercepts.'], correctIndex: 1 },
        { id: 'vasym', type: 'list', label: 'Vertical asymptote(s), x =', correctList: ['-1', '0', '1'] },
        { id: 'hasym', type: 'expr', label: 'Horizontal asymptote, y =', correctAnswer: '0' },
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('4/(x^3-x)', { xMin: -5, xMax: 5, yMin: -45, yMax: 45, color: '#dc2626' }) },
            { svg: functionGraphSvg('-4/(x^3-x)', { xMin: -5, xMax: 5, yMin: -45, yMax: 45, color: '#dc2626' }) },
            { svg: functionGraphSvg('4/(x^3+x)', { xMin: -5, xMax: 5, yMin: -45, yMax: 45, color: '#dc2626' }) },
            { svg: functionGraphSvg('4/(x^2-x)', { xMin: -5, xMax: 5, yMin: -45, yMax: 45, color: '#dc2626' }) },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      prompt: 'Find the vertical asymptote, and x- and y-intercepts of the function. Then choose the graph (window [-10,10] by [-50,50]).\\n\\n$$f(x)=\\dfrac{x^2-6x+8}{x+2}$$\\n\\nThe x-intercepts are 2 and ___.',
      parts: [
        { id: 'vasym', type: 'expr', label: 'Vertical asymptote, x =', correctAnswer: '-2' },
        { id: 'xint', type: 'expr', label: 'Other x-intercept', correctAnswer: '4' },
        { id: 'yint', type: 'expr', label: 'y-intercept', correctAnswer: '4' },
        {
          id: 'graph', type: 'mc', label: 'Correct graph',
          choices: [
            { svg: functionGraphSvg('(x^2-6*x+8)/(x+2)', { xMin: -10, xMax: 10, yMin: -50, yMax: 50, color: '#111827' }) },
            { svg: functionGraphSvg('-(x^2-6*x+8)/(x+2)', { xMin: -10, xMax: 10, yMin: -50, yMax: 50, color: '#111827' }) },
            { svg: functionGraphSvg('(x^2+6*x+8)/(x-2)', { xMin: -10, xMax: 10, yMin: -50, yMax: 50, color: '#111827' }) },
            { svg: functionGraphSvg('(x^2-6*x+8)/(x-2)', { xMin: -10, xMax: 10, yMin: -50, yMax: 50, color: '#111827' }) },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      prompt: 'Find the end behavior asymptote of the rational function and graph it together with f in two windows: (a) showing the details around the vertical asymptote, (b) showing a graph of f that resembles its end behavior asymptote.\\n\\n$$f(x)=\\dfrac{x^2-2x+4}{x-5}$$',
      parts: [
        { id: 'ebasym', type: 'expr', label: 'End behavior asymptote, y =', correctAnswer: 'x+3' },
        {
          id: 'grapha', type: 'mc', label: '(a) Graph of f (solid) with its end-behavior asymptote (dashed) near the vertical asymptote (window [-20,20] by [-50,50])',
          choices: [
            { svg: functionWithAsymptoteSvg('(x^2-2*x+4)/(x-5)', 'x+3', { xMin: -20, xMax: 20, yMin: -50, yMax: 50 }) },
            { svg: functionWithAsymptoteSvg('(x^2-2*x+4)/(x-5)', 'x-3', { xMin: -20, xMax: 20, yMin: -50, yMax: 50 }) },
            { svg: functionWithAsymptoteSvg('-(x^2-2*x+4)/(x-5)', 'x+3', { xMin: -20, xMax: 20, yMin: -50, yMax: 50 }) },
            { svg: functionWithAsymptoteSvg('(x^2-2*x+4)/(x-5)', 'x', { xMin: -20, xMax: 20, yMin: -50, yMax: 50 }) },
          ],
          correctIndex: 0,
        },
        {
          id: 'graphb', type: 'mc', label: '(b) Graph of f (solid) with its end-behavior asymptote (dashed), zoomed out so f resembles the asymptote (window [-500,500] by [-500,500])',
          choices: [
            { svg: functionWithAsymptoteSvg('(x^2-2*x+4)/(x-5)', 'x+3', { xMin: -500, xMax: 500, yMin: -500, yMax: 500 }) },
            { svg: functionWithAsymptoteSvg('(x^2-2*x+4)/(x-5)', 'x-3', { xMin: -500, xMax: 500, yMin: -500, yMax: 500 }) },
            { svg: functionWithAsymptoteSvg('-(x^2-2*x+4)/(x-5)', 'x+3', { xMin: -500, xMax: 500, yMin: -500, yMax: 500 }) },
            { svg: functionWithAsymptoteSvg('(x^2-2*x+4)/(x-5)', 'x', { xMin: -500, xMax: 500, yMin: -500, yMax: 500 }) },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      prompt: 'You may use a graphing calculator. Let $$f(x)=\\dfrac{-9}{x^2+8x}$$. What values of x have to be excluded from the domain of f?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: ['Only 0', 'Only 8', 'Only 0 and -8', 'Only -8', 'Only 0 and 8'],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'You may use a graphing calculator. Let $$f(x)=\\dfrac{x^2}{x+16}$$. Which of the following statements is true about the graph of f?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          'There is a vertical and horizontal asymptote.',
          'There is a horizontal asymptote but no vertical asymptote.',
          'There is no vertical asymptote.',
          'There is a slant asymptote but no vertical asymptote.',
          'There is a vertical asymptote and a slant asymptote.',
        ],
        correctIndex: 4,
      }],
    },
    {
      prompt: 'Find the end behavior asymptote of the given rational function and graph it together with f in two windows: (a) showing the details around the vertical asymptote, (b) showing a graph of f that resembles its end behavior asymptote.\\n\\n$$f(x)=\\dfrac{x^3-2x^2+5}{x+2}$$',
      parts: [
        { id: 'ebasym', type: 'expr', label: 'End behavior asymptote, y =', correctAnswer: 'x^2-4*x+8' },
        {
          id: 'grapha', type: 'mc', label: '(a) Graph of f (solid) with its end-behavior asymptote (dashed) near the vertical asymptote (window [-10,10] by [-80,80])',
          choices: [
            { svg: functionWithAsymptoteSvg('(x^3-2*x^2+5)/(x+2)', 'x^2-4*x+8', { xMin: -10, xMax: 10, yMin: -80, yMax: 80 }) },
            { svg: functionWithAsymptoteSvg('(x^3-2*x^2+5)/(x+2)', 'x^2-4*x-8', { xMin: -10, xMax: 10, yMin: -80, yMax: 80 }) },
            { svg: functionWithAsymptoteSvg('-(x^3-2*x^2+5)/(x+2)', 'x^2-4*x+8', { xMin: -10, xMax: 10, yMin: -80, yMax: 80 }) },
            { svg: functionWithAsymptoteSvg('(x^3-2*x^2+5)/(x+2)', 'x^2', { xMin: -10, xMax: 10, yMin: -80, yMax: 80 }) },
          ],
          correctIndex: 0,
        },
        {
          id: 'graphb', type: 'mc', label: '(b) Graph of f (solid) with its end-behavior asymptote (dashed), zoomed out so f resembles the asymptote (window [-50,50] by [-2500,2500])',
          choices: [
            { svg: functionWithAsymptoteSvg('(x^3-2*x^2+5)/(x+2)', 'x^2-4*x+8', { xMin: -50, xMax: 50, yMin: -2500, yMax: 2500 }) },
            { svg: functionWithAsymptoteSvg('(x^3-2*x^2+5)/(x+2)', 'x^2-4*x-8', { xMin: -50, xMax: 50, yMin: -2500, yMax: 2500 }) },
            { svg: functionWithAsymptoteSvg('-(x^3-2*x^2+5)/(x+2)', 'x^2-4*x+8', { xMin: -50, xMax: 50, yMin: -2500, yMax: 2500 }) },
            { svg: functionWithAsymptoteSvg('(x^3-2*x^2+5)/(x+2)', 'x^2', { xMin: -50, xMax: 50, yMin: -2500, yMax: 2500 }) },
          ],
          correctIndex: 0,
        },
      ],
    },
    {
      prompt: 'Solve the equation algebraically.\\n\\n$$y+4=\\dfrac{32}{y}$$',
      parts: [{ id: 'y', type: 'list', correctList: ['4', '-8'] }],
    },
    {
      prompt: 'Solve the equation algebraically.\\n\\n$$x+\\dfrac{9x}{x-7}=\\dfrac{63}{x-7}$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '-9' }],
    },
    {
      prompt: 'Solve the equation algebraically.\\n\\n$$\\dfrac{7x}{x+5}+\\dfrac{1}{x-3}=\\dfrac{8}{x^2+2x-15}$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '-1/7' }],
    },
    {
      prompt: 'Solve.\\n\\n$$\\dfrac{5}{x}+\\dfrac{x}{x+2}=\\dfrac{4}{x^2+2x}$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '-3' }],
    },
    {
      prompt: 'Solve.\\n\\n$$\\dfrac{3z}{z+3}+\\dfrac{9}{z}+3=\\dfrac{27}{z^2+3z}$$\\n\\nIf there is no solution, type "no solution".',
      parts: [{ id: 'z', type: 'text', label: 'z =', correctAnswer: 'no solution' }],
    },
    {
      prompt: 'Solve. If no solution exists, state this.\\n\\n$$\\dfrac{4}{x-4}+\\dfrac{3}{x+2}=\\dfrac{6x}{x^2-2x-8}$$\\n\\nIf there is no solution, type "no solution".',
      parts: [{ id: 'x', type: 'text', label: 'x =', correctAnswer: 'no solution' }],
    },
  ],
};
