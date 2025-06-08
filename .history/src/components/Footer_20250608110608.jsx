"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const HoverClipText = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <span className="relative inline-block group cursor-pointer" ref={ref}>
      <span className="relative z-10">{children}</span>
      <motion.span
        style={{ clipPath }}
        className="absolute inset-0 z-0 text-[#b7ab98] pointer-events-none"
        aria-hidden
      >
        {children}
      </motion.span>
    </span>
  );
};

function Footer() {
  return (
    <div className="h-[50vh] flex flex-col w-full ">
      <div className="pl-[32vh] pt-[15vh] px-48">
        <h3 className="text-lg tracking-widest mb-12 ml-2">C O N N E C T</h3>
        <div className="grid grid-cols-3 no-mask">
          <ul className="text-[4vh] space-y-3">
            <li className="flex items-center">
              <span className="text-red-500 mr-2">▸</span>
              <a
                href="https://www.instagram.com/tanay_burbure/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverClipText>Instagram</HoverClipText>
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">▸</span>
              <a
                href="https://www.facebook.com/tanay.burbure/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverClipText>Facebook</HoverClipText>
              </a>
            </li>
          </ul>

          <ul className="text-[4vh] space-y-3">
            <li className="flex items-center">
              <span className="text-red-500 mr-2">▸</span>
              <a
                href="https://t.me/Tanayburbure"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverClipText>Telegram</HoverClipText>
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">▸</span>
              <a
                href="https://www.linkedin.com/in/tanay-burbure-80401a271/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverClipText>Linkedin</HoverClipText>
              </a>
            </li>
          </ul>

          <ul className="pt-3 space-y-3">
            <li className="flex items-center text-lg">
              <IoMdMail />
              &nbsp;
              <a href="mailto:tanayburbure@gmail.com">
                <HoverClipText>tanayburbure@gmail.com</HoverClipText>
              </a>
            </li>
            <li className="flex items-center text-lg">
              <IoCallSharp />
              &nbsp;
              <a href="tel:+918421881858">
                <HoverClipText>+91-8421881858</HoverClipText>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-t-1 border-[#212121] w-full mt-16 " />
      <h3 className="text-center pt-1 text-[#B7AB98]">
        Design inspired by &nbsp;
        <span className="text-[#EB5939]">M I N H &nbsp; P H A M</span>
      </h3>
    </div>
  );
}

export default Footer;
