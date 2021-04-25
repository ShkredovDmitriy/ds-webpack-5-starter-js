const paths = require('./_paths');

module.exports = function() {
  return {
    devServer: {
      historyApiFallback: true,
      contentBase: paths.dist,
      open: true,
      compress: false,
      hot: true,
      port: 8080,
      host: '0.0.0.0',
    }
  }
}