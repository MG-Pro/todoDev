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
    filename: 'app/js/bundle.js',
    publicPath: ''
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
              outputPath: 'app/img/',
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
            outputPath: 'app/css/fonts/',
            publicPath: isProduction ? 'fonts/' : 'css/fonts/'
          }
        }
      }

    ]
  },
  plugins: [
    new CleanWebpackPlugin('build', {}),
    new HtmlWebpackPlugin({
      filename: 'app/app.html',
      template: 'public/app.html'
    }),
    new MiniCssExtractPlugin({
      filename: "app/css/[name].css",
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
      },
      {
        from: 'public/index.html',
        toType: 'file'
      }
    ])
  ]
};
