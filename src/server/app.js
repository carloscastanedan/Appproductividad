// Dependencies
import express from 'express'
import webpack from 'webpack'
import path from 'path'
import bodyParser from 'body-parser'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'


//Assets
import webpackConfigDev from '../../webpack/webpack.dev'
import webpackConfigProd from '../../webpack/webpack.prod'
import api from './routes'

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

//Configuración BodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Se asigna router
app.use('/api', api)

export default app
