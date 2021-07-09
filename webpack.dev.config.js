const path = require('path');
const {merge} = require("webpack-merge");
const mainConfig = require("./webpack.config");

module.exports = merge(mainConfig, {
  devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        host: "localhost",
        hot: true,
        compress: true,
        port: 3000,
  },
});