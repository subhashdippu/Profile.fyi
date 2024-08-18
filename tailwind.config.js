/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#3333cc",
      },
    },
  },
  plugins: [require("daisyui")],
};
