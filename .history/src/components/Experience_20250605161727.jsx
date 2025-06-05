import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const VideoComponent = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        gsap.set(videoRef.current, { scale: 0.7, transformOrigin: "center center" });

        gsap.to(videoRef.current, {
            scale: 1,
            scrollTrigger: {
                trigger: videoRef.current,
                start: "top 80%",
                end: "top 10%",
                scrub: 5,
            },
        });
    }, []);

    return (
        <div className="pt-16 mb-12 flex justify-center items-center">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="./video/reel.mp4" type="video/mp4" />
                Your browser doesn't support videos
            </video>
        </div>
    );
};

function Experience() {
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
    <div className='flex flex-col mt-12 justify-center'>
      <h5 className='text-sm font-semibold mb-6 pl-[31vh]'>E X P E R I E N C E</h5>
      <div ref={textRef}>
        <h2 className='text-[9vh] mb-20 pl-[31vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] text-transparent bg-gradient-to-r from-[#212121] to-[#B7AB98] bg-[length:200%_100%] bg-right bg-clip-text [-webkit-background-clip:text]'>
          Over <span className='text-[#EB5939]'>two years</span> of Experience in interactive design and working with some of the most talented people in the business.
        </h2>
      </div>
      <VideoComponent />

      {/* Replace the style tag with regular CSS or CSS modules */}
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
    </div>
  );
}

export default Experience;