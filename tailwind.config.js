const { theme } = require('tailwindcss/defaultConfig')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        main: theme.colors.teal['500'], // #38b2ac
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
