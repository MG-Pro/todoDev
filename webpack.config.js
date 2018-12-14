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
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: 'js/bundle.js',
    publicPath: ''
  },
  devServer: {
    overlay: true,
    //proxy: {
    //  '/api': {
    //    target: 'http://localhost:3000',
    //  }
    //}
  },
  //devtool: isProduction ? false : 'source-map',
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
              outputPath: 'img/',
              publicPath: '../img/'
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
                isProduction ? require('cssnano') : () => {
                }
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
            outputPath: 'css/fonts/',
            publicPath: isProduction ? 'fonts/' : 'css/fonts/'
          }
        }
      }

    ]
  },
  plugins: [
    new CleanWebpackPlugin('build', {}),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
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
