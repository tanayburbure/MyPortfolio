import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

function Footer() {
  return (
    <div className="h-[60vh] flex flex-col w-full pl-[32vh] pt-[15vh]">
      <h3 className="text-lg tracking-widest mb-16 ml-2">C O N N E C T</h3>
      <div className="grid grid-cols-3 ">
        <ul className="text-[4vh]">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">▸</span>
            <a href="https://www.instagram.com/tanay_burbure/" target="_blank" rel="noopener noreferrer" className="">
              Instagram
            </a>
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">▸</span>
            <a href="https://www.facebook.com/tanay.burbure/" target="_blank" rel="noopener noreferrer" className="">
              Facebook
            </a>
          </li>
        </ul>
        <ul className="text-[4vh]">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">▸</span>
            <a href="https://t.me/Tanayburbure
" target="_blank" rel="noopener noreferrer" className="">
              Telegram
            </a>
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">▸</span>
            <a href="https://www.linkedin.com/in/tanay-burbure-80401a271/" target="_blank" rel="noopener noreferrer" className="">
              Linkedin
            </a>
          </li>
        </ul>
        <ul className="pt-3">
          <li className="pb-2 flex items-center">
            <IoMdMail />
            &nbsp;
            <a href="mailto:tanayburbure@gmail.com" className="pb-1">
              tanayburbure@gmail.com
            </a>
          </li>
          <li className="flex items-center">
            <IoCallSharp />
            &nbsp;
            <a className="mb-1" href="tel:+918421881858">
              +91-8421881858
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
