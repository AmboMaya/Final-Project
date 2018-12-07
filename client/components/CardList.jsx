import React from "react"
import { Container, Grid } from "semantic-ui-react"
import ActivityCard from "./ActivityCard"

export default class CardList extends React.Component {
  state = {
    activities: [
      { name: "Mood", log: "happy" },
      { name: "Exercise", log: "happy" },
      { name: "Diet", log: "happy" },
      { name: "Sleep", log: "happy" },
      { name: "Meditation", log: "happy" },
      { name: "water", log: "happy" },
      { name: "alcohol", log: " not happy" },
      { name: "vice", log: "sad" }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Container className="appBody">
          <Grid columns={3} doubling stackable>
            {this.state.activities.map(act => {
              return <ActivityCard name={act.name} log={act.log} key={act.name} />;
            })}
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}
