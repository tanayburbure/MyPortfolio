import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function Navigation() {
    return (
        <div className='relative text-white'>
            <div className='left'>
                <img src="/images/logo.gif" alt="" />
            </div>
            <div className='right flex flex-col'>
                <button className='nav-button'>About</button>
                <button className='nav-button'>Work</button>
                <button className='nav-button'>Contact</button>
            </div>
            <div className='text-xl flex flex-col'>
                <IoLogoFacebook />
                <AiFillInstagram />
                <FaTwitter />
                <IoLogoLinkedin />
            </div>
            <div className='bright'>
                <button>sound on/off</button>
            </div>
        </div>
    )
}

export default Navigation