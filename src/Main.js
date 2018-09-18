import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoggedIn from './LoggedIn'
import Home from './Home'
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/loggedin' component={LoggedIn}/>
    </Switch>
  </main>
)

export default Main;