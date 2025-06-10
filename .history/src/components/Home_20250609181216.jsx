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
        const parallaxFactor = isMobile ? 0.01 : 0.03;
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
          backgroundSize: 'cover',
        }}
      />
      {/* Overlay for background opacity */}
      <div className="absolute inset-0 bg-black opacity-40 z-5 pointer-events-none" />

      {/* Main Content - Responsive text sizes maintained */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center lg:px-4 pr-1 text-center">
        {/* Name */}
        <h3 className="mt-[-4vh] font-bold tracking-tight lg:mb-4 text-sm sm:text-base md:text-lg">
          T A N A Y &nbsp;&nbsp; B U R B U R E
        </h3>

        {/* Main Heading */}
        <h1 className="font-normal tracking-tight mt-20 lg:text-[9vh] md:text-[12vh] text-[8vh] leading-[7.5vh]">
          STILL{isMobile ? <br /> : ' '}
          <span className="text-[#EB5939] text-[8vh] lg:text-[9vh]">DEBUGGING</span>
        </h1>

        {/* Subtitle */}
        <h3 className="font-semibold tracking-tight mt-2 text-[3.5vh] sm:text-[4.5vh] md:text-[5.5vh]">
          SINCE 2023
        </h3>
      </div>
    </div>
  );
}

export default Home;
