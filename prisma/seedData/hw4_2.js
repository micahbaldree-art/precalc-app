// HW 4.2 — transcribed from the printed assignment + answer key.
const R = String.raw;
const F = require('../../lib/trigFigures');
const d = (x) => (x * Math.PI) / 180;

const UNITS_AREA = ['square feet.', 'feet.', 'square meter.', 'meter.'];

module.exports = {
  title: 'HW 4.2 - Law of Sines and Law of Cosines',
  questions: [
    // 1
    {
      prompt: 'Solve the triangle, if possible.',
      svg: F.triangleSvg({
        vertices: F.onBase('B', 'A', 'C', 45, 40),
        vertexLabels: { A: 'A', B: 'B', C: 'C' },
        sideLabels: { BA: '7', BC: 'a', CA: 'b' },
        angleLabels: { C: '95°', B: '45°' },
      }),
      parts: [
        { id: 'A', type: 'expr', label: R`$$A=$$ ___° (Round to the nearest whole number as needed.)`, correctAnswer: '40' },
        { id: 'a', type: 'expr', label: 'a = (Round to three decimal places as needed.)', correctAnswer: '4.517' },
        { id: 'b', type: 'expr', label: 'b = (Round to three decimal places as needed.)', correctAnswer: '4.969' },
      ],
    },
    // 2
    {
      prompt: R`Solve the following triangle.

$$A=31^\circ\qquad B=30^\circ\qquad c=11\ \text{m}$$`,
      parts: [
        { id: 'C', type: 'expr', label: R`$$C=$$ ___°`, correctAnswer: '119' },
        { id: 'a', type: 'expr', label: 'a ≈ ___ m (Round to three decimal places as needed.)', correctAnswer: '6.478' },
        { id: 'b', type: 'expr', label: 'b ≈ ___ m (Round to three decimal places as needed.)', correctAnswer: '6.288' },
      ],
    },
    // 3
    {
      prompt: R`Solve the triangle.

$$A=34^\circ\qquad C=116^\circ\qquad c=53$$`,
      parts: [
        { id: 'B', type: 'expr', label: R`$$B=$$ ___°`, correctAnswer: '30' },
        { id: 'a', type: 'expr', label: 'a = (Round to three decimal places as needed.)', correctAnswer: '32.974' },
        { id: 'b', type: 'expr', label: 'b = (Round to three decimal places as needed.)', correctAnswer: '29.484' },
      ],
    },
    // 4
    {
      prompt: R`Two markers A and B on the same side of a canyon rim are 54 feet apart. A third marker C, located across the rim, is positioned so that $$\angle BAC=65^\circ$$ and $$\angle ABC=55^\circ$$. Complete parts (a) and (b) below.

(a) Find the distance between C and A.

(b) Find the distance between the two canyon rims. (Assume they are parallel.)

(Do not round until the final answer. Then round to three decimal places as needed.)`,
      svg: F.triangleSvg({
        vertices: F.onBase('A', 'B', 'C', 65, 55),
        vertexLabels: { A: 'A', B: 'B', C: 'C' },
        sideLabels: { AB: '54 feet' },
        angleLabels: { A: '65°', B: '55°' },
      }),
      parts: [
        { id: 'CA', type: 'expr', label: '(a) The distance between C and A is approximately ___ feet.', correctAnswer: '51.077' },
        { id: 'rims', type: 'expr', label: '(b) The distance between the two canyon rims is about ___ feet.', correctAnswer: '46.292' },
      ],
    },
    // 5
    {
      prompt: R`Radio direction finders are placed at points A and B, which are 3.51 mi apart on an east-west line, with A west of B. The transmitter has bearings $$23.8^\circ$$ from A and $$305.6^\circ$$ from B. Find the distance from A.`,
      svg: F.radioBearingsSvg({ baseLabel: '3.51 mi', bearingA: 23.8, bearingB: 305.6 }),
      parts: [{ id: 'd', type: 'expr', label: 'The distance of the transmitter from A is ___ miles. (Simplify your answer. Type an integer or a decimal. Do not round until the final answer. Then round to three decimal places as needed.)', correctAnswer: '2.087' }],
    },
    // 6
    {
      prompt: R`Two observers are 600 ft apart on opposite sides of a flagpole. The angles of elevation from the observers to the top of the pole are $$16^\circ$$ and $$15^\circ$$. Find the height of the flagpole.`,
      svg: F.triangleSvg({
        vertices: F.onBase('A', 'B', 'C', 16, 15),
        vertexLabels: { A: 'A', B: 'B', C: 'C' },
        sideLabels: { AB: '600 ft' },
        angleLabels: { A: '16°', B: '15°' },
        altitude: { from: 'C', onto: ['A', 'B'], label: 'h' },
      }),
      parts: [{ id: 'h', type: 'expr', label: 'The flagpole is ___ ft high. (Round to three decimal places as needed)', correctAnswer: '83.109' }],
    },
    // 7
    {
      prompt: R`Determine whether the statement is true or false. Justify your answer.

The ratio of the sines of any two angles in a triangle equals the ratio of the lengths of their opposite sides.`,
      parts: [{
        id: 'mc', type: 'mc', label: 'Choose the correct answer below.',
        choices: [
          { text: R`A. False, by the Law of Sines, $$\dfrac{\sin A}{a}=\dfrac{\sin B}{b}$$ which is equivalent to $$\dfrac{\sin A}{\sin B}=a\cdot b$$.` },
          { text: R`B. False, by the Law of Sines, $$\dfrac{\sin A}{a}=\dfrac{\sin B}{b}$$ which is equivalent to $$\dfrac{\sin B}{a}=\dfrac{\sin A}{b}$$.` },
          { text: R`C. True, by the Law of Sines, $$\dfrac{\sin A}{a}=\dfrac{\sin B}{b}$$ which is equivalent to $$\dfrac{\sin A}{\sin B}=\dfrac{a}{b}$$.` },
          { text: R`D. False, by the Law of Sines, $$\dfrac{\sin A}{a}=\dfrac{\sin B}{b}$$ which is equivalent to $$\dfrac{\sin A}{\sin B}=a\cdot b$$.` },
        ],
        correctIndex: 2,
      }],
    },
    // 8
    {
      prompt: R`The shortest side of a triangle with angles $$50^\circ$$, $$60^\circ$$, and $$70^\circ$$ has length 6. What is the length of the longest side?`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct answer below.', choices: ['A. 4.891', 'B. 5.307', 'C. 7.360', 'D. 6.510', 'E. 6.783'], correctIndex: 2 }],
    },
    // 9
    {
      prompt: R`Juan wants to find the distance between two points A and B on opposite sides of a building. He locates a point at C that is 20 ft from A and 60 ft from B as illustrated in the figure. If the angle C is $$30^\circ$$, find distance AB.`,
      svg: F.triangleSvg({
        vertices: { C: [0, 0], A: [20 * Math.cos(d(105)), 20 * Math.sin(d(105))], B: [60 * Math.cos(d(75)), 60 * Math.sin(d(75))] },
        vertexLabels: { A: 'A', B: 'B', C: 'C' },
        sideLabels: { CA: '20 ft', CB: '60 ft' },
        angleLabels: { C: '30°' },
        angleDist: 62,
        w: 280,
        h: 300,
      }),
      parts: [{ id: 'd', type: 'expr', label: 'The distance from A to B is about ___ feet. (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '43.835' }],
    },
    // 10
    {
      prompt: R`A ball is kicked at an angle of $$7^\circ$$ to the right of a receiver standing 60 yards away from the kicker, as shown in the figure. The kicked ball travels 86 yards. How far must the receiver run to catch the ball?`,
      svg: F.triangleSvg({
        vertices: { C: [0, 0], A: [60 * Math.cos(d(3.5)), 60 * Math.sin(d(3.5))], B: [86 * Math.cos(d(3.5)), -86 * Math.sin(d(3.5))] },
        vertexLabels: { A: 'A', B: 'B', C: 'C' },
        sideLabels: { CA: '60 yd', CB: '86 yd' },
        angleLabels: { C: '7°' },
        angleDist: 70,
        w: 460,
        h: 150,
      }),
      parts: [{ id: 'd', type: 'expr', label: 'The receiver must run ___ yards. (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '27.439' }],
    },
    // 11
    {
      prompt: 'What is the area of a regular dodecagon (12-sided figure) inscribed in a circle of radius 12?',
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct answer below.', choices: ['A. 437', 'B. 442', 'C. 427', 'D. 447', 'E. 432'], correctIndex: 4 }],
    },
    // 12
    {
      prompt: R`Two boats start at the same point and speed away along courses that form a $$110^\circ$$ angle. If one boat travels at 24 mph and the other boat travels at 34 mph, how far apart are the boats after 30 min.`,
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct answer below.', choices: ['A. 26 mi', 'B. 24 mi', 'C. 25 mi', 'D. 22 mi', 'E. 23 mi'], correctIndex: 1 }],
    },
    // 13
    {
      prompt: R`Find the area of the triangle having the given measurements.

$$B=50^\circ,\ a=19\text{ feet},\ c=41\text{ feet}$$`,
      parts: [
        { id: 'area', type: 'expr', label: 'Area ≈ (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '298.374' },
        { id: 'unit', type: 'mc', label: 'Units:', choices: UNITS_AREA, correctIndex: 0 },
      ],
    },
    // 14
    {
      prompt: R`Find the area of the triangle having the given measurements.

$$B=40^\circ,\ a=15\text{ feet},\ c=44\text{ feet}$$`,
      parts: [
        { id: 'area', type: 'expr', label: 'Area ≈ (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '212.120' },
        { id: 'unit', type: 'mc', label: 'Units:', choices: UNITS_AREA, correctIndex: 0 },
      ],
    },
    // 15
    {
      prompt: R`Use Heron's area formula to find the area of the triangle with the given side lengths.

$$a=15\quad b=10\quad c=7$$

What is the area of the triangle?`,
      parts: [{ id: 'area', type: 'expr', label: 'Area = (Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '29.394' }],
    },
  ],
};
