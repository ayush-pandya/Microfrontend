const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080, // To run the webpack file(main.js) we need to have devServer
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js',
                cart: 'cart@http://localhost:8082/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html' // Will add appropriate script tag(in our case main.js) behind the scenes
        })
    ]
};