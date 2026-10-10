// HW 4.3 — transcribed from the printed assignment + answer key.
const R = String.raw;
const F = require('../../lib/trigFigures');

const dms = (a, b, c) => [
  { id: 'deg', type: 'expr', label: 'degrees (°)', correctAnswer: String(a) },
  { id: 'min', type: 'expr', label: 'minutes (′)', correctAnswer: String(b) },
  { id: 'sec', type: 'expr', label: 'seconds (″)', correctAnswer: String(c) },
];

module.exports = {
  title: 'HW 4.3 - Radian Measure and Circular Motion',
  questions: [
    // 1
    {
      prompt: R`Convert from DMS to decimal form.

$$27^\circ31'$$`,
      parts: [{ id: 'v', type: 'expr', label: R`$$27^\circ31'\approx$$ ___° (Round to three decimal places as needed.)`, correctAnswer: '27.517' }],
    },
    // 2
    {
      prompt: R`Convert from decimal form to degrees, minutes, seconds (DMS).

$$80.5^\circ$$`,
      parts: dms(80, 30, 0),
    },
    // 3
    {
      prompt: R`Convert the angle to DMS notation.

$$71.27^\circ$$`,
      parts: dms(71, 16, 12),
    },
    // 4
    {
      prompt: R`Convert the following degree measure to radian measure.

$$330^\circ$$`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$330^\circ=$$ ___ radians (Simplify your answer. Type an integer or a fraction.)`, correctAnswer: '11*pi/6' }],
    },
    // 5
    {
      prompt: R`Convert the following degree measure to radian measure.

$$90^\circ$$`,
      parts: [{ id: 'v', type: 'expr', exact: true, label: R`$$90^\circ=$$ ___ radians (Simplify your answer. Type an integer or a fraction.)`, correctAnswer: 'pi/2' }],
    },
    // 6
    {
      prompt: R`Convert the following degree measure to radian measure.

$$70.54^\circ$$`,
      parts: [{ id: 'v', type: 'expr', label: R`$$70.54^\circ=$$ ___ radians (Type an integer or a decimal. Round to the nearest thousandth as needed.)`, correctAnswer: '1.231' }],
    },
    // 7
    {
      prompt: R`Convert from DMS to radians.

$$61^\circ6'$$`,
      parts: [{ id: 'v', type: 'expr', label: R`$$61^\circ6'=$$ ___ rad (Round to three decimal places as needed.)`, correctAnswer: '1.066' }],
    },
    // 8
    {
      prompt: R`Convert from radians to degrees.

$$7$$`,
      parts: [{ id: 'v', type: 'expr', label: '7 radians ≈ ___° (Do not round until the final answer. Then round to the nearest thousandth as needed.)', correctAnswer: '401.070' }],
    },
    // 9
    {
      prompt: R`To the nearest inch, find the perimeter of a $$70^\circ$$ sector cut from a circular disc of radius 11 in.`,
      parts: [{ id: 'v', type: 'expr', label: 'The perimeter is approximately ___ in. (Simplify your answer. Type an integer or decimal rounded to three decimal places as needed.)', correctAnswer: '35.439' }],
    },
    // 10
    {
      prompt: R`Two patrol boats leave Cape May at the same time, the same speed, but on different bearings. One has bearing $$46^\circ40'$$ and the other has bearing $$52^\circ12'$$. How far apart will they be when they are 21 miles from Cape May?`,
      svg: F.bearingRaysSvg({ rays: [{ bearing: 46 + 40 / 60, label: "46°40′" }, { bearing: 52 + 12 / 60, label: "52°12′" }], originLabel: 'Cape May' }),
      parts: [{ id: 'v', type: 'expr', label: 'They will be approximately ___ miles apart. (Round to three decimal places as needed.)', correctAnswer: '2.028' }],
    },
    // 11
    {
      prompt: 'A bicycle with 28-in.-diameter wheels is traveling at 10 mph. To the nearest whole number, how many revolutions does each wheel make per minute?',
      parts: [{ id: 'mc', type: 'mc', label: 'Choose the correct answer below.', choices: ['A. 240', 'B. 600', 'C. 49', 'D. 120', 'E. 378'], correctIndex: 3 }],
    },
    // 12
    {
      prompt: 'A bicyclist races on a bicycle with 13-inch-radius wheels. When she is traveling at a speed of 50 ft/sec, how many revolutions per minute are her wheels making?',
      parts: [{ id: 'v', type: 'expr', label: 'Her wheels are making ___ rpm. (Round to the nearest thousandth as needed.)', correctAnswer: '440.737' }],
    },
    // 13
    {
      prompt: R`Identify the one angle that is not coterminal with all the others.

$$780^\circ,\ 60^\circ,\ 420^\circ,\ -30^\circ,\ -300^\circ$$`,
      parts: [{ id: 'v', type: 'expr', label: 'The angle ___° is not coterminal with all the other angles.', correctAnswer: '-30' }],
    },
  ],
};
