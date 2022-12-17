/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#181818',
        'light-green': '#06A750',
        'txt-yellow': '#FFC222',
        'txt-gray' : '#B0B0B0',
      },
    },
  },
  plugins: [],
}