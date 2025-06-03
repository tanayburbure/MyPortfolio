import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const linesRef = useRef([]);

  useEffect(() => {
    linesRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { backgroundPositionX: '100%' },
        {
          backgroundPositionX: '0%',
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  const paragraph = `Macaroon croissant pastry shortbread cupcake chupa chups pudding. Gummies pie candy canes sweet roll cake chupa chups cake fruitcake. Cake bonbon chupa chups carrot cake cake gingerbread cookie cake.`;

  // Simulate line splits by breaking into chunks manually
  const lines = paragraph.match(/(.{1,50})(?:\s|$)/g); // 50-char lines

  return (
    <div className="min-h-screen bg-black text-white p-[10vh]">
      <div className="img h-48 mb-16 bg-gray-700"></div>

      <div className="text ml-[50px]">
        {lines.map((line, idx) => (
          <div
            key={idx}
            ref={(el) => (linesRef.current[idx] = el)}
            className="text-[7vw] font-bold leading-[1.1] text-transparent bg-gradient-to-r from-white to-[#252525] bg-[length:200%_100%] bg-right bg-clip-text [-webkit-background-clip:text] mb-2"
          >
            {line}
          </div>
        ))}
      </div>

      <div className="img h-48 mt-16 bg-gray-700"></div>
    </div>
  );
}

export default About;
