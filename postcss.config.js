/**
 * @file postcss.config.js
 *
 * @plugin autoprefixer
 * @link https://www.npmjs.com/package/autoprefixer
 *
 * @plugin postcss-pxtorem
 * @link https://www.npmjs.com/package/postcss-pxtorem
 * PostCSS PXtoREM is a plugin for PostCSS that generates rem units from pixel units.
 *
 */

module.exports = {
  map: {
    annotation: true,
    inline: false
  },
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 16,
      propList: ['*', '!border*', '!box-shadow', '!outline*'],
      mediaQuery: true,
      selectorBlackList: [/^html$/, /^body$/]
    }),
    require('autoprefixer')()
  ]
}
