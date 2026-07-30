import { useEffect, useRef } from 'react';

// Singleton promise so every MathInput on the page shares one mathlive load,
// instead of racing to import it independently.
let mathlivePromise = null;
function loadMathLive() {
  if (!mathlivePromise) {
    mathlivePromise = import('mathlive').then((ML) => {
      // 'auto': MathLive shows/hides its own on-screen keyboard as the field
      // gains/loses focus, AND leaves the physical keyboard fully working.
      // We previously drove this manually with 'manual' + onFocus/onBlur
      // calling show()/hide() ourselves — that fought with the field's own
      // focus handling and silently ate physical keystrokes. Let MathLive
      // own this; it's built to support both input methods at once.
      ML.MathfieldElement.mathVirtualKeyboardPolicy = 'auto';
      return ML;
    });
  }
  return mathlivePromise;
}

// IMPORTANT: this is an *uncontrolled* input, by design. MathLive's
// <math-field> manages its own internal editing state (cursor position,
// LaTeX normalization, etc.). If we reactively push our `value` prop back
// into the field on every keystroke, it fights the user's typing — pasting
// the field's own (slightly renormalized) value back into itself resets the
// cursor and swallows input, which makes physical typing look broken while
// the on-screen keyboard buttons (which insert whole, already-normalized
// tokens) still work.
//
// Instead: set `defaultValue` once, when the field first mounts, and never
// touch `.value` again except from user input. The PARENT is responsible for
// giving this component a fresh `key` when the underlying question changes,
// so switching questions correctly remounts it with the new saved answer.
export default function MathInput({ defaultValue, onChange, placeholder, disabled }) {
  const ref = useRef(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  // Mount-once: apply the starting value.
  useEffect(() => {
    let cancelled = false;
    loadMathLive().then(() => {
      if (cancelled) return;
      const el = ref.current;
      if (!el) return;
      if (defaultValue) el.value = defaultValue;
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep disabled state in sync without touching .value.
  useEffect(() => {
    const el = ref.current;
    if (el) el.disabled = !!disabled;
  }, [disabled]);

  // Listen for user edits once; report them upward.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e) => onChangeRef.current && onChangeRef.current(e.target.value);
    el.addEventListener('input', handler);
    return () => el.removeEventListener('input', handler);
  }, []);

  return (
    <div className="math-input-wrap">
      {/* eslint-disable-next-line react/no-unknown-property */}
      <math-field
        ref={ref}
        class="math-field"
        placeholder={placeholder || 'Type your answer, e.g. sqrt(2) or x^2'}
      ></math-field>
    </div>
  );
}
