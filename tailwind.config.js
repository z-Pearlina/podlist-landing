/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'deep-burgundy': '#820021',
        'rose-brown': '#9A1543',
        'soft-pink': '#FD65CA',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },

      
      keyframes: {
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px #FD65CA40' 
          },
          '50%': { 
            boxShadow: '0 0 35px #FD65CA90' 
          },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}