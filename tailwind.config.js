/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0edff',
          100: '#e0daff',
          200: '#c4b8ff',
          300: '#a594ff',
          400: '#8b73ff',
          500: '#6C5CE7',
          600: '#5a48d1',
          700: '#4836b0',
          800: '#382b8a',
          900: '#2a2068',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
