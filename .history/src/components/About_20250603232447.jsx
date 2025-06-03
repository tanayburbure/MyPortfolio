import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

function About() {
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const element = textRef.current;

      const split = new SplitText(element.querySelector('h2'), {
        type: 'lines',
        linesClass: 'line',
      });

      split.lines.forEach((line) => {
        gsap.set(line, {
          backgroundPositionX: '100%',
        });

        gsap.to(line, {
          backgroundPositionX: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: line,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        });
      });

      return () => {
        split.revert();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <div className="h-screen pl-[31vh] pb-4 flex flex-col justify-center bg-black">
      <h5 className="text-sm text-white font-semibold mb-6">A B O U T &nbsp; M E</h5>
      <div ref={textRef}>
        <h2 className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] text-transparent bg-[length:200%_100%] bg-right bg-clip-text [-webkit-background-clip:text]">
          I'm a{' '}
          <span className="orange">visually skilled</span>{' '}
          interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
        </h2>
      </div>

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

        .line .orange {
          background: linear-gradient(to right, #EB5939 50%, #252525 50%);
          background-size: 200% 100%;
          background-position-x: 100%;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }
      `}</style>
    </div>
  );
}

export default About;
