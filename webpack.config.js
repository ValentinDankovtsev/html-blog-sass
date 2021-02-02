const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    index: ["./src/main.js"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "index2.html",
      template: "./src/index2.html",
    }),
    new HtmlWebpackPlugin({
      filename: "index3.html",
      template: "./src/index3.html",
    }),
    new HtmlWebpackPlugin({
      filename: "index4.html",
      template: "./src/index4.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./style.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./src/img",
          to: "dest",
        },
      ],
    }),
  ],
};
