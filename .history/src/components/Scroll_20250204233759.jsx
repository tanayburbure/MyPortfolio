"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

// Sample data
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
  // Add more items as needed
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative w-full min-h-screen">
      {/* Titles Section */}
      <div className="w-full">
        {data.map((project, i) => (
          <TitleItem
            key={i}
            index={i}
            title={project.title}
            speed={project.speed}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>

      {/* Descriptions Section */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {data.map((project, i) => (
          <DescriptionItem
            key={i}
            index={i}
            title={project.title}
            description={project.description}
            isSelected={selectedProject === i}
          />
        ))}
      </div>
    </div>
  );
}

function TitleItem({ index, title, speed, setSelectedProject }) {
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
      className="h-[20vh] border-b border-[rgba(183,171,152,0.25)] flex items-center px-[10%] cursor-pointer relative"
      onMouseOver={() => setSelectedProject(index)}
      onMouseLeave={() => setSelectedProject(null)}
    >
      <div className="relative">
        <motion.p
          style={{ clipPath: clip }}
          className="text-[#b7ab98] uppercase font-bold text-[8vw] leading-[7.5vw] relative z-[2]"
        >
          {title}
        </motion.p>
        <p className="absolute top-0 left-0 text-[#1c1c1c] uppercase font-bold text-[8vw] leading-[7.5vw] z-[1]">
          {title}
        </p>
      </div>
    </div>
  );
}

function DescriptionItem({ index, title, description, isSelected }) {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-[#ec4e39] flex justify-between items-center px-[10%] transition-all duration-400"
      style={{
        clipPath: isSelected ? "inset(0 0 0)" : "inset(50% 0 50%)",
      }}
    >
      <p className="text-[#010101] uppercase font-bold text-[8vw] leading-[7.5vw]">
        {title.substring(0, 8)}
      </p>
      <p className="w-[40%] text-[1vw] font-bold">
        {description}
      </p>
    </div>
  );
}