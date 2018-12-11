import React from "react"
import { connect } from 'react-redux'

import { Container, Card, Button } from "semantic-ui-react"
import Calendar from 'react-input-calendar'
import moment from "moment"
import Graph from "./Graph"
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
    this.props.getRecords(this.props.user.id, this.state.date)
  }

  clickWeekly = () => {
    this.setState({
      period: 'week'
    })
  this.props.getRecords(this.props.user.id, this.state.date)

  }

  clickMonthly = () => {
    this.setState({
      period: 'month'
    })
  this.props.getRecords(this.props.user.id, this.state.date)
  }

  componentDidMount() {
    this.props.getRecords(this.props.user.id, this.state.date)
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
        <Container className="appBody">
          <Card fluid>
            <Card.Content align="center">
              <Card.Header size='small'>My Activity Statistics</Card.Header>
              <Calendar date={this.state.selectedDate} onChange={this.onSelect} />
              <Button onClick={this.clickWeekly} size='mini'>Week</Button>
              <Button onClick={this.clickMonthly} size='mini'>Month</Button>
            </Card.Content>
          </Card>
          <Graph chartData={this.props.records} />
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
    getRecords: (userId, date) => dispatch(getRecords(userId, date)),
    // getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)

