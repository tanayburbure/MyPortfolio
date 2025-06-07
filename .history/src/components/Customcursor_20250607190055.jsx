'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mouse position hook
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

// Reusable hover wrapper (if needed for future interaction)
const HoverTarget = ({ children, setHovered }) => (
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
    <div className="relative h-screen bg-[#0f0f0f] overflow-hidden cursor-none">
      {/* Custom Cursor */}
      <motion.div
        className="fixed z-[60] rounded-full bg-white pointer-events-none"
        style={{
          width: 40,
          height: 40,
          top: y - 20,
          left: x - 20,
        }}
      />

      {/* Custom Mask Layer */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-full h-full z-50"
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
    </div>
  );
}
