
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins'],
      roboto: ['Roboto Mono'],
    },
    backgroundImage:{
      'hero-pattern': `url(./src/assets/topography.svg)`,
    }
  },
  plugins: [],
};

