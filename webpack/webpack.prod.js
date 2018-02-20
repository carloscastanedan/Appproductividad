//Dependencies
import webpack from 'webpack'
import common from '../webpack.common.js'
import merge from 'webpack-merge'

module.exports = merge(common,
  {
   plugins:
   [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production')  }),
    new webpack.optimize.UglifyJsPlugin({ compress: { screw_ie8: true, warnings: false }})
   ]
 });
