require('dotenv').config();
const db = require('../lib/db');
const { hashPassword } = require('../lib/auth');

const assignments = [
  require('./seedData/hw1_1'),
  require('./seedData/hw1_2'),
  require('./seedData/hw1_3'),
  require('./seedData/practice1_1_3'),
  require('./seedData/hw1_4'),
  require('./seedData/hw1_5'),
  require('./seedData/hw1_6'),
  require('./seedData/unit1review'),
  require('./seedData/hw2_1'),
  require('./seedData/hw2_2'),
  require('./seedData/hw2_3'),
  require('./seedData/hw2_4'),
  require('./seedData/hw2_5'),
  require('./seedData/hw2_6'),
  require('./seedData/chapter2review'),
  require('./seedData/hw3_1'),
  require('./seedData/hw3_2'),
  require('./seedData/hw3_3'),
  require('./seedData/hw3_4'),
  require('./seedData/chapter3review'),
  require('./seedData/benchmarkunit1'),
  require('./seedData/benchmarkunit2'),
  require('./seedData/benchmarkunit3'),
  require('./seedData/benchmarkallunits'),
  require('./seedData/hw4_1'),
  require('./seedData/hw4_2'),
  require('./seedData/hw4_3'),
  require('./seedData/hw4_4'),
  require('./seedData/chapter4review'),
  require('./seedData/hw5_1'),
  require('./seedData/hw5_2'),
  require('./seedData/chapter5review'),
  require('./seedData/chapter5review_part2'),
];

async function seed() {
  await db.ensureSchema();

  // DEFAULT (safe): add and update content in place. Nothing a student has done
  // is deleted, and each assignment's "assigned" switch keeps its setting.
  // `node prisma/seed.js --reset` restores the old behaviour of wiping every
  // answer, question and assignment first (use only on a fresh/test database).
  const reset = process.argv.includes('--reset');
  if (reset) {
    console.log('--reset: deleting ALL answers, questions and assignments first.');
    await db.run('DELETE FROM answer');
    await db.run('DELETE FROM question');
    await db.run('DELETE FROM assignment');
  }

  const changed = [];
  for (let aIdx = 0; aIdx < assignments.length; aIdx++) {
    const a = assignments[aIdx];
    let row = await db.get('SELECT id FROM assignment WHERE title = ?', [a.title]);
    let created = false;
    if (!row) {
      const result = await db.run('INSERT INTO assignment (title, position, is_assigned) VALUES (?, ?, FALSE) RETURNING id', [a.title, aIdx + 1]);
      row = { id: result.rows[0].id };
      created = true;
    } else {
      await db.run('UPDATE assignment SET position = ? WHERE id = ?', [aIdx + 1, row.id]);
    }
    const assignmentId = row.id;

    const existing = await db.all('SELECT id, position, prompt, svg, parts FROM question WHERE assignment_id = ? ORDER BY position ASC', [assignmentId]);
    const byPos = new Map(existing.map((e) => [Number(e.position), e]));
    let added = 0, updated = 0, removed = 0;

    for (let qIdx = 0; qIdx < a.questions.length; qIdx++) {
      const q = a.questions[qIdx];
      const pos = qIdx + 1;
      const parts = JSON.stringify(q.parts);
      const svg = q.svg || null;
      const old = byPos.get(pos);
      if (!old) {
        await db.run('INSERT INTO question (assignment_id, position, prompt, svg, parts) VALUES (?, ?, ?, ?, ?)', [assignmentId, pos, q.prompt, svg, parts]);
        added++;
      } else if (old.prompt !== q.prompt || (old.svg || null) !== svg || old.parts !== parts) {
        // Same question id, so students' saved answers stay attached to it.
        await db.run('UPDATE question SET prompt = ?, svg = ?, parts = ? WHERE id = ?', [q.prompt, svg, parts, old.id]);
        updated++;
        changed.push(`${a.title} #${pos}`);
      }
    }
    // Questions that no longer exist in the seed data (the assignment shrank).
    for (const e of existing) {
      if (Number(e.position) > a.questions.length) {
        await db.run('DELETE FROM question WHERE id = ?', [e.id]);
        removed++;
      }
    }
    const note = created ? 'NEW' : (added || updated || removed ? 'changed' : 'unchanged');
    console.log(`${note.padEnd(9)} "${a.title}" — ${a.questions.length} questions (added ${added}, updated ${updated}, removed ${removed}).`);
  }

  const known = new Set(assignments.map((x) => x.title));
  const orphans = await db.all('SELECT title FROM assignment');
  orphans.filter((o) => !known.has(o.title)).forEach((o) => console.log(`NOTE: "${o.title}" is in the database but not in the seed data; left untouched.`));
  if (changed.length) {
    console.log(`\nContent changed on ${changed.length} existing question(s). Students' saved answers on these were KEPT, so any credit already earned stands:`);
    changed.forEach((c) => console.log('  - ' + c));
  }

  const teacherEmail = process.env.TEACHER_EMAIL || 'teacher@example.com';
  const teacherPassword = process.env.TEACHER_PASSWORD || 'ChangeMe123!';
  const existing = await db.get('SELECT id FROM app_user WHERE email = ?', [teacherEmail]);
  if (!existing) {
    await db.run('INSERT INTO app_user (email, password_hash, first_name, last_name, role) VALUES (?, ?, ?, ?, ?)', [
      teacherEmail,
      hashPassword(teacherPassword),
      'Micah',
      'Baldree',
      'teacher',
    ]);
    console.log(`\nCreated teacher account: ${teacherEmail} / ${teacherPassword}`);
    console.log('Change this password after first login, or set TEACHER_EMAIL / TEACHER_PASSWORD env vars before seeding.');
  } else {
    console.log(`\nTeacher account ${teacherEmail} already exists — left untouched.`);
  }

  console.log('\nSeed complete.');
  await db.pool.end();
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
