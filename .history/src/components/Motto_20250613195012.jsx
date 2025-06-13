import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

function Motto() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const h2Ref = useRef(null);

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

  useEffect(() => {
    if (!h2Ref.current) return;

    let split;

    document.fonts.ready.then(() => {
      split = new SplitText(h2Ref.current, { type: 'chars' });

      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: h2Ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 80,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.04,
        duration: 1,
      });
    });

    return () => {
      if (split) split.revert();
    };
  }, []);

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
          backgroundSize: isMobile ? '400%' : 'cover',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        }}
      />

      {/* Foreground content */}
      <div className="relative h-full z-10 flex flex-col items-center justify-center">
        <h5 className="mb-8 sm:mb-8 font-semibold font-sm font-[font14] tracking-widest text-xs sm:text-sm md:text-base">
          M Y &nbsp; M O T T O
        </h5>

        {/* Animated H2 */}
        <div className="overflow-hidden w-full sm:w-[100%] md:w-[70%] lg:w-[60%]">
          <h2
  ref={h2Ref}
  className="font-light pr-2 tracking-tighter text-[10vh] text-center sm:text-[12vh] md:text-[14vh] lg:text-[17vh] text-[#EC4E39] font-[font13] cursor-expand leading-[9.4vh] sm:leading-[8vw] md:leading-[7.5vw] lg:leading-[7.2vw]"
>
  GOOD <br className="block md:hidden" /> 
  DESIGN <br className="hidden md:block" /> 
  IS <br className="block sm:hidden" /> 
  HONEST
</h2>
        </div>

        <h4 className="mt-3 sm:mt-6 font-[font9] text-sm sm:text-base md:text-lg">
          Dieter Rams
        </h4>
      </div>
    </div>
  );
}

export default Motto;
