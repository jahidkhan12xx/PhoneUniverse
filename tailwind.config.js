/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'primary': ['Share Tech','sans-serif'],
      'secondary': ['Share Tech Mono','monospace']
      
    }
  },
  plugins: [require("daisyui")],
}