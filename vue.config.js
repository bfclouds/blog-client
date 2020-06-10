const path = require('path');
const webpack = require("webpack")

function resolveDir(dir){
    return path.join(__dirname,dir)
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('assets', resolveDir('./src/assets'))
            .set('components', resolveDir('./src/components'))
            .set('views',resolveDir('./src/views'))
            .set('routers',resolveDir('./src/routers'))
            .set('img',resolveDir('./src/img'))
    },
    devServer: {
        open: false,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        proxy: null,
        contentBase: resolveDir('/src/assets/api') ,
        before: function (app) {
            app.get('/api/article', function (req, res) {
                res.json({
                    errno: 0,
                    data: article
                })
            })
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/css/common.less')
            ]
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                'window.Quill': 'quill/dist/quill.js',
                'Quill': 'quill/dist/quill.js'
            }),

        ]
    }
};
