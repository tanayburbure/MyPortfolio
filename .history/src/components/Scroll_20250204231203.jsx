"use client"
import { useState, useRef } from "react"
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion"


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
]

function Title({ data, setSelectedProject }) {
    const { title, speed, i } = data
    const container = useRef(null)

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0])
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`

    return (
        <div className={s.title} ref={container} onMouseOver={() => {setSelectedProject(i)}} onMouseLeave={() => {setSelectedProject(null)}}>
            <div>
                <motion.p style={{clipPath: clip}}>{title}</motion.p>
                <p>{title}</p>
            </div>
        </div>
    )
}

function Titles({ data, setSelectedProject }) {
    return (
        <div className={s.titles}>
            {data.map((project, i) => (
                <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject} />
            ))}
        </div>
    )
}

function Descriptions({ data, selectedProject }) {
    const crop = (string, maxLength) => {
        return string.substring(0, maxLength)
    }

    return (
        <div className={s.descriptions}>
            {data.map((project, i) => {
                const { title, description } = project
                return(
                    <div key={i} className={s.description} style={{ clipPath: selectedProject == i ? "inset(0 0 0)" : "inset(50% 0 50%)" }}>
                        <p>{crop(title, 8)}</p>
                        <p>{description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <div className={s.container}>
            <Titles data={data} setSelectedProject={setSelectedProject} />
            <Descriptions data={data} selectedProject={selectedProject} />
        </div>
    )
}