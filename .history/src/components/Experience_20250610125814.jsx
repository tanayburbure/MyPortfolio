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
    <div
  className="bg-fixed w-full bg-contain relative 
             bg-[position:calc(100%+270px)_center] 
             sm:bg-[position:calc(100%+200px)_center] 
             md:bg-[position:center_center]"
  style={{
    backgroundImage: "url('/images/satoru.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: 0.8,
    backgroundPositionY: `calc(120% + ${offsetY}px)`,
    backgroundPositionX: window.innerWidth < 640 ? '80%' : undefined,
    backgroundSize: window.innerWidth < 640 ? '130%' : 'cover', // Mobile: zoomed-in bg
  }}
>

      <div className="relative h-screen z-10 flex flex-col mt-12 pt-40 sm:pt-52 md:pt-60 px-[5vw] sm:px-[10vw] md:pl-[15vh] lg:pl-[31vh]">
        <h5 className="mb-6 sm:mb-8 font-semibold font-sm font-[font14] tracking-widest text-xs sm:text-sm md:text-base">
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
