/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}' 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A29875', 
        secondary: '#000000',
        accent: '#FFFFFF',
        background: '#FFFFFF',                     
        icontextcolor: '#6C757D',
      },
      fontFamily: {
        bodoni: ['"Libre Bodoni"', 'serif'], // Libre Bodoni font
        nunito: ['"Nunito Sans"', 'sans-serif'], // Nunito Sans font
      },
    },
  },
  plugins: [],
};
