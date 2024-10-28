const path = require("path");

module.exports = {
  entry: "./script.js",
  module: {
    rules: [{ test: /\.js$/ }],
  },
  output: {
    filename: "scripts.js",
    path: path.resolve(__dirname, "dist"),
  },
  externals: {
    jquery: "jQuery",
    bootstrap: "bootstrap",
    handlebars: "handlebars",
  },
  mode: "production",
};
