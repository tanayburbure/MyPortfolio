import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  const mainHeadingRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setOffsetY(0);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
    if (!mainHeadingRef.current || !subtitleRef.current) return;

    let splitMain, splitSub;

    document.fonts.ready.then(() => {
      splitMain = new SplitText(mainHeadingRef.current, { type: 'chars' });
      splitSub = new SplitText(subtitleRef.current, { type: 'chars' });

      gsap.from([...splitMain.chars, ...splitSub.chars], {
        y: 80,
        opacity: 0,
        ease: 'power4.out',
        stagger: 0.04,
        duration: 1,
      });
    });

    return () => {
      if (splitMain) splitMain.revert();
      if (splitSub) splitSub.revert();
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <style>{`
        .split-text-fix span {
          display: inline-block;
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .main-heading {
          word-spacing: -0.2em;
        }
        @media (max-width: 768px) {
          .main-heading {
            word-spacing: normal;
          }
        }
      `}</style>

      <div
        className={`absolute inset-0 ${!isMobile ? 'bg-fixed' : ''}`}
        style={{
          backgroundImage: "url('./images/new.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: isMobile ? '400%' : 'cover',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          backgroundPositionX: 'center',
          backgroundPositionY: isMobile
            ? 'center'
            : `calc(110% + ${offsetY}px)`,
          opacity: 0.6,
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <h3 className="font-[font14] font-bold tracking-tight text-sm sm:text-base md:text-lg mb-4">
          T A N A Y &nbsp;&nbsp; B U R B U R E
        </h3>

        <div className="overflow-hidden mb-1 w-full max-w-[95vw] sm:max-w-[90vw]">
          <h1
            ref={mainHeadingRef}
            className="split-text-fix main-heading font-[font13] text-[#EB5939] text-[9vw] sm:text-[10vw] md:text-[12vw] lg:text-[9vw] leading-[1.1] tracking-tight cursor-expand"
          >
            STILL&nbsp;DEBUGGING
          </h1>

          <h1
            ref={subtitleRef}
            className="split-text-fix mt-2 lg:mt-1 font-[font9] font-semibold text-[4vw] sm:text-[3.5vw] md:text-[4vw] lg:text-[3vw] tracking-tight leading-none"
          >
            SINCE 2023
          </h1>
        </div>
      </div>
    </div>
  );
}