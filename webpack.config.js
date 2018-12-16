const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const argv = require('yargs').argv;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const sass = require('node-sass');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;

module.exports = {
  entry: {
    'app/js/app':'./src/index.js',
    'res/js/startpage': './public/res/js/startpage.js'
  },
  output: {
    path: path.join(__dirname, "./build"),

  },
  devServer: {
    overlay: true,
    index: 'app/app.html',
    contentBase: path.join(__dirname, 'app/'),
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      }
    }
  },
  devtool: isProduction ? false : 'cheap-inline-module-source-map',
  optimization: {
    minimize: isProduction
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'app/img/',
              publicPath: isProduction ? '../img/' : '../app/img/'
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              url: true

            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version']
                }),
                isProduction ? require('cssnano') : () => {} // todo ?
              ],
              sourceMap: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'app/css/fonts/',
            publicPath: isProduction ? 'fonts/' : 'app/css/fonts/'
          }
        }
      }

    ]
  },
  plugins: [
    new CleanWebpackPlugin('build', {}),
    new HtmlWebpackPlugin({
      filename: 'app/app.html',
      template: 'public/app.html',
      inject: false
    }),
    new MiniCssExtractPlugin({
      filename: "app/css/style.css"
    }),
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'public/server',
        to: 'server',
        toType: 'dir'
      },
      {
        from: 'public/index.html',
        toType: 'file'
      },
      {
        from: 'public/res/css/start_page.scss',
        to: 'res/css/start_page.css',
        transform (content, path) {
          const result = sass.renderSync({
            file: path
          });
          return result.css.toString();
        },
      },
      {
        from: 'public/res/img',
        to: 'res/img',
        toType: 'dir'
      },
    ])
  ]
};
