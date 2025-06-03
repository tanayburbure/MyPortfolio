import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About() {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const lines = gsap.utils.toArray('.text-line');
    
    lines.forEach((line) => {
      gsap.fromTo(line,
        { backgroundPosition: '100% 0%' },
        {
          backgroundPosition: '0% 0%',
          ease: 'none',
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1
          }
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div className='h-screen pl-[31vh] pb-4 flex flex-col justify-center'>
      <h5 className='text-xm font-semibold mb-6'>A B O U T &nbsp; M E</h5>
      <div ref={textRef}>
        <h2 className='text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]'>
          <span className="text-line block">I'm a <span className='text-[#EB5939]'>visually skilled</span></span>
          <span className="text-line block">interactive web designer and</span>
          <span className="text-line block">developer with a strong focus</span>
          <span className="text-line block">on crafting high-quality,</span>
          <span className="text-line block">impactful digital experiences.</span>
        </h2>
      </div>

      <style jsx global>{`
        .text-line {
          background: linear-gradient(90deg, #000 50%, #fff 50%);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
          line-height: 1.3;
        }
        .text-line span {
          color: #EB5939 !important;
          background: none !important;
        }
      `}</style>
    </div>
  );
}

export default About;