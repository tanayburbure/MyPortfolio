import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function Home({ isLoaded }) {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const mainHeadingRef = useRef(null);
  const subtitleRef = useRef(null);
  const playedRef = useRef(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const onScroll = () => setOffsetY(window.scrollY * 0.03);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  useEffect(() => {
    if (!isLoaded || playedRef.current) return;
    playedRef.current = true;

    let splitMain, splitSub;
    const ctx = gsap.context(() => {
      splitMain = new SplitText(mainHeadingRef.current, { type: 'chars' });
      splitSub = new SplitText(subtitleRef.current, { type: 'chars' });

      gsap.from([...splitMain.chars, ...splitSub.chars], {
        y: 80,
        opacity: 0,
        stagger: 0.04,
        ease: 'power4.out',
        duration: 1,
        delay: 0.2,
      });
    });

    return () => {
      ctx.revert();
      splitMain?.revert();
      splitSub?.revert();
    };
  }, [isLoaded]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('./images/new.jpg')",
          backgroundSize: isMobile ? '400%' : 'cover',
          backgroundPosition: isMobile
            ? 'center'
            : `center calc(110% + ${offsetY}px)`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          opacity: 0.6,
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <h3 className="font-[font14] mb-4">
          T A N A Y &nbsp;&nbsp; B U R B U R E
        </h3>

        <h1
          ref={mainHeadingRef}
          className="split-text-fix font-[font13] text-[#EB5939] cursor-expand"
        >
          STILL
          <br />
          DEBUGGING
        </h1>

        <h1
          ref={subtitleRef}
          className="split-text-fix font-[font9] mt-2"
        >
          SINCE 2024
        </h1>
      </div>
    </div>
  );
}
