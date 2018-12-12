import React from 'react'
import Calendar from 'react-input-calendar'
import BottomMenu from './BottomMenu'
import Loading from './Loading'
import moment from "moment"
import Photo from './Photo'
import { Container, Divider, Image } from 'semantic-ui-react'

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
        <Container textAlign="center">
          <Calendar date={this.state.selectedDate} onChange={this.onSelect} />
        </Container>
        <Divider />
        <Photo />
        <div className='description'>Capture your mood with a photo of the day </div>
        <div>
          <Divider hidden />
          <Container textAlign="center">
            <Image.Group size='small'>
              <Image src={'/images/BeerPizza.png'} />
              <Image src={'/images/Crazy.png'} />
              <Image src={'/images/tech.png'} />
              <Image src={'/images/sleep.png'} />
            </Image.Group>
          </Container>
        </div>
        <BottomMenu />
      </div>
    )
  }
}
export default MyCalendar
