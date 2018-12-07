import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import ActivityCard from './ActivityCard'
import {connect} from 'react-redux'

class CardList extends React.Component {

  state = {
    user: [
      {
        user_id: 1,
        records: [
          {
            activity_id: 1,
            rating: '1',
            log: 'The pizza was just too good...'
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

   addEntry = (id, record) => {
    const newEntry = this.state.user.map(ent => {
      if (ent.id !== id) return ent
      return {
        ...ent,
        records: [...act.records, record]
      }
    })
    this.setState({ user: newEntry })
  }

  render() {
    return (
      <React.Fragment>
        <Container className='appBody'>
          <Grid columns={3} doubling stackable>
            {this.state.user.map(user => {
              return (
                <ActivityCard addEntry={this.addEntry} name={user.username} key={user.user_id} />
              )
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
    getActivities: () => dispatch(getActivities())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)

