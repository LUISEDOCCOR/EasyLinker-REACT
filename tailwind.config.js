/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cOrange: "#FA933B",
      },
      boxShadow: {
        nbru: "8px 8px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
