//Dependencies
import open from 'open'
import mongoose from 'mongoose'
//Asets
import app from './app'
import config from '../../config'
// Envía el trafico entrante a React


 // Conexion con DB y corre el servidor
mongoose.connect(config.db, (err, res) => {
  if(err)
    return console.log(`Error al conectar con la base de datos:${err}`)

  console.log('Conexión con la base de datos establecida')
  app.listen(config.port, err => {
    if (!err) {
      open(`http://localhost:${config.port}`)
    }
  })
})

