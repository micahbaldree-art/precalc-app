const db = require('../../../lib/db');
const { getUserFromReq } = require('../../../lib/auth');

export default async function handler(req, res) {
  await db.ensureSchema();
  const user = await getUserFromReq(req);
  if (!user) return res.status(401).json({ error: 'Not signed in.' });
  if (req.method !== 'GET') return res.status(405).end();

  const filter = req.query.status || 'all'; // 'all' | 'incomplete'

  const assignedFilter = user.role === 'teacher' ? '' : 'WHERE is_assigned = TRUE';
  const assignments = await db.all(`SELECT * FROM assignment ${assignedFilter} ORDER BY position ASC`);

  const result = [];
  for (const a of assignments) {
    const totalQuestions = (await db.get('SELECT COUNT(*) as c FROM question WHERE assignment_id = ?', [a.id])).c;
    const correctCount = (await db.get(
      `SELECT COUNT(*) as c FROM answer
       JOIN question ON question.id = answer.question_id
       WHERE question.assignment_id = ? AND answer.user_id = ? AND (answer.ever_correct = TRUE OR answer.is_correct = TRUE)`,
      [a.id, user.id]
    )).c;
    const total = Number(totalQuestions);
    const correct = Number(correctCount);
    const percent = total === 0 ? 0 : Math.round((correct / total) * 100);
    result.push({
      id: a.id,
      title: a.title,
      order: a.position,
      isAssigned: !!a.is_assigned,
      totalQuestions: total,
      correctCount: correct,
      percent,
      complete: total > 0 && correct === total,
    });
  }

  const filtered = filter === 'incomplete' ? result.filter((r) => !r.complete) : result;
  res.status(200).json({ assignments: filtered });
}
