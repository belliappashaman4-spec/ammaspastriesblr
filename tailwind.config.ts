import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FDF8EE',
          200: '#F9EFE0',
          300: '#F1E2CA',
        },
        choco: {
          950: '#1D110C',
          900: '#2C1810',
          800: '#3D2318',
          700: '#543224',
          600: '#724837',
          500: '#946552',
        },
        blush: {
          50: '#FDF4F5',
          100: '#FCE8EB',
          200: '#F9D2D9',
          300: '#F3B1BE',
          400: '#E8859A',
          500: '#D95D78',
          600: '#C13D5B',
        },
        gold: {
          50: '#FBF7EE',
          100: '#F5EBD4',
          200: '#EAD3A3',
          300: '#DFB96E',
          400: '#D49E3D',
          500: '#C87D20',
          600: '#A96116',
        },
        saffron: {
          400: '#F28B30',
          500: '#E8731A',
          600: '#CC5E0E',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(44, 24, 16, 0.06)',
        'card': '0 10px 30px -6px rgba(44, 24, 16, 0.08)',
        'elevated': '0 20px 40px -12px rgba(44, 24, 16, 0.14)',
      },
    },
  },
  plugins: [],
};

export default config;
