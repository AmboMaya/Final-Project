import React from 'react'
import Calendar from 'react-input-calendar'
import BottomMenu from './BottomMenu'
import Loading from './Loading'
import moment from "moment"

class MyCalendar extends React.Component {
  constructor(){
    super();
    this.state={
      selectedDate:moment(),
    }
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
        <p> The date you've selected is: {this.state.selectedDate.format('YYYY-MM-DD')} </p>
        <Calendar date={this.state.selectedDate} onChange={this.onSelect} />
        <BottomMenu />
      </div>
    )
  }
}
export default MyCalendar
