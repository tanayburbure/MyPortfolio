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
      {/* Mask Layer */}
      <motion.div
        className="absolute w-full h-full flex items-center justify-center text-black text-[64px] leading-[66px] cursor-default pointer-events-none"
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
        <p className="w-[1000px] p-10 pointer-events-auto"
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
        >
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      {/* Visible Text Layer */}
      <div className="w-full h-full flex items-center justify-center text-[#afa18f] text-[64px] leading-[66px] cursor-default">
        <p className="w-[1000px] p-10">
          I'm a <span className="text-[#ec4e39]">selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
        </p>
      </div>

      {/* About Section */}
      <div className="h-screen pl-[31vh] pb-4 flex flex-col justify-center">
        <h5 className="text-sm font-semibold mb-6">A B O U T &nbsp; M E</h5>
        <AnimatedText className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]">
          I'm a <span className="text-[#EB5939]">visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
        </AnimatedText>
      </div>
    </div>
  );
}
