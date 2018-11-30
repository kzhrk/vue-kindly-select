const path = require('path');
const baseConfig = require('../webpack.config');

module.exports = Object.assign(
  baseConfig,
  {
    context: __dirname,
  
    entry: './src/app.js',

    output: {
      path: path.resolve(__dirname, 'js'),
      filename: 'app.js',
      publicPath: '/js/',
    },

    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
          vue: 'vue/dist/vue',
      },
    },

    externals: {
      vue: 'Vue',
    }  
  }
);
