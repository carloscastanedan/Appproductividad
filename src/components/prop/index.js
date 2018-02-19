//Dependencies
import React, { Component }from 'react'
import propTypes from 'prop-types'

class Empleado extends Component
{
  static propTypes =
  {
    name: propTypes.string
  }

  render()
  {
    const name = this.props.name
    return(
        <p>{ name }</p>
    )
  }
}

export default Empleado
