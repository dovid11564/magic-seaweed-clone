/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/{pages/{header,overview,forecast},**}/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FFFBEB'
      }
    },
  },
  plugins: [],
}

