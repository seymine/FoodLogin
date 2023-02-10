/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        nunito:"Nunito Sans"
      },
      colors:{
        primary:{
          dark:"#263238",
          light:"#f5f5f5"
        },
        secondary:{
          dark:"#455A64",
          light:"#7B8A92"
        },
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
