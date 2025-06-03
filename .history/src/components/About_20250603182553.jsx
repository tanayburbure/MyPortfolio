"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Full text with highlighted span
  const text = "I'm a visually skilled interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.";
  const words = text.split(' ');
  
  // Highlight specific word
  const highlightIndex = words.indexOf("visually");
  if (highlightIndex !== -1) {
    words[highlightIndex] = `<span class="text-[#EB5939]">${words[highlightIndex]}</span>`;
  }

  // Create animation progress for each word (staggered)
  const wordReveals = words.map((_, i) => {
    const start = i * 0.05;  // 5% scroll progress between words
    const end = start + 0.1;  // Each word takes 10% to reveal
    return {
      clipProgress: useTransform(scrollYProgress, [start, end], [100, 0]),
      style: useMotionTemplate`inset(0 ${useTransform(scrollYProgress, [start, end], [100, 0])}% 0 0)`
    };
  });

  return (
    <div 
      ref={containerRef}
      className='min-h-[200vh] pl-[31vh] pb-4 flex flex-col justify-center'
    >
      <h5 className='text-xm font-semibold mb-6'>A B O U T &nbsp; M E</h5>
      <h2 className='text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]'>
        {words.map((word, i) => (
          <span key={i} className="relative inline-block mr-1">
            {/* Base word - dark color */}
            <span 
              className="text-[#2F2D29]" 
              dangerouslySetInnerHTML={{ 
                __html: word.includes('span') ? 
                  word.replace('text-[#EB5939]', 'text-[#2F2D29]') : 
                  word 
              }} 
            />
            
            {/* Revealed word - final color */}
            <motion.span
              style={{ clipPath: wordReveals[i].style }}
              className="absolute left-0"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          </span>
        ))}
      </h2>
    </div>
  );
}

export default About;