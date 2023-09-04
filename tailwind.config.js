/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'header-dark': '#050F11',
        'primary-dark': '#02131B',
        'primary-light': '#39989B',
        'primary-red':'#D02D2D',
        'primary-red-dark': '#541212',
        'accent-yellow': '#F0DE36',
        'accent-lightgrey': '#B4B3AB',
        'accent-darkgrey': '#3E4646',
        'accent-grey': '#69828C',
        'accent-lightpurple': '#9BABB8',
        'accent-darkerpurple': '#556877'
      },
      fontSize: {
        '2.5xl': '1.75rem'
      },
      backgroundImage: {
        'bgHero': "url('./assets/images/bg-hero.png')"
      },
      screens: {
        'xsm': '450px'
      }
    },
    variants: {
      fill: ['hover']
    }
  },
  plugins: [],
})

