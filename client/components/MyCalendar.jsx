import React from 'react'
import Calendar from 'react-input-calendar'
import BottomMenu from './BottomMenu'

class MyCalendar extends React.Component {
  render () {
    return (
      <div>
        <Calendar format='DD/MM/YYYY' date='04-11-2018' />
        <BottomMenu />
      </div>
    )
  }
}
export default MyCalendar
