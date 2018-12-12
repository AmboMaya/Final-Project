import React from "react"
import { connect } from 'react-redux'

import { Container, Card, Button, Divider } from "semantic-ui-react"
import Calendar from 'react-input-calendar'
import moment from "moment"
import Graph from "./Graph"
import BarChart from './BarChart'
import BottomMenu from './BottomMenu'
import { getChart } from '../actions/graph'
import Loading from './Loading'

class Statistics extends React.Component {
  state = {
    date: moment().format('YYYY-MM-DD'),
    selectedDate: moment(),
    period: 'week'
  }

  onSelect = (e) => {
    this.props.getChart(this.props.user.id, moment(e, 'YYYY-MM-DD').format('YYYY-MM-DD'), this.state.period)
    this.setState({
      selectedDate: moment(e),
      date: moment(e).format('YYYY-MM-DD')
    })
  }

  onClickPeriod = (e) => {
    this.props.getChart(this.props.user.id, this.state.date, e.target.name)
  }

  componentDidMount() {
    this.props.getChart(this.props.user.id, this.state.date, this.state.period)
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
              <Calendar 
              placeholder='Today'
              format='YYYY-MM-DD'
              computableFormat='YYYY-MM-DD'
              date={this.state.selectedDate} 
              onChange={this.onSelect} />
              <div className='weeklyButton'>
                <Button onClick={this.onClickPeriod} name='week' size='mini'>Week</Button>
                <Button onClick={this.onClickPeriod} name='month'size='mini'>Month</Button>
              </div>
            </Card.Content>
          </Card>
          <Graph chartData={this.props.records.graphData}/>
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
    getChart: (userId, date, period) => dispatch(getChart(userId, date, period)),
    // getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)

