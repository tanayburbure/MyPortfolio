'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/* ---------------- MOUSE POSITION ---------------- */
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

/* ---------------- SCREEN SIZE ---------------- */
const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsLargeScreen(mq.matches);

    const handler = (e) => setIsLargeScreen(e.matches);
    mq.addEventListener ? mq.addEventListener('change', handler) : mq.addListener(handler);

    return () => {
      mq.removeEventListener
        ? mq.removeEventListener('change', handler)
        : mq.removeListener(handler);
    };
  }, []);

  return isLargeScreen;
};

export default function MaskedCursor() {
  const mouse = useMousePosition();
  const isLargeScreen = useIsLargeScreen();

  const [isMasked, setIsMasked] = useState(true);
  const [cursorSize, setCursorSize] = useState(40);

  const hasMoved = useRef(false);

  useEffect(() => {
    if (mouse && !hasMoved.current) {
      hasMoved.current = true;
    }
  }, [mouse]);

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

  if (!isLargeScreen || !mouse) return null;

  const { x, y } = mouse;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999]"
      initial={false} // ⛔ disable first animation
      style={{
        WebkitMaskImage: "url('images/mask.svg')",
        WebkitMaskRepeat: 'no-repeat',
        backgroundColor: '#ec4e39',
        mixBlendMode: 'difference',
      }}
      animate={{
        opacity: isMasked ? 1 : 0,
        WebkitMaskPosition: `${x - cursorSize / 2}px ${y - cursorSize / 2}px`,
        WebkitMaskSize: `${cursorSize}px`,
      }}
      transition={{
        WebkitMaskPosition: hasMoved.current
          ? { type: 'tween', ease: 'backOut', duration: 0.5 }
          : { duration: 0 }, // 👈 no animation on first move
        WebkitMaskSize: hasMoved.current
          ? { type: 'tween', duration: 0.3 }
          : { duration: 0 },
        opacity: { duration: 0.2 },
      }}
    />
  );
}
