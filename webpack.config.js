const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const glob = require("glob");
const pages = glob.sync("pages/*.html");

module.exports = {
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
    new CopyPlugin({
      patterns: [
        {
          from: "./src/img",
          to: "dest",
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "./style.css",
    }),
    ...pages.map(
      (el) =>
        new HtmlWebpackPlugin({
          filename: el.replace(/^pages\//, ""),
          template: el,
          minify: false,
        })
    ),
  ],
};
