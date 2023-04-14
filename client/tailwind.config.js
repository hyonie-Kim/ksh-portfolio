/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#95A8EB",
        dark: "#1b1b1b",
        light: "#f5f5f5",
      },
    },
    // screens: {
    //   "2xl": { max: "1535px" },
    //   // => @media(max-width:1535px)
    //   xl: { max: "1279px" },
    //   lg: { max: "1023px" },
    //   md: { max: "767px" },
    //   sm: { max: "639px" },
    //   xs: { max: "479px" },
    // },
  },
  plugins: [require("@tailwindcss/typography")],
};
