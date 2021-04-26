const paths = require('./_paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: paths.src + '/pages/index.pug',
        inject: true,
      }),
    ],
    module: {
      rules: [
       {
          test: /\.pug$/,
          loader: 'pug-loader',
        },
      ],
    },
  }
}
