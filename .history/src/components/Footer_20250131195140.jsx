import React from 'react'

function Footer() {
    return (
        <div className="text-white h-[55vh] flex flex-col w-full pl-[30vh] px-4 pt-[19vh]">
            <h3 className="text-sm tracking-widest text-gray-400 mb-8">C O N N E C T</h3>
            <div className="grid grid-cols-3 ">
                <ul className="text-[4vh]">
                    <li className="flex items-center">
                        <span className="text-red-500 mr-2">▸</span> Dribbble
                    </li>
                    <li className="flex items-center">
                        <span className="text-red-500 mr-2">▸</span> Youtube
                    </li>
                    <li className="flex items-center">
                        <span className="text-red-500 mr-2">▸</span> Linkedin
                    </li>
                </ul>
                <ul className="text-[4vh]">
                    <li className="flex items-center">
                        <span className="text-red-500 mr-2">▸</span> Instagram
                    </li>
                    <li className="flex items-center">
                        <span className="text-red-500 mr-2">▸</span> Facebook
                    </li>
                    <li className="flex items-center">
                        <span className="text-red-500 mr-2">▸</span> Behance
                    </li>
                </ul>
                <ul className='pt-3'>
                    <li className='pb-4'>
                        <h2  className='text-[2.5vh]'>Email</h2>
                        <h3  className='text-[2vh]'>tanayburbure@gmail.com</h3>
                    </li>
                    <li>
                        <h2  className='text-[2.5vh]'>Phone</h2>
                        <h3  className='text-[2vh]'>+91 8421881858</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer