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

export default function MaskedCursorWithTextColor({ children }) {
  const { x, y } = useMousePosition();
  const size = 60;

  return (
    <>
      {/* Bottom text in orange */}
      <div style={{ color: '#ec4e39', position: 'relative', zIndex: 1 }}>
        {children}
      </div>

      {/* Black text overlay masked by cursor shape */}
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
          transition: 'mask-position 0.1s ease, -webkit-mask-position 0.1s ease',
        }}
      >
        {children}
      </div>

      {/* Orange cursor shape */}
      <div
        style={{
          position: 'fixed',
          top: y - size / 2,
          left: x - size / 2,
          width: size,
          height: size,
          pointerEvents: 'none',
          backgroundColor: '#ec4e39',
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain',
          WebkitMaskPosition: 'center',
          maskImage: "url('images/mask.svg')",
          maskRepeat: 'no-repeat',
          maskSize: 'contain',
          maskPosition: 'center',
          borderRadius: '50%',
          zIndex: 20,
          userSelect: 'none',
          transition: 'top 0.1s ease, left 0.1s ease',
        }}
      />
    </>
  );
}
