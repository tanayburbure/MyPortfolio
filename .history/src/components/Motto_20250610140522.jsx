import React, { useEffect, useState } from 'react';

function Motto() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        setOffsetY(window.scrollY * 0.03);
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
    <div className="relative w-full h-screen">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-fixed"
        style={{
          backgroundImage: "url('./images/sukuna4.jpg')",
          backgroundRepeat: "no-repeat",
          opacity: 0.6,
          backgroundPositionY: `calc(250% + ${offsetY}px)`,
          backgroundPositionX: window.innerWidth < 640 ? '60%' : undefined,
          backgroundSize: window.innerWidth < 640 ? '430%' : 'cover',
        }}
      />
      
      {/* Content container with full opacity */}
      <div className="relative h-full z-10 flex flex-col items-center justify-center text-center px-[5vw]">
        <h5 className="mb-6 sm:mb-8 font-semibold font-sm font-[font14] tracking-widest text-xs sm:text-sm md:text-base">
          M Y &nbsp; M O T T O
        </h5>

        <h2 className="font-light tracking-tighter text-[8vh] sm:text-[12vh] md:text-[14vh] lg:text-[16.4vh] text-[#EC4E39] font-[font13] cursor-expand w-full sm:w-[80%] md:w-[70%] lg:w-[60%] leading-[7vh] sm:leading-[8vw] md:leading-[7.5vw]">
          GOOD DESIGN IS HONEST
        </h2>
        
        <h4 className="mt-4 sm:mt-6 font-[font9] text-sm sm:text-base md:text-lg">
          Dieter Rams
        </h4>
      </div>
    </div>
  );
}

export default Motto;