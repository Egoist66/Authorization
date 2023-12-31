'use strict';

const path = require('path');
const HTMLPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {

  // mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname + '/public/'),
  },
  watch: true,
  devtool: "source-map",
  devServer:{
    port: 3000
  },

  plugins: [
    new HTMLPlugin({
      template: "index.html",
    }),

    new CleanWebpackPlugin() 

  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  }
};
