const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { merge } = require("webpack-merge");

const commonConfig = require('./webpack.common')
const packages =  require('../package.json')

const devConfig = {
  mode: "development",
    output:{
    publicPath: "http://localhost:8083/"
  },
  devServer: {
    port: 8083,
    historyApiFallback: true,
     headers: {
      "Access-Control-Allow-Origin":"*"
  },
  },
 
    plugins: [
      new ModuleFederationPlugin({
        name:'dashboardApp',
        filename: 'remoteEntry.js',
        exposes :{
          './dashboard-module': './src/bootstrap.js',
        },
        shared: packages.dependencies
      })
    ],
  };

module.exports = merge(commonConfig, devConfig);
