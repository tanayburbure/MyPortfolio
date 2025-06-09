"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

export default function ProjectShowcase({ projects }) {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="relative w-full h-[90vh] text-[#2F2D29] overflow-hidden">
            <Titles projects={projects} setSelectedProject={setSelectedProject} />
            <Descriptions projects={projects} selectedProject={selectedProject} />
        </div>
    );
}

function Titles({ projects, setSelectedProject }) {
    return (
        <div className="w-full border-t border-[#b7ab9820]">
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
        <div className="relative">
            <div
                className="border-b border-[#b7ab9820] no-mask font-[font9]"
                ref={containerRef}
            >
                <div className="inline-block pl-[15%] relative ">
                    <p
                        className="text-[#2F2D29] pb-[1vh]  font-bold text-[7.5vw] leading-[6.5vw] cursor-pointer"
                        onMouseEnter={() => setSelectedProject(index)}
                        onMouseLeave={() => setSelectedProject(null)}
                    >
                        {project.title}
                    </p>

                    <motion.p
                        style={{ clipPath: clipPathStyle }}
                        className="absolute top-0 left-[14.85vw] text-[#b7ab98] pb-[1vh]  font-bold text-[7.5vw] leading-[6.5vw] pointer-events-none"
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
        <div className="absolute top-[-3vh] w-screen z-2 pointer-events-none font-[font9]">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-[#ec4e39] h-[6.6vw] text-[#0D0D0D] font-bold flex justify-between items-center px-[14.8%] transition-all duration-500 ease-in-out"
                    style={{
                        clipPath: selectedProject === index ? "inset(0 0 0)" : "inset(50% 0 50%)",
                    }}
                >
                    <p className="text-[#010101] font-bold mb-3 leading-[6.5vw] text-[7.5vw] relative z-1">
                        {project.title.substring(0, 8)}
                    </p>
                    <p className="w-[40%] text-[1vw] font-bold">{project.description}</p>
                </div>
            ))}
        </div>
    );
}
