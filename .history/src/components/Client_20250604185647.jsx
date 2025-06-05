import React, { useRef } from "react";

const Client = () => {
    const textRef = useRef(null);

    return (
        <div>
            {/* Section Heading without animation */}
            <div className="pl-[31.4vh] flex flex-col justify-center h-[50vh]">
                <h5 className="text-xm mb-6">C L I E N T S</h5>
                <div ref={textRef}>
                    <h2 className="text-[9vh] w-[78%] tracking-tight font-medium leading-[4vw] text-transparent bg-gradient-to-r from-[#212121] to-[#B7AB98] bg-[length:200%_100%] bg-right bg-clip-text [-webkit-background-clip:text]">
                        I worked with some of the most <span className="text-[#EB5939]">innovative</span> industry leaders.
                    </h2>
                </div>
            </div>

        </div>
    );
};

export default Client;
