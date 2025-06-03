import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

function About() {
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const element = textRef.current;

      // Initialize SplitText
      const split = new SplitText(element.querySelector('h2'), {
        type: 'lines',
        linesClass: 'line'
      });

      // Animate each line on scroll
      split.lines.forEach((line) => {
        gsap.set(line, { backgroundPositionX: '100%' });

        gsap.to(line, {
          backgroundPositionX: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: line,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            // markers: true, // enable if debugging
          }
        });
      });

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center bg-black'>
      <h5 className='text-sm text-white font-semibold mb-6'>A B O U T &nbsp; M E</h5>
      <div ref={textRef}>
        <h2 className='text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] text-transparent bg-gradient-to-r from-white to-[#252525] bg-[length:200%_100%] bg-right bg-clip-text [-webkit-background-clip:text]'>
          I'm a <span className='text-[#EB5939] bg-none bg-clip-border [-webkit-background-clip:initial]'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
        </h2>
      </div>

      {/* Global line styling */}
      <style jsx global>{`
        .line {
          display: block;
          background: linear-gradient(to right, white 50%, #252525 50%);
          background-size: 200% 100%;
          background-position-x: 100%;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }

        .line span {
          color: #EB5939 !important;
          background: none !important;
          -webkit-background-clip: initial !important;
          background-clip: initial !important;
        }
      `}</style>
    </div>
  );
}

export default About;
