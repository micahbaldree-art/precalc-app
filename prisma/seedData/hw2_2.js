module.exports = {
  title: 'HW 2.2 - Complex Numbers',
  questions: [
    {
      prompt: 'Add or subtract and simplify.\\n\\n$$(5+9i)+(4-i)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '9+8*i' }],
    },
    {
      prompt: 'Write the difference in standard form a + bi without using a calculator.\\n\\n$$(i^3+7)-(9+i^2)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '-1-i' }],
    },
    {
      prompt: 'Multiply.\\n\\n$$(7+2i)(6-9i)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '60-51*i' }],
    },
    {
      prompt: 'Write the product in standard form without using a calculator.\\n\\n$$(-4-4i)(2+3i)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '4-20*i' }],
    },
    {
      prompt: 'Express in terms of i.\\n\\n$$\\sqrt{-49}$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '7*i' }],
    },
    {
      prompt: 'Express in terms of i.\\n\\n$$\\sqrt{-10}$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: 'sqrt(10)*i' }],
    },
    {
      prompt: 'Find the product of the complex number and its conjugate.\\n\\n$$3-3i$$',
      parts: [{ id: 'ans', type: 'expr', label: 'Product', correctAnswer: '18' }],
    },
    {
      prompt: 'Find the product of the complex number and its conjugate.\\n\\n$$-4+8i$$',
      parts: [{ id: 'ans', type: 'expr', label: 'Product', correctAnswer: '80' }],
    },
    {
      prompt: 'Write the quotient in the form a + bi, where a and b are real numbers.\\n\\n$$\\dfrac{1}{1+5i}$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '1/26-5*i/26' }],
    },
    {
      prompt: 'Divide.\\n\\n$$\\dfrac{5+i}{5-i}$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '12/13+5*i/13' }],
    },
    {
      prompt: 'Solve for x.\\n\\n$$x^2-2x+17=0$$',
      parts: [{ id: 'x', type: 'list', correctList: ['1+4*i', '1-4*i'] }],
    },
    {
      prompt: 'Assume $$6-3i$$ is a solution of $$ax^2+bx+c=0$$, where a, b, c are real numbers. Which of the following is also a solution?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [
          { text: '$$3+6i$$' },
          { text: '$$-6+3i$$' },
          { text: '$$6+3i$$' },
          { text: '$$\\dfrac{1}{6-3i}$$' },
          { text: '$$-6-3i$$' },
        ],
        correctIndex: 2,
      }],
    },
  ],
};
