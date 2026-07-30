const db = require('../../../lib/db');
const { getUserFromReq, hashPassword } = require('../../../lib/auth');

export default async function handler(req, res) {
  await db.ensureSchema();
  const user = await getUserFromReq(req);
  if (!user || user.role !== 'teacher') return res.status(403).json({ error: 'Teacher access only.' });
  if (req.method !== 'POST') return res.status(405).end();

  const { studentId, newPassword } = req.body || {};
  if (!studentId || !newPassword || newPassword.length < 6) {
    return res.status(400).json({ error: 'A student and a password of at least 6 characters are required.' });
  }

  const student = await db.get("SELECT id FROM app_user WHERE id = ? AND role = 'student'", [studentId]);
  if (!student) return res.status(404).json({ error: 'Student not found.' });

  await db.run('UPDATE app_user SET password_hash = ? WHERE id = ?', [hashPassword(newPassword), studentId]);
  res.status(200).json({ ok: true });
}
