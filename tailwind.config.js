/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-1200': { 'max': '1200px' },
        'max-900': { 'max': '900px' },
        'max-700': { 'max': '700px' },
        'max-470': { 'max': '470px' },
        'lgPlus': '1030px',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
