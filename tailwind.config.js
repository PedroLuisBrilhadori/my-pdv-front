/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "p-blue": "#4D9DE0",
        "p-red": "#E15554",
        "p-yellow": "#E1BC29",
        "p-green": "#3BB273",
        "p-purple": "#7768AE",
      },
      spacing: {
        icon: "30px",
      },
    },
  },
  plugins: [],
};
