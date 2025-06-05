import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const AnimatedText = ({ children, className = '' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitText(textRef.current, {
        type: 'chars',
        charsClass: 'char',
      });

      split.chars.forEach((char) => {
        gsap.set(char, {
          backgroundPositionX: '100%',
        });

        char.addEventListener('mouseenter', () => {
          gsap.to(char, {
            backgroundPositionX: '0%',
            duration: 0.6,
            ease: 'power2.out',
          });
        });

        char.addEventListener('mouseleave', () => {
          gsap.to(char, {
            backgroundPositionX: '100%',
            duration: 0.6,
            ease: 'power2.in',
          });
        });
      });

      return () => {
        split.revert();
      };
    }
  }, []);

  return (
    <>
      <h2
        ref={textRef}
        className={`${className} text-transparent bg-gradient-to-r from-[#212121] to-[#B7AB98] bg-[length:200%_100%] bg-right bg-clip-text [-webkit-background-clip:text]`}
      >
        {children}
      </h2>

      <style>{`
        .char {
          display: inline;
          background: linear-gradient(to right, #B7AB98 50%, #212121 50%);
          background-size: 200% 100%;
          background-position-x: 100%;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          transition: background-position-x 0.3s ease;
          pointer-events: auto;
        }
      `}</style>
    </>
  );
};

export default AnimatedText;
