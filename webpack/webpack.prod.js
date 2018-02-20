//Dependencies
const webpack = require('webpack')
const merge = require('webpack-merge')

//Assets
const common = require('../webpack.common.js')

module.exports = merge(common,
  {
   plugins:
   [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production')  }),
    new webpack.optimize.UglifyJsPlugin({ compress: { screw_ie8: true, warnings: false }})
   ]
 });
