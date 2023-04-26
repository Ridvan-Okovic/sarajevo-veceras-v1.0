/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        open: ['Open Sans'],
        montserrat: ['Montserrat'],
        arimo: ['Arimo'],
      },
      screens: {
        '2xl': '2560px',
      },
    },
  },
  plugins: [],
};
