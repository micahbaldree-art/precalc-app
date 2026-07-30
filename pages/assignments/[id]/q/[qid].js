import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../../../../lib/useUser';
import MathInput from '../../../../components/MathInput';
import MathText from '../../../../components/MathText';

function renderChoice(choice) {
  if (typeof choice === 'string') return <MathText text={choice} inline />;
  if (choice.svg) return <div className="choice-svg" dangerouslySetInnerHTML={{ __html: choice.svg }} />;
  if (choice.text) return <MathText text={choice.text} inline />;
  return null;
}

function PartInput({ part, value, onChange, disabled }) {
  if (part.type === 'mc') {
    return (
      <div>
        {part.choices.map((choice, i) => (
          <label key={i} className={`choice-row ${value === i ? 'selected' : ''}`}>
            <input type="radio" name={part.id} checked={value === i} disabled={disabled} onChange={() => onChange(i)} />
            {renderChoice(choice)}
          </label>
        ))}
      </div>
    );
  }
  if (part.type === 'multi') {
    const sel = Array.isArray(value) ? value : [];
    return (
      <div>
        {part.choices.map((choice, i) => (
          <label key={i} className={`choice-row ${sel.includes(i) ? 'selected' : ''}`}>
            <input
              type="checkbox"
              checked={sel.includes(i)}
              disabled={disabled}
              onChange={(e) => {
                const next = e.target.checked ? [...sel, i] : sel.filter((x) => x !== i);
                onChange(next);
              }}
            />
            {renderChoice(choice)}
          </label>
        ))}
      </div>
    );
  }
  if (part.type === 'expr' || part.type === 'list') {
    return (
      <div>
        <MathInput value={value || ''} onChange={onChange} disabled={disabled} />
        {part.type === 'list' && <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: 4 }}>Separate multiple answers with a comma.</div>}
      </div>
    );
  }
  if (part.type === 'interval' || part.type === 'point') {
    return (
      <input
        className="input"
        style={{ maxWidth: 360 }}
        value={value || ''}
        disabled={disabled}
        placeholder={part.type === 'interval' ? 'e.g. (-infinity,-3]U[5,infinity)' : 'e.g. (3,-5)'}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  if (part.type === 'factor') {
    const v = value || {};
    return (
      <div>
        <label className={`choice-row ${v.choice === 'factor' ? 'selected' : ''}`}>
          <input type="radio" name={part.id} checked={v.choice === 'factor'} disabled={disabled} onChange={() => onChange({ ...v, choice: 'factor' })} />
          <span>Factor it:</span>
          <MathInput value={v.expr || ''} onChange={(val) => onChange({ choice: 'factor', expr: val })} disabled={disabled || v.choice !== 'factor'} />
        </label>
        <label className={`choice-row ${v.choice === 'prime' ? 'selected' : ''}`}>
          <input type="radio" name={part.id} checked={v.choice === 'prime'} disabled={disabled} onChange={() => onChange({ choice: 'prime' })} />
          <span>The polynomial is prime.</span>
        </label>
      </div>
    );
  }
  if (part.type === 'text') {
    return <input className="input" style={{ maxWidth: 360 }} value={value || ''} disabled={disabled} onChange={(e) => onChange(e.target.value)} />;
  }
  return null;
}

export default function QuestionRunner() {
  const user = useUser();
  const router = useRouter();
  const { id, qid } = router.query;
  const [data, setData] = useState(null);
  const [draft, setDraft] = useState({});
  const [error, setError] = useState('');
  const [saveStatus, setSaveStatus] = useState('');
  const [showIncorrect, setShowIncorrect] = useState(false);
  const saveTimer = useRef(null);

  const load = useCallback(() => {
    if (!id) return;
    fetch(`/api/assignments/${id}`)
      .then(async (r) => {
        const d = await r.json();
        if (!r.ok) throw new Error(d.error);
        return d;
      })
      .then(setData)
      .catch((e) => setError(e.message));
  }, [id]);

  useEffect(() => {
    if (user === undefined) return;
    if (!user) {
      router.replace('/login');
      return;
    }
    load();
  }, [user, id, load]);

  const question = data?.questions.find((q) => String(q.id) === String(qid));

  useEffect(() => {
    if (question) setDraft(question.draft || {});
  }, [question?.id]);

  function updatePart(partId, value) {
    const next = { ...draft, [partId]: value };
    setDraft(next);
    setSaveStatus('Saving…');
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => saveDraft(next), 600);
  }

  async function saveDraft(d) {
    await fetch(`/api/answers/${qid}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ draft: d }),
    });
    setSaveStatus('Saved');
  }

  async function manualSave() {
    clearTimeout(saveTimer.current);
    await saveDraft(draft);
  }

  async function checkAnswer() {
    clearTimeout(saveTimer.current);
    const res = await fetch(`/api/answers/${qid}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ draft, submit: true }),
    });
    const result = await res.json();
    if (result.correct) {
      load();
    } else {
      setShowIncorrect(true);
    }
  }

  if (user === undefined) return null;
  if (error) return <div className="page"><div className="error-box">{error}</div></div>;
  if (!data || !question) return null;

  const { assignment, questions } = data;
  const qIndex = questions.findIndex((q) => q.id === question.id);
  const isCorrect = question.isCorrect;

  return (
    <div className="runner">
      <div className="runner-sidebar">
        <div style={{ padding: '16px', fontWeight: 700, borderBottom: '1px solid #e2e8f0' }}>Question list</div>
        {questions.map((q, i) => (
          <div
            key={q.id}
            className={`qlink ${String(q.id) === String(qid) ? 'active' : ''} ${q.isCorrect ? 'correct' : ''}`}
            onClick={() => router.push(`/assignments/${id}/q/${q.id}`)}
          >
            <span>{q.isCorrect ? '✓' : '○'}</span> Question {i + 1}
          </div>
        ))}
      </div>

      <div style={{ flex: 1 }}>
        <div className="runner-topbar">
          <div>
            <div style={{ fontWeight: 700 }}>Homework: {assignment.title}</div>
            <div style={{ fontSize: '0.85rem', opacity: 0.9 }}>
              <button className="link" style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }} onClick={() => {
                const prev = questions[qIndex - 1];
                if (prev) router.push(`/assignments/${id}/q/${prev.id}`);
              }}>‹</button>
              {' '}Question {qIndex + 1} of {questions.length}{' '}
              <button className="link" style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }} onClick={() => {
                const next = questions[qIndex + 1];
                if (next) router.push(`/assignments/${id}/q/${next.id}`);
              }}>›</button>
            </div>
          </div>
          <div className="scorebox">
            <div>Score: {assignment.percent}% ({assignment.correctCount} of {assignment.totalQuestions})</div>
          </div>
          <button className="btn" onClick={manualSave}>Save</button>
        </div>

        <div style={{ padding: '28px 40px' }}>
          <div className="card">
            <MathText text={question.prompt} />
            {question.svg && <div className="svg-wrap" style={{ margin: '16px 0' }} dangerouslySetInnerHTML={{ __html: question.svg }} />}

            <div style={{ marginTop: 20 }}>
              {question.parts.map((part) => (
                <div className="part-block" key={part.id}>
                  {part.label && <div className="part-label">{part.label}</div>}
                  <PartInput part={part} value={draft[part.id]} onChange={(v) => updatePart(part.id, v)} disabled={isCorrect} />
                </div>
              ))}
            </div>

            <div className="submit-row">
              {isCorrect ? (
                <span className="submitted-flag">✓ Submitted — correct!</span>
              ) : (
                <>
                  <button className="btn" onClick={checkAnswer}>Check answer</button>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{saveStatus}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {showIncorrect && (
        <div className="modal-overlay" onClick={() => setShowIncorrect(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Incorrect answer</h2>
            <p style={{ color: '#64748b' }}>Give it another try.</p>
            <button className="btn" onClick={() => setShowIncorrect(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}
