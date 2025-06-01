const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { merge } = require("webpack-merge");

const commonConfig = require('./webpack.common')
const packages =  require('../package.json')

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    historyApiFallback: true,
  },
    plugins: [
      new ModuleFederationPlugin({
        name:'marketingApp',
        filename: 'remoteEntry.js',
        exposes :{
          './marketing-module': './src/bootstrap.js',
        },
        shared: packages.dependencies
      })
    ],
  };

module.exports = merge(commonConfig, devConfig);
