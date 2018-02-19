 import merge from 'webpack-merge'
 import common from '../webpack.common.js'
 import webpack from 'webpack'

 module.exports = merge(common,
  {
   plugins:
   [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production')  }),
    new webpack.optimize.UglifyJsPlugin({ compress: { screw_ie8: true, warnings: false }})
   ]
 });
