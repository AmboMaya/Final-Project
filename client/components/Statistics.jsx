import React from "react"
import {connect} from 'react-redux'

import { Container, Grid } from "semantic-ui-react"
import moment from "moment"

import Graph from "./Graph"
import BottomMenu from './BottomMenu'
import {getRecords} from '../actions/graph'
// import {getUser} from '../actions/user'



class Statistics extends React.Component {
  state = {
    date: moment().format('YYYY-MM-DD')
  }

  componentDidMount(){
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
    return (
      <React.Fragment>
        <Container className="appBody">
          <h2>My Activity Statistics</h2>
          <h3>Weekly Graph</h3>
          <Graph chartData={this.props.records}/>
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

