import React from 'react'
import { connect } from 'react-redux'

import { Container, Grid } from 'semantic-ui-react'
import ActivityCard from './ActivityCard'
import { getActivities } from '../actions/journalActions'

class CardList extends React.Component {
  state = {
    records: [
      {
        user_id: 1,
        entries: [
          {
            activity_id: 1,
            rating: '',
            log: ''
          },
          {
            activity_id: 2,
            rating: '',
            log: ''
          }
        ]
      }
    ],
  }

   addEntry = (id, entry) => {
    const newEntry = this.state.user.map(ent => {
      if (ent.id !== id) return ent
      return {
        ...ent,
        entries: [...act.entries, entry]
      }
    })
    this.setState({ user: newEntry })
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
