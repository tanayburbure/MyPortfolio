'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ---------------- MOUSE POSITION ---------------- */
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition, { once: true });
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

/* ---------------- SCREEN SIZE CHECK ---------------- */
const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsLargeScreen(mediaQuery.matches);

    const handler = (e) => setIsLargeScreen(e.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
    } else {
      mediaQuery.addListener(handler);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.removeListener(handler);
      }
    };
  }, []);

  return isLargeScreen;
};

export default function MaskedCursor() {
  const mouse = useMousePosition();
  const isLargeScreen = useIsLargeScreen();

  const [isMasked, setIsMasked] = useState(true);
  const [cursorSize, setCursorSize] = useState(40);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;

      const noMaskTarget = target.closest('.no-mask');
      const expandTarget = target.closest('.cursor-expand');

      setIsMasked(!noMaskTarget);
      setCursorSize(expandTarget ? 400 : 40);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  // ⛔ Prevent rendering until mouse position exists
  if (!isLargeScreen || !mouse) return null;

  const { x, y } = mouse;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999]"
      initial={{
        opacity: 0,
        WebkitMaskSize: '40px',
      }}
      style={{
        WebkitMaskImage: "url('images/mask.svg')",
        WebkitMaskRepeat: 'no-repeat',
        backgroundColor: '#ec4e39',
        mixBlendMode: 'difference',
        WebkitMaskSize: '40px',
      }}
      animate={{
        opacity: isMasked ? 1 : 0,
        WebkitMaskPosition: `${x - cursorSize / 2}px ${y - cursorSize / 2}px`,
        WebkitMaskSize: `${cursorSize}px`,
      }}
      transition={{
        WebkitMaskPosition: { type: 'tween', ease: 'backOut', duration: 0.5 },
        WebkitMaskSize: { type: 'tween', duration: 0.3 },
        opacity: { duration: 0.2, ease: 'easeOut' },
      }}
    />
  );
}
