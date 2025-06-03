"use client";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Page5() {
  const containerRef = useRef(null);
  const h2Ref = useRef(null);
  const containRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP only after components mount
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Wait for DOM elements to be available
      const timer = setTimeout(() => {
        if (!h2Ref.current || !containRef.current) return;

        // Character splitting animation
        const h2Text = h2Ref.current.textContent;
        const splittedText = h2Text.split("");
        const clutter = splittedText.map((e, i) => (
          `<span key=${i}>${e === ' ' ? '&nbsp;' : e}</span>`
        )).join('');
        h2Ref.current.innerHTML = clutter;

        // Get the correct scroller element
        const scroller = document.querySelector('#main') || window;

        // GSAP animations
        gsap.to("#page5 h2 span", {
          color: "black",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "#page5",
            scroller: scroller,
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
            scroller: scroller,
            start: "top 112.1%",
            end: "top 0%",
            scrub: 1,
            pin: true,
          },
        });
      }, 100);

      return () => {
        clearTimeout(timer);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <section 
      id="page5"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden" // Added relative position
    >
      <div className="h-full w-full flex items-center justify-center">
        <h2 
          ref={h2Ref}
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
          <h2 className="text-6xl font-bold text-white">
            Second Heading Text
          </h2>
        </div>
      </div>
    </section>
  );
}