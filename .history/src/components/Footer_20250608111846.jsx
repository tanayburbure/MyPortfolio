import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

function Footer() {
  return (
    <div className="h-[80vh] flex flex-col w-full">
      <div className="pl-[32vh] pt-[15vh] px-48">
        <h3 className="text-lg tracking-widest mb-12 ml-2">C O N N E C T</h3>
        <div className="flex flex-col text-[4vh]">
          <a
            href="https://www.instagram.com/tanay_burbure/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-2"
          >
            <span className="text-red-500 mr-2">▸</span>Instagram
          </a>
          <a
            href="https://www.facebook.com/tanay.burbure/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-2"
          >
            <span className="text-red-500 mr-2">▸</span>Facebook
          </a>
          <a
            href="https://t.me/Tanayburbure"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-2"
          >
            <span className="text-red-500 mr-2">▸</span>Telegram
          </a>
          <a
            href="https://www.linkedin.com/in/tanay-burbure-80401a271/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-2"
          >
            <span className="text-red-500 mr-3">▸</span>Linkedin
          </a>
          <a
            href="mailto:tanayburbure@gmail.com"
            className="flex items-center text-lg mb-3"
          >
            <IoMdMail className="mr-2" />
            tanayburbure@gmail.com
          </a>
          <a
            href="tel:+918421881858"
            className="flex items-center text-lg"
          >
            <IoCallSharp className="mr-2" />
            +91-8421881858
          </a>
        </div>
      </div>
      <hr className="border-t-1 border-[#212121] w-full mt-16" />
      <h3 className="text-center pt-1 text-[#B7AB98]">
        Design inspired by &nbsp;
        <span className="text-[#EB5939]">M I N H &nbsp; P H A M</span>
      </h3>
    </div>
  );
}

export default Footer;
