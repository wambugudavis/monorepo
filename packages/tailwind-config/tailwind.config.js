// const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    "./src/**/*.{js,ts,jsx,tsx}",
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '320px',
        md: '672px',
        lg: '1056px',
        xl: '1312px',
        '2xl': '1584px',
      },
      padding: '16px'
    },
    extend: {
      colors: {
        'primary': '#123437',
        'secondary': '#FF6E66',
        'accent-1': '#EDEDED',
        'accent-2': '#9f9f9f',
        'accent-3': '#4ABFAB',
        'accent-4': '#48CDDA',
        'accent-5': '#FADE78'
      },
    },
  },
  plugins: [],
};
