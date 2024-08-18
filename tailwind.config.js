/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#19207d",
        red: "#FF6868",
        secondary: "#555",
        prigmayBG: "#FCFCFC",
      },
    },
  },
  plugins: [require("daisyui")],
};
