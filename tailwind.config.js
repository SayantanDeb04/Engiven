/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Helvetica", "Sans-serif"],
        lato: ["Lato", "Arial", "Helvetica"],
        eudoxus: ["Eudoxus Sans", "Helvetica", "Arial"],
      },
      colors: {
        blue: "#387aff",
        "blue-2": "#3c94f8",
        gray: "#848c90",
        dark: "#25353d",
        bluegray: "#7B92B2",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
