/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'accent-darkgrey': '#3E4646',
        'accent-grey': '#69828C',
        'accent-lightpurple': '#9BABB8',
        'accent-darkerpurple': '#556877'
      },
      backgroundImage: {
        'bgHero': "url('./assets/images/bg-hero.png')"
      }
    },
    variants: {
      fill: ['hover']
    }
  },
  plugins: [],
}

