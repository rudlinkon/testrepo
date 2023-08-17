const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: process.env.mode,
    entry: {
        bundle: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        static: {
            directory: path.join(__dirname, '/'),
        },
        compress: true,
        port: 9090,
        liveReload: true,
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(?:js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};
