const db = require('../../../lib/db');
const { getUserFromReq } = require('../../../lib/auth');
const { sanitizeQuestion } = require('../../../lib/sanitize');

export default async function handler(req, res) {
  await db.ensureSchema();
  const user = await getUserFromReq(req);
  if (!user) return res.status(401).json({ error: 'Not signed in.' });
  if (req.method !== 'GET') return res.status(405).end();

  const assignmentId = Number(req.query.id);
  const assignment = await db.get('SELECT * FROM assignment WHERE id = ?', [assignmentId]);
  if (!assignment) return res.status(404).json({ error: 'Assignment not found.' });
  if (user.role !== 'teacher' && !assignment.is_assigned) {
    return res.status(403).json({ error: 'This assignment is not available.' });
  }

  const questions = await db.all('SELECT * FROM question WHERE assignment_id = ? ORDER BY position ASC', [assignmentId]);
  const answers = questions.length
    ? await db.all(
        `SELECT * FROM answer WHERE user_id = ? AND question_id IN (${questions.map(() => '?').join(',')})`,
        [user.id, ...questions.map((q) => q.id)]
      )
    : [];
  const answerByQuestion = {};
  answers.forEach((a) => {
    answerByQuestion[a.question_id] = { draft: a.draft ? JSON.parse(a.draft) : null, isCorrect: !!a.is_correct };
  });

  const totalQuestions = questions.length;
  const correctCount = questions.filter((q) => answerByQuestion[q.id]?.isCorrect).length;
  const percent = totalQuestions === 0 ? 0 : Math.round((correctCount / totalQuestions) * 100);

  res.status(200).json({
    assignment: { id: assignment.id, title: assignment.title, percent, correctCount, totalQuestions },
    questions: questions.map((q) => ({
      ...sanitizeQuestion({ id: q.id, order: q.position, prompt: q.prompt, svg: q.svg, parts: q.parts }),
      draft: answerByQuestion[q.id]?.draft || null,
      isCorrect: answerByQuestion[q.id]?.isCorrect || false,
    })),
  });
}
