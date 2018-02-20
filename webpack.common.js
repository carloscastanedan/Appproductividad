const path = require('path')
const ExtractTextPlugin =  require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry:
     ['./src/index.js']
   ,
   plugins:
    [
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({ title: 'App', template: 'src/public/index.html' }),
    ],
   output:
   {
     filename: '[name].bundle.js',
     publicPath: '/',
     path: path.resolve(__dirname, 'dist')
   },
   module:
   {
      loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /(\.css)$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [ { loader: 'css-loader', options: { minimize: true }} ] })
      }
      ]
    },
 };
