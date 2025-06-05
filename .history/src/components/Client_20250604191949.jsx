import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Earth from '../components/Earth';


gsap.registerPlugin(ScrollTrigger, SplitText);

const Client = () => {
    const textRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const element = textRef.current;

            // Initialize SplitText for the main heading
            const split = new SplitText(element.querySelector('h2'), {
                type: 'lines',
                linesClass: 'line'
            });

            // Animate each line on scroll
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

            // Initialize SplitText for the span element
            const spanElement = element.querySelector('span');
            const spanSplit = new SplitText(spanElement, { type: 'lines', linesClass: 'span-line' });
            
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
        <div className="py-20">
            <div className="pl-[31.4vh] flex flex-col justify-center">
                <h5 className="text-xm mb-6">C L I E N T S</h5>
                <div ref={textRef}>
                    <h2 className="text-[9vh] w-[78%] tracking-tight font-medium leading-[4vw] text-transparent bg-gradient-to-r from-[#212121] to-[#B7AB98] bg-[length:200%_100%] bg-right bg-clip-text [-webkit-background-clip:text]">
                        I worked with some of the most <span className="text-[#EB5939]">innovative</span> industry leaders.
                    </h2>
                </div>
            </div>
            <Earth/>
            <style>{`
                .line, .span-line {
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