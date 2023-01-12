/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./public/index.html"],
  theme: {
    extend: {
      fontFamily:{
        inter: ["Inter","sans-serif"],
      },
      colors: {
        darkBlue: "#00001A",
        gunMetal: "#5E607A",
        silver: "#C5C6CE",
        lightVermillion: "#F15D51",
        yellow: "#E9AA52",
      },
      backgroundColor:{
        darkBlue: "#00001A",
        gunMetal: "#5E607A",
        silver: "#C5C6CE",
        lightVermillion: "#F15D51",
        yellow: "#E9AA52",
      }

    },
  },
  plugins: [],
}
