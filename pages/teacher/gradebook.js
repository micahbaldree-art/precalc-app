import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../../lib/useUser';
import TeacherNav from '../../components/TeacherNav';

export default function Gradebook() {
  const user = useUser();
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (user === undefined) return;
    if (!user) return router.replace('/login');
    if (user.role !== 'teacher') return router.replace('/assignments');
    fetch('/api/teacher/gradebook').then((r) => r.json()).then(setData);
  }, [user]);

  if (user === undefined || !data) return null;

  const { assignments, classAverages, students } = data;

  return (
    <div className="teacher-shell">
      <TeacherNav />
      <div className="teacher-main">
        <h1>Gradebook</h1>
        <div className="card" style={{ overflowX: 'auto' }}>
          <table className="gradebook">
            <thead>
              <tr>
                <th className="namecol">Student</th>
                <th>Overall</th>
                {assignments.map((a) => <th key={a.id}>{a.title}</th>)}
              </tr>
              <tr className="avgrow">
                <td className="namecol">Class average</td>
                <td>—</td>
                {assignments.map((a) => (
                  <td key={a.id}>{classAverages[a.id] != null ? `${classAverages[a.id]}%` : '—'}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td className="namecol">{s.name}</td>
                  <td>{s.overall != null ? `${s.overall}%` : '—'}</td>
                  {assignments.map((a) => (
                    <td key={a.id}>{s.scores[a.id] != null ? `${s.scores[a.id]}%` : '—'}</td>
                  ))}
                </tr>
              ))}
              {students.length === 0 && (
                <tr><td colSpan={assignments.length + 2} style={{ color: '#64748b' }}>No students yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
