import { useEffect, useRef } from "react";

const lerp = (a, b, n) => a + (b - a) * n;

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      // Faster interpolation = more responsive
      pos.current.x = lerp(pos.current.x, mouse.current.x, 0.35);
      pos.current.y = lerp(pos.current.y, mouse.current.y, 0.35);

      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updateMouse);
    animate();

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full bg-[#EF4423] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default CustomCursor;
