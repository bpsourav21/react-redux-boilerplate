var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './public',
        port: 5001
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './app/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
             {   test: /\.css$/,
                loader: "style-loader!css-loader" 
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: __dirname,
        filename: "js/bundle.min.js"
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
