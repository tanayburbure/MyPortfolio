'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText'; // Ensure this path is correct

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
  const size = isHovered ? 400 : 60;

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Masked Content Layer */}
      <motion.div
        className="absolute inset-0 bg-white text-black flex items-center justify-start"
        style={{
          WebkitMaskImage: `radial-gradient(circle ${size}px at ${x}px ${y}px, black 100%, transparent 100%)`,
          WebkitMaskRepeat: 'no-repeat',
          maskImage: `radial-gradient(circle ${size}px at ${x}px ${y}px, black 100%, transparent 100%)`,
          maskRepeat: 'no-repeat',
        }}
        animate={{}}
        transition={{ duration: 0.3 }}
      >
        {/* About Section Content */}
        <div
          className="pl-[31vh] pb-4 flex flex-col justify-center h-screen w-full text-[9vh] font-semibold leading-[4.5vw] tracking-tighter pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h5 className="text-sm font-semibold mb-6">A B O U T &nbsp; M E</h5>
          <AnimatedText>
            I'm a <span className="text-[#EB5939]">visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
          </AnimatedText>
        </div>
      </motion.div>

      {/* Fully Black Base Layer */}
      <div className="absolute inset-0 bg-black z-[-1]" />
    </div>
  );
}
