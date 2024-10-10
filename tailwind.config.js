/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    keyframes: {
      "pulse-scale": {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.3)" },
      },

      imgScale: {
        // "0%" :{transform: "translateY(12px)"},
        "100%": { transform: "translateY(0px)" },
      },
    },
    animation: {
      "pulse-scale": "pulse-scale 2s ease-in-out infinite",
      "imgScale ": "hover:imgScale 2s ease-in",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "1xl": { max: "1400px" },
      // => @media (min-width: 1279px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg2: { max: "1200px" },
      // => @media (max-width: 1120px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md0: { max: "900px" },
      // => @media (max-width: 900px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm2: { max: "659px" },
      // => @media (max-width: 659px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      ssms: { max: "500px" },
      // => @media (max-width: 500px) { ... }

      ssm: { max: "460px" },
      // => @media (max-width: 460px) { ... }

      ssmm: { max: "400px" },
      // => @media (max-width: 460px) { ... }
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      cairo: ["Cairo", "sans-serif"],
      exo: ["Exo", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
