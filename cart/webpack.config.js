const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 8082, // To run the webpack file(main.js) we need to have devServer
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/index'
            },
            shared: ['faker'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html' // Will add appropriate script tag(in our case main.js) behind the scenes
        })
    ]
};