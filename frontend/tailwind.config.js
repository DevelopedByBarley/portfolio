/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
    },
    extend: {
      colors: {
        mainOrange: '#FEA400',
        mainDark: '#1A1A1A',
        mainLightDark: '#272727',
        darkGreen: '#47761E',
        lightYellow: '#FED985',
        lightPing: '#D5A0C4',
        darkBlue: '#61B5CB',
        lightGreen: '#93B592',
        lightOrange: '#F09E71',
      },
      fontFamily: {
        pricedown: ['"Pricedown"', "sans-serif"],
      },
      fontSize: {
        '10xl': '11rem'
      },
    },
  },
  plugins: [],
}
