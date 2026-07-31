module.exports = {
  title: 'HW 2.5 - Linear Factorization',
  questions: [
    {
      prompt: 'Write a polynomial function of minimum degree in standard form with real coefficients whose zeros include those listed.\\n\\n$$9i \\text{ and } -9i$$',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: 'x^2+81' }],
    },
    {
      prompt: 'Write a polynomial function in standard form with real coefficients whose zeros include $$2, 2i,$$ and $$-2i$$.',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: 'x^3-2*x^2+4*x-8' }],
    },
    {
      prompt: 'Find a polynomial function in standard form of least degree having only real coefficients, a leading coefficient of 1, and zeros of $$3$$ and $$2+i$$.',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: 'x^3-7*x^2+17*x-15' }],
    },
    {
      prompt: 'Write a polynomial function of minimum degree in standard form with real coefficients whose zeros and their multiplicities include those listed.\\n\\n$$4 \\text{ (multiplicity 2)}, \\ 2+i \\text{ (multiplicity 1)}$$',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: 'x^4-12*x^3+53*x^2-104*x+80' }],
    },
    {
      prompt: 'Find all of the zeros and write a linear factorization of the function.\\n\\n$$f(x)=x^4+x^3+2x^2-4x-24$$',
      parts: [
        {
          id: 'zeros', type: 'mc', label: 'Zeros of the function',
          choices: [
            { text: '$$x=4,-2,\\dfrac{1}{2}+\\dfrac{\\sqrt{23}}{2}i,\\dfrac{1}{2}-\\dfrac{\\sqrt{23}}{2}i$$' },
            { text: '$$x=2,-2,-\\dfrac{1}{2}+\\dfrac{\\sqrt{23}}{2}i,-\\dfrac{1}{2}-\\dfrac{\\sqrt{23}}{2}i$$' },
            { text: '$$x=2,-2,\\dfrac{1}{2}+\\dfrac{\\sqrt{23}}{2}i,\\dfrac{1}{2}-\\dfrac{\\sqrt{23}}{2}i$$' },
            { text: '$$x=4,-2,-\\dfrac{1}{2}+\\dfrac{\\sqrt{23}}{2}i,-\\dfrac{1}{2}-\\dfrac{\\sqrt{23}}{2}i$$' },
          ],
          correctIndex: 1,
        },
        {
          id: 'lf', type: 'mc', label: 'Linear factorization',
          choices: [
            { text: '$$f(x)=\\dfrac{1}{2}(x-2)(x+2)\\left(x-1-\\sqrt{23}\\right)\\left(x-1+\\sqrt{23}\\right)$$' },
            { text: '$$f(x)=\\dfrac{1}{4}(x-2)(x+2)\\left(2x+1-\\sqrt{23}i\\right)\\left(2x+1+\\sqrt{23}i\\right)$$' },
            { text: '$$f(x)=\\dfrac{1}{4}(x-2)(x+2)\\left(x-1-\\sqrt{23}i\\right)\\left(x-1+\\sqrt{23}i\\right)$$' },
            { text: '$$f(x)=\\dfrac{1}{2}(x-2)(x+2)\\left(2x+1-\\sqrt{23}\\right)\\left(2x+1+\\sqrt{23}\\right)$$' },
          ],
          correctIndex: 1,
        },
      ],
    },
    {
      prompt: 'Find all of the zeros and write a linear factorization of the function.\\n\\n$$f(x)=x^4+x^3+3x^2-4x-28$$',
      parts: [
        {
          id: 'zeros', type: 'mc', label: 'Zeros of the function',
          choices: [
            { text: '$$x=2,-2,\\dfrac{1}{2}+\\dfrac{\\sqrt{27}}{2}i,\\dfrac{1}{2}-\\dfrac{\\sqrt{27}}{2}i$$' },
            { text: '$$x=4,-2,-\\dfrac{1}{2}+\\dfrac{\\sqrt{27}}{2}i,-\\dfrac{1}{2}-\\dfrac{\\sqrt{27}}{2}i$$' },
            { text: '$$x=4,-2,\\dfrac{1}{2}+\\dfrac{\\sqrt{27}}{2}i,\\dfrac{1}{2}-\\dfrac{\\sqrt{27}}{2}i$$' },
            { text: '$$x=2,-2,-\\dfrac{1}{2}+\\dfrac{\\sqrt{27}}{2}i,-\\dfrac{1}{2}-\\dfrac{\\sqrt{27}}{2}i$$' },
          ],
          correctIndex: 3,
        },
        {
          id: 'lf', type: 'mc', label: 'Linear factorization',
          choices: [
            { text: '$$f(x)=\\dfrac{1}{2}(x-2)(x+2)\\left(x-1-\\sqrt{27}\\right)\\left(x-1+\\sqrt{27}\\right)$$' },
            { text: '$$f(x)=\\dfrac{1}{4}(x-2)(x+2)\\left(2x+1-\\sqrt{27}i\\right)\\left(2x+1+\\sqrt{27}i\\right)$$' },
            { text: '$$f(x)=\\dfrac{1}{2}(x-2)(x+2)\\left(2x+1-\\sqrt{27}\\right)\\left(2x+1+\\sqrt{27}\\right)$$' },
            { text: '$$f(x)=\\dfrac{1}{4}(x-2)(x+2)\\left(x-1-\\sqrt{27}i\\right)\\left(x-1+\\sqrt{27}i\\right)$$' },
          ],
          correctIndex: 1,
        },
      ],
    },

    {
      prompt: 'Find all of the zeros and write a linear factorization of the function.\\n\\n$$f(x)=x^4-x^3-4x^2+9x-45$$',
      parts: [
        {
          id: 'zeros', type: 'mc', label: 'Zeros of the function',
          choices: [
            { text: '$$x=3,-3,-\\dfrac{1}{2}+\\dfrac{\\sqrt{19}}{2}i,-\\dfrac{1}{2}-\\dfrac{\\sqrt{19}}{2}i$$' },
            { text: '$$x=6,-3,\\dfrac{1}{2}+\\dfrac{\\sqrt{19}}{2}i,\\dfrac{1}{2}-\\dfrac{\\sqrt{19}}{2}i$$' },
            { text: '$$x=6,-3,-\\dfrac{1}{2}+\\dfrac{\\sqrt{19}}{2}i,-\\dfrac{1}{2}-\\dfrac{\\sqrt{19}}{2}i$$' },
            { text: '$$x=3,-3,\\dfrac{1}{2}+\\dfrac{\\sqrt{19}}{2}i,\\dfrac{1}{2}-\\dfrac{\\sqrt{19}}{2}i$$' },
          ],
          correctIndex: 3,
        },
        {
          id: 'lf', type: 'mc', label: 'Linear factorization',
          choices: [
            { text: '$$f(x)=\\dfrac{1}{2}(x-3)(x+3)\\left(x+1-\\sqrt{19}\\right)\\left(x+1+\\sqrt{19}\\right)$$' },
            { text: '$$f(x)=\\dfrac{1}{4}(x-3)(x+3)\\left(2x-1-\\sqrt{19}i\\right)\\left(2x-1+\\sqrt{19}i\\right)$$' },
            { text: '$$f(x)=\\dfrac{1}{2}(x-3)(x+3)\\left(2x-1-\\sqrt{19}\\right)\\left(2x-1+\\sqrt{19}\\right)$$' },
            { text: '$$f(x)=\\dfrac{1}{4}(x-3)(x+3)\\left(x-1-\\sqrt{19}i\\right)\\left(x-1+\\sqrt{19}i\\right)$$' },
          ],
          correctIndex: 1,
        },
      ],
    },

    {
      prompt: 'Find all of the zeros and write a linear factorization of the function.\\n\\n$$f(x)=x^3+16x-17$$',
      parts: [
        { id: 'zeros', type: 'list', label: 'Zeros', correctList: ['1', '-1/2+sqrt(67)*i/2', '-1/2-sqrt(67)*i/2'] },
        { id: 'lf', type: 'expr', label: 'Linear factorization', correctAnswer: '(1/4)*(x-1)*(2*x+1+sqrt(67)*i)*(2*x+1-sqrt(67)*i)' },
      ],
    },
    {
      prompt: 'Using the given zero, find all of the zeros and write a linear factorization of f(x).\\n\\n$$3i \\text{ is a zero of } f(x)=x^4+4x^2-45$$',
      parts: [
        { id: 'zeros', type: 'list', label: 'Zeros', correctList: ['3*i', '-3*i', 'sqrt(5)', '-sqrt(5)'] },
        { id: 'lf', type: 'expr', label: 'Linear factorization', correctAnswer: '(x-sqrt(5))*(x+sqrt(5))*(x-3*i)*(x+3*i)' },
      ],
    },
    {
      prompt: 'Write the function as a product of linear and irreducible quadratic factors, all with real coefficients.\\n\\n$$f(x)=x^3-2x^2-2x-3$$',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: '(x-3)*(x^2+x+1)' }],
    },
    {
      prompt: 'Write the function as a product of linear and irreducible quadratic factors, all with real coefficients.\\n\\n$$f(x)=x^4+8x^3-2x^2+56x-63$$',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: '(x-1)*(x+9)*(x^2+7)' }],
    },
    {
      prompt: 'Find the unique polynomial with real coefficients that meets these conditions.\\n\\nDegree 4; zeros at $$x=3, x=-1,$$ and $$x=2-i$$; $$f(0)=-45$$',
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: '3*x^4-18*x^3+30*x^2+6*x-45' }],
    },
  ],
};
