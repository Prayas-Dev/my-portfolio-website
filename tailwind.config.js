/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js, tsx, ts, jsx}",
    ],
    theme: {
        extend: {
            colors: {
                'premium-dark': {
                    background: '#030014',
                    card: 'rgba(10, 1, 28, 0.7)',
                    accent: '#8245ec',
                },
            },
            fontFamily: {
                inter: ['"Inter"', 'sans-serif'],
                display: ['"DM Sans"', 'sans-serif'],
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'scale(1)'},
                    '33%': { transform: 'scale(1.2)'},
                    '66%': { transform: 'scale(0.8)'},
                    '100%': { transform: 'scale(1)'},
                },
            },
            animation: {
                blob: 'blob 10s infinite',
            },
            backgroundImage: {
                'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 203, 0) 50%, rgba(0, 70, 209, 0.15) 100%)'
            },
        },
    },
    plugins: [],
};