import React from 'react'

function Footer() {
    return (
        <div className=" text-white h-[40vh] flex">
            <h3 className="text-sm tracking-widest text-gray-400 mb-4">CONNECT</h3>
            <div className=" grid-cols-3 ">
                <ul className="">
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
                <ul className="">
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
                <ul>
                    <li>
                        <h2>Email</h2>
                        <h3>tanayburbure@gmail.com</h3>
                    </li>
                    <li>
                        <h2>Phone</h2>
                        <h3>+91 8421881858</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer