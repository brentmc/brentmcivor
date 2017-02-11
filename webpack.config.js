const merge = require('webpack-merge');
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin');

const env = process.env

const TARGET = env.npm_lifecycle_event;
env.BABEL_ENV = TARGET;

// NODE_ENV set to production will remove all React
// prop validations.
// Because we want to simulate a prod build in staging,
// we needed another ENVIRONMENT variable.
require('dotenv').config({
  path: './configs/.env.' + env.ENVIRONMENT
});


const common = {
  entry: './index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  
  plugins: [],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
};

if (TARGET === 'watch') {
  module.exports = merge(common, {
    // Add these plugins for dev watch
    plugins: [
      new DashboardPlugin(),
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    // Add this handful of plugins that optimize the build when we're in production
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
  });
}
