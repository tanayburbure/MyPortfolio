"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

export default function HoverAnimation({ children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={clsx(
        "relative inline-block overflow-hidden cursor-pointer px-1 pb-1 transition-colors duration-300 ease-in-out",
        isHovered ? "text-black" : "text-inherit",
        className
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated background from center */}
      <motion.span
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.42, 0, 0.58, 1] }}
        className="absolute inset-0 z-0 origin-center bg-[#EB5939] scale-x-100"
        style={{ transformOrigin: "center" }}
      />

      {/* Text */}
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
}
