const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PugPlugin = require('pug-plugin');
const autoprefixer = require('autoprefixer');

const Src = path.resolve(__dirname, 'src');
const Images = Src + '/assets/images/';
const Favicons = Src + '/assets/favicons/';
const Documents = Src + '/assets/documents/';
const Fonts = Src + '/fonts/';
const Blocks = Src + '/blocks';
const Components = Src + '/blocks';
const Elements = Src + '/elements';
const Templates = Src + '/templates';

module.exports = () => {
  return {
    mode: 'production',
    target: 'web',
    devtool: 'eval',
    entry: {
      index: './src/pages/index.pug',
      about: './src/pages/about.pug',
      products: './src/pages/products.pug',
    },
    output: {
      path: path.join(__dirname, 'dist/'),
      publicPath: './',
    },
    stats: 'errors-warnings',
    devtool: 'source-map',
    // optimization: {
    //   runtimeChunk: 'single',
    //   splitChunks: {
    //     cacheGroups: {
    //       vendor: {
    //         test: /[\\/]node_modules[\\/].+\.(js|ts)$/, // use exactly this Regexp
    //         name: 'vendor',
    //         chunks: 'all',
    //       },
    //     },
    //   },
    // },
    resolve: {
      alias: {
        Images,
        Fonts,
        Blocks,
        Components,
        Elements,
        Templates,
      },
    },
    plugins: [
      new Dotenv(),
      new PugPlugin({
        pretty: true,
        extractComments: true,
        js: {
          filename: './js/[name].[contenthash:8].js',
        },
        css: {
          filename: './css/[name].[contenthash:8].css',
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: Images,
            to: 'images',
          },
          {
            from: Documents,
            to: 'documents',
          },
          {
            from: Favicons,
            to: 'favicons',
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /.pug$/,
          loader: PugPlugin.loader,
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }]],
            },
          },
        },
        {
          test: /\.(css|sass|scss)$/,
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer()],
                },
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|jpeg|svg|ico)/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
        {
          test: /\.(woff|woff2)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext][query]',
          },
        },
      ],
    },
  };
};
