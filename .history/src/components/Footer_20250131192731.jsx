import React from 'react'

function Footer() {
    return (
        <div className=" text-white h-[40vh]">
                <h3 className="text-sm tracking-widest text-gray-400 mb-4">CONNECT</h3>
                <div className="grid grid-cols-2 gap-10">
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
                    <div>
                        <h2></h2>
                        <h3></h3>
                        <h2></h2>
                        <h3></h3>
                    </div>
                </div>
            </div>
    )
}

export default Footer