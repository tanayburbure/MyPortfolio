"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

export default function HoverAnimation({ children, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className={clsx(
        "relative inline-block overflow-hidden py-[-2vh] cursor-pointer px-1 pb-1 ",
        className
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background layer */}
      <motion.span
        initial={{ height: "0%" }}
        animate={{ height: isHovered ? "200%" : "0%" }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
        className="absolute inset-0 z-0 bg-[#EB5939] origin-center"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* Text layer */}
      <span className="relative z-10 text-inherit ">
        {children}
      </span>
    </motion.span>
  );
}
