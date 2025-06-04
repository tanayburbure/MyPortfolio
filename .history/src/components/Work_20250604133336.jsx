"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const projects = [
  // ... (keep your projects array the same)
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  return (
    <>
      <h5 className="z-50 top-0 pb-6 pl-[15.4vw] shadow-lg">
        W H A T &nbsp; I &nbsp; D O
      </h5>

      <div ref={containerRef} className="relative w-full h-[90vh] text-[#2F2D29] overflow-y-auto"> {/* Changed to overflow-y-auto */}
        <Titles 
          projects={projects} 
          setSelectedProject={setSelectedProject}
          containerRef={containerRef}
        />
        <Descriptions projects={projects} selectedProject={selectedProject} />
      </div>
    </>
  );
}

function Titles({ projects, setSelectedProject, containerRef }) {
  return (
    <div className="w-full border-t border-[#b7ab9820]">
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
    offset: ["start end", "end start"] // Simplified offset
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={titleRef} className="relative"> {/* Moved ref to the outer div */}
      <div
        className="cursor-pointer border-b border-[#b7ab9820] h-[20vh] flex items-center" // Added fixed height and flex
        onMouseEnter={() => setSelectedProject(index)}
        onMouseLeave={() => setSelectedProject(null)}
      >
        <div className="inline-block pl-[15%] relative w-full">
          {/* Base text */}
          <p className="text-[#2F2D29] font-medium text-[8.2vw] leading-[6.5vw]">
            {project.title}
          </p>
          
          {/* Animated overlay text */}
          <motion.p
            style={{ clipPath: clipPathStyle }}
            className="absolute top-0 left-[15%] text-[#b7ab98] font-medium text-[8.2vw] leading-[6.5vw] w-full"
          >
            {project.title}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

// ... (keep your Descriptions component the same)