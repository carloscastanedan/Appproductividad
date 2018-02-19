import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
   entry:
     ['./src/index.js']
   ,
   plugins:
    [
    new ExtractTextPlugin('bundle.css'),
    new HtmlWebpackPlugin({ title: 'Production', template: 'src/public/index.html' }),
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
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: [{ loader: 'css-loader', options: { minimize: true }}, 'sass-loader'] })
      }
      ]
    }
 };
