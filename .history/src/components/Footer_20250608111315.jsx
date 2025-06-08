'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { IoMdMail } from 'react-icons/io';
import { IoCallSharp } from 'react-icons/io5';

// Reusable hover reveal animation
const HoverRevealText = ({ text }) => {
  return (
    <span className="relative inline-block overflow-hidden group">
      {/* Main text */}
      <span className="text-[#2F2D29] relative z-10">{text}</span>

      {/* Reveal layer */}
      <motion.span
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileHover={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute top-0 left-0 text-[#b7ab98] pointer-events-none"
        aria-hidden
      >
        {text}
      </motion.span>
    </span>
  );
};

export default function Footer() {
  return (
    <div className="h-[50vh] flex flex-col w-full">
      <div className="pl-[32vh] pt-[15vh] px-48">
        <h3 className="text-lg tracking-widest mb-12 ml-2">C O N N E C T</h3>

        <div className="grid grid-cols-3 no-mask">
          {/* Social Links Column 1 */}
          <ul className="text-[4vh] space-y-4">
            <li className="flex items-center">
              <span className="text-red-500 mr-2">▸</span>
              <a
                href="https://www.instagram.com/tanay_burbure/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverRevealText text="Instagram" />
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">▸</span>
              <a
                href="https://www.facebook.com/tanay.burbure/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverRevealText text="Facebook" />
              </a>
            </li>
          </ul>

          {/* Social Links Column 2 */}
          <ul className="text-[4vh] space-y-4">
            <li className="flex items-center">
              <span className="text-red-500 mr-2">▸</span>
              <a
                href="https://t.me/Tanayburbure"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverRevealText text="Telegram" />
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">▸</span>
              <a
                href="https://www.linkedin.com/in/tanay-burbure-80401a271/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HoverRevealText text="Linkedin" />
              </a>
            </li>
          </ul>

          {/* Contact Info Column 3 */}
          <ul className="pt-3 space-y-4">
            <li className="flex items-center text-lg">
              <IoMdMail />
              &nbsp;
              <a href="mailto:tanayburbure@gmail.com">
                <HoverRevealText text="tanayburbure@gmail.com" />
              </a>
            </li>
            <li className="flex items-center text-lg">
              <IoCallSharp />
              &nbsp;
              <a href="tel:+918421881858">
                <HoverRevealText text="+91-8421881858" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t-1 border-[#212121] w-full mt-16" />
      <h3 className="text-center pt-1 text-[#B7AB98]">
        Design inspired by&nbsp;
        <span className="text-[#EB5939]">M I N H &nbsp; P H A M</span>
      </h3>
    </div>
  );
}
