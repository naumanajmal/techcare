/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],



  theme: {
    extend: {
      colors: {
        customBlue: '#6E55FF',   // Custom Blue Color
        customYellow: '#FFA920',   // Custom Green Color
        customGray: '#3A3A3C',    // Custom Gray Color
        lightGreen: '#01F0D0',
        lightGreenBg:'#D8FCF7',
        darkGray: '#072635',
        lightPink: '#F4F0FE',
        lightGray: '#F6F7F8',
        lightGrayText: '#707070'
        
      },
    },
  },
  plugins: [],
}

