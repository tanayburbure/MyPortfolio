"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Split the text into lines
  const lines = [
    "I'm a <span class='text-[#EB5939]'>visually skilled</span> interactive web designer",
    "and developer with a strong focus on crafting",
    "high-quality, impactful digital experiences."
  ];

  // Create different animation progress for each line
  const line1Progress = useTransform(scrollYProgress, [0, 0.33], [100, 0]);
  const line2Progress = useTransform(scrollYProgress, [0.2, 0.53], [100, 0]);
  const line3Progress = useTransform(scrollYProgress, [0.4, 0.73], [100, 0]);

  const lineStyles = [
    useMotionTemplate`inset(0 ${line1Progress}% 0 0)`,
    useMotionTemplate`inset(0 ${line2Progress}% 0 0)`,
    useMotionTemplate`inset(0 ${line3Progress}% 0 0)`
  ];

  return (
    <div 
      ref={containerRef}
      className='h-screen pl-[31vh] pb-4 flex flex-col justify-center'
    >
      <h5 className='text-xm font-semibold mb-6'>A B O U T &nbsp; M E</h5>
      <div className='text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]'>
        {lines.map((line, index) => (
          <div key={index} className='relative'>
            {/* Base layer - dark text */}
            <div 
              className='text-[#2F2D29]'
              dangerouslySetInnerHTML={{ __html: line.replace('text-[#EB5939]', 'text-[#2F2D29]') }}
            />
            
            {/* Overlay layer - colored text that gets revealed */}
            <motion.div
              style={{ clipPath: lineStyles[index] }}
              className='absolute top-0 left-0'
              dangerouslySetInnerHTML={{ __html: line }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default About;