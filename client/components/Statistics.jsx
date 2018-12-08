import React from "react"
import {connect} from 'react-redux'

import { Container, Grid } from "semantic-ui-react"
import Graph from "./Graph"
import {getRecords} from '../actions/graph'
import BottomMenu from './BottomMenu'

class Statistics extends React.Component {
  state = {
    userId: 1,
    date: '2018-12-14'
  }

  componentDidMount(){
   this.props.getRecords(this.state.userId, this.state.date )
  }

  render() {
    return (
      <React.Fragment>
        <Container className="appBody">
        <h1>My Activity Graph</h1>
        <Graph />
          {/* <Grid columns={3} doubling stackable>
            {this.props.activities.map(act => {
              return <ActivityCard name={act.name} log={act.log} key={act.name} />;
            })}
          </Grid> */}
        </Container>
        <BottomMenu />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const records  = [... state.records]
  return {
    records
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRecords: (userId, date) => dispatch(getRecords(userId, date)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)

