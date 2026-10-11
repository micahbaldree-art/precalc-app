// Final Review 4 — transcribed from the printed assignment + answer key.
const R = String.raw;
const F = require('../../lib/trigFigures');
const d = (x) => (x * Math.PI) / 180;

const trig = (name) => '$$' + '\\' + name + R`\theta=$$`;
const ex = (name, answer) => ({ id: name, type: 'expr', exact: true, label: trig(name), correctAnswer: answer });
const UNITS_AREA = ['square feet.', 'feet.', 'square meter.', 'meter.'];

module.exports = {
  title: 'Final Review 4',
  questions: [
    // 1  (printed order: sin, cos, tan, sec, csc, cot)
    {
      prompt: 'Find the six trigonometric function values of the specified angle.',
      svg: F.rightTriangleSvg({ adj: 7, opp: 6, adjLabel: '7', oppLabel: '6', angleLabel: 'θ' }),
      parts: [ex('sin', '6*sqrt(85)/85'), ex('cos', '7*sqrt(85)/85'), ex('tan', '6/7'), ex('sec', 'sqrt(85)/7'), ex('csc', 'sqrt(85)/6'), ex('cot', '7/6')],
    },
    // 2  (printed order: cos, tan, csc, sec, cot)
    {
      prompt: R`Assume that $$\theta$$ is an acute angle in a right triangle satisfying the given condition. Evaluate the remaining trigonometric functions.

$$\sin\theta=\dfrac{4}{11}$$`,
      parts: [ex('cos', 'sqrt(105)/11'), ex('tan', '4*sqrt(105)/105'), ex('csc', '11/4'), ex('sec', '11*sqrt(105)/105'), ex('cot', 'sqrt(105)/4')],
    },
    // 3
    { prompt: R`Find the exact value of $$\sin\dfrac{\pi}{3}$$.`, parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\sin\dfrac{\pi}{3}=$$ (Type a simplified fraction. Type an exact answer, using radicals as needed. Rationalize the denominator.)`, correctAnswer: 'sqrt(3)/2' }] },
    // 4
    { prompt: R`Find the exact value of $$\cos\dfrac{\pi}{3}$$.`, parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\cos\dfrac{\pi}{3}=$$ (Type a simplified fraction. Type an exact answer, using radicals as needed. Rationalize the denominator.)`, correctAnswer: '1/2' }] },
    // 5
    { prompt: R`Evaluate $$\csc\dfrac{3\pi}{4}$$ using a calculator. Give an exact value, not an approximate answer.`, parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\csc\dfrac{3\pi}{4}=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, correctAnswer: 'sqrt(2)' }] },
    // 6
    { prompt: R`Evaluate using a calculator. Be sure the calculator is in the correct mode.

$$\cos 57^\circ30'$$`, parts: [{ id: 'v', type: 'expr', label: R`$$\cos 57^\circ30'=$$ (Simplify your answer. Type an integer or a decimal. Round to three decimal places as needed.)`, correctAnswer: '0.537' }] },
    // 7
    { prompt: R`Evaluate using a calculator. Be sure the calculator is in the correct mode.

$$\sec 52^\circ$$`, parts: [{ id: 'v', type: 'expr', label: R`$$\sec 52^\circ=$$ (Round to three decimal places as needed.)`, correctAnswer: '1.624' }] },
    // 8
    {
      prompt: R`Find the acute angle $$\theta$$ that satisfies the given equation. Give $$\theta$$ in both degrees and radians.

$$\sin\theta=\dfrac{1}{2}$$`,
      parts: [
        { id: 'deg', type: 'expr', label: R`$$\theta=$$ ___° (Type your answer in degrees.)`, correctAnswer: '30' },
        { id: 'rad', type: 'expr', exact: true, label: R`$$\theta=$$ ___ radians (Type your answer in radians. Type an exact answer in terms of π. Use integers or fractions for any numbers in the expression.)`, correctAnswer: 'pi/6' },
      ],
    },
    // 9
    {
      prompt: R`Solve the right $$\triangle ABC$$ for all of its unknown parts.

$$\beta=11^\circ;\ a=10$$`,
      svg: F.triangleSvg({
        vertices: { B: [0, 0], C: [10, 0], A: [10, 10 * Math.tan(d(11))] },
        vertexLabels: { A: 'A', B: 'B', C: 'C' },
        sideLabels: { BC: 'a', CA: 'b', BA: 'c' },
        angleLabels: { B: 'β', A: 'α' },
        rightAngleAt: 'C',
        w: 320,
        h: 200,
      }),
      parts: [
        { id: 'alpha', type: 'expr', label: R`$$\alpha=$$ ___° (Simplify your answer.)`, correctAnswer: '79' },
        { id: 'b', type: 'expr', label: 'b = (Round to three decimal places as needed.)', correctAnswer: '1.944' },
        { id: 'c', type: 'expr', label: 'c = (Round to three decimal places as needed.)', correctAnswer: '10.187' },
      ],
    },
    // 10
    {
      prompt: R`The angle of depression from the top of a lighthouse 125 ft above the surface of the water to a buoy is $$10^\circ$$. How far is the buoy from the lighthouse?

Let x be the distance between the base of the lighthouse and the buoy. Write a trigonometric equation giving the relation between x, height of the lighthouse, and the angle of elevation from the buoy. (Simplify your answer. Use integers or fractions for any numbers in the equation. Type any angle measures in degrees.)`,
      svg: F.sightLineSvg({ heightLabel: '125 ft', groundLabel: 'x', angleLabel: '10°', kind: 'depression' }),
      parts: [
        { id: 'eq', type: 'equation', variable: 'x', solution: '125/tan(10)', degrees: true, trigCalls: { min: 1 }, label: 'Equation:' },
        { id: 'dist', type: 'expr', label: 'The buoy is about', correctAnswer: '708.910' },
        { id: 'unit', type: 'mc', label: 'The buoy is about ___ from the base of the lighthouse. (Simplify your answer. Type an integer or decimal rounded to three decimal places as needed.)', choices: ['feet per degree', 'degrees', 'feet'], correctIndex: 2 },
      ],
    },
    // 11
    {
      prompt: R`The angle of elevation of the top of the TV antenna mounted on top of a certain tower is measured to be $$82^\circ51'25''$$ at a point 170 ft from the base of the tower. How tall is the tower plus TV antenna?`,
      parts: [{ id: 'h', type: 'expr', label: 'The height of the tower and TV antenna is ___ feet. (Round to the nearest foot as needed.)', correctAnswer: '1357' }],
    },
    // 12
    {
      prompt: R`A man is located 150 feet from an observation deck. The angle of elevation from the man to the bottom edge of the deck is $$30^\circ$$ and to the top edge of the deck is $$40^\circ$$. What is the height of the observation deck itself?`,
      svg: F.twoAngleSvg({ dLabel: '150 ft', lowLabel: '30°', highLabel: '40°', lowDeg: 30, highDeg: 40 }),
      parts: [{ id: 'h', type: 'expr', label: 'The height of the observation deck is about ___ feet. (Simplify your answer. Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '39.262' }],
    },
    // 13
    {
      prompt: 'Solve the triangle, if possible.',
      svg: F.triangleSvg({
        vertices: F.onBase('B', 'A', 'C', 60, 25),
        vertexLabels: { A: 'A', B: 'B', C: 'C' },
        sideLabels: { BA: '7', BC: 'a', CA: 'b' },
        angleLabels: { C: '95°', B: '60°' },
      }),
      parts: [
        { id: 'A', type: 'expr', label: R`Determine the value of A. $$A=$$ ___° (Round to the nearest whole number as needed.)`, correctAnswer: '25' },
        { id: 'a', type: 'expr', label: 'Determine the value of a. a = (Round to three decimal places as needed.)', correctAnswer: '2.970' },
        { id: 'b', type: 'expr', label: 'Determine the value of b. b = (Round to three decimal places as needed.)', correctAnswer: '6.085' },
      ],
    },
    // 14
    {
      prompt: R`The figure shows a 1250-yard-long sand beach and an oil platform in the ocean. The angle made with the platform from one end of the beach is $$83^\circ$$ and from the other end is $$76^\circ$$. Find the distance of the oil platform from each end of the beach.`,
      svg: F.triangleSvg({
        vertices: F.onBase('P', 'Q', 'T', 83, 76),
        vertexLabels: { T: 'The Platform' },
        sideLabels: { PQ: '1250-yard' },
        angleLabels: { P: '83°', Q: '76°' },
        w: 340,
      }),
      parts: [
        { id: 'far', type: 'expr', label: 'The platform is about ___ yards from one end of the beach (the larger distance) (Use descending order. Round to three decimal places as needed.)', correctAnswer: '3462.036' },
        { id: 'near', type: 'expr', label: 'and ___ yards from the other (the smaller distance).', correctAnswer: '3384.426' },
      ],
    },
    // 15
    { prompt: R`Find the area of the triangle having the given measurements.

$$B=46^\circ,\ a=23\text{ feet},\ c=41\text{ feet}$$`, parts: [{ id: 'area', type: 'expr', label: 'Area ≈ (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '339.169' }, { id: 'unit', type: 'mc', label: 'Units:', choices: UNITS_AREA, correctIndex: 0 }] },
    // 16
    { prompt: R`Find the area of the triangle having the given measurements.

$$B=49^\circ,\ a=20\text{ feet},\ c=35\text{ feet}$$`, parts: [{ id: 'area', type: 'expr', label: 'Area ≈ (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '264.148' }, { id: 'unit', type: 'mc', label: 'Units:', choices: UNITS_AREA, correctIndex: 0 }] },
    // 17
    { prompt: R`Use Heron's area formula to find the area of the triangle with the given side lengths.

$$a=14\quad b=7\quad c=16$$

What is the area of the triangle?`, parts: [{ id: 'area', type: 'expr', label: 'Area = (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '48.923' }] },
    // 18
    {
      prompt: R`Two boats start at the same point and speed away along courses that form a $$110^\circ$$ angle. If one boat travels at 30 mph and the other boat travels at 38 mph, how far apart are the boats after 30 min.`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct answer below.', choices: ['A. 26 mi', 'B. 29 mi', 'C. 30 mi', 'D. 27 mi', 'E. 28 mi'], correctIndex: 4 }],
    },
    // 19
    { prompt: R`Convert from DMS to decimal form.

$$79^\circ9'$$`, parts: [{ id: 'v', type: 'expr', label: R`$$79^\circ9'\approx$$ ___° (Round to three decimal places as needed.)`, correctAnswer: '79.150' }] },
    // 20
    {
      prompt: R`Convert from decimal form to degrees, minutes, seconds (DMS).

$$48.4^\circ$$`,
      parts: [
        { id: 'deg', type: 'expr', label: 'degrees (°)', correctAnswer: '48' },
        { id: 'min', type: 'expr', label: 'minutes (′)', correctAnswer: '24' },
        { id: 'sec', type: 'expr', label: 'seconds (″)', correctAnswer: '0' },
      ],
    },
    // 21
    { prompt: R`Convert the following degree measure to radian measure.

$$120^\circ$$`, parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$120^\circ=$$ ___ radians (Simplify your answer. Type an integer or a fraction.)`, correctAnswer: '2*pi/3' }] },
    // 22
    { prompt: R`Convert the following degree measure to radian measure.

$$300^\circ$$`, parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$300^\circ=$$ ___ radians (Simplify your answer. Type an integer or a fraction.)`, correctAnswer: '5*pi/3' }] },
    // 23
    { prompt: R`Convert from radians to degrees

$$\dfrac{\pi}{10}$$`, parts: [{ id: 'v', type: 'expr', label: R`$$\dfrac{\pi}{10}=$$ ___° (Type an integer or a decimal.)`, correctAnswer: '18' }] },
    // 24
    {
      prompt: R`Find the length of the arc, s, intercepted by the given central angle, $$\theta$$, in a circle of radius, r.

$$\theta=65\text{ rad};\ r=17\text{ ft}$$`,
      parts: [
        { id: 's', type: 'expr', label: 's =', correctAnswer: '1105' },
        { id: 'unit', type: 'mc', label: 'Units:', choices: [{ text: R`$$\text{ft}^2$$` }, { text: R`$$\text{ft}$$` }, { text: R`$$\text{ft}^3$$` }], correctIndex: 1 },
      ],
    },
    // 25
    { prompt: R`To the nearest inch, find the perimeter of a $$60^\circ$$ sector cut from a circular disc of radius 15 in.`, parts: [{ id: 'v', type: 'expr', label: 'The perimeter is approximately ___ in. (Simplify your answer. Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '45.708' }] },
    // 26  (printed order: sin, cos, tan, csc, sec, cot)
    {
      prompt: R`Point P is on the terminal side of angle $$\theta$$. Evaluate the six trigonometric functions for $$\theta$$.

$$P(-15,8)$$`,
      parts: [ex('sin', '8/17'), ex('cos', '-15/17'), ex('tan', '-8/15'), ex('csc', '17/8'), ex('sec', '-17/15'), ex('cot', '-15/8')],
    },
    // 27
    { prompt: R`Find the sign of the given value without the use of a calculator.

$$\cos 149^\circ$$`, parts: [{ id: 'sign', type: 'mc', label: R`The sign of $$\cos 149^\circ$$ is`, choices: ['positive.', 'negative.'], correctIndex: 1 }] },
    // 28
    {
      prompt: R`Evaluate without using a calculator by using ratios in a reference triangle.

$$\cos 225^\circ$$`,
      parts: [
        { id: 'ref', type: 'expr', label: 'The reference angle is ___°. (Simplify your answer.)', correctAnswer: '45' },
        { id: 'v', type: 'expr', exact: true, label: R`$$\cos 225^\circ=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '-sqrt(2)/2' },
      ],
    },
    // 29
    { prompt: R`Evaluate without using a calculator by using ratios in a reference triangle.

$$\sec\dfrac{\pi}{3}$$`, parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\sec\dfrac{\pi}{3}=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '2' }] },
    // 30
    {
      prompt: R`Evaluate without using a calculator.

Find $$\sin\theta$$ and $$\tan\theta$$ if $$\cos\theta=\dfrac{5}{7}$$ and $$\cot\theta>0$$.`,
      parts: [
        { id: 'sin', type: 'expr', exact: true, label: R`$$\sin\theta=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed. Rationalize all denominators.)`, correctAnswer: '2*sqrt(6)/7' },
        { id: 'tan', type: 'expr', exact: true, label: R`$$\tan\theta=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed. Rationalize all denominators.)`, correctAnswer: '2*sqrt(6)/5' },
      ],
    },
    // 31
    {
      prompt: R`Evaluate without using a calculator.

Find $$\tan\theta$$ and $$\sec\theta$$ if $$\sin\theta=-\dfrac{5}{6}$$ and $$\cos\theta>0$$.`,
      parts: [
        { id: 'tan', type: 'expr', exact: true, label: R`$$\tan\theta=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed.)`, correctAnswer: '-5/sqrt(11)' },
        { id: 'sec', type: 'expr', exact: true, label: R`$$\sec\theta=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed.)`, correctAnswer: '6/sqrt(11)' },
      ],
    },
    // 32
    {
      prompt: R`Find $$\sec\theta$$ and $$\csc\theta$$ if $$\cot\theta=-\dfrac{12}{35}$$ and $$\cos\theta<0$$.`,
      parts: [
        { id: 'sec', type: 'expr', exact: true, label: R`$$\sec\theta=$$ (Type an exact answer, using radicals as needed. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '-37/12' },
        { id: 'csc', type: 'expr', exact: true, label: R`$$\csc\theta=$$ (Type an exact answer, using radicals as needed. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '37/35' },
      ],
    },
  ],
};
