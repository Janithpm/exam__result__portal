/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      blueGray:'#1a2035',
      blueGrayLight: '#1f283e',
      blueGrayExtraLight: '#2d3854',

    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
