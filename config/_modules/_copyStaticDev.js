const paths = require('./_paths');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|jpeg|png|svg)$/, type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2)$/, type: 'asset/inline'
        },
      ],
    },
  }
}
