import React from 'react'
import Statistics from './Statistics'
import CardList from './CardList'
import LoginForm from './LoginForm'

import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

export default class Main extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={CardList} />
          <Route exact path='/statistics' component={Statistics} />
          <Route exact path='/login' component={LoginForm} />
        </Switch>
      </Router>
    )
  }
}
