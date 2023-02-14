
module.exports = {
  content: ['./index.html', "./src/**/*"],
  theme: {
    extend: {
      colors: {
        'amarillo': '#CAFF2C',
        'violeta': '#3500D3',
        'azul': '#240090',
        'gris-oscuro':'#1A191D',
        'rosa':'#DF058D',
        'naranja':'#FF6B2B',
        'celeste': '#33A9DC',
        'amarillopatito': '#FFCA28'
      },
      fontFamily: {
        poppins: ['Poppins'],
        roboto: ['Roboto Mono'],
      },
      backgroundImage:{
        'hero-pattern': "url(./assets/topography.svg)",
        'hero-gradient': 'linear-gradient(180deg, rgba(26, 25, 29, 0) 61.44%, #1A191D 100%);',
        'skills-gradient': 'radial-gradient( circle 976px at 51.2% 51%,  rgba(11,27,103,1) 0%, rgba(16,66,157,1) 0%, rgba(11,27,103,1) 17.3%, rgba(11,27,103,1) 58.8%, rgba(11,27,103,1) 71.4%, rgba(16,66,157,1) 100.2%, rgba(187,187,187,1) 100.2% );'
      }
    },
  },
  plugins: [],
};

