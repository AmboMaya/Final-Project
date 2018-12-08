import React from 'react'
import {Card, Grid} from 'semantic-ui-react'
import Smiley from './Rating/Smiley'
import ActivityLog from './ActivityLog'

const ActivityCard = props => {
  
  let smilies = []
  for (let i = 1; i <= 5; i++) {
    smilies.push(<Smiley key={i} rating={i} selected={props.currentRating === i} activity={props.activity} />)
  }

  return (
    <React.Fragment>
      <Grid.Column align='center'>
        <Card>
          <Card.Content >
            <Grid>
              <Grid.Column floated='right' width={5} style={{paddingLeft: 35}}>
                <i className='ellipsis horizontal icon right'></i>
              </Grid.Column>
            </Grid>
            <Card.Header >{props.name}</Card.Header>
              {smilies}
          </Card.Content>
          <Card.Content extra>
            <ActivityLog />
          </Card.Content>
        </Card>
      </Grid.Column>
    </React.Fragment>
  )
}

export default ActivityCard
