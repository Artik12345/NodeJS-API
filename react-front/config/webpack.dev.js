const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = merge(commonConfig, {

    devtool: 'eval',

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
                use: [
                    'style-loader',
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
            }
        ]
    },

    devServer: {
        stats: 'errors-only'
    }

})