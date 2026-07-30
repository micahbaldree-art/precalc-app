module.exports = {
  title: 'HW 1.1 - Polynomial Operations and Factoring',
  questions: [
    {
      prompt: 'Write the polynomial below in standard form and state its degree.\\n\\n$$2x^2 - 3x + 4$$',
      parts: [
        { id: 'standard', type: 'expr', label: 'Standard form', correctAnswer: '2*x^2-3*x+4' },
        { id: 'degree', type: 'expr', label: 'Degree', correctAnswer: '2' },
      ],
    },
    {
      prompt: 'State whether the following expression is a polynomial.\\n\\n$$4x^{-3} + 6$$',
      parts: [{ id: 'mc', type: 'mc', choices: ['The expression is a polynomial.', 'The expression is not a polynomial.'], correctIndex: 1 }],
    },
    {
      prompt: 'Add the polynomials.\\n\\n$$(6x^2 + 2x - 4) + (5x^2 + 3x - 7)$$',
      parts: [{ id: 'sum', type: 'expr', correctAnswer: '11*x^2+5*x-11' }],
    },
    {
      prompt: 'Subtract.\\n\\n$$(-5x + 5) - (x^2 + x - 4)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '-x^2-6*x+9' }],
    },
    {
      prompt: 'Find the product of the monomial and the polynomial.\\n\\n$$-6y(5y + 2)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '-30*y^2-12*y' }],
    },
    {
      prompt: 'Use the FOIL method to multiply the binomials.\\n\\n$$(x + 4)(x - 2)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: 'x^2+2*x-8' }],
    },
    {
      prompt: 'Multiply.\\n\\n$$(2b + 3p)(2b - 3p)$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '4*b^2-9*p^2' }],
    },
    {
      prompt: 'Square the binomial.\\n\\n$$(8x + 7y)^2$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '64*x^2+112*x*y+49*y^2' }],
    },
    {
      prompt: 'Factor out the greatest common factor.\\n\\n$$4x - 8$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '4*(x-2)' }],
    },
    {
      prompt: 'Factor the difference of two squares.\\n\\n$$x^2 - 49$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '(x+7)*(x-7)' }],
    },
    {
      prompt: 'Factor the following expression completely. If a polynomial is prime, state this as your answer.\\n\\n$$(m + 7)^2 - 9$$',
      parts: [{ id: 'ans', type: 'factor', isPrime: false, correctAnswer: '(m+10)*(m+4)' }],
    },
    {
      prompt: 'Factor the following perfect square trinomial.\\n\\n$$x^2 + 10x + 25$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '(x+5)^2' }],
    },
    {
      prompt: 'Factor the sum or difference of two cubes shown below.\\n\\n$$x^3 - 64$$',
      parts: [{ id: 'ans', type: 'expr', correctAnswer: '(x-4)*(x^2+4*x+16)' }],
    },
  ],
};
