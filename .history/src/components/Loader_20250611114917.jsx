import React, { useState, useEffect } from 'react';

// Constants for configuration
const LOADING_DURATION = 600;
const HIDE_DELAY = 200;
const BUTTON_DELAY = 300;
const CIRCLE_RADIUS = 30;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

function Loader({ setLoading }) {
  const [percentage, setPercentage] = useState(0);
  const [hideTimer, setHideTimer] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const intervalDuration = LOADING_DURATION / 100;
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setHideTimer(true);
            setTimeout(() => setShowButton(true), BUTTON_DELAY);
          }, HIDE_DELAY);
          return 100;
        }
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  const handleStartClick = () => {
    setHideLoader(true);
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 500);
  };

  return (
    <div className={`h-screen flex items-center justify-center fixed top-0 left-0 w-full bg-[#0D0D0D] z-50 ${hideLoader ? 'hidden' : ''}`}>
      <style>
        {`
          @keyframes drawCircle {
            0% { stroke-dashoffset: ${CIRCLE_CIRCUMFERENCE}; }
            100% { stroke-dashoffset: 0; }
          }

          @keyframes disappearCircle {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -${CIRCLE_CIRCUMFERENCE}; }
          }

          .circle {
            animation: drawCircle ${LOADING_DURATION / 1000}s linear forwards,
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
        `}
      </style>

      {/* Percentage Display */}
      {!hideTimer && (
        <div className="absolute top-[38vh] font-[font13] text-white pr-[4px] text-[3.5vw] sm:text-[1.8vh]">
          {percentage}%
        </div>
      )}

      {/* SVG Circle */}
      <svg className="w-[60vw] h-[60vw] sm:w-[16vw] sm:h-[16vw]" viewBox="0 0 64 64">
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

      {/* Logo */}
      <img
        className={`h-[12vw] sm:h-16 absolute ${hideTimer ? 'moveUp' : ''}`}
        src={`${import.meta.env.BASE_URL}images/logo.gif`}
        alt="Animated Logo"
        onError={(e) => { e.target.src = 'fallback-image.png'; }}
      />

      {/* Start Button */}
      <button
        className={`border-[1px] ${
          showButton ? 'block fadeIn' : 'hidden'
        } text-[4vw] sm:text-[2vh] absolute top-[53.5vh] sm:top-[55.5vh] px-8 sm:px-12 py-[6px] sm:py-[8px] pb-[6px] sm:pb-2 rounded-full border-[#EB5939] text-[#EB5939] hover:bg-[#EB5939] hover:text-[#0D0D0D] hover:border-[#EB5939] transition-all duration-500 ease-in-out`}
        aria-label="Start"
        onClick={handleStartClick}
      >
        S T A R T
      </button>
    </div>
  );
}

export default Loader;
