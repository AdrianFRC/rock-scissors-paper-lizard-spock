/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        scissors: "rgb(var(--scissors) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        rock: "rgb(var(--rock) / <alpha-value>)",
        lizard: "rgb(var(--lizard) / <alpha-value>)",
        cyan: "rgb(var(--cyan) / <alpha-value>)",
        darkText: "rgb(var(--dark-text) / <alpha-value>)",
        scoreText: "rgb(var(--score-text) / <alpha-value>)",
        headerOutline: "rgb(var(--header-outline) / <alpha-value>)",
        radial: "rgb(var(--radial) / <alpha-value>)",
        radialsoft: "rgb(var(--radial-soft) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
