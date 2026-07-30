const db = require('../../../lib/db');
const { getUserFromReq } = require('../../../lib/auth');

export default async function handler(req, res) {
  await db.ensureSchema();
  const user = await getUserFromReq(req);
  if (!user || user.role !== 'teacher') return res.status(403).json({ error: 'Teacher access only.' });

  if (req.method === 'GET') {
    const assignments = await db.all('SELECT * FROM assignment ORDER BY position ASC');
    const result = [];
    for (const a of assignments) {
      const total = (await db.get('SELECT COUNT(*) as c FROM question WHERE assignment_id = ?', [a.id])).c;
      result.push({ id: a.id, title: a.title, order: a.position, isAssigned: !!a.is_assigned, totalQuestions: Number(total) });
    }
    return res.status(200).json({ assignments: result });
  }

  if (req.method === 'PATCH') {
    const { id, isAssigned } = req.body || {};
    if (id == null || typeof isAssigned !== 'boolean') {
      return res.status(400).json({ error: 'id and isAssigned (boolean) are required.' });
    }
    await db.run('UPDATE assignment SET is_assigned = ? WHERE id = ?', [isAssigned, id]);
    return res.status(200).json({ ok: true });
  }

  res.status(405).end();
}
