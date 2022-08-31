const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new WebpackPwaManifestPlugin({
            name: 'Petgram - Tu app de fotos de mascotas',
            shortname: 'Petgram 🐶',
            description: 'Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente',
            background_color: '#fff',
            theme_color: '#b1a',
            icons: [
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96, 128, 144, 192, 256, 384, 512],
                    purpose: 'any maskable',
                },
            ],
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images',
                    },
                },
                {
                    urlPattern: new RegExp('https://petgram-api-2022.vercel.app'),
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'api',
                    },
                },
            ],
        }),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        port: 3005,
        open: true,
    },
};