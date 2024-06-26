/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        jersey: "'Jersey 25 Charted', sans-serif",
        open:"'Open Sans', sans-serif",
        ashank:"'Ashcan BB', sans-serif",
      },
      colors:{
        mota:"rgb(196 196 196)"
      }
    },
  },
  plugins: [],
}