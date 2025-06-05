import React from 'react'
import { MdCallMade } from "react-icons/md";

function Github() {
    return (
        <div className='h-[70vh] flex flex-col items-center justify-start pt-36'>
            <h2 className='text-[9.5vh] font-semibold tracking-tight mb-4'>EXPLORE MORE PROJECT's</h2>
            <a className='text-[#EB5939] border border-1 rounded-full pl-4 pr-[1.5vh] pb-[0.3vh] pt-[0.15vh] text-[3vh] flex items-center' href="https://github.com/tanayburbure" target="_blank" rel="noopener noreferrer">
                Github<MdCallMade />
            </a>

        </div>
    )
}

export default Github