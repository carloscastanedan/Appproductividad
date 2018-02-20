//Dependencies
import jwt from 'jwt-simple'
import moment from 'moment'
import config from '../../../config'

function createToken(user)
{
  const payload ={
    sub: user.__id,
    iat: moment().unix(),
    exp: moment().add(14, 'day').unix()
  }

  return jwt.encode(payload, config.SECRET_TOKEN)

}

function decodeToken(token)
{
  const decoded = new Promise((resolve, reject) =>{
    try
    {
      const payload = jwt.decode(token, config.SECRET_TOKEN)
      if(payload.exp <= moment.unix())
      {
        reject({
          status: 401,
          message: 'El token ha expirado'
        })
      }

      resolve(payload.sub)
    }

    catch(err)
    {
      reject({
        status: 500,
        message: 'Token Invalido'
      })
    }
  })
}

module.exports =
{
  createToken,
  decodeToken
}
