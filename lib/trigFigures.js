// SVG diagrams for the trigonometry units. Everything is drawn to scale from
// the numbers in the problem, so a figure can never disagree with its labels.
// Coordinates passed in are ordinary math coordinates (y points UP); they are
// scaled and flipped to fit the SVG canvas.

const INK = '#111827';
const ACCENT = '#dc2626';
const FONT = "font-family=\"'Times New Roman', Times, serif\" font-size=\"15\"";

function wrap(w, h, inner) {
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" ${FONT}>${inner}</svg>`;
}
// Non-ASCII symbols are written as XML entities so a figure renders the same
// no matter how the page or database happens to encode text.
const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/θ/g, '&#952;')
    .replace(/α/g, '&#945;')
    .replace(/β/g, '&#946;')
    .replace(/°/g, '&#176;')
    .replace(/π/g, '&#960;');
const text = (x, y, s, anchor = 'middle', extra = '') =>
  `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}" fill="${INK}" ${extra}>${esc(s)}</text>`;
const line = (x1, y1, x2, y2, color = INK, w = 1.6, dash = '') =>
  `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${color}" stroke-width="${w}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const dot = (x, y, r = 3, color = INK) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${color}"/>`;

// An angle arc at vertex (cx,cy) from direction a0 to a1 (degrees, math
// orientation, counter-clockwise), radius r, in SVG pixel space.
function arc(cx, cy, r, a0, a1, color = ACCENT) {
  const rad = (d) => (d * Math.PI) / 180;
  const p = (a) => [cx + r * Math.cos(rad(a)), cy - r * Math.sin(rad(a))];
  const [x0, y0] = p(a0);
  const [x1, y1] = p(a1);
  let sweep = a1 - a0;
  while (sweep < 0) sweep += 360;
  const large = sweep > 180 ? 1 : 0;
  return `<path d="M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${r} ${r} 0 ${large} 0 ${x1.toFixed(1)} ${y1.toFixed(1)}" fill="none" stroke="${color}" stroke-width="1.6"/>`;
}

// Fits math-coordinate points into a w x h canvas (with padding) and returns
// a mapper to pixel coordinates plus the scale used.
function fit(points, w, h, pad) {
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs);
  const minY = Math.min(...ys), maxY = Math.max(...ys);
  const sx = (w - 2 * pad) / Math.max(1e-9, maxX - minX);
  const sy = (h - 2 * pad) / Math.max(1e-9, maxY - minY);
  const k = Math.min(sx, sy);
  const offX = (w - k * (maxX - minX)) / 2;
  const offY = (h - k * (maxY - minY)) / 2;
  return {
    k,
    map: ([x, y]) => [offX + (x - minX) * k, h - (offY + (y - minY) * k)],
  };
}

const ang = (a, b) => (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI; // math angle a->b

// Interior bisector direction at vertex v of triangle (v, p, q), in pixel space.
function interiorDir(v, p, q) {
  const a1 = ang(v, p), a2 = ang(v, q);
  let d = a2 - a1;
  while (d > 180) d -= 360;
  while (d < -180) d += 360;
  return a1 + d / 2;
}

// Core triangle drawing.
//   vertices:     { A:[x,y], B:[x,y], C:[x,y] }   (math coordinates, y up)
//   vertexLabels: { A:'A', ... }                  text just outside each vertex
//   sideLabels:   { AB:'7', BC:'a', CA:'b' }      text beside each side
//   angleLabels:  { A:'40°', ... }                text inside, with a small arc
//   rightAngleAt: 'C'                              draws the square corner mark
function triangleSvg({ vertices, vertexLabels = {}, sideLabels = {}, angleLabels = {}, rightAngleAt = null, altitude = null, angleDist = 40, w = 300, h = 220 }) {
  const names = Object.keys(vertices);
  const { map } = fit(names.map((n) => vertices[n]), w, h, 38);
  const P = {};
  names.forEach((n) => (P[n] = map(vertices[n])));
  const cx = names.reduce((s, n) => s + P[n][0], 0) / names.length;
  const cy = names.reduce((s, n) => s + P[n][1], 0) / names.length;
  let out = '';
  const [a, b, c] = names;
  out += `<polygon points="${[a, b, c].map((n) => P[n].map((v) => v.toFixed(1)).join(',')).join(' ')}" fill="none" stroke="${INK}" stroke-width="1.8"/>`;

  // dashed altitude from a vertex down to the line through two others
  if (altitude) {
    const v = P[altitude.from];
    const [p, q] = altitude.onto.map((n) => P[n]);
    const dx = q[0] - p[0], dy = q[1] - p[1];
    const t = ((v[0] - p[0]) * dx + (v[1] - p[1]) * dy) / (dx * dx + dy * dy);
    const fx = p[0] + t * dx, fy = p[1] + t * dy;
    out += line(v[0], v[1], fx, fy, '#6b7280', 1.4, '5,4');
    if (altitude.label) out += text((v[0] + fx) / 2 + 8, (v[1] + fy) / 2 + 4, altitude.label, 'start');
  }

  // right-angle square
  if (rightAngleAt && P[rightAngleAt]) {
    const v = P[rightAngleAt];
    const others = names.filter((n) => n !== rightAngleAt).map((n) => P[n]);
    const u1 = norm([others[0][0] - v[0], others[0][1] - v[1]]);
    const u2 = norm([others[1][0] - v[0], others[1][1] - v[1]]);
    const s = 12;
    const p1 = [v[0] + u1[0] * s, v[1] + u1[1] * s];
    const p2 = [v[0] + u2[0] * s, v[1] + u2[1] * s];
    const p3 = [p1[0] + u2[0] * s, p1[1] + u2[1] * s];
    out += `<polyline points="${[p1, p3, p2].map((q) => q.map((x) => x.toFixed(1)).join(',')).join(' ')}" fill="none" stroke="${ACCENT}" stroke-width="1.6"/>`;
  }

  // angle labels + arcs (computed in pixel space, where y is flipped)
  for (const n of Object.keys(angleLabels)) {
    const v = P[n];
    const others = names.filter((m) => m !== n).map((m) => P[m]);
    const pixAng = (from, to) => (Math.atan2(-(to[1] - from[1]), to[0] - from[0]) * 180) / Math.PI;
    const a1 = pixAng(v, others[0]);
    const a2 = pixAng(v, others[1]);
    let d = a2 - a1;
    while (d > 180) d -= 360;
    while (d < -180) d += 360;
    const lo = d >= 0 ? a1 : a2;
    const hi = lo + Math.abs(d);
    out += arc(v[0], v[1], 22, lo, hi);
    const mid = ((lo + hi) / 2) * (Math.PI / 180);
    out += text(v[0] + angleDist * Math.cos(mid), v[1] - angleDist * Math.sin(mid) + 5, angleLabels[n]);
  }

  // vertex labels, pushed away from the centroid
  for (const n of Object.keys(vertexLabels)) {
    const v = P[n];
    const d = norm([v[0] - cx, v[1] - cy]);
    out += text(v[0] + d[0] * 16, v[1] + d[1] * 16 + 5, vertexLabels[n]);
  }

  // side labels, pushed outward from the centroid
  for (const key of Object.keys(sideLabels)) {
    const p = P[key[0]], q = P[key[1]];
    const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
    const d = norm([mx - cx, my - cy]);
    out += text(mx + d[0] * 14, my + d[1] * 14 + 5, sideLabels[key]);
  }
  return wrap(w, h, out);
}

function norm([x, y]) {
  const m = Math.hypot(x, y) || 1;
  return [x / m, y / m];
}

// ---- vertex builders ------------------------------------------------------
// Triangle from three side lengths. Vertex naming follows the usual convention
// (side a is opposite A, etc.). B at the origin, C along +x.
function fromSSS(a, b, c) {
  const cosB = (a * a + c * c - b * b) / (2 * a * c);
  const sinB = Math.sqrt(Math.max(0, 1 - cosB * cosB));
  return { A: [c * cosB, c * sinB], B: [0, 0], C: [a, 0] };
}
// Triangle from two sides and the included angle at C (degrees): sides a, b.
function fromSAS_C(a, b, Cdeg) {
  const C = (Cdeg * Math.PI) / 180;
  const c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C));
  return fromSSS(a, b, c);
}
// Triangle from the three angles (degrees); sizes follow the law of sines.
function fromAngles(Adeg, Bdeg, Cdeg) {
  const r = (d) => (d * Math.PI) / 180;
  const a = Math.sin(r(Adeg)), b = Math.sin(r(Bdeg)), c = Math.sin(r(Cdeg));
  return fromSSS(a, b, c);
}

// Triangle sitting on a horizontal base: `left` and `right` are the base
// vertices (names), `top` the apex. angLeft/angRight are the base angles in
// degrees; the apex angle follows. Sizes come from the law of sines.
function onBase(left, right, top, angLeftDeg, angRightDeg) {
  const r = (d) => (d * Math.PI) / 180;
  const apex = 180 - angLeftDeg - angRightDeg;
  const L = Math.sin(r(angRightDeg)) / Math.sin(r(apex)); // base length = 1
  return {
    [left]: [0, 0],
    [right]: [1, 0],
    [top]: [L * Math.cos(r(angLeftDeg)), L * Math.sin(r(angLeftDeg))],
  };
}

// ---- right triangle with legs/hypotenuse labelled ------------------------
// Right angle at the bottom-right; acute angle `angleLabel` at the left end.
function rightTriangleSvg({ adj, opp, adjLabel = '', oppLabel = '', hypLabel = '', angleLabel = 'θ', vertexLabels = null, w = 260, h = 190 }) {
  const V = { A: [0, 0], B: [adj, 0], C: [adj, opp] };
  const n = {};
  if (angleLabel) n.A = angleLabel;
  return triangleSvg({
    vertices: V,
    vertexLabels: vertexLabels || {},
    sideLabels: { AB: adjLabel, BC: oppLabel, CA: hypLabel },
    angleLabels: n,
    rightAngleAt: 'B',
    w,
    h,
  });
}

// ---- coordinate plane with a terminal side --------------------------------
// Axes, a ray from the origin through (px,py), the angle arc from +x, and the
// point label. Matches the "find the six trig values of the angle shown" figure.
function terminalSideSvg({ px, py, pointLabel, w = 320, h = 240 }) {
  const cx = w / 2, cy = h / 2;
  const R = 92;
  const m = Math.hypot(px, py);
  const ex = cx + (px / m) * R, ey = cy - (py / m) * R;
  const theta = ((Math.atan2(py, px) * 180) / Math.PI + 360) % 360;
  let out = '';
  out += line(14, cy, w - 14, cy, '#6b7280', 1.2) + line(cx, 14, cx, h - 14, '#6b7280', 1.2);
  out += text(w - 10, cy - 6, 'x', 'end') + text(cx + 10, 22, 'y', 'start');
  out += `<line x1="${cx}" y1="${cy}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" stroke="#2563eb" stroke-width="2.2"/>`;
  // arrow head
  const ux = (ex - cx) / R, uy = (ey - cy) / R;
  out += `<polygon points="${ex.toFixed(1)},${ey.toFixed(1)} ${(ex - 11 * ux + 5 * uy).toFixed(1)},${(ey - 11 * uy - 5 * ux).toFixed(1)} ${(ex - 11 * ux - 5 * uy).toFixed(1)},${(ey - 11 * uy + 5 * ux).toFixed(1)}" fill="#2563eb"/>`;
  out += arc(cx, cy, 30, 0, theta);
  const mid = (theta / 2) * (Math.PI / 180);
  out += text(cx + 46 * Math.cos(mid), cy - 46 * Math.sin(mid) + 5, 'θ');
  const px2 = cx + (px / m) * (R * 0.72), py2 = cy - (py / m) * (R * 0.72);
  out += dot(px2, py2, 3.5, '#2563eb');
  // label sits just past the arrow tip, on the outside of the quadrant
  out += text(ex + (px >= 0 ? 8 : -8), ey + (py >= 0 ? -6 : 16), pointLabel, px >= 0 ? 'start' : 'end');
  return wrap(w, h, out);
}

// ---- observer sees an object at a height (angle of depression/elevation) ---
// A vertical structure of `heightLabel` on the left, a horizontal ground line of
// `groundLabel`, and the line of sight between the top and the far ground point.
// kind 'depression': the angle is marked at the TOP, below the horizontal.
// kind 'elevation' : the angle is marked at the GROUND end.
function sightLineSvg({ heightLabel, groundLabel, angleLabel, kind = 'elevation', hLen = 120, gLen = 190, w = 320, h = 190 }) {
  const left = 74, base = h - 36;
  const top = base - hLen, farX = left + gLen;
  const tan = hLen / gLen;
  let out = '';
  out += line(left, base, farX, base, INK, 1.8);                     // ground
  out += line(left, base, left, top, INK, 1.8);                      // vertical
  out += line(left, top, farX, base, INK, 1.8);                      // line of sight
  out += `<polyline points="${left},${base - 12} ${left + 12},${base - 12} ${left + 12},${base}" fill="none" stroke="${ACCENT}" stroke-width="1.5"/>`;
  out += text(left - 8, (base + top) / 2 + 5, heightLabel, 'end');
  out += text((left + farX) / 2, base + 22, groundLabel);
  if (kind === 'depression') {
    out += line(left, top, farX + 10, top, '#6b7280', 1.2, '5,4');   // horizontal at the top
    out += arc(left, top, 46, -Math.atan(tan) * 180 / Math.PI, 0);
    out += text(left + 74, top + 22, angleLabel);
  } else {
    const a = Math.atan(tan) * 180 / Math.PI;
    out += arc(farX, base, 40, 180 - a, 180);
    out += text(farX - 64, base - 8, angleLabel);
  }
  return wrap(w, h, out);
}

// ---- two sight lines from one point (observation deck) --------------------
// The observer is at the right; the base of the structure is `dLabel` away.
function twoAngleSvg({ dLabel, lowLabel, highLabel, lowDeg, highDeg, w = 340, h = 210 }) {
  const base = h - 36;
  const tanHigh = Math.tan((highDeg * Math.PI) / 180);
  const d = Math.min(230, (base - 22) / tanHigh); // keep the top sight line inside the canvas
  const left = 56;
  const obsX = left + d;
  const r = (x) => (x * Math.PI) / 180;
  const yLow = base - d * Math.tan(r(lowDeg));
  const yHigh = base - d * Math.tan(r(highDeg));
  let out = '';
  out += line(left, base, obsX, base, INK, 1.8);
  out += line(left, base, left, yHigh, INK, 1.8);
  out += line(left, yLow, obsX, base, INK, 1.8);
  out += line(left, yHigh, obsX, base, INK, 1.8);
  out += `<rect x="${left - 36}" y="${(yHigh - 10).toFixed(1)}" width="36" height="${(yLow - yHigh + 10).toFixed(1)}" fill="none" stroke="${INK}" stroke-width="1.4"/>`;
  out += arc(obsX, base, 46, 180 - highDeg, 180);
  out += arc(obsX, base, 70, 180 - lowDeg, 180);
  out += text(obsX - 70, base - 34, highLabel);
  out += text(obsX - 96, base - 7, lowLabel);
  out += text((left + obsX) / 2, base + 22, dLabel);
  return wrap(w, h, out);
}

// ---- bearing from a point north of a baseline -----------------------------
// A point N sits `vertLabel` due north of the west end W of a baseline whose
// east end E is `baseLabel` away. The bearing (measured clockwise from north)
// to E is `bearingDeg`, drawn as an arc from the north ray.
function bearingSvg({ vertLabel, baseLabel, bearingLabel, bearingDeg, w = 320, h = 220 }) {
  const wx = 70, wy = h - 40;
  // The angle at N between "south" and the line of sight is 180 - bearing.
  const interior = 180 - bearingDeg;
  const tanI = Math.tan((interior * Math.PI) / 180);
  // Scale the vertical so the whole baseline stays inside the canvas.
  const drop = Math.min(wy - 70, (w - wx - 24) / tanI);
  const ny = wy - drop;
  const exx = wx + drop * tanI;
  let out = '';
  out += line(wx, ny - 38, wx, ny, '#6b7280', 1.2, '5,4');            // north ray
  out += line(wx, ny, wx, wy, INK, 1.8);                              // N to W
  out += line(wx, wy, exx, wy, INK, 1.8);                             // W to E
  out += line(wx, ny, exx, wy, INK, 1.8);                             // line of sight
  out += `<polyline points="${wx},${wy - 12} ${wx + 12},${wy - 12} ${wx + 12},${wy}" fill="none" stroke="${ACCENT}" stroke-width="1.5"/>`;
  out += arc(wx, ny, 34, -(bearingDeg - 90), 90);                     // bearing arc, north clockwise to the sight line
  out += text(wx + 52, ny + 4, bearingLabel);
  out += text(wx - 8, (ny + wy) / 2 + 5, vertLabel, 'end');
  out += text((wx + exx) / 2, wy + 22, baseLabel);
  out += text(wx + 10, ny - 22, 'N', 'start');
  return wrap(w, h, out);
}

// ---- two stations on an east-west line, bearings measured from north -------
// A (west) sees the transmitter at bearing `bearingA`; B (east) at `bearingB`.
// Both are drawn as arcs from each station's north arrow.
function radioBearingsSvg({ baseLabel, bearingA, bearingB, w = 340, h = 230 }) {
  const rad = (d) => (d * Math.PI) / 180;
  const ax = 60, ay = h - 40;
  // interior angles: at A it is 90 - bearingA; at B it is bearingB - 270
  const angA = 90 - bearingA, angB = bearingB - 270;
  const angC = 180 - angA - angB;
  const baseLen = Math.min(190, 150 / Math.max(0.2, (Math.sin(rad(angB)) / Math.sin(rad(angC))) * Math.sin(rad(angA))));
  const bx = ax + baseLen, by = ay;
  const AC = (baseLen * Math.sin(rad(angB))) / Math.sin(rad(angC));
  const cx = ax + AC * Math.cos(rad(angA)), cy = ay - AC * Math.sin(rad(angA));
  let out = '';
  out += line(ax - 20, ay, bx + 20, by, '#9ca3af', 1.2, '6,4');            // east-west line
  out += text(ax - 18, ay - 68, 'east-west', 'start');
  out += line(ax, ay, ax, ay - 52, INK, 1.6) + `<polygon points="${ax},${ay - 58} ${ax - 4},${ay - 48} ${ax + 4},${ay - 48}" fill="${INK}"/>`;
  out += line(bx, by, bx, by - 52, INK, 1.6) + `<polygon points="${bx},${by - 58} ${bx - 4},${by - 48} ${bx + 4},${by - 48}" fill="${INK}"/>`;
  out += line(ax, ay, bx, by, INK, 1.8) + line(ax, ay, cx, cy, INK, 1.8) + line(bx, by, cx, cy, INK, 1.8);
  out += arc(ax, ay, 30, 90 - bearingA, 90);                               // A: north clockwise to AC
  out += text(ax + 22, ay - 36, bearingA + '°', 'start');
  out += arc(bx, by, 22, 90 - bearingB + 360, 450);                        // B: north clockwise (the long way) to BC
  out += text(bx + 28, by - 4, bearingB + '°', 'start');
  out += text(ax - 8, ay + 6, 'A', 'end') + text(bx + 8, by + 18, 'B', 'start') + text(cx, cy - 8, 'C');
  out += text((ax + bx) / 2, ay + 22, baseLabel);
  return wrap(w, h, out);
}

// ---- several rays from one origin, each at a bearing from north ----------------
// rays: [{ bearing: degrees clockwise from north, label: 'text' }]. Each bearing is
// shown as an arc from the dashed north line, like the Cape May figure.
function bearingRaysSvg({ rays, originLabel, w = 320, h = 250 }) {
  const rad = (d) => (d * Math.PI) / 180;
  const ox = 120, oy = h - 36, L = 175;
  let out = '';
  out += line(ox, oy, ox, oy - L - 14, '#6b7280', 1.2, '5,4');            // north
  rays.forEach((r, i) => {
    const ex = ox + L * Math.sin(rad(r.bearing)), ey = oy - L * Math.cos(rad(r.bearing));
    out += line(ox, oy, ex, ey, INK, 1.8);
    const ux = (ex - ox) / L, uy = (ey - oy) / L;
    out += `<polygon points="${ex.toFixed(1)},${ey.toFixed(1)} ${(ex - 12 * ux + 5 * uy).toFixed(1)},${(ey - 12 * uy - 5 * ux).toFixed(1)} ${(ex - 12 * ux - 5 * uy).toFixed(1)},${(ey - 12 * uy + 5 * ux).toFixed(1)}" fill="${INK}"/>`;
    const rr = 62 + i * 70;
    out += arc(ox, oy, rr, 90 - r.bearing, 90);
    const mid = rad(90 - r.bearing / 2);
    out += text(ox + (rr + 26) * Math.cos(mid), oy - (rr + 26) * Math.sin(mid) + 4, r.label, 'start');
  });
  out += text(ox, oy + 22, originLabel);
  return wrap(w, h, out);
}

// ---- isosceles roof / barn: base with equal base angles ---------------------
function roofSvg({ baseLabel, angleLabel, baseDeg, w = 320, h = 160 }) {
  const half = 130;
  const rise = half * Math.tan((baseDeg * Math.PI) / 180);
  const base = h - 36;
  const cx = w / 2;
  let out = '';
  out += line(cx - half, base, cx + half, base, INK, 1.8);
  out += line(cx - half, base, cx, base - rise, INK, 1.8);
  out += line(cx + half, base, cx, base - rise, INK, 1.8);
  out += line(cx, base - rise, cx, base, INK, 1.8);
  out += arc(cx - half, base, 36, 0, baseDeg);
  out += arc(cx + half, base, 36, 180 - baseDeg, 180);
  out += text(cx - half + 58, base - 8, angleLabel);
  out += text(cx + half - 58, base - 8, angleLabel);
  out += text(cx, base + 22, baseLabel);
  return wrap(w, h, out);
}

module.exports = {
  triangleSvg, rightTriangleSvg, terminalSideSvg, sightLineSvg, twoAngleSvg, roofSvg, bearingSvg, radioBearingsSvg, bearingRaysSvg,
  fromSSS, fromSAS_C, fromAngles, onBase,
};
