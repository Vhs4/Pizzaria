/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'extraL2': {'max': '1535px'},
      'extraL': {'max': '1279px'},
      'large': {'max': '1023px'},
      'medium': {'max': '767px'},
      'small': {'max': '639px'},    
    },
    extend: {
      
      colors: {
        'customRed':'#B30733',
        'customPink':'#FF0043',
        'customOrange':'#EF4C00',
        'customBG': '#F5F5F5',
        'customLOrange': '#FD651F'
      },
    },
  },
  layers: {
    utilities: [],
    components: [],
    base: [],
  },
  plugins: [],
}
