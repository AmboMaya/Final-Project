import React from "react"
import {connect} from 'react-redux'

import { Container, Grid } from "semantic-ui-react"
import ActivityCard from "./ActivityCard"
import {getActivities} from '../actions/journalActions'


class CardList extends React.Component {
  state = {
    activities: [
      { name: "bla", log: "happy" },
      { name: "bla2", log: "happy" },
      { name: "blaba", log: "happy" },
      { name: "biepbiep", log: "happy" },
      { name: "boopbiop", log: "" },
      { name: "no", log: "happy" },
      { name: "yes", log: " not happy" },
      { name: "drugs", log: "" }
    ] 
  }

  componentDidMount(){
    this.props.getActivities()
  }

  render() {
    return (
      <React.Fragment>
        <Container className="appBody">
          <Grid columns={3} doubling stackable>
            {this.props.activities.map(act => {
              return <ActivityCard name={act.name} log={act.log} key={act.name} />;
            })}
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const activities  = [... state.activities]
  return {
    activities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getActivities: () => dispatch(getActivities()),
    // orderAZ: (x) => dispatch(orderAZ(x)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)

