"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const projects = [
    { title: "Ford", description: "Next-Gen HMI Experience without driving experience.", speed: 0.5 },
    { title: "UFC", description: "Future of UFC Sports Ecosystem despite not being a sports fan.", speed: 0.5 },
    { title: "Lincoln", description: "Visual concept and design language for the Lincoln Zephyr 2022.", speed: 0.67 },
    { title: "Royal Caribbean", description: "Part of a massive team that created a Royal Caribbean eco-system.", speed: 0.8 },
    { title: "Sleepiq", description: "Designed a 1M+ users product utilizing my best experience: sleeping.", speed: 0.8 },
    { title: "NFL", description: "Explored Fantasy Football while being in a country where football is different.", speed: 0.8 }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="relative w-full overflow-hidden">
            <Titles projects={projects} setSelectedProject={setSelectedProject} />
            <Descriptions projects={projects} selectedProject={selectedProject} />
        </div>
    );
}

function Titles({ projects, setSelectedProject }) {
    return (
        <div className="w-full border-t border-[#b7ab9820]">
            {projects.map((project, index) => (
                <Title key={index} project={project} index={index} setSelectedProject={setSelectedProject} />
            ))}
        </div>
    );
}

function Title({ project, index, setSelectedProject }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", `${25 / project.speed}vw end`] });

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clipPathStyle = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

    return (
        <div
            className="relative cursor-pointer border-b border-[#b7ab9820]"
            ref={containerRef}
            onMouseEnter={() => setSelectedProject(index)}
            onMouseLeave={() => setSelectedProject(null)}
        >
            <div className="inline-block pl-[10%]">
                <motion.p style={{ clipPath: clipPathStyle }} className="text-[#b7ab98] uppercase font-bold text-[8vw] leading-[7.5vw] relative z-2">
                    {project.title}
                </motion.p>
                <p className="absolute top-0 text-[#1c1c1c]">{project.title}</p>
            </div>
        </div>
    );
}

function Descriptions({ projects, selectedProject }) {
    return (
        <div className="absolute top-0 h-full w-full z-2 pointer-events-none">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-[#ec4e39] flex justify-between items-center px-[10%] transition-all duration-500 ease-in-out"
                    style={{
                        clipPath: selectedProject === index ? "inset(0 0 0)" : "inset(50% 0 50%)"
                    }}
                >
                    <p className="text-[#010101] uppercase font-bold text-[8vw] leading-[7.5vw] relative z-1">
                        {project.title.substring(0, 8)}
                    </p>
                    <p className="w-[40%] text-[1vw] font-bold">{project.description}</p>
                </div>
            ))}
        </div>
    );
}
