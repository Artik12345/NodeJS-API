
const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
const UglifyJSwebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(commonConfig, {
    
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env', 'stage-2']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                include: path.join(__dirname, '../src'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: ['ie >= 8', 'last 4 version']
                                    })
                                ]
                            }
                        }, 
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({ resource }) => /node_modules/gi.test(resource)
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),

        new UglifyJSwebpackPlugin({
            sourceMap: false
        }),

        new ExtractTextPlugin('[name].css')
    ]

})