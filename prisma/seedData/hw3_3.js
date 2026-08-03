module.exports = {
  title: 'HW 3.3 - Properties of Logs and Expos',
  questions: [
    {
      prompt: 'Assuming x is a positive real number, use properties of logarithms to write the expression as a sum or difference of logarithms or multiples of logarithms. Expand the expression as far as possible.\\n\\n$$\\\\ln(25x)$$',
      parts: [{ id: 'expand', type: 'expr', label: 'ln(25x) =', correctAnswer: '2*log(5)+log(x)' }],
    },
    {
      prompt: 'Express as a difference of logarithms. Assume z is a positive real number.\\n\\n$$\\\\log\\\\dfrac{6}{z}$$',
      parts: [{ id: 'expand', type: 'expr', label: 'log(6/z) =', correctAnswer: 'log10(6)-log10(z)' }],
    },
    {
      prompt: 'Assuming c is a positive real number, use properties of logarithms to write the expression as a sum or difference of logarithms or multiples of logarithms. Expand the expression as far as possible.\\n\\n$$\\\\log_4\\\\left(c^3\\\\right)$$',
      parts: [{ id: 'expand', type: 'expr', label: 'log_4(c^3) =', correctAnswer: '3*log(c,4)' }],
    },
    {
      prompt: 'Rewrite as a sum or difference of multiples of logarithms without exponents. Assume x and y are positive real numbers. Expand the expression as far as possible.\\n\\n$$\\\\ln\\\\left(x^6y^3\\\\right)$$',
      parts: [{ id: 'expand', type: 'expr', label: 'ln(x^6 y^3) =', correctAnswer: '6*log(x)+3*log(y)' }],
    },
    {
      prompt: 'Assuming x and y are positive, use properties of logarithms to write the expression as a sum or difference of logarithms or multiples of logarithms. Expand the expression as far as possible.\\n\\n$$\\\\ln\\\\dfrac{x^3}{y^5}$$',
      parts: [{ id: 'expand', type: 'expr', label: 'ln(x^3/y^5) =', correctAnswer: '3*log(x)-5*log(y)' }],
    },
    {
      prompt: 'Use properties of logarithms to expand the logarithmic expression as much as possible. Assume a and b are positive real numbers.\\n\\n$$\\\\log_9\\\\dfrac{a}{b}$$',
      parts: [{ id: 'expand', type: 'expr', label: 'log_9(a/b) =', correctAnswer: 'log(a,9)-log(b,9)' }],
    },
    {
      prompt: 'Assume y is positive and use properties of logarithms to write the expression as a single logarithm.\\n\\n$$\\\\ln y-\\\\ln9$$',
      parts: [{ id: 'combine', type: 'expr', label: 'ln y - ln 9 =', correctAnswer: 'log(y/9)' }],
    },
    {
      prompt: 'Assuming x is a positive real number, use properties of logarithms to write the expression as a single logarithm.\\n\\n$$\\\\dfrac{1}{4}\\\\log x$$',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: [{ text: '$$\\\\dfrac{1}{4}\\\\log x=\\\\log\\\\left(\\\\dfrac{x}{4}\\\\right)$$' }, { text: '$$\\\\dfrac{1}{4}\\\\log x=\\\\log x^4$$' }, { text: '$$\\\\dfrac{1}{4}\\\\log x=\\\\log x^{1/4}$$' }],
          correctIndex: 2,
        },
      ],
    },
    {
      prompt: 'Assuming x and z are positive real numbers, use the properties of logarithms to write the expression as a single logarithm.\\n\\n$$4\\\\ln x+3\\\\ln z$$',
      parts: [{ id: 'combine', type: 'expr', label: '4 ln x + 3 ln z =', correctAnswer: 'log(x^4*z^3)' }],
    },
    {
      prompt: 'Assuming x, y, and z are positive real numbers, use properties of logarithms to write the expression as a single logarithm.\\n\\n$$10\\\\log(xy)-9\\\\log(yz)$$',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: [
            { text: '$$10\\\\log(xy)-9\\\\log(yz)=\\\\log\\\\left(\\\\dfrac{x^9}{z^{10}}\\\\right)$$' },
            { text: '$$10\\\\log(xy)-9\\\\log(yz)=\\\\log\\\\left(\\\\dfrac{x^{10}y}{z^{10}}\\\\right)$$' },
            { text: '$$10\\\\log(xy)-9\\\\log(yz)=\\\\log\\\\left(\\\\dfrac{x^{10}y}{z^9}\\\\right)$$' },
          ],
          correctIndex: 2,
        },
      ],
    },
    {
      prompt: 'Solve the following problem without using a calculator.\\n\\nWhat is the value of $$\\\\log18?$$',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: ['3 log 6', 'log 3 + log 6', 'log 3 • log 6', '2 log 9', '6 log 3'],
          correctIndex: 1,
        },
      ],
    },
    {
      prompt: 'Assuming x, y, and z are positive real numbers, use properties of logarithms to write the expression as a single logarithm.\\n\\n$$6\\\\log(xy)-5\\\\log(yz)$$',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: [
            { text: '$$6\\\\log(xy)-5\\\\log(yz)=\\\\log\\\\left(\\\\dfrac{x^6y}{z^5}\\\\right)$$' },
            { text: '$$6\\\\log(xy)-5\\\\log(yz)=\\\\log\\\\left(\\\\dfrac{x^5}{z^6}\\\\right)$$' },
            { text: '$$6\\\\log(xy)-5\\\\log(yz)=\\\\log\\\\left(\\\\dfrac{x^6y}{z^6}\\\\right)$$' },
          ],
          correctIndex: 0,
        },
      ],
    },
  ],
};
