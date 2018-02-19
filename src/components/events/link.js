//Dependencies
import React, { Component } from 'react'

class Mylink extends Component
{
  constructor(props)
  {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e)
  {
    e.preventDefault()
    console.log('Mi enlace ha sido pulsado')
  }

  render()
  {
    return(
      <a href="#" onClick= { this.handleClick }>My Enlace</a>
    )
  }
}

export default Mylink
