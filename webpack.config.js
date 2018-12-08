const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: 'bundle.js',
    publicPath: '/assets/'
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
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
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
