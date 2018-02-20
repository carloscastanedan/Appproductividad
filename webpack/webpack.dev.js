 const webpack = require('webpack')
 const merge = require( 'webpack-merge')
 const common =  require('../webpack.common.js')

 module.exports = merge(common, {
  entry:
  [
    'webpack-hot-middleware/client?reload=true'
  ],
  plugins:
  [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
   ],
   devtool: 'inline-source-map',
 });
