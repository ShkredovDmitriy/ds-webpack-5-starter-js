const paths = require('./_paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = function() {
  return {
    plugins: 
      [new MiniCssExtractPlugin({
        filename: './css/main.min.css?[fullhash]',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: { sourceMap: false, }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: false }
            },
          ],
        },
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: paths.project,
              },
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer()
                  ],
                },
                sourceMap: false
              }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: false, },
            },
          ],
        },
      ],
    },
  }
}
