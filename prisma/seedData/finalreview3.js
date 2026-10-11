// Final Review 3 — transcribed from the printed assignment + answer key.
// "Expand" answers must use plain logs of a variable/number (logForm: 'expanded');
// "single logarithm" answers must be exactly one log (logForm: 'single').
const R = String.raw;

const L = (letter, latex) => ({ text: `${letter}. $$${latex}$$` });
const EXPAND = 'expanded';
const SINGLE = 'single';
const RATIONAL_CHOICES = ['A. The solution is ___.', 'B. There is no solution.'];
const rationalChoice = { id: 'choice', type: 'mc', label: 'Select the correct choice below and fill in the answer box, if necessary, within your choice.', choices: RATIONAL_CHOICES, correctIndex: 0 };
const expo = (label, answer) => ({ id: 'v', type: 'expr', label, correctAnswer: answer });

module.exports = {
  title: 'Final Review 3',
  questions: [
    // 1
    {
      prompt: R`Solve the equation and check your answer.

$$\dfrac{q+2}{8}+\dfrac{q-11}{8}=\dfrac{1}{8}$$`,
      parts: [rationalChoice, { id: 'x', type: 'expr', label: 'The solution is (Simplify your answer. Type an integer or a fraction.)', correctAnswer: '5' }],
    },
    // 2
    {
      prompt: R`Solve the equation algebraically.

$$z+7=\dfrac{18}{z}$$`,
      parts: [rationalChoice, { id: 'x', type: 'list', label: 'The solution is z = (Use a comma to separate answers as needed.)', correctList: ['2', '-9'] }],
    },
    // 3
    {
      prompt: R`Solve the equation algebraically.

$$x+\dfrac{9x}{x-5}=\dfrac{45}{x-5}$$`,
      parts: [rationalChoice, { id: 'x', type: 'list', label: 'The solution is x = (Use a comma to separate answers as needed.)', correctList: ['-9'] }],
    },
    // 4
    {
      prompt: R`Solve the equation algebraically.

$$\dfrac{4}{x-1}+x=11$$`,
      parts: [rationalChoice, { id: 'x', type: 'list', label: 'The solution is x = (Use a comma to separate answers as needed. Type exact answers, using radicals as needed.)', correctList: ['6+sqrt(21)', '6-sqrt(21)'] }],
    },
    // 5
    {
      prompt: R`Assuming a is a positive real number, use properties of logarithms to write the expression as a sum or difference of logarithms or multiples of logarithms. Expand the expression as far as possible.

$$\ln(8a)$$`,
      parts: [{ id: 'v', type: 'expr', logForm: EXPAND, label: R`$$\ln(8a)=$$ (Type an exact answer in simplified form.)`, correctAnswer: '3*log(2)+log(a)' }],
    },
    // 6
    {
      prompt: R`Express as a difference of logarithms. Assume x is a positive real number.

$$\log\dfrac{60}{x}$$`,
      parts: [{ id: 'v', type: 'expr', logForm: EXPAND, label: R`$$\log\dfrac{60}{x}=$$ (Type an exact answer in simplified form.)`, correctAnswer: 'log10(60)-log10(x)' }],
    },
    // 7
    {
      prompt: R`Rewrite as a sum or difference of multiples of logarithms without exponents. Assume x and y are positive real numbers. Expand the expression as far as possible.

$$\ln\left(x^8y^2\right)$$`,
      parts: [{ id: 'v', type: 'expr', logForm: EXPAND, label: R`$$\ln\left(x^8y^2\right)=$$ (Type an exact answer in simplified form.)`, correctAnswer: '8*log(x)+2*log(y)' }],
    },
    // 8
    {
      prompt: R`Assuming x and y are positive, use properties of logarithms to write the expression, $$\ln\dfrac{x^5}{y^7}$$, as a sum or difference of logarithms or multiples of logarithms. Expand the expression as far as possible.`,
      parts: [{ id: 'v', type: 'expr', logForm: EXPAND, label: R`$$\ln\dfrac{x^5}{y^7}=$$ (Type an exact answer in simplified form.)`, correctAnswer: '5*log(x)-7*log(y)' }],
    },
    // 9
    {
      prompt: R`Assume y is positive and use properties of logarithms to write the expression as a single logarithm.

$$\ln y-\ln 6$$`,
      parts: [{ id: 'v', type: 'expr', logForm: SINGLE, label: R`$$\ln y-\ln 6=$$ (Use integers or fractions for any numbers in the expression.)`, correctAnswer: 'log(y/6)' }],
    },
    // 10
    {
      prompt: R`Assuming x is a positive real number, use properties of logarithms to write the expression as a single logarithm.

$$\dfrac{1}{11}\log x$$`,
      parts: [{ id: 'mc', type: 'mc', label: 'Select the correct response from the choices below.', choices: [L('A', R`\dfrac{1}{11}\log x=\log\left(\dfrac{x}{11}\right)`), L('B', R`\dfrac{1}{11}\log x=\log x^{11}`), L('C', R`\dfrac{1}{11}\log x=\log x^{1/11}`)], correctIndex: 2 }],
    },
    // 11
    {
      prompt: R`Assuming x and z are positive real numbers, use the properties of logarithms to write the expression as a single logarithm.

$$3\ln x+4\ln z$$`,
      parts: [{ id: 'v', type: 'expr', logForm: SINGLE, label: R`$$3\ln x+4\ln z=$$`, correctAnswer: 'log(x^3*z^4)' }],
    },
    // 12
    { prompt: R`Use the change-of-base formula and a calculator to evaluate the logarithm.

$$\log_4 18$$`, parts: [expo(R`$$\log_4 18\approx$$ (Simplify your answer. Round to three decimal places as needed.)`, '2.085')] },
    // 13
    { prompt: R`Use the change-of-base formula and a calculator to evaluate the logarithm.

$$\log_8 178$$`, parts: [expo(R`$$\log_8 178=$$ (Simplify your answer. Type an integer or decimal rounded to three decimal places as needed.)`, '2.492')] },
    // 14
    { prompt: R`Find the exact solution algebraically, and check it by substituting into the original equation.

$$144\left(\dfrac{1}{6}\right)^{x/3}=4$$`, parts: [{ id: 'x', type: 'expr', label: 'The solution is x = (Simplify your answer.)', correctAnswer: '6' }] },
    // 15
    { prompt: R`Find the exact solution algebraically, and check it by substituting into the original equation.

$$2\cdot5^{x/3}=10$$`, parts: [{ id: 'x', type: 'expr', label: 'x = (Simplify your answer.)', correctAnswer: '3' }] },
    // 16
    { prompt: R`Solve the equation algebraically. Obtain a numerical approximation for your solution and check it by substituting into the original equation.

$$1.11^x=5.7$$`, parts: [{ id: 'x', type: 'expr', label: 'x = (Round to three decimal places as needed.)', correctAnswer: '16.678' }] },
    // 17
    { prompt: R`Solve the equation algebraically. Obtain a numerical approximation for your solution and check it by substituting into the original equation.

$$6\ln(x-6)+4=5$$`, parts: [{ id: 'x', type: 'expr', label: 'The solution is x ≈ (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '7.181' }] },
    // 18
    { prompt: R`Solve the equation.

$$\ln(x-15)+\ln(x+48)=3\ln4$$`, parts: [{ id: 'x', type: 'list', label: 'x = (Type an exact answer, using radicals as needed. Use a comma to separate answers as needed.)', correctList: ['16'] }] },
    // 19
    {
      prompt: R`Solve $$2^{4x+4}=256$$ without using a calculator.`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct answer below.', choices: ['A. x = 3', 'B. x = 15', 'C. x = 9', 'D. x = 1', 'E. x = 6'], correctIndex: 3 }],
    },
    // 20
    {
      prompt: R`Is the following function exponential? If so, state the initial value and the base. If not, explain why.

$$y=x^2$$`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct answer below, and if necessary, fill in the answer box to complete your choice.', choices: ['A. Yes, the initial value is ___ and the base is ___.', 'B. No, it is a monomial function.', 'C. No, it is a square root function.', 'D. No, it is a constant function.'], correctIndex: 1 }],
    },
    // 21
    {
      prompt: R`Is the following function exponential? If so, state the initial value and the base. If not, explain why.

$$y=5^w$$`,
      parts: [
        { id: 'mc', type: 'mc', label: 'Choose the correct answer below, and if necessary, fill in the answer box to complete your choice.', choices: ['A. Yes, the initial value is ___ and the base is ___.', 'B. No, it is a power function.', 'C. No, it is a monomial function.', 'D. No, it is a constant function.'], correctIndex: 0 },
        { id: 'initial', type: 'expr', label: 'Initial value', correctAnswer: '1' },
        { id: 'base', type: 'expr', label: 'Base', correctAnswer: '5' },
      ],
    },
    // 22
    { prompt: R`Compute the exact value of the function for the given x-value without using a calculator.

$$f(x)=7\cdot2^x\text{ for }x=0$$`, parts: [{ id: 'v', type: 'expr', label: 'f(0) = (Simplify your answer.)', correctAnswer: '7' }] },
    // 23
    {
      prompt: R`Determine a formula for the exponential function whose values are given in the table.

$$\begin{array}{c|c} \mathbf{x} & \mathbf{f(x)} \\[8pt] -2 & 42 \\[8pt] -1 & 7 \\[8pt] 0 & \dfrac{7}{6} \\[8pt] 1 & \dfrac{7}{36} \\[8pt] 2 & \dfrac{7}{216} \end{array}$$`,
      parts: [{ id: 'v', type: 'expr', label: 'The formula for the exponential function is f(x) = (Type an expression using x as the variable. Use integers or fractions for any numbers in the expression.)', correctAnswer: '(7/6)*(1/6)^x' }],
    },
    // 24
    {
      prompt: R`State whether the function is an exponential growth function or an exponential decay function, and describe its end behavior using limits.

$$f(x)=2^{-x}$$`,
      parts: [
        { id: 'type', type: 'mc', label: 'Choose the correct description of the function.', choices: ['Exponential growth', 'Exponential decay'], correctIndex: 1 },
        { id: 'limpos', type: 'expr', label: 'What is the limit as x approaches infinity? lim f(x) =', correctAnswer: '0' },
        { id: 'limneg', type: 'expr', label: 'What is the limit as x approaches negative infinity? lim f(x) =', correctAnswer: 'Infinity' },
      ],
    },
    // 25
    {
      prompt: R`State whether the function is an exponential growth function or exponential decay function. Describe its end behavior using limits.

$$f(x)=0.6^x$$`,
      parts: [
        { id: 'mc', type: 'mc', label: 'State whether the function is an exponential growth function or exponential decay function. Choose the correct answer below.', choices: ['A. The function is an exponential growth function because the exponent is a positive x.', 'B. The function is an exponential decay function because the base is 0 < b < 1.', 'C. The function is an exponential growth function because the base is 0 < b < 1.', 'D. The function is an exponential decay function because the constant in the exponent is 1.'], correctIndex: 1 },
        { id: 'limneg', type: 'expr', label: R`$$\lim_{x\to-\infty}f(x)=$$`, correctAnswer: 'Infinity' },
        { id: 'limpos', type: 'expr', label: R`$$\lim_{x\to\infty}f(x)=$$`, correctAnswer: '0' },
      ],
    },
    // 26
    {
      prompt: R`The number B of bacteria in a petri dish culture after t hours is given by $$B=700e^{0.698t}$$.

(a) What is the initial number of bacteria present?
(b) How many bacteria are present after 7 hours?`,
      parts: [
        { id: 'a', type: 'expr', label: '(a) The initial number of bacteria present is (Round to the nearest whole number as needed.)', correctAnswer: '700' },
        { id: 'b', type: 'expr', tol: 0.6, label: '(b) There are ___ bacteria present after 7 hours. (Round to the nearest whole number as needed.)', correctAnswer: '92696' },
      ],
    },
    // 27
    {
      prompt: 'Which of the following functions is exponential?',
      parts: [{ id: 'mc', type: 'mc', choices: [L('A', 'f(x)=8^x'), L('B', 'f(x)=a^2'), L('C', R`f(x)=\sqrt[3]{x}`), L('D', 'f(x)=x^3'), L('E', 'f(x)=x^{2/3}')], correctIndex: 0 }],
    },
    // 28
    {
      prompt: R`What is the growth factor for $$f(x)=4\cdot3^x$$?`,
      parts: [{ id: 'mc', type: 'mc', choices: ['A. 64', 'B. 12', 'C. 81', 'D. 4', 'E. 3'], correctIndex: 4 }],
    },
    // 29
    {
      prompt: R`Tell whether the function is an exponential growth function or an exponential decay function, and find the constant percentage rate of growth or decay for the function.

$$f(x)=4.2\cdot1.02^x$$`,
      parts: [
        { id: 'type', type: 'mc', label: R`What type of function is $$f(x)=4.2\cdot1.02^x$$?`, choices: ['Exponential decay', 'Exponential growth'], correctIndex: 1 },
        { id: 'rate', type: 'expr', label: 'What is the constant percentage rate of growth or decay? ___%', correctAnswer: '2' },
      ],
    },
    // 30
    {
      prompt: R`Tell whether the function is an exponential growth function or exponential decay function, and find the constant percentage rate of growth or decay.

$$f(x)=61{,}491\cdot1.091^x$$`,
      parts: [
        { id: 'mc', type: 'mc', label: R`What type of exponential function is $$f(x)=61{,}491\cdot1.091^x$$? Choose the correct answer below.`, choices: ['A. It is an exponential decay function because the rate r is greater than 0.', 'B. It is an exponential growth function because the rate r is greater than 0.', 'C. It is an exponential decay function because the rate r is less than 1.', 'D. It is an exponential growth function because the rate r is greater than 1.', 'E. It is an exponential decay function because the rate r is less than 0.', 'F. It is an exponential growth function because the rate r is less than 0.'], correctIndex: 1 },
        { id: 'kind', type: 'mc', label: 'The constant percentage rate of (1) ___ is ___%. (1):', choices: ['growth', 'decay'], correctIndex: 0 },
        { id: 'rate', type: 'expr', label: 'Rate (%) (Type an integer or a decimal.)', correctAnswer: '9.1' },
      ],
    },
    // 31
    { prompt: R`Determine the exponential function that satisfies the given conditions.

Initial value = 8, increasing at the rate of 16% per year`, parts: [{ id: 'v', type: 'expr', label: 'P(t) = , where t represents time. (Type an expression using t as the variable. Use integers or decimals for any numbers in the expression.)', correctAnswer: '8*1.16^t' }] },
    // 32
    { prompt: R`Determine the exponential function that satisfies the given conditions.

Initial value = 16, decreasing at the rate of 60% per year`, parts: [{ id: 'v', type: 'expr', label: 'P(t) = , where t represents time. (Type an expression using t as the variable. Use integers or decimals for any numbers in the expression.)', correctAnswer: '16*0.4^t' }] },
    // 33
    { prompt: R`Find the exponential function that satisfies the given conditions.

Initial population = 488000, decreasing at the rate of 2.6% per year.`, parts: [{ id: 'v', type: 'expr', label: 'Population(t) = (Type an expression using t as the variable.)', correctAnswer: '488000*0.974^t' }] },
    // 34
    { prompt: R`Determine the exponential function that satisfies the given conditions.

The initial mass is 1.2 g and it is doubling every 6 days.`, parts: [{ id: 'v', type: 'expr', label: 'M(t) = (Simplify your answer. Type an expression using t as the variable.)', correctAnswer: '1.2*2^(t/6)' }] },
    // 35
    {
      prompt: R`Determine a formula for the exponential function whose values are given in the table.

$$\begin{array}{c|c} \mathbf{x} & \mathbf{f(x)} \\[8pt] -2 & 0.85113 \\[8pt] -1 & 1.65034 \\[8pt] 0 & 3.200 \\[8pt] 1 & 6.205 \\[8pt] 2 & 12.03111 \end{array}$$`,
      parts: [{ id: 'v', type: 'expr', label: 'f(x) = (Type an expression using x as the variable. Use integers or decimals for any numbers in the expression. Round to three decimal places as needed.)', correctAnswer: '3.2*1.939^x' }],
    },
    // 36
    { prompt: 'The 2000 population of a city was 684,000 and was increasing at the rate of 1.54% each year. At that rate, when will the population be 1 million?', parts: [{ id: 'year', type: 'expr', label: 'In ___ the population will be 1,000,000. (Type a whole number.)', correctAnswer: '2025' }] },
    // 37
    {
      prompt: R`What is the constant percentage growth rate of $$P(t)=1.03\cdot1.019^t$$?`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct answer below.', choices: ['A. 1.9%', 'B. 19%', 'C. 3%', 'D. 1.03%', 'E. 0.3%'], correctIndex: 0 }],
    },
  ],
};
