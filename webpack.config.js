const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },
  devServer: {
    port: 3001,
    watchFiles: ['src/**/*'],
    hot: true,
    static: {
      directory: path.join(__dirname, './dist')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Index',
      filename: "index.html",
      template: 'src/index.html',
      favicon: 'src/static/favicon.ico'
    })
  ]
};
