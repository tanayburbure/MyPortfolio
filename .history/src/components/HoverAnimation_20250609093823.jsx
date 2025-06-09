"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

export default function HoverAnimation({ children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  const [textBlack, setTextBlack] = useState(false);
  const timeoutRef = useRef(null);

  const handleHoverStart = () => {
    setIsHovered(true); // background animation immediate

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setTextBlack(true); // text color change delayed
    }, 50);
  };

  const handleHoverEnd = () => {
    setIsHovered(false); // background animation immediate

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setTextBlack(false); // text color reset delayed
    }, 100);
  };

  // Clear timeout on unmount
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <motion.span
      className={clsx(
        "relative inline-block overflow-hidden cursor-pointer px-1 pt-1 transition-colors duration-300 ease-in-out",
        textBlack ? "text-black" : "text-inherit",
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
