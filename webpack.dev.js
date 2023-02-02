const path = require("path");

const common = require("./webpack.common");

const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/",
  },
  devServer: {
    port: 3000,

    historyApiFallback: true,
  },
});
