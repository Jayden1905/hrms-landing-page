/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,html}', '*.js'],
  theme: {
    extend: {
      colors: {
        'custom-black': '#191b1d',
      },
      fontFamily: {
        ibm: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
