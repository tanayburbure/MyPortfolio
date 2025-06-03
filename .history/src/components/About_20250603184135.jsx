"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Page5() {
  const h2Ref = useRef(null);
  const containRef = useRef(null);

  useEffect(() => {
    const elem = h2Ref.current;
    if (!elem) return;

    // Split text into span-wrapped letters
    const text = elem.textContent;
    const splitText = text.split("");
    elem.innerHTML = splitText.map(char => `<span class="inline-block">${char}</span>`).join("");

    // Run animations after DOM updates
    requestAnimationFrame(() => {
      gsap.to("#page5 h2 span", {
        color: "#000",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#page5",
          start: "top 112%",
          end: "top 99%",
          scrub: 1,
          pin: true,
        },
      });

      gsap.to("#Contain", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: "#page5",
          start: "top 112.1%",
          end: "top 0%",
          scrub: 1,
          pin: true,
        },
      });
    });
  }, []);

  return (
    <div id="page5" className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-white">
      <h2
        ref={h2Ref}
        className="text-[6vh] font-bold text-[#2F2D29] tracking-tight whitespace-nowrap"
      >
        Transforming Ideas Visually
      </h2>

      <div
        id="Contain"
        ref={containRef}
        className="absolute top-1/2 left-0 w-full text-xl text-[#2F2D29] font-semibold"
      >
        <p className="ml-10">Your creative message here moves sideways</p>
      </div>
    </div>
  );
}

export default Page5;
