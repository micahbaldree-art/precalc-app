const { functionGraphSvg } = require('../../lib/svgGraphs');

const TWELVE = {
  A: 'int(x+6)',
  B: '1-4/(1+exp(-x))',
  C: '-sin(x)',
  D: '-x',
  E: 'exp(x)-1',
  F: '(x-6)^2',
  G: '-1/x',
  H: '-sqrt(x)',
  I: 'abs(x)-1',
  J: 'cos(x)+6',
  K: 'x^3+6',
  L: '(x+1)^3',
};

module.exports = {
  title: 'HW 1.6 - Function Families',
  questions: [
    {
      prompt: 'The graph shown is a slight variation on one of the twelve basic functions. Match the graph to the correct function (window [-5,5] by [-20,20]).',
      svg: functionGraphSvg('x^3+6', { xMin: -5, xMax: 5, yMin: -20, yMax: 20 }),
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$y=int(x+6)$$' }, { text: '$$y=1-\\dfrac{4}{1+e^{-x}}$$' }, { text: '$$y=-\\sin x$$' }, { text: '$$y=-x$$' },
          { text: '$$y=e^x-1$$' }, { text: '$$y=(x-6)^2$$' }, { text: '$$y=-\\dfrac{1}{x}$$' }, { text: '$$y=-\\sqrt{x}$$' },
          { text: '$$y=|x|-1$$' }, { text: '$$y=\\cos x+6$$' }, { text: '$$y=x^3+6$$' }, { text: '$$y=(x+1)^3$$' },
        ],
        correctIndex: 10,
      }],
    },
    {
      prompt: 'Identify the function(s) whose domain excludes zero. Select all that apply.',
      parts: [{
        id: 'multi', type: 'multi',
        choices: [
          { text: '$$y=|x|-2$$' }, { text: '$$y=-x$$' }, { text: '$$y=e^x-2$$' }, { text: '$$y=\\sqrt{x}$$' },
          { text: '$$y=x^3+1$$' }, { text: '$$y=(x-2)^3$$' }, { text: '$$y=int(x+1)$$' }, { text: '$$y=-\\sin x$$' },
          { text: '$$y=-\\cos x+1$$' }, { text: '$$y=(x-1)^2$$' }, { text: '$$y=2-\\dfrac{4}{1+e^{-x}}$$' }, { text: '$$y=\\dfrac{1}{x}$$' },
        ],
        correctIndices: [11],
      }],
    },
    {
      prompt: 'Identify the function(s) whose domain consists of all nonnegative real numbers. Select all that apply.',
      parts: [{
        id: 'multi', type: 'multi',
        choices: [
          { text: '$$y=(x-2)^3$$' }, { text: '$$y=-\\sqrt{x}$$' }, { text: '$$y=x^3+1$$' }, { text: '$$y=(x-1)^2$$' },
          { text: '$$y=e^x-2$$' }, { text: '$$y=\\cos x+1$$' }, { text: '$$y=2-\\dfrac{4}{1+e^{-x}}$$' }, { text: '$$y=-\\sin x$$' },
          { text: '$$y=int(x+1)$$' }, { text: '$$y=-\\dfrac{1}{x}$$' }, { text: '$$y=-x$$' }, { text: '$$y=|x|-2$$' },
        ],
        correctIndices: [1],
      }],
    },
    {
      prompt: 'Identify the four functions that are odd. Select all that apply.',
      parts: [{
        id: 'multi', type: 'multi',
        choices: [
          { text: '$$y=\\sin x$$' }, { text: '$$y=\\ln x$$' }, { text: '$$y=\\dfrac{1}{x}$$' }, { text: '$$y=|x|$$' },
          { text: '$$y=e^x$$' }, { text: '$$y=\\cos x$$' }, { text: '$$y=x$$' }, { text: '$$y=x^3$$' },
          { text: '$$y=x^2$$' }, { text: '$$y=\\sqrt{x}$$' }, { text: '$$y=int(x)$$' }, { text: '$$y=\\dfrac{1}{1+e^{-x}}$$' },
        ],
        correctIndices: [0, 2, 6, 7],
      }],
    },
    {
      prompt: 'Identify the three functions that are decreasing on the interval $$(-\\infty,0)$$. Select all that apply.',
      parts: [{
        id: 'multi', type: 'multi',
        choices: [
          { text: '$$y=x^2$$' }, { text: '$$y=\\dfrac{1}{x}$$' }, { text: '$$y=\\cos x$$' }, { text: '$$y=int(x)$$' },
          { text: '$$y=x$$' }, { text: '$$y=\\ln x$$' }, { text: '$$y=\\sin x$$' }, { text: '$$y=e^x$$' },
          { text: '$$y=|x|$$' }, { text: '$$y=\\sqrt{x}$$' }, { text: '$$y=\\dfrac{1}{1+e^{-x}}$$' }, { text: '$$y=x^3$$' },
        ],
        correctIndices: [0, 1, 8],
      }],
    },
    {
      prompt: 'Identify the three functions with range {all real numbers}. Select all that apply.',
      parts: [{
        id: 'multi', type: 'multi',
        choices: [
          { text: '$$y=x^2$$' }, { text: '$$y=\\cos x$$' }, { text: '$$y=\\sqrt{x}$$' }, { text: '$$y=\\dfrac{1}{1+e^{-x}}$$' },
          { text: '$$y=\\sin x$$' }, { text: '$$y=\\dfrac{1}{x}$$' }, { text: '$$y=|x|$$' }, { text: '$$y=e^x$$' },
          { text: '$$y=\\ln x$$' }, { text: '$$y=int(x)$$' }, { text: '$$y=x$$' }, { text: '$$y=x^3$$' },
        ],
        correctIndices: [8, 10, 11],
      }],
    },
    {
      prompt: 'Use a graphing calculator to graph $$h(x)=4x^2+1$$ (window [-10,10] by [-10,10]), and determine its domain and range.',
      svg: functionGraphSvg('4*x^2+1', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }),
      parts: [
        { id: 'domain', type: 'interval', correctAnswer: '(-Infinity,Infinity)' },
        { id: 'range', type: 'interval', correctAnswer: '[1,Infinity)' },
      ],
    },
    {
      prompt: 'Use a graphing calculator to graph $$s(x)=\\mathrm{int}\\left(\\dfrac{4x}{7}\\right)$$, and determine its domain. Then choose its range.',
      parts: [
        { id: 'domain', type: 'interval', label: 'Domain', correctAnswer: '(-Infinity,Infinity)' },
        { id: 'range', type: 'mc', label: 'Range', choices: [{ text: '$$(-\\infty,\\infty)$$' }, { text: '$$(-\\infty,0]\\cup[0,\\infty)$$' }, { text: '$$\\{...,-14,-7,0,7,14,...\\}$$' }, { text: '$$\\{...,-2,-1,0,1,2,...\\}$$' }], correctIndex: 3 },
      ],
    },
    {
      prompt: 'Graph $$f(x)=\\sqrt{x+4}$$. (a) On what interval is it increasing/decreasing? (b) Is it odd, even, or neither? (c) Give its extrema. (d) How does it relate to a basic function?',
      svg: functionGraphSvg('sqrt(x+4)', { xMin: -20, xMax: 20, yMin: -10, yMax: 10 }),
      parts: [
        { id: 'inc', type: 'interval', label: 'Increasing on', correctAnswer: '[-4,Infinity)' },
        { id: 'oddeven', type: 'mc', label: 'Odd, even, or neither', choices: ['neither even nor odd', 'even', 'odd'], correctIndex: 0 },
        { id: 'extremaType', type: 'mc', label: 'Extrema type', choices: ['minimum', 'maximum'], correctIndex: 0 },
        { id: 'extremaVal', type: 'expr', label: 'Extrema value', correctAnswer: '0' },
        { id: 'extremaX', type: 'expr', label: 'at x =', correctAnswer: '-4' },
        { id: 'baseFn', type: 'mc', label: 'Related basic function', choices: ['square root', 'absolute value', 'cubing', 'squaring'], correctIndex: 0 },
        { id: 'shiftDir', type: 'mc', label: 'Shift direction', choices: ['horizontal', 'vertical'], correctIndex: 0 },
        { id: 'shiftWay', type: 'mc', label: 'Shift way', choices: ['left', 'right', 'up', 'down'], correctIndex: 0 },
        { id: 'shiftAmt', type: 'expr', label: 'Shift amount', correctAnswer: '4' },
      ],
    },
    {
      prompt: 'Sketch the piecewise-defined function and give any points of discontinuity.\\n\\n$$f(x)=\\begin{cases}|x| & x\\le 0\\\\ \\sin x & x>0\\end{cases}$$',
      parts: [{ id: 'disc', type: 'mc', label: 'Points of discontinuity', choices: ['There are no points of discontinuity.', 'The function is discontinuous somewhere.'], correctIndex: 0 }],
    },
    {
      prompt: 'Graph the piecewise-defined function and give any points of discontinuity.\\n\\n$$f(x)=\\begin{cases}6-x & x\\le -2\\\\ 36 & -2<x<6\\\\ x^2 & 6\\le x\\end{cases}$$',
      parts: [{ id: 'disc', type: 'expr', label: 'Point of discontinuity, x =', correctAnswer: '-2' }],
    },
  ],
};
