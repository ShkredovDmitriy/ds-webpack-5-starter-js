module.exports = function() {
  return {
    module: {
      rules: [
        // Typescript loader
        {
          test: /\.ts$/,
          exclude: [/node_modules/, /config/],
          use: 'ts-loader',
        },
        // Babel
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          }
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
  }
}
