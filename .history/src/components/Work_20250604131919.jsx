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
  return (
    <div className="w-full border-t border-[#b7ab9820] relative">
      {projects.map((project, index) => (
        <Title 
          key={index} 
          project={project} 
          index={index} 
          setSelectedProject={setSelectedProject}
        />
      ))}
    </div>
  );
}

function Title({ project, index, setSelectedProject }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start end", `${25 / project.speed}vw end`],
    layoutEffect: false
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div className="relative" ref={containerRef}>
      <div
        className="relative cursor-pointer border-b border-[#b7ab9820]"
        onMouseEnter={() => setSelectedProject(index)}
        onMouseLeave={() => setSelectedProject(null)}
      >
        <div className="inline-block pl-[15%] relative">
          {/* Base text layer (dark color) */}
          <p className="text-[#2F2D29] pb-[1vh] mt-[-1vh] font-medium text-[8.2vw] leading-[6.5vw]">
            {project.title}
          </p>
          
          {/* Animated text layer (light color) */}
          <motion.p
            style={{ 
              clipPath: clipPathStyle,
              background: 'linear-gradient(to right, #B7AB98 50%, transparent 50%)',
              backgroundSize: '200% 100%',
              backgroundPosition: 'right center',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text'
            }}
            className="absolute top-0 left-[14.85vw] text-transparent pb-[1vh] mt-[-1vh] font-medium text-[8.2vw] leading-[6.5vw]"
          >
            {project.title}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

function Descriptions({ projects, selectedProject }) {
  return (
    <div className="absolute top-[-3vh] mt-[2.85vh] w-screen z-20 pointer-events-none">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#ec4e39] h-[6.6vw] text-[#0D0D0D] font-medium flex justify-between items-center px-[15%] transition-all duration-500 ease-in-out"
          style={{
            clipPath: selectedProject === index ? "inset(0 0 0)" : "inset(50% 0 50%)"
          }}
        >
          <p className="text-[#010101] font-medium mb-3 leading-[6.5vw] text-[8.2vw] relative z-1">
            {project.title.substring(0, 8)}
          </p>
          <p className="w-[40%] text-[1vw] font-bold">{project.description}</p>
        </div>
      ))}
    </div>
  );
}