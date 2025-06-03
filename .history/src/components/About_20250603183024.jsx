"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Text lines matching your reference image
  const lines = [
    "I'm a selectively skilled product",
    "designer with strong focus on",
    "producing high quality &",
    "impactful digital experience"
  ];

  // Create animation for each word
  const wordAnimations = lines.flatMap((line, lineIndex) => {
    const words = line.split(' ');
    return words.map((word, wordIndex) => {
      const position = lineIndex * 0.2 + wordIndex * 0.05;
      return {
        word,
        clipProgress: useTransform(scrollYProgress, [position, position + 0.1], [100, 0]),
        style: useMotionTemplate`inset(0 ${useTransform(scrollYProgress, [position, position + 0.1], [100, 0])}% 0 0)`
      };
    });
  });

  return (
    <div 
      ref={containerRef}
      className='min-h-[200vh] pl-[15vw] pb-4 flex flex-col justify-center'
    >
      <h5 className='text-sm font-semibold mb-6'>A B O U T &nbsp; M E</h5>
      
      <div className='text-[6vh] tracking-tighter w-[80%] font-medium leading-[1.2]'>
        {wordAnimations.map(({ word, style }, i) => (
          <span key={i} className="relative inline-block mr-1">
            {/* Base word - dark color */}
            <span className="text-[#2F2D29]">
              {word}
            </span>
            
            {/* Revealed word - white color */}
            <motion.span
              style={{ clipPath: style }}
              className="absolute left-0 text-white"
            >
              {word}
            </motion.span>
            
            {/* Add line break after each line's last word */}
            {i < wordAnimations.length - 1 && 
             wordAnimations[i+1].word === lines[0].split(' ')[0] && <br />}
          </span>
        ))}
      </div>
    </div>
  );
}

export default About;