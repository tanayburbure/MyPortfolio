"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Page5() {
  const h2Ref = useRef(null);
  const containRef = useRef(null);

  useEffect(() => {
    // Split letters into spans
    const elem = h2Ref.current;
    const text = elem.textContent;
    const splitText = text.split("");
    elem.innerHTML = splitText.map(char => `<span>${char}</span>`).join("");

    // Animate each letter span color
    gsap.to("#page5 h2 span", {
      color: "black",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#page5",
        scroller: "#main", // make sure you have #main as scroll container if using lenis/smooth scroll
        start: "top 112%",
        end: "top 99%",
        scrub: 1,
        pin: true,
      },
    });

    // Animate container movement
    gsap.to("#page5 #Contain", {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "top 112.1%",
        end: "top 0%",
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <div id="page5" className="h-screen flex flex-col justify-center items-center overflow-hidden relative">
      <h2
        ref={h2Ref}
        className="text-6xl font-bold text-[#2F2D29] whitespace-nowrap"
      >
        Transforming Ideas Visually
      </h2>

      <div
        id="Contain"
        ref={containRef}
        className="absolute top-1/2 left-0 w-full text-xl text-[#2F2D29] font-semibold"
      >
        {/* This content will move left */}
        <p className="ml-10">Your creative message here moves sideways</p>
      </div>
    </div>
  );
}

export default Page5;
