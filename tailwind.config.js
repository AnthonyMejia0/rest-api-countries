/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#2b3945",
        "very-dark-Blue": "#202c37",
        // "very-dark-Blue": "#111517",
        "dark-gray": "#858585",
        "very-light-Gray": "#fafafa",
      },
      screens: {
        "3xl": "2500px",
      },
    },
  },
  plugins: [],
};
