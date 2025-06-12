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
    <div className="relative w-full mt-20 overflow-hidden">
      {/* Earth Background (z-0) */}
      <div className="absolute left-0 mt-[24vh] lg:mt-[52.5vh] w-full h-full z-0">
        <Earth />
      </div>

      {/* Content Above Earth (z-10) */}
      <div className="relative z-10 pt-32 lg:pt-56 px-4 lg:pl-[32vh] flex flex-col justify-center">
        <h5 className="mb-4 lg:mb-12 font-semibold shadow-lg text-xs lg:text-[2.2vh] tracking-widest">C L I E N T S</h5>
        <AnimatedText
  className="text-[clamp(4.2vh,6vw,9vh)] 
             font-[font9] 
             cursor-expand 
             mb-12 
             lg:mb-20 
             tracking-tight 
             w-full
             lg:w-[80%] 
             font-semibold 
             leading-[clamp(4.2vh,8vw,4.1vw)] 
             break-words 
             hyphens-auto"
>
  I worked with some of the most{' '}
  <span className="text-[#EB5939] tracking-wide">
    innovative
  </span>{' '}
  industry leaders.
</AnimatedText>

      </div>

      {/* Showcase (z-10 to stay on top) */}
      <div className="relative z-10 top-[22vh] lg:top-[17vh] px-4 lg:px-0">
        <ProjectShowcase projects={projects} />
      </div>
    </div>
  );
};

export default Client;