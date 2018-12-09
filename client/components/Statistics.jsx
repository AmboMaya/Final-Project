import React from "react"
import {connect} from 'react-redux'

import { Container, Grid } from "semantic-ui-react"
import Graph from "./Graph"
import {getRecords} from '../actions/graph'
import BottomMenu from './BottomMenu'
import moment from "moment"

class Statistics extends React.Component {
  state = {
    // mock data to send to the server
    userId: 1,
    date: moment().format('YYYY-MM-DD')
  }

  componentDidMount(){
   this.props.getRecords(this.state.userId, this.state.date)
  console.log(this.props.records)
  console.log(moment().format('YYYY-MM-DD'))
   // this.props.records  => is the data
  }

  render() {
    return (
      <React.Fragment>
        <Container className="appBody">
          <h1>My Activity Statistics</h1>
          <h2>Weekly Graph</h2>
          <Graph chartData={this.props.records}/>
        </Container>
        <BottomMenu />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const records  = state.graph
  return {records}
  
}

const mapDispatchToProps = dispatch => {
  return {
    getRecords: (userId, date) => dispatch(getRecords(userId, date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)

