"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

export default function ProjectShowcase({ projects }) {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="relative w-full h-[90vh] text-[#0D0D0D] overflow-hidden">
            <Titles projects={projects} setSelectedProject={setSelectedProject} />
            <Descriptions projects={projects} selectedProject={selectedProject} />
        </div>
    );
}

function Titles({ projects, setSelectedProject }) {
    return (
        <div className="w-full border-t border-[#21212120] pl-[32vh] pt-[15vh] px-48">
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

function Title({ project, index, setSelectedProject }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", `${25 / project.speed}vw end`],
    });

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

    return (
        <div className="relative no-mask">
            <div
                className="border-b border-[#21212120]"
                ref={containerRef}
            >
                <div className="inline-block relative">
                    <p
                        className="text-[#0D0D0D] pb-[1vh] mt-[-1vh] font-medium text-[4vh] leading-[6.5vw] cursor-pointer hover:text-[#EB5939] transition-colors duration-300"
                        onMouseEnter={() => setSelectedProject(index)}
                        onMouseLeave={() => setSelectedProject(null)}
                    >
                        <span className="text-[#EB5939] mr-2">▸</span>{project.title}
                    </p>

                    <motion.p
                        style={{ clipPath: clipPathStyle }}
                        className="absolute top-0 left-[2.5vh] text-[#B7AB98] pb-[1vh] mt-[-1vh] font-medium text-[4vh] leading-[6.5vw] pointer-events-none"
                    >
                        {project.title}
                    </motion.p>
                </div>
            </div>
        </div>
    );
}

function Descriptions({ projects, selectedProject }) {
    return (
        <div className="absolute top-0 mt-[15vh] w-screen z-2 pointer-events-none no-mask pl-[32vh] px-48">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-[#EB5939] h-[6.6vh] text-[#0D0D0D] font-medium flex justify-between items-center pr-[15%] transition-all duration-500 ease-in-out"
                    style={{
                        clipPath: selectedProject === index ? "inset(0 0 0)" : "inset(50% 0 50%)",
                    }}
                >
                    <p className="text-[#010101] font-medium leading-[6.5vh] text-[4vh] relative z-1">
                        {project.title.substring(0, 8)}
                    </p>
                    <p className="w-[40%] text-[1.5vh] font-bold">{project.description}</p>
                </div>
            ))}
        </div>
    );
}