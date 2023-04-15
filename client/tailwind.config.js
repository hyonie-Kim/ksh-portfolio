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
      animation: {
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84,0.44,1)",
      },
      keyframes: {
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
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
