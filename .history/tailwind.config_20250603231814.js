/** @type {import('tailwindcss').Config} */
export default {
  optimizeDeps: {
    include: ['gsap']
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
