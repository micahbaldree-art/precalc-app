# Pre-Calc Homework Site

## Running it locally

Needs a Postgres database (local Postgres, or a free Neon database — see deployment below).

```bash
npm install
cp .env.example .env        # then fill in DATABASE_URL
npm run seed                # creates tables + loads Unit 1 + a teacher account
npm run dev                 # http://localhost:3000
```

Default teacher login: `teacher@example.com` / `ChangeMe123!`.
To set your own: `TEACHER_EMAIL=you@school.edu TEACHER_PASSWORD=yourpassword npm run seed`

## What's here

- Email/password accounts with permanent sessions (10-year cookie)
- Student flow: assignments list → assignment overview (question tiles) → question runner with MathLive math input, autosave, instant answer checking
- Teacher flow: Assignment Manager (on/off toggles), Gradebook (per-student % per assignment + class averages), Roster (delete-all-students at semester end)
- Unit 1 (8 assignments, 150 questions) seeded from your homework PDFs, with a real algebraic-equivalence answer checker (handles reordered factors, unordered answer lists, interval notation written in any order)

## Deploying for free (Neon + Vercel)

### 1. Database — Neon
1. Go to neon.tech, sign up free, create a project.
2. Copy the connection string it gives you (starts with `postgresql://...`).

### 2. Push this code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
```
Create a new repo on github.com, then follow its "push an existing repository" instructions.

### 3. Host it — Vercel
1. Go to vercel.com, sign up free (you can sign in with your GitHub account).
2. Click "Add New… → Project", pick the repo you just pushed.
3. Before deploying, add Environment Variables:
   - `DATABASE_URL` = the Neon connection string from step 1
   - `JWT_SECRET` = any long random string (e.g. generate one at random.org, or run `openssl rand -hex 32` locally)
4. Click Deploy.
5. Once it's live, run the seed script once against your Neon database so Unit 1 loads in:
   ```bash
   DATABASE_URL="<your neon connection string>" TEACHER_EMAIL="you@school.edu" TEACHER_PASSWORD="yourpassword" node prisma/seed.js
   ```
   (Run this from your own computer, inside this project folder, after `npm install`.)

That's it — Vercel gives you a live URL like `your-project.vercel.app`. Every push to GitHub after this will auto-redeploy.

**Re-running the seed script later will wipe and reload all assignments/questions** (but not touch student accounts or their answers) — use it whenever you add or update a unit.

## Database

Uses Postgres via the `pg` package — works with Neon, Supabase, Railway, or any hosted Postgres. `lib/db.js` is the only file that knows about the database engine.

## Adding more units

Add a new file under `prisma/seedData/` (see `hw1_1.js` for the simplest example), add it to the `assignments` array in `prisma/seed.js`, then re-run the seed script.

## Known simplifications in this first draft (worth reviewing)

- A few graph-matching questions use a generated graph based on a reasonable guess at the original function (the source PDFs only showed rendered images, not formulas) — worth double-checking against your key.
- A few "choose the correct multi-part sentence" questions were converted into direct fill-in-the-blank sequences instead of a single multiple-choice paragraph — same skill, more reliable to grade.
- Number-line graphics for inequality answer choices were dropped in favor of checking the interval notation directly.
