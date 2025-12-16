import React, { useState, useEffect, useRef, useCallback } from 'react';
import { preloadImage } from '../utility/preloadAssets';

// constants (unchanged)
const LOADING_DURATION = 600;
const HIDE_DELAY = 200;
const BUTTON_DELAY = 300;
const CIRCLE_RADIUS = 30;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

function Loader({ setLoading }) {
  const [percentage, setPercentage] = useState(0);
  const [hideTimer, setHideTimer] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [assetsReady, setAssetsReady] = useState(false);

  const rafRef = useRef(null);

  /* ---------------- INJECT STYLES ONCE ---------------- */
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes drawCircle {
        0% { stroke-dashoffset: ${CIRCLE_CIRCUMFERENCE}; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes disappearCircle {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -${CIRCLE_CIRCUMFERENCE}; }
      }
      .circle {
        animation:
          drawCircle ${LOADING_DURATION / 1000}s linear forwards,
          disappearCircle 0.3s linear ${LOADING_DURATION / 1000}s forwards;
        transform: rotate(-90deg);
        transform-origin: center;
      }
      .moveUp {
        animation: moveUp 0.5s ease-in-out forwards;
      }
      @keyframes moveUp {
        from { transform: translateY(0); }
        to { transform: translateY(-30px); }
      }
      .fadeIn {
        animation: fadeIn 0.5s ease-in-out forwards;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(25px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  /* ---------------- PRELOAD ASSETS ---------------- */
  useEffect(() => {
    let safetyTimeout;

    const preload = async () => {
      try {
        await Promise.all([
          preloadImage('/images/new.jpg'),
          preloadImage('/images/mask.svg'),
          document.fonts.ready,
        ]);
      } catch (e) {
        console.warn('Asset preload failed', e);
      } finally {
        setAssetsReady(true);
      }
    };

    preload();

    // safety fallback (never block user forever)
    safetyTimeout = setTimeout(() => {
      setAssetsReady(true);
    }, 4000);

    return () => clearTimeout(safetyTimeout);
  }, []);

  /* ---------------- LOADER PROGRESS (RAF) ---------------- */
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min(
        Math.round(((now - start) / LOADING_DURATION) * 100),
        100
      );

      setPercentage(progress);

      if (progress < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setHideTimer(true);
          setTimeout(() => setShowButton(true), BUTTON_DELAY);
        }, HIDE_DELAY);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = 'auto';
    };
  }, []);

  /* ---------------- START BUTTON ---------------- */
  const handleStartClick = useCallback(() => {
    if (!assetsReady) return;

    setLoading(false);
  }, [assetsReady, setLoading]);

  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-[#0D0D0D] z-50">
      {!hideTimer && (
        <div className="absolute top-[38vh] font-[font14] text-white pr-[4px] text-[3.5vw] sm:text-[1.8vh]">
          {percentage}%
        </div>
      )}

      <svg
        className="w-[60vw] h-[60vw] sm:w-[16vw] sm:h-[16vw]"
        viewBox="0 0 64 64"
      >
        <circle
          className="circle"
          cx="32"
          cy="32"
          r={CIRCLE_RADIUS}
          fill="none"
          stroke="#EB5939"
          strokeWidth="0.4"
          strokeDasharray={CIRCLE_CIRCUMFERENCE}
          strokeDashoffset={CIRCLE_CIRCUMFERENCE}
        />
      </svg>

      <img
        className={`h-[15vw] lg:h-[11vh] mix-blend-difference sm:h-16 absolute ${
          hideTimer ? 'moveUp' : ''
        }`}
        src={`${import.meta.env.BASE_URL}images/lobo.avif`}
        alt="Animated Logo"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />

      <button
        className={`border-[1px] ${
          showButton ? 'block fadeIn' : 'hidden'
        } text-[4.3vw] sm:text-[2vh] absolute font-[font14] font-semibold top-[53.5vh] sm:top-[55.5vh] px-8 sm:px-12 py-[6px] sm:py-[8px] rounded-full border-[#EB5939] text-[#EB5939] hover:bg-[#EB5939] hover:text-[#0D0D0D] transition-all duration-500`}
        onClick={handleStartClick}
      >
        S T A R T
      </button>
    </div>
  );
}

export default Loader;
