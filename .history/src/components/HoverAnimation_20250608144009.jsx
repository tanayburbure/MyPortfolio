"use client";
import { motion } from "framer-motion";

export default function HoverAnimation({ children, className = "", style = {} }) {
  return (
    <motion.div
      initial={{ backgroundColor: "transparent", scale: 1 }}
      animate={{ backgroundColor: "transparent", scale: 1 }}
      whileHover={{
        backgroundColor: "#EB5939",
        scale: 1.015,
        boxShadow: "0px 12px 30px rgba(235, 89, 57, 0.25)",
        transition: {
          type: "spring",
          stiffness: 180,
          damping: 22,
          mass: 0.8,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 1,
      }}
      className={className}
      style={style}
      layout
    >
      {children}
    </motion.div>
  );
}
