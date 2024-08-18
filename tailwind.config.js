module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#FCFCFC",
        customRed: "#FCFCFC",
      },
    },
  },
  plugins: [require("daisyui")],
};
