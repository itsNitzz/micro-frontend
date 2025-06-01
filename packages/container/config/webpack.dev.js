const HtmlWebpackPlugin = require("html-webpack-plugin");
const  ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const commonConfig = require('./webpack.common')
const packages = require('../package.json');

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),

      new ModuleFederationPlugin({
        name: 'container',
        remotes: {
          'marketing': 'marketingApp@http://localhost:8081/remoteEntry.js'
        },
        shared: packages.dependencies

      })
    ],
  };

module.exports = merge(commonConfig, devConfig);
