const path = require("path");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(webpackBaseConfig, {
  entry: {
    main: path.resolve(__dirname, "../src/index")
  },
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "vue-uikit-boilerplate.js",
    library: "vue-uikit-boilerplate",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ]
});
