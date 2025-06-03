import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

function About() {
  const textRef = useRef(null);

  useEffect(() => {
    // Only run this effect on the client side
    if (typeof window !== 'undefined') {
      const element = textRef.current;
      
      // Initialize SplitText
      const split = new SplitText(element.querySelector('h2'), { 
        type: 'lines',
        linesClass: 'line'
      });

      // Apply animation to each line
      split.lines.forEach((line) => {
        // Set initial background position
        gsap.set(line, {
          backgroundPositionX: '100%'
        });

        // Create scroll animation
        gsap.to(line, {
          backgroundPositionX: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: line,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            // markers: true // Uncomment for debugging
          }
        });
      });

      // Cleanup function
      return () => {
        if (split) split.revert();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center'>
      <h5 className='text-xm font-semibold mb-6'>A B O U T &nbsp; M E</h5>
      <div ref={textRef}>
        <h2 className='text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]'>
          I'm a <span className='text-[#EB5939]'>visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
        </h2>
      </div>
      
      {/* Add the CSS styles for the animation */}
      <style jsx global>{`
        .line {
          background: linear-gradient(
            to right,
            rgb(255, 255, 255) 50%,
            rgb(37, 37, 37) 50%
          );
          background-size: 200% 100%;
          background-position-x: 100%;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          display: inline-block;
        }
        
        /* Keep the orange color for the span */
        .line span {
          color: #EB5939;
          background: none;
          -webkit-background-clip: initial;
          background-clip: initial;
        }
      `}</style>
    </div>
  );
}

export default About;