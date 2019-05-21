const path = require("path");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(webpackBaseConfig, {
  entry: {
    base: path.resolve(__dirname, "../src/styles/index.scss"),
    "klk-button": path.resolve(__dirname, "../src/components/button/index.js"),
    "klk-alert": path.resolve(__dirname, "../src/components/alert/index.js"),
    "klk-cascader": path.resolve(
      __dirname,
      "../src/components/cascader/index.js"
    )
  },
  output: {
    path: path.resolve(__dirname, "../lib"),
    filename: "[name]/index.js",
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
          {
            loader: "sass-loader",
            options: {
              // you can also read from a file, e.g. `variables.scss`
              data: `@import "./src/styles/variables/base.scss";`
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "theme/[name].css"
    })
  ]
});
