import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';


  
function Title({ project, index, setSelectedProject }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", `${25 / project.speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  const projects = [
    { title: "3D", description: "Next-Gen HMI Experience without driving experience.", speed: 0.5 },
    { title: "VISUAL", description: "Part of a massive team that created a Royal Caribbean eco-system.", speed: 0.5 },
    { title: "DESIGN", description: "Future of UFC Sports Ecosystem despite not being a sports fan.", speed: 0.5 },
    { title: "MOTION", description: "Visual concept and design language for the Lincoln Zephyr 2022.", speed: 0.67 },
    { title: "PRODUCT", description: "Designed a 1M+ users product utilizing my best experience: sleeping.", speed: 0.8 }
  ]; 

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
        <div className="pl-[15%] py-2 relative">
          <div className="relative inline-block">
            {/* Base text (dark) - hidden on hover */}
            {!isHovered && (
              <span className="text-[8vw] leading-[6.5vw] font-medium text-[#2F2D29]">
                {project.title}
              </span>
            )}
            
            {/* Overlay text (light) - always visible but clipped */}
            <motion.span
              style={{ clipPath: clipPathStyle }}
              className={`absolute top-0 left-0 text-[8vw] leading-[6.5vw] font-medium text-[#B7AB98] z-10 pointer-events-none w-full ${
                isHovered ? 'opacity-100' : ''
              }`}
            >
              {project.title}
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;