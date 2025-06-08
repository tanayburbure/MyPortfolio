import React from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const MotionLink = ({ href, children, target, rel, icon: Icon }) => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={containerRef} className="relative no-mask">
      <a
        href={href}
        target={target}
        rel={rel}
        className="flex items-center group"
      >
        {Icon ? (
          <Icon className="mr-2 text-[#EB5939]" />
        ) : (
          <span className="text-[#EB5939] mr-2">▸</span>
        )}
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
};

function Footer() {
  return (
    <div className="w-full bg-[#0D0D0D] text-[#B7AB98]">
      <div className="pl-[32vh] pt-[15vh] px-48 pb-[10vh]">
        <h3 className="text-lg tracking-widest mb-12 ml-2 text-[#EB5939]">
          C O N N E C T
        </h3>
        <div className="flex flex-col text-[4vh] space-y-2">
          <MotionLink
            href="https://www.instagram.com/tanay_burbure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </MotionLink>
          <MotionLink
            href="https://www.facebook.com/tanay.burbure/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </MotionLink>
          <MotionLink
            href="https://t.me/Tanayburbure"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </MotionLink>
          <MotionLink
            href="https://www.linkedin.com/in/tanay-burbure-80401a271/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </MotionLink>
          <MotionLink
            href="mailto:tanayburbure@gmail.com"
            icon={IoMdMail}
          >
            tanayburbure@gmail.com
          </MotionLink>
          <MotionLink
            href="tel:+918421881858"
            icon={IoCallSharp}
          >
            +91-8421881858
          </MotionLink>
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