const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');

function serializeCookie(name, value, opts = {}) {
  let str = `${name}=${encodeURIComponent(value)}`;
  if (opts.maxAge != null) str += `; Max-Age=${Math.floor(opts.maxAge)}`;
  str += `; Path=${opts.path || '/'}`;
  if (opts.httpOnly) str += '; HttpOnly';
  if (opts.sameSite) str += `; SameSite=${opts.sameSite[0].toUpperCase()}${opts.sameSite.slice(1)}`;
  if (opts.secure) str += '; Secure';
  return str;
}

function parseCookie(header) {
  const out = {};
  (header || '').split(';').forEach((pair) => {
    const idx = pair.indexOf('=');
    if (idx === -1) return;
    const key = pair.slice(0, idx).trim();
    const val = pair.slice(idx + 1).trim();
    if (key) out[key] = decodeURIComponent(val);
  });
  return out;
}

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production-please';
const COOKIE_NAME = 'precalc_session';
// No expiry: "remember them forever" per spec — session lasts until they log out.
const TEN_YEARS = 10 * 365 * 24 * 60 * 60;

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function verifyPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

function createSessionCookie(userId) {
  const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: TEN_YEARS });
  return serializeCookie(COOKIE_NAME, token, {
    httpOnly: true,
    path: '/',
    maxAge: TEN_YEARS,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
}

function clearSessionCookie() {
  return serializeCookie(COOKIE_NAME, '', {
    httpOnly: true,
    path: '/',
    maxAge: 0,
  });
}

async function getUserFromReq(req) {
  const cookies = parseCookie(req.headers.cookie || '');
  const token = cookies[COOKIE_NAME];
  if (!token) return null;
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const row = await db.get('SELECT id, email, first_name, last_name, role FROM app_user WHERE id = ?', [payload.userId]);
    if (!row) return null;
    return { id: row.id, email: row.email, firstName: row.first_name, lastName: row.last_name, role: row.role };
  } catch (e) {
    return null;
  }
}

module.exports = {
  hashPassword,
  verifyPassword,
  createSessionCookie,
  clearSessionCookie,
  getUserFromReq,
};
