const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");

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

    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "pages", "general.hbs"),
      output: path.join(process.cwd(), "dist", "blog_page.html"),
      partials: [
        path.join(process.cwd(), "partials", "blog_page", "*", "main.hbs"),
      ],
      inject: "index",
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "pages", "general.hbs"),
      output: path.join(process.cwd(), "dist", "notes_page.html"),
      partials: [
        path.join(process.cwd(), "partials", "notes_page", "*", "main.hbs"),
      ],
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "pages", "general.hbs"),
      output: path.join(process.cwd(), "dist", "post_page.html"),
      partials: [
        path.join(process.cwd(), "partials", "post_page", "*", "main.hbs"),
      ],
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), "pages", "general.hbs"),
      output: path.join(process.cwd(), "dist", "feedback_page.html"),
      partials: [
        path.join(process.cwd(), "partials", "feedback_page", "*", "main.hbs"),
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "./style.css",
    }),
  ],
};
