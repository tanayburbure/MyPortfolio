"use client";
import { motion } from "framer-motion";

export default function HoverBgHighlight({ children, className = "", style = {} }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: "#EB5939",
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
