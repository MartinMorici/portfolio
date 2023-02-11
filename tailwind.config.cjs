
module.exports = {
  content: ['./index.html', "./src/**/*"],
  theme: {
    extend: {
      colors: {
        'amarillo': '#CAFF2C',
        'violeta': '#3500D3',
        'azul': '#240090',
        'gris-oscuro':'#1A191D'
      },
      fontFamily: {
        poppins: ['Poppins'],
        roboto: ['Roboto Mono'],
      },
      backgroundImage:{
        'hero-pattern': "url(./assets/topography.svg)",
        'hero-gradient': 'linear-gradient(180deg, rgba(26, 25, 29, 0) 61.44%, #1A191D 100%);'
      }
    },
  },
  plugins: [],
};

