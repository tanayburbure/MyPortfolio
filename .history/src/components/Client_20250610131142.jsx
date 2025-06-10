"use client";

import React from 'react';
import Earth from '../components/Earth';
import AnimatedText from '../components/AnimatedText';
import ProjectShowcase from '../components/ProjectShowcase';

const projects = [
  {
    title: "TESA",
    description: "Elevated brand visibility for Fortune 500 clients.",
    speed: 0.5,
  },
  {
    title: "INNOVATHON",
    description: "Developed scalable systems for fast-growing startups.",
    speed: 0.55,
  },
  {
    title: "LOADING...",
    description: "Crafted compelling visual narratives for global campaigns.",
    speed: 0.6,
  },
];

const Client = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Earth Background (z-0) */}
      <div className="absolute left-0 mt-[50vh] w-full h-full z-0">
        <Earth />
      </div>

      {/* Content Above Earth (z-10) */}
      <div className="relative z-10 pt-56 pl-[31vh] flex flex-col justify-center
                     sm:pt-40 sm:pl-[10vh]
                     xs:pt-32 xs:px-[5vw]">
        <h5 className="mb-8 font-semibold shadow-lg font-sm font-[font14] tracking-widest
                      xs:mb-6">C L I E N T S</h5>
        <AnimatedText className="text-[9vh] font-[font9] cursor-expand mb-20 tracking-tight w-[80%] font-semibold leading-[4.3vw]
                                sm:text-[7vh] sm:leading-[5vw] sm:w-[90%]
                                xs:text-[5vh] xs:leading-[6vh] xs:w-full xs:mb-12">
          I worked with some of the most <span className="text-[#EB5939] font-[font8] tracking-wide">innovative</span> industry leaders.
        </AnimatedText>
      </div>

      {/* Showcase (z-10 to stay on top) */}
      <div className="relative z-10 top-[17vh]
                     xs:top-[10vh]">
        <ProjectShowcase projects={projects} />
      </div>
    </div>
  );
};

export default Client;