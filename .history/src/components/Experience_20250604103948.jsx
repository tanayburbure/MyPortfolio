import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

function Experience() {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;

    // Animate <h2> lines
    const split = new SplitText(element.querySelector('h2'), {
      type: 'lines',
      linesClass: 'line'
    });

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
        },
      });
    });

    // Animate <span> lines
    const spanElement = element.querySelector('span');
    const spanSplit = new SplitText(spanElement, {
      type: 'lines',
      linesClass: 'span-line'
    });

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
        },
      });
    });

    // Cleanup
    return () => {
      split.revert();
      spanSplit.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative pl-[31vh] h-[55vh] mb-36 flex flex-col justify-center">
      <h5 className="text-sm font-semibold mb-6">E X P E R I E N C E</h5>
      <div ref={textRef}>
        <h2 className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] text-transparent bg-gradient-to-r from-[#212121] to-[#B7AB98] bg-[length:200%_100%] bg-right bg-clip-text">
          Over <span className="text-[#EB5939]">two years</span> of Experience in interactive design and working with some of the most talented people in the business.
        </h2>
      </div>
    </div>
  );
}

export default Experience;
