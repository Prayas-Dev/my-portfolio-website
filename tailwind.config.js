/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#05030A',
        surface: '#1A1122',
        primary: '#7C3AED',
        accent: '#00C6D8',
        energetic: '#FF5DA2',
        'text-main': '#C9D1D9',
        'text-secondary': '#8892b0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'mona-sans': ['Mona Sans', 'sans-serif'],
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        blob: 'blob 7s infinite',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
