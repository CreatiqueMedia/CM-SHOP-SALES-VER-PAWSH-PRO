/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true,
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['"Raleway"'],
      },
    },
  },
  plugins: [],
};
