// "use client";
// import { useState, useRef } from "react";
// import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

// export default function ProjectShowcase({ projects }) {
//     const [selectedProject, setSelectedProject] = useState(null);

//     return (
//         <div className="relative w-full h-[90vh] text-[#2F2D29] overflow-hidden font-[font13]">
//             <Titles projects={projects} setSelectedProject={setSelectedProject} />
//             <Descriptions projects={projects} selectedProject={selectedProject} />
//         </div>
//     );
// }

// function Titles({ projects, setSelectedProject }) {
//     return (
//         <div className="w-full border-t border-[#b7ab9820] font-[font13]">
//             {projects.map((project, index) => (
//                 <Title
//                     key={index}
//                     project={project}
//                     index={index}
//                     setSelectedProject={setSelectedProject}
//                 />
//             ))}
//         </div>
//     );
// }

// function Title({ project, index, setSelectedProject }) {
//     const containerRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start end", `${25 / project.speed}vw end`],
//     });

//     const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
//     const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

//     return (
//         <div className="relative">
//             <div
//                 className="border-b border-[#b7ab9820] no-mask"
//                 ref={containerRef}
//             >
//                 <div className="inline-block pl-[31vh] relative">
//                     <p
//                         className="text-[#2F2D29] font-thin text-[8.2vw] leading-[6.5vw] cursor-pointer"
//                         onMouseEnter={() => setSelectedProject(index)}
//                         onMouseLeave={() => setSelectedProject(null)}
//                     >
//                         {project.title}
//                     </p>

//                     <motion.p
//                         style={{ clipPath: clipPathStyle }}
//                         className="absolute top-0 left-[15.6vw] text-[#b7ab98]  font-thin text-[8.2vw] leading-[6.5vw] pointer-events-none"
//                     >
//                         {project.title}
//                     </motion.p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function Descriptions({ projects, selectedProject }) {
//     return (
//         <div className="absolute top-[-3vh] mt-[3.20vh] w-screen z-2 pointer-events-none">
//             {projects.map((project, index) => (
//                 <div
//                     key={index}
//                     className="bg-[#ec4e39] h-[6.8vw] pt-2 text-[#0D0D0D] font-thin flex justify-between items-center px-[15%] transition-all duration-500 ease-in-out"
//                     style={{
//                         clipPath: selectedProject === index ? "inset(0 0 0)" : "inset(50% 0 50%)",
//                     }}
//                 >
//                     <p className="text-[#010101] font-thin mb-3 leading-[6.5vw] text-[8.2vw] relative z-1">
//                         {project.title.substring(0, 8)}
//                     </p>
//                     <p className="w-[40%] text-[1vw] font-bold font-[font9]">{project.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }
"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

export default function ProjectShowcase({ projects }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="relative w-full h-[90vh] text-[#2F2D29] overflow-hidden font-[font13]">
            <Titles 
                projects={projects} 
                setSelectedProject={setSelectedProject} 
                isMobile={isMobile} 
            />
            <Descriptions 
                projects={projects} 
                selectedProject={selectedProject} 
                isMobile={isMobile}
            />
        </div>
    );
}

function Titles({ projects, setSelectedProject, isMobile }) {
    return (
        <div className="w-full border-t border-[#b7ab9820] font-[font13]">
            {projects.map((project, index) => (
                <Title
                    key={index}
                    project={project}
                    index={index}
                    setSelectedProject={setSelectedProject}
                    isMobile={isMobile}
                />
            ))}
        </div>
    );
}

function Title({ project, index, setSelectedProject, isMobile }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", `${isMobile ? 100 : 25 / project.speed}vw end`],
    });

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

    // Mobile touch handlers
    const handleTouchStart = () => {
        if (isMobile) setSelectedProject(index);
    };

    const handleTouchEnd = () => {
        if (isMobile) setTimeout(() => setSelectedProject(null), 1000);
    };

    return (
        <div className="relative">
            <div
                className="border-b border-[#b7ab9820] no-mask"
                ref={containerRef}
            >
                <div className="inline-block lg:pl-[7.8vw] md:pl-[1vw] lg:pl-[14.5vw] relative">
                    <p
                        className="text-[#2F2D29] font-thin text-[6vh] sm:text-[5vw] md:text-[6vw] lg:text-[8.2vw] leading-[6.5vh] sm:leading-[5.5vw] md:leading-[5.8vw] lg:leading-[6.5vw] cursor-pointer"
                        onMouseEnter={!isMobile ? () => setSelectedProject(index) : undefined}
                        onMouseLeave={!isMobile ? () => setSelectedProject(null) : undefined}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {project.title}
                    </p>

                    <motion.p
                        style={{ clipPath: clipPathStyle }}
                        className="absolute top-0 left-[8vw] sm:left-[12vw] md:left-[1vw] lg:left-[14.5vw] text-[#b7ab98] font-thin text-[6vh] sm:text-[5.5vw] md:text-[6vw] lg:text-[8.2vw] leading-[6.5vh] sm:leading-[5.5vw] md:leading-[5.8vw] lg:leading-[6.5vw] pointer-events-none"
                    >
                        {project.title}
                    </motion.p>
                </div>
            </div>
        </div>
    );
}

function Descriptions({ projects, selectedProject, isMobile }) {
    return (
        <div className="absolute top-[-3vh] mt-[3.20vh] w-screen z-2 pointer-events-none">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-[#ec4e39] h-[8vh] sm:h-[7vh] md:h-[5.5vw] lg:h-[6.8vw] pt-2 text-[#0D0D0D] font-thin flex flex-col sm:flex-row justify-between items-center px-[5%] sm:px-[10%] md:px-[12%] lg:px-[14.8%] transition-all duration-500 ease-in-out"
                    style={{
                        clipPath: selectedProject === index ? "inset(0 0 0)" : "inset(50% 0 50%)",
                    }}
                >
                    <p className="text-[#010101] font-thin mb-1 sm:mb-2 md:mb-3 leading-[5vh] sm:leading-[4.5vw] md:leading-[5vw] lg:leading-[6.5vw] text-[5vw] sm:text-[4.5vw] md:text-[5vw] lg:text-[8.2vw] relative z-1">
                        {project.title.substring(0, isMobile ? 6 : 8)}
                    </p>
                    <p className="w-full sm:w-[45%] md:w-[42%] lg:w-[40%] text-[2.5vw] sm:text-[1.8vw] md:text-[1.3vw] lg:text-[1vw] font-bold font-[font9] text-center sm:text-left">
                        {project.description}
                    </p>
                </div>
            ))}
        </div>
    );
}