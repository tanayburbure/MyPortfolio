import React, { useState, useEffect } from 'react';

function Loader() {
  const [percentage, setPercentage] = useState(0);
  const [hideTimer, setHideTimer] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setHideTimer(true);
            setTimeout(() => setShowButton(true), 300); // Delay unhide button by 0.3 seconds
          }, 200); // Delay hiding by 0.3 seconds
          return 100;
        }
      });
    }, 6); // Updates every 15ms to make the percentage progress smoothly

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {/* Inline styles for the animations */}
      <style>
        {`
          @keyframes drawCircle {
            0% {
              stroke-dashoffset: 188.5; /* Start with the circle fully "drawn out" (invisible) */
            }
            100% {
              stroke-dashoffset: 0; /* Fully visible at the end (clockwise drawing) */
            }
          }

          @keyframes disappearCircle {
            0% {
              stroke-dashoffset: 0; /* Start with the circle fully visible */
            }
            100% {
              stroke-dashoffset: -188.5; /* Fully "drawn out" at the end (counterclockwise disappearing) */
            }
          }

          .circle {
            animation: drawCircle 0.5s linear forwards, disappearCircle 0.3s linear 0.5s forwards;
            transform: rotate(-90deg); /* Start drawing from the top */
            transform-origin: center;
          }

          .moveUp {
            animation: moveUp 0.5s ease-in-out forwards;
          }

          @keyframes moveUp {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-30px);
            }
          }

          .fadeIn {
            animation: fadeIn 0.5s ease-in-out forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Percentage Display */}
      {!hideTimer && (
        <div className='timer absolute top-[36vh] text-[1.8vh] text-white pr-[4px]' style={styles.percentage}>
          {percentage}%
        </div>
      )}

      {/* SVG Circle */}
      <svg style={styles.svg} viewBox="0 0 64 64">
        <circle
          className="circle"
          style={styles.circle}
          cx="32"
          cy="32"
          r="30"
          fill="none"
          stroke="#b7ab98"
          strokeWidth="0.4"
          strokeDasharray="188.5" /* Circumference of the circle */
          strokeDashoffset="188.5" /* Start with the circle fully "drawn out" */
        />
      </svg>

      {/* Logo and Button */}
      <img
        className={`h-16 absolute ${hideTimer ? 'moveUp' : ''}`}
        src={`${import.meta.env.BASE_URL}images/logo.gif`}
        alt="Animated Logo"
      />
      <button className={`border-[1px] ${showButton ? 'block fadeIn' : 'hidden'} text-[2vh] absolute top-[57vh] px-12 py-[2.5px] pb-1 rounded-full border-[#b7ab98] text-[#b7ab98]`}>
        S T A R T
      </button>
    </div>
  );
}

// Inline styles for the component
const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  svg: {
    width: '16vw',
    height: '16vw',
  },
  circle: {
    transformOrigin: 'center',
  },
  imgAndButtonContainer: {
    position: 'absolute',
    top: '20%', // Adjust the top as needed
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  },
  img: {
    width: '100px', // Adjust the image size as needed
    height: '100px',
  },
  button: {
    marginTop: '10px', // Adjust button positioning
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default Loader;
