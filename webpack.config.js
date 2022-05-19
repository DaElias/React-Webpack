const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /.html$/, use: "html-loader" },
      { test: /\.css$/, use: "css-loader" },
      { test: /\.(jpg|png)/, use: "file-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
      favicon: "./public/favicon.ico",
    }),
  ],
  devServer: {
    port: 3000,
    // compress: true,
  },

};
