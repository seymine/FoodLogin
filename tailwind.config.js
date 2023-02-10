/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        nunito:"Nunito Sans"
      },
      colors:{
        primary:"#263238",
        scd: "#455a64",
        secondary:"rgba(219,223,225,0.3)",
        tertiary:"rgba(219,223,225,0.5)",
        back:"#f5f5f5"
      }, 
      width:{
        illustration: "24rem"
      }
    },
    
  },
  plugins: [],
}
