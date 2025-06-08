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
      {/* 1. The visible orange cursor circle */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
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
          left: { duration: 0.4 },
          top: { duration: 0.4 },
          width: { duration: 0.3 },
          height: { duration: 0.3 },
          opacity: { duration: 0.3 },
        }}
      />

      {/* 2. Black reveal mask layer (shows black inside the cursor area) */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9998]"
        style={{
          backgroundColor: 'black',
          WebkitMaskImage: `radial-gradient(circle at ${x}px ${y}px, transparent ${cursorSize / 2}px, black ${cursorSize / 2 + 1}px)`,
          WebkitMaskRepeat: 'no-repeat',
          mixBlendMode: 'normal',
        }}
        animate={{
          opacity: isMasked ? 1 : 0,
        }}
        transition={{
          opacity: { duration: 0.3 },
        }}
      />
    </>
  );
}
