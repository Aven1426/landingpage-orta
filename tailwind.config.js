/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF2052"
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        lato: "Lato, sans-serif",
        playfair: "Playfair Display, serif",
        staatliches: "Staatliches, cursive"
      },
      boxShadow: {
        shadowMain: "0px 15px 20px 0 rgba(0, 0, 0, 0.2)",
        shadowNews: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)"
      }

    },
  },
  plugins: [],
}
