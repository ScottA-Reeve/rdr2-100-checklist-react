/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "rdr2-bg": "url('/rdr2_wallpaper.jpg')", // 👈 point this to your wallpaper
      },
      colors: {
        rdr2: {
          red: "#A50000",
          gold: "#D4AF37",
          black: "#000000",
        },
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        spectral: ["Spectral SC", "serif"],
      },
    },
  },
  plugins: [],
}
