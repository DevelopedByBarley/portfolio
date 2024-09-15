/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
        pricedown: ['"Pricedown"', "Pricedown"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}