/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "BK": "url(./node-modules/BK.jpg)"
      }),
      
    },
  },
  plugins: [],
}

