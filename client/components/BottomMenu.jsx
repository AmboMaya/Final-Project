import React, {Component} from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import {Container, Menu} from 'semantic-ui-react'

export default class BottomMenu extends Component {
  render () {
    return (
      <Router>
        <Menu borderless className='ui teal three item inverted menu' color='green' fixed='bottom' inverted>
          <Container>
            <Menu.Item as={Link} to='/' className='active item'>Home</Menu.Item>
            <Menu.Item as={Link} to='/calendar' className='item'>Calendar</Menu.Item>
            <Menu.Item as={Link} to='/records' className='item'>Graph</Menu.Item>
          </Container>
        </Menu>
      </Router>
    )
  }
}
