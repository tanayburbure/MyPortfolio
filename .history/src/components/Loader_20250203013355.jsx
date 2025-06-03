import React, { useState, useEffect } from 'react';

function Loader() {
  const [percentage, setPercentage] = useState(0);
  const [hideTimer, setHideTimer] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const duration = 6 * 100; // Total loading time in ms
    const increment = 100 / (duration / 6);
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + increment;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setHideTimer(true);
            setTimeout(() => setShowButton(true), 300); // Delay unhide button by 0.3 seconds
          }, 200); // Delay hiding by 0.3 seconds
          return 100;
        }
      });
    }, 6); // Updates every 6ms to make the percentage progress smoothly

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes drawCircle {
            0% { stroke-dashoffset: 188.5; }
            100% { stroke-dashoffset: 0; }
          }

          @keyframes disappearCircle {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -188.5; }
          }

          .circle {
            animation: drawCircle 0.5s linear forwards, disappearCircle 0.3s linear 0.5s forwards;
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

          @media (max-width: 600px) {
            .circle {
              width: 12vw;
              height: 12vw;
            }

            .timer {
              font-size: 4vh;
            }

            .btn {
              padding: 8px 16px;
              font-size: 3vh;
            }
          }
        `}
      </style>

      {/* Percentage Display */}
      {!hideTimer && (
        <div className="timer absolute top-[36vh] text-[2vh] text-white pr-[4px]" role="status" aria-live="polite">
          {Math.round(percentage)}%
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
          strokeDashoffset={188.5 - (188.5 * (percentage / 100))} /* Dynamically adjusting dash offset */
        />
      </svg>

      {/* Logo and Button */}
      <img
        className={`h-16 absolute ${hideTimer ? 'moveUp' : ''}`}
        src={`${import.meta.env.BASE_URL}images/logo.gif`}
        alt="Animated Logo"
      />
      <button 
        className={`btn border-[1px] ${showButton ? 'block fadeIn' : 'hidden'} hover:bg-[#AA9E8B] hover:text-[#0D0D0D] text-[2vh] absolute top-[55.5vh] px-12 py-[8px] pb-2 rounded-full border-[#b7ab98] text-[#b7ab98] transition-all duration-300 ease-in-out`}
        aria-label="Start Button"
      >
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
    backgroundColor: '#101010',
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
    width: '100px',
    height: '100px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default Loader;
