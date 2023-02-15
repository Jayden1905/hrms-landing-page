/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,html}', '*.js'],
  theme: {
    extend: {
      colors: {
        'logo-red': '#e01f21',
        'logo-blue': '#1b236c',
        'logo-light-blue': '#298cff',
        'custom-black': '#191b1d',
        black: '#151515',
      },
    },
  },
  plugins: [],
}
