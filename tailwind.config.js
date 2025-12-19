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
          100: '#f9f3d8',
          200: '#f5eed0',
          300: '#e5d3b0',
        },
        brown: {
          500: '#c4996c',
          600: '#b0885a',
          700: '#603814',
          800: '#4e2d10',
          900: '#3d230c',
        },
        primary: {
          DEFAULT: '#603814',
          light: '#c4996c',
          cream: '#f9f3d8',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Cairo', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
        english: ['Poppins', 'sans-serif'],
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

