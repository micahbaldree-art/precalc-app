import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../../lib/useUser';
import TeacherNav from '../../components/TeacherNav';

export default function TeacherAssignments() {
  const user = useUser();
  const router = useRouter();
  const [assignments, setAssignments] = useState(null);

  useEffect(() => {
    if (user === undefined) return;
    if (!user) return router.replace('/login');
    if (user.role !== 'teacher') return router.replace('/assignments');
    load();
  }, [user]);

  function load() {
    fetch('/api/teacher/assignments').then((r) => r.json()).then((d) => setAssignments(d.assignments));
  }

  async function toggle(a) {
    setAssignments((prev) => prev.map((x) => (x.id === a.id ? { ...x, isAssigned: !x.isAssigned } : x)));
    await fetch('/api/teacher/assignments', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: a.id, isAssigned: !a.isAssigned }),
    });
  }

  if (user === undefined || !assignments) return null;

  return (
    <div className="teacher-shell">
      <TeacherNav />
      <div className="teacher-main">
        <h1>Assignment Manager</h1>
        <div className="card" style={{ padding: 0 }}>
          <table className="assign-table">
            <thead>
              <tr>
                <th>Assignment</th>
                <th># Questions</th>
                <th>Assigned</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a) => (
                <tr key={a.id}>
                  <td>{a.title}</td>
                  <td>{a.totalQuestions}</td>
                  <td>
                    <button className={`toggle ${a.isAssigned ? 'on' : ''}`} onClick={() => toggle(a)}>
                      <span className={`knob ${a.isAssigned ? '' : 'x'}`}>{a.isAssigned ? '✓' : '✕'}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
