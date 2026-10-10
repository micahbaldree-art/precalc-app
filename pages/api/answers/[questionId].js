const db = require('../../../lib/db');
const { getUserFromReq } = require('../../../lib/auth');
const { checkQuestion } = require('../../../lib/answerCheck');

export default async function handler(req, res) {
  await db.ensureSchema();
  const user = await getUserFromReq(req);
  if (!user) return res.status(401).json({ error: 'Not signed in.' });
  if (req.method !== 'POST') return res.status(405).end();

  const questionId = Number(req.query.questionId);
  const question = await db.get('SELECT * FROM question WHERE id = ?', [questionId]);
  if (!question) return res.status(404).json({ error: 'Question not found.' });

  const assignment = await db.get('SELECT * FROM assignment WHERE id = ?', [question.assignment_id]);
  if (user.role !== 'teacher' && !assignment.is_assigned) {
    return res.status(403).json({ error: 'This assignment is not available.' });
  }

  const { draft, submit } = req.body || {};
  const existing = await db.get('SELECT * FROM answer WHERE user_id = ? AND question_id = ?', [user.id, questionId]);

  let isCorrect = existing ? !!existing.is_correct : false;
  // ever_correct never goes back to false: it is what the grade is built from.
  let everCorrect = existing ? !!existing.ever_correct || !!existing.is_correct : false;
  let justSubmitted = false;

  if (submit) {
    const parts = JSON.parse(question.parts);
    isCorrect = checkQuestion(parts, draft || {});
    if (isCorrect) everCorrect = true;
    justSubmitted = true;
  }

  const draftStr = draft != null ? JSON.stringify(draft) : existing?.draft || null;

  if (existing) {
    await db.run(
      `UPDATE answer SET draft = ?, is_correct = ?, ever_correct = ?, submitted_at = ?, updated_at = NOW()
       WHERE user_id = ? AND question_id = ?`,
      [draftStr, isCorrect, everCorrect, justSubmitted ? new Date().toISOString() : existing.submitted_at, user.id, questionId]
    );
  } else {
    await db.run(
      `INSERT INTO answer (user_id, question_id, draft, is_correct, ever_correct, submitted_at) VALUES (?, ?, ?, ?, ?, ?)`,
      [user.id, questionId, draftStr, isCorrect, everCorrect, justSubmitted ? new Date().toISOString() : null]
    );
  }

  res.status(200).json({ ok: true, correct: submit ? isCorrect : undefined });
}
