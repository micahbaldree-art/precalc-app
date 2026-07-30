const db = require('../../../lib/db');
const { getUserFromReq } = require('../../../lib/auth');

export default async function handler(req, res) {
  await db.ensureSchema();
  const user = await getUserFromReq(req);
  if (!user || user.role !== 'teacher') return res.status(403).json({ error: 'Teacher access only.' });

  if (req.method === 'GET') {
    const rows = await db.all(
      "SELECT id, first_name, last_name, email, created_at FROM app_user WHERE role = 'student' ORDER BY last_name ASC, first_name ASC"
    );
    const students = rows.map((s) => ({ id: s.id, firstName: s.first_name, lastName: s.last_name, email: s.email, createdAt: s.created_at }));
    return res.status(200).json({ students });
  }

  if (req.method === 'DELETE') {
    const result = await db.run("DELETE FROM app_user WHERE role = 'student'");
    return res.status(200).json({ ok: true, deleted: result.changes });
  }

  res.status(405).end();
}
