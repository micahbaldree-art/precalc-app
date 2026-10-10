import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../../lib/useUser';
import TeacherNav from '../../components/TeacherNav';

export default function Gradebook() {
  const user = useUser();
  const router = useRouter();
  const [data, setData] = useState(null);
  const [chapter, setChapter] = useState('all'); // 'all' or a chapter name

  useEffect(() => {
    if (user === undefined) return;
    if (!user) {
      router.replace('/login');
      return;
    }
    if (user.role !== 'teacher') {
      router.replace('/assignments');
      return;
    }
    fetch('/api/teacher/gradebook').then((r) => r.json()).then(setData);
  }, [user]);

  if (user === undefined || !data) return null;

  const { assignments, classAverages, students, chapters = [] } = data;

  // "All" is the full gradebook; picking a chapter narrows the columns to that
  // chapter's assignments.
  const visible = chapter === 'all' ? assignments : assignments.filter((a) => a.chapter === chapter);

  // The Overall column follows the filter: it is the average of the assignments
  // currently shown (only ones the student has started, same rule as before).
  // With "All" selected this matches the server's overall exactly.
  function overallFor(s) {
    const vals = visible.map((a) => s.scores[a.id]).filter((v) => v != null);
    return vals.length ? Math.round(vals.reduce((x, y) => x + y, 0) / vals.length) : null;
  }

  return (
    <div className="teacher-shell">
      <TeacherNav />
      <div className="teacher-main">
        <h1>Gradebook</h1>

        <div className="chapter-pills">
          <button className={`chapter-pill ${chapter === 'all' ? 'active' : ''}`} onClick={() => setChapter('all')}>
            All
          </button>
          {chapters.map((c) => (
            <button key={c} className={`chapter-pill ${chapter === c ? 'active' : ''}`} onClick={() => setChapter(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="gradebook-scroll">
          <table className="gradebook">
            <thead>
              <tr>
                <th className="namecol">Student</th>
                <th>{chapter === 'all' ? 'Overall' : `${chapter} avg`}</th>
                {visible.map((a) => <th key={a.id}>{a.title}</th>)}
              </tr>
              <tr className="avgrow">
                <td className="namecol">Class average</td>
                <td>—</td>
                {visible.map((a) => (
                  <td key={a.id}>{classAverages[a.id] != null ? `${classAverages[a.id]}%` : '—'}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td className="namecol">{s.name}</td>
                  <td>{overallFor(s) != null ? `${overallFor(s)}%` : '—'}</td>
                  {visible.map((a) => (
                    <td key={a.id}>{s.scores[a.id] != null ? `${s.scores[a.id]}%` : '—'}</td>
                  ))}
                </tr>
              ))}
              {students.length === 0 && (
                <tr><td colSpan={visible.length + 2} style={{ color: '#64748b' }}>No students yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
