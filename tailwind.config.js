// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); // Optional: import default themes for fallbacks

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', ...defaultTheme.fontFamily.sans],
        'poppins': ['"Poppins"', ...defaultTheme.fontFamily.sans],
        'inter': ['"Inter"', ...defaultTheme.fontFamily.sans],
        'space-grotesk': ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        'rubik': ['"Rubik"', ...defaultTheme.fontFamily.sans],
        'work-sans': ['"Work Sans"', ...defaultTheme.fontFamily.sans],
        'ubuntu': ['"Ubuntu"', ...defaultTheme.fontFamily.sans],
        'open-sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
