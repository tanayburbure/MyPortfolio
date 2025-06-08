'use client';
import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return pos;
};

export default function TextColorMaskedCursor({ children }) {
  const { x, y } = useMousePosition();
  const size = 100; // cursor mask size

  return (
    <>
      {/* Bottom orange text */}
      <div style={{ color: '#ec4e39', position: 'relative', zIndex: 1 }}>
        {children}
      </div>

      {/* Top black text layer masked by cursor shape */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          color: '#000',
          zIndex: 10,
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
          maskImage: "url('images/mask.svg')",
          maskRepeat: 'no-repeat',
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskSize: `${size}px`,
          userSelect: 'none',
        }}
      >
        {children}
      </div>
    </>
  );
}
