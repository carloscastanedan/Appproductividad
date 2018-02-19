// Dependencies
import express from 'express'
import webpack from 'webpack'
import path from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
//Assets
import webpackConfigDev from '../../webpack/webpack.dev'
import webpackConfigProd from '../../webpack/webpack.prod'


// Express api
const app = express()

//Determina Environment
const isDevelopment = process.env.NODE_ENV !== 'production '

if (isDevelopment)
{
  const webpackCompiler = webpack(webpackConfigDev)
  app.use(webpackDevMiddleware(webpackCompiler))
  app.use(webpackHotMiddleware(webpackCompiler))
}
else
{
  const webpackCompiler = webpack(webpackConfigProd)
}

//Ficheros Estaticos
app.use(express.static(path.resolve(__dirname, '../../dist')))


export default app
