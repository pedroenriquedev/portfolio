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
        limeGreenHover: "#E1F68E",
        darkHover: "#454545",
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
  safelist: [
    "text-light",
    "text-limeGreen",
    "hover:bg-darkHover",
    "hover:border-darkHover",
    "hover:bg-limeGreenHover",
    "hover:border-limeGreenHover",
    "hover:bg-dark",
    "hover:bg-limeGreen",
    "hover:border-dark",
    "hover:border-limeGreen",
  ],
};
