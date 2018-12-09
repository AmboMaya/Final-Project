import React from 'react'

const BottomMenu = (props) => {
  return (
    <div className="ui teal three item inverted menu">
      <a className="active item" path='/'>
    Home
      </a>
      <a className="item" onClick={props.handleSubmit} type='submit'>
    Submit
      </a>
      <a className="item">
    Calendar
      </a>
    </div>
  )
}

export default BottomMenu
