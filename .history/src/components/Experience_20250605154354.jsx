import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import AnimatedText from '../components/AnimatedText'; // Make sure this exists

gsap.registerPlugin(ScrollTrigger, SplitText);

const VideoComponent = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        gsap.set(videoRef.current, { scale: 0.7, transformOrigin: "center center" });

        gsap.to(videoRef.current, {
            scale: 1,
            scrollTrigger: {
                trigger: videoRef.current,
                start: "top 80%",
                end: "top 10%",
                scrub: 5,
            },
        });
    }, []);

    return (
        <div className="pt-16 mb-12 flex justify-center items-center">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="./video/reel.mp4" type="video/mp4" />
                Your browser doesn't support videos
            </video>
        </div>
    );
};

function Experience() {
    return (
        <div className="flex flex-col mt-12 justify-center">
            <h5 className="text-sm font-semibold mb-6 pl-[31vh]">E X P E R I E N C E</h5>

            <AnimatedText className="text-[9vh] mb-20 pl-[31vh] tracking-tighter w-[77%] font-semibold leading-[4.5vw]">
                Over <span className="text-[#EB5939]">two years</span> of Experience in interactive design and working with some of the most talented people in the business.
            </AnimatedText>
        </div>
    );
}

export default Experience;
