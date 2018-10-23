const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: {
      root: 'VueSeelct',
      amd: 'vue-select',
      commonjs: 'vue-select'
    },
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.vue']
  },
  
  externals: {
    vue: 'vue',
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader'
          }
        ]
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ],

  optimization: {
    minimizer: (process.env.NODE_ENV === 'production')
      ? [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true
            }
          }
        })
      ]
      : []
  },

  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    port: 3000
  },

  devtool: process.env.NODE_ENV === 'production' ? '' : 'inline-source-map',

  mode: process.env.NODE_ENV
};
