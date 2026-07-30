// Database layer — Postgres via `pg`, designed for Neon (or any hosted
// Postgres). Set DATABASE_URL in the environment (Neon gives you this
// connection string directly).
//
// Exposes a small helper set (get/all/run) so call sites read almost like
// the earlier SQLite version, but every call is async now — Postgres has
// no synchronous driver, so every route that touches the DB uses async/await.

const { Pool } = require('pg');

const globalForPg = global;

const pool =
  globalForPg._pgPool ||
  new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL && process.env.DATABASE_URL.includes('sslmode=require') ? { rejectUnauthorized: false } : undefined,
  });
if (process.env.NODE_ENV !== 'production') globalForPg._pgPool = pool;

// Converts "SELECT * FROM t WHERE a = ? AND b = ?" + [1,2] into
// "SELECT * FROM t WHERE a = $1 AND b = $2" so call sites don't need to
// hand-count placeholders.
function toPgQuery(sql) {
  let i = 0;
  return sql.replace(/\?/g, () => `$${++i}`);
}

async function run(sql, params = []) {
  const res = await pool.query(toPgQuery(sql), params);
  return { changes: res.rowCount, rows: res.rows };
}

async function get(sql, params = []) {
  const res = await pool.query(toPgQuery(sql), params);
  return res.rows[0] || null;
}

async function all(sql, params = []) {
  const res = await pool.query(toPgQuery(sql), params);
  return res.rows;
}

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS app_user (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'student',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );

  CREATE TABLE IF NOT EXISTS assignment (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    position INTEGER NOT NULL DEFAULT 0,
    is_assigned BOOLEAN NOT NULL DEFAULT FALSE
  );

  CREATE TABLE IF NOT EXISTS question (
    id SERIAL PRIMARY KEY,
    assignment_id INTEGER NOT NULL REFERENCES assignment(id) ON DELETE CASCADE,
    position INTEGER NOT NULL DEFAULT 0,
    prompt TEXT NOT NULL,
    svg TEXT,
    parts TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS answer (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES app_user(id) ON DELETE CASCADE,
    question_id INTEGER NOT NULL REFERENCES question(id) ON DELETE CASCADE,
    draft TEXT,
    is_correct BOOLEAN NOT NULL DEFAULT FALSE,
    submitted_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(user_id, question_id)
  );

  CREATE INDEX IF NOT EXISTS idx_question_assignment ON question(assignment_id);
  CREATE INDEX IF NOT EXISTS idx_answer_user ON answer(user_id);
`;

let migrated = false;
async function ensureSchema() {
  if (migrated) return;
  await pool.query(SCHEMA);
  migrated = true;
}

module.exports = { pool, run, get, all, ensureSchema };
