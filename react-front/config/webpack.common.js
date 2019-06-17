const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, '../src', 'index.js'),
    output: {
        path: path.join(__dirname, '../public'),
        filename: '[name].js'
    },
    module: {
        rules: [
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src', 'index.html')
        })
    ],
}