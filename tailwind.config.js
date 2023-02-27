/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s infinite',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
