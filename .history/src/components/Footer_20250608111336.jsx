"use client";
import React, { useRef } from "react";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

function Footer() {
  return (
    <div className="h-[50vh] flex flex-col w-full">
      <div className="pl-[32vh] pt-[15vh] px-48">
        <h3 className="text-lg tracking-widest mb-12 ml-2">C O N N E C T</h3>
        <div className="grid grid-cols-3 no-mask">
          <SocialLinks />
          <ContactLinks />
          <ContactInfo />
        </div>
      </div>
      <FooterBottom />
    </div>
  );
}

function SocialLinks() {
  const socialLinks1 = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/tanay_burbure/",
      icon: "▸"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/tanay.burbure/",
      icon: "▸"
    }
  ];

  return (
    <ul className="text-[4vh]">
      {socialLinks1.map((link, index) => (
        <ScrollLink key={index} link={link} />
      ))}
    </ul>
  );
}

function ContactLinks() {
  const socialLinks2 = [
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
    <ul className="text-[4vh]">
      {socialLinks2.map((link, index) => (
        <ScrollLink key={index} link={link} />
      ))}
    </ul>
  );
}

function ScrollLink({ link }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <li className="flex items-center" ref={ref}>
      <span className="text-red-500 mr-2">{link.icon}</span>
      <div className="relative inline-block">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {link.name}
        </a>
        <motion.span
          className="absolute top-0 left-0 text-[#b7ab98] pointer-events-none"
          style={{ clipPath }}
        >
          {link.name}
        </motion.span>
      </div>
    </li>
  );
}

function ContactInfo() {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  return (
    <ul className="pt-3">
      <ContactItem 
        ref={emailRef}
        icon={<IoMdMail />}
        text="tanayburbure@gmail.com"
        href="mailto:tanayburbure@gmail.com"
      />
      <ContactItem
        ref={phoneRef}
        icon={<IoCallSharp />}
        text="+91-8421881858"
        href="tel:+918421881858"
      />
    </ul>
  );
}

function ContactItem({ ref, icon, text, href }) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <li className="flex items-center text-lg" ref={ref}>
      {icon}
      &nbsp;
      <div className="relative inline-block">
        <a href={href} className="block pb-1">
          {text}
        </a>
        <motion.span
          className="absolute top-0 left-0 text-[#b7ab98] pointer-events-none"
          style={{ clipPath }}
        >
          {text}
        </motion.span>
      </div>
    </li>
  );
}

function FooterBottom() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={ref}>
      <hr className="border-t-1 border-[#212121] w-full mt-16" />
      <h3 className="text-center pt-1 text-[#B7AB98]">
        <span className="relative inline-block">
          Design inspired by &nbsp;
          <span className="text-[#EB5939]">M I N H &nbsp; P H A M</span>
          <motion.span
            className="absolute top-0 left-0 text-[#b7ab98] pointer-events-none"
            style={{ clipPath }}
          >
            Design inspired by &nbsp;
            <span className="text-[#EB5939]">M I N H &nbsp; P H A M</span>
          </motion.span>
        </span>
      </h3>
    </div>
  );
}

export default Footer;