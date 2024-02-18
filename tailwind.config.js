/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        paytoneOne:["Paytone one", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        alata: ["Alata", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"]
      },
      colors:{
        newYellow: "#FBBC05",
        newBlack: "#0D0C22",
        body: "#323232",
        finalDiv: "#EDE8E8",
        ourAppColor: "#374957"
      }
    },
  },
  plugins: [],
}