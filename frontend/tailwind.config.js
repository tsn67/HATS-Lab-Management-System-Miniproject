/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#000000',
        textGray: 'text-gray-300',
        textRed: '#F6664C',
        backgroundRed: '#322525',
        textGreen: '#45BF72',
        textBlue: '#4D69F0',
        backgroundBlue: '#2A3A47',
        buttonGray: '#403E3E',
        secondaryGray: '#333333',
        darkGray: '#262626',
      },
      
    },
    fontFamily: {
      'inter': ["Inter"]
    }
  },
  plugins: [],
}

