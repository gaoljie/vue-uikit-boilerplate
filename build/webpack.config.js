const path = require("path");
const merge = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.js");

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
          "style-loader",
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
  }
});
