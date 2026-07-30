const db = require('../../../lib/db');
const { hashPassword, createSessionCookie } = require('../../../lib/auth');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  await db.ensureSchema();
  const { email, password, firstName, lastName } = req.body || {};

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters.' });
  }

  const normalizedEmail = String(email).trim().toLowerCase();
  const existing = await db.get('SELECT id FROM app_user WHERE email = ?', [normalizedEmail]);
  if (existing) {
    return res.status(409).json({ error: 'An account with that email already exists.' });
  }

  const result = await db.run(
    'INSERT INTO app_user (email, password_hash, first_name, last_name, role) VALUES (?, ?, ?, ?, ?) RETURNING id',
    [normalizedEmail, hashPassword(password), firstName.trim(), lastName.trim(), 'student']
  );

  res.setHeader('Set-Cookie', createSessionCookie(result.rows[0].id));
  res.status(200).json({ ok: true });
}
