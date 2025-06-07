"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Custom hook to track mouse position
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

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
  const size = isHovered ? 400 : 40;

  return (
    <main className="relative w-full h-screen overflow-hidden text-[#afa18f] text-[64px] leading-[66px] bg-[#0f0f0f] cursor-default flex items-center justify-center">
      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        style={{
          WebkitMaskImage: 'url("images/mask.svg")',
          maskImage: 'url("images/mask.svg")',
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          background: "#ec4e39",
          color: "black",
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          className="max-w-[1000px] p-10"
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
