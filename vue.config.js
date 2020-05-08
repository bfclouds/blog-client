const path = require('path');

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
    }
};
