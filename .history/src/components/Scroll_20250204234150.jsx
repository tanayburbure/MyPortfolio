"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const data = [
  {
    title: "Ford",
    description: "Working on the Next-Generation HMI Experience...",
    speed: 0.5
  },
  {
    title: "UFC",
    description: "Developed the Future of UFC Sports Ecosystem...",
    speed: 0.5
  },
  // Add all your original data entries here
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Titles List */}
      <div className="w-full border-t border-[rgba(183,171,152,0.25)]">
        {data.map((project, i) => (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>

      {/* Descriptions Overlay */}
      <div className="absolute top-0 h-full w-full z-[2] pointer-events-none">
        {data.map((project, i) => (
          <div
            key={i}
            className="absolute h-full w-full bg-[#ec4e39] flex justify-between items-center px-[10%] transition-[clip-path] duration-400"
            style={{
              clipPath: selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%)",
            }}
          >
            <p className="text-[#010101] uppercase font-bold text-[8vw] leading-[7.5vw]">
              {project.title.substring(0, 8)}
            </p>
            <p className="w-[40%] text-[1.1vw] font-bold leading-tight">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Title({ data, setSelectedProject }) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', `${25 / speed}vw end`]
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div
      ref={container}
      className="border-b border-[rgba(183,171,152,0.25)] cursor-pointer relative group"
      onMouseOver={() => setSelectedProject(i)}
      onMouseLeave={() => setSelectedProject(null)}
    >
      <div className="pl-[10%] py-[2vh]">
        <motion.p 
          style={{ clipPath: clip }}
          className="inline-block text-[#b7ab98] uppercase font-bold text-[8vw] leading-[7.5vw] relative z-[2]"
        >
          {title}
        </motion.p>
        <p className="inline-block absolute top-0 text-[#1c1c1c] uppercase font-bold text-[8vw] leading-[7.5vw] z-[1]">
          {title}
        </p>
      </div>
    </div>
  );
}