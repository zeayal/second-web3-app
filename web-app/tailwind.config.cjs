/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(120%)',
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        }
      },
      animation: {
        'slide-in': 'slide-in .5s ease-in-out'
      }
    },
  },
  plugins: [],
}
