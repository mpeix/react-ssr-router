const path = require('path');
//const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  target: 'web',
  //externals: [nodeExternals()],
  plugins:  [new MiniCssExtractPlugin()],
  watchOptions:{
    aggregateTimeout:1000,
    ignored: /node_modules/
  },
  output: {
    path: path.resolve('assets'),
    filename: 'client.js'
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        },
        {
            test: /\.(js|jsx)$/,
            exclude: ['/node_modules/', path.resolve('./server')],
            use: 'babel-loader'
        }
    ]
  }
};