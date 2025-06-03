"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const data = [
  // Keep your original data array here
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen w-full"> {/* Added relative positioning and min-height */}
      {/* Titles Section */}
      <div className="w-full border-t border-solid border-t-[rgba(183,171,152,0.25)]">
        {data.map((project, i) => (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>

      {/* Descriptions Overlay */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[2]">
        {data.map((project, i) => (
          <div
            key={i}
            className="absolute w-full h-full bg-[#ec4e39] flex justify-between items-center px-[10%] pb-px"
            style={{
              clipPath: selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%)",
              transition: "clip-path 0.4s",
            }}
          >
            <p className="text-[#010101] uppercase font-bold text-[8vw] leading-[7.5vw] m-0 relative z-[1]">
              {project.title.substring(0, 8)}
            </p>
            <p className="w-[40%] text-[1vw] font-bold">
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
      className="border-b border-solid border-b-[rgba(183,171,152,0.25)] cursor-pointer relative h-[20vh]"
      onMouseOver={() => setSelectedProject(i)}
      onMouseLeave={() => setSelectedProject(null)}
    >
      <div className="inline-block pl-[10%] h-full flex items-center">
        <motion.p
          style={{ clipPath: clip }}
          className="inline-block text-[#b7ab98] uppercase font-bold text-[8vw] leading-[7.5vw] m-0 relative z-[2]"
        >
          {title}
        </motion.p>
        <p className="block absolute text-[#1c1c1c] top-0 z-[1] uppercase font-bold text-[8vw] leading-[7.5vw] m-0">
          {title}
        </p>
      </div>
    </div>
  );
}