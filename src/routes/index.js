// Dependencies
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import App from '../components/App'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import CreateTask from '../components/new'


import About from '../components/About'
import Contact from '../components/Contact'
import Page404 from '../components/Page404'


class AppRoutes extends Component
{
  render()
  {
    return(
    <App>
      <Switch>
        <Route exact path="/" component={ SignIn }/>
        <Route exact path="/signup" component={ SignUp } />
        <Route exact path="/home" component={ Home } />
        <Route exact path="/new" component={ CreateTask } />
        <Route component={Page404} />
      </Switch>
    </App>
    )
  }
}


export default AppRoutes;
