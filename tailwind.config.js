/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    extend: {
      colors:{
        myColor:"#f51b64",
      },
      spacing:{
        "9%":"90%",
        "10%":"100%",
        "80vh":"80vh"
      },
      fontSize:{
        xx:"1.1rem",
        "xx1":"0.9rem"
      }
    },
  },
  plugins: [],
}
