//Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import Header from '../templates/Header'
import Content from '../templates/Content'
import Footer from '../templates/Footer'

//styles
import './style.css'
class App extends Component
{
  static propTypes =
  {
    children: PropTypes.object.isRequired
  }
  render()
  {
    const { children } = this.props
    return(
    <div className="app">
      <Header title="Registrate"/>
      <Content body={ children } />
      <Footer />
    </div>
    )
  }
}

export default App
