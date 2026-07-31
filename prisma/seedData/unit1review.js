const { functionGraphSvg } = require('../../lib/svgGraphs');

const questions = [];

// 1
questions.push({
  prompt: 'Write the polynomial below in standard form and state its degree.\\n\\n$$3x - 7x^2 + 2$$',
  parts: [
    { id: 'standard', type: 'expr', correctAnswer: '-7*x^2+3*x+2' },
    { id: 'degree', type: 'expr', correctAnswer: '2' },
  ],
});
// 2
questions.push({
  prompt: 'State whether the following expression is a polynomial.\\n\\n$$4x^{-5}+5$$',
  parts: [{ id: 'mc', type: 'mc', choices: ['The expression is a polynomial.', 'The expression is not a polynomial.'], correctIndex: 1 }],
});
// 3
questions.push({
  prompt: 'State whether the expression is a polynomial.\\n\\n$$(3x^2+5x+8)^2$$',
  parts: [{
    id: 'mc', type: 'mc',
    choices: [
      'The expression is not a polynomial because the expanded form cannot be written in standard polynomial form.',
      'The expression is a polynomial because the expanded form can be written in standard polynomial form.',
      'The expression is a polynomial because it is a perfect square expression.',
      'The expression is not a polynomial because it is not a perfect square expression.',
    ],
    correctIndex: 1,
  }],
});
// 4
questions.push({ prompt: 'Add the polynomials.\\n\\n$$(6x^2+5x-7)+(3x^2+6x-8)$$', parts: [{ id: 'ans', type: 'expr', correctAnswer: '9*x^2+11*x-15' }] });
// 5
questions.push({ prompt: 'Subtract.\\n\\n$$(-2x+7)-(x^2+x-2)$$', parts: [{ id: 'ans', type: 'expr', correctAnswer: '-x^2-3*x+9' }] });
// 6
questions.push({ prompt: 'Use the FOIL method to multiply the binomials.\\n\\n$$(x+7)(x-5)$$', parts: [{ id: 'ans', type: 'expr', correctAnswer: 'x^2+2*x-35' }] });
// 7
questions.push({ prompt: 'Factor out the greatest common factor.\\n\\n$$2s-6$$', parts: [{ id: 'ans', type: 'expr', correctAnswer: '2*(s-3)' }] });
// 8
questions.push({ prompt: 'Factor out the common factor.\\n\\n$$yz^3-16yz^2+11yz$$', parts: [{ id: 'ans', type: 'factor', isPrime: false, correctAnswer: 'y*z*(z^2-16*z+11)' }] });
// 9
questions.push({ prompt: 'Factor the trinomial, or state the trinomial is prime.\\n\\n$$x^2+3x+2$$', parts: [{ id: 'ans', type: 'factor', isPrime: false, correctAnswer: '(x+2)*(x+1)' }] });
// 10
questions.push({
  prompt: 'Describe how the graph of $$y=x^2$$ can be transformed to the graph of $$y=(x-4)^2$$.',
  parts: [{ id: 'mc', type: 'mc', choices: ['A translation of the graph to the left by 4 units', 'A translation of the graph to the right by 4 units', 'A translation of the graph up by 4 units', 'A translation of the graph down by 4 units'], correctIndex: 1 }],
});
// 11
questions.push({
  prompt: 'Describe how the graph of $$y=x^2$$ can be transformed to the graph of $$y=(x-2)^2-3$$.',
  parts: [{
    id: 'mc', type: 'mc',
    choices: [
      'A translation of the graph to the right by 3 units and up by 2 units',
      'A translation of the graph to the right by 2 units and down by 3 units',
      'A translation of the graph to the left by 3 units and down by 2 units',
      'A translation of the graph to the left by 2 units and down by 3 units',
    ],
    correctIndex: 1,
  }],
});
// 12
questions.push({
  prompt: 'Describe how the graph of $$y=x^3$$ can be transformed to the graph of $$y=(0.8x)^3$$.',
  parts: [{ id: 'mc', type: 'mc', choices: [{ text: 'A horizontal stretch by a factor of $$\\dfrac{1}{0.8}$$.' }, { text: 'A horizontal shrink by a factor of $$\\dfrac{1}{0.8}$$.' }], correctIndex: 0 }],
});
// 13
questions.push({
  prompt: 'Describe how the graph of $$y=x^3$$ can be transformed to the graph of $$y=8x^3$$.',
  parts: [{ id: 'mc', type: 'mc', choices: ['A vertical stretch by a factor of 8.', 'A vertical shrink by a factor of 8.'], correctIndex: 0 }],
});
// 14
questions.push({
  prompt: 'Find the equation of the given graph — a decreasing square-root-shaped curve passing near (1,-4) and (5,-6), flattening to the right.',
  parts: [{
    id: 'mc', type: 'mc',
    choices: [{ text: '$$y=-\\sqrt{x-1}+4$$' }, { text: '$$y=\\sqrt{x-1}-4$$' }, { text: '$$y=-\\sqrt{x-1}-4$$' }],
    correctIndex: 2,
  }],
});
// 15
questions.push({
  prompt: 'Find the equation of the reflection of $$f(x)=x^3-7x^2-9x+9$$ across (a) the x-axis and (b) the y-axis.',
  parts: [
    { id: 'a', type: 'expr', label: 'Reflection across x-axis', correctAnswer: '-x^3+7*x^2+9*x-9' },
    { id: 'b', type: 'expr', label: 'Reflection across y-axis', correctAnswer: '-x^3-7*x^2+9*x+9' },
  ],
});
// 16
questions.push({
  prompt: 'Refer to the graph of $$y=f(x)$$ where $$f(x)=x^3-3x$$ (a wiggling cubic). Sketch the graph of the new function $$y=-|f(x)|$$.',
  parts: [{
    id: 'mc', type: 'mc',
    choices: [
      { svg: functionGraphSvg('-abs(x^3-3*x)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
      { svg: functionGraphSvg('abs(x^3-3*x)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
      { svg: functionGraphSvg('x^3-3*x', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
      { svg: functionGraphSvg('-(x^3-3*x)', { xMin: -10, xMax: 10, yMin: -10, yMax: 10 }) },
    ],
    correctIndex: 0,
  }],
});
// 17
questions.push({
  prompt: 'Describe a basic graph and a sequence of transformations that can be used to produce a graph of $$y=3(x-3)^2+3$$. Fill in the blanks: "Start with y = ___, translate ___ unit(s) to the right, vertically stretch by a factor of ___, and translate up ___ unit(s)."',
  parts: [
    { id: 'base', type: 'expr', label: 'Start with y =', correctAnswer: 'x^2' },
    { id: 'right', type: 'expr', label: 'Translate right (units)', correctAnswer: '3' },
    { id: 'stretch', type: 'expr', label: 'Vertical stretch factor', correctAnswer: '3' },
    { id: 'up', type: 'expr', label: 'Translate up (units)', correctAnswer: '3' },
  ],
});
// 18
questions.push({
  prompt: 'A graph of $$y=f(x)$$ is given (no formula for f). Which best describes the graph of $$g(x)=f(2x)$$?',
  parts: [{
    id: 'mc', type: 'mc',
    choices: ['A horizontal compression of the graph of f by a factor of 2.', 'A horizontal stretch of the graph of f by a factor of 2.', 'A vertical stretch of the graph of f by a factor of 2.', 'A vertical compression of the graph of f by a factor of 2.'],
    correctIndex: 0,
  }],
});
// 19
questions.push({
  prompt: 'Given a function f, which of the following represents a horizontal stretch by a factor of 2?',
  parts: [{ id: 'mc', type: 'mc', choices: [{ text: '$$\\dfrac{f(x)}{2}$$' }, { text: '$$f\\left(\\dfrac{x}{2}\\right)$$' }, { text: '$$2f(x)$$' }, { text: '$$f(2x)$$' }], correctIndex: 1 }],
});
// 20
questions.push({ prompt: 'Solve.\\n\\n$$64x^2=49$$', parts: [{ id: 'x', type: 'list', correctList: ['7/8', '-7/8'] }] });
// 21
questions.push({ prompt: 'Solve by completing the square.\\n\\n$$x^2+2x=63$$', parts: [{ id: 'x', type: 'list', correctList: ['7', '-9'] }] });
// 22
questions.push({ prompt: 'Solve for x by using the quadratic formula.\\n\\n$$x^2+6x+4=0$$', parts: [{ id: 'x', type: 'list', correctList: ['-3+sqrt(5)', '-3-sqrt(5)'] }] });

// 23
questions.push({ prompt: 'Solve the equation graphically by finding intersections.\\n\\n$$|x-6|=13$$', parts: [{ id: 'x', type: 'list', correctList: ['-7', '19'] }] });
// 24
questions.push({
  prompt: 'Determine whether the statement is true or false: "If $$4x^2=36$$, then x must be equal to 3."',
  parts: [
    { id: 'mc', type: 'mc', choices: ['The statement is false; x can also be equal to another value.', 'The statement is false. All real numbers of x satisfy the equation.', 'This statement is true.'], correctIndex: 0 },
    { id: 'other', type: 'expr', label: 'The other value x can equal', correctAnswer: '-3' },
  ],
});
// 25
questions.push({ prompt: 'Solve the inequality algebraically. Write the solution in interval notation.\\n\\n$$|x+5| \\ge 5$$', parts: [{ id: 'sol', type: 'interval', correctAnswer: '(-Infinity,-10]U[0,Infinity)' }] });
// 26
questions.push({ prompt: 'Solve the inequality. Use algebra to solve the corresponding equation.\\n\\n$$2x^2+21x+49 \\le 0$$', parts: [{ id: 'sol', type: 'interval', correctAnswer: '[-7,-7/2]' }] });
// 27
questions.push({
  prompt: 'Solve the following problem without using a calculator. Which of the following is the solution to $$x^2>4$$?',
  parts: [{
    id: 'mc', type: 'mc',
    choices: [{ text: '$$(-\\infty,-2]\\cup[2,\\infty)$$' }, { text: '$$(-\\infty,-2)\\cup(2,\\infty)$$' }, { text: '$$(-2,2)$$' }, { text: '$$[-2,2]$$' }, { text: 'There is no solution.' }],
    correctIndex: 1,
  }],
});
// 28
questions.push({
  prompt: 'Find the formulas for the functions f+g, f-g, and fg. Give the domain of each.\\n\\n$$f(x)=x^2, g(x)=8x-2$$',
  parts: [
    { id: 'sum', type: 'expr', label: 'f+g', correctAnswer: 'x^2+8*x-2' },
    { id: 'sumdom', type: 'interval', label: 'Domain of f+g', correctAnswer: '(-Infinity,Infinity)' },
    { id: 'diff', type: 'expr', label: 'f-g', correctAnswer: 'x^2-8*x+2' },
    { id: 'diffdom', type: 'interval', label: 'Domain of f-g', correctAnswer: '(-Infinity,Infinity)' },
    { id: 'prod', type: 'expr', label: 'fg', correctAnswer: '8*x^3-2*x^2' },
    { id: 'proddom', type: 'interval', label: 'Domain of fg', correctAnswer: '(-Infinity,Infinity)' },
  ],
});
// 29
questions.push({
  prompt: 'Find formulas for the functions f+g, f-g, and fg. Give the domain of each.\\n\\n$$f(x)=\\sqrt{x}, g(x)=\\sin x$$',
  parts: [
    { id: 'sum', type: 'expr', label: '(f+g)(x)', correctAnswer: 'sqrt(x)+sin(x)' },
    { id: 'diff', type: 'expr', label: '(f-g)(x)', correctAnswer: 'sqrt(x)-sin(x)' },
    { id: 'prod', type: 'expr', label: '(fg)(x)', correctAnswer: 'sqrt(x)*sin(x)' },
    { id: 'dom', type: 'interval', label: 'Domain of f+g, f-g, and fg', correctAnswer: '[0,Infinity)' },
  ],
});
// 30
questions.push({
  prompt: 'Find formulas for f/g and g/f. Give the domain of each.\\n\\n$$f(x)=x^2+8, g(x)=x$$',
  parts: [
    { id: 'fg', type: 'expr', label: 'f/g', correctAnswer: '(x^2+8)/x' },
    { id: 'fgdom', type: 'interval', label: 'Domain of f/g', correctAnswer: '(-Infinity,0)U(0,Infinity)' },
    { id: 'gf', type: 'expr', label: 'g/f', correctAnswer: 'x/(x^2+8)' },
    { id: 'gfdom', type: 'interval', label: 'Domain of g/f', correctAnswer: '(-Infinity,Infinity)' },
  ],
});
// 31
questions.push({
  prompt: 'Find $$(f\\circ g)(5)$$ and $$(g\\circ f)(5)$$.\\n\\n$$f(x)=-4x-1, g(x)=x^2-5$$',
  parts: [
    { id: 'fog', type: 'expr', label: '(f∘g)(5)', correctAnswer: '-81' },
    { id: 'gof', type: 'expr', label: '(g∘f)(5)', correctAnswer: '436' },
  ],
});
// 32
questions.push({
  prompt: 'Find f(g(x)) and g(f(x)). State the domain of each.\\n\\n$$f(x)=7x+4, g(x)=x-3$$',
  parts: [
    { id: 'fg', type: 'expr', label: 'f(g(x))', correctAnswer: '7*x-17' },
    { id: 'fgdom', type: 'interval', label: 'Domain of f(g(x))', correctAnswer: '(-Infinity,Infinity)' },
    { id: 'gf', type: 'expr', label: 'g(f(x))', correctAnswer: '7*x+1' },
    { id: 'gfdom', type: 'interval', label: 'Domain of g(f(x))', correctAnswer: '(-Infinity,Infinity)' },
  ],
});
// 33
questions.push({
  prompt: 'For the given functions, find (f∘g)(x) and (g∘f)(x) and the domain of each.\\n\\n$$f(x)=\\dfrac{7}{1-2x}, g(x)=\\dfrac{1}{x}$$',
  parts: [
    { id: 'fog', type: 'expr', label: '(f∘g)(x)', correctAnswer: '7*x/(x-2)' },
    { id: 'gof', type: 'expr', label: '(g∘f)(x)', correctAnswer: '(1-2*x)/7' },
    { id: 'fogdom', type: 'mc', label: 'Domain of f∘g', choices: [{ text: '$$(-\\infty,2)\\cup(2,\\infty)$$' }, { text: '$$(-\\infty,0)\\cup(0,2)\\cup(2,\\infty)$$' }, { text: '$$(-\\infty,0)\\cup(0,\\infty)$$' }, { text: '$$(-\\infty,-2)\\cup(-2,0)\\cup(0,\\infty)$$' }], correctIndex: 1 },
        { id: 'gofdom', type: 'mc', label: 'Domain of g∘f', choices: [{ text: '$$(-\\infty,0)\\cup(0,\\dfrac{1}{2})\\cup(\\dfrac{1}{2},\\infty)$$' }, { text: '$$(-\\infty,\\dfrac{1}{2})\\cup(\\dfrac{1}{2},\\infty)$$' }, { text: '$$(-\\infty,0)\\cup(0,\\infty)$$' }, { text: '$$(-\\infty,2)\\cup(2,\\infty)$$' }], correctIndex: 1 },
  ],
});
// 34
questions.push({ prompt: 'Find f(x) and g(x) such that h(x)=(f∘g)(x).\\n\\n$$h(x)=(7-7x)^2, g(x)=7-7x$$', parts: [{ id: 'f', type: 'expr', label: 'f(x)', correctAnswer: 'x^2' }] });
// 35
questions.push({
  prompt: 'The graph shown is a slight variation on one of the twelve basic functions (window [-5,5] by [-20,20]). Match the graph to the correct function.',
  svg: functionGraphSvg('x^3+10', { xMin: -5, xMax: 5, yMin: -20, yMax: 20 }),
  parts: [{
    id: 'mc', type: 'mc',
    choices: [
      { text: '$$y=-\\sqrt{x}$$' }, { text: '$$y=-\\sin x$$' }, { text: '$$y=-x$$' }, { text: '$$y=\\cos x+10$$' },
      { text: '$$y=|x|-2$$' }, { text: '$$y=e^x-2$$' }, { text: '$$y=(x-10)^2$$' }, { text: '$$y=int(x+10)$$' },
      { text: '$$y=-\\dfrac{2}{x}$$' }, { text: '$$y=(x+2)^3$$' }, { text: '$$y=2-\\dfrac{4}{1+e^{-x}}$$' }, { text: '$$y=x^3+10$$' },
    ],
    correctIndex: 11,
  }],
});
// 36
questions.push({
  prompt: 'Identify the function(s) whose domain excludes zero. Select all that apply.',
  parts: [{
    id: 'multi', type: 'multi',
    choices: [
      { text: '$$y=|x|-2$$' }, { text: '$$y=(x-2)^3$$' }, { text: '$$y=\\sqrt{x}$$' }, { text: '$$y=-\\sin x$$' },
      { text: '$$y=e^x-2$$' }, { text: '$$y=-\\cos x+1$$' }, { text: '$$y=(x-1)^2$$' }, { text: '$$y=x^3+1$$' },
      { text: '$$y=2-\\dfrac{4}{1+e^{-x}}$$' }, { text: '$$y=-x$$' }, { text: '$$y=\\dfrac{1}{x}$$' }, { text: '$$y=int(x+1)$$' },
    ],
    correctIndices: [10],
  }],
});
// 37
questions.push({
  prompt: 'Identify the function(s) whose domain consists of all nonnegative real numbers. Select all that apply.',
  parts: [{
    id: 'multi', type: 'multi',
    choices: [
      { text: '$$-\\dfrac{1}{x}$$' }, { text: '$$y=x^3+1$$' }, { text: '$$y=int(x+1)$$' }, { text: '$$y=2-\\dfrac{4}{1+e^{-x}}$$' },
      { text: '$$y=e^x-2$$' }, { text: '$$y=|x|-2$$' }, { text: '$$y=(x-1)^2$$' }, { text: '$$y=x-2$$' },
      { text: '$$y=-\\sqrt{x}$$' }, { text: '$$y=(x-2)^3$$' }, { text: '$$y=\\cos x+1$$' }, { text: '$$y=-\\sin x$$' },
    ],
    correctIndices: [8],
  }],
});
// 38
questions.push({
  prompt: 'Identify the two functions that have at least one point of discontinuity. Select all that apply.',
  parts: [{
    id: 'multi', type: 'multi',
    choices: [
      { text: '$$y=2-\\dfrac{4}{1+e^{-x}}$$' }, { text: '$$y=(x+2)^3$$' }, { text: '$$y=-\\sin x$$' }, { text: '$$y=-x$$' },
      { text: '$$y=|x|-2$$' }, { text: '$$y=e^x-2$$' }, { text: '$$y=int(x+1)$$' }, { text: '$$y=x^3+1$$' },
      { text: '$$y=-\\dfrac{1}{x}$$' }, { text: '$$y=\\cos x+1$$' }, { text: '$$y=(x-1)^2$$' }, { text: '$$y=-\\sqrt{x}$$' },
    ],
    correctIndices: [6, 8],
  }],
});
// 39
questions.push({
  prompt: 'Identify the functions that are not continuous. Select all that apply.',
  parts: [{
    id: 'multi', type: 'multi',
    choices: [
      { text: '$$y=\\cos x+1$$' }, { text: '$$y=(x-1)^2$$' }, { text: '$$y=-\\dfrac{1}{x}$$' }, { text: '$$y=x^3+1$$' },
      { text: '$$y=int(x+1)$$' }, { text: '$$y=e^x-2$$' }, { text: '$$y=2-\\dfrac{4}{1+e^{-x}}$$' }, { text: '$$y=-x$$' },
      { text: '$$y=-\\sqrt{x}$$' }, { text: '$$y=|x|-2$$' }, { text: '$$y=-\\sin x$$' }, { text: '$$y=(x+2)^3$$' },
    ],
    correctIndices: [2, 4],
  }],
});
// 40
questions.push({
  prompt: 'Identify which of the twelve basic functions are decreasing on the interval $$(-\\infty,0)$$. Select all that apply.',
  parts: [{
    id: 'multi', type: 'multi',
    choices: [
      { text: '$$y=\\sin x$$' }, { text: '$$y=x^2$$' }, { text: '$$y=e^x$$' }, { text: '$$y=|x|$$' },
      { text: '$$y=int(x)$$' }, { text: '$$y=\\dfrac{1}{x}$$' }, { text: '$$y=\\ln x$$' }, { text: '$$y=x$$' },
      { text: '$$y=\\dfrac{1}{1+e^{-x}}$$' }, { text: '$$y=\\sqrt{x}$$' }, { text: '$$y=\\cos x$$' }, { text: '$$y=x^3$$' },
    ],
    correctIndices: [1, 3, 5],
  }],
});
// 41
questions.push({
  prompt: 'Identify the four functions whose graphs look the same when turned upside-down and flipped about the y-axis (the odd functions). Select all that apply.',
  parts: [{
    id: 'multi', type: 'multi',
    choices: [
      { text: '$$y=\\dfrac{1}{1+e^{-x}}$$' }, { text: '$$y=\\sin x$$' }, { text: '$$y=x^3$$' }, { text: '$$y=x$$' },
      { text: '$$y=\\sqrt{x}$$' }, { text: '$$y=\\ln x$$' }, { text: '$$y=|x|$$' }, { text: '$$y=x^2$$' },
      { text: '$$y=e^x$$' }, { text: '$$y=\\cos x$$' }, { text: '$$y=int(x)$$' }, { text: '$$y=\\dfrac{1}{x}$$' },
    ],
    correctIndices: [1, 2, 3, 11],
  }],
});
// 42
questions.push({
  prompt: 'Use a graphing calculator to graph $$f(x)=\\ln(x-3)$$. Determine the domain and range by looking at the graph.',
  svg: functionGraphSvg('log(x-3)', { xMin: -2, xMax: 10, yMin: -6, yMax: 6 }),
  parts: [
    { id: 'domain', type: 'interval', label: 'Domain', correctAnswer: '(3,Infinity)' },
    { id: 'range', type: 'interval', label: 'Range', correctAnswer: '(-Infinity,Infinity)' },
  ],
});
// 43
questions.push({
  prompt: 'Use a graphing calculator to graph $$s(x)=\\mathrm{int}\\left(\\dfrac{3x}{4}\\right)$$. Determine the domain, and choose the range.',
  parts: [
    { id: 'domain', type: 'interval', label: 'Domain', correctAnswer: '(-Infinity,Infinity)' },
    { id: 'range', type: 'mc', label: 'Range', choices: [{ text: '$$\\{...,-2,-1,0,1,2,...\\}$$' }, { text: '$$\\{...,-8,-4,0,4,8,...\\}$$' }, { text: '$$(-\\infty,0]\\cup[0,\\infty)$$' }, { text: '$$(-\\infty,\\infty)$$' }], correctIndex: 0 },
  ],
});
// 44
questions.push({
  prompt: 'Graph $$f(x)=\\sqrt{x-10}$$. (a) Increasing/decreasing interval? (b) Odd, even, or neither? (c) Extrema? (d) Relation to a basic function?',
  svg: functionGraphSvg('sqrt(x-10)', { xMin: -20, xMax: 20, yMin: -10, yMax: 10 }),
  parts: [
    { id: 'inc', type: 'interval', label: 'Increasing on', correctAnswer: '[10,Infinity)' },
    { id: 'oddeven', type: 'mc', label: 'Odd, even, or neither', choices: ['odd', 'neither even nor odd', 'even'], correctIndex: 1 },
    { id: 'extremaType', type: 'mc', label: 'Extrema type', choices: ['minimum', 'maximum'], correctIndex: 0 },
    { id: 'extremaVal', type: 'expr', label: 'Extrema value', correctAnswer: '0' },
    { id: 'extremaX', type: 'expr', label: 'at x =', correctAnswer: '10' },
    { id: 'baseFn', type: 'mc', label: 'Related basic function', choices: ['square root', 'absolute value', 'greatest integer'], correctIndex: 0 },
    { id: 'shiftDir', type: 'mc', label: 'Shift direction', choices: ['horizontal', 'vertical'], correctIndex: 0 },
    { id: 'shiftWay', type: 'mc', label: 'Shift way', choices: ['down', 'up', 'right', 'left'], correctIndex: 2 },
    { id: 'shiftAmt', type: 'expr', label: 'Shift amount', correctAnswer: '10' },
  ],
});
// 45
questions.push({
  prompt: 'Graph $$s(x)=|x-9|$$. (a) Increasing/decreasing interval? (b) Odd, even, or neither? (c) Extrema? (d) Relation to a basic function?',
  svg: functionGraphSvg('abs(x-9)', { xMin: -20, xMax: 20, yMin: -20, yMax: 20 }),
  parts: [
    { id: 'inc', type: 'interval', label: 'Increasing on', correctAnswer: '[9,Infinity)' },
    { id: 'dec', type: 'interval', label: 'Decreasing on', correctAnswer: '(-Infinity,9]' },
    { id: 'oddeven', type: 'mc', label: 'Odd, even, or neither', choices: ['even', 'neither even nor odd', 'odd'], correctIndex: 1 },
    { id: 'extremaType', type: 'mc', label: 'Extrema type', choices: ['minimum', 'maximum'], correctIndex: 0 },
    { id: 'extremaVal', type: 'expr', label: 'Extrema value', correctAnswer: '0' },
    { id: 'extremaX', type: 'expr', label: 'at x =', correctAnswer: '9' },
    { id: 'baseFn', type: 'mc', label: 'Related basic function', choices: ['absolute value', 'square root', 'squaring'], correctIndex: 0 },
    { id: 'shiftDir', type: 'mc', label: 'Shift direction', choices: ['horizontal', 'vertical'], correctIndex: 0 },
    { id: 'shiftWay', type: 'mc', label: 'Shift way', choices: ['left', 'up', 'right', 'down'], correctIndex: 2 },
    { id: 'shiftAmt', type: 'expr', label: 'Shift amount', correctAnswer: '9' },
  ],
});

module.exports = { title: 'Unit 1 Review', questions };
