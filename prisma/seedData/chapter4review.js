// Chapter 4 Review Assignment — transcribed from the printed assignment + answer key.
// (The separate "Chapter 4 Assessment" is intentionally not included.)
const R = String.raw;
const F = require('../../lib/trigFigures');
const d = (x) => (x * Math.PI) / 180;

const trig = (name) => '$$' + '\\' + name + R`\theta=$$`;
const ex = (name, answer) => ({ id: name, type: 'expr', exact: true, label: trig(name), correctAnswer: answer });
const UNITS_AREA = ['square feet.', 'feet.', 'square meter.', 'meter.'];

module.exports = {
  title: 'Chapter 4 Review',
  questions: [
    // 1  (printed order: sin, cos, tan, sec, csc, cot)
    {
      prompt: 'Find the six trigonometric function values of the specified angle.',
      svg: F.rightTriangleSvg({ adj: 8, opp: 7, adjLabel: '8', oppLabel: '7', angleLabel: 'θ' }),
      parts: [ex('sin', '7*sqrt(113)/113'), ex('cos', '8*sqrt(113)/113'), ex('tan', '7/8'), ex('sec', 'sqrt(113)/8'), ex('csc', 'sqrt(113)/7'), ex('cot', '8/7')],
    },
    // 2  (printed order: cos, tan, csc, sec, cot)
    {
      prompt: R`Assume that $$\theta$$ is an acute angle in a right triangle satisfying the given condition. Evaluate the remaining trigonometric functions.

$$\sin\theta=\dfrac{5}{14}$$`,
      parts: [ex('cos', '3*sqrt(19)/14'), ex('tan', '5*sqrt(19)/57'), ex('csc', '14/5'), ex('sec', '14*sqrt(19)/57'), ex('cot', '3*sqrt(19)/5')],
    },
    // 3
    {
      prompt: R`Find the exact value of $$\sin\left(\dfrac{\pi}{3}\right)$$.`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\sin\left(\dfrac{\pi}{3}\right)=$$ (Type a simplified fraction. Type an exact answer, using radicals as needed. Rationalize the denominator.)`, correctAnswer: 'sqrt(3)/2' }],
    },
    // 4
    {
      prompt: R`Find the exact value of $$\cos\left(\dfrac{\pi}{3}\right)$$.`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\cos\left(\dfrac{\pi}{3}\right)=$$ (Type a simplified fraction. Type an exact answer, using radicals as needed. Rationalize the denominator.)`, correctAnswer: '1/2' }],
    },
    // 5
    {
      prompt: R`Evaluate $$\csc\left(\dfrac{\pi}{4}\right)$$ using a calculator. Give an exact value, not an approximate answer.`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\csc\left(\dfrac{\pi}{4}\right)=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, correctAnswer: 'sqrt(2)' }],
    },
    // 6
    {
      prompt: R`Evaluate using a calculator. Be sure the calculator is in the correct mode.

$$\cos 38^\circ36'$$`,
      parts: [{ id: 'v', type: 'expr', label: R`$$\cos 38^\circ36'=$$ (Simplify your answer. Type an integer or a decimal. Round to three decimal places as needed.)`, correctAnswer: '0.782' }],
    },
    // 7
    {
      prompt: R`Evaluate using a calculator. Be sure the calculator is in the correct mode.

$$\sec 62^\circ$$`,
      parts: [{ id: 'v', type: 'expr', label: R`$$\sec 62^\circ=$$ (Round to three decimal places as needed.)`, correctAnswer: '2.130' }],
    },
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

$$\beta=23^\circ;\ a=5$$`,
      svg: F.triangleSvg({
        vertices: { B: [0, 0], C: [5, 0], A: [5, 5 * Math.tan(d(23))] },
        vertexLabels: { A: 'A', B: 'B', C: 'C' },
        sideLabels: { BC: 'a', CA: 'b', BA: 'c' },
        angleLabels: { B: 'β', A: 'α' },
        rightAngleAt: 'C',
        w: 320,
        h: 200,
      }),
      parts: [
        { id: 'alpha', type: 'expr', label: R`$$\alpha=$$ ___° (Simplify your answer.)`, correctAnswer: '67' },
        { id: 'b', type: 'expr', label: 'b = (Round to three decimal places as needed.)', correctAnswer: '2.122' },
        { id: 'c', type: 'expr', label: 'c = (Round to three decimal places as needed.)', correctAnswer: '5.432' },
      ],
    },
    // 10
    {
      prompt: R`The angle of depression from the top of a lighthouse 125 ft above the surface of the water to a buoy is $$12^\circ$$. How far is the buoy from the lighthouse?

Let x be the distance between the base of the lighthouse and the buoy. Write a trigonometric equation giving the relation between x, height of the lighthouse, and the angle of elevation from the buoy. (Simplify your answer. Use integers or fractions for any numbers in the equation. Type any angle measures in degrees.)`,
      svg: F.sightLineSvg({ heightLabel: '125 ft', groundLabel: 'x', angleLabel: '12°', kind: 'depression' }),
      parts: [
        { id: 'eq', type: 'equation', variable: 'x', solution: '125/tan(12)', degrees: true, trigCalls: { min: 1 }, label: 'Equation:' },
        { id: 'dist', type: 'expr', label: 'The buoy is about', correctAnswer: '588.079' },
        { id: 'unit', type: 'mc', label: 'The buoy is about ___ from the base of the lighthouse. (Simplify your answer. Type an integer or decimal rounded to three decimal places as needed.)', choices: ['feet per degree', 'degrees', 'feet'], correctIndex: 2 },
      ],
    },
    // 11
    {
      prompt: R`The angle of elevation of the top of the TV antenna mounted on top of a certain tower is measured to be $$85^\circ7'8''$$ at a point 180 ft from the base of the tower. How tall is the tower plus TV antenna?`,
      parts: [{ id: 'h', type: 'expr', label: 'The height of the tower and TV antenna is ___ feet. (Round to the nearest foot as needed.)', correctAnswer: '2108' }],
    },
    // 12
    {
      prompt: R`A man is located 200 feet from an observation deck. The angle of elevation from the man to the bottom edge of the deck is $$30^\circ$$ and to the top edge of the deck is $$45^\circ$$. What is the height of the observation deck itself?`,
      svg: F.twoAngleSvg({ dLabel: '200 ft', lowLabel: '30°', highLabel: '45°', lowDeg: 30, highDeg: 45 }),
      parts: [{ id: 'h', type: 'expr', label: 'The height of the observation deck is about ___ feet. (Simplify your answer. Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '84.530' }],
    },
    // 13
    {
      prompt: 'Solve the triangle, if possible.',
      svg: F.triangleSvg({
        vertices: F.onBase('B', 'A', 'C', 45, 50),
        vertexLabels: { A: 'A', B: 'B', C: 'C' },
        sideLabels: { BA: '6', BC: 'a', CA: 'b' },
        angleLabels: { C: '85°', B: '45°' },
        nudge: { angle: { B: [8, -6] } },
      }),
      parts: [
        { id: 'A', type: 'expr', label: R`Determine the value of A. $$A=$$ ___° (Round to the nearest whole number as needed.)`, correctAnswer: '50' },
        { id: 'a', type: 'expr', label: 'Determine the value of a. a = (Round to three decimal places as needed.)', correctAnswer: '4.614' },
        { id: 'b', type: 'expr', label: 'Determine the value of b. b = (Round to three decimal places as needed.)', correctAnswer: '4.259' },
      ],
    },
    // 14
    {
      prompt: R`The figure shows a 1200-yard-long sand beach and an oil platform in the ocean. The angle made with the platform from one end of the beach is $$83^\circ$$ and from the other end is $$75^\circ$$. Find the distance of the oil platform from each end of the beach.`,
      svg: F.triangleSvg({
        vertices: F.onBase('P', 'Q', 'T', 83, 75),
        vertexLabels: { T: 'The Platform' },
        sideLabels: { PQ: '1200-yard beach' },
        angleLabels: { P: '83°', Q: '75°' },
        stretch: [2.4, 1],
        angleDist: 52,
        w: 380,
        h: 260,
      }),
      parts: [
        { id: 'far', type: 'expr', label: 'The platform is about ___ yards from one end of the beach (the larger distance) (Use descending order. Round to three decimal places as needed.)', correctAnswer: '3179.483' },
        { id: 'near', type: 'expr', label: 'and ___ yards from the other (the smaller distance).', correctAnswer: '3094.209' },
      ],
    },
    // 15
    {
      prompt: R`Find the area of the triangle having the given measurements.

$$B=30^\circ,\ a=25\text{ feet},\ c=42\text{ feet}$$`,
      parts: [
        { id: 'area', type: 'expr', label: 'Area ≈ (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '262.500' },
        { id: 'unit', type: 'mc', label: 'Units:', choices: UNITS_AREA, correctIndex: 0 },
      ],
    },
    // 16
    {
      prompt: R`Find the area of the triangle having the given measurements.

$$B=38^\circ,\ a=19\text{ feet},\ c=35\text{ feet}$$`,
      parts: [
        { id: 'area', type: 'expr', label: 'Area ≈ (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '204.707' },
        { id: 'unit', type: 'mc', label: 'Units:', choices: UNITS_AREA, correctIndex: 0 },
      ],
    },
    // 17
    {
      prompt: R`Use Heron's area formula to find the area of the triangle with the given side lengths.

$$a=13\quad b=8\quad c=15$$

What is the area of the triangle?`,
      parts: [{ id: 'area', type: 'expr', label: 'Area = (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '51.962' }],
    },
    // 18
    {
      prompt: R`Two boats start at the same point and speed away along courses that form a $$110^\circ$$ angle. If one boat travels at 26 mph and the other boat travels at 38 mph, how far apart are the boats after 30 min.`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct answer below.', choices: ['A. 27 mi', 'B. 25 mi', 'C. 24 mi', 'D. 28 mi', 'E. 26 mi'], correctIndex: 4 }],
    },
    // 19
    {
      prompt: R`Convert from DMS to decimal form.

$$25^\circ38'$$`,
      parts: [{ id: 'v', type: 'expr', label: R`$$25^\circ38'\approx$$ ___° (Round to three decimal places as needed.)`, correctAnswer: '25.633' }],
    },
    // 20
    {
      prompt: R`Convert from decimal form to degrees, minutes, seconds (DMS).

$$25.2^\circ$$`,
      parts: [
        { id: 'deg', type: 'expr', label: 'degrees (°)', correctAnswer: '25' },
        { id: 'min', type: 'expr', label: 'minutes (′)', correctAnswer: '12' },
        { id: 'sec', type: 'expr', label: 'seconds (″)', correctAnswer: '0' },
      ],
    },
    // 21
    {
      prompt: R`Convert the following degree measure to radian measure.

$$30^\circ$$`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$30^\circ=$$ ___ radians (Simplify your answer. Type an integer or a fraction.)`, correctAnswer: 'pi/6' }],
    },
    // 22
    {
      prompt: R`Convert the following degree measure to radian measure.

$$315^\circ$$`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$315^\circ=$$ ___ radians (Simplify your answer. Type an integer or a fraction.)`, correctAnswer: '7*pi/4' }],
    },
    // 23
    {
      prompt: R`Convert from radians to degrees

$$\dfrac{3\pi}{10}$$`,
      parts: [{ id: 'v', type: 'expr', label: R`$$\dfrac{3\pi}{10}=$$ ___° (Type an integer or a decimal.)`, correctAnswer: '54' }],
    },
    // 24
    {
      prompt: R`Find the length of the arc, s, intercepted by the given central angle, $$\theta$$, in a circle of radius, r.

$$\theta=55\text{ rad};\ r=18\text{ ft}$$`,
      parts: [
        { id: 's', type: 'expr', label: 's =', correctAnswer: '990' },
        { id: 'unit', type: 'mc', label: 'Units:', choices: [{ text: R`$$\text{ft}^3$$` }, { text: R`$$\text{ft}$$` }, { text: R`$$\text{ft}^2$$` }], correctIndex: 1 },
      ],
    },
    // 25
    {
      prompt: R`To the nearest inch, find the perimeter of a $$50^\circ$$ sector cut from a circular disc of radius 9 in.`,
      parts: [{ id: 'v', type: 'expr', label: 'The perimeter is approximately ___ in. (Simplify your answer. Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '25.854' }],
    },
    // 26  (printed order: sin, cos, tan, csc, sec, cot)
    {
      prompt: R`Point P is on the terminal side of angle $$\theta$$. Evaluate the six trigonometric functions for $$\theta$$.

$$P(8,15)$$`,
      parts: [ex('sin', '15/17'), ex('cos', '8/17'), ex('tan', '15/8'), ex('csc', '17/15'), ex('sec', '17/8'), ex('cot', '8/15')],
    },
    // 27
    {
      prompt: R`Find the sign of the given value without the use of a calculator.

$$\cos 339^\circ$$`,
      parts: [{ id: 'sign', type: 'mc', label: R`The sign of $$\cos 339^\circ$$ is`, choices: ['positive.', 'negative.'], correctIndex: 0 }],
    },
    // 28
    {
      prompt: R`Evaluate without using a calculator by using ratios in a reference triangle.

$$\cos 315^\circ$$`,
      parts: [
        { id: 'ref', type: 'expr', label: 'The reference angle is ___°. (Simplify your answer.)', correctAnswer: '45' },
        { id: 'v', type: 'expr', exact: true, label: R`$$\cos 315^\circ=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, correctAnswer: 'sqrt(2)/2' },
      ],
    },
    // 29
    {
      prompt: R`Evaluate without using a calculator by using ratios in a reference triangle.

$$\sec\dfrac{2\pi}{3}$$`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$\sec\dfrac{2\pi}{3}=$$ (Simplify your answer, including any radicals. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '-2' }],
    },
    // 30
    {
      prompt: R`Evaluate without using a calculator.

Find $$\sin\theta$$ and $$\tan\theta$$ if $$\cos\theta=\dfrac{2}{3}$$ and $$\cot\theta>0$$.`,
      parts: [
        { id: 'sin', type: 'expr', exact: true, label: R`$$\sin\theta=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed. Rationalize all denominators.)`, correctAnswer: 'sqrt(5)/3' },
        { id: 'tan', type: 'expr', exact: true, label: R`$$\tan\theta=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed. Rationalize all denominators.)`, correctAnswer: 'sqrt(5)/2' },
      ],
    },
    // 31
    {
      prompt: R`Evaluate without using a calculator.

Find $$\tan\theta$$ and $$\sec\theta$$ if $$\sin\theta=-\dfrac{3}{4}$$ and $$\cos\theta>0$$.`,
      parts: [
        { id: 'tan', type: 'expr', exact: true, label: R`$$\tan\theta=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed.)`, correctAnswer: '-3/sqrt(7)' },
        { id: 'sec', type: 'expr', exact: true, label: R`$$\sec\theta=$$ (Type an integer or a simplified fraction. Type an exact answer, using radicals as needed.)`, correctAnswer: '4/sqrt(7)' },
      ],
    },
    // 32
    {
      prompt: R`Find $$\sec\theta$$ and $$\csc\theta$$ if $$\cot\theta=-\dfrac{7}{24}$$ and $$\cos\theta<0$$.`,
      parts: [
        { id: 'sec', type: 'expr', exact: true, label: R`$$\sec\theta=$$ (Type an exact answer, using radicals as needed. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '-25/7' },
        { id: 'csc', type: 'expr', exact: true, label: R`$$\csc\theta=$$ (Type an exact answer, using radicals as needed. Use integers or fractions for any numbers in the expression.)`, correctAnswer: '25/24' },
      ],
    },
  ],
};
