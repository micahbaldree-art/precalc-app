module.exports = {
  title: 'HW 1.5 - Compositions/Inverses',
  questions: [
    {
      prompt: 'Find the formulas for the functions f+g, f-g, and fg. Give the domain of each.\\n\\n$$f(x)=x^2, g(x)=3x-7$$',
      parts: [
        { id: 'sum', type: 'expr', label: 'f+g', correctAnswer: 'x^2+3*x-7' },
        { id: 'sumdom', type: 'interval', label: 'Domain of f+g', correctAnswer: '(-Infinity,Infinity)' },
        { id: 'diff', type: 'expr', label: 'f-g', correctAnswer: 'x^2-3*x+7' },
        { id: 'diffdom', type: 'interval', label: 'Domain of f-g', correctAnswer: '(-Infinity,Infinity)' },
        { id: 'prod', type: 'expr', label: 'fg', correctAnswer: '3*x^3-7*x^2' },
        { id: 'proddom', type: 'interval', label: 'Domain of fg', correctAnswer: '(-Infinity,Infinity)' },
      ],
    },
    {
      prompt: 'Find formulas for f/g and g/f. Give the domain of each.\\n\\n$$f(x)=\\sqrt{x+9}, g(x)=x^3$$',
      parts: [
        { id: 'fg', type: 'expr', label: 'f/g', correctAnswer: 'sqrt(x+9)/x^3' },
        { id: 'fgdom', type: 'interval', label: 'Domain of f/g', correctAnswer: '[-9,0)U(0,Infinity)' },
        { id: 'gf', type: 'expr', label: 'g/f', correctAnswer: 'x^3/sqrt(x+9)' },
        { id: 'gfdom', type: 'interval', label: 'Domain of g/f', correctAnswer: '(-9,Infinity)' },
      ],
    },

    {
      prompt: 'Find $$(f\\circ g)(5)$$ and $$(g\\circ f)(5)$$.\\n\\n$$f(x)=4x-1, g(x)=x^2+3$$',
      parts: [
        { id: 'fog', type: 'expr', label: '(f∘g)(5)', correctAnswer: '111' },
        { id: 'gof', type: 'expr', label: '(g∘f)(5)', correctAnswer: '364' },
      ],
    },
    {
      prompt: 'Find f(g(x)) and g(f(x)). State the domain of each.\\n\\n$$f(x)=9x+8, g(x)=x-7$$',
      parts: [
        { id: 'fg', type: 'expr', label: 'f(g(x))', correctAnswer: '9*x-55' },
        { id: 'fgdom', type: 'interval', label: 'Domain of f(g(x))', correctAnswer: '(-Infinity,Infinity)' },
        { id: 'gf', type: 'expr', label: 'g(f(x))', correctAnswer: '9*x+1' },
        { id: 'gfdom', type: 'interval', label: 'Domain of g(f(x))', correctAnswer: '(-Infinity,Infinity)' },
      ],
    },
    {
      prompt: 'For the given functions, find (f∘g)(x) and (g∘f)(x) and the domain of each.\\n\\n$$f(x)=\\sqrt{x+6}, g(x)=x^2-6$$',
      parts: [
        { id: 'fog', type: 'expr', label: '(f∘g)(x)', correctAnswer: 'abs(x)' },
        { id: 'gof', type: 'expr', label: '(g∘f)(x)', correctAnswer: 'x' },
        { id: 'fogdom', type: 'mc', label: 'Domain of f∘g', choices: [{ text: '$$(-\\infty,-6)\\cup(-6,\\infty)$$' }, { text: '$$[6,\\infty)$$' }, { text: '$$[-6,\\infty)$$' }, { text: '$$(-\\infty,\\infty)$$' }], correctIndex: 3 },
        { id: 'gofdom', type: 'mc', label: 'Domain of g∘f', choices: [{ text: '$$[6,\\infty)$$' }, { text: '$$(-\\infty,\\infty)$$' }, { text: '$$[-6,\\infty)$$' }, { text: '$$(-\\infty,-6)\\cup(-6,\\infty)$$' }], correctIndex: 2 },
      ],
    },
    {
      prompt: 'Find f(x) and g(x) such that h(x)=(f∘g)(x).\\n\\n$$h(x)=\\sqrt{4x+7}, g(x)=4x+7$$',
      parts: [{ id: 'f', type: 'expr', label: 'f(x)', correctAnswer: 'sqrt(x)' }],
    },
    {
      prompt: 'Find f(x) and g(x) such that h(x)=(f∘g)(x).\\n\\n$$h(x)=(9-5x)^2, g(x)=9-5x$$',
      parts: [{ id: 'f', type: 'expr', label: 'f(x)', correctAnswer: 'x^2' }],
    },
    {
      prompt: 'Which of the ordered pairs (6,3), (4,-2), and (3,-5) are in the relation given by $$5x+2y=5$$?',
      parts: [{ id: 'pt', type: 'point', correctPoints: [[3, -5]] }],
    },
    {
      prompt: 'Find the (x,y) pair for the value of the parameter.\\n\\n$$x=3t, y=t^2+5, t=4$$',
      parts: [{ id: 'pt', type: 'point', correctPoints: [[12, 21]] }],
    },
    {
      prompt: 'The graph of a relation (an S-shaped curve opening rightward, cubic-like, symmetric about the x-axis) is shown. (a) Is the relation a function? (b) Does the relation have an inverse that is a function?',
      parts: [
        { id: 'a', type: 'mc', label: 'Is the relation a function?', choices: ['No, because there is a horizontal line that intersects the graph in exactly one point.', 'No, because there is a vertical line that intersects the graph in more than one point.', 'Yes, because there is no horizontal line that intersects the graph in exactly one point.', 'Yes, because there is no vertical line that intersects the graph in more than one point.'], correctIndex: 1 },
        { id: 'b', type: 'mc', label: 'Does it have an inverse that is a function?', choices: ['No, because each horizontal line intersects the graph in at most one point.', 'No, because each vertical line intersects the graph in at least one point.', 'Yes, because each horizontal line intersects the graph in at most one point.', 'Yes, because each vertical line intersects the graph in at least one point.'], correctIndex: 2 },
      ],
    },
    {
      prompt: 'The graph of a relation (a reciprocal-like curve in quadrants I and III) is shown. (a) Is the relation a function? (b) Does the relation have an inverse that is a function?',
      parts: [
        { id: 'a', type: 'mc', label: 'Is the relation a function?', choices: ['No', 'Yes'], correctIndex: 1 },
        { id: 'b', type: 'mc', label: 'Does it have an inverse that is a function?', choices: ['Yes', 'No'], correctIndex: 0 },
      ],
    },
    {
      prompt: 'The function f(x) is one-to-one. Find its inverse and its domain.\\n\\n$$f(x)=6x-8$$',
      parts: [
        { id: 'inv', type: 'expr', label: 'f⁻¹(x)', correctAnswer: '(x+8)/6' },
        { id: 'dom', type: 'mc', label: 'Domain of f⁻¹', choices: [{ text: '$$(-\\infty,\\infty)$$' }, { text: '$$(-\\infty,6]$$' }, { text: '$$(8,\\infty)$$' }, { text: '$$[6,\\infty)$$' }], correctIndex: 0 },
      ],
    },
    {
      prompt: 'Find the inverse of the one-to-one function $$f(x)=\\dfrac{x+1}{x-9}$$. Give the domain of f⁻¹.',
      parts: [
        { id: 'inv', type: 'expr', label: 'f⁻¹(x)', correctAnswer: '(9*x+1)/(x-1)' },
        { id: 'dom', type: 'mc', label: 'Domain of f⁻¹', choices: [{ text: '$$(-\\infty,9)\\cup(9,\\infty)$$' }, { text: '$$(-\\infty,\\infty)$$' }, { text: '$$(-\\infty,-1/9)\\cup(-1/9,\\infty)$$' }, { text: '$$(-\\infty,1)\\cup(1,\\infty)$$' }], correctIndex: 3 },
      ],
    },
    {
      prompt: 'Find a formula for f⁻¹(x). Give the domain of f⁻¹, including any restrictions inherited from f.\\n\\n$$f(x)=\\sqrt[7]{x+4}$$',
      parts: [
        { id: 'inv', type: 'expr', label: 'f⁻¹(x)', correctAnswer: 'x^7-4' },
        { id: 'dom', type: 'interval', label: 'Domain of f⁻¹(x)', correctAnswer: '(-Infinity,Infinity)' },
      ],
    },
    {
      prompt: 'Find f(g(x)) and g(f(x)) and determine whether f and g are inverses of each other.\\n\\n$$f(x)=8x+5, g(x)=\\dfrac{x-5}{8}$$',
      parts: [
        { id: 'a', type: 'expr', label: 'f(g(x))', correctAnswer: 'x' },
        { id: 'b', type: 'expr', label: 'g(f(x))', correctAnswer: 'x' },
        { id: 'c', type: 'mc', choices: ['f and g are inverses of each other.', 'f and g are not inverses of each other.'], correctIndex: 0 },
      ],
    },
    {
      prompt: 'Confirm that f and g are inverses by showing that f(g(x))=x and g(f(x))=x.\\n\\n$$f(x)=x^3+4, g(x)=\\sqrt[3]{x-4}$$',
      parts: [
        { id: 'a', type: 'mc', label: 'Is f(g(x)) = x?', choices: ['Yes', 'No'], correctIndex: 0 },
        { id: 'b', type: 'mc', label: 'Is g(f(x)) = x?', choices: ['Yes', 'No'], correctIndex: 0 },
      ],
    },
    {
      prompt: 'Which function is the inverse of the function $$f(x)=6x-7$$?',
      parts: [{
        id: 'mc', type: 'mc',
        choices: [{ text: '$$g(x)=\\dfrac{x-6}{7}$$' }, { text: '$$g(x)=\\dfrac{x-7}{6}$$' }, { text: '$$g(x)=7-6x$$' }, { text: '$$g(x)=\\dfrac{x+7}{6}$$' }, { text: '$$g(x)=\\dfrac{x+42}{6}$$' }],
        correctIndex: 3,
      }],
    },
  ],
};
