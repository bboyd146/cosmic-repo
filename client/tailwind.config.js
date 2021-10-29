const colors = require('tailwindcss/colors');


module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  ],
  darkMode: 'media',
  
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'),
            require('@tailwindcss/forms'),
],


  theme: {
  extend: {
  colors: {
    'pink': '#d4115d',
    'cream': 'rgb(255, 252, 233)',
  }
},

  fontFamily: {
  logo: ['Goblin One'],
},

  
}

}