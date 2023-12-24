/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/Background.jpg')",
      },
    },
  },
  plugins: [],
};

