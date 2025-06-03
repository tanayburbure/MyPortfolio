import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

function About() {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(textRef.current, { type: 'lines' });
    
    split.lines.forEach((line) => {
      gsap.to(line, {
        backgroundPositionX: '0%',
        ease: 'none',
        scrollTrigger: {
          trigger: line,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: true // remove in production
        }
      });
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className="min-h-screen p-[15vh] bg-black text-white">
      <div className="img mb-12 h-64 bg-gray-700"></div>

      <div className="text overflow-hidden">
        <p
          ref={textRef}
          className="font-bold text-[10vw] leading-[1.2] ml-[50px] text-transparent bg-gradient-to-r from-white to-[#252525] bg-[length:200%_100%] bg-right bg-clip-text [-webkit-background-clip:text]"
        >
          Macaroon croissant pastry shortbread cupcake chupa chups pudding. Gummies pie candy canes sweet roll cake chupa chups cake fruitcake. Cake bonbon chupa chups carrot cake cake gingerbread cookie cake.
        </p>
      </div>

      <div className="img mt-12 h-64 bg-gray-700"></div>
    </div>
  );
}

export default About;
