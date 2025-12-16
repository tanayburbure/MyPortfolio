import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisProvider({ children }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const lenis = new Lenis({
      wrapper: wrapperRef.current, // 🔑 important
      content: wrapperRef.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {children}
    </div>
  );
}
