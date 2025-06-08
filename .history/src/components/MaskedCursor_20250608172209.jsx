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

      if (expandTarget) {
        setCursorSize(400);
      } else {
        setCursorSize(40);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        backgroundColor: '#ec4e39',
        WebkitMaskImage: `radial-gradient(circle ${cursorSize}px at ${x}px ${y}px, black 99%, transparent 100%)`,
        maskImage: `radial-gradient(circle ${cursorSize}px at ${x}px ${y}px, black 99%, transparent 100%)`,
        mixBlendMode: 'normal',
      }}
      animate={{
        opacity: isMasked ? 1 : 0,
      }}
      transition={{
        opacity: { duration: 0.3, ease: 'easeOut' },
      }}
    />
  );
}
