import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const AnimatedText = ({ children, className = '' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && textRef.current) {
      const element = textRef.current;

      const split = new SplitText(element, {
        type: 'lines',
        linesClass: 'line',
      });

      split.lines.forEach((line) => {
        gsap.set(line, { backgroundPositionX: '100%' });

        gsap.to(line, {
          backgroundPositionX: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: line,
            start: '150% center', // Adjust this percentage (e.g., 20% from the top of the viewport)
            end: '80% center',   // Adjust this percentage (e.g., 80% from the top of the viewport)
            scrub: 1,
          },
        });
      });

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <>
      <h2
        ref={textRef}
        className={`
          ${className}
          text-transparent 
          bg-gradient-to-r from-[#212121] to-[#B7AB98] 
          bg-[length:200%_100%] bg-right bg-clip-text [-webkit-background-clip:text]
          text-[5vh] sm:text-[6vh] md:text-[7vh] lg:text-[8vh]
          leading-[6vw] sm:leading-[5vw] md:leading-[4.5vw] lg:leading-[4.2vw]
          w-[95%] sm:w-[85%] md:w-[80%] lg:w-[77%]
        `}
      >
        {children}
      </h2>

      <style>{`
        .line {
          display: block;
          background: linear-gradient(to right, #B7AB98 50%, #212121 50%);
          background-size: 200% 100%;
          background-position-x: 100%;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }
      `}</style>
    </>
  );
};

export default AnimatedText;
