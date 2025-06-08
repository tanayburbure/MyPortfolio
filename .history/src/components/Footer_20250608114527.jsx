"use client";
import React, { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const links = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/tanay_burbure/",
    icon: null,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/tanay.burbure/",
    icon: null,
  },
  {
    title: "Telegram",
    href: "https://t.me/Tanayburbure",
    icon: null,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/tanay-burbure-80401a271/",
    icon: null,
  },
  {
    title: "tanayburbure@gmail.com",
    href: "mailto:tanayburbure@gmail.com",
    icon: <IoMdMail className="inline-block mr-2" />,
  },
  {
    title: "+91-8421881858",
    href: "tel:+918421881858",
    icon: <IoCallSharp className="inline-block mr-2" />,
  },
];

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="h-[77vh] flex flex-col w-full bg-white text-[#2F2D29] px-16 pt-[15vh] select-none">
      <h3 className="text-lg tracking-widest mb-12 ml-2">C O N N E C T</h3>
      <div className="flex flex-col space-y-6 text-[4vh]">
        {links.map((link, i) => (
          <AnimatedLink
            key={i}
            index={i}
            link={link}
            isHovered={hoveredIndex === i}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
      <hr className="border-t border-[#212121] w-full mt-16" />
      <h3 className="text-center pt-1 text-[#B7AB98]">
        Design inspired by &nbsp;
        <span className="text-[#EB5939]">M I N H &nbsp; P H A M</span>
      </h3>
    </div>
  );
}

function AnimatedLink({ link, index, isHovered, setHoveredIndex }) {
  const containerRef = useRef(null);

  // Scroll based clipping (optional, can be removed if only hover is needed)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Clip from 100% (hidden) to 0% (fully visible)
  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div
      ref={containerRef}
      className="relative cursor-pointer select-text"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <a
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-center font-semibold relative z-10"
      >
        {link.icon}
        <span className="relative">
          {link.title}
        </span>
      </a>

      {/* Animated colored overlay clipped text */}
      <motion.a
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
        style={{
          clipPath: isHovered ? "inset(0 0 0 0)" : clipPathStyle,
        }}
        className="absolute top-0 left-0 right-0 bottom-0 text-[#EB5939] font-semibold pointer-events-none flex items-center pl-[0.375rem] z-0"
      >
        {link.icon}
        <span>{link.title}</span>
      </motion.a>
    </div>
  );
}
