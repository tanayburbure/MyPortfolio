"use client";
import { useState, useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const data = [
    {
        title: "Ford",
        description: "Working on the Next-Generation HMI Experience without no driving experience.",
        speed: 0.5
    },
    {
        title: "UFC",
        description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
        speed: 0.5
    },
    {
        title: "Lincoln",
        description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
        speed: 0.67
    },
    {
        title: "Royal Caribbean",
        description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
        speed: 0.8
    },
    {
        title: "Sleepiq",
        description: "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
        speed: 0.8
    },
    {
        title: "NFL",
        description: "Explored the Future of Fantasy Football while being in a country where football means a total different sport.",
        speed: 0.8
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="absolute z-10 w-full overflow-hidden">
            <Titles data={data} setSelectedProject={setSelectedProject} />
            <Descriptions data={data} selectedProject={selectedProject} />
        </div>
    );
}

function Titles({ data, setSelectedProject }) {
    return (
        <div className="w-full border-t border-solid border-t-[#b7ab9820]">
            {data.map((project, i) => (
                <Title key={i} data={{ ...project, i }} setSelectedProject={setSelectedProject} />
            ))}
        </div>
    );
}

function Title({ data, setSelectedProject }) {
    const { title, speed, i } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", `${25 / speed}vw end`]
    });

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

    return (
        <div
            className="relative z-2 cursor-pointer border-b border-solid border-b-[#b7ab9820]"
            ref={container}
            onMouseOver={() => setSelectedProject(i)}
            onMouseLeave={() => setSelectedProject(null)}
        >
            <div className="inline-block pl-[10%]">
                <motion.p style={{ clipPath: clip }} className="inline-block text-[#b7ab98] uppercase font-bold text-[8vw] leading-[7.5vw] m-0 z-2">{title}</motion.p>
                <p className="block absolute text-[#1c1c1c] top-0 z-1">{title}</p>
            </div>
        </div>
    );
}

function Descriptions({ data, selectedProject }) {
    const crop = (string, maxLength) => {
        return string.substring(0, maxLength);
    };

    return (
        <div className="absolute top-0 h-full w-full z-2 pointer-events-none pt-px">
            {data.map((project, i) => {
                const { title, description } = project;
                return (
                    <div
                        key={i}
                        className="bg-[#ec4e39] flex justify-between items-center px-[10%] pb-px transition-all duration-400"
                        style={{
                            clipPath: selectedProject === i ? "inset(0 0 0)" : "inset(50% 0 50%)"
                        }}
                    >
                        <p className="text-[#010101] uppercase font-bold text-[8vw] leading-[7.5vw] m-0 relative z-1">
                            {crop(title, 8)}
                        </p>
                        <p className="w-[40%] text-[1vw] font-bold">{description}</p>
                    </div>
                );
            })}
        </div>
    );
}
