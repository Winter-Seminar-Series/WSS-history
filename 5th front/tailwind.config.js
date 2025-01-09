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
          DEFAULT: '#017F29',
          100: '#017F29',
          200: '#017F29',
          300: '#017F29',
          400: '#017F29',
          500: '#017F29',
          600: '#017F29',
          700: '#017F29',
          800: '#017F29',
          900: '#017F29',
        },
        secondary: {
          DEFAULT: '#05391E',
          100: '#004216',
          200: '#017F29',
          300: '#017F29',
          400: '#017F29',
          500: '#017F29',
          600: '#017F29',
          700: '#017F29',
          800: '#017F29',
          900: '#017F29',
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
