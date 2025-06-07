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

// Reusable hover component
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

      {/* Custom Cursor Mask Layer */}
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
      >
        <div className="flex items-center justify-center w-full h-full text-black text-[64px] leading-[66px]">
          <HoverTarget setHovered={setIsHovered}>
            <p className="w-[1000px] p-10">
              A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
            </p>
          </HoverTarget>
        </div>
      </motion.div>

      {/* Main Body Layer */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-[#afa18f] text-[64px] leading-[66px]">
        <p className="w-[1000px] p-10">
          I'm a <span className="text-[#ec4e39]">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </div>
  );
}
