const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const distPath = path.resolve(__dirname, "./dist");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: distPath,
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                    
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: "index.html"
        })
    ]
}