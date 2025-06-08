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
  const size = 40;
  const [isMasked, setIsMasked] = useState(true);

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
        WebkitMaskImage: isMasked ? "url('images/mask.svg')" : 'none',
        WebkitMaskRepeat: 'no-repeat',
        backgroundColor: isMasked ? '#ec4e39' : 'transparent',
      }}
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
    />
  );
}
