module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    themes: ["light", "dark", "cupcake"],
    extend: {},
  },
  plugins: [require("daisyui")]
}