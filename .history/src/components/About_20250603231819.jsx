import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

function About() {
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && textRef.current) {
      const element = textRef.current;
      
      // Initialize SplitText
      const split = new SplitText(element.querySelector('h2'), { 
        type: 'lines',
        linesClass: 'line+'
      });

      // Create a container for each line to prevent clipping
      split.lines.forEach((line) => {
        // Wrap each line in a div for better control
        const wrapper = document.createElement('div');
        wrapper.className = 'line-wrapper';
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);
        
        // Set initial styles
        gsap.set(wrapper, {
          position: 'relative',
          overflow: 'visible'
        });

        gsap.set(line, {
          backgroundPositionX: '100%',
          display: 'inline-block', // Ensures proper gradient application
          lineHeight: '1.2em' // Adjust based on your font
        });

        // Create scroll animation
        gsap.to(line, {
          backgroundPositionX: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
            // markers: true // For debugging
          }
        });
      });

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
      
      {/* Enhanced CSS styles */}
      <style jsx global>{`
        .line-wrapper {
          overflow: visible !important;
          display: block;
          padding-bottom: 0.2em; /* Extra space for descenders */
        }
        
        .line {
          background: linear-gradient(
            to right,
            #ffffff 50%,
            #252525 50%
          );
          background-size: 200% 100%;
          background-position-x: 100%;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          position: relative;
          padding-bottom: 0.15em; /* Extra space for descenders */
          margin-bottom: -0.15em; /* Compensate for added padding */
        }
        
        /* Orange text remains visible */
        .line span {
          color: #EB5939 !important;
          background: none !important;
          background-clip: initial !important;
          -webkit-background-clip: initial !important;
        }
      `}</style>
    </div>
  );
}

export default About;