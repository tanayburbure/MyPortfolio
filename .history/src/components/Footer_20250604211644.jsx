import React from "react";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <div className="h-[60vh] flex flex-col w-full pl-[32vh] pt-[15vh]">
      <h3 className="text-lg tracking-widest mb-16 ml-2">C O N N E C T</h3>
      <div className="grid grid-cols-3 ">
        <ul className="text-[4vh]">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">▸</span> Instagram
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">▸</span> Facebook
          </li>
        </ul>
        <ul className="text-[4vh]">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">▸</span> Telegram
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">▸</span> Linkedin
          </li>
        </ul>
        <ul className="pt-3">
          <li className="pb-2 flex items-center">
            <IoMdMail />
            <a
              href="mailto:tanayburbure@gmail.com"
              className=" pb-1"
            >
              tanayburbure@gmail.com
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
