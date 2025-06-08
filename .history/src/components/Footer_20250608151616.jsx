import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import HoverAnimation from "./HoverAnimation";
import 'remixicon/fonts/remixicon.css'

function Footer() {
  return (
    <div className="h-[50vh] flex flex-col w-full ">
      <div className="pl-[32vh] pt-[15vh] px-48">
        <h3 className="text-lg tracking-widest mb-12 ml-2">C O N N E C T</h3>
        <div className="grid grid-cols-3 no-mask">
          <ul className="text-[4vh]">
            <li className="flex items-center ">
              <i class="ri-send-plane-2-fill text-[#EB5939] text-[2.5vh] mt-[1vh]"></i>
              <HoverAnimation>
                <a
                  href="https://www.instagram.com/tanay_burbure/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  Instagram
                </a>
              </HoverAnimation>
            </li>
            <li className="flex items-center">
              <i class="ri-send-plane-2-fill text-[#EB5939] text-[2.5vh] mt-[1vh]"></i>
              <HoverAnimation>
              <a
                href="https://www.facebook.com/tanay.burbure/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Facebook
              </a>
              </HoverAnimation>
            </li>
          </ul>
          <ul className="text-[4vh]">
            <li className="flex items-center">
              <i class="ri-send-plane-2-fill text-[#EB5939] text-[2.5vh] mt-[1vh]"></i>
              <HoverAnimation>
              <a
                href="https://t.me/Tanayburbure"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Telegram
              </a>
              </HoverAnimation>
            </li>
            <li className="flex items-center">
              <i class="ri-send-plane-2-fill text-[#EB5939] text-[2.5vh] mt-[1vh]"></i>
              <HoverAnimation>
              <a
                href="https://www.linkedin.com/in/tanay-burbure-80401a271/"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Linkedin
              </a>
              </HoverAnimation>
            </li>
          </ul>
          <ul className="pt-3">
            <li className="pb-2 flex items-center text-lg">
              <i class="ri-mail-fill text-[#EB5939] text-[2.5vh]"></i>
              &nbsp;
              <a href="mailto:tanayburbure@gmail.com" className="pb-1">
                tanayburbure@gmail.com
              </a>
            </li>
            <li className="flex items-center mt-2 text-lg">
              <i class="ri-phone-fill text-[#EB5939] text-[2.5vh]"></i>
              &nbsp;
              <a className="mb-1" href="tel:+918421881858">
                +91-8421881858
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-t-1 border-[#212121] w-full mt-16 " />
      <h3 className="text-center pt-1 text-[#B7AB98]">Design inspired by &nbsp; <span className="text-[#EB5939]">M I N H  &nbsp; P H A M</span></h3>
    </div>
  );
}

export default Footer;
