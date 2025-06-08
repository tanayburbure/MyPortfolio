import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import ProjectShowcase from "./ProjectShowcase"; // Import your ProjectShowcase component

const projects = [
  {
    title: "Project One",
    description: "A creative web solution for modern businesses with responsive design.",
    speed: 1
  },
  {
    title: "Project Two",
    description: "Interactive mobile application with seamless user experience.",
    speed: 1.2
  },
  {
    title: "Project Three",
    description: "Brand identity design that captures the essence of your business.",
    speed: 0.8
  }
];

function Footer() {
  return (
    <div className="w-full">
      {/* Project Showcase Section */}
      <div className="h-[90vh] w-full">
        <ProjectShowcase projects={projects} />
      </div>
      
      {/* Contact Section */}
      <div className="h-[77vh] flex flex-col w-full bg-[#0D0D0D] text-[#B7AB98]">
        <div className="pl-[32vh] pt-[15vh] px-48">
          <h3 className="text-lg tracking-widest mb-12 ml-2 text-[#EB5939]">C O N N E C T</h3>
          <div className="flex flex-col text-[4vh]">
            <a
              href="https://www.instagram.com/tanay_burbure/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-2 hover:text-[#EB5939] transition-colors duration-300"
            >
              <span className="text-[#EB5939] mr-2">▸</span>Instagram
            </a>
            <a
              href="https://www.facebook.com/tanay.burbure/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-2 hover:text-[#EB5939] transition-colors duration-300"
            >
              <span className="text-[#EB5939] mr-2">▸</span>Facebook
            </a>
            <a
              href="https://t.me/Tanayburbure"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-2 hover:text-[#EB5939] transition-colors duration-300"
            >
              <span className="text-[#EB5939] mr-2">▸</span>Telegram
            </a>
            <a
              href="https://www.linkedin.com/in/tanay-burbure-80401a271/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-4 hover:text-[#EB5939] transition-colors duration-300"
            >
              <span className="text-[#EB5939] mr-2">▸</span>Linkedin
            </a>
            <a
              href="mailto:tanayburbure@gmail.com"
              className="flex items-center text-lg mb-5 hover:text-[#EB5939] transition-colors duration-300"
            >
              <IoMdMail className="mr-2 text-[#EB5939]" />
              tanayburbure@gmail.com
            </a>
            <a
              href="tel:+918421881858"
              className="flex items-center text-lg hover:text-[#EB5939] transition-colors duration-300"
            >
              <IoCallSharp className="mr-2 text-[#EB5939]" />
              +91-8421881858
            </a>
          </div>
        </div>
        <hr className="border-t-1 border-[#B7AB9820] w-full mt-16" />
        <h3 className="text-center pt-1 text-[#B7AB98] py-8">
          Design inspired by &nbsp;
          <span className="text-[#EB5939]">M I N H &nbsp; P H A M</span>
        </h3>
      </div>
    </div>
  );
}

export default Footer;