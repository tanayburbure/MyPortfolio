import React from 'react'
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function Navigation() {
    return (
        <div className='relative fixed flex flex-col'>
            <div className='flex items-center justify-between '>
                <div className='left'>
                    <img src="/images/logo.gif" alt="" />
                </div>
                <div className='right text-white flex flex-col'>
                    <button className='nav-button'>About</button>
                    <button className='nav-button'>Work</button>
                    <button className='nav-button'>Contact</button>
                </div>
            </div>
            <div className='flex items-end items-center justify-between text-white'>
                <div className='social-media-icons text-xl flex flex-col'>
                    <IoLogoFacebook />
                    <AiFillInstagram />
                    <FaTwitter />
                    <IoLogoLinkedin />
                </div>
                <div className='bright'>
                    <button>sound on/off</button>
                </div>
            </div>
        </div>
    )
}

export default Navigation