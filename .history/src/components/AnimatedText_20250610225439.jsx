import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const AnimatedText = ({ children, className = '' }) => {
  const textRef = useRef(null);
  const triggersRef = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && textRef.current) {
      const element = textRef.current;

      const split = new SplitText(element, {
        type: 'lines',
        linesClass: 'line',
      });

      // Animate each line with a scroll trigger
      split.lines.forEach((line) => {
        gsap.set(line, { backgroundPositionX: '100%' });

        const trigger = ScrollTrigger.create({
          trigger: line,
          start: 'top 90%',
          end: 'top 60%',
          scrub: 1,
          
        });

        triggersRef.current.push(trigger);
      });

      return () => {
        split.revert();
        triggersRef.current.forEach(trigger => trigger.kill());
        triggersRef.current = [];
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
