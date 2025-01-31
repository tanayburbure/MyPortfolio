import React from 'react'

function Footer() {
  return (
    <div className="flex justify-between items-start">
      <div>
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
        </div>
      </div>
      <div className="text-right">
        <h3 className="text-sm tracking-widest text-gray-400">Email</h3>
        <p className="text-gray-300">minhpham.design@gmail.com</p>
        <h3 className="text-sm tracking-widest text-gray-400 mt-4">Phone</h3>
        <p className="text-gray-300">+84 366 138 837</p>
      </div>
    </div>
  )
}

export default Footer