import React, { useState, useEffect, useRef } from 'react';
import { preloadImage } from '../utility/preloadAssets';

const BG_IMAGE = '/images/new.jpg';
const CURSOR_MASK = '/images/mask.svg';

function Loader({ setLoading }) {
  const [percentage, setPercentage] = useState(0);
  const [assetsReady, setAssetsReady] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);
  const progressRef = useRef(0);

  /* ---------------- PRELOAD ASSETS ---------------- */
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const preload = async () => {
      try {
        await Promise.all([
          preloadImage(BG_IMAGE),
          preloadImage(CURSOR_MASK),
          document.fonts.ready,
        ]);
      } catch (e) {
        console.warn('Preload issue:', e);
      } finally {
        setAssetsReady(true);
      }
    };

    preload();
  }, []);

  /* ---------------- FAKE PROGRESS (VISUAL ONLY) ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      progressRef.current += 1;
      setPercentage(Math.min(progressRef.current, 100));
    }, 20);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- SHOW START WHEN READY ---------------- */
  useEffect(() => {
    if (assetsReady && percentage >= 100) {
      setShowButton(true);
    }
  }, [assetsReady, percentage]);

  const handleStartClick = () => {
    setHideLoader(true);
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0D0D0D] ${
        hideLoader ? 'hidden' : ''
      }`}
    >
      <div className="absolute top-[38vh] font-[font14] text-white text-[3.5vw] sm:text-[1.8vh]">
        {percentage}%
      </div>

      <svg className="w-[60vw] h-[60vw] sm:w-[16vw] sm:h-[16vw]" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="#EB5939"
          strokeWidth="0.4"
          strokeDasharray="188"
          strokeDashoffset={188 - (percentage / 100) * 188}
        />
      </svg>

      {showButton && (
        <button
          onClick={handleStartClick}
          className="absolute top-[55vh] border-[1px] border-[#EB5939] text-[#EB5939] px-12 py-2 rounded-full font-[font14] transition-all duration-500 hover:bg-[#EB5939] hover:text-[#0D0D0D]"
        >
          S T A R T
        </button>
      )}
    </div>
  );
}

export default Loader;
