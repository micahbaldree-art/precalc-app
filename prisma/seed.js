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
];

async function seed() {
  await db.ensureSchema();

  await db.run('DELETE FROM answer');
  await db.run('DELETE FROM question');
  await db.run('DELETE FROM assignment');

  for (let aIdx = 0; aIdx < assignments.length; aIdx++) {
    const a = assignments[aIdx];
    const result = await db.run('INSERT INTO assignment (title, position, is_assigned) VALUES (?, ?, FALSE) RETURNING id', [a.title, aIdx + 1]);
    const assignmentId = result.rows[0].id;
    for (let qIdx = 0; qIdx < a.questions.length; qIdx++) {
      const q = a.questions[qIdx];
      await db.run('INSERT INTO question (assignment_id, position, prompt, svg, parts) VALUES (?, ?, ?, ?, ?)', [
        assignmentId,
        qIdx + 1,
        q.prompt,
        q.svg || null,
        JSON.stringify(q.parts),
      ]);
    }
    console.log(`Seeded "${a.title}" with ${a.questions.length} questions.`);
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
