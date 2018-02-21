import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignUp extends Component
{
  render()
  {
    return(
        <div className="row">
          <div className="col s8 offset-s2">
            <h4 className="grey-text">Registrate: </h4>
          </div>
          <div className="input-field col s8 offset-s2">
            <input id="email" type="email" className="validate"/>
            <label htmlFor="email">Correo</label>
          </div>
          <div className="input-field col s8 offset-s2">
          <input id="displayname" type="text" className="validate"/>
          <label htmlFor="displayname">Nick Name</label>
        </div>
          <div className="input-field col s8 offset-s2">
            <input id="password" type="password" className="validate"/>
            <label htmlFor="password">Contraseña</label>
          </div>
          <div className="col s8 offset-s2">
          <button className="btn waves-effect waves-light" type="submit" name="action">Registrar
          </button>
          </div>
          <Link to="/home">Home</Link>
        </div>
    )
  }
}

export default SignUp
