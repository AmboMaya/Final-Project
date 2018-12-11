import React from 'react'
import Statistics from './Statistics'
import CardList from './CardList'
import RegisterForm from './RegisterForm'

import MyCalendar from './MyCalendar'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

export default class Main extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={CardList} />
          <Route path='/calendar' component={MyCalendar} />
          <Route exact path='/statistics' component={Statistics} />
          <Route exact path='/auth' component={RegisterForm} />
        </Switch>
      </Router>
    )
  }
}
