"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

// Test data - ensure this is uncommented
const data = [
  {
    title: "Ford",
    description: "Working on the Next-Generation HMI Experience...",
    speed: 0.5
  },
  // ... keep other data entries ...
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-red-100"> {/* Debug background */}
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

      {/* Descriptions Overlay - Temporarily removed for debugging */}
      {/* <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[2]">
        {data.map((project, i) => (
          <div
            key={i}
            className="absolute w-full h-full bg-[#ec4e39] flex justify-between items-center px-[10%]"
            style={{
              clipPath: selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%)",
              transition: "clip-path 0.4s",
            }}
          >
            <p className="text-[#010101] uppercase font-bold text-[8vw] leading-[7.5vw]">
              {project.title.substring(0, 8)}
            </p>
            <p className="w-[40%] text-[1vw] font-bold">
              {project.description}
            </p>
          </div>
        ))}
      </div> */}

      {/* Debug element */}
      <div className="fixed top-0 left-0 p-4 bg-white z-[9999]">
        <h1 className="text-2xl font-bold">Debug Info:</h1>
        <p>Data items: {data.length}</p>
        <p>Selected project: {selectedProject}</p>
      </div>
    </div>
  );
}

function Title({ data, setSelectedProject }) {
  const { title, speed, i } = data;
  const container = useRef(null);
  
  // Temporary disable scroll animation
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ['start end', `${25 / speed}vw end`]
  // });
  // const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  // const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div
      ref={container}
      className="border-b border-solid border-b-[rgba(183,171,152,0.25)] cursor-pointer relative min-h-[20vh] flex items-center bg-green-100" // Debug background
      onMouseOver={() => setSelectedProject(i)}
      onMouseLeave={() => setSelectedProject(null)}
    >
      <div className="pl-[10%] relative">
        {/* Simplified version without animations */}
        <p className="inline-block text-[#b7ab98] uppercase font-bold text-[8vw] leading-[7.5vw] relative z-[2]">
          {title}
        </p>
        <p className="absolute top-0 left-0 text-[#1c1c1c] uppercase font-bold text-[8vw] leading-[7.5vw] z-[1]">
          {title}
        </p>
      </div>
    </div>
  );
}