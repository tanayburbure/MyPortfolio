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
  const size = 80; // Slightly bigger like your screenshot
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
        WebkitMaskImage: "url('/images/mask.svg')",  // Your uploaded SVG with transparent center
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: `${size}px`,
        backgroundColor: '#ec4e39', // orange fill for visible circle
        mixBlendMode: 'normal',     // so orange shows, and center cuts through
      }}
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        opacity: isMasked ? 1 : 0,
      }}
      transition={{
        WebkitMaskPosition: { type: 'tween', ease: 'backOut', duration: 0.5 },
        opacity: { duration: 0.3, ease: 'easeOut' },
      }}
    />
  );
}
