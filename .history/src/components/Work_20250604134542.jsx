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
    <div className="relative h-screen w-full overflow-hidden">
      <h5 className="z-50 sticky top-0 pb-6 pl-[15.4vw] bg-white shadow-lg">
        W H A T &nbsp; I &nbsp; D O
      </h5>

      <div ref={containerRef} className="relative h-[calc(100vh-80px)] overflow-y-auto">
        <Titles
          projects={projects}
          setSelectedProject={setSelectedProject}
          containerRef={containerRef}
        />
        <Descriptions projects={projects} selectedProject={selectedProject} />
      </div>
    </div>
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
    offset: ["start center", "end center"],
    layoutEffect: false,
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={titleRef} className="relative h-[25vh] flex items-center">
      <div
        className="w-full cursor-pointer border-b border-[#b7ab9820]"
        onMouseEnter={() => setSelectedProject(index)}
        onMouseLeave={() => setSelectedProject(null)}
      >
        <div className="relative pl-[15%]">
          <p className="text-[#2F2D29] font-medium text-[8.2vw] leading-[6.5vw]">
            {project.title}
          </p>
          <motion.p
            style={{ clipPath: clipPathStyle }}
            className="absolute top-0 left-[15%] text-[#b7ab98] font-medium text-[8.2vw] leading-[6.5vw]"
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
    <div className="fixed top-0 left-0 w-full pointer-events-none z-20 mt-[10vh]">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="bg-[#ec4e39] h-[6.6vw] text-[#0D0D0D] flex justify-between items-center px-[15%]"
          initial={{ clipPath: "inset(50% 0 50%)" }}
          animate={{
            clipPath: selectedProject === index ? "inset(0 0 0)" : "inset(50% 0 50%)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="text-[#010101] font-medium text-[8.2vw] leading-[6.5vw]">
            {project.title.substring(0, 8)}
          </p>
          <p className="w-[40%] text-[1vw] font-bold">{project.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
