const autoprefixer = require('autoprefixer');

module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer()
                  ],
                },
                sourceMap: true
              }
            },
            { 
              loader: 'sass-loader',
              options: { sourceMap: true }
            },
          ],
        }
      ]
    }
  }
}