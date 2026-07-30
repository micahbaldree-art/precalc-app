import { useEffect, useRef, useState } from 'react';

let convertFn = null;
let loading = null;

function ensureMathLive() {
  if (convertFn) return Promise.resolve(convertFn);
  if (!loading) {
    loading = import('mathlive').then((ML) => {
      convertFn = ML.convertLatexToMarkup;
      return convertFn;
    });
  }
  return loading;
}

// Splits "some text $$x^2$$ more text" into alternating text/math segments.
function splitSegments(raw) {
  const text = String(raw || '').replace(/\\n/g, '\n');
  const parts = text.split(/\$\$(.+?)\$\$/gs);
  return parts.map((part, i) => ({ isMath: i % 2 === 1, content: part }));
}

export default function MathText({ text, inline = false }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let cancelled = false;
    ensureMathLive().then(() => !cancelled && setReady(true));
    return () => {
      cancelled = true;
    };
  }, []);

  const segments = splitSegments(text);
  const Tag = inline ? 'span' : 'div';

  return (
    <Tag className="math-text">
      {segments.map((seg, i) => {
        if (!seg.isMath) {
          return seg.content.split('\n').map((line, j, arr) => (
            <span key={`${i}-${j}`}>
              {line}
              {j < arr.length - 1 && <br />}
            </span>
          ));
        }
        if (ready && convertFn) {
          return <span key={i} className="math-seg" dangerouslySetInnerHTML={{ __html: convertFn(seg.content) }} />;
        }
        return <span key={i} className="math-seg-pending">{seg.content}</span>;
      })}
    </Tag>
  );
}
