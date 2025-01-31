import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function Navigation() {
    return (
        <div className='relative z-50 fixed h-[100vh] w-[100vw] text-white'>
            <div className='left absolute top-12 left-12'>
                <img className='h-12' src="public/images/logo.gif" alt="" />
            </div>
            <div className='absolute top-12 right-12 flex flex-col'>
                <button className='nav-button'>About</button>
                <button className='nav-button'>Work</button>
                <button className='nav-button'>Contact</button>
            </div>
            <div className='text-[2.5vh] z-[999] absolute top-[67vh] gap-8 left-12 flex flex-col'>
                <IoLogoFacebook />
                <AiFillInstagram />
                <FaTwitter />
                <IoLogoLinkedin />
            </div>
            <div className='absolute top-[76vh] right-12 text-[2.5vh]'>
                <button style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                }} href="">sound on</button>
            </div>
        </div>
    )
}

export default Navigation