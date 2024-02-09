/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        'white': "#ffffff",
        "white-smoke": "#f8f8f8",
        "grey": "#808080",
        'red': "#bd0000",
        "cyan": "#00b1c4",
        "light-blue": "#0083c4",
        "dark-blue": "#007c8a",
        "orange": "#f09000",
        "purple": "#a303a3"
      },
      screens: {
        "wide": "1440px"
      },
    },
  },
  plugins: [],
}

