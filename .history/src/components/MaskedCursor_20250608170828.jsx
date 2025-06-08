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
      setCursorSize(expandTarget ? 400 : 40);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <>
      {/* Layer that reveals black clone of text underneath */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9998]"
        style={{
          WebkitMaskImage: 'radial-gradient(circle, white 60%, transparent 61%)',
          WebkitMaskRepeat: 'no-repeat',
          background: 'black',
        }}
        animate={{
          WebkitMaskPosition: `${x}px ${y}px`,
          WebkitMaskSize: `${cursorSize}px`,
          opacity: isMasked ? 1 : 0,
        }}
        transition={{
          WebkitMaskPosition: { duration: 0.3 },
          WebkitMaskSize: { duration: 0.3 },
          opacity: { duration: 0.3 },
        }}
      >
        {/* Black colored clone layer of your page */}
        <div
          className="fixed inset-0 text-black bg-transparent pointer-events-none"
          style={{
            zIndex: -1,
            padding: 'inherit',
          }}
        >
          {/* 🟡 This part must clone the actual content.
              You can use something like:
              document.querySelector('#main-content').innerHTML */}
        </div>
      </motion.div>

      {/* Orange Cursor Circle */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          backgroundColor: '#ec4e39',
          width: cursorSize,
          height: cursorSize,
          left: x - cursorSize / 2,
          top: y - cursorSize / 2,
          mixBlendMode: 'normal',
        }}
        animate={{
          left: x - cursorSize / 2,
          top: y - cursorSize / 2,
          width: cursorSize,
          height: cursorSize,
          opacity: isMasked ? 1 : 0,
        }}
        transition={{
          left: { duration: 0.3 },
          top: { duration: 0.3 },
          width: { duration: 0.3 },
          height: { duration: 0.3 },
          opacity: { duration: 0.3 },
        }}
      />
    </>
  );
}
