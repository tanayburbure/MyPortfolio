/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  // ... other config
  theme: {
    extend: {
      animation: {
        reveal: 'reveal 0.5s forwards',
      },
      keyframes: {
        reveal: {
          '100%': { transform: 'translateY(0)' },
        }
      }
    }
  }
}