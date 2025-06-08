'use client';
import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const hoverLinkAnim = {
  scale: 1.05,
  letterSpacing: "0.05em",
  transition: { duration: 0.3, ease: "easeOut" },
};

function Footer() {
  return (
    <div className="h-[50vh] flex flex-col w-full">
      <div className="pl-[32vh] pt-[15vh] px-48">
        <h3 className="text-lg tracking-widest mb-12 ml-2">C O N N E C T</h3>
        <div className="grid grid-cols-3 no-mask">
          <ul className="text-[4vh]">
            <li className="flex items-center">
              <span className="text-red-500 mr-2">▸</span>
              <motion.a
                href="https://www.instagram.com/tanay_burbure/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverLinkAnim}
              >
                Instagram
              </motion.a>
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">▸</span>
              <motion.a
                href="https://www.facebook.com/tanay.burbure/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverLinkAnim}
              >
                Facebook
              </motion.a>
            </li>
          </ul>

          <ul className="text-[4vh]">
            <li className="flex items-center">
              <span className="text-red-500 mr-2">▸</span>
              <motion.a
                href="https://t.me/Tanayburbure"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverLinkAnim}
              >
                Telegram
              </motion.a>
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">▸</span>
              <motion.a
                href="https://www.linkedin.com/in/tanay-burbure-80401a271/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={hoverLinkAnim}
              >
                Linkedin
              </motion.a>
            </li>
          </ul>

          <ul className="pt-3 text-lg">
            <li className="pb-2 flex items-center">
              <IoMdMail />
              &nbsp;
              <motion.a
                href="mailto:tanayburbure@gmail.com"
                className="pb-1"
                whileHover={hoverLinkAnim}
              >
                tanayburbure@gmail.com
              </motion.a>
            </li>
            <li className="flex items-center mt-2">
              <IoCallSharp />
              &nbsp;
              <motion.a
                href="tel:+918421881858"
                className="mb-1"
                whileHover={hoverLinkAnim}
              >
                +91-8421881858
              </motion.a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-t-1 border-[#212121] w-full mt-16" />
      <h3 className="text-center pt-1 text-[#B7AB98]">
        Design inspired by &nbsp;
        <motion.span whileHover={hoverLinkAnim} className="text-[#EB5939]">
          M I N H &nbsp; P H A M
        </motion.span>
      </h3>
    </div>
  );
}

export default Footer;
