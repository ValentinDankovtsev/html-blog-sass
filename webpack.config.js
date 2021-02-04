const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");

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
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "pages", "1.hbs"),
      output: path.join(process.cwd(), "dist", "index.html"),
      partials: [path.join(process.cwd(), "partials", "**", "main.hbs")],
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "pages", "1.hbs"),
      output: path.join(process.cwd(), "dist", "index2.html"),
      partials: [path.join(process.cwd(), "partials", "**", "main-2.hbs")],
    }),
  ],
};
