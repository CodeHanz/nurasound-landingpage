/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      colors: {
        primary: "#FFD600",
        secondary: "#11151A",
        card: "#E5E5E5",
      },
      screens: {
        xl: "1320px",
      },
    },
  },
  plugins: [],
};

