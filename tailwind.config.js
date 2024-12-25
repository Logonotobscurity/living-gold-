/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFFDF5',
          100: '#FDF6D8',
          200: '#FCE9A1',
          300: '#FBDC69',
          400: '#FAD032',
          500: '#D4AF37',  // Classic Gold
          600: '#B8860B',  // Dark Goldenrod
          700: '#996515',  // Golden Brown
          800: '#7B4F1B',  // Dark Golden
          900: '#5C3A11'   // Deep Golden Brown
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-fast': 'gradient-x 8s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'shimmer-fast': 'shimmer 1.5s linear infinite',
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'shimmer': {
          '0%': {
            'background-position': '0% 0%'
          },
          '100%': {
            'background-position': '-200% 0%'
          },
        },
      },
    },
  },
  plugins: [],
};