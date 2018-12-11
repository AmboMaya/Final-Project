import React from "react"
import {connect} from 'react-redux'

import { Container, Grid, Card } from "semantic-ui-react"
import moment from "moment"

import Graph from "./Graph"
import BottomMenu from './BottomMenu'
import {getRecords} from '../actions/graph'
import Loading from './Loading'
// import {getUser} from '../actions/user'



class Statistics extends React.Component {
  state = {
    date: moment().format('YYYY-MM-DD')
  }

  componentDidMount(){
   this.props.getRecords(this.props.user.id, this.state.date, 'month')
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
          </Card.Content>
          </Card>
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
    getRecords: (userId, date, period) => dispatch(getRecords(userId, date, period)),
    // getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)

