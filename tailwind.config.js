/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#8FAA91",
        darkGreen: "#2F3A27",
        limeGreen: "#CFF04A",
        dark: "#232323",
        light: "#EFEFEF",
        highlight: "#16678B",
      },
    },
    letterSpacing: {
      tightest: "-0.1em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
  },
  plugins: [],
  variants: {
    translate: ["active"],
  },
  safelist: ["text-light", "text-limeGreen", "hover:bg-darkHover"],
};
