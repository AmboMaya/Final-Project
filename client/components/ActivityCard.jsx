import React from "react"
import { Card, Button, Grid} from 'semantic-ui-react'
import Smiley from "./Rating/Smiley"

const ActivityCard = props => {
  
  let smilies = []
  for (let i = 1; i <= 5; i++) {
    smilies.push(<Smiley rating={i} key={i} selected={props.currentRating === i} activity={props.activity} />)
  }

  // changeHandler = (e) => {
  //   e.target:
  // }
  return (
    <React.Fragment>
      <Grid.Row align="center" width={5}>
        <Card className="activityCard">
          <Card.Content>
              <i className="ellipsis horizontal icon right" floated="right"></i>
            <Card.Header>{props.name}</Card.Header>
              {smilies}
          </Card.Content>
          <Card.Content extra>
            <Button><i className="plus icon" floated="center"></i></Button>
          </Card.Content>
        </Card>
      </Grid.Row>
    </React.Fragment>
  )
}

export default ActivityCard
