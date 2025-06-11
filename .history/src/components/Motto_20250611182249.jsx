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
        setOffsetY(window.scrollY * (isMobile ? 0.001 : 0.03));
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
      {/* Background image that always covers the screen */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./images/sukuna4.jpg')",
          opacity: 0.6,
          // Modified positioning to ensure full coverage while allowing parallax
          transform: isMobile 
            ? `translateY(${offsetY * 0.5}px)`
            : `translateY(${offsetY}px)`,
          // Force full coverage
          backgroundSize: 'cover',
          // Expand beyond viewport edges to prevent gaps during movement
          width: '100vw',
          height: '100vh',
          minWidth: '100vw',
          minHeight: '100vh',
          willChange: 'transform'
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