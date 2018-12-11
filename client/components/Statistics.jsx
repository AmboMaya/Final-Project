import React from "react"
import { connect } from 'react-redux'

import { Container, Card, Button, Divider } from "semantic-ui-react"
import Calendar from 'react-input-calendar'
import moment from "moment"
import Graph from "./Graph"
import BarChart from './BarChart'
import BottomMenu from './BottomMenu'
import { getRecords } from '../actions/graph'
import Loading from './Loading'

// import {getUser} from '../actions/user'



class Statistics extends React.Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
    selectedDate: moment(),
    period: 'week'
  }

  onSelect = (e) => {
    this.setState({
      selectedDate: moment(e),
      date: moment(e).format('YYYY-MM-DD')
    })
    console.log(this.state)
    this.props.getRecords(this.props.user.id, this.state.date, this.state.period)
  }

  clickWeekly = () => {
    this.setState({
      period: 'week'
    })
  this.props.getRecords(this.props.user.id, this.state.date, this.state.period)

  }

  clickMonthly = () => {
    this.setState({
      period: 'month'
    })
    console.log(this.state.period)
  this.props.getRecords(this.props.user.id, this.state.date, this.state.period)
  }

  componentDidMount() {
    this.props.getRecords(this.props.user.id, this.state.date, this.state.period)
    //  this.getUserAction()
  }

  // getUserAction = () => {
  //   this.props.getUser()
  //     this.setState({
  //       user : this.props.user
  //     })
  // }

  render() {
    if (this.props.pending) {
      return <Loading />
    }

    return (
      <React.Fragment>
        <Container className='appBody'>
          <Card fluid>
            <Card.Content align='center'>
              <Card.Header className='space' size='small'>My Activity Statistics</Card.Header>
              <Divider />
              <Calendar date={this.state.selectedDate} onChange={this.onSelect} />
              <div className='weeklyButton'>
                <Button onClick={this.clickWeekly} size='mini'>Week</Button>
                <Button onClick={this.clickMonthly} size='mini'>Month</Button>
              </div>
            </Card.Content>
          </Card>
          {/* <Graph chartData={this.props.records.graphData}/> */}
          <BarChart chartData={this.props.records.barData}/>
          
        </Container>
        <BottomMenu />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    records: state.graph,
    user: state.user
  }

}

const mapDispatchToProps = dispatch => {
  return {
    getRecords: (userId, date, period) => dispatch(getRecords(userId, date, period)),
    // getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)

