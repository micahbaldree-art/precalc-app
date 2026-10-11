// Final Review 1 — transcribed from the printed assignment + answer key.
// Graph questions (Q18, Q19) use representative functions with the same shape as
// the printed graphs (the printed ones are pictures with no formula).
const R = String.raw;
const { functionGraphSvg } = require('../../lib/svgGraphs');

const EXP = 'expanded';
const FAC = 'factored';
const win = { xMin: -10, xMax: 10, yMin: -10, yMax: 10 };
const g = (fn) => ({ svg: functionGraphSvg(fn, win) });
const ALL = '(-Infinity,Infinity)';

// Q18: f is a steep odd cubic; Q19: f has a small hump and a touch-down near the axis
const f18 = '3*x^3';
const f19 = '0.05*(x+2)*(x-3)^2';

// Norman window: a square with a semicircle on top
const norman = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="85" width="100" height="100" fill="none" stroke="#111827" stroke-width="2"/><path d="M 50 85 A 50 50 0 0 1 150 85" fill="none" stroke="#111827" stroke-width="2"/></svg>`;

module.exports = {
  title: 'Final Review 1',
  questions: [
    // 1
    {
      prompt: R`Write the polynomial below in standard form and state its degree.

$$4x^2-2x+3$$`,
      parts: [
        { id: 'standard', type: 'expr', label: 'The polynomial in standard form is', correctAnswer: '4*x^2-2*x+3' },
        { id: 'degree', type: 'expr', label: 'The degree of the polynomial is', correctAnswer: '2' },
      ],
    },
    // 2
    {
      prompt: R`State whether the following expression is a polynomial.

$$4x^{-2}+6$$`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct answer below.', choices: ['A. The expression is a polynomial.', 'B. The expression is not a polynomial.'], correctIndex: 1 }],
    },
    // 3
    { prompt: R`Multiply.

$$(2s+5p)(2s-5p)$$`, parts: [{ id: 'v', type: 'expr', form: EXP, label: R`$$(2s+5p)(2s-5p)=$$ (Simplify your answer.)`, correctAnswer: '4*s^2-25*p^2' }] },
    // 4
    { prompt: R`Multiply the polynomials and simplify by combining like terms.

$$\left(y^2+4y+1\right)\left(5y^2+y-4\right)$$`, parts: [{ id: 'v', type: 'expr', form: EXP, label: R`$$\left(y^2+4y+1\right)\left(5y^2+y-4\right)=$$ (Simplify your answer.)`, correctAnswer: '5*y^4+21*y^3+5*y^2-15*y-4' }] },
    // 5
    { prompt: R`Factor the difference of two squares.

$$x^2-36$$`, parts: [{ id: 'v', type: 'expr', form: FAC, label: R`$$x^2-36=$$`, correctAnswer: '(x+6)*(x-6)' }] },
    // 6
    { prompt: R`Factor the following expression completely. If a polynomial is prime, then state this as your answer.

$$(m+2)^2-9$$`, parts: [{ id: 'v', type: 'factor', form: FAC, isPrime: false, correctAnswer: '(m+5)*(m-1)' }] },
    // 7
    { prompt: R`Factor the sum or difference of two cubes shown below.

$$x^3-8$$`, parts: [{ id: 'v', type: 'expr', form: FAC, label: R`$$x^3-8=$$`, correctAnswer: '(x-2)*(x^2+2*x+4)' }] },
    // 8
    { prompt: R`Factor the sum or difference of two cubes shown below.

$$8x^3+343$$`, parts: [{ id: 'v', type: 'expr', form: FAC, label: R`$$8x^3+343=$$`, correctAnswer: '(2*x+7)*(4*x^2-14*x+49)' }] },
    // 9
    { prompt: R`Factor by grouping.

$$72x^3-40x^2+9x-5$$`, parts: [{ id: 'v', type: 'expr', form: FAC, label: R`$$72x^3-40x^2+9x-5=$$`, correctAnswer: '(8*x^2+1)*(9*x-5)' }] },
    // 10
    {
      prompt: R`Factor $$am+6jm+aq+6jq$$ by grouping.`,
      parts: [{
        id: 'mc', type: 'mc', label: R`Choose the factored version of $$am+6jm+aq+6jq$$.`,
        choices: [{ text: R`A. $$(a+m)(6j+q)$$` }, { text: R`B. $$(a+6j)m+(a+6j)q$$` }, { text: R`C. $$6j(m+q)+a(m+q)$$` }, { text: R`D. $$(a+6j)(m+q)$$` }],
        correctIndex: 3,
      }],
    },
    // 11
    { prompt: R`Factor the given polynomial completely. If the polynomial cannot be factored, say that it is prime.

$$4x^3-32x^2+60x$$`, parts: [{ id: 'v', type: 'factor', form: FAC, isPrime: false, correctAnswer: '4*x*(x-5)*(x-3)' }] },
    // 12
    {
      prompt: R`Describe how the graph of $$y=x^2$$ can be transformed to the graph of the given equation.

$$y=(x-3)^2$$`,
      parts: [{ id: 'mc', type: 'mc', label: 'Describe the transformation. Choose the correct answer below.', choices: ['A translation of the graph down by 3 units', 'A translation of the graph to the right by 3 units', 'A translation of the graph up by 3 units', 'A translation of the graph to the left by 3 units'], correctIndex: 1 }],
    },
    // 13
    {
      prompt: R`Describe how the graph of $$y=x^2$$ can be transformed to the graph of the given equation.

$$y=(x-2)^2+6$$`,
      parts: [{ id: 'mc', type: 'mc', label: 'Describe the transformation. Choose the correct answer below.', choices: ['A translation of the graph to the left by 2 units and up by 6 units', 'A translation of the graph to the left by 6 units and up by 2 units', 'A translation of the graph to the right by 6 units and down by 2 units', 'A translation of the graph to the right by 2 units and up by 6 units'], correctIndex: 3 }],
    },
    // 14
    {
      prompt: R`Describe how the graph of $$y=\sqrt{x}$$ can be transformed to the graph of the given function.

$$f(x)=\sqrt{-x}-1$$`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct description for the transformation below.', choices: ['A. Reflection across the x-axis, vertical translation down by 1 unit', 'B. Reflection across the y-axis, vertical translation up by 1 unit', 'C. Reflection across the y-axis, vertical translation down by 1 unit', 'D. Reflection across the x-axis, vertical translation up by 1 unit'], correctIndex: 2 }],
    },
    // 15
    {
      prompt: R`Describe how the graph of $$y=x^3$$ can be transformed to the graph of $$y=4x^3$$.`,
      parts: [{ id: 'mc', type: 'mc', label: R`Choose the correct transformation of $$y=x^3$$ to $$y=4x^3$$.`, choices: ['A. A vertical stretch by a factor of 4.', 'B. A vertical shrink by a factor of 4.'], correctIndex: 0 }],
    },
    // 16
    {
      prompt: R`Describe how to transform the graph of f into the graph of g.

$$f(x)=(x-6)^3\text{ and }g(x)=-(x+6)^3$$`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct description for the transformation below.', choices: ['A. Translate right 12 units, and reflect across the x-axis to get g(x).', 'B. Translate left 12 units, and reflect across the y-axis to get g(x).', 'C. Translate left 12 units, and reflect across the x-axis to get g(x).', 'D. Translate right 12 units, and reflect across the y-axis to get g(x).'], correctIndex: 2 }],
    },
    // 17
    {
      prompt: R`Find the equation of the reflection of f across (a) the x-axis and (b) the y-axis.

$$f(x)=x^3+2x^2-8x-2$$`,
      parts: [
        { id: 'a', type: 'expr', form: EXP, label: '(a) The equation of the reflection of f across the x-axis is y = (Simplify your answer.)', correctAnswer: '-x^3-2*x^2+8*x+2' },
        { id: 'b', type: 'expr', form: EXP, label: '(b) The equation of the reflection of f across the y-axis is y = (Simplify your answer.)', correctAnswer: '-x^3+2*x^2+8*x-2' },
      ],
    },
    // 18
    {
      prompt: R`Use the graph of $$y=f(x)$$ shown to choose the graph of $$y=|f(x)|$$ from the four shown.`,
      svg: functionGraphSvg(f18, win),
      parts: [{ id: 'mc', type: 'mc', label: R`Choose the graph of $$y=|f(x)|$$.`, choices: [g(`abs(${f18})`), g(`-abs(${f18})`), g(`-(${f18})`), g(f18)], correctIndex: 0 }],
    },
    // 19
    {
      prompt: R`Refer to the graph of $$y=f(x)$$ shown. Sketch the graph of the new function $$y=-|f(x)|$$.`,
      svg: functionGraphSvg(f19, win),
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct graph below.', choices: [g(`abs(${f19})`), g(f19), g(`-abs(${f19})`), g(`${f19.replace(/x/g, 'abs(x)')}`)], correctIndex: 2 }],
    },
    // 20
    {
      prompt: R`Transform the given function by (a) a vertical stretch by a factor of 4, (b) a horizontal shrink by a factor of $$\dfrac{1}{5}$$.

$$f(x)=x^3-7x$$`,
      parts: [
        { id: 'a', type: 'expr', form: EXP, label: '(a) The given function vertically stretched by a factor of 4 transforms to y = (Do not factor. Type an expression using x as the variable. Use integers or fractions for any numbers in the expression.)', correctAnswer: '4*x^3-28*x' },
        { id: 'b', type: 'expr', form: EXP, label: R`(b) The given function horizontally shrunk by a factor of $$\frac{1}{5}$$ transforms to y = (Do not factor. Type an expression using x as the variable. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '125*x^3-35*x' },
      ],
    },
    // 21
    {
      prompt: R`Transform the given function by (a) a vertical stretch by a factor of 2, and (b) a horizontal shrink by a factor of $$\dfrac{1}{3}$$.

$$f(x)=x^2+5x-5$$`,
      parts: [
        { id: 'a', type: 'expr', form: EXP, label: '(a) The given function vertically stretched by a factor of 2 transforms to y = (Do not factor. Type an expression using x as the variable. Use integers or fractions for any numbers in the expression.)', correctAnswer: '2*x^2+10*x-10' },
        { id: 'b', type: 'expr', form: EXP, label: R`(b) The given function horizontally shrunk by a factor of $$\frac{1}{3}$$ transforms to y = (Do not factor. Type an expression using x as the variable. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '9*x^2+15*x-5' },
      ],
    },
    // 22
    {
      prompt: R`The graph of $$y=-\dfrac{1}{2}|x+3|-4$$ can be obtained from the graph of $$y=|x|$$ by which transformations?`,
      parts: [
        { id: 'h', type: 'mc', label: 'What is the horizontal shift?', choices: ['A. 4 units to the left', 'B. 3 units to the right', 'C. 3 units to the left', 'D. 4 units to the right'], correctIndex: 2 },
        {
          id: 'v', type: 'mc', label: 'By what factor is the graph stretched or shrunk vertically and how is it reflected?',
          choices: ['A. stretched vertically by a factor of 2; reflected over the y-axis', 'B. stretched vertically by a factor of 2; reflected over the x-axis', { text: R`C. shrunk vertically by a factor of $$\dfrac{1}{2}$$; reflected over the y-axis` }, { text: R`D. shrunk vertically by a factor of $$\dfrac{1}{2}$$; reflected over the x-axis` }],
          correctIndex: 3,
        },
        { id: 's', type: 'mc', label: 'What is the vertical shift?', choices: ['A. 4 units upward', 'B. 4 units downward', 'C. 3 units downward', 'D. 3 units upward'], correctIndex: 1 },
      ],
    },
    // 23
    {
      prompt: R`A graph G is obtained from a graph of $$y=|x|$$ by the following sequence of transformations. Write an equation whose graph is G.

A shift left 9 units, then a vertical stretch by a factor of 7, and finally a shift down 4 units.`,
      parts: [{ id: 'v', type: 'expr', label: 'The equation whose graph is G is y = (Type an equation.)', correctAnswer: '7*abs(x+9)-4' }],
    },
    // 24
    { prompt: R`Solve.

$$4x^2=81$$`, parts: [{ id: 'x', type: 'list', label: 'x = (Simplify your answer. Use a comma to separate answers as needed.)', correctList: ['9/2', '-9/2'] }] },
    // 25
    { prompt: R`Solve the equation by extracting square roots.

$$3(x+7)^2=5$$`, parts: [{ id: 'x', type: 'list', label: 'x = (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression. Use a comma to separate answers as needed.)', correctList: ['(-21+sqrt(15))/3', '(-21-sqrt(15))/3'] }] },
    // 26
    { prompt: R`Solve by completing the square.

$$x^2+3x=10$$`, parts: [{ id: 'x', type: 'list', label: 'The solutions are (Use a comma to separate answers as needed.)', correctList: ['-5', '2'] }] },
    // 27
    { prompt: R`Solve for x by using the quadratic formula.

$$x^2+18x+4=0$$`, parts: [{ id: 'x', type: 'list', label: 'The solutions are x = (Simplify your answer. Type an exact answer, using radicals as needed. Use a comma to separate answers as needed.)', correctList: ['-9+sqrt(77)', '-9-sqrt(77)'] }] },
    // 28
    { prompt: R`Use a method of your choice to solve the equation.

$$x^2+2x-8=0$$`, parts: [{ id: 'x', type: 'list', label: 'x = (Simplify your answer. Use a comma to separate answers as needed.)', correctList: ['-4', '2'] }] },
    // 29
    {
      prompt: "Austin's den is 10 feet longer than it is wide. If the den's area is 231 square feet, what are the dimensions of the room?",
      parts: [{ id: 'x', type: 'list', label: 'The dimensions of the room are ___ ft. (Use a comma to separate answers as needed.)', correctList: ['11', '21'] }],
    },
    // 30
    {
      prompt: R`A Norman window has the shape of a square with a semicircle mounted on it. Find the width of the window if the total area of the square and the semicircle is to be $$160\text{ ft}^2$$.`,
      svg: norman,
      parts: [{ id: 'w', type: 'expr', label: 'The width of the window is ___. (Type an integer or decimal rounded to the nearest thousandth as needed.)', correctAnswer: '10.718' }],
    },
    // 31
    {
      prompt: R`Find the formulas for the functions f + g, f − g, and fg. Give the domain of each.

$$f(x)=x^2\text{ and }g(x)=8x-9$$`,
      parts: [
        { id: 'sum', type: 'expr', form: EXP, label: 'f + g = (Simplify your answer.)', correctAnswer: 'x^2+8*x-9' },
        { id: 'sumdom', type: 'interval', label: 'The domain of f + g is (Type your answer in interval notation.)', correctAnswer: ALL },
        { id: 'diff', type: 'expr', form: EXP, label: 'f − g = (Simplify your answer.)', correctAnswer: 'x^2-8*x+9' },
        { id: 'diffdom', type: 'interval', label: 'The domain of f − g is (Type your answer in interval notation.)', correctAnswer: ALL },
        { id: 'prod', type: 'expr', form: EXP, label: 'fg = (Simplify your answer.)', correctAnswer: '8*x^3-9*x^2' },
        { id: 'proddom', type: 'interval', label: 'The domain of fg is (Type your answer in interval notation.)', correctAnswer: ALL },
      ],
    },
    // 32
    {
      prompt: R`Find $$(f\circ g)(3)$$ and $$(g\circ f)(3)$$.

$$f(x)=5x-1;\ g(x)=x^2+2$$`,
      parts: [
        { id: 'fg', type: 'expr', label: R`$$(f\circ g)(3)=$$`, correctAnswer: '54' },
        { id: 'gf', type: 'expr', label: R`$$(g\circ f)(3)=$$`, correctAnswer: '198' },
      ],
    },
    // 33
    {
      prompt: R`Find f(g(x)) and g(f(x)). State the domain of each.

$$f(x)=8x+9;\ g(x)=x-4$$`,
      parts: [
        { id: 'fg', type: 'expr', form: EXP, label: 'What is the formula for f(g(x))? f(g(x)) = (Simplify your answer.)', correctAnswer: '8*x-23' },
        { id: 'fgdom', type: 'interval', label: 'What is the domain of f(g(x))? (Type your answer in interval notation.)', correctAnswer: ALL },
        { id: 'gf', type: 'expr', form: EXP, label: 'What is the formula for g(f(x))? g(f(x)) = (Simplify your answer.)', correctAnswer: '8*x+5' },
        { id: 'gfdom', type: 'interval', label: 'What is the domain of g(f(x))? (Type your answer in interval notation.)', correctAnswer: ALL },
      ],
    },
    // 34
    {
      prompt: R`Find f(x) and g(x) such that $$h(x)=(f\circ g)(x)$$.

$$h(x)=\sqrt{5x+9}$$

Suppose that $$g(x)=5x+9$$.`,
      parts: [{ id: 'f', type: 'expr', label: 'f(x) =', correctAnswer: 'sqrt(x)' }],
    },
  ],
};
