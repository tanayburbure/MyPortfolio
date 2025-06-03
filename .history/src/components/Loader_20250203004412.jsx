import React from 'react';

function Loader() {
  return (
    <div style={styles.container}>
      {/* Inline styles for the animations */}
      <style>
        {`
          @keyframes drawCircle {
            0% {
              stroke-dashoffset: 188.5; /* Start with the circle fully "drawn out" (invisible) */
              opacity: 1; /* Ensure it starts visible */
            }
            50% {
              stroke-dashoffset: 0; /* Circle is fully drawn */
              opacity: 1; /* Stay visible while drawing */
            }
            100% {
              stroke-dashoffset: 0; /* Fully visible */
              opacity: 0; /* Fade out the circle at the end */
            }
          }

          .circle {
            animation: drawCircle 1.5s linear forwards;
            transform: rotate(-90deg); /* Start drawing from the top */
            transform-origin: center;
          }
        `}
      </style>

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
          strokeWidth="1.7"
          strokeDasharray="188.5" /* Circumference of the circle */
          strokeDashoffset="188.5" /* Start with the circle fully "drawn out" */
        />
      </svg>
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
  },
  svg: {
    width: '14vw',
    height: '14vw',
  },
  circle: {
    transformOrigin: 'center',
  },
};

export default Loader;
