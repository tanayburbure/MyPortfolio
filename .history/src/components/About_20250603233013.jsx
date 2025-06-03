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

      // Split the main h2 into lines
      const split = new SplitText(element.querySelector('h2'), {
        type: 'lines',
        linesClass: 'line'
      });

      // Also split the span inside h2 (visually skilled)
      const span = element.querySelector('span');
      const splitSpan = new SplitText(span, {
        type: 'lines',
        linesClass: 'line-span'
      });

      // Animate main lines (white to dark gradient)
      split.lines.forEach(line => {
        gsap.set(line, { backgroundPositionX: '100%' });

        gsap.to(line, {
          backgroundPositionX: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: line,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          }
        });
      });

      // Animate span lines (dark orange to bright orange gradient)
      splitSpan.lines.forEach(line => {
        gsap.set(line, { backgroundPositionX: '100%' });

        gsap.to(line, {
          backgroundPositionX: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: line,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          }
        });
      });

      return () => {
        split.revert();
        splitSpan.revert();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center bg-black'>
      <h5 className='text-sm text-white font-semibold mb-6'>A B O U T &nbsp; M E</h5>
      <div ref={textRef}>
        <h2 className='text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] text-transparent bg-gradient-to-r from-white to-[#252525] bg-[length:200%_100%] bg-right bg-clip-text [-webkit-background-clip:text]'>
          I'm a{' '}
          <span className='span-animated-text'>
            visually skilled
          </span>{' '}
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

        /* Span lines with dark orange to bright orange gradient */
        .line-span {
          display: block;
          background: linear-gradient(to right, #a33b27 50%, #EB5939 50%);
          background-size: 200% 100%;
          background-position-x: 100%;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
        }

        /* To prevent inheritance of .line color to span */
        .line span,
        .line-span span {
          color: #EB5939 !important;
          background: none !important;
          background-clip: initial !important;
          -webkit-background-clip: initial !important;
        }

        /* Set initial dark orange color fallback for span text (before animation) */
        .span-animated-text {
          color: #a33b27; /* Darker orange */
          background: none !important;
          background-clip: initial !important;
          -webkit-background-clip: initial !important;
        }
      `}</style>
    </div>
  );
}

export default About;
