// HW 4.1 — transcribed from the printed assignment + answer key.
// LaTeX is written with String.raw so backslashes are typed exactly once.
const R = String.raw;
const F = require('../../lib/trigFigures');

// "sin θ =" style label and an exact-value expression part
// (a backslash right before ${...} would escape the interpolation, so concatenate)
const fn = (name) => '$$' + '\\' + name + R`\theta=$$`;
const ex = (name, answer) => ({ id: name, type: 'expr', exact: true, label: fn(name), correctAnswer: answer });

module.exports = {
  title: 'HW 4.1 - Right Triangle Review',
  questions: [
    // 1
    {
      prompt: 'Find the six trigonometric function values of the specified angle.',
      svg: F.rightTriangleSvg({ adj: 63, opp: 16, adjLabel: '63', oppLabel: '16', hypLabel: '65', angleLabel: 'θ' }),
      parts: [ex('sin', '16/65'), ex('cos', '63/65'), ex('tan', '16/63'), ex('sec', '65/63'), ex('csc', '65/16'), ex('cot', '63/16')],
    },
    // 2
    {
      prompt: 'Find the six trigonometric function values of the specified angle.',
      svg: F.rightTriangleSvg({ adj: 7, opp: 6, adjLabel: '7', oppLabel: '6', angleLabel: 'θ' }),
      parts: [ex('sin', '6*sqrt(85)/85'), ex('cos', '7*sqrt(85)/85'), ex('tan', '6/7'), ex('sec', 'sqrt(85)/7'), ex('csc', 'sqrt(85)/6'), ex('cot', '7/6')],
    },
    // 3
    {
      prompt: R`Assume that $$\theta$$ is an acute angle in a right triangle satisfying the given condition. Evaluate the remaining trigonometric functions.

$$\sin\theta=\dfrac{4}{11}$$`,
      parts: [ex('cos', 'sqrt(105)/11'), ex('tan', '4*sqrt(105)/105'), ex('csc', '11/4'), ex('sec', '11*sqrt(105)/105'), ex('cot', 'sqrt(105)/4')],
    },
    // 4
    {
      prompt: R`Assume that $$\theta$$ is an acute angle in a right triangle satisfying the given condition. Evaluate the remaining trigonometric functions.

$$\tan\theta=\dfrac{5}{6}$$`,
      parts: [ex('sin', '5*sqrt(61)/61'), ex('cos', '6*sqrt(61)/61'), ex('csc', 'sqrt(61)/5'), ex('sec', 'sqrt(61)/6'), ex('cot', '6/5')],
    },
    // 5
    {
      prompt: R`Assume that $$\theta$$ is an acute angle in a right triangle satisfying the given condition. Evaluate the remaining trigonometric functions.

$$\csc\theta=\dfrac{19}{10}$$`,
      parts: [ex('sin', '10/19'), ex('cos', '3*sqrt(29)/19'), ex('tan', '10*sqrt(29)/87'), ex('sec', '19*sqrt(29)/87'), ex('cot', '3*sqrt(29)/10')],
    },
    // 6
    {
      prompt: R`Evaluate using a calculator. Be sure the calculator is in the correct mode.

$$\sin 26^\circ$$`,
      parts: [{ id: 'v', type: 'expr', label: R`$$\sin 26^\circ=$$ (Round to three decimal places as needed.)`, correctAnswer: '0.438' }],
    },
    // 7
    {
      prompt: R`Evaluate using a calculator. Be sure the calculator is in the correct mode.

$$\sec 67^\circ$$`,
      parts: [{ id: 'v', type: 'expr', label: R`$$\sec 67^\circ=$$ (Round to three decimal places as needed.)`, correctAnswer: '2.559' }],
    },
    // 8
    {
      prompt: 'Solve for the variable shown.',
      svg: F.triangleSvg({ vertices: { A: [0, 0], B: [16 / Math.tan((37 * Math.PI) / 180), 0], C: [0, 16] }, sideLabels: { AC: '16', CB: 'x' }, angleLabels: { B: '37°' }, rightAngleAt: 'A' }),
      parts: [{ id: 'x', type: 'expr', label: 'x ≈ (Round to three decimal places as needed.)', correctAnswer: '26.586' }],
    },
    // 9
    {
      prompt: 'Solve for the variable shown.',
      svg: F.triangleSvg({ vertices: { A: [0, 0], B: [41, 0], C: [41, 41 / Math.tan((42 * Math.PI) / 180)] }, sideLabels: { AB: '41', BC: 'y' }, angleLabels: { C: '42°' }, rightAngleAt: 'B' }),
      parts: [{ id: 'y', type: 'expr', label: 'y ≈ (Round to three decimal places as needed.)', correctAnswer: '45.535' }],
    },
    // 10
    {
      prompt: R`Solve the right $$\triangle ABC$$ for all of its unknown parts.

$$\beta=64^\circ;\ a=4$$`,
      svg: F.triangleSvg({
        vertices: { B: [0, 0], C: [4, 0], A: [4, 4 * Math.tan((64 * Math.PI) / 180)] },
        vertexLabels: { A: 'A', B: 'B', C: 'C' },
        sideLabels: { BC: 'a', CA: 'b', BA: 'c' },
        angleLabels: { B: 'β', A: 'α' },
        rightAngleAt: 'C',
      }),
      parts: [
        { id: 'alpha', type: 'expr', label: R`$$\alpha=$$ (degrees; simplify your answer.)`, correctAnswer: '26' },
        { id: 'b', type: 'expr', label: 'b = (Round to three decimal places as needed.)', correctAnswer: '8.201' },
        { id: 'c', type: 'expr', label: 'c = (Round to three decimal places as needed.)', correctAnswer: '9.125' },
      ],
    },
    // 11
    {
      prompt: R`The angle of depression from the top of a lighthouse 120 ft above the surface of the water to a buoy is $$13^\circ$$. How far is the buoy from the lighthouse?

Let x be the distance between the base of the lighthouse and the buoy. Write a trigonometric equation giving the relation between x, height of the lighthouse, and the angle of elevation from the buoy. (Simplify your answer. Use integers or fractions for any numbers in the equation. Type any angle measures in degrees.)`,
      svg: F.sightLineSvg({ heightLabel: '120 ft', groundLabel: 'x', angleLabel: '13°', kind: 'depression' }),
      parts: [
        { id: 'eq', type: 'equation', variable: 'x', solution: '120/tan(13)', degrees: true, trigCalls: { min: 1 }, label: 'Equation:' },
        { id: 'dist', type: 'expr', label: 'The buoy is about', correctAnswer: '519.777' },
        { id: 'unit', type: 'mc', label: 'The buoy is about ___ from the base of the lighthouse. (Simplify your answer. Type an integer or decimal rounded to three decimal places as needed.)', choices: ['degrees', 'feet', 'feet per degree'], correctIndex: 1 },
      ],
    },
    // 12
    {
      prompt: R`A guy wire connects the top of an antenna to a point on level ground 20 ft from the base of the antenna. The angle of elevation formed by this wire is $$72^\circ$$. What is the length of the wire and the height of the antenna?`,
      svg: F.sightLineSvg({ heightLabel: '', groundLabel: '20', angleLabel: '72°', kind: 'elevation', hLen: 150, gLen: 140 }),
      parts: [
        { id: 'wire', type: 'expr', label: 'The length of the wire is ___ feet. (Round to the nearest integer as needed.)', correctAnswer: '65' },
        { id: 'height', type: 'expr', label: 'The height of the antenna is ___ feet. (Round to the nearest integer as needed.)', correctAnswer: '62' },
      ],
    },
    // 13
    {
      prompt: R`A guy wire attached to the top of a radio antenna is anchored to a point on the ground 20 m from the antenna's base. If the wire makes an angle of $$57^\circ$$ with level ground, how high is the antenna?`,
      parts: [{ id: 'h', type: 'expr', label: 'The antenna is about ___ m high. (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '30.797' }],
    },
    // 14
    {
      prompt: R`A whalewatch boat is located at point P and L is the nearest point on the shore. Point Q is located 6.75 mi down the shoreline from L and $$\overline{PL}\perp\overline{LQ}$$. Determine the distance that the boat is from the shore if $$\angle PQL=25^\circ$$.`,
      svg: F.triangleSvg({
        vertices: { L: [0, 6.75 * Math.tan((25 * Math.PI) / 180)], Q: [6.75, 6.75 * Math.tan((25 * Math.PI) / 180)], P: [0, 0] },
        vertexLabels: { L: 'L', Q: 'Q', P: 'P' },
        sideLabels: { LQ: '6.75 mi' },
        angleLabels: { Q: '25°' },
        rightAngleAt: 'L',
      }),
      parts: [{ id: 'd', type: 'expr', label: 'The distance between the boat and the shore is about ___ miles. (Simplify your answer. Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '3.148' }],
    },
    // 15
    {
      prompt: R`A man is located 250 feet from an observation deck. The angle of elevation from the man to the bottom edge of the deck is $$30^\circ$$ and to the top edge of the deck is $$35^\circ$$. What is the height of the observation deck itself?`,
      svg: F.twoAngleSvg({ dLabel: '250 ft', lowLabel: '30°', highLabel: '35°', lowDeg: 30, highDeg: 35 }),
      parts: [{ id: 'h', type: 'expr', label: 'The height of the observation deck is about ___ feet. (Simplify your answer. Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '30.714' }],
    },
    // 16
    {
      prompt: R`The bearing of the line-of-sight to the east end of the bridge from a point 300 feet due north of the west end of the bridge is $$112^\circ$$. What is the length L of the bridge?`,
      svg: F.bearingSvg({ vertLabel: '300 ft', baseLabel: 'L', bearingLabel: '112°', bearingDeg: 112 }),
      parts: [{ id: 'L', type: 'expr', label: 'The length of the bridge is ___ feet. (Round to the nearest integer as needed.)', correctAnswer: '743' }],
    },
    // 17
    {
      prompt: 'A barn roof is constructed as shown in the figure. What is the height of the vertical center span?',
      svg: F.roofSvg({ baseLabel: '73 ft', angleLabel: '18°', baseDeg: 18 }),
      parts: [{ id: 'h', type: 'expr', label: 'The height of the vertical center span is about ___ feet. (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '11.860' }],
    },
  ],
};
