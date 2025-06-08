"use client";
import { motion } from "framer-motion";

export default function ProjectShowcase({ projects }) {
  return (
    <div className="relative w-full h-[90vh] text-[#2F2D29]">
      <div className="w-full border-t border-[#b7ab9820]">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="border-b border-[#b7ab9820]"
            whileHover={{ backgroundColor: "#f5f5f5" }} // Light gray background on hover
            transition={{ duration: 0.3 }}
          >
            <div className="pl-[15%]">
              <motion.a
                className="text-[#2F2D29] pb-[1vh] mt-[-1vh] font-medium text-[8.2vw] leading-[6.5vw] cursor-pointer"
                whileHover={{ color: "#EB5939" }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}