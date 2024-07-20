/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],  
  theme: {
    extend: {
      colors:{
        primaryBlack:"#1a1a1a",
        primary:"#95FF31",
        lightprimary:"#F5FFEB",
        secondary:"#EFAC07"
      }
    },
  },
  plugins: [],
}

