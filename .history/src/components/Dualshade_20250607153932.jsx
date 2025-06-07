"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// Track mouse position
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default function MaskEffect() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  // Create an animated motion value for size
  const size = useMotionValue(40);

  useEffect(() => {
    animate(size, isHovered ? 400 : 40, {
      type: "tween",
      duration: 0.5,
      ease: "backOut",
    });
  }, [isHovered, size]);

  const maskX = useTransform(size, (s) => `${x - s / 2}px`);
  const maskY = useTransform(size, (s) => `${y - s / 2}px`);
  const maskSize = useTransform(size, (s) => `${s}px`);

  return (
    <main className="relative w-full h-screen overflow-hidden text-[#afa18f] text-[64px] leading-[66px] bg-[#0f0f0f] cursor-default flex items-center justify-center">
      <motion.div
        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
        style={{
          WebkitMaskImage: 'url("/images/mask.svg")',
          maskImage: 'url("/images/mask.svg")',
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          backgroundColor: "#ec4e39",
          color: "black",
          WebkitMaskPosition: motion.useMotionTemplate`${maskX} ${maskY}`,
          WebkitMaskSize: maskSize,
          maskSize: maskSize,
        }}
      >
        <p
          className="max-w-[1000px] p-10 pointer-events-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          A visual designer – with skills that haven’t been replaced by A.I
          (yet) – making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className="absolute w-full h-full flex items-center justify-center">
        <p className="max-w-[1000px] p-10">
          I'm a <span className="text-[#ec4e39]">selectively skilled</span>{" "}
          product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      </div>
    </main>
  );
}
