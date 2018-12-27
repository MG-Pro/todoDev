const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const argv = require('yargs').argv;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProduction = argv.mode === 'production';

module.exports = {
  entry: {
    app: './src/index.js',
    startpage: './public/res/startpage.js',
  },
  output: {
    path: path.join(__dirname, "./build"),
    filename: 'assets/js/[name].js',
    publicPath: '/'
  },
  devServer: {
    overlay: true,
    open: true,
    //historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
      '/app': {
        target: 'http://localhost:8080',
        bypass: function () {
          return 'http://localhost:8080/app.html';
        }
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
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/'
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
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
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
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
    isProduction ? new CleanWebpackPlugin('build') : () => {},
    new HtmlWebpackPlugin({
      filename: 'app.html',
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
