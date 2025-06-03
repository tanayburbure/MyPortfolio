import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

function Title({ project, index, setSelectedProject }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", `${25 / project.speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div className="relative">
      <div
        className="group cursor-pointer border-b border-[#b7ab9820]"
        ref={containerRef}
        onMouseEnter={() => setSelectedProject(index)}
        onMouseLeave={() => setSelectedProject(null)}
      >
        <div className="pl-[15%] py-2 relative">
          <div className="relative inline-block">
            {/* Base text: hidden on hover */}
            <span className="text-[8vw] leading-[6.5vw] font-medium text-[#2F2D29] group-hover:opacity-0 transition-opacity duration-300">
              {project.title}
            </span>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
