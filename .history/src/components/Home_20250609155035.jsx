import React, { useEffect, useState } from 'react';

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on initial render and resize
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
        // Reduce parallax intensity on mobile
        const parallaxFactor = isMobile ? 0.02 : 0.05;
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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover z-0"
        style={{
          backgroundImage: "url('./images/new.jpg')",
          backgroundPositionY: `calc(110% + ${offsetY}px)`,
          opacity: 0.4,
          backgroundSize: 'cover'
        }}
      />

      {/* Main Content - Responsive text sizes maintained */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Name */}
        <h3 className="font-[font4] sm:mb4 font-bold tracking-tight mb-4 text-sm sm:text-base md:text-lg">
          T A N A Y &nbsp;&nbsp; B U R B U R E
        </h3>

        {/* Main Heading */}
        <h1 className="font-[font13] font-normal tracking-tight leading-tight text-[6vh] sm:text-[9vh] md:text-[12vh]">
          STILL{isMobile ? <br /> : ' '}
          <span className="text-[#EB5939]">DEBUGGING</span>
        </h1>

        {/* Subtitle */}
        <h3 className="font-[font9] font-semibold tracking-tight mt-2 text-[3vh] sm:text-[4.5vh] md:text-[5.5vh]">
          SINCE 2023
        </h3>
      </div>
    </div>
  );
}

export default Home;