/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'#D4E4FA',
        primary:'#194FDA'
      },
    
    },
  },
  plugins: [],
}
