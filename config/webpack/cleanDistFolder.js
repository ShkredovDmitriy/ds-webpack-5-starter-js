const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function() {
  return {
    plugins: [
      new CleanWebpackPlugin(),
    ],
  }
}