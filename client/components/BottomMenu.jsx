import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Container, Menu} from 'semantic-ui-react'

export default class BottomMenu extends Component {
  render () {
    return (
      <Menu borderless className='ui teal three item inverted menu' color='green' fixed='bottom' inverted>
        <Container>
          <Menu.Item as={Link} to='/' className='active item'>Home</Menu.Item>
          <Menu.Item as={Link} to='/photo' className='item'>Photo</Menu.Item>
          <Menu.Item as={Link} to='/statistics' className='item'>Graph</Menu.Item>
        </Container>
      </Menu>
    )
  }
}
