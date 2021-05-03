const paths = require('./_paths');

module.exports = function() {
  return {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [paths.src + '/app/main.ts'],
    output: {
      path: paths.dist,
      filename: 'js/main.min.js?[fullhash]',
    },
  }
}
