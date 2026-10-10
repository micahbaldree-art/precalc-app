const db = require('../../../lib/db');
const { getUserFromReq } = require('../../../lib/auth');
const { chapterOf } = require('../../../lib/chapters');

export default async function handler(req, res) {
  await db.ensureSchema();
  const user = await getUserFromReq(req);
  if (!user || user.role !== 'teacher') return res.status(403).json({ error: 'Teacher access only.' });
  if (req.method !== 'GET') return res.status(405).end();

  const assignments = await db.all('SELECT * FROM assignment ORDER BY position ASC');
  const students = await db.all(
    "SELECT id, first_name, last_name, email FROM app_user WHERE role = 'student' ORDER BY last_name ASC, first_name ASC"
  );

  const totalQuestionsByAssignment = {};
  for (const a of assignments) {
    totalQuestionsByAssignment[a.id] = Number((await db.get('SELECT COUNT(*) as c FROM question WHERE assignment_id = ?', [a.id])).c);
  }

  const rows = await db.all(
    `SELECT answer.user_id as user_id, question.assignment_id as assignment_id, COUNT(*) as c
     FROM answer JOIN question ON question.id = answer.question_id
     WHERE (answer.ever_correct = TRUE OR answer.is_correct = TRUE)
     GROUP BY answer.user_id, question.assignment_id`
  );
  const correctCount = {};
  rows.forEach((r) => {
    correctCount[r.user_id] = correctCount[r.user_id] || {};
    correctCount[r.user_id][r.assignment_id] = Number(r.c);
  });

  const studentRows = [];
  for (const s of students) {
    const scores = {};
    let sumPercent = 0;
    let countedAssignments = 0;
    for (const a of assignments) {
      const total = totalQuestionsByAssignment[a.id];
      const correct = correctCount[s.id]?.[a.id] || 0;
      const attemptedRow = await db.get(
        'SELECT COUNT(*) as c FROM answer JOIN question ON question.id = answer.question_id WHERE answer.user_id = ? AND question.assignment_id = ?',
        [s.id, a.id]
      );
      const attempted = Number(attemptedRow.c) > 0;
      const percent = total === 0 ? null : Math.round((correct / total) * 100);
      scores[a.id] = attempted ? percent : null;
      if (attempted) {
        sumPercent += percent;
        countedAssignments += 1;
      }
    }
    studentRows.push({
      id: s.id,
      name: `${s.last_name}, ${s.first_name}`,
      overall: countedAssignments > 0 ? Math.round(sumPercent / countedAssignments) : null,
      scores,
    });
  }

  const classAverages = {};
  assignments.forEach((a) => {
    const vals = studentRows.map((s) => s.scores[a.id]).filter((v) => v != null);
    classAverages[a.id] = vals.length ? Math.round(vals.reduce((x, y) => x + y, 0) / vals.length) : null;
  });

  res.status(200).json({
    assignments: assignments.map((a) => ({ id: a.id, title: a.title, chapter: chapterOf(a.title) })),
    // Filter options, in the order the chapters first appear in the course.
    chapters: [...new Set(assignments.map((a) => chapterOf(a.title)))],
    classAverages,
    students: studentRows,
  });
}
