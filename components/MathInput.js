import { useEffect, useRef } from 'react';

let mathliveLoaded = false;

export default function MathInput({ value, onChange, placeholder, disabled }) {
  const ref = useRef(null);

  useEffect(() => {
    let cancelled = false;
    if (!mathliveLoaded) {
      import('mathlive').then((ML) => {
        if (cancelled) return;
        mathliveLoaded = true;
        // Keep the on-screen math keyboard's toggle button visible so students
        // who don't know LaTeX shortcuts can tap symbols instead of typing them.
        ML.MathfieldElement.mathVirtualKeyboardPolicy = 'manual';
        setupField();
      });
    } else {
      setupField();
    }

    function setupField() {
      const el = ref.current;
      if (!el) return;
      if (value != null && el.value !== value) el.value = value;
      el.disabled = !!disabled;
    }

    return () => {
      cancelled = true;
    };
  }, [value, disabled]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e) => onChange && onChange(e.target.value);
    el.addEventListener('input', handler);
    return () => el.removeEventListener('input', handler);
  }, [onChange]);

  return (
    <div className="math-input-wrap">
      {/* eslint-disable-next-line react/no-unknown-property */}
      <math-field
        ref={ref}
        class="math-field"
        placeholder={placeholder || 'Type your answer, e.g. sqrt(2) or x^2'}
        math-virtual-keyboard-policy="manual"
        onFocus={(e) => {
          if (window.mathVirtualKeyboard) window.mathVirtualKeyboard.show();
        }}
        onBlur={() => {
          if (window.mathVirtualKeyboard) window.mathVirtualKeyboard.hide();
        }}
      ></math-field>
    </div>
  );
}
