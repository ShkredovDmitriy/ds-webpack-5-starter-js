const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = function () {
  return {
    module: {
      rules: [
        // Typescript loader
        {
          test: /\.ts$/,
          exclude: [/node_modules/, /config/, /dist/],
          use: 'ts-loader',
        },
        // Babel
        {
          test: /\.js$/,
          exclude: [/node_modules/, /config/, /dist/],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    plugins: [new ESLintPlugin()],
    resolve: {
      extensions: ['.ts', '.js'],
    },
  };
};
