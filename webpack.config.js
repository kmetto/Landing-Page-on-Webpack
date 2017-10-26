const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        "index.html": "./src/pug/index.pug",
        "css/style.css": "./src/scss/style.scss",
        "js/bundle.js": "./src/js/main.js"
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name]"
    },
    watch: true,

    watchOptions: {
       aggregateTimeout: 100,
       ignored: /node_modules/
    },

    devtool: "eval-source-map",

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: ["css-loader", "postcss-loader", "sass-loader"]
                    }
                )
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["env"],
                        plugins: ["transform-runtime"]
                    }
                }
            },
            {
                test: /\.(jpe?g|svg|png|ttf|woff2?|otf)(\?.+)?$/,
                use: {
                    loader: 'url-loader',
                    query:  {
                        limit: 1000000
                    }
                }
            },
            {
                  test: /\.pug$/,
                  use: ExtractTextPlugin.extract({use:[
                    'html-loader',
                    'pug-html-loader',
                  ]}),
            },
        ]
    },
    plugins: [
      new CleanWebpackPlugin(['build']),
      new ExtractTextPlugin("[name]"),
    ]
};