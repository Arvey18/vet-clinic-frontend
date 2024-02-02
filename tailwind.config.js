/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#EEEFF1',
        'custom-dark-gray': '#858585',
        'custom-darker-gray': '#DCDFE4',
        'custom-darkest-gray': '#3E3E3E',
        'custom-light-green': '#C7DD35',
        'custom-light-green-darker': '#BFD530',
        'custom-black': '#2A2A2A',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  plugins: [],
};
