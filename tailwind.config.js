/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel"', "serif"],
        spectral: ['"Spectral SC"', "serif"],
      },
      colors: {
        rdr2: {
          bg: "#1c1a16",   // dark background
          text: "#e6d7b9", // parchment-like text
        },
      },
    },
  },
  plugins: [],
}
