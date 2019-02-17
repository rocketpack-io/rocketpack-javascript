var webpack = require('webpack');
var path = require('path');

var config = {
  mode: 'development',
  devtool: 'source-map',
  entry: __dirname + '/src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'rocketpack.js',
    library: 'rocketpack',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [],
  resolve: {
    alias: {
        '~': path.resolve(__dirname, './src')
    },
    //root: path.resolve('./src'),
    extensions: ['', '.js']
  }
};

if (process.env.NODE_ENV === 'production') {
    config.mode = 'production';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
} else {

}

module.exports = config;