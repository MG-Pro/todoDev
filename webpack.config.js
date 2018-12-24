const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const argv = require('yargs').argv;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;

module.exports = {
  entry: {
    'app/js/app': './src/index.js',
    'assets/start_page_js/startpage': './public/res/startpage.js'
  },
  output: {
    path: path.join(__dirname, "./build")
  },
  devServer: {
    overlay: true,
    proxy: {
      '/api':'http://localhost:3000',
    },
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
              outputPath: 'assets/img/',
              publicPath: isProduction ? '../img/' : '../img/'
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          //isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
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
                isProduction ? require('cssnano') : () => {
                } // todo ?
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
            outputPath: 'assets/css/fonts/',
            publicPath: isProduction ? 'fonts/' : '../css/fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    isProduction ? new CleanWebpackPlugin('build', {exclude: ['server/']}) : () => {},
    new HtmlWebpackPlugin({
      filename: 'app/app.html',
      template: 'public/app.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: false
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/style.css"
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
      }
    ])
  ]
};
