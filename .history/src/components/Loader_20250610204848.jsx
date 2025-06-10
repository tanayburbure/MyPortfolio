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
    document.body.style.overflow = 'hidden'; // Ensure no scrolling during load

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
    console.log("Loader finished, hiding...");
    setHideLoader(true);

    setTimeout(() => {
      setLoading(false); // Notify App that loader is done
      document.body.style.overflow = 'auto'; // Restore scrolling
      console.log("App is now visible");
    }, 500);
  };

  return (
    <div className={`h-screen flex items-center justify-center fixed top-0 left-0 w-full bg-[#0D0D0D] ${hideLoader ? 'hidden' : ''}`}>
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
        <div className="absolute top-[36vh] text-[1.8vh] text-white pr-[4px]">
          {percentage}%
        </div>
      )}

      {/* SVG Circle */}
      <svg className="w-[16vw] h-[16vw]" viewBox="0 0 64 64">
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

      {/* Logo and Button */}
      <img
        className={`h-16 absolute ${hideTimer ? 'moveUp' : ''}`}
        src={`${import.meta.env.BASE_URL}images/logo.gif`}
        alt="Animated Logo"
        onError={(e) => { e.target.src = 'fallback-image.png'; }}
      />

      <button
        className={`border-[1px] ${
          showButton ? 'block fadeIn' : 'hidden'
        } hover:bg-[#EB5939] hover:text-[#0D0D0D] text-[2vh] absolute top-[55.5vh] px-12 py-[8px] pb-2 rounded-full border-[#EB5939] hover:border-[#EB5939] text-[#EB5939] transition-all duration-500 ease-in-out`}
        aria-label="Start"
        onClick={handleStartClick}
      >
        S T A R T
      </button>
    </div>
  );
}

export default Loader;
