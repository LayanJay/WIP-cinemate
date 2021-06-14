module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        first: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#1ce783',
        second: '#040405',
      }
    },
  },
  variants: {
    animation: ['group-hover'],
    textColor: ['active', 'hover'],
    fontWeight: ['group-hover'],
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
