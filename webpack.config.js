const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/index.html.js",
    }),
  ],
};
