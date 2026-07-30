const db = require('../../../lib/db');
const { verifyPassword, createSessionCookie } = require('../../../lib/auth');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  await db.ensureSchema();
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: 'Email and password are required.' });

  const normalizedEmail = String(email).trim().toLowerCase();
  const user = await db.get('SELECT * FROM app_user WHERE email = ?', [normalizedEmail]);
  if (!user || !verifyPassword(password, user.password_hash)) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  res.setHeader('Set-Cookie', createSessionCookie(user.id));
  res.status(200).json({ ok: true, role: user.role });
}
