//Assets
import User from '../models/user'
import service from '../../services/token'

function signUp(req, res)
{
  let user = new User()
  user.email = req.body.email,
  user.displayName = req.body.displayName

  user.save((err) => {
    if(err)
      res.status(500).send({ message: `Error al crear Usruario:${err}` })

    return res.status(200).send({ token: service.createToken(user) })
  })
}

function signIn(req, res)
{
  User.find({ email: req.body.email }, (err, user) => {
    console.log(user)
    if(err)
    {
      res.status(500).send({ message: `Error:${err}` })
      return
    }
    if(!user)
    {
      res.status(404).send({ message: 'No existe el usuario' })
      return
    }
    req.user = user
    res.status(200).send({ message: 'Te has logeado correctamente',
                            token: service.createToken(user) })
  })
}

module.exports =
{
  signUp,
  signIn
}
