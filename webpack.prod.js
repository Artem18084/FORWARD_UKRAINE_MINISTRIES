const path = require("path");
const common = require("./webpack.common");

const {merge} = require("webpack-merge");

module.exports = merge(common, {
  mode: "production",
  performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
  },
}) ;
