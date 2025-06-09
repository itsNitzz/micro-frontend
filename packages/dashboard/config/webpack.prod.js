const {merge} =  require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const packages =  require('../package.json');


const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/dashboard/latest/',
    },

    plugins:[
        new ModuleFederationPlugin({
            name: 'dashboardApp',
            filename: 'remoteEntry.js',
            exposes:{
                './dashboard-module': './src/bootstrap'
            },
            shared: packages.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)