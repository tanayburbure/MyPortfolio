// import React from 'react'

// function Experience() {
//     return (
//         <div className='h-[100vh] relative flex flex-col items-center justify-center'>
//             <img
//             className='h-[100vh] w-[100vw] overflow-hidden'
//                 src={`${import.meta.env.BASE_URL}images/Exp.jpg`}
//                 alt="Experience"
//             />
//             <div className='absolute pl-[31vh] gap'>
//                 <h5 className='text-sm mb-6'>E X P E R I E N C E</h5>
//                 <h2 className='text-[8.5vh] w-[75%] tracking-tight font-medium leading-[4vw]'>Over <span className='text-[#EB5939]'>two years</span> of Experience in interactive design and working with some of the most talented people in the business</h2>
//             </div>
//         </div>
//     )
// }

// export default Experience

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

      // Special animation for the span
      const spanElement = element.querySelector('span');
      const spanSplit = new SplitText(spanElement, { type: 'lines', linesClass: 'span-line' });
      
      spanSplit.lines.forEach((line) => {
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
        spanSplit.revert();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center'>
      <h5 className='text-sm font-semibold mb-6'>E X P E R I E N C E</h5>
      <div ref={textRef}>
        <h2 className='text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] text-transparent bg-gradient-to-r from-[#212121] to-[#B7AB98] bg-[length:200%_100%] bg-right bg-clip-text [-webkit-background-clip:text]'>
          Over <span className='text-[#EB5939]'>two years</span>of Experience in interactive design and working with some of the most talented people in the business.
        </h2>
      </div>

      <style jsx global>{`
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
    </div>
  );
}

export default About;