/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        beige: {
          50: '#fdfbf7',
          100: '#f7f3e8',
          200: '#efe6d0',
          300: '#e5d3b0',
        },
        brown: {
          500: '#8D6E63',
          700: '#5D4037',
          800: '#4E342E',
          900: '#3E2723',
        }
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

