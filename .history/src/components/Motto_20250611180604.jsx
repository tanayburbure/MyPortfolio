import React, { useEffect, useState } from 'react';

function Motto() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let requestId;
    const handleScroll = () => {
      if (requestId) return;
      requestId = requestAnimationFrame(() => {
        // Different scroll directions for mobile/desktop
        const scrollValue = isMobile ? window.scrollY : -window.scrollY;
        setOffsetY(scrollValue * (isMobile ? 0.001 : 0.03));
        requestId = null;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestId) cancelAnimationFrame(requestId);
    };
  }, [isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background with direction-specific parallax */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./images/sukuna4.jpg')",
          opacity: 0.6,
          backgroundSize: isMobile ? 'auto 80%' : 'cover',
          backgroundPositionY: `calc(50% + ${offsetY}px)`,
          willChange: 'background-position',
          transition: 'background-position 0.3s linear'
        }}
      />
      
      {/* Content container */}
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