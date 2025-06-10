import React from "react";
import HoverAnimation from "./HoverAnimation";
import 'remixicon/fonts/remixicon.css'

function Footer() {
  return (
    <div className="h-auto min-h-[50vh] flex flex-col w-full">
      <div className="pl-[5vw] sm:pl-[10vw] md:pl-[15vw] lg:pl-[32vh] pt-[5vh] sm:pt-[10vh] lg:pt-[15vh] px-4 sm:px-8 md:px-12 lg:px-48">
        <h3 className="text-sm sm:text-md font-semibold shadow-lg font-[font14] tracking-widest mb-6 sm:mb-8 md:mb-10 lg:mb-12 ml-2">C O N N E C T</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 no-mask font-[font8] ">
          {/* First Column */}
          <ul className="text-[2.5vh] sm:text-[3vh] md:text-[3.2vh] lg:text-[3.5vh]">
            <li className="flex items-center mb-1 sm:mb-5 md:mb-6 lg:mb-7"> {/* Added margin-bottom */}
              <i className="ri-send-plane-2-fill text-[#EB5939] text-[1.8vh] sm:text-[2vh] md:text-[2.2vh] lg:text-[2.5vh]"></i>
              <HoverAnimation>
                <a
                  href="https://www.instagram.com/tanay_burbure/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 mr-[4vw] sm:mr-[8vw] md:mr-[10vw] lg:mr-[13vh] tracking-tight"
                >
                  Instagram
                </a>
              </HoverAnimation>
            </li>
            <li className="flex items-center mb-4 sm:mb-5 md:mb-6 lg:mb-7"> {/* Added margin-bottom */}
              <i className="ri-send-plane-2-fill text-[#EB5939] text-[1.8vh] sm:text-[2vh] md:text-[2.2vh] lg:text-[2.5vh]"></i>
              <HoverAnimation>
                <a
                  href="https://www.facebook.com/tanay.burbure/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 tracking-tight mr-[4vw] sm:mr-[8vw] md:mr-[10vw] lg:mr-[13.8vh]"
                >
                  Facebook
                </a>
              </HoverAnimation>
            </li>
          </ul>

          {/* Second Column */}
          <ul className="text-[2.5vh] sm:text-[3vh] md:text-[3.2vh] lg:text-[3.5vh]">
            <li className="flex items-center mb-4 sm:mb-5 md:mb-6 lg:mb-7"> {/* Added margin-bottom */}
              <i className="ri-send-plane-2-fill text-[#EB5939] text-[1.8vh] sm:text-[2vh] md:text-[2.2vh] lg:text-[2.5vh]"></i>
              <HoverAnimation>
                <a
                  href="https://t.me/Tanayburbure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 tracking-tight mr-[4vw] sm:mr-[8vw] md:mr-[10vw] lg:mr-[14vh]"
                >
                  Telegram
                </a>
              </HoverAnimation>
            </li>
            <li className="flex items-center mb-4 sm:mb-5 md:mb-6 lg:mb-7"> {/* Added margin-bottom */}
              <i className="ri-send-plane-2-fill text-[#EB5939] text-[1.8vh] sm:text-[2vh] md:text-[2.2vh] lg:text-[2.5vh]"></i>
              <HoverAnimation>
                <a
                  href="https://www.linkedin.com/in/tanay-burbure-80401a271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 tracking-tight mr-[4vw] sm:mr-[8vw] md:mr-[10vw] lg:mr-[16vh]"
                >
                  Linkedin
                </a>
              </HoverAnimation>
            </li>
          </ul>

          {/* Third Column */}
          <ul className="pt-1 md:pt-0 lg:pt-1">
            <li className="flex items-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 text-[2vh] sm:text-[2.3vh] md:text-[2.5vh] lg:text-[2.7vh]"> {/* Added margin-bottom */}
              <i className="ri-mail-fill text-[#EB5939] text-[1.8vh] sm:text-[2vh] md:text-[2.2vh] lg:text-[2.5vh]"></i>
              <HoverAnimation>
                <a href="mailto:tanayburbure@gmail.com" className="ml-2 pb-1 mr-2 sm:mr-3 md:mr-4">
                  tanayburbure@gmail.com
                </a>
              </HoverAnimation>
            </li>
            <li className="flex items-center text-[1.8vh] sm:text-[2vh] md:text-[2.3vh] lg:text-[2.5vh]">
              <i className="ri-phone-fill text-[#EB5939] text-[1.8vh] sm:text-[2vh] md:text-[2.2vh] lg:text-[2.5vh]"></i>
              <HoverAnimation>
                <a className="ml-2 mb-1 mr-8 sm:mr-16 md:mr-20 lg:mr-24" href="tel:+918421881858">
                  +91-8421881858
                </a>
              </HoverAnimation>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-t-1 border-[#212121] w-full mt-8 sm:mt-12 lg:mt-16" />
      <h3 className="text-center tracking-normal font-semibold text-xs sm:text-sm md:text-md pt-2 text-[#B7AB98] font-[font14]">
        Design inspired by &nbsp; <span className="text-[#EB5939]">M I N H  &nbsp; P H A M</span>
      </h3>
    </div>
  );
}

export default Footer;