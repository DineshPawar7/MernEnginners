



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#b9fd50',
        bg1: 'white',
        bg2: 'black',
        cardbg: '#f5f5f597',
        border: '#cbcbcb',


        textWhite: '#d1d5db',
        whiteText: '#fffff',
        textGray: '#4B5563',
        grayHeading: '#1F2937'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        work: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        display: '5rem',               // Large hero headings
        sectionTitle: '2.25rem',       // Section titles like “Our Working Process”
        subTitle: '1.2rem',           // Subheadings such as service titles
        baseText: '1rem',              // General paragraph text
        secondaryText: '0.875rem',     // Descriptive or supporting text
        buttonText: '0.9375rem',       // Button or CTA text
        tagText: '0.75rem',            // Tags and badge labels
      },

      screens: {
        'max-1200': { 'max': '1200px' },
        'max-900': { 'max': '900px' },
        'max-700': { 'max': '700px' },
        'max-470': { 'max': '470px' },
        'lgPlus': '1030px',
      },
      
    },
  },
  plugins: [],
}
