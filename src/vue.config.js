const path = require('path');

console.log(123123);

module.exports = {
  // publicPath: './',
  // chainWebpack(config) {
  //   config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  //   config.resolve.alias.set('@assets', path.resolve(__dirname, 'src/assets'));
  //   config.resolve.alias.set('@bac', path.resolve(__dirname, 'src/store'));
  //   config.resolve.alias.set('@router', path.resolve(__dirname, 'src/router'));
  //   config.resolve.alias.set('@components', path.resolve(__dirname, 'src/components'));
  // },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@store': path.resolve('./src/store'),
        '@m': path.resolve(__dirname, 'src/mixins'),
      },
    },
  },
  devServer: {
    proxy: 'http://localhost:4000',
  },
};
