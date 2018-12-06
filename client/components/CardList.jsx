import React from 'react'
import {Card, Container, List, Grid} from 'semantic-ui-react'
import ActivityCard from './ActivityCard'

const activityData = [
  {name: 'mood', log: 'happy'},
  {name: 'exercise', log: 'happy'},
  {name: 'diet', log: 'happy'},
  {name: 'sleep', log: 'happy'},
  {name: 'meditation', log: 'happy'},
  {name: 'water', log: 'happy'},
  {name: 'alcohol', log: ' not happy'},
  {name: 'vice', log: 'sad'}
]

function CardList (props) {
  return (
    <React.Fragment>
      <Container>
        <Grid columns={2} doubling stackable>
          <Grid.Column align='center'>
            <List>
              <Card>
                <h1>kia oraaaa</h1>
                {/* {activityData.map(item => {
                  <p>{item.name}</p>
                  // <ActivityCard activity={item} />
                })} */}
              </Card>
            </List>
          </Grid.Column>
        </Grid>
      </Container>
    </React.Fragment>
  )
}
export default CardList
