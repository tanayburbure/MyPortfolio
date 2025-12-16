'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ---------------- MOUSE POSITION ---------------- */
const useMousePosition = () => {
  const [mouse, setMouse] = useState(null);

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return mouse;
};

/* ---------------- SCREEN SIZE ---------------- */
const useIsLargeScreen = () => {
  const [isLarge, setIsLarge] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setIsLarge(mq.matches);

    const handler = (e) => setIsLarge(e.matches);
    mq.addEventListener?.('change', handler) || mq.addListener(handler);

    return () => {
      mq.removeEventListener?.('change', handler) || mq.removeListener(handler);
    };
  }, []);

  return isLarge;
};

export default function MaskedCursor() {
  const mouse = useMousePosition();
  const isLargeScreen = useIsLargeScreen();

  const [isMasked, setIsMasked] = useState(true);
  const [cursorSize, setCursorSize] = useState(40);
  const [hasMoved, setHasMoved] = useState(false);

  /* ---------- Detect first mouse move ---------- */
  useEffect(() => {
    if (mouse && !hasMoved) {
      setHasMoved(true);
    }
  }, [mouse, hasMoved]);

  /* ---------- Hover logic ---------- */
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
      style={{
        WebkitMaskImage: "url('images/mask.svg')",
        WebkitMaskRepeat: 'no-repeat',
        backgroundColor: '#ec4e39',
        mixBlendMode: 'difference',
      }}
      /* ⬇️ Start invisible & tiny AT THE CURSOR */
      initial={{
        opacity: 0,
        WebkitMaskSize: '0px',
        WebkitMaskPosition: `${x}px ${y}px`,
      }}
      animate={{
        opacity: hasMoved && isMasked ? 1 : 0,
        WebkitMaskPosition: `${x - cursorSize / 2}px ${y - cursorSize / 2}px`,
        WebkitMaskSize: hasMoved ? `${cursorSize}px` : '0px',
      }}
      transition={{
        opacity: { duration: 0.35, ease: 'easeOut' },
        WebkitMaskSize: { duration: 0.45, ease: 'easeOut' },
        WebkitMaskPosition: {
          type: 'tween',
          ease: 'backOut',
          duration: 0.5,
        },
      }}
    />
  );
}
