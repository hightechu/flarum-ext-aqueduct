const config = require('flarum-webpack-config');
const merge = require('webpack-merge');

module.exports = merge(config(), {
    resolve: {
        alias: {
            //'yaml': 'node_modules/yaml/dist/'
        }
    }
});
