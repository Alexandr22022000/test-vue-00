const config = require('./main.config'),
    path = require('path');

config.devServer = {
    port: 3000,
    host: "localhost",
    historyApiFallback: true,
    watchOptions: {aggregateTimeout: 300, poll: 1000},
    contentBase: path.resolve(__dirname, '../src'),
    open: true,
    openPage: ''
};

config.module.rules.push({
    test: /\.scss$/,
    enforce: 'pre',
    loader: 'style-loader!css-loader!resolve-url-loader!sass-loader'
});

module.exports = config;