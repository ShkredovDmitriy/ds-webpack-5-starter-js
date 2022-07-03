const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
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
    mode: 'production',
    entry: './src/app/main.js',
    output: {
      path: paths.dist,
      filename: 'js/main.min.js?[fullhash]',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    plugins: [
      new Dotenv(),
      new CleanWebpackPlugin(),
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
      new MiniCssExtractPlugin({
        filename: './css/main.min.css?[fullhash]',
      }),
      new FaviconsWebpackPlugin({
        logo: './src/assets/favicon/favicon.png',
        cache: true,
        publicPath: '',
        outputPath: '',
        prefix: 'favicon/',
        inject: true,
        favicons: {
          icons: {
            android: ['android-chrome-96x96.png'],
            appleIcon: ['apple-touch-icon-120x120.png', 'apple-touch-icon.png'],
            appleStartup: false,
            coast: ['coast-228x228.png'],
            favicons: [
              'favicon-16x16.png',
              'favicon-32x32.png',
              'favicon-48x48.png',
              'favicon.ico',
            ],
            firefox: ['firefox_app_128x128.png'],
            windows: ['mstile-144x144.png'],
            yandex: ['yandex-browser-50x50.png'],
          },
        },
      }),
      new BeautifyHtmlWebpackPlugin(),
      // new BundleAnalyzerPlugin(),
    ].concat(htmlPlugins),
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true,
          },
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
              loader: MiniCssExtractPlugin.loader,
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
            publicPath: '../',
            name: 'images/[name].[ext]?[hash]',
          },
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'file-loader',
          options: {
            publicPath: '../',
            name: 'fonts/[name].[ext]?[hash]',
          },
        },
      ],
    },
  };
};
