const db = require('../../../../lib/db');
const { getUserFromReq } = require('../../../../lib/auth');

// "Assignment reset": wipes the signed-in user's current answers for every
// question in the assignment and unlocks them for another attempt.
//
// What it deliberately does NOT touch is answer.ever_correct, the permanent
// record of which questions have been answered correctly at least once. The
// grade is computed from that flag, so resetting never lowers a grade, and
// questions that were originally correct keep their check mark.
export default async function handler(req, res) {
  await db.ensureSchema();
  const user = await getUserFromReq(req);
  if (!user) return res.status(401).json({ error: 'Not signed in.' });
  if (req.method !== 'POST') return res.status(405).end();

  const assignmentId = Number(req.query.id);
  const assignment = await db.get('SELECT * FROM assignment WHERE id = ?', [assignmentId]);
  if (!assignment) return res.status(404).json({ error: 'Assignment not found.' });
  if (user.role !== 'teacher' && !assignment.is_assigned) {
    return res.status(403).json({ error: 'This assignment is not available.' });
  }

  // Right-hand sides in an UPDATE see the OLD row, so ever_correct picks up the
  // current is_correct before is_correct is cleared in the same statement.
  const result = await db.run(
    `UPDATE answer
     SET ever_correct = (ever_correct OR is_correct),
         draft = NULL,
         is_correct = FALSE,
         submitted_at = NULL,
         updated_at = NOW()
     WHERE user_id = ?
       AND question_id IN (SELECT id FROM question WHERE assignment_id = ?)`,
    [user.id, assignmentId]
  );

  res.status(200).json({ ok: true, reset: result.changes });
}
