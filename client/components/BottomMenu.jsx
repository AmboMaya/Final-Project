import React, {Component} from 'react'
import {Sticky} from 'semantic-ui-react'

export default class BottomMenu extends Component {
  handleClick (e) {
    e.preventDefault()
  }

  render () {
    return (
      <Sticky className='stickyMenu' style={{bottom: 0}}>
        <div className='ui teal three item inverted menu'>
          <a href='/' onClick={this.handleClick} className='active item'>Home</a>
          <a className='item'>Calendar</a>
          <a href='/records' onClick={this.handleClick} className='item'>Graph</a>
        </div>
      </Sticky>
    )
  }
}
