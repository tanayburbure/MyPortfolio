import { motion } from "framer-motion";

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
                className="border-b border-[#b7ab9820] no-mask"
                ref={containerRef}
            >
                <motion.div
                    className="inline-block pl-[15%] relative"
                    whileHover={{
                        scale: 1.02,
                        letterSpacing: "0.05em",
                        transition: { duration: 0.4, ease: "easeOut" },
                    }}
                    onMouseEnter={() => setSelectedProject(index)}
                    onMouseLeave={() => setSelectedProject(null)}
                >
                    <motion.p
                        className="text-[#2F2D29] pb-[1vh] mt-[-1vh] font-medium text-[8.2vw] leading-[6.5vw] cursor-pointer"
                    >
                        {project.title}
                    </motion.p>

                    <motion.p
                        style={{ clipPath: clipPathStyle }}
                        className="absolute top-0 left-[14.85vw] text-[#b7ab98] pb-[1vh] mt-[-1vh] font-medium text-[8.2vw] leading-[6.5vw] pointer-events-none"
                    >
                        {project.title}
                    </motion.p>
                </motion.div>
            </div>
        </div>
    );
}
