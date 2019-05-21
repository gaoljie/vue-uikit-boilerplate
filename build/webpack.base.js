const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-sprite-loader",
            options: {
              symbolId: "icon-[name]"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer()]
      }
    })
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({ sourceMap: true }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue"
    }
  }
};
