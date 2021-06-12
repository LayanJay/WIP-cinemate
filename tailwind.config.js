module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        first: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        primary: '#1ce783',
        second: '#040405',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
