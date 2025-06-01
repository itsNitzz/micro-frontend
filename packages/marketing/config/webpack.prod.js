const {merge} =  require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const commonConfig = require('./webpack.common')
const packages =  require('../package.json');


const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },

    plugins:[
        new ModuleFederationPlugin({
            name: 'marketingApp',
            filename: 'remoteEntry.js',
            exposes:{
                './marketing-module': './src/bootstrap'
            },
            shared: packages.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)