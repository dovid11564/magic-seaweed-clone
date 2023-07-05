/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/{pages/{header,overview,forecast},**}/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        button1: '#2B65EC',
        button2: '#C2B280'
      },
      spacing: {
        custom: '1.8em',
      },
      borderWidth: {
        bHeight: '5px'
      }
    },
  },
  plugins: [],
}

