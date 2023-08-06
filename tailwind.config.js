/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'stdblue': '#005CA9',
        'silver': '#BDC3C7',
        'moonstone': '#2571CF',
      }
    },
  },
  plugins: [],
}

