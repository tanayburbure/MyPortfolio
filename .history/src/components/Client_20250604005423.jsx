import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register plugins
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
                scrub: 2,
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
    const textRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const element = textRef.current;

            const heading = element.querySelector('h2');
            const span = element.querySelector('span');

            const split = new SplitText(heading, {
                type: 'lines',
                linesClass: 'line'
            });

            const spanSplit = new SplitText(span, {
                type: 'lines',
                linesClass: 'span-line'
            });

            split.lines.forEach((line) => {
                gsap.set(line, { backgroundPositionX: '100%' });

                gsap.to(line, {
                    backgroundPositionX: '0%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: line,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 1,
                    }
                });
            });

            spanSplit.lines.forEach((line) => {
                gsap.set(line, { backgroundPositionX: '100%' });

                gsap.to(line, {
                    backgroundPositionX: '0%',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: line,
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 1,
                    }
                });
            });

            return () => {
                split.revert();
                spanSplit.revert();
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, []);

    return (
        <div>
            {/* Section Heading */}
            <div ref={textRef} className="pl-[31.4vh] flex flex-col justify-center h-[50vh]">
                <h5 className="text-xm mb-6">C L I E N T S</h5>
                <h2 className="text-[9vh] w-[78%] tracking-tight font-medium leading-[4vw] text-transparent bg-gradient-to-r from-[#212121] to-[#B7AB98] bg-[length:200%_100%] bg-right bg-clip-text [-webkit-background-clip:text]">
                    I worked with some of the most <span className="text-[#EB5939]">innovative</span>industry leaders.
                </h2>
            </div>

            {/* Video Section */}
            <VideoComponent />

            {/* SplitText Animation Style */}
            <style jsx global>{`
                .line {
                    display: block;
                    background: linear-gradient(to right, #B7AB98 50%, #212121 50%);
                    background-size: 200% 100%;
                    background-position-x: 100%;
                    color: transparent;
                    background-clip: text;
                    -webkit-background-clip: text;
                }
            `}</style>
        </div>
    );
};

export default Client;
