const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  plugins:  [new MiniCssExtractPlugin()],
  watchOptions:{
    aggregateTimeout:1000,
    ignored: /node_modules/
  },
  output: {
    path: path.resolve('assets'),
    filename: 'server.js'
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude:/node_modules/,
            use: 'babel-loader'
        }
    ]
  }
};