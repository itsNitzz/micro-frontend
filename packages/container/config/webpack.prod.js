const  ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");

const commonConfig = require('./webpack.common')
const packages = require('../package.json');

const prodDomain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output:{
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'container',
            remotes:{
                marketing: `marketingApp@${prodDomain}/marketing/latest/remoteEntry.js`,
                auth: `authApp@${prodDomain}/auth/latest/remoteEntry.js`,
                dashboard: `dashboardApp@${prodDomain}/dashboard/latest/remoteEntry.js`
                
            },
            shared : packages.dependencies
        })
    ]
}


module.exports = merge(commonConfig, prodConfig);
