"use client";
import React from 'react';
import Earth from '../components/Earth';
import AnimatedText from '../components/AnimatedText';
import ProjectShowcase from '../components/ProjectShowcase'; // ✅ Import the component

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
    <div className="py-28 relative z-30">
      <div className="pl-[31.4vh] flex flex-col justify-center">
        <h5 className="text-xm mb-6">C L I E N T S</h5>

        <AnimatedText className="text-[9vh] w-[78%] tracking-tight font-medium leading-[4vw]">
          I worked with some of the most <span className="text-[#EB5939]">innovative</span> industry leaders.
        </AnimatedText>
      </div>

      {/* ✅ Reusable Showcase Component with Custom Data */}
      <ProjectShowcase projects={projects} />

      <Earth />
    </div>
  );
};

export default Client;
