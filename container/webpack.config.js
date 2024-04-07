const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    devServer: {
        port: 8080, // To run the webpack file(main.js) we need to have devServer
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html' // Will add appropriate script tag(in our case main.js) behind the scenes
        })
    ]
};