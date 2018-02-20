//Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, browserHistory,  Route, Switch } from 'react-router-dom'

//Assets
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Page404 from './components/Page404'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={Page404} />
    </Switch>
  </Router>,
  document.getElementById('root'));
