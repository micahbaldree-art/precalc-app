const { getUserFromReq } = require('../../../lib/auth');
const db = require('../../../lib/db');

export default async function handler(req, res) {
  await db.ensureSchema();
  const user = await getUserFromReq(req);
  if (!user) return res.status(200).json({ user: null });
  res.status(200).json({ user });
}
