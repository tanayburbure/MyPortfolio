import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function Navigation() {
    return (
        <div className='relative z-50 fixed h-full w-screen'>
            <div className='left absolute top-12 left-16'>
                <img
                    src={`${import.meta.env.BASE_URL}images/logo.svg`}
                    alt="Logo"
                />
            </div>
            <div className='absolute top-12 right-16 flex flex-col'>
                <button className='nav-button'>About</button>
                <button className='nav-button'>Work</button>
                <button className='nav-button'>Contact</button>
            </div>
            <div className="text-[2.5vh] z-50 absolute top-[70vh] gap-8 left-12 flex flex-col">
                <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <IoLogoFacebook />
                </a>
                <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram />
                </a>
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <FaTelegramPlane />
                </a>
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <IoLogoLinkedin />
                </a>
            </div>
            <div className='absolute top-[80vh] right-16 text-[2.5vh]'>
                <button style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                }} href="">sound on</button>
            </div>
        </div>
    )
}

export default Navigation