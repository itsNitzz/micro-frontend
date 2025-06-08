const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { merge } = require("webpack-merge");

const commonConfig = require('./webpack.common')
const packages =  require('../package.json')

const devConfig = {
  mode: "development",
  devServer: {
    port: 8082,
    historyApiFallback: true,
  },
  output:{
    publicPath: "http://localhost:8082/"
  },
    plugins: [
      new ModuleFederationPlugin({
        name:'authApp',
        filename: 'remoteEntry.js',
        exposes :{
          './auth-module': './src/bootstrap.js',
        },
        shared: packages.dependencies
      })
    ],
  };

module.exports = merge(commonConfig, devConfig);
