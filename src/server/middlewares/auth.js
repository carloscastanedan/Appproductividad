//Assets
import services from '../../services/token'

function isAuth(req, res, next)
{
  if(!req.headers.authorization)
  {
    return res.status(403).send({ message: ' No tiene autorización '})
  }

  const token = req.headers.authorization.split(' ')[1]

  services.decodeToken(token)
    .then(response => {
      req.user = response
      next()
    })
    .cath(response => {
      res.status(response.status)
    })
}
