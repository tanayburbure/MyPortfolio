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
          className="cursor-pointer border-b border-[#b7ab9820]"
          ref={containerRef}
          onMouseEnter={() => setSelectedProject(index)}
          onMouseLeave={() => setSelectedProject(null)}
        >
          <div className="pl-[15%] p-2 relative">
            {/* Container for both text elements with identical styling */}
            <div className="relative">
              {/* Base text (dark) */}
              <p className="text-[8vw] leading-[6.5vw] font-medium text-[#2F2D29]">
                {project.title}
              </p>
              
              {/* Overlay text (light reveal) - absolutely positioned over the base text */}
              <motion.p
                style={{ clipPath: clipPathStyle }}
                className="absolute top-0 left-0 text-[8vw] leading-[6.5vw] font-medium text-[#B7AB98] z-10 pointer-events-none w-full"
              >
                {project.title}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    );
  }