"use client";
import ProjectShowcase from "../components/ProjectShowcase"; // adjust path if needed

const projects = [
  {
    title: "3D",
    description: "Next-Gen HMI Experience without driving experience.",
    speed: 0.5,
  },
  {
    title: "VISUAL",
    description: "Part of a massive team that created a Royal Caribbean eco-system.",
    speed: 0.55,
  },
  {
    title: "DESIGN",
    description: "Future of UFC Sports Ecosystem despite not being a sports fan.",
    speed: 0.6,
  },
  {
    title: "MOTION",
    description: "Visual concept and design language for the Lincoln Zephyr 2022.",
    speed: 0.67,
  },
  {
    title: "PRODUCT",
    description: "Designed a 1M+ users product utilizing my best experience: sleeping.",
    speed: 0.8,
  },
];

export default function Work() {
  return (
    <div className="pl-[5vw] h-[80vh] lg:h-[90vh] mt-24">
      <h5 className="z-50 text-xs pl-1 top-0 mb-8 lg:mb-12 lg:pl-[14.85vw] font-semibold shadow-lg font-sm font-[font14] tracking-widest">
        W H A T &nbsp; I &nbsp; D O
      </h5>

      <div className="">
        <ProjectShowcase projects={projects} />
      </div>
    </div>
  );
}
