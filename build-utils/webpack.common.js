//shared Webpack configuration for development and build mode.
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "../", "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
