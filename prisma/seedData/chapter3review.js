module.exports = {
  title: 'Chapter 3 Review',
  questions: [
    {
      prompt: 'Is the following function exponential? If so, state the initial value and the base. If not, explain why.\\n\\n$$y=x^3$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: ['Yes, the initial value is ___ and the base is ___.', 'No, it is a cube root function.', 'No, it is a constant function.', 'No, it is a monomial function.'],
        correctIndex: 3,
      }],
    },
    {
      prompt: 'Is the following function exponential? If so, state the initial value and the base. If not, explain why.\\n\\n$$y=3^w$$',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: ['Yes, the initial value is ___ and the base is ___.', 'No, it is a monomial function.', 'No, it is a constant function.', 'No, it is a power function.'],
          correctIndex: 0,
        },
        { id: 'initial', type: 'expr', label: 'Initial value', correctAnswer: '1' },
        { id: 'base', type: 'expr', label: 'Base', correctAnswer: '3' },
      ],
    },
    {
      prompt: 'Determine a formula for the exponential function whose values are given in the table.\\n\\n$$\\begin{array}{c|c} \\mathbf{x} & \\mathbf{f(x)} \\\\[8pt] -2 & 12 \\\\[8pt] -1 & 4 \\\\[8pt] 0 & \\dfrac{4}{3} \\\\[8pt] 1 & \\dfrac{4}{9} \\\\[8pt] 2 & \\dfrac{4}{27} \\end{array}$$',
      parts: [{ id: 'formula', type: 'expr', label: 'f(x) =', correctAnswer: '(4/3)*(1/3)^x' }],
    },
    {
      prompt: 'State whether the function is an exponential growth function or an exponential decay function, and describe its end behavior using limits.\\n\\n$$f(x)=\\left(\\dfrac{1}{2}\\right)^{3x}$$',
      parts: [
        { id: 'type', type: 'mc', choices: ['Exponential decay', 'Exponential growth'], correctIndex: 0 },
        { id: 'liminf', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '0' },
        { id: 'limninf', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: 'Infinity' },
      ],
    },
    {
      prompt: 'State whether the function is an exponential growth function or exponential decay function. Describe its end behavior using limits.\\n\\n$$f(x)=0.9^x$$',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: [
            'The function is an exponential decay function because the base is 0 < b < 1.',
            'The function is an exponential growth function because the base is 0 < b < 1.',
            'The function is an exponential decay function because the constant in the exponent is 1.',
            'The function is an exponential growth function because the exponent is a positive x.',
          ],
          correctIndex: 0,
        },
        { id: 'limninf', type: 'expr', label: 'lim f(x) as x→-∞', correctAnswer: 'Infinity' },
        { id: 'liminf', type: 'expr', label: 'lim f(x) as x→∞', correctAnswer: '0' },
      ],
    },
    {
      prompt: 'The number B of bacteria in a petri dish culture after t hours is given by $$B=400e^{0.695t}$$.\\n\\n(a) What is the initial number of bacteria present?\\n(b) How many bacteria are present after 5 hours?',
      parts: [
        { id: 'a', type: 'expr', label: '(a) Initial number of bacteria', correctAnswer: '400' },
        { id: 'b', type: 'expr', label: '(b) Bacteria present after 5 hours', correctAnswer: '12919' },
      ],
    },
    {
      prompt: 'Which of the following functions is exponential?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [{ text: '$$f(x)=\\sqrt[3]{x}$$' }, { text: '$$f(x)=a^2$$' }, { text: '$$f(x)=8^x$$' }, { text: '$$f(x)=x^3$$' }, { text: '$$f(x)=x^{2/3}$$' }],
        correctIndex: 2,
      }],
    },
    {
      prompt: 'Tell whether the function is an exponential growth function or an exponential decay function, and find the constant percentage rate of growth or decay for the function.\\n\\n$$f(x)=3.6\\cdot1.05^x$$',
      parts: [
        { id: 'type', type: 'mc', choices: ['Exponential growth', 'Exponential decay'], correctIndex: 0 },
        { id: 'rate', type: 'expr', label: 'Rate (%)', correctAnswer: '5' },
      ],
    },
    {
      prompt: 'Tell whether the function is an exponential growth function or an exponential decay function, and find the constant percentage rate of growth or decay for the function.\\n\\n$$f(x)=4.8\\cdot0.83^x$$',
      parts: [
        { id: 'type', type: 'mc', choices: ['Exponential decay', 'Exponential growth'], correctIndex: 0 },
        { id: 'rate', type: 'expr', label: 'Rate (%)', correctAnswer: '17' },
      ],
    },
    {
      prompt: 'Determine the exponential function that satisfies the given conditions.\\n\\nInitial value = 5, increasing at the rate of 16% per year.',
      parts: [{ id: 'formula', type: 'expr', label: 'P(t) =', correctAnswer: '5*1.16^t' }],
    },
    {
      prompt: 'Determine the exponential function that satisfies the given conditions.\\n\\nInitial value = 17, decreasing at the rate of 60% per year.',
      parts: [{ id: 'formula', type: 'expr', label: 'P(t) =', correctAnswer: '17*0.4^t' }],
    },
    {
      prompt: 'The 2000 population of a city was 664,000 and was increasing at the rate of 1.46% each year. At that rate, when will the population be 1 million?',
      parts: [{ id: 'year', type: 'expr', label: 'Year', correctAnswer: '2028' }],
    },
    {
      prompt: 'What is the constant percentage growth rate of $$P(t)=1.61\\cdot1.049^t?$$',
      parts: [{ id: 'mc', type: 'mc', choices: ['61%', '49%', '6.1%', '1.61%', '4.9%'], correctIndex: 4 }],
    },
    {
      prompt: 'Evaluate the logarithmic expression without using a calculator.\\n\\n$$\\log_327$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '3' }],
    },
    {
      prompt: 'Evaluate the expression without using a calculator.\\n\\n$$10^{\\log(6)}$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '6' }],
    },
    {
      prompt: 'Evaluate.\\n\\n$$e^{\\ln7}$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '7' }],
    },
    {
      prompt: 'Solve the equation by changing it to exponential form.\\n\\n$$\\log x=7$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '10000000' }],
    },
    {
      prompt: 'Solve the equation by changing it to exponential form.\\n\\n$$\\log x=-6$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '0.000001' }],
    },
    {
      prompt: 'Assuming z is a positive real number, use properties of logarithms to write the expression as a sum or difference of logarithms or multiples of logarithms. Expand the expression as far as possible.\\n\\n$$\\ln(49z)$$',
      parts: [{ id: 'expand', type: 'expr', label: '$$\\ln(49z)=$$', correctAnswer: '2*log(7)+log(z)' }],
    },
    {
      prompt: 'Express as a difference of logarithms. Assume y is a positive real number.\\n\\n$$\\log\\dfrac{37}{y}$$',
      parts: [{ id: 'expand', type: 'expr', label: '$$\\log\\dfrac{37}{y}=$$', correctAnswer: 'log10(37)-log10(y)' }],
    },
    {
      prompt: 'Assuming y is a positive real number, use properties of logarithms to write the expression as a sum or difference of logarithms or multiples of logarithms. Expand the expression as far as possible.\\n\\n$$\\log_2\\left(y^7\\right)$$',
      parts: [{ id: 'expand', type: 'expr', label: '$$\\log_2\\left(y^7\\right)=$$', correctAnswer: '7*log(y,2)' }],
    },
    {
      prompt: 'Rewrite as a sum or difference of multiples of logarithms without exponents. Assume x and y are positive real numbers. Expand the expression as far as possible.\\n\\n$$\\ln\\left(x^5y^6\\right)$$',
      parts: [{ id: 'expand', type: 'expr', label: '$$\\ln\\left(x^5y^6\\right)=$$', correctAnswer: '5*log(x)+6*log(y)' }],
    },
    {
      prompt: 'Assuming x and y are positive, use properties of logarithms to write the expression as a sum or difference of logarithms or multiples of logarithms. Expand the expression as far as possible.\\n\\n$$\\ln\\dfrac{x^3}{y^7}$$',
      parts: [{ id: 'expand', type: 'expr', label: '$$\\ln\\dfrac{x^3}{y^7}=$$', correctAnswer: '3*log(x)-7*log(y)' }],
    },
    {
      prompt: 'Assuming x, y, and z are positive real numbers, use properties of logarithms to write the expression as a single logarithm.\\n\\n$$4\\log(xy)-3\\log(yz)$$',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$4\\log(xy)-3\\log(yz)=\\log\\left(\\dfrac{x^4y}{z^3}\\right)$$' },
          { text: '$$4\\log(xy)-3\\log(yz)=\\log\\left(\\dfrac{x^4y}{z^4}\\right)$$' },
          { text: '$$4\\log(xy)-3\\log(yz)=\\log\\left(\\dfrac{x^3}{z^4}\\right)$$' },
        ],
        correctIndex: 0,
      }],
    },
    {
      prompt: 'Solve the following problem without using a calculator.\\n\\nWhat is the value of $$\\log18?$$',
      parts: [{ id: 'mc', type: 'mc', choices: ['2 log 9', '3 log 6', 'log 3 + log 6', '6 log 3', 'log 3 • log 6'], correctIndex: 2 }],
    },
    {
      prompt: 'Find the exact solution algebraically, and check it by substituting into the original equation.\\n\\n$$18\\left(\\dfrac{1}{3}\\right)^{x/5}=2$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '10' }],
    },
    {
      prompt: 'Find the exact solution algebraically, and check it by substituting into the original equation.\\n\\n$$4\\cdot4^{x/5}=1024$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '20' }],
    },
    {
      prompt: 'Find the exact solution algebraically, and check it by substituting into the original equation.\\n\\n$$4\\left(10^{-x/3}\\right)=40$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '-3' }],
    },
    {
      prompt: 'Find the exact solution algebraically, and check it by substituting into the original equation.\\n\\n$$\\log_4(x-3)=-1$$\\n\\nChange the equation from logarithmic to exponential form, then solve for x.',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '3.25' }],
    },
    {
      prompt: 'Solve the equation algebraically. Obtain a numerical approximation for your solution and check it by substituting into the original equation. Round to three decimal places.\\n\\n$$1.49^x=5.5$$',
      parts: [{ id: 'x', type: 'expr', label: 'x ≈', correctAnswer: '4.275' }],
    },
    {
      prompt: 'Solve the equation algebraically. Obtain a numerical approximation for your solution and check it by substituting into the original equation. Round to three decimal places.\\n\\n$$7\\ln(x-7)+2=3$$',
      parts: [{ id: 'x', type: 'expr', label: 'x ≈', correctAnswer: '8.154' }],
    },
    {
      prompt: 'Solve the equation.\\n\\n$$\\ln(x-35)+\\ln(x+180)=3\\ln6$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '36' }],
    },
    {
      prompt: 'Solve the equation.\\n\\n$$\\ln(x-24)+\\ln(x+100)=3\\ln5$$',
      parts: [{ id: 'x', type: 'expr', label: 'x =', correctAnswer: '25' }],
    },
    {
      prompt: 'Solve $$2^{2x+2}=256$$ without using a calculator.',
      parts: [{ id: 'mc', type: 'mc', choices: ['x = 6', 'x = 9', 'x = 2', 'x = 10', 'x = 3'], correctIndex: 4 }],
    },
    {
      prompt: 'Find the amount A accumulated after investing a principal P for n years at an interest rate r compounded annually, and for simple interest at the same rate r.\\n\\nP = $2500, r = 4%, t = 5',
      parts: [
        { id: 'compound', type: 'expr', label: 'Compounded annually, $', correctAnswer: '3041.63' },
        { id: 'simple', type: 'expr', label: 'Simple interest, $', correctAnswer: '3000.00' },
      ],
    },
    {
      prompt: 'Find the amount A accumulated after investing a principal P for t years at an interest rate r compounded k times per year.\\n\\nP = $200, r = 7%, t = 6, k = 4',
      parts: [{ id: 'amount', type: 'expr', label: 'Amount after 6 years, $', correctAnswer: '303.29' }],
    },
    {
      prompt: 'Find the amount A accumulated after investing a principal P for t years at an interest rate r compounded continuously.\\n\\nP = $8650, r = 6.8%, t = 6',
      parts: [{ id: 'amount', type: 'expr', label: 'Amount after 6 years, $', correctAnswer: '13007.93' }],
    },
    {
      prompt: 'If John invests $2500 in a savings account with a 9% interest rate compounded quarterly, how long will it take until the account has a balance of $4140?\\n\\nWhich formula should be used if a principal P is invested at an annual interest rate r compounded k times a year for t years to give the value of investment A?',
      parts: [
        { id: 'formula', type: 'mc', choices: [{ text: '$$A=P\\left(1+\\dfrac{r}{k}\\right)^{kt}$$' }, { text: '$$A=Pe^{rt}$$' }], correctIndex: 0 },
        { id: 'years', type: 'expr', label: 'It will take ___ years', correctAnswer: '5' },
        { id: 'months', type: 'mc', label: 'and ___ months', choices: ['0', '9', '3', '6'], correctIndex: 1 },
      ],
    },
    {
      prompt: 'Complete the table about continuous compounding.\\n\\n$$\\begin{array}{c|c|c} \\mathbf{Initial\\ Investment} & \\mathbf{APR} & \\mathbf{Time\\ to\\ double} \\\\[8pt] \\$12{,}500 & 7\\% & ? \\end{array}$$\\n\\nAfter finding the doubling time, also find the approximate value of the investment after 12 years.',
      parts: [
        { id: 'years', type: 'expr', label: 'It will take ___ years to double', correctAnswer: '9.902' },
        { id: 'amount', type: 'expr', label: 'Value after 12 years, $', correctAnswer: '28954.59' },
      ],
    },
    {
      prompt: 'Complete the table about doubling time of an investment.\\n\\n$$\\begin{array}{c|c|c} \\mathbf{APR} & \\mathbf{Compounding\\ Periods} & \\mathbf{Time\\ to\\ double} \\\\[8pt] 5.2\\% & \\text{Quarterly} & ? \\end{array}$$',
      parts: [
        { id: 'years', type: 'expr', label: 'It will take ___ years', correctAnswer: '13' },
        { id: 'months', type: 'mc', label: 'and ___ months', choices: ['3', '0', '9', '6'], correctIndex: 3 },
      ],
    },
    {
      prompt: 'How many years are required for an investment to double in value if it is appreciating at the rate of 6% compounded continuously?',
      parts: [{ id: 'years', type: 'expr', label: 'years', correctAnswer: '11.552' }],
    },
  ],
};
