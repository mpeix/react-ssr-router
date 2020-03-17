const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve('./server/index.js'),
  target: 'node',
  externals: [nodeExternals()],
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
            test: /\.css$/i,
            use: 'ignore-loader'
        },
        {
            test: /\.svg$/,
            loader: 'svg-inline-loader'
        },
        {
            test: /\.(js|jsx)$/,
            exclude:/node_modules/,
            use: 'babel-loader'
        }
    ]
  }
};