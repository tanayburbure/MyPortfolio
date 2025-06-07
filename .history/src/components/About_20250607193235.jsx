'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText'; // Adjust path if needed

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

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className="relative min-h-screen bg-[#0f0f0f] overflow-hidden">
      {/* Masked About Section */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-start text-black pointer-events-none"
        style={{
          WebkitMaskImage: "url('images/mask.svg')",
          WebkitMaskRepeat: 'no-repeat',
          backgroundColor: '#ec4e39',
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <div
          className="pl-[31vh] pb-4 flex flex-col justify-center h-screen w-full text-[9vh] font-semibold leading-[4.5vw] tracking-tighter pointer-events-auto text-black"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h5 className="text-sm font-semibold mb-6">A B O U T &nbsp; M E</h5>
          <AnimatedText>
            I'm a <span className="text-[#EB5939]">visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
          </AnimatedText>
        </div>
      </motion.div>

      {/* Full Black Cover - No visible content */}
      <div className="absolute w-full h-full bg-[#0f0f0f]" />
    </div>
  );
}
