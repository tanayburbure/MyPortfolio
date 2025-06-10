import React, { useEffect, useState } from 'react';
import AnimatedText from '../components/AnimatedText';

function Experience() {
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
    <div className="relative w-full h-screen">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-fixed bg-contain"
        style={{
          backgroundImage: "url('/images/satoru.jpg')",
          backgroundRepeat: "no-repeat",
          opacity: 0.7,
          backgroundPositionY: `calc(100% + ${offsetY}px)`,
          backgroundPositionX: window.innerWidth < 640 ? '80%' : undefined,
          backgroundSize: window.innerWidth < 640 ? '430%' : 'cover',
        }}
      />
      
      {/* Content container with full opacity */}
      <div className="relative h-full z-10 flex flex-col mt-12 pt-40 sm:pt-52 md:pt-60 lg:pt-48 px-[5vw] sm:px-[10vw] md:pl-[15vh] lg:pl-[31vh]">
        <h5 className="mb-6 sm:mb-8 lg:mb-12 font-semibold font-sm font-[font14] tracking-widest text-xs sm:text-sm md:text-base">
          E X P E R I E N C E
        </h5>

        <AnimatedText className="text-[5vh] sm:text-[6.5vh] md:text-[8vh] lg:text-[9vh] font-[font9] cursor-expand mb-12 sm:mb-16 md:mb-20 tracking-tight w-[95%] font-semibold leading-[4.8vh] sm:leading-[5vw] md:leading-[4.5vw] lg:leading-[4.3vw]">
          Over
          <span className="text-[#EB5939] font-[font8] tracking-wide sm:tracking-wider"> two years</span> of Experience in interactive design and working with some of the most talented people in the business.
        </AnimatedText>
      </div>
    </div>
  );
}

export default Experience;