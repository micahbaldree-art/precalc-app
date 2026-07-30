import { useState } from 'react';

// Renders an inline SVG small by default (so it doesn't dominate the page).
// Clicking it opens a full-screen overlay with a larger version; clicking
// again (or the backdrop) shrinks it back down.
export default function ZoomableSvg({ svg, maxWidth = 320 }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <div
        className="svg-wrap svg-wrap-small"
        style={{ maxWidth, cursor: 'zoom-in', margin: '16px 0' }}
        onClick={() => setZoomed(true)}
        title="Click to enlarge"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      {zoomed && (
        <div className="modal-overlay" style={{ cursor: 'zoom-out' }} onClick={() => setZoomed(false)}>
          <div
            className="svg-wrap svg-wrap-large"
            onClick={() => setZoomed(false)}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </div>
      )}
    </>
  );
}
