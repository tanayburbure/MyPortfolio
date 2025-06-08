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
  const [cursorSize, setCursorSize] = useState(40); // default size

  useEffect(() => {
    const handleMouseOver = (e) => {
      const noMaskTarget = e.target.closest('.no-mask');
      const expandTarget = e.target.closest('.cursor-expand');

      // Toggle masking off if hovering .no-mask
      setIsMasked(!noMaskTarget);

      // Resize cursor if hovering .cursor-expand
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
        WebkitMaskImage: "url('images/mask.svg')",
        WebkitMaskRepeat: 'no-repeat',
        backgroundColor: '#ec4e39',
        mixBlendMode: 'exclusion',
      }}
      animate={{
        WebkitMaskPosition: `${x - cursorSize / 2}px ${y - cursorSize / 2}px`,
        WebkitMaskSize: `${cursorSize}px`,
        opacity: isMasked ? 1 : 0,
      }}
      transition={{
        WebkitMaskPosition: { type: 'tween', ease: 'backOut', duration: 0.5 },
        WebkitMaskSize: { type: 'tween', duration: 0.3 },
        opacity: { duration: 0.3, ease: 'easeOut' },
      }}
    />
  );
}
