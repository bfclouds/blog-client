const path = require('path');

function resolveDir(dir){
    return path.join(__dirname,dir)
}

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set('assets', resolveDir('./src/assets'))
            .set('components', resolveDir('./src/components'))
            .set('views',　resolveDir('./src/views'))
            .set('routers',resolveDir('./src/routers'))
    }
};
