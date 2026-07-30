import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useUser } from '../lib/useUser';
import TopBar from '../components/TopBar';

export default function Assignments() {
  const user = useUser();
  const router = useRouter();
  const [assignments, setAssignments] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (user === undefined) return;
    if (!user) {
      router.replace('/login');
      return;
    }
    load(filter);
  }, [user, filter]);

  function load(f) {
    fetch(`/api/assignments?status=${f}`)
      .then((r) => r.json())
      .then((d) => setAssignments(d.assignments));
  }

  if (user === undefined || assignments === null) return null;

  return (
    <div>
      <TopBar user={user} />
      <div className="page">
        <h1>Assignments</h1>
        <select className="filter-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Assignments</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <div className="card" style={{ padding: 0 }}>
          <table className="assign-table">
            <thead>
              <tr>
                <th>Assignment</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {assignments.length === 0 && (
                <tr><td colSpan={2} style={{ color: '#64748b' }}>Nothing here.</td></tr>
              )}
              {assignments.map((a) => (
                <tr key={a.id}>
                  <td><Link href={`/assignments/${a.id}`}>{a.title}</Link></td>
                  <td>
                    <span className={`progress-pill ${a.complete ? 'complete' : a.correctCount > 0 ? 'partial' : 'none'}`}>
                      {a.correctCount}/{a.totalQuestions} ({a.percent}%)
                    </span>
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
