/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rdr2-bg': "url('/rdr2_wallpaper.jpg')",
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        spectral: ['"Spectral SC"', 'serif'],
      },
    },
  },
  plugins: [],
}
