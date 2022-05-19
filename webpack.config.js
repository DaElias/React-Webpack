const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /.html$/, use: "html-loader" },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.(jpg|png)/, use: "file-loader" },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
      favicon: "./public/favicon.ico",
    }),
    new Dotenv(),
  ],
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
    // compress: true,
  },
};
