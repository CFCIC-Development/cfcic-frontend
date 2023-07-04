/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
  "./sections/**/*.{js,jsx,ts,tsx}",
  "./layout/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#03045E",
        orange: "#FB8500",
        darkOrange: "#DA8627",
        blue: "#0077B6",
        lightBlue: "#00B4D8",
        lighterBlue: "#48CAE4",
        lighestBlue: "#CAF0F8",
        grey: "#565757",
        dark: "#01080D",
        red: "#ED2121"
      },
      fontFamily: {
        lato: ['"Lato Regular"', "sans-serif"],
        lato500: ['"Lato Medium"', "sans-serif"],
        lato600: ['"Lato Semibold"', "sans-serif"],
        workSans: ['"Work Sans"', "sans-serif"],
      },
      borderRadius: {
        button: "0.125rem 1.25rem",
        dashboard: "0.125rem 0.75rem"
      },
      boxShadow: {
        alert: "1px 4px 4px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}

