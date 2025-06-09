import React, { useEffect, useState } from 'react';

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        const parallaxFactor = isMobile ? 0.01 : 0.05;
        // Add small buffer to prevent black line
        const buffer = isMobile ? 50 : 0;
        setOffsetY(Math.max(window.scrollY * parallaxFactor, -buffer));
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
      {/* Background Image with parallax effect */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: "url('./images/new.jpg')",
          backgroundPositionY: `calc(110% + ${offsetY}px)`,
          opacity: 0.4,
          backgroundSize: 'cover',
          // Ensure background extends beyond viewport
          ...(isMobile && { minHeight: 'calc(100% + 50px)' })
        }}
      />

      {/* Main Content - unchanged from your original */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center lg:px-4 pr-1 text-center">
        <h3 className="font-[font4] mt-[-4vh] font-bold tracking-tight lg:mb-4 text-sm sm:text-base md:text-lg">
          T A N A Y &nbsp;&nbsp; B U R B U R E
        </h3>

        <h1 className="font-[font13] leading-[7.3vh] font-normal tracking-tight leading-tight text-[8vh] mt-20 lg:text-[9vh] md:text-[12vh]">
          STILL{isMobile ? <br /> : ' '}
          <span className="text-[#EB5939] text-[8vh] lg:text-[9vh]">DEBUGGING</span>
        </h1>

        <h3 className="font-[font9] font-semibold tracking-tight mt-2 text-[3.5vh] sm:text-[4.5vh] md:text-[5.5vh]">
          SINCE 2023
        </h3>
      </div>
    </div>
  );
}

export default Home;