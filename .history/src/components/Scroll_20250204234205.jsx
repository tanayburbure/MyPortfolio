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
  {
    title: "Lincoln",
    description: "Defined the visual concept and design language...",
    speed: 0.67
  },
  {
    title: "Royal Caribbean",
    description: "Created an entire Royal Caribbean eco-system...",
    speed: 0.8
  },
  {
    title: "Sleepiq",
    description: "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
    speed: 0.8
  },
  {
    title: "NFL",
    description: "Explored the Future of Fantasy Football...",
    speed: 0.8
  }
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
            isSelected={selectedProject === i}
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

function TitleItem({ index, title, speed, setSelectedProject, isSelected }) {
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
      className="h-[25vh] border-b border-[rgba(183,171,152,0.25)] flex items-center px-[10%] cursor-pointer relative group"
      onMouseOver={() => setSelectedProject(index)}
      onMouseLeave={() => setSelectedProject(null)}
    >
      <div className="relative w-full">
        <motion.p
          style={{ clipPath: clip }}
          className="text-[#b7ab98] uppercase font-bold text-[8vw] leading-[7.5vw] relative z-[2] transition-colors duration-300 group-hover:text-[#ec4e39]"
        >
          {title}
        </motion.p>
        <p className="absolute top-0 left-0 text-[#1c1c1c] uppercase font-bold text-[8vw] leading-[7.5vw] z-[1]">
          {title}
        </p>
        {isSelected && (
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-[#ec4e39]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.4 }}
          />
        )}
      </div>
    </div>
  );
}

function DescriptionItem({ index, title, description, isSelected }) {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-[#ec4e39] flex flex-col md:flex-row justify-between items-center px-[5%] md:px-[10%] transition-all duration-400"
      style={{
        clipPath: isSelected ? "inset(0 0 0)" : "inset(50% 0 50%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isSelected ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-[#010101] uppercase font-bold text-[10vw] md:text-[8vw] leading-[9vw] md:leading-[7.5vw] mb-4 md:mb-0">
        {title.substring(0, 8)}
      </p>
      <p className="w-full md:w-[40%] text-[4vw] md:text-[1.5vw] font-bold text-center md:text-left">
        {description}
      </p>
    </motion.div>
  );
}