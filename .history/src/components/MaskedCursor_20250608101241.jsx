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
      setIsMasked(!e.target.closest('.no-mask'));
    };
    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      {/* BLACK TEXT LAYER */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#000',
          mixBlendMode: 'exclusion', // This will invert light colors to dark
        }}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`,
          opacity: isMasked ? 1 : 0,
        }}
        transition={{
          WebkitMaskPosition: { type: 'tween', ease: 'backOut', duration: 0.5 },
          opacity: { duration: 0.2, ease: 'easeOut' },
        }}
      />

      {/* ORIGINAL ORANGE CURSOR (UNCHANGED) */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9998]"
        style={{
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#ec4e39',
        }}
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px`,
          opacity: isMasked ? 1 : 0,
        }}
        transition={{
          WebkitMaskPosition: { type: 'tween', ease: 'backOut', duration: 0.5 },
          opacity: { duration: 0.2, ease: 'easeOut' },
        }}
      />
    </>
  );
}