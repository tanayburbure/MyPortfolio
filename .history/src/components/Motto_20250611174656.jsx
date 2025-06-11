import React, { useEffect, useState } from 'react';

function Motto() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initialize with current width

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        // Reduce parallax intensity on mobile while keeping original 0.03 for desktop
        const parallaxFactor = isMobile ? 0.001 : 0.03;
        setOffsetY(window.scrollY * parallaxFactor);
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
    <div className="relative w-full h-screen">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-fixed"
        style={{
          backgroundImage: "url('./images/sukuna4.jpg')",
          backgroundRepeat: "no-repeat",
          opacity: 0.6,
          backgroundPositionX: isMobile ? '50%' : 'center',
          backgroundPositionY: isMobile
            ? `calc(100% + ${offsetY}px)`  // mobile formula
            : `calc(230% + ${offsetY}px)`, // large screen formula
          backgroundSize: isMobile ? '400%' : 'cover',
        }}
      />
      
      {/* Content container with full opacity */}
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