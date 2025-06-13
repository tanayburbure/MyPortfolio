'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Get mouse position
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

// Get screen size (disable for small devices)
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
      mediaQuery.addListener(handler); // Fallback for Safari
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handler);
      } else {
        mediaQuery.removeListener(handler); // Fallback for Safari
      }
    };
  }, []);

  return isLargeScreen;
};

export default function MaskedCursor() {
  const { x, y } = useMousePosition();
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

      if (expandTarget) {
        setCursorSize(400);
      } else {
        setCursorSize(40);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (!isLargeScreen) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999]"
      initial={{
        WebkitMaskSize: '40px', // start from valid animatable value
      }}
      style={{
        WebkitMaskImage: "url('images/mask.svg')",
        WebkitMaskRepeat: 'no-repeat',
        backgroundColor: '#ec4e39',
        mixBlendMode: 'difference',
        WebkitMaskSize: '40px', // must match `initial` to avoid 'auto'
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
