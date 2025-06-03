import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const projects = [
  { title: "3D", description: "Next-Gen HMI Experience without driving experience.", speed: 0.5 },
  { title: "VISUAL", description: "Part of a massive team that created a Royal Caribbean eco-system.", speed: 0.5 },
  { title: "DESIGN", description: "Future of UFC Sports Ecosystem despite not being a sports fan.", speed: 0.5 },
  { title: "MOTION", description: "Visual concept and design language for the Lincoln Zephyr 2022.", speed: 0.67 },
  { title: "PRODUCT", description: "Designed a 1M+ users product utilizing my best experience: sleeping.", speed: 0.8 }
];

function ProjectItem({ project, index, setSelectedProject }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Scroll animation setup (EXACTLY as you had it)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", `${25 / project.speed}vw end`]
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  // Original hover logic - only shows light text on hover
  const handleMouseEnter = () => {
    setSelectedProject(index);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setSelectedProject(null);
    setIsHovered(false);
  };

  return (
    <div 
      ref={containerRef}
      className="border-b border-[#b7ab9820] cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pl-[15%] py-8 relative">
        {/* Title Container */}
        <div className="relative">
          {/* Dark Text (always visible unless hovered) */}
          {!isHovered && (
            <h2 className="text-[8vw] leading-[6.5vw] font-medium text-[#2F2D29]">
              {project.title}
            </h2>
          )}

          {/* Light Text (with scroll clip, always present) */}
          <motion.h2
            style={{ clipPath }}
            className={`absolute top-0 left-0 text-[8vw] leading-[6.5vw] font-medium text-[#B7AB98] z-10 w-full ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {project.title}
          </motion.h2>
        </div>

        {/* Description (only shows on hover) */}
        <div className={`mt-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-[#B7AB98] text-lg max-w-2xl">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// Parent component usage remains the same
export default function ProjectsList() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          project={project}
          index={index}
          setSelectedProject={setSelectedProject}
        />
      ))}
    </div>
  );
}