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
                  Esta aplicación te ayuda a mejorar tu productividad en las tareas que realizas en el día a día.
                  ¿Como lo hace? Registra una tarea y especifica un tiempo pertinente para realizarla,
                  un cronometro hacía atrás te indice el tiempo restante.
                  LLeva un historial de las actividades realizadas
                  Ponte metas y cumplelas!!
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
