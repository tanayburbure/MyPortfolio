"use client";
import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/tanay_burbure/",
      icon: "▸"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/tanay.burbure/",
      icon: "▸"
    },
    {
      name: "Telegram",
      url: "https://t.me/Tanayburbure",
      icon: "▸"
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/tanay-burbure-80401a271/",
      icon: "▸"
    }
  ];

  return (
    <div className="h-[50vh] flex flex-col w-full">
      <div className="pl-[32vh] pt-[15vh] px-48">
        <h3 className="text-lg tracking-widest mb-12 ml-2">C O N N E C T</h3>
        <div className="grid grid-cols-3 no-mask">
          <ul className="text-[4vh]">
            {socialLinks.slice(0, 2).map((link, index) => (
              <SocialLink key={index} link={link} index={index} />
            ))}
          </ul>
          <ul className="text-[4vh]">
            {socialLinks.slice(2, 4).map((link, index) => (
              <SocialLink key={index + 2} link={link} index={index + 2} />
            ))}
          </ul>
          <ContactInfo />
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}

function SocialLink({ link, index }) {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", `${25 / 1}vw end`], // Using speed=1 for all links
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div className="relative no-mask" ref={containerRef}>
      <li className="flex items-center">
        <span className="text-red-500 mr-2">{link.icon}</span>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block"
        >
          {link.name}
          <motion.span
            style={{ clipPath: clipPathStyle }}
            className="absolute top-0 left-0 text-[#b7ab98] pointer-events-none"
          >
            {link.name}
          </motion.span>
        </a>
      </li>
    </div>
  );
}

function ContactInfo() {
  const emailRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  
  // Email animation
  const { scrollYProgress: emailProgress } = useScroll({
    target: emailRef,
    offset: ["start end", `${25 / 1}vw end`],
  });
  const emailClipProgress = useTransform(emailProgress, [0, 1], [100, 0]);
  const emailClipPathStyle = useMotionTemplate`inset(0 ${emailClipProgress}% 0 0)`;

  // Phone animation
  const { scrollYProgress: phoneProgress } = useScroll({
    target: phoneRef,
    offset: ["start end", `${25 / 1}vw end`],
  });
  const phoneClipProgress = useTransform(phoneProgress, [0, 1], [100, 0]);
  const phoneClipPathStyle = useMotionTemplate`inset(0 ${phoneClipProgress}% 0 0)`;

  return (
    <ul className="pt-3">
      <li className="pb-2 flex items-center text-lg" ref={emailRef}>
        <IoMdMail />
        &nbsp;
        <a href="mailto:tanayburbure@gmail.com" className="pb-1 relative inline-block">
          tanayburbure@gmail.com
          <motion.span
            style={{ clipPath: emailClipPathStyle }}
            className="absolute top-0 left-0 text-[#b7ab98] pointer-events-none"
          >
            tanayburbure@gmail.com
          </motion.span>
        </a>
      </li>
      <li className="flex items-center mt-2 text-lg" ref={phoneRef}>
        <IoCallSharp />
        &nbsp;
        <a className="mb-1 relative inline-block" href="tel:+918421881858">
          +91-8421881858
          <motion.span
            style={{ clipPath: phoneClipPathStyle }}
            className="absolute top-0 left-0 text-[#b7ab98] pointer-events-none"
          >
            +91-8421881858
          </motion.span>
        </a>
      </li>
    </ul>
  );
}

function FooterBottom() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", `${25 / 1}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={containerRef}>
      <hr className="border-t-1 border-[#212121] w-full mt-16" />
      <h3 className="text-center pt-1 text-[#B7AB98]">
        <span className="relative inline-block">
          Design inspired by &nbsp; 
          <span className="text-[#EB5939]">M I N H  &nbsp; P H A M</span>
          <motion.span
            style={{ clipPath: clipPathStyle }}
            className="absolute top-0 left-0 text-[#b7ab98] pointer-events-none"
          >
            Design inspired by &nbsp; 
            <span className="text-[#EB5939]">M I N H  &nbsp; P H A M</span>
          </motion.span>
        </span>
      </h3>
    </div>
  );
}

export default Footer;