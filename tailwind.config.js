const colors = require('windicss/colors')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        lime: colors.lime,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('windicss/plugin/forms')],
}
