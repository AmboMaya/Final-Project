import React from "react";
import { Card, Button, Grid } from 'semantic-ui-react'
import Smiley from "./Rating/Smiley"

const ActivityCard = props => {
  
  let smilies = []
  for (let i = 1; i <= 5; i++) {
    smilies.push(<Smiley rating={i} selected={props.currentRating === i} activity={props.activity} />)
  }
  return (
    <React.Fragment>
      <Grid.Column align="center">
        <Card>
          <Card.Content>
            <Grid>
              <Grid.Column floated='right' width={5}>
                <i className="ellipsis horizontal icon right" floated="right"></i>
              </Grid.Column>
            </Grid>
            <Card.Header>{props.name}</Card.Header>
            {smilies}
          </Card.Content>
          <Card.Content extra>
            <i className="plus icon"></i>
          </Card.Content>
        </Card>
      </Grid.Column>
    </React.Fragment>
  )
}

export default ActivityCard
