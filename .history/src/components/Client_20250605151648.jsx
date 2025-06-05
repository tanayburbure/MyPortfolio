"use client";

import React from 'react';
import Earth from '../components/Earth';
import AnimatedText from '../components/AnimatedText';
import ProjectShowcase from '../components/ProjectShowcase';

const projects = [
  {
    title: "BRAND",
    description: "Elevated brand visibility for Fortune 500 clients.",
    speed: 0.5,
  },
  {
    title: "TECH",
    description: "Developed scalable systems for fast-growing startups.",
    speed: 0.55,
  },
  {
    title: "STORY",
    description: "Crafted compelling visual narratives for global campaigns.",
    speed: 0.6,
  },
  {
    title: "TRUST",
    description: "Built long-term partnerships with trusted global brands.",
    speed: 0.67,
  },
  {
    title: "FUTURE",
    description: "Innovating the next generation of client experiences.",
    speed: 0.8,
  },
];

const Client = () => {
  return (
    <div className="relative w-full overflow-hidden">
      
      {/* Earth Background (z-0) */}
      <div className="absolute top-[37vh] left-0 w-full h-full z-0">
        <Earth />
      </div>

      {/* Content Above Earth (z-10) */}
      <div className="relative z-10 py-32 pl-[31.4vh] flex flex-col justify-center">
        <h5 className="text-xm mb-6">C L I E N T S</h5>
        <AnimatedText className="text-[9vh] w-[78%] tracking-tight font-medium leading-[4vw]">
          I worked with some of the most <span className="text-[#EB5939]">innovative</span> industry leaders.
        </AnimatedText>
      </div>

      {/* Showcase (z-10 to stay on top) */}
      <div className="relative z-10">
        <ProjectShowcase projects={projects} />
      </div>
      
    </div>
  );
};

export default Client;
