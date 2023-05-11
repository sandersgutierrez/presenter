'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: 'dist',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Presenter',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
            },
            template: './src/index.html',
            inject: 'body',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: path.resolve(__dirname, 'dist') },
            ],
        }),
    ],
}
