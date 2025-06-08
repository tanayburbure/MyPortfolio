"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

export default function HoverAnimation({ children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={clsx(
        "relative inline-block overflow-hidden cursor-pointer px-1 pb-1",
        className
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background layer */}
      <motion.span
        initial={{ scaleY: 0 }}
        animate={{ 
          scaleY: isHovered ? 1 : 0,
          transformOrigin: "center bottom"
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.42, 0, 0.58, 1] 
        }}
        className="absolute inset-0 z-0 bg-[#EB5939]"
      />

      {/* Text layer */}
      <motion.span
        animate={{ color: isHovered ? "#000000" : "inherit" }}
        transition={{ duration: 0.4 }}
        className="relative z-10"
      >
        {children}
      </motion.span>
    </motion.span>
  );
}