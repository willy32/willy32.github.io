/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Raleway", "sans-serif"]
      },
      colors:{
        black: "#202020",
        primary: "#0066ff",
        "primary-light": "#1177ff",
        "on-primary": "#fff"
      }
    },
  },
  plugins: [],
}
