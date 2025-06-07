import { useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis';

const lerp = (a, b, n) => a + (b - a) * n;

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const lenis = new Lenis();

    const updateScroll = (time) => {
      lenis.raf(time);
      requestAnimationFrame(updateScroll);
    };
    requestAnimationFrame(updateScroll);

    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    const animateCursor = () => {
      pos.current.x = lerp(pos.current.x, mouse.current.x,0.000000001);
      pos.current.y = lerp(pos.current.y, mouse.current.y,0.000000001);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animateCursor);
    };
    animateCursor();
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full bg-[#EF4423] mix-blend-difference"
    />
  );
};

export default CustomCursor;
