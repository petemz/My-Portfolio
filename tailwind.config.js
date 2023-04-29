/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1350px'},

      'xl': {'max': '1200px'},

      'lg': {'max': '1000px'},

      'md': {'max': '810px'},

      'sm': {'max': '730px'},

      'xs': {'max': '600px'},

      'xxs': {'max': '500px'},
    }
  },
  plugins: [],
}