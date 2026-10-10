import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../../../lib/useUser';
import TopBar from '../../../components/TopBar';
import ResetAssignmentButton from '../../../components/ResetAssignmentButton';

export default function AssignmentOverview() {
  const user = useUser();
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (user === undefined || !id) return;
    if (!user) {
      router.replace('/login');
      return;
    }
    fetch(`/api/assignments/${id}`)
      .then(async (r) => {
        const d = await r.json();
        if (!r.ok) throw new Error(d.error);
        return d;
      })
      .then(setData)
      .catch((e) => setError(e.message));
  }, [user, id, reloadKey]);

  if (user === undefined) return null;
  if (error) return <div className="page"><div className="error-box">{error}</div></div>;
  if (!data) return null;

  const { assignment, questions } = data;

  return (
    <div>
      <TopBar user={user} />
      <div className="page">
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
            <h1>{assignment.title}</h1>
            <ResetAssignmentButton assignmentId={assignment.id} onDone={() => setReloadKey((k) => k + 1)} />
          </div>
          <div className="score-banner">
            <div>Score: {assignment.correctCount} of {assignment.totalQuestions} correct ({assignment.percent}%)</div>
            <div className="score-track"><div className="score-fill" style={{ width: `${assignment.percent}%` }} /></div>
          </div>

          <div className="question-grid">
            {questions.map((q, i) => (
              <div
                key={q.id}
                className={`question-tile ${q.everCorrect ? 'correct' : ''}`}
                onClick={() => router.push(`/assignments/${assignment.id}/q/${q.id}`)}
              >
                Question {i + 1}
                {q.everCorrect && <span className="check">✓</span>}
              </div>
            ))}
          </div>

          {questions.length > 0 && (
            <div style={{ marginTop: 20 }}>
              <button className="btn" onClick={() => router.push(`/assignments/${assignment.id}/q/${questions[0].id}`)}>
                {questions.some((q) => q.everCorrect || q.draft) ? 'Resume' : 'Start'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
