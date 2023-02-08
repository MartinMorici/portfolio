
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'amarillo': '#CAFF2C',
        'violeta': '#3500D3',
        'azul': '#240090',
        'gris-oscuro':'#282828'
      },
    },
    fontFamily: {
      poppins: ['Poppins'],
      roboto: ['Roboto Mono'],
    },
    backgroundImage:{
      'hero-pattern': `url(./src/assets/topography.svg)`,
      'hero-gradient': 'linear-gradient(180deg, rgba(40, 40, 40, 0) 35.89%, #282828 100%);'
    }
  },
  plugins: [],
};

