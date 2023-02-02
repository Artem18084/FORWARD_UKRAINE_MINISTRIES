const path = require("path");
const WebpackFavicons = require("webpack-favicons");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: ["@babel/polyfill", "./src/index.jsx"],

  resolve: {
    extensions: [".js", ".jsx"],
  },
  // output: {
  //   publicPath: "/",
  // },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
    new WebpackFavicons({
      src: "./src/images/logo/logo.png",
      path: "img",
      background: "#000",
      theme_color: "#000",
      icons: {
        favicons: true,
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|PNG|JPG|SVG|JPEG)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
    ],
  },
};
