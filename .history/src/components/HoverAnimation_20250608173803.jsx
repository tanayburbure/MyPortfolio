"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import clsx from "clsx";

export default function HoverAnimation({ children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleHoverStart = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 500); // 200ms delay before hover active
  };

  const handleHoverEnd = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 200); // 200ms delay before hover inactive
  };

  return (
    <motion.span
      className={clsx(
        "relative inline-block overflow-hidden cursor-pointer px-1 pb-1 transition-colors duration-300 ease-in-out",
        isHovered ? "text-black" : "text-inherit",
        className
      )}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {/* Animated background from center */}
      <motion.span
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
        className="absolute inset-0 z-0 origin-center bg-[#EB5939] scale-x-100"
        style={{ transformOrigin: "center" }}
      />

      {/* Text */}
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
}
