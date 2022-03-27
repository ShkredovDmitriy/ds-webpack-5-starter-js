const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const fs = require('fs');

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
  images: path.resolve(__dirname, 'src/assets/images'),
  docs: path.resolve(__dirname, 'src/assets/documents'),
  libs: path.resolve(__dirname, 'src/app/libs'),
};

function generateHtmlPlugins() {
  const templateFiles = fs.readdirSync(paths.src + '/pages/');
  return templateFiles.map((item) => {
    const parts = item.split('.');
    const name = parts[0];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: paths.src + `/pages/${name}/${name}.pug`,
    });
  });
}

const htmlPlugins = generateHtmlPlugins();

module.exports = (env) => {
  return {
    mode: 'development',
    target: 'web',
    devtool: 'eval',
    entry: './src/app/main.ts',
    output: {
      path: paths.dist,
      filename: 'js/main.min.js?[fullhash]',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    devServer: {
      open: true,
      clientLogLevel: 'error',
      overlay: true,
      contentBase: paths.dist,
      compress: false,
      port: 8080,
      host: '0.0.0.0',
      // historyApiFallback: true,
      hot: false,
      watchContentBase: true,
    },
    plugins: [
      new Dotenv(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.images,
            to: 'images',
          },
          {
            from: paths.docs,
            to: 'documents',
          },
          {
            from: paths.libs,
            to: 'js',
          },
        ],
      }),
    ].concat(htmlPlugins),
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
        },
        {
          test: /\.ts$/,
          exclude: [/node_modules/, /config/, /dist/],
          use: 'ts-loader',
        },
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
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer()],
                },
              },
            },
            {
              loader: 'resolve-url-loader',
              options: {
                root: paths.src + '/assets/',
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(jpg|png|webp|svg)$/,
          loader: 'file-loader',
          options: {
            publicPath: './',
            name: 'images/[name].[ext]?[hash]',
          },
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'file-loader',
          options: {
            publicPath: './',
            name: 'fonts/[name].[ext]?[hash]',
          },
        },
      ],
    },
  };
};
