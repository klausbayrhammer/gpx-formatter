const webpack = require('webpack');

var config = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        filename:  'gpx.js',
        library: 'gpx',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [{test: /\.js$/, loader: 'babel'}]
    },
    plugins: [new webpack.optimize.UglifyJsPlugin({ minimize: true })]
};

module.exports = config;