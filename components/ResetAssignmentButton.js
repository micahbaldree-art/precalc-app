import { useState } from 'react';

// "Assignment reset" button + confirmation warning. Used on the assignment
// overview page and inside the question runner.
//
// Props:
//   assignmentId   - which assignment to reset
//   onBeforeReset  - optional; runs right before the request (the runner uses
//                    it to cancel any pending autosave so it cannot re-save
//                    old answers after the wipe)
//   onDone         - runs after a successful reset (reload data / navigate)
export default function ResetAssignmentButton({ assignmentId, onBeforeReset, onDone, className = 'btn secondary' }) {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function confirmReset() {
    setBusy(true);
    setError('');
    try {
      if (onBeforeReset) onBeforeReset();
      const res = await fetch(`/api/assignments/${assignmentId}/reset`, { method: 'POST' });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Could not reset the assignment.');
      setOpen(false);
      if (onDone) onDone();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  function close() {
    if (busy) return;
    setOpen(false);
    setError('');
  }

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>Assignment reset</button>

      {open && (
        <div className="modal-overlay" onClick={close}>
          <div className="modal-box modal-wide" onClick={(e) => e.stopPropagation()}>
            <h2>Reset this assignment?</h2>
            <p style={{ color: '#475569', lineHeight: 1.5 }}>
              This erases your answers on <strong>every question</strong> and unlocks them so you can redo the
              assignment for extra practice.
            </p>
            <p style={{ color: '#475569', lineHeight: 1.5 }}>
              Your grade will <strong>not</strong> change. Questions you already answered correctly keep their
              check mark, and you can still raise your grade by getting any unchecked question right.
            </p>
            {error && <div className="error-box" style={{ marginBottom: 12 }}>{error}</div>}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <button className="btn secondary" onClick={close} disabled={busy}>Cancel</button>
              <button className="btn danger" onClick={confirmReset} disabled={busy}>
                {busy ? 'Resetting…' : 'Yes, reset it'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
