"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const projects = [
  // ... your projects array remains the same
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <h5 className="z-50 sticky top-0 pb-6 pl-[15.4vw] bg-[#2F2D29] shadow-lg">
        W H A T &nbsp; I &nbsp; D O
      </h5>

      <div className="relative h-full text-[#2F2D29]">
        {/* Move the scroll container inside Titles */}
        <Titles 
          projects={projects} 
          setSelectedProject={setSelectedProject} 
        />
        <Descriptions projects={projects} selectedProject={selectedProject} />
      </div>
    </div>
  );
}

function Titles({ projects, setSelectedProject }) {
  // Create scroll container ref here where it will be used
  const containerRef = useRef(null);

  return (
    <div 
      ref={containerRef} 
      className="w-full border-t border-[#b7ab9820] relative"
    >
      {projects.map((project, index) => (
        <Title 
          key={index} 
          project={project} 
          index={index} 
          setSelectedProject={setSelectedProject}
          containerRef={containerRef}
        />
      ))}
    </div>
  );
}

function Title({ project, index, setSelectedProject, containerRef }) {
  const titleRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: titleRef,
    container: containerRef,
    offset: ["start end", `${25 / project.speed}vw end`],
    layoutEffect: false // Add this to prevent hydration issues
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        ref={titleRef}
        className="relative cursor-pointer border-b border-[#b7ab9820]"
        onMouseEnter={() => setSelectedProject(index)}
        onMouseLeave={() => setSelectedProject(null)}
      >
        <div className="inline-block pl-[15%] relative">
          <p className="text-[#2F2D29] pb-[1vh] mt-[-1vh] font-medium text-[8.2vw] leading-[6.5vw]">
            {project.title}
          </p>
          
          <motion.p
            style={{ clipPath: clipPathStyle }}
            className="absolute top-0 left-[14.85vw] text-[#b7ab98] pb-[1vh] mt-[-1vh] font-medium text-[8.2vw] leading-[6.5vw]"
          >
            {project.title}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

// Descriptions component remains the same as in previous solution