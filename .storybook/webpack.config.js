const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: ["vue-style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });
  config.module.rules.push({
    test: /\.story\.js?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    enforce: "pre"
  });
  // Return the altered config
  return config;
};
