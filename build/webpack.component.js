const path = require("path");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");

const entry = Object.assign(
  {},
  {
    base: path.resolve(__dirname, "../src/styles/index.scss")
  },
  glob
    .sync("./src/components/**/index.js")
    .map(item => {
      return item.split("/")[3];
    })
    .reduce((acc, cur) => {
      acc[`ml-${cur}`] = path.resolve(
        __dirname,
        `../src/components/${cur}/index.js`
      );
      return { ...acc };
    }, {})
);

module.exports = merge(webpackBaseConfig, {
  entry: entry,
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
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "theme/[name].css"
    })
  ]
});
