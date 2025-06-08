'use client';

import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

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
  const size = 40;
  const [isMasked, setIsMasked] = useState(true);

  // Smooth animated cursor movement using useSpring
  const smoothX = useSpring(x - size / 2, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(y - size / 2, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target.closest('.no-mask');
      setIsMasked(!target);
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
      }}
      animate={{
        WebkitMaskPosition: `${smoothX.get()}px ${smoothY.get()}px`,
        WebkitMaskSize: `${size}px`,
        opacity: isMasked ? 1 : 0, // Smooth fade out
      }}
      transition={{
        opacity: { duration: 0.25, ease: 'easeOut' },
        WebkitMaskPosition: { duration: 0.3, ease: 'easeOut' },
      }}
    />
  );
}
