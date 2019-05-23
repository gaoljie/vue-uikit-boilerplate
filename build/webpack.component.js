const path = require("path");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require('glob')

const entry = Object.assign(
  {},
  {
    base: path.resolve(__dirname, "../src/styles/index.scss"),
  },
  glob.sync("./src/components/**/index.js")
    .map(item => {
      return item.split('/')[3]
    }).reduce(
    (acc, cur) => {
      acc[`klk-${cur}`] = path.resolve(__dirname, `../src/components/${cur}/index.js`)
      return {...acc}
    }, {})
)

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
