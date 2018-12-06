import React from 'react'
import {Card, Container, List, Grid} from 'semantic-ui-react'

const activityData = {
  mood: 'happy',
  exercise: 'not happy',
  diet: '',
  sleep: '',
  meditation: '',
  water: '',
  alcohol: '',
  vice: ''
}

class CardList extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Container>
          <h1>{this.props.item.name}</h1>
          {/* <Grid columns={2} doubling stackable>
            <Grid.Column align='center'>
              <List>
                <Card activityData = {activityData} />
              </List>
            </Grid.Column>
          </Grid> */}
        </Container>
      </React.Fragment>
    )
  }
}

export default CardList
