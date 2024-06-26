/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       borderRadius: {
        '4': '4px',
      },

      textColor:{
        'w': "#ffffff"
      },

      fontFamily:{
        'figtree': "Figtree",
        'lato':"Lato"
      },
      fontWeight:{
        '800': 800
      },
      spacing:{
        '26': '26px'
      }

    },
    colors:{
      'chekpass':'#E1083C',
      'grey': '#D7D7D7'
    }
  },
  plugins: [],
}

