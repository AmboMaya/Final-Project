import React from 'react'
import Calendar from 'react-input-calendar'
import BottomMenu from './BottomMenu'
import Loading from './Loading'
import moment from "moment"
import Photo from './Photo'
import { Placeholder } from '../../node_modules/semantic-ui-react';

class MyCalendar extends React.Component {
  state={
      selectedDate: moment(),
    }

  onSelect = (e) => {
    this.setState({selectedDate:moment(e)})
  }

  render () {
    if (this.props.pending) {
      return <Loading />
    }

    return (
      <div>
        <Calendar date={this.state.selectedDate} onChange={this.onSelect} />
        <Photo />
        <div className='description'>Capture your mood with a photo of the day </div>
        <BottomMenu />
      </div>
    )
  }
}
export default MyCalendar
