/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        open: ['Open Sans'],
        montserrat: ['Montserrat'],
        arimo: ['Arimo'],
        manrope: ['Manrope'],
      },
      screens: {
        '2xl': '1980px',
      },
    },
  },
  plugins: [],
};
