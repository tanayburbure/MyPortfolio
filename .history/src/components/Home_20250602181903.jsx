import { useRef, useEffect, useState } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const [revealPercent, setRevealPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;

      const visibleRatio = 1 - Math.max(0, rect.top) / screenHeight;
      const clamped = Math.min(Math.max(visibleRatio, 0), 1);
      setRevealPercent(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Base image */}
      <img
        src="public\images\Exp.jpg"
        alt="Before"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlaying image with scroll-based clip */}
      <img
        src="public\images\back.jpg"
        alt="After"
        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 ease-out"
        style={{
          clipPath: `inset(0 ${100 - revealPercent * 100}% 0 0)`,
        }}
      />
    </div>
  );
}
