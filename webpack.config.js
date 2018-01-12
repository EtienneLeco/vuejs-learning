const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

const ENTRY_DIR = path.resolve(__dirname, "src");
const DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
    devtool: "source-map",
    watch: true,
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000
    },
    entry: ENTRY_DIR + "/app.js",
    output: {
        filename: "bundle.js",
        path: DIST_DIR,
        publicPath: "/dist/"
    },
    resolve: {
        modules: [__dirname, "node_modules"], //allow absolute path in requires (using this directory as root)
        alias: {
            vue: "vue/dist/vue.js",
        }
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.vue$/,
            use: [{
                loader: "vue-loader",
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        })
                    }
                }
            }]
        }]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ]
};
