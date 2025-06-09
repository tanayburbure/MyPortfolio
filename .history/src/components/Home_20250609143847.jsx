import React, { useEffect, useState } from 'react';

function Home() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        setOffsetY(window.scrollY * 0.05);
        animationFrameId = null;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: "url('./images/new.jpg')",
          backgroundPositionY: `calc(110% + ${offsetY}px)`,
          opacity: 0.4,
        }}
      />

      <div className="relative z-10 h-full absolute top-[20%] sm:top-[25%] md:top-[28%] w-full px-4">
        <h3 className="tracking-tight text-center mb-10 sm:mb-16 md:mb-20 font-[font4] text-sm sm:text-base md:text-lg font-bold">
          T A N A Y &nbsp;&nbsp; B U R B U R E
        </h3>

        <h1 className="text-center font-[font13] leading-[7vw] tracking-tight cursor-expand font-normal
          text-[6vh] sm:text-[10vh] md:text-[14vh] lg:text-[17vh]">
          STILL&nbsp;
          <span className="text-[#EB5939]">DEBUGGING <br /></span>
        </h1>

        <h3 className="text-center mt-2 font-[font9] tracking-tight font-semibold cursor-expand 
          text-[3.5vh] sm:text-[5vh] md:text-[6.5vh]">
          SINCE 2023
        </h3>
      </div>
    </div>
  );
}

export default Home;
