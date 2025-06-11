import React, { useEffect, useState, useMemo } from 'react';
import AnimatedText from '../components/AnimatedText';

function Experience() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (animationFrameId) return;

      animationFrameId = requestAnimationFrame(() => {
        const parallaxFactor = isMobile ? 0.001 : 0.05;
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

  const backgroundStyle = useMemo(() => {
    const mobile = isMobile && window.innerWidth < 640;

    return {
      backgroundImage: "url('/images/satoru.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: mobile ? 'scroll' : 'fixed', // Avoid bg-fixed on mobile
      backgroundPositionY: `calc(100% + ${offsetY}px)`,
      backgroundPositionX: mobile ? '73%' : 'center',
      backgroundSize: mobile ? 'cover' : 'cover', // or use '100% auto' for a non-stretched look
      opacity: 0.6,
      transition: 'background-position 0.05s ease-out', // smooth parallax transition
      willChange: 'background-position', // performance boost
    };
  }, [offsetY, isMobile]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image with controlled parallax */}
      <div
        className="absolute inset-0"
        style={backgroundStyle}
      />

      {/* Content container */}
      <div className="relative h-full z-10 flex flex-col pt-[30vh] sm:pt-52 md:pt-60 lg:pt-48 px-[5vw] sm:px-[10vw] md:pl-[15vh] lg:pl-[31vh]">
        <h5 className="mb-6 sm:mb-8 lg:mb-12 font-semibold font-sm font-[font14] tracking-widest text-xs sm:text-sm md:text-base">
          E X P E R I E N C E
        </h5>

        <AnimatedText className="text-[5vh] sm:text-[6.5vh] md:text-[8vh] lg:text-[8.5vh] font-[font9] cursor-expand mb-12 sm:mb-16 md:mb-20 tracking-tight w-[95%] font-semibold leading-[9.5vw] sm:leading-[5vw] md:leading-[4.5vw] lg:leading-[3.9vw]">
          Over
          <span className="text-[#EB5939] font-[font8] tracking-wide sm:tracking-wider"> two years</span> of Experience in interactive design and working with some of the most talented people in the business.
        </AnimatedText>
      </div>
    </div>
  );
}

export default Experience;
