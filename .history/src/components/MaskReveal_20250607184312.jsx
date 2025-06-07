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

// Hover target wrapper
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

  // Clamp mask position to avoid scroll
  const clampedX = Math.max(0, Math.min(typeof window !== 'undefined' ? window.innerWidth - size : 0, x - size / 2));
  const clampedY = Math.max(0, Math.min(typeof window !== 'undefined' ? window.innerHeight - size : 0, y - size / 2));

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black cursor-none">
      {/* Mask Cursor Layer */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-50"
        style={{
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#ec4e39',
        }}
        animate={{
          WebkitMaskPosition: `${clampedX}px ${clampedY}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.4 }}
      />

      {/* Hoverable target box */}
      <div className="relative w-full h-full">
        <HoverTarget setHovered={setIsHovered}>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-neutral-800 -translate-x-1/2 -translate-y-1/2 rounded-xl" />
        </HoverTarget>
      </div>
    </div>
  );
}