/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/**/*.js"],
  theme: {
    extend: {
      colors:{
        primary:"#DBDFE1",
        secondary:"rgba(219,223,225,0.3)",
        tertiary:"rgba(219,223,225,0.5)"
      }, 
      width:{
        illustration: "24rem"
      }
    },
    
  },
  plugins: [],
}
