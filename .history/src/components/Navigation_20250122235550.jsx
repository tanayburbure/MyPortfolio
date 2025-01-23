import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function Navigation() {
    return (
        <div className='relative text-white h-screen'>
            <div className='left absolute top-12 left-12'>
                <img className='h-12' src="/images/logo.gif" alt="" />
            </div>
            <div className='absolute top-12 right-12 flex flex-col'>
                <button className='nav-button'>About</button>
                <button className='nav-button'>Work</button>
                <button className='nav-button'>Contact</button>
            </div>
            <div className='text-[2.5vh] absolute bottom-20 gap-8 left-12 flex flex-col'>
                <IoLogoFacebook />
                <AiFillInstagram />
                <FaTwitter />
                <IoLogoLinkedin />
            </div>
            <div className='bright'>
                <a href="" style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>sound on/off</a>
            </div>
        </div>
    )
}

export default Navigation