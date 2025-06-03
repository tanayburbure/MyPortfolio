"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Full sentence split into words
  const text = "I'm a visually skilled interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.";
  const words = text.split(' ');

  const highlightIndex = words.indexOf("visually");
  if (highlightIndex !== -1) {
    words[highlightIndex] = `<span class="text-[#EB5939]">visually</span>`;
  }

  // Sequential reveal: Each word gets a unique segment
  const wordCount = words.length;
  const slice = 1 / wordCount; // Divide scroll into equal parts

  const wordReveals = words.map((_, i) => {
    const start = i * slice;
    const end = start + slice;
    const progress = useTransform(scrollYProgress, [start, end], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${progress}% 0 0)`;
    return { progress, clip };
  });

  return (
    <div 
      ref={containerRef}
      className='min-h-[250vh] pl-[31vh] pb-4 flex flex-col justify-center'
    >
      <h5 className='text-xm font-semibold mb-6'>A B O U T &nbsp; M E</h5>
      <h2 className='text-[9vh] tracking-tighter font-semibold leading-[4.5vw] w-max whitespace-nowrap relative'>
        {words.map((word, i) => (
          <span key={i} className="relative inline-block mr-[0.5vw]">
            {/* Base word in shadow color */}
            <span
              className="text-[#2F2D29]"
              dangerouslySetInnerHTML={{
                __html: word.includes('span')
                  ? word.replace('text-[#EB5939]', 'text-[#2F2D29]')
                  : word
              }}
            />

            {/* Animated reveal layer */}
            <motion.span
              style={{ clipPath: wordReveals[i].clip }}
              className="absolute left-0 top-0 text-black"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          </span>
        ))}
      </h2>
    </div>
  );
}

export default About;
