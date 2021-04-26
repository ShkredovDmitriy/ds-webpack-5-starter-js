const paths = require('./_paths');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function() {
  return {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.images,
            to: "images",
          },
          {
            from: paths.docs,
            to: "documents",
          },
          {
            from: paths.libs,
            to: "js",
          },
        ],
      }),
    ],
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
