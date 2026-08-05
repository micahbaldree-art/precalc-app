module.exports = {
  title: 'Benchmark Review - Unit 3',
  questions: [
    {
      prompt: 'Is the following function exponential? If so, state the initial value and the base. If not, explain why.\\n\\n$$y=z^4$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: ['Yes, the initial value is ___ and the base is ___.', 'No, it is a monomial function.', 'No, it is a fourth root function.', 'No, it is a constant function.'],
        correctIndex: 1,
      }],
    },
    {
      prompt: 'Is the following function exponential? If so, state the initial value and the base. If not, explain why.\\n\\n$$y=7^z$$',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: ['Yes, the initial value is ___ and the base is ___.', 'No, it is a monomial function.', 'No, it is a power function.', 'No, it is a constant function.'],
          correctIndex: 0,
        },
        { id: 'initial', type: 'expr', label: 'Initial value', correctAnswer: '1' },
        { id: 'base', type: 'expr', label: 'Base', correctAnswer: '7' },
      ],
    },
    {
      prompt: 'Determine a formula for the exponential function whose values are given in the table.\\n\\n$$\\begin{array}{c|c} \\mathbf{x} & \\mathbf{f(x)} \\\\[8pt] -2 & 20 \\\\[8pt] -1 & 5 \\\\[8pt] 0 & \\dfrac{5}{4} \\\\[8pt] 1 & \\dfrac{5}{16} \\\\[8pt] 2 & \\dfrac{5}{64} \\end{array}$$',
      parts: [{ id: 'formula', type: 'expr', label: 'f(x) =', correctAnswer: '(5/4)*(1/4)^x' }],
    },
    {
      prompt: 'State whether the function is an exponential growth function or exponential decay function. Describe its end behavior using limits.\\n\\n$$f(x)=0.2^x$$',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: [
            'The function is an exponential growth function because the base is 0 < b < 1.',
            'The function is an exponential decay function because the base is 0 < b < 1.',
            'The function is an exponential decay function because the constant in the exponent is 1.',
            'The function is an exponential growth function because the exponent is a positive x.',
          ],
          correctIndex: 1,
        },
        { id: 'limninf', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: 'Infinity' },
        { id: 'liminf', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '0' },
      ],
    },
    {
      prompt: 'The number B of bacteria in a petri dish culture after t hours is given by $$B=300e^{0.693t}$$.\\n\\n(a) What is the initial number of bacteria present?\\n(b) How many bacteria are present after 4 hours?',
      parts: [
        { id: 'a', type: 'expr', label: '(a) Initial number of bacteria', correctAnswer: '300' },
        { id: 'b', type: 'expr', label: '(b) Bacteria present after 4 hours', correctAnswer: '4797' },
      ],
    },
    {
      prompt: 'Which of the following functions is exponential?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [{ text: '$$f(x)=a^2$$' }, { text: '$$f(x)=x^3$$' }, { text: '$$f(x)=8^x$$' }, { text: '$$f(x)=\\sqrt[3]{x}$$' }, { text: '$$f(x)=x^{2/3}$$' }],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'Tell whether the function is an exponential growth function or an exponential decay function, and find the constant percentage rate of growth or decay for the function.\\n\\n$$f(x)=3.8\\cdot0.99^x$$',
      parts: [
        { id: 'type', type: 'mc', choices: ['Exponential decay', 'Exponential growth'], correctIndex: 0 },
        { id: 'rate', type: 'expr', label: 'Rate (%)', correctAnswer: '1' },
      ],
    },
    {
      prompt: 'Tell whether the function is an exponential growth function or an exponential decay function, and find the constant percentage rate of growth or decay for the function.\\n\\n$$f(x)=3.8\\cdot1.11^x$$',
      parts: [
        { id: 'type', type: 'mc', choices: ['Exponential decay', 'Exponential growth'], correctIndex: 1 },
        { id: 'rate', type: 'expr', label: 'Rate (%)', correctAnswer: '11' },
      ],
    },
    {
      prompt: 'Determine the exponential function that satisfies the given conditions.\\n\\nInitial value = 8, increasing at the rate of 16% per year.',
      parts: [{ id: 'formula', type: 'expr', label: 'P(t) =', correctAnswer: '8*1.16^t' }],
    },
    {
      prompt: 'Determine the exponential function that satisfies the given conditions.\\n\\nInitial value = 18, decreasing at the rate of 60% per year.',
      parts: [{ id: 'formula', type: 'expr', label: 'P(t) =', correctAnswer: '18*0.4^t' }],
    },
    {
      prompt: 'The 2000 population of a city was 726,000 and was increasing at the rate of 1.47% each year. At that rate, when will the population be 1 million?',
      parts: [{ id: 'year', type: 'expr', label: 'Year', correctAnswer: '2022' }],
    },
    {
      prompt: 'What is the constant percentage growth rate of $$P(t)=1.39\\cdot1.081^t?$$',
      parts: [{ id: 'mc', type: 'mc', choices: ['8.1%', '3.9%', '39%', '81%', '1.39%'], correctIndex: 0 }],
    },
    {
      prompt: 'Evaluate the logarithmic expression without using a calculator.\\n\\n$$\\log_8512$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '3' }],
    },
    {
      prompt: 'Assuming c is a positive real number, use properties of logarithms to write the expression as a sum or difference of logarithms or multiples of logarithms. Expand the expression as far as possible.\\n\\n$$\\log_3\\left(c^5\\right)$$',
      parts: [{ id: 'expand', type: 'expr', label: '$$\\log_3\\left(c^5\\right)=$$', correctAnswer: '5*log(c,3)' }],
    },
    {
      prompt: 'Rewrite as a sum or difference of multiples of logarithms without exponents. Assume x and y are positive real numbers. Expand the expression as far as possible.\\n\\n$$\\log\\left(x^2y^4\\right)$$',
      parts: [{ id: 'expand', type: 'expr', label: '$$\\log\\left(x^2y^4\\right)=$$', correctAnswer: '2*log10(x)+4*log10(y)' }],
    },
    {
      prompt: 'Assuming x and y are positive, use properties of logarithms to write the expression as a sum or difference of logarithms or multiples of logarithms. Expand the expression as far as possible.\\n\\n$$\\ln\\dfrac{x^3}{y^5}$$',
      parts: [{ id: 'expand', type: 'expr', label: '$$\\ln\\dfrac{x^3}{y^5}=$$', correctAnswer: '3*log(x)-5*log(y)' }],
    },
    {
      prompt: 'Assuming x, y, and z are positive real numbers, use properties of logarithms to write the expression as a single logarithm.\\n\\n$$8\\log(xy)-7\\log(yz)$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$8\\log(xy)-7\\log(yz)=\\log\\left(\\dfrac{x^8y}{z^8}\\right)$$' },
          { text: '$$8\\log(xy)-7\\log(yz)=\\log\\left(\\dfrac{x^8y}{z^7}\\right)$$' },
          { text: '$$8\\log(xy)-7\\log(yz)=\\log\\left(\\dfrac{x^7}{z^8}\\right)$$' },
        ],
        correctIndex: 1,
      }],
    },
    {
      prompt: 'Solve the following problem without using a calculator.\\n\\nWhat is the value of $$\\log20?$$',
      parts: [{ id: 'mc', type: 'mc', choices: ['log 5 + log 4', '4 log 5', '2 log 10', '5 log 4', 'log 5 • log 4'], correctIndex: 0 }],
    },
    {
      prompt: 'Find the exact solution algebraically, and check it by substituting into the original equation.\\n\\n$$45\\left(\\dfrac{1}{3}\\right)^{x/5}=5$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '10' }],
    },
    {
      prompt: 'Find the exact solution algebraically, and check it by substituting into the original equation.\\n\\n$$4\\cdot4^{x/2}=64$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '4' }],
    },
    {
      prompt: 'Find the exact solution algebraically, and check it by substituting into the original equation.\\n\\n$$\\log_4(x-2)=-1$$\\n\\nChange the equation from logarithmic to exponential form, then solve for x.',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '2.25' }],
    },
    {
      prompt: 'Solve the equation algebraically. Obtain a numerical approximation for your solution and check it by substituting into the original equation. Round to three decimal places.\\n\\n$$1.11^x=6.2$$',
      parts: [{ id: 'x', type: 'expr', label: 'x ≈', correctAnswer: '17.483' }],
    },
    {
      prompt: 'Solve the equation algebraically. Obtain a numerical approximation for your solution and check it by substituting into the original equation. Round to three decimal places.\\n\\n$$6\\ln(x-6)+7=8$$',
      parts: [{ id: 'x', type: 'expr', label: 'x ≈', correctAnswer: '7.181' }],
    },
    {
      prompt: 'Solve the equation.\\n\\n$$\\ln(x-15)+\\ln(x+48)=3\\ln4$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '16' }],
    },
    {
      prompt: 'Find the amount A accumulated after investing a principal P for t years at an interest rate r compounded k times per year.\\n\\nP = $1,500, r = 6%, t = 5, k = 12',
      parts: [{ id: 'amount', type: 'expr', label: 'Amount after 5 years, $', correctAnswer: '2023.28' }],
    },
    {
      prompt: 'Find the amount A accumulated after investing a principal P for t years at an interest rate r compounded continuously.\\n\\nP = $6350, r = 7.1%, t = 7',
      parts: [{ id: 'amount', type: 'expr', label: 'Amount after 7 years, $', correctAnswer: '10438.02' }],
    },
    {
      prompt: 'Complete the table about continuous compounding.\\n\\n$$\\begin{array}{c|c|c} \\mathbf{Initial\\ Investment} & \\mathbf{APR} & \\mathbf{Time\\ to\\ double} \\\\[8pt] \\$11{,}500 & 7\\% & ? \\end{array}$$\\n\\nAfter finding the doubling time, also find the approximate value of the investment after 14 years.',
      parts: [
        { id: 'years', type: 'expr', label: 'Years to double', correctAnswer: '9.902' },
        { id: 'amount', type: 'expr', label: 'Value after 14 years, $', correctAnswer: '30641.25' },
      ],
    },
    {
      prompt: 'How many years are required for an investment to double in value if it is appreciating at the rate of 4% compounded continuously?',
      parts: [{ id: 'years', type: 'expr', label: 'years', correctAnswer: '17.329' }],
    },
  ],
};
