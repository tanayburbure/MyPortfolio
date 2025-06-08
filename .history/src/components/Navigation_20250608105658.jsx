import React from 'react';
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import MagneticWrapper from './MagneticWrapper';

function Navigation() {
  return (
    <div className='relative z-50 fixed h-full w-screen'>
      <div className='left absolute top-12 left-12'>
        <MagneticWrapper>
        <img
          src={`${import.meta.env.BASE_URL}images/logo.svg`}
          alt="Logo"
        />
        </MagneticWrapper>
      </div>

      <div className='absolute top-12 right-16 flex flex-col'>
        <button className='nav-button no-mask'>About</button>
        <button className='nav-button no-mask'>Work</button>
        <button className='nav-button no-mask'>Contact</button>
      </div>

      <div className="text-[2.5vh] text-[#EB5939] z-50 absolute top-[70vh] gap-8 left-[7.5vh] flex flex-col">
        <MagneticWrapper>
        <a href="https://www.facebook.com/tanay.burbure/" target="_blank" rel="noopener noreferrer" >
          <IoLogoFacebook />
        </a>
        </MagneticWrapper>
        <MagneticWrapper>
        <a href="https://www.instagram.com/tanay_burbure/" target="_blank" rel="noopener noreferrer" >
          <AiFillInstagram />
        </a>
        </MagneticWrapper>
        <MagneticWrapper>
        <a href="https://t.me/Tanayburbure" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane />
        </a>
        </MagneticWrapper>
        <MagneticWrapper>
        <a href="https://www.linkedin.com/in/tanay-burbure-80401a271/" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin />
        </a>
        </MagneticWrapper>
      </div>

      <div className='absolute top-[80vh] right-16 text-[2.5vh]'>
        <button
          className="no-mask"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          sound on
        </button>
      </div>
    </div>
  );
}

export default Navigation;
