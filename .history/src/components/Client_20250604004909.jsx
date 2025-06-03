import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoComponent = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        gsap.set(videoRef.current, { scale: 0.7, transformOrigin: "center center" });

        gsap.to(videoRef.current, {
            scale: 1,
            scrollTrigger: {
                trigger: videoRef.current,
                start: "top 80%", // Start animation when video enters viewport
                end: "top 10%", // Fully expand when reaching near the top
                scrub: 2, // Smooth transition
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
                <source src={`${import.meta.env.BASE_URL}video/reel.mp4`} type="video/mp4" />
                Your browser doesn't support videos
            </video>
        </div>
    );
};

const Client = () => {
    const brands = ["TESA", "FORD", "NVIDIA", "GOOGLE", "AMAZON"];

    return (
        <div>
            {/* Section Heading */}
            <div className="pl-[31.4vh] flex flex-col justify-center h-[60vh]">
                <h5 className="text-xm mb-6">C L I E N T S</h5>
                <h2 className="text-[9vh] w-[78%] tracking-tight font-medium leading-[4vw]">
                    I worked with some of the most <span className="text-[#EB5939]">innovative</span> industry leaders.
                </h2>
            </div>

            {/* Brand Names */}
            <div>
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className={`w-full flex items-center border-[#272522] border-t ${
                            index === brands.length - 1 ? "border-b" : ""
                        } h-[14vh]`}
                    >
                        <h2 className="text-[18vh] text-[#2F2D29] pl-[16vw] font-medium pb-[1.8vh]">{brand}</h2>
                    </div>
                ))}
            </div>

            {/* Video Section */}
            <VideoComponent />
        </div>
    );
};

export default Client;
