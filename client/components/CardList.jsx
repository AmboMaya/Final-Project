import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import ActivityCard from './ActivityCard'

export default class CardList extends React.Component {

  state = {
    user: [
      {
        id: 1,
        username: 'Bella',
        entries: [
          {
            date: '',
            activity_id: 1,
            rating: '',
            log: ''
          },
          {
            date: '',
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

  render() {
    return (
      <React.Fragment>
        <Container className='appBody'>
          <Grid columns={3} doubling stackable>
            {this.state.user.map(user => {
              return (
                <ActivityCard addEntry={this.addEntry} name={user.username} key={user.id} />
              )
            })}
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}
