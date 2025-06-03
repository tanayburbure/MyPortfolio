"use client";
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Page5() {
  const containerRef = useRef(null);
  const h2Refs = useRef([]);
  const containRef = useRef(null);

  useEffect(() => {
    // Character splitting animation
    h2Refs.current.forEach((elem) => {
      if (elem) {
        const h2Text = elem.textContent;
        const splittedText = h2Text.split("");
        const clutter = splittedText.map((e, i) => (
          `<span key=${i}>${e === ' ' ? '&nbsp;' : e}</span>`
        )).join('');
        elem.innerHTML = clutter;
      }
    });

    // GSAP animations
    gsap.to("#page5 h2 span", {
      color: "black",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "top 112%",
        end: "top 99%",
        scrub: 1,
        pin: true,
      },
    });

    gsap.to(containRef.current, {
      x: "-100%",
      scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "top 112.1%",
        end: "top 0%",
        scrub: 1,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="page5"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <div className="h-full w-full flex items-center justify-center">
        <h2 
          ref={el => h2Refs.current[0] = el}
          className="text-6xl font-bold text-[#2F2D29]"
        >
          Your Heading Text Here
        </h2>
      </div>

      <div 
        id="Contain"
        ref={containRef}
        className="absolute top-0 left-0 w-[200%] h-full bg-[#EC5939] flex"
      >
        <div className="w-1/2 h-full"></div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <h2 
            ref={el => h2Refs.current[1] = el}
            className="text-6xl font-bold text-white"
          >
            Second Heading Text
          </h2>
        </div>
      </div>
    </section>
  );
}