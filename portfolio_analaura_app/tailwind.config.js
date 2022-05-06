module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-pink': '#F27D73',
        'secondary-color': '#F2D5C5',
      },
      fontFamily: {
      'main' : 'Inter, Helvetica'
      },
    },
  },
  plugins: [],
}
