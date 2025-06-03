import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const projects = [
  { title: "3D", description: "Next-Gen HMI Experience without driving experience.", speed: 0.5 },
  { title: "VISUAL", description: "Part of a massive team that created a Royal Caribbean eco-system.", speed: 0.5 },
  { title: "DESIGN", description: "Future of UFC Sports Ecosystem despite not being a sports fan.", speed: 0.5 },
  { title: "MOTION", description: "Visual concept and design language for the Lincoln Zephyr 2022.", speed: 0.67 },
  { title: "PRODUCT", description: "Designed a 1M+ users product utilizing my best experience: sleeping.", speed: 0.8 }
];

function Title({ project, index, setSelectedProject }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", `${25 / project.speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div className="relative">
      <div
        className="cursor-pointer border-b border-[#b7ab9820]"
        ref={containerRef}
        onMouseEnter={() => {
          setSelectedProject(index);
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
          setIsHovered(false);
        }}
      >
        <div className="pl-[15%] py-8">
          {/* Title with scroll effect */}
          <div className="relative">
            {/* Base title (visible when not hovered) */}
            {!isHovered && (
              <h2 className="text-[8vw] leading-[6.5vw] font-medium text-[#2F2D29]">
                {project.title}
              </h2>
            )}
            
            {/* Animated overlay title */}
            <motion.h2
              style={{ clipPath: clipPathStyle }}
              className="absolute top-0 left-0 text-[8vw] leading-[6.5vw] font-medium text-[#B7AB98] z-10 pointer-events-none w-full"
            >
              {project.title}
            </motion.h2>
          </div>

          {/* Description that appears on hover */}
          <div className={`transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-[#B7AB98] text-lg mt-4 max-w-2xl">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Example usage in a parent component:
function ProjectsList() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
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

export default ProjectsList;