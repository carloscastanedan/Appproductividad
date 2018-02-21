import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignIn extends Component
{
  constructor(props)
  {
    super(props)
    this.state =
    {
      emailValue: '',
      passwordValue: '',
    }

    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmail(event)
  {
    this.setState({emailValue: event.target.value})
  }

  handlePassword(event)
  {
    this.setState({passwordValue: event.target.value})
  }

  handleSubmit(event) {
    fetch('http://localhost:3000/api/signIn', {
      method: 'POST',
      body: JSON.stringify({ email: this.state.emailValue, password: this.state.passwordValue }),
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(function(response) {
      response.json()
        .then(function(data) {
        console.log(data);
      })
    })
    .catch(function(err) {
      console.log(err)
    })


    event.preventDefault()
    this.setState({
      emailValue: '',
      passwordValue: ''
   })
  }

  render()
  {
    return(
        <div className="row">
          <form className="col s12">
            <div className="col s8 offset-s2">
              <h4 className="grey-text">Ingresar: </h4>
            </div>
            <div className="input-field col s8 offset-s2">
              <input id="email" type="email" className="validate" name="email" value={ this.state.emailValue } onChange={ this.handleEmail }/>
              <label htmlFor="email">Correo</label>
            </div>
            <div className="input-field col s8 offset-s2">
              <input type="password" className="validate" name="password" value={ this.state.passwordValue } onChange={ this.handlePassword }/>
              <label htmlFor="password">Contraseña</label>
            </div>
            <div className="col s8 offset-s2">
              <button className="btn waves-effect waves-light" type="submit" onClick={ this.handleSubmit }>Enviar</button>
            </div>
            <Link to="/signup">SignUp</Link>
          </form>
        </div>
    )
  }
}

export default SignIn
