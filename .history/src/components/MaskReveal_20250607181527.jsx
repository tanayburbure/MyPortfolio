'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mouse tracking hook
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

// Reusable hover wrapper
const HoverTarget = ({ setHovered, children }) => (
  <div
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
    {children}
  </div>
);

// Main component
export default function Home() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;

  return (
    <div className="relative h-screen w-screen bg-black cursor-none overflow-hidden">
      {/* Mask Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        style={{
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#ec4e39',
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.4 }}
      />

      {/* Hover target example */}
      <HoverTarget setHovered={setIsHovered}>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-neutral-800  rounded-xl overflow-x-hidden" />
      </HoverTarget>
    </div>
  );
}
