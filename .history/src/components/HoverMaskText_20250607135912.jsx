// HoverMaskText.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mouse position hook
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 }); // Start off-screen

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
}

export default function HoverMaskText() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Masked Layer */}
      <motion.div
        className="absolute inset-0 bg-[#ec4e39] text-black flex items-center justify-center pointer-events-none"
        style={{
          WebkitMaskImage: `url('images/mask.svg')`,
          WebkitMaskRepeat: 'no-repeat',
          maskImage: `url('/mask.svg')`,
          maskRepeat: 'no-repeat',
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <p className="w-full max-w-4xl p-10 text-4xl leading-tight text-center">
          A visual designer – with skills that haven't been replaced by A.I (yet) – making good stuff only if the paycheck is equally good.
        </p>
      </motion.div>

      {/* Base Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 text-[#afa18f] text-4xl leading-tight text-center">
        <p className="w-full max-w-4xl p-10">
          I'm a <span className="text-[#ec4e39]">selectively skilled</span> product
          designer with strong focus on producing high quality & impactful digital
          experience.
        </p>
      </div>

      {/* Hover trigger layer */}
      <div
        className="absolute inset-0 z-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
}
