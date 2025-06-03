"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const projects = [
    { title: "3D", description: "Next-Gen HMI Experience without driving experience.", speed: 0.5 },
    { title: "VISUAL", description: "Part of a massive team that created a Royal Caribbean eco-system.", speed: 0.5 },
    { title: "DESIGN", description: "Future of UFC Sports Ecosystem despite not being a sports fan.", speed: 0.5 },
    { title: "MOTION", description: "Visual concept and design language for the Lincoln Zephyr 2022.", speed: 0.67 },
    { title: "PRODUCT", description: "Designed a 1M+ users product utilizing my best experience: sleeping.", speed: 0.8 }
];

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
        <div className="relative">
            <div
                className="cursor-pointer border-b border-[#b7ab9820]"
                ref={containerRef}
                onMouseEnter={() => setSelectedProject(index)}
                onMouseLeave={() => setSelectedProject(null)}
            >
                <div className="inline-block text-[#2F2D29] pl-[15%]">
                    <motion.p
                        style={{ clipPath: clipPathStyle }}
                        className="text-[#2F2D29] p-2 font-medium text-[8vw] leading-[6.5vw] relative z-2"
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
        <div className="absolute top-0 h-full w-full z-2 pointer-events-none">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-[#ec4e39] pb-[0.4vh] text-[#0D0D0D] font-medium flex justify-between items-center px-[15.5%] transition-all duration-500 ease-in-out"
                    style={{
                        clipPath: selectedProject === index ? "inset(0 0 0)" : "inset(50% 0 50%)"
                    }}
                >
                    <p className="text-[#010101] mb-[0.6vh] uppercase font-semibold text-[8vw] leading-[7.1vw] relative z-1">
                        {project.title.substring(0, 8)}
                    </p>
                    <p className="w-[40%] text-[1vw] font-bold">{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default function Work() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            <h5 className="z-50 top-0 pb-6 pl-[15.4vw] shadow-lg">
                W H A T &nbsp; I &nbsp; D O
            </h5>

            <div className="relative w-full h-[90vh] text-[#2F2D29] overflow-hidden">
                <Titles projects={projects} setSelectedProject={setSelectedProject} />
                <Descriptions projects={projects} selectedProject={selectedProject} />
            </div>
        </>
    );
}