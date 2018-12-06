import React from "react";
import { Card, Button } from 'semantic-ui-react'

const ActivityCard = props => {
  return (
    <React.Fragment>
      <Card>
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>Friends of Elliot</Card.Meta>
          <Card.Description>
            {props.log}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    </React.Fragment>
  )
}

export default ActivityCard
