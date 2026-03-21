/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          1: '#1BD0B8',
          2: '#12E0C5',
          3: '#09EFD2',
          4: '#00FFDF',
        },
        gray: {
          1: '#8C8C8C',
          2: '#AFAFB0',
          3: '#D2D3D4',
          4: '#F5F6F8',
        }
      },
      fontFamily: {
        headline: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
