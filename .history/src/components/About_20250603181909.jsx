"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animate from fully clipped (100%) to fully revealed (0%)
  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div 
      ref={containerRef}
      className='h-screen pl-[31vh] pb-4 flex flex-col justify-center overflow-hidden'
    >
      <h5 className='text-xm font-semibold mb-6'>A B O U T &nbsp; M E</h5>

      <div className='relative w-max whitespace-nowrap'>
        {/* Base layer - dark shade text */}
        <h2 className='text-[9vh] tracking-tighter font-semibold leading-[4.5vw] text-[#2F2D29]'>
          I'm a <span className='text-[#2F2D29]'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
        </h2>

        {/* Overlay layer - animated reveal */}
        <motion.h2 
          style={{ clipPath: clipPathStyle }}
          className='absolute top-0 left-0 text-[9vh] tracking-tighter font-semibold leading-[4.5vw] text-black whitespace-nowrap'
        >
          I'm a <span className='text-[#EB5939]'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
        </motion.h2>
      </div>
    </div>
  );
}

export default About;
