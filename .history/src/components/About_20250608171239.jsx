'use client';

import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText'; // Adjust path if needed

function useMousePosition() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 }); // start offscreen

  useEffect(() => {
    function handleMouseMove(e) {
      setPos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return pos;
}

export default function About() {
  const { x, y } = useMousePosition();
  const cursorSize = 40;

  return (
    <div className="h-screen pl-[31vh] pb-4 flex flex-col justify-center relative overflow-hidden">
      <h5 className="text-sm font-semibold mb-6 z-20 relative">A B O U T &nbsp; M E</h5>

      {/* Black clone masked by cursor */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          WebkitMaskImage: `radial-gradient(circle ${cursorSize}px at ${x}px ${y}px, black 99%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${cursorSize}px at ${x}px ${y}px, black 99%, transparent 100%)`,
          color: 'black',
          paddingLeft: '31vh',
          paddingBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <AnimatedText className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] cursor-expand">
          I'm a <span className="text-black">visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
        </AnimatedText>
      </div>

      {/* Visible normal text */}
      <AnimatedText className="text-[9vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw] cursor-expand relative z-20">
        I'm a <span className="text-[#EB5939]">visually skilled</span> interactive web designer and developer with a strong focus on crafting high-quality, impactful digital experiences.
      </AnimatedText>

      {/* Orange cursor circle */}
      <div
        className="fixed pointer-events-none rounded-full z-30"
        style={{
          left: x - cursorSize / 2,
          top: y - cursorSize / 2,
          width: cursorSize,
          height: cursorSize,
          backgroundColor: '#ec4e39',
          transition: 'left 0.1s ease, top 0.1s ease',
        }}
      />
    </div>
  );
}
