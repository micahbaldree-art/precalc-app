import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../../lib/useUser';
import TeacherNav from '../../components/TeacherNav';

export default function Roster() {
  const user = useUser();
  const router = useRouter();
  const [students, setStudents] = useState(null);
  const [confirming, setConfirming] = useState(false);

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
    load();
  }, [user]);

  function load() {
    fetch('/api/teacher/roster').then((r) => r.json()).then((d) => setStudents(d.students));
  }

  async function deleteAll() {
    await fetch('/api/teacher/roster', { method: 'DELETE' });
    setConfirming(false);
    load();
  }

  if (user === undefined || !students) return null;

  return (
    <div className="teacher-shell">
      <TeacherNav />
      <div className="teacher-main">
        <h1>Class Roster</h1>
        <div className="card" style={{ marginBottom: 20 }}>
          <p style={{ marginTop: 0, color: '#64748b' }}>
            At the end of the semester, use this to clear out every student account before the next class signs up.
          </p>
          <button className="btn danger" onClick={() => setConfirming(true)}>Delete all students</button>
        </div>

        <div className="card" style={{ padding: 0 }}>
          <table className="assign-table">
            <thead>
              <tr><th>Name</th><th>Email</th><th>Joined</th></tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td>{s.lastName}, {s.firstName}</td>
                  <td>{s.email}</td>
                  <td>{new Date(s.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
              {students.length === 0 && <tr><td colSpan={3} style={{ color: '#64748b' }}>No students yet.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      {confirming && (
        <div className="modal-overlay" onClick={() => setConfirming(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Delete all students?</h2>
            <p style={{ color: '#64748b' }}>This permanently removes every student account and their answers. This can't be undone.</p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 10 }}>
              <button className="btn secondary" onClick={() => setConfirming(false)}>Cancel</button>
              <button className="btn danger" onClick={deleteAll}>Delete all</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
