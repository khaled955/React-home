/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",

        md: "700px",

        lg: "991px",

        xl: "1200px",

        "2xl": "1450px",
      },
    },
    extend: {
      colors: {
        nav: "#2c3E50",
        home: "#1ABC9c",
        overLay: "#1abc9ce6",
      },
    },
  },
  plugins: [],
};
