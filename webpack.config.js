const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
    entry: {
        index: path.resolve('./src/index.tsx')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre'
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: !isDevelopment
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};

module.exports = config;
