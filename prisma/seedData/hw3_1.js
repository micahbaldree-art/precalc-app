module.exports = {
  title: 'HW 3.1 - Expo and Log Functions',
  questions: [
    {
      prompt: 'Is the following function exponential? If so, state the initial value and the base. If not, explain why.\\n\\n$$y=w^2$$',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: [
            'Yes, the initial value is ___ and the base is ___.',
            'No, it is a constant function.',
            'No, it is a square root function.',
            'No, it is a monomial function.',
          ],
          correctIndex: 3,
        },
      ],
    },
    {
      prompt: 'Is the following function exponential? If so, state the initial value and the base. If not, explain why.\\n\\n$$y=6^w$$',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: [
            'Yes, the initial value is ___ and the base is ___.',
            'No, it is a power function.',
            'No, it is a monomial function.',
            'No, it is a constant function.',
          ],
          correctIndex: 0,
        },
        { id: 'initial', type: 'expr', label: 'Initial value', correctAnswer: '1' },
        { id: 'base', type: 'expr', label: 'Base', correctAnswer: '6' },
      ],
    },
    {
      prompt: 'Determine a formula for the exponential function whose values are given in the table.\\n\\n$$\\begin{array}{c|c} \\mathbf{x} & \\mathbf{f(x)} \\\\[8pt] -2 & 42 \\\\[8pt] -1 & 7 \\\\[8pt] 0 & \\dfrac{7}{6} \\\\[8pt] 1 & \\dfrac{7}{36} \\\\[8pt] 2 & \\dfrac{7}{216} \\end{array}$$',
      parts: [{ id: 'formula', type: 'expr', label: 'f(x) =', correctAnswer: '(7/6)*(1/6)^x' }],
    },
    {
      prompt: 'Describe how to transform the graph of f into the graph of g.\\n\\n$$f(x)=4^x \\qquad g(x)=4^{x+2}$$\\n\\nTo transform the graph of f into the graph of g, (1) ___ the graph across (2) ___, then (3) ___ the graph (4) ___.',
      parts: [
        { id: 'p1', type: 'mc', label: '(1)', choices: ['reflect', 'do not reflect'], correctIndex: 1 },
        { id: 'p2', type: 'mc', label: '(2)', choices: ['the x-axis', 'either axis', 'the y-axis'], correctIndex: 1 },
        { id: 'p3', type: 'mc', label: '(3)', choices: ['shift', 'stretch', 'shrink'], correctIndex: 0 },
        { id: 'shiftamt', type: 'expr', label: 'shift amount', correctAnswer: '2' },
        {
          id: 'p4', type: 'mc', label: '(4)',
          choices: ['unit(s) to the right.', 'factors vertically.', 'unit(s) to the left.', 'factors horizontally.'],
          correctIndex: 2,
        },
      ],
    },
    {
      prompt: 'Describe how to transform the graph of f into the graph of g.\\n\\n$$f(x)=2^x \\qquad g(x)=2^{-x}$$\\n\\nTo transform the graph of f into the graph of g, (1) ___ the graph across (2) ___.',
      parts: [
        { id: 'p1', type: 'mc', label: '(1)', choices: ['reflect', 'do not reflect'], correctIndex: 0 },
        { id: 'p2', type: 'mc', label: '(2)', choices: ['the x-axis', 'the y-axis', 'either axis'], correctIndex: 1 },
      ],
    },
    {
      prompt: 'State whether the function is an exponential growth function or an exponential decay function, and describe its end behavior using limits.\\n\\n$$f(x)=\\left(\\dfrac{1}{2}\\right)^{4x}$$',
      parts: [
        { id: 'type', type: 'mc', choices: ['Exponential growth', 'Exponential decay'], correctIndex: 1 },
        { id: 'liminf', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '0' },
        { id: 'limninf', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: 'Infinity' },
      ],
    },
    {
      prompt: 'State whether the function is an exponential growth function or exponential decay function. Describe its end behavior using limits.\\n\\n$$f(x)=0.1^x$$',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: [
            'The function is an exponential decay function because the base is 0 < b < 1.',
            'The function is an exponential growth function because the exponent is a positive x.',
            'The function is an exponential decay function because the constant in the exponent is 1.',
            'The function is an exponential growth function because the base is 0 < b < 1.',
          ],
          correctIndex: 0,
        },
        { id: 'limninf', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: 'Infinity' },
        { id: 'liminf', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '0' },
      ],
    },
    {
      prompt: 'Using the midyear data in the table and assuming the growth is exponential, when did the population of City A surpass 800,000 persons?\\n\\nCity A: 1990 population 465,808; 2011 population 820,210.',
      parts: [{ id: 'year', type: 'expr', label: 'Year', correctAnswer: '2010' }],
    },
    {
      prompt: 'Determine if the following statement is true or false. Justify your answer.\\n\\nEvery exponential function is strictly increasing.',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: [
            'True. Every exponential function is strictly increasing because the initial value must be greater than 0.',
            'True. Every exponential function is strictly increasing because the base of the exponent must be greater than 1.',
            { text: 'False. If $$a>0$$ and $$0<b<1$$, then $$f(x)=a\\cdot b^x$$ is decreasing.' },
            { text: 'False. If $$a>0$$ and $$b>1$$, then $$f(x)=a\\cdot b^x$$ is decreasing.' },
          ],
          correctIndex: 2,
        },
      ],
    },
    {
      prompt: 'What is the growth factor for $$f(x)=4\\cdot3^x?$$',
      parts: [{ id: 'mc', type: 'mc', choices: ['3', '64', '4', '12', '81'], correctIndex: 0 }],
    },
    {
      prompt: 'Tell whether the function is an exponential growth function or an exponential decay function, and find the constant percentage rate of growth or decay for the function.\\n\\n$$f(x)=3.8\\cdot1.07^x$$',
      parts: [
        { id: 'type', type: 'mc', choices: ['Exponential decay', 'Exponential growth'], correctIndex: 1 },
        { id: 'rate', type: 'expr', label: 'Rate (%)', correctAnswer: '7' },
      ],
    },
    {
      prompt: 'Tell whether the function is an exponential growth function or an exponential decay function, and find the constant percentage rate of growth or decay for the function.\\n\\n$$f(t)=245\\cdot4^t$$',
      parts: [
        { id: 'type', type: 'mc', choices: ['Exponential decay', 'Exponential growth'], correctIndex: 1 },
        { id: 'rate', type: 'expr', label: 'Rate (%)', correctAnswer: '300' },
      ],
    },
    {
      prompt: 'Determine the exponential function that satisfies the given conditions.\\n\\nInitial value = 18, decreasing at the rate of 40% per year.',
      parts: [{ id: 'formula', type: 'expr', label: 'P(t) =', correctAnswer: '18*0.6^t' }],
    },
    {
      prompt: 'The 2000 population of a city was 657,000 and was increasing at the rate of 1.49% each year. At that rate, when will the population be 1 million?',
      parts: [{ id: 'year', type: 'expr', label: 'Year', correctAnswer: '2028' }],
    },
    {
      prompt: 'What is the constant percentage growth rate of $$P(t)=1.49\\cdot1.017^t?$$',
      parts: [{ id: 'mc', type: 'mc', choices: ['1.49%', '49%', '1.7%', '17%', '4.9%'], correctIndex: 2 }],
    },
  ],
};
