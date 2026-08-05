module.exports = {
  title: 'HW 3.2 - Applying Expos and Logs',
  questions: [
    {
      prompt: 'Find the amount A accumulated after investing a principal P for n years at an interest rate r compounded annually, and for simple interest at the same rate r.\\n\\nP = $2400, r = 2%, t = 3',
      parts: [
        { id: 'compound', type: 'expr', label: 'Compounded annually, $', correctAnswer: '2546.90' },
        { id: 'simple', type: 'expr', label: 'Simple interest, $', correctAnswer: '2544.00' },
      ],
    },
    {
      prompt: 'Find the amount A accumulated after investing a principal P for t years at an interest rate r compounded k times per year.\\n\\nP = $200, r = 4%, t = 4, k = 12',
      parts: [{ id: 'amount', type: 'expr', label: 'Amount after 4 years, $', correctAnswer: '234.64' }],
    },
    {
      prompt: 'Find the amount A accumulated after investing a principal P for t years at an interest rate r compounded k times per year.\\n\\nP = $39,500, r = 7.5%, t = 15, k = 12',
      parts: [{ id: 'amount', type: 'expr', label: 'Amount after 15 years, $', correctAnswer: '121243.34' }],
    },
    {
      prompt: 'Find the amount A accumulated after investing a principal P for t years at an interest rate r compounded continuously.\\n\\nP = $8150, r = 6.4%, t = 7',
      parts: [{ id: 'amount', type: 'expr', label: 'Amount after 7 years, $', correctAnswer: '12756.21' }],
    },
    {
      prompt: 'If John invests $2300 in a savings account with a 7% interest rate compounded quarterly, how long will it take until the account has a balance of $4100?\\n\\nWhich formula should be used if a principal P is invested at an annual interest rate r compounded k times a year for t years to give the value of investment A?',
      parts: [
        {
          id: 'formula', type: 'mc',
          choices: [{ text: '$$A=P\\left(1+\\dfrac{r}{k}\\right)^{kt}$$' }, { text: '$$A=Pe^{rt}$$' }, { text: '$$A=Pre^{t}$$' }, { text: '$$A=P\\left(1-\\dfrac{r}{k}\\right)^{kt}$$' }],
          correctIndex: 0,
        },
        { id: 'years', type: 'expr', label: 'It will take ___ years', correctAnswer: '8' },
        { id: 'months', type: 'mc', label: 'and ___ months', choices: ['3', '6', '9', '0'], correctIndex: 1 },
      ],
    },
    {
      prompt: 'Megan is the trust officer for an estate. If she invests $15,000 into an account that carries an interest rate of 5% compounded monthly, how long will it be until the account has a value of $45,000 for the client?\\n\\nWhich formula should be used if a principal P is invested at an annual interest rate r compounded k times a year for t years to give the value of investment A?',
      parts: [
        {
          id: 'formula', type: 'mc',
          choices: [{ text: '$$A=Pe^{rt}$$' }, { text: '$$A=Pre^{t}$$' }, { text: '$$A=P\\left(1-\\dfrac{r}{k}\\right)^{kt}$$' }, { text: '$$A=P\\left(1+\\dfrac{r}{k}\\right)^{kt}$$' }],
          correctIndex: 3,
        },
        { id: 'years', type: 'expr', label: 'It will take ___ years', correctAnswer: '22' },
        {
          id: 'months', type: 'mc', label: 'and ___ months',
          choices: ['5', '10', '9', '11', '8', '6', '3', '4', '1', '2', '0', '7'],
          correctIndex: 8,
        },
      ],
    },
    {
      prompt: 'What interest rate compounded daily (365 days/year) is required for a $22,000 investment to grow to $35,500 in 5 years?',
      parts: [{ id: 'rate', type: 'expr', label: 'Rate (%)', correctAnswer: '9.571' }],
    },
    {
      prompt: 'Jack is an actuary working for a corporate pension fund. He needs to have $12.5 million grow to $21 million in 8 years. What interest rate compounded annually does he need for this investment?\\n\\nWhich formula should be used if a principal P is invested at an annual interest rate r compounded annually for t years to give the value of investment A?',
      parts: [
        { id: 'formula', type: 'mc', choices: [{ text: '$$A=P(1-r)^n$$' }, { text: '$$A=P(1+r)^n$$' }, { text: '$$A=Pre^{t}$$' }, { text: '$$A=Pe^{rt}$$' }], correctIndex: 1 },
        { id: 'rate', type: 'expr', label: 'The interest rate would be ___%', correctAnswer: '6.700' },
      ],
    },
    {
      prompt: 'Determine how much time is required for an investment to double in value if interest is earned at the rate of 3.65% compounded quarterly.\\n\\nWhich formula should be used if a principal P is invested at an annual interest rate r compounded k times a year for t years to give the value of investment A?',
      parts: [
        {
          id: 'formula', type: 'mc',
          choices: [{ text: '$$A=P\\left(1+\\dfrac{r}{k}\\right)^{kt}$$' }, { text: '$$A=P\\left(1-\\dfrac{r}{k}\\right)^{kt}$$' }, { text: '$$A=Pe^{rt}$$' }, { text: '$$A=Pre^{t}$$' }],
          correctIndex: 0,
        },
        { id: 'years', type: 'expr', label: 'It will take ___ years', correctAnswer: '19' },
        { id: 'months', type: 'mc', label: 'and ___ months', choices: ['3', '9', '0', '6'], correctIndex: 0 },
      ],
    },
    {
      prompt: 'Complete the table about doubling time of an investment.\\n\\n$$\\begin{array}{c|c|c} \\mathbf{APR} & \\mathbf{Compounding\\ Periods} & \\mathbf{Time\\ to\\ double} \\\\[8pt] 7.4\\% & \\text{Quarterly} & ? \\end{array}$$',
      parts: [
        { id: 'years', type: 'expr', label: 'It will take ___ years', correctAnswer: '9' },
        { id: 'months', type: 'mc', label: 'and ___ months', choices: ['0', '3', '6', '9'], correctIndex: 2 },
      ],
    },
    {
      prompt: 'How many years are required for an investment to double in value if it is appreciating at the rate of 3% compounded continuously?',
      parts: [{ id: 'years', type: 'expr', label: 'years', correctAnswer: '23.105' }],
    },
    {
      prompt: 'What is the total value after 7 years of an initial investment of $3250 that earns 4.4% interest compounded quarterly?',
      parts: [
        {
          id: 'mc', type: 'mc',
          choices: ['$3978.57', '$4422.20', '$4414.85', '$4897.08', '$4419.79'],
          correctIndex: 2,
        },
      ],
    },
  ],
};
