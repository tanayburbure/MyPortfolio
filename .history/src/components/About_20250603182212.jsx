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
  const fullText = "I'm a <span class='text-[#EB5939]'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.";

  // Split text into words while preserving the span
  const words = [];
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = fullText;
  
  let currentIndex = 0;
  Array.from(tempDiv.childNodes).forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent.split(' ').forEach(word => {
        if (word) words.push({ text: word + ' ', isSpan: false });
      });
    } else if (node.nodeName === 'SPAN') {
      words.push({ 
        text: node.textContent + ' ', 
        isSpan: true,
        className: node.className 
      });
    }
  });

  // Create animation progress for each word
  const wordReveals = words.map((_, i) => {
    const start = i / (words.length * 1.5);
    const end = start + 0.15;
    return useTransform(scrollYProgress, [start, end], [100, 0]);
  });

  return (
    <div 
      ref={containerRef}
      className='h-[200vh] pl-[31vh] pb-4 flex flex-col justify-center'
    >
      <h5 className='text-xm font-semibold mb-6'>A B O U T &nbsp; M E</h5>
      <h2 className='text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]'>
        {words.map((word, i) => (
          <span key={i} className='relative inline-block'>
            {/* Base word - dark color */}
            <span className={`text-[#2F2D29] ${word.isSpan ? word.className.replace('text-[#EB5939]', 'text-[#2F2D29]') : ''}`}>
              {word.text}
            </span>
            
            {/* Revealed word - final color */}
            <motion.span
              style={{ clipPath: useMotionTemplate`inset(0 ${wordReveals[i]}% 0 0)` }}
              className={`absolute left-0 ${word.isSpan ? word.className : 'text-current'}`}
            >
              {word.text}
            </motion.span>
          </span>
        ))}
      </h2>
    </div>
  );
}

export default About;