/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        nature: {
          25: "#f8fcf8",
          50: "#f0f9f0",
          100: "#dcf2dc",
          200: "#bce5bc",
          300: "#8dd28d",
          400: "#5ab85a",
          500: "#389e38",
          600: "#2a7f2a",
          700: "#236523",
          800: "#1f511f",
          900: "#1b431b",
          950: "#0f2a0f",
        },
        trail: {
          25: "#fcfaf8",
          50: "#faf8f3",
          100: "#f4f0e6",
          200: "#e8dcc7",
          300: "#dbc4a0",
          400: "#cca876",
          500: "#c19558",
          600: "#b3834c",
          700: "#956840",
          800: "#795339",
          900: "#634430",
          950: "#3d2a1f",
        },
      },
      fontFamily: {
        hiking: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        dark: "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)",
        "dark-xl":
          "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
        "dark-2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
