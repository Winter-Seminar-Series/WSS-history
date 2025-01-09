/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        mobile: 'url(\'../../public/source/mobile.png\')',
        desktop: 'url(\'../../public/source/Rectangle.png\')',
        navbar: 'url(\'../../public/source/Navbar.png\')',
      },
      fontFamily: {
        sans: 'Manrope',
      },
      colors: {
        primary: {
          DEFAULT: '#5E808A',
          100: '#5E808A',
          200: '#5E808A',
          300: '#5E808A',
          400: '#5E808A',
          500: '#5E808A',
          600: '#5E808A',
          700: '#5E808A',
          800: '#5E808A',
          900: '#5E808A',
        },
        secondary: {
          DEFAULT: '#052848',
          100: 'rgba(5,40,72,0.58)',
          200: '#052848',
          300: '#052848',
          400: '#052848',
          500: '#052848',
          600: '#052848',
          700: '#052848',
          800: '#052848',
          900: '#052848',
        },
        selago: {
          DEFAULT: '#638932',
          100: '#638932',
          200: '#638932',
          300: '#638932',
          400: '#638932',
          500: '#638932',
          600: '#638932',
          700: '#638932',
          800: '#638932',
          900: '#638932',
        },

        white: '#fff',
        darkslategray: {
          100: '#1f2b3d',
          200: 'rgba(10, 46, 79, 0.8)',
        },
        black: '#000',
        gray: {
          100: '#fafafa',
          200: 'rgba(255, 255, 255, 0.4)',
          300: 'rgba(255, 255, 255, 0.8)',
          400: 'rgba(255, 255, 255, 0.6)',
          500: 'rgba(255, 255, 255, 0.3)',
        },
        darkslateblue: '#0b3678',
        lightslategray: '#8a8998',
        whitesmoke: '#e8eaee',
        gainsboro: '#e2e7ef',
        dodgerblue: 'rgba(15, 122, 219, 0.8)',
        red: '#E04545',
      },
      listStyleType: {
        disc: 'disc',
        decimal: 'decimal',
        circle: 'circle',
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
