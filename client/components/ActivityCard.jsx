import React from "react";
import { Card, Button, Grid } from 'semantic-ui-react'
import Smiley from "./Rating/Smiley";

const ActivityCard = props => {
  let smilies = []
  for(let i=1; i <= 5; i++) {
    smilies.push(<Smiley rating={i} selected={props.currentRating === i} activity={props.activity}/>)
  } 
  return (
    <React.Fragment>
      <Card>
        <Card.Content>
          <Grid>
            <Grid.Column floated='right' width={5}>
              <i className="ellipsis horizontal icon right" floated="right"></i>
            </Grid.Column>
          </Grid>
          <Card.Header>{props.name}</Card.Header>
            {smilies}
            {/* <Smiley rating={1} selected={props.currentRating === 1} activity={}/>
            <Smiley rating={2} />         
            <Smiley rating={3} />         
            <Smiley rating={4} />         
            <Smiley rating={5} />          */}
            {/* <Card.Description>
              {props.log}
            </Card.Description> */}
        </Card.Content>
        <Card.Content>
          <i className="plus icon"></i>
        </Card.Content>
      </Card>
    </React.Fragment>
  )
}

export default ActivityCard
