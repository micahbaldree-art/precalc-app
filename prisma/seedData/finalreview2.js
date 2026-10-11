// Final Review 2 — transcribed from the printed assignment + answer key.
// Graph choices are drawn from the actual functions (the printed distractors are
// pictures); the correct graph sits at the printed answer's letter.
const R = String.raw;
const { functionGraphSvg } = require('../../lib/svgGraphs');

const EXP = 'expanded';
const FAC = 'factored';
const gw = (xMin, xMax, yMin, yMax) => (fn) => ({ svg: functionGraphSvg(fn, { xMin, xMax, yMin, yMax }) });
const L = (letter, latex) => ({ text: `${letter}. $$${latex}$$` });
const SIX = R`\pm1,\pm5,\pm2,\pm25,\pm10,`;       // shared start of the rational-zero lists
const FR = R`\pm\dfrac{1}{5},\pm\dfrac{1}{2},\pm\dfrac{1}{10},\pm\dfrac{5}{2},\pm\dfrac{25}{2},\pm\dfrac{2}{5}`;
const lim = (dir) => R`\lim_{x\to${dir}}f(x)`;

// graph choices for the multiplicity questions
const g22 = gw(-3, 3, -10, 10);
const g23 = gw(-10, 10, -120, 120);
const g20 = gw(-8, 5, -33, 18);
const g21 = gw(-6, 6, -200, 200);
const f21 = '3*x^4-6*x^3-18*x^2+14*x+40';

module.exports = {
  title: 'Final Review 2',
  questions: [
    // 1
    {
      prompt: R`Use synthetic division to perform each division.

$$\dfrac{3w^3+14w^2+14w-7}{w+3}$$`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct quotient.', choices: [L('A', R`3w^2+5w-1-\dfrac{4}{w+3}`), L('B', R`3w^2+5w+1+\dfrac{4}{w+3}`), L('C', R`3w^2+5w-1-4`), L('D', R`3w^2-5w-1+\dfrac{4}{w+3}`)], correctIndex: 0 }],
    },
    // 2
    {
      prompt: R`Use synthetic division to divide.

$$\dfrac{2x^3-34x-14}{x+4}$$`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct quotient.', choices: [L('A', R`2x^2-8x-2-\dfrac{6}{x+4}`), L('B', R`2x^2-8x+2-\dfrac{6}{x+4}`), L('C', R`2x^2+8x-2-\dfrac{6}{x+4}`), L('D', R`2x^2-8x-2+\dfrac{6}{x+4}`)], correctIndex: 0 }],
    },
    // 3
    {
      prompt: R`Divide using synthetic division, and write a summary statement in fraction form.

$$\dfrac{5x^4-4x+1}{4-x}$$`,
      parts: [{
        id: 'mc', type: 'mc', label: 'Choose the correct answer below.',
        choices: [
          L('A', R`\dfrac{5x^4-4x+1}{4-x}=-5x^3-20x^2-80x-316+\dfrac{1265}{4-x}`),
          L('B', R`\dfrac{5x^4-4x+1}{4-x}=-5x^3-20x^2-80x-324+\dfrac{-1263}{4-x}`),
          L('C', R`\dfrac{5x^4-4x+1}{4-x}=-5x^3-20x^2-80x-324+\dfrac{1265}{4-x}`),
          L('D', R`\dfrac{5x^4-4x+1}{4-x}=-5x^3-20x^2-80x-316+\dfrac{-1263}{4-x}`),
        ],
        correctIndex: 0,
      }],
    },
    // 4
    { prompt: R`Use the Remainder Theorem to find the remainder when f(x) is divided by x − k.

$$f(x)=3x^2-13x+13;\ k=2$$`, parts: [{ id: 'v', type: 'expr', label: 'The remainder is (Type an integer or a simplified fraction.)', correctAnswer: '-1' }] },
    // 5
    { prompt: R`Use the remainder theorem to find the remainder when f(x) is divided by x − k. Check by using synthetic division.

$$f(x)=x^3-3x^2+10;\ k=-1$$`, parts: [{ id: 'v', type: 'expr', label: 'The remainder is', correctAnswer: '6' }] },
    // 6
    { prompt: R`Use the Remainder Theorem to find the remainder when f(x) is divided by x − k.

$$f(x)=-2x^3-8x^2-7x-8;\ k=-3$$`, parts: [{ id: 'v', type: 'expr', label: 'The remainder is', correctAnswer: '-5' }] },
    // 7
    {
      prompt: R`Use the factor theorem to determine whether the first polynomial is a factor of the second polynomial.

$$x+5;\ x^3+6x^2+3x-10$$`,
      parts: [{ id: 'mc', type: 'mc', label: R`Is $$x+5$$ a factor of $$x^3+6x^2+3x-10$$?`, choices: ['Yes', 'No'], correctIndex: 0 }],
    },
    // 8
    {
      prompt: R`Use the graph to guess possible linear factors of f(x). Then completely factor f(x) with the aid of synthetic division.

$$f(x)=x^3-5x^2-4x+20$$

(The graph is shown in the viewing window [−10, 10] by [−50, 50], Xscl = 1, Yscl = 5.)`,
      svg: functionGraphSvg('x^3-5*x^2-4*x+20', { xMin: -10, xMax: 10, yMin: -50, yMax: 50 }),
      parts: [
        { id: 'zeros', type: 'list', label: 'The rational zeros are (Use a comma to separate answers as needed.)', correctList: ['2', '-2', '5'] },
        { id: 'fact', type: 'expr', form: FAC, label: 'The complete factorization is f(x) = (Type your answer in factored form.)', correctAnswer: '(x-2)*(x+2)*(x-5)' },
      ],
    },
    // 9
    { prompt: R`For the following, find the function P defined by a polynomial of degree 3 with real coefficients that satisfy the given conditions.

The zeros are −3, −1, and 4. The leading coefficient is 6.`, parts: [{ id: 'p', type: 'expr', form: EXP, label: 'P(x) = (Type your answer in standard form. Use integers or fractions for any numbers in the expression.)', correctAnswer: '6*x^3-78*x-72' }] },
    // 10
    { prompt: R`Find the polynomial function with leading coefficient 2 that has the degree 3 and zeros 14, $$\dfrac{1}{2}$$, and $$\dfrac{3}{2}$$.`, parts: [{ id: 'p', type: 'expr', form: EXP, label: 'The polynomial function is (Type your answer in standard form. Use integers or fractions for any numbers in the expression.)', correctAnswer: '2*x^3-32*x^2+(115/2)*x-21' }] },
    // 11
    {
      prompt: R`Use the Rational Zeros Theorem to write a list of all potential rational zeros. Then determine which ones, if any, are zeros.

$$f(x)=10x^3-259x^2+227x-50$$`,
      parts: [
        {
          id: 'possible', type: 'mc', label: R`Choose the possible rational zeros for $$f(x)=10x^3-259x^2+227x-50$$.`,
          choices: [
            L('A', R`25,\dfrac{1}{2},\dfrac{2}{5}`),
            L('B', `${SIX}${FR}`),
            L('C', `${SIX}\\pm50,${FR}`),
            L('D', R`1,5,2,25,10,50,\dfrac{1}{5},\dfrac{1}{2},\dfrac{1}{10},\dfrac{5}{2},\dfrac{25}{2},\dfrac{2}{5}`),
          ],
          correctIndex: 2,
        },
        {
          id: 'zeros', type: 'mc', label: R`Choose the rational zeros for $$f(x)=10x^3-259x^2+227x-50$$.`,
          choices: [
            L('A', `${SIX}\\pm50,${FR}`),
            L('B', R`25,\dfrac{1}{2},\dfrac{2}{5}`),
            L('C', R`-25,\dfrac{1}{2},\dfrac{2}{5}`),
            L('D', '25'),
          ],
          correctIndex: 1,
        },
      ],
    },
    // 12
    {
      prompt: R`Find all of the real zeros of the function, finding exact values whenever possible. Identify each zero as rational or irrational.

$$f(x)=5x^3-2x^2-35x+14$$`,
      parts: [
        { id: 'choice', type: 'mc', label: 'Select the correct choice below and, if necessary, fill in the answer boxes to complete your choice. (Simplify your answer. Type an exact answer, using radicals as needed. Use a comma to separate answers as needed.)', choices: ['A. The rational zero(s) is/are ___. The irrational zero(s) is/are ___.', 'B. There are no rational zeros. The irrational zero(s) is/are ___.', 'C. There are no irrational zeros. The rational zero(s) is/are ___.', 'D. There are no real zeros.'], correctIndex: 0 },
        { id: 'rational', type: 'list', label: 'The rational zero(s) is/are', correctList: ['2/5'] },
        { id: 'irrational', type: 'list', label: 'The irrational zero(s) is/are', correctList: ['sqrt(7)', '-sqrt(7)'] },
      ],
    },
    // 13
    {
      prompt: R`Find all real zeros of the function, finding exact values where possible. Identify each zero as rational or irrational.

$$f(x)=x^3+8x^2+7x-30$$`,
      parts: [
        { id: 'choice', type: 'mc', label: 'Select the correct choice below and, if necessary, fill in the answer boxes to complete your choice. (Simplify your answer. Type an exact answer, using radicals as needed. Use a comma to separate answers as needed.)', choices: ['A. The rational zero(s) is/are ___. The irrational zero(s) is/are ___.', 'B. There are no irrational zeros. The rational zero(s) is/are ___.', 'C. There are no rational zeros. The irrational zero(s) is/are ___.', 'D. There are no real zeros.'], correctIndex: 0 },
        { id: 'rational', type: 'list', label: 'The rational zero(s) is/are', correctList: ['-6'] },
        { id: 'irrational', type: 'list', label: 'The irrational zero(s) is/are', correctList: ['-1+sqrt(6)', '-1-sqrt(6)'] },
      ],
    },
    // 14
    { prompt: R`Write the difference in the standard form a + bi without using a calculator.

$$\left(i^3+6\right)-\left(8+i^2\right)$$`, parts: [{ id: 'v', type: 'expr', label: R`$$\left(i^3+6\right)-\left(8+i^2\right)=$$ (Simplify your answer. Type your answer in the form a + bi.)`, correctAnswer: '-1-i' }] },
    // 15
    { prompt: R`Multiply.

$$(4+5i)(8-2i)$$`, parts: [{ id: 'v', type: 'expr', label: R`$$(4+5i)(8-2i)=$$ (Simplify your answer. Type your answer in the form a + bi. Do not factor.)`, correctAnswer: '42+32*i' }] },
    // 16
    { prompt: R`Find the product of the complex number and its conjugate.

$$5-6i$$`, parts: [{ id: 'v', type: 'expr', label: 'The product is (Simplify your answer. Type your answer in the form a + bi.)', correctAnswer: '61' }] },
    // 17
    { prompt: R`Find the product of the complex number and its conjugate.

$$-5+6i$$`, parts: [{ id: 'v', type: 'expr', label: 'The product is', correctAnswer: '61' }] },
    // 18
    { prompt: R`Write the quotient in the form a + bi, where a and b are real numbers.

$$\dfrac{1}{5+6i}$$`, parts: [{ id: 'v', type: 'expr', label: R`$$\dfrac{1}{5+6i}=$$ (Type your answer in the form a + bi. Simplify your answer. Type an integer or a fraction.)`, correctAnswer: '5/61-(6/61)*i' }] },
    // 19
    { prompt: R`Solve for x.

$$x^2-8x+52=0$$`, parts: [{ id: 'x', type: 'list', label: 'The solutions are (Simplify your answer. Type your answer in the form a + bi. Use a comma to separate answers as needed.)', correctList: ['4+6*i', '4-6*i'] }] },
    // 20
    {
      prompt: R`Graph the function in a viewing window that shows all of its extrema and x-intercepts. Describe the end behavior using limits.

$$f(x)=(x-2)(x+3)(x+5)$$`,
      parts: [
        { id: 'graph', type: 'mc', label: 'Choose the correct graph.', choices: [g20('(x-2)*(x+3)*(x+5)'), g20('-(x-2)*(x+3)*(x+5)'), g20('(-x-2)*(-x+3)*(-x+5)'), g20('(x-2)*(x-3)*(x-5)')], correctIndex: 0 },
        {
          id: 'end', type: 'mc', label: 'Describe the end behavior using limits. Choose the correct answer below.',
          choices: [
            L('A', `${lim('\\infty')}=-\\infty\\text{ and }${lim('-\\infty')}=-\\infty`),
            L('B', `${lim('\\infty')}=-\\infty\\text{ and }${lim('-\\infty')}=\\infty`),
            L('C', `${lim('\\infty')}=\\infty\\text{ and }${lim('-\\infty')}=\\infty`),
            L('D', `${lim('\\infty')}=\\infty\\text{ and }${lim('-\\infty')}=-\\infty`),
          ],
          correctIndex: 3,
        },
      ],
    },
    // 21
    {
      prompt: R`Graph the function in a viewing window that shows all of its extrema and x-intercepts. Describe the end behavior using limits.

$$f(x)=3x^4-6x^3-18x^2+14x+40$$`,
      parts: [
        { id: 'graph', type: 'mc', label: 'Choose the correct graph below.', choices: [g21(`-(${f21})`), g21(f21), g21('3*x^4+6*x^3-18*x^2-14*x+40'), g21('-(3*x^4+6*x^3-18*x^2-14*x+40)')], correctIndex: 1 },
        { id: 'limpos', type: 'expr', label: R`$$\lim_{x\to\infty}\left(3x^4-6x^3-18x^2+14x+40\right)=$$`, correctAnswer: 'Infinity' },
        { id: 'limneg', type: 'expr', label: R`$$\lim_{x\to-\infty}\left(3x^4-6x^3-18x^2+14x+40\right)=$$`, correctAnswer: 'Infinity' },
      ],
    },
    // 22
    {
      prompt: R`State the degree and list the zeros of the polynomial function. State the multiplicity of each zero and whether the graph crosses the x-axis at the corresponding x-intercept. Then sketch the graph of the polynomial function.

$$f(x)=x(x-2)^2$$`,
      parts: [
        { id: 'deg', type: 'expr', label: 'The degree of this polynomial function is', correctAnswer: '3' },
        { id: 'z1', type: 'expr', label: 'The leftmost zero, x =', correctAnswer: '0' },
        { id: 'm1', type: 'expr', label: 'has multiplicity', correctAnswer: '1' },
        { id: 'c1', type: 'mc', label: '(1) The graph ___ the x-axis at the corresponding x-intercept.', choices: ['crosses', 'does not cross'], correctIndex: 0 },
        { id: 'z2', type: 'expr', label: 'The rightmost zero, x =', correctAnswer: '2' },
        { id: 'm2', type: 'expr', label: 'has multiplicity', correctAnswer: '2' },
        { id: 'c2', type: 'mc', label: '(2) The graph ___ the x-axis at the corresponding x-intercept.', choices: ['crosses', 'does not cross'], correctIndex: 1 },
        { id: 'graph', type: 'mc', label: 'Sketch the graph of the polynomial. Choose the correct graph below.', choices: [g22('x^2*(x-2)'), g22('-x*(x-2)^2'), g22('x*(x-2)^2'), g22('x*(x-2)*(x+2)')], correctIndex: 2 },
      ],
    },
    // 23
    {
      prompt: R`State the degree and list the zeros of the polynomial function. State the multiplicity of each zero and whether the graph crosses the x-axis at the corresponding x-intercept. Then sketch the graph of the polynomial function.

$$f(x)=(x-1)^3(x+1)^2$$`,
      parts: [
        { id: 'deg', type: 'expr', label: 'The degree of this polynomial function is', correctAnswer: '5' },
        { id: 'z1', type: 'expr', label: 'The leftmost zero, x =', correctAnswer: '-1' },
        { id: 'm1', type: 'expr', label: 'has multiplicity', correctAnswer: '2' },
        { id: 'c1', type: 'mc', label: '(1) The graph ___ the x-axis at the corresponding x-intercept.', choices: ['does not cross', 'crosses'], correctIndex: 0 },
        { id: 'z2', type: 'expr', label: 'The rightmost zero, x =', correctAnswer: '1' },
        { id: 'm2', type: 'expr', label: 'has multiplicity', correctAnswer: '3' },
        { id: 'c2', type: 'mc', label: '(2) The graph ___ the x-axis at the corresponding x-intercept.', choices: ['does not cross', 'crosses'], correctIndex: 1 },
        { id: 'graph', type: 'mc', label: 'Sketch the graph of the polynomial. Choose the correct graph below.', choices: [g23('(x-1)^2*(x+1)^3'), g23('-(x-1)^3*(x+1)^2'), g23('(x-1)^3*(x+1)^3'), g23('(x-1)^3*(x+1)^2')], correctIndex: 3 },
      ],
    },
    // 24
    {
      prompt: R`Write the polynomial in standard form, and identify the zeros of the function and the x-intercepts of its graph.

$$f(x)=(x-12i)(x+12i)$$`,
      parts: [
        { id: 'std', type: 'expr', form: EXP, label: R`$$(x-12i)(x+12i)=$$ (Simplify your answer. Use integers or fractions for any numbers in the expression.)`, correctAnswer: 'x^2+144' },
        { id: 'zeros', type: 'list', label: 'Zeros of the functions are x = (Use a comma to separate answers as needed. Express complex numbers in terms of i.)', correctList: ['12*i', '-12*i'] },
        { id: 'xint', type: 'mc', label: 'Select the correct choice below and, if necessary, fill in the answer box to complete your answer.', choices: ['A. x-intercepts = ___ (Use a comma to separate answers as needed.)', 'B. There are no x-intercepts.'], correctIndex: 1 },
      ],
    },
    // 25
    {
      prompt: R`Write the polynomial in standard form, and identify the zeros of the function and the x-intercepts of its graph.

$$f(x)=(x-2)(x-2)(x+3i)(x-3i)$$`,
      parts: [
        { id: 'std', type: 'expr', form: EXP, label: R`$$(x-2)(x-2)(x+3i)(x-3i)=$$ (Simplify your answer. Use integers or fractions for any numbers in the expression.)`, correctAnswer: 'x^4-4*x^3+13*x^2-36*x+36' },
        { id: 'zeros', type: 'list', label: 'Zeros of the functions are x = (Use a comma to separate answers as needed. Express complex numbers in terms of i.)', correctList: ['2', '2', '3*i', '-3*i'] },
        { id: 'xint', type: 'mc', label: 'Select the correct choice below and, if necessary, fill in the answer box to complete your answer.', choices: ['A. x-intercepts = ___ (Use a comma to separate answers as needed.)', 'B. There are no x-intercepts.'], correctIndex: 0 },
        { id: 'xints', type: 'list', label: 'x-intercepts =', correctList: ['2'] },
      ],
    },
    // 26
    {
      prompt: R`Write a polynomial function in standard form with real coefficients whose zeros include 5, 7i, and −7i.`,
      parts: [
        { id: 'a', type: 'expr', label: R`A polynomial function with zeros 5, 7i, and −7i is $$f(x)=x^3-$$ ___ $$x^2+$$`, correctAnswer: '5' },
        { id: 'b', type: 'expr', label: '___ x −', correctAnswer: '49' },
        { id: 'c', type: 'expr', label: '___', correctAnswer: '245' },
      ],
    },
    // 27
    { prompt: R`Find a polynomial function in standard form of least degree having only real coefficients, a leading coefficient of 1, and zeros of 4 and 4 + i.`, parts: [{ id: 'f', type: 'expr', form: EXP, label: 'The polynomial function is f(x) = (Simplify your answer.)', correctAnswer: 'x^3-12*x^2+49*x-68' }] },
    // 28
    {
      prompt: R`State how many complex and real zeros the function has.

$$f(x)=x^2-6x+25$$`,
      parts: [
        { id: 'complex', type: 'mc', label: 'How many complex zeros are there?', choices: ['0', '1', '2'], correctIndex: 2 },
        { id: 'real', type: 'mc', label: 'How many real zeros are there?', choices: ['0', '1', '2'], correctIndex: 0 },
      ],
    },
    // 29
    {
      prompt: R`Find all of the zeros and write a linear factorization of the function.

$$f(x)=6x^4-5x^3-9x^2+180x-550$$`,
      parts: [
        { id: 'zeros', type: 'list', label: 'The zeros are (Type an exact answer, using radicals and i as needed. Use integers or fractions for any numbers in the expression. Use a comma to separate answers as needed.)', correctList: ['-11/3', '5/2', '1+3*i', '1-3*i'] },
        { id: 'fact', type: 'expr', form: FAC, label: 'The linear factorization of the function is f(x) = (Type an exact answer, using radicals and i as needed. Use integers or fractions for any numbers in the expression.)', correctAnswer: '6*(x+11/3)*(x-5/2)*(x-1+3*i)*(x-1-3*i)' },
      ],
    },
    // 30
    {
      prompt: R`Using the given zero, find all of the zeros and write a linear factorization of f(x).

$$3i\text{ is a zero of }f(x)=x^4+6x^2-27$$`,
      parts: [
        { id: 'zeros', type: 'list', label: 'The zeros are (Type an exact answer, using radicals and i as needed. Use integers or fractions for any numbers in the expression. Use a comma to separate answers as needed.)', correctList: ['-3*i', '3*i', '-sqrt(3)', 'sqrt(3)'] },
        { id: 'fact', type: 'expr', form: FAC, label: 'The linear factorization of the function is f(x) = (Type an exact answer, using radicals and i as needed. Use integers or fractions for any numbers in the expression.)', correctAnswer: '(x-sqrt(3))*(x+sqrt(3))*(x-3*i)*(x+3*i)' },
      ],
    },
  ],
};
