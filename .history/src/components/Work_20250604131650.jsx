"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "3D",
    description: "Next-Gen HMI Experience without driving experience.",
    speed: 0.5,
  },
  {
    title: "VISUAL",
    description: "Part of a massive team that created a Royal Caribbean eco-system.",
    speed: 0.5,
  },
  {
    title: "DESIGN",
    description: "Future of UFC Sports Ecosystem despite not being a sports fan.",
    speed: 0.5,
  },
  {
    title: "MOTION",
    description: "Visual concept and design language for the Lincoln Zephyr 2022.",
    speed: 0.67,
  },
  {
    title: "PRODUCT",
    description: "Designed a 1M+ users product utilizing my best experience: sleeping.",
    speed: 0.8,
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);

  return (
    <>
      <h5 className="z-50 top-0 pb-6 pl-[15.4vw] shadow-lg">
        W H A T &nbsp; I &nbsp; D O
      </h5>

      <div ref={containerRef} className="relative w-full h-[90vh] text-[#2F2D29] overflow-hidden">
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
    offset: ["start end", `${25 / project.speed}vw end`],
    layoutEffect: false // Added to fix hydration warning
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div className="relative">
      <div
        className="relative cursor-pointer border-b border-[#b7ab9820]"
        ref={titleRef}
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