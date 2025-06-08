import React, { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

function AnimatedLink({ href, children, target, rel }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div className="relative no-mask" ref={containerRef}>
      <a
        href={href}
        target={target}
        rel={rel}
        className="flex items-center mb-2 relative group"
      >
        <span className="text-[#EB5939] mr-2">▸</span>
        <span className="relative">
          <span className="text-[#B7AB98] group-hover:text-[#EB5939] transition-colors duration-300">
            {children}
          </span>
          <motion.span
            style={{ clipPath: clipPathStyle }}
            className="absolute left-0 top-0 text-[#EB5939] pointer-events-none"
          >
            {children}
          </motion.span>
        </span>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <div className="w-full bg-[#0D0D0D] text-[#B7AB98]">
      <div className="pl-[32vh] pt-[15vh] px-48 pb-[10vh]">
        <h3 className="text-lg tracking-widest mb-12 ml-2 text-[#EB5939]">C O N N E C T</h3>
        <div className="flex flex-col text-[4vh]">
          <AnimatedLink
            href="https://www.instagram.com/tanay_burbure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </AnimatedLink>
          <AnimatedLink
            href="https://www.facebook.com/tanay.burbure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </AnimatedLink>
          <AnimatedLink
            href="https://t.me/Tanayburbure"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </AnimatedLink>
          <AnimatedLink
            href="https://www.linkedin.com/in/tanay-burbure-80401a271/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </AnimatedLink>
          
          <div className="relative no-mask mt-4">
            <a
              href="mailto:tanayburbure@gmail.com"
              className="flex items-center text-lg mb-5 group"
            >
              <IoMdMail className="mr-2 text-[#EB5939]" />
              <span className="relative">
                <span className="text-[#B7AB98] group-hover:text-[#EB5939] transition-colors duration-300">
                  tanayburbure@gmail.com
                </span>
                <motion.span
                  style={{ clipPath: clipPathStyle }}
                  className="absolute left-0 top-0 text-[#EB5939] pointer-events-none"
                >
                  tanayburbure@gmail.com
                </motion.span>
              </span>
            </a>
          </div>

          <div className="relative no-mask">
            <a
              href="tel:+918421881858"
              className="flex items-center text-lg group"
            >
              <IoCallSharp className="mr-2 text-[#EB5939]" />
              <span className="relative">
                <span className="text-[#B7AB98] group-hover:text-[#EB5939] transition-colors duration-300">
                  +91-8421881858
                </span>
                <motion.span
                  style={{ clipPath: clipPathStyle }}
                  className="absolute left-0 top-0 text-[#EB5939] pointer-events-none"
                >
                  +91-8421881858
                </motion.span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t-1 border-[#B7AB9820] w-full" />
      <h3 className="text-center pt-1 text-[#B7AB98] py-8">
        Design inspired by &nbsp;
        <span className="text-[#EB5939]">M I N H &nbsp; P H A M</span>
      </h3>
    </div>
  );
}

export default Footer;