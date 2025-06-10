import React from 'react'
import { MdCallMade } from "react-icons/md";
import MagneticWrapper from './MagneticWrapper';

function Github() {
    return (
        <div className='h-[70vh] flex flex-col items-center justify-start pt-36 lg:pt-36'>
            <h2 className='text-4xl lg:text-[7vh] font-semibold tracking-normal mb-4 lg:mb-4 font-[font9]'>
                EXPLORE MORE PROJECT's
            </h2>
            <MagneticWrapper>
                <a className='text-[#EB5939] font-[font9] no-mask border-[#EB5939] border border-1 rounded-full px-4 lg:pl-[2vh] lg:pr-[1.5vh] py-1 lg:pt-[0.2vh] text-lg lg:text-[2.7vh] flex items-center' 
                   href="https://github.com/tanayburbure" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    Github<MdCallMade />
                </a>
            </MagneticWrapper>
        </div>
    )
}

export default Github