// Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Footer extends Component {
  render()
  {
    return (
      <footer className="page-footer teal">
          <div className="container">
                <h5 className="white-text">App que mejora tu productividad</h5>
                <p className="grey-text text-lighten-4">
                  Esta aplicacón web te permite registrar tareas y tener un registro del
                  tiempo que te toma realizarlas, con la finalidad de mejorar tu productividad
                  además de un grafico que muestra tus histotial.
                </p>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 Copyright
            <a className="grey-text text-lighten-4 right" href="#!">carloscastanedan</a>
            </div>
          </div>
        </footer>
    )
  }
}

export default Footer
