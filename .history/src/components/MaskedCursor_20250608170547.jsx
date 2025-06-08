'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

export default function MaskedCursor() {
  const { x, y } = useMousePosition();
  const [isMasked, setIsMasked] = useState(true);
  const [cursorSize, setCursorSize] = useState(40);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const noMaskTarget = e.target.closest('.no-mask');
      const expandTarget = e.target.closest('.cursor-expand');

      setIsMasked(!noMaskTarget);
      setCursorSize(expandTarget ? 400 : 40);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      {/* Orange cursor */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full"
        style={{
          backgroundColor: '#ec4e39',
          width: cursorSize,
          height: cursorSize,
          left: x - cursorSize / 2,
          top: y - cursorSize / 2,
          mixBlendMode: 'normal',
        }}
        animate={{
          left: x - cursorSize / 2,
          top: y - cursorSize / 2,
          width: cursorSize,
          height: cursorSize,
          opacity: isMasked ? 1 : 0,
        }}
        transition={{
          left: { type: 'tween', ease: 'backOut', duration: 0.5 },
          top: { type: 'tween', ease: 'backOut', duration: 0.5 },
          width: { duration: 0.3 },
          height: { duration: 0.3 },
          opacity: { duration: 0.3, ease: 'easeOut' },
        }}
      />

      {/* Black reveal mask */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{
          WebkitMaskImage: 'radial-gradient(circle, white 50%, transparent 51%)',
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: 'black',
          mixBlendMode: 'normal',
        }}
        animate={{
          WebkitMaskPosition: `${x}px ${y}px`,
          WebkitMaskSize: `${cursorSize}px`,
          opacity: isMasked ? 1 : 0,
        }}
        transition={{
          WebkitMaskPosition: { type: 'tween', ease: 'backOut', duration: 0.5 },
          WebkitMaskSize: { duration: 0.3 },
          opacity: { duration: 0.3, ease: 'easeOut' },
        }}
      />
    </>
  );
}