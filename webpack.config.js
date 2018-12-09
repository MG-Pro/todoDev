const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const argv = require('yargs').argv;

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: 'js/bundle.js',
    publicPath: ''
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
        //exclude: '/node_modules/'
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
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader?name=./assets/fonts/webfonts/[name].[ext]',
          //options: {
          //  name: '[name].[ext]',
          //  outputPath: 'fonts/',
          //}
        }
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
                !isProduction ? require('cssnano') : () => {
                }
              ],
              sourceMap: true
            }
          },
          "sass-loader"
        ]
      },


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
    })

  ],
  optimization: {
    minimize: true
  }


};

module.exports = (env, options) => {
  const prod = options.mode === 'production';

  config.devtool = prod ? false : 'source-map';

  return config;
};
