const config = require('./main.config'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    CompressionPlugin = require("compression-webpack-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin');

config.module.rules.push({
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader!resolve-url-loader!sass-loader"
    })
});

config.plugins = [
    new ExtractTextPlugin("styles.css"),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: {removeAll: true } },
        canPrint: true
    }),
    new UglifyJsPlugin(),
    new CompressionPlugin({test: /\.css$|\.js$/}),
    new CopyWebpackPlugin([
        {from: 'src/assets', to: '../dist/assets'},
        {from: 'src/index.html', to: '../dist/index.html'}
    ])
];

module.exports = config;