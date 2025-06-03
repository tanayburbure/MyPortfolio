"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const data = [
  // ... keep the same data array as before ...
];

function Scroll() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="absolute h-screen z-[1] w-full overflow-hidden">
      {/* Titles Component */}
      <div className="w-full border-t border-solid border-t-[rgba(183,171,152,0.25)]">
        {data.map((project, i) => (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>

      {/* Descriptions Component */}
      <div className="absolute top-0 h-full w-full z-[2] pointer-events-none pt-px">
        {data.map((project, i) => {
          const crop = (string, maxLength) => string.substring(0, maxLength);
          return (
            <div
              key={i}
              className="bg-[#ec4e39] flex justify-between items-center px-[10%] pb-px"
              style={{
                clipPath: selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%)",
                transition: "clip-path 0.4s",
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
            >
              <p className="text-[#010101] uppercase font-bold text-[8vw] leading-[7.5vw] m-0 relative z-[1]">
                {crop(project.title, 8)}
              </p>
              <p className="w-[40%] text-[1vw] font-bold">{project.description}</p>
            </div>
          );
        })}
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
      className="border-b border-solid border-b-[rgba(183,171,152,0.25)] cursor-pointer relative z-[2]"
      onMouseOver={() => setSelectedProject(i)}
      onMouseLeave={() => setSelectedProject(null)}
    >
      <div className="inline-block pl-[10%]">
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

export default Scroll;