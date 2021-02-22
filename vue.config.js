const path = require('path');

module.exports = {
  // publicPath: './',
  chainWebpack(config) {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    config.resolve.alias.set('@router', path.resolve(__dirname, 'src/router'));
    config.resolve.alias.set('@store', path.resolve(__dirname, 'src/store'));
    config.resolve.alias.set('@login', path.resolve(__dirname, 'src/components/Login.vue'));
    config.resolve.alias.set('@home', path.resolve(__dirname, 'src/components/Home.vue'));
  },
};
