import React from 'react'
// import Graph from './Graph'
import CardList from './CardList'
// import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

export default class Main extends React.Component {
  render () {
    return (
      <CardList />
      // <Router>
      //   <Switch>
      //     <Route path='/' component={CardList} />
      //   </Switch>
      // </Router>
    )
  }
}
