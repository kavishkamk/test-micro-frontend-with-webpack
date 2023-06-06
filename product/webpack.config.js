const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port:8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "product",
            filename: 'remoteEntry.js',
            exposes: {
                "./ProductIndex": "./src/index",
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
    ],
};