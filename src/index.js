//Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

//Assets
import AppRoutes from './routes'

ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>, document.getElementById('root'));
