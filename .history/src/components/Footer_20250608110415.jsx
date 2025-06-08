"use client";
import React, { useRef, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const socialLinks = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/tanay_burbure/",
    description: "Follow me for updates and visuals",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/tanay.burbure/",
    description: "Connect with me personally",
  },
  {
    title: "Telegram",
    href: "https://t.me/Tanayburbure",
    description: "Reach out via instant message",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/tanay-burbure-80401a271/",
    description: "Explore my professional journey",
  },
];

function Footer() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="h-[80vh] flex flex-col w-full relative">
      <div className="pl-[32vh] pt-[15vh] px-48">
        <h3 className="text-lg tracking-widest mb-12 ml-2">C O N N E C T</h3>
        <div className="grid grid-cols-3 no-mask">
          {/* Social Titles (Animated) */}
          <div className="col-span-2">
            {socialLinks.map((item, index) => (
              <AnimatedLink
                key={index}
                item={item}
                index={index}
                setSelectedIndex={setSelectedIndex}
              />
            ))}
          </div>

          {/* Contact Info */}
          <ul className="pt-3">
            <li className="pb-2 flex items-center text-lg">
              <IoMdMail />
              &nbsp;
              <a href="mailto:tanayburbure@gmail.com" className="pb-1">
                tanayburbure@gmail.com
              </a>
            </li>
            <li className="flex items-center mt-2 text-lg">
              <IoCallSharp />
              &nbsp;
              <a className="mb-1" href="tel:+918421881858">
                +91-8421881858
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hover Descriptions */}
      <div className="absolute top-[18vh] mt-[2.85vh] w-screen z-2 pointer-events-none no-mask">
        {socialLinks.map((item, index) => (
          <div
            key={index}
            className="bg-[#ec4e39] h-[6.6vw] text-[#0D0D0D] font-medium flex justify-between items-center px-[15%] transition-all duration-500 ease-in-out"
            style={{
              clipPath:
                selectedIndex === index ? "inset(0 0 0)" : "inset(50% 0 50%)",
            }}
          >
            <p className="text-[#010101] font-medium mb-3 leading-[6.5vw] text-[8.2vw] relative z-1">
              {item.title.substring(0, 8)}
            </p>
            <p className="w-[40%] text-[1vw] font-bold">{item.description}</p>
          </div>
        ))}
      </div>

      <hr className="border-t-1 border-[#212121] w-full mt-16" />
      <h3 className="text-center pt-1 text-[#B7AB98]">
        Design inspired by &nbsp;
        <span className="text-[#EB5939]">M I N H &nbsp; P H A M</span>
      </h3>
    </div>
  );
}

function AnimatedLink({ item, index, setSelectedIndex }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div className="relative no-mask">
      <div className="border-b border-[#b7ab9820]" ref={containerRef}>
        <div className="inline-block relative pl-2 py-2 cursor-pointer">
          <p
            className="text-[#2F2D29] text-[5vh] font-medium"
            onMouseEnter={() => setSelectedIndex(index)}
            onMouseLeave={() => setSelectedIndex(null)}
          >
            <span className="text-red-500 mr-2">▸</span>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </p>

          <motion.p
            style={{ clipPath: clipPathStyle }}
            className="absolute top-0 left-0 text-[#b7ab98] text-[5vh] font-medium pointer-events-none"
          >
            <span className="text-red-500 mr-2">▸</span>
            {item.title}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
