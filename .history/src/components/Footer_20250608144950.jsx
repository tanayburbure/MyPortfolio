import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { motion } from "framer-motion"; // Import motion from framer-motion

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
                className=""
                whileHover={{ color: "#EB5939" }}
                transition={{ duration: 0.3 }}
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
                className=""
                whileHover={{ color: "#EB5939" }}
                transition={{ duration: 0.3 }}
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
                className=""
                whileHover={{ color: "#EB5939" }}
                transition={{ duration: 0.3 }}
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
                className=""
                whileHover={{ color: "#EB5939" }}
                transition={{ duration: 0.3 }}
              >
                Linkedin
              </motion.a>
            </li>
          </ul>
          <ul className="pt-3">
            <li className="pb-2 flex items-center text-lg">
              <IoMdMail />
              &nbsp;
              <motion.a
                href="mailto:tanayburbure@gmail.com"
                className="pb-1"
                whileHover={{ color: "#EB5939" }}
                transition={{ duration: 0.3 }}
              >
                tanayburbure@gmail.com
              </motion.a>
            </li>
            <li className="flex items-center mt-2 text-lg">
              <IoCallSharp />
              &nbsp;
              <motion.a
                className="mb-1"
                href="tel:+918421881858"
                whileHover={{ color: "#EB5939" }}
                transition={{ duration: 0.3 }}
              >
                +91-8421881858
              </motion.a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-t-1 border-[#212121] w-full mt-16" />
      <h3 className="text-center pt-1 text-[#B7AB98]">
        Design inspired by &nbsp;{" "}
        <motion.span 
          className="text-[#EB5939]"
          whileHover={{ color: "#B7AB98" }}
          transition={{ duration: 0.3 }}
        >
          M I N H &nbsp; P H A M
        </motion.span>
      </h3>
    </div>
  );
}

export default Footer;