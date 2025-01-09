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
          DEFAULT: '#0E6790',
          100: '#0E6790',
          200: '#0E6790',
          300: '#0E6790',
          400: '#0E6790',
          500: '#0E6790',
          600: '#0E6790',
          700: '#0E6790',
          800: '#0E6790',
          900: '#0E6790',
        },
        secondary: {
          DEFAULT: '#0E6790',
          100: '#032c3f',
          200: '#0E6790',
          300: '#0E6790',
          400: '#0E6790',
          500: '#0E6790',
          600: '#0E6790',
          700: '#0E6790',
          800: '#0E6790',
          900: '#0E6790',
        },
        selago: {
          DEFAULT: '#0D9F6F',
          100: '#0D9F6F',
          200: '#0D9F6F',
          300: '#0D9F6F',
          400: '#0D9F6F',
          500: '#0D9F6F',
          600: '#0D9F6F',
          700: '#0D9F6F',
          800: '#0D9F6F',
          900: '#0D9F6F',
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
