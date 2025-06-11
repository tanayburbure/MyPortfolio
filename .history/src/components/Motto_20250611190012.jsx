import React, { useEffect, useState } from 'react';

function Motto() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (mobile) setOffsetY(0);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

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
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className={`absolute inset-0 ${!isMobile ? 'bg-fixed' : ''}`}
        style={{
          height: '100%',
          backgroundImage: "url('./images/sukuna4.jpg')",
          backgroundRepeat: 'no-repeat',
          opacity: 0.7,
          backgroundPositionY: isMobile
            ? 'center'
            : `calc(250% + ${offsetY}px)`,
          backgroundPositionX: '50%',
          backgroundSize: isMobile ? '400%' : 'cover', // This gives natural zoom
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        }}
      />

      {/* Foreground content */}
      <div className="relative h-full z-10 flex flex-col items-center justify-center">
        <h5 className="mb-8 sm:mb-8 font-semibold font-sm font-[font14] tracking-widest text-xs sm:text-sm md:text-base">
          M Y &nbsp; M O T T O
        </h5>

        <h2 className="font-light pr-2 tracking-tighter text-[10.2vh] text-center sm:text-[12vh] md:text-[14vh] lg:text-[17vh] text-[#EC4E39] font-[font13] cursor-expand w-full sm:w-[100%] md:w-[70%] lg:w-[60%] leading-[9.4vh] sm:leading-[8vw] md:leading-[7.5vw] lg:leading-[7.2vw]">
          GOOD DESIGN IS&nbsp;HONEST
        </h2>

        <h4 className="mt-3 sm:mt-6 font-[font9] text-sm sm:text-base md:text-lg">
          Dieter Rams
        </h4>
      </div>
    </div>
  );
}

export default Motto;
