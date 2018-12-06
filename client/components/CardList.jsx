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
      { name: "Water", log: "happy" },
      { name: "Alcohol", log: " not happy" },
      { name: "Vice", log: "sad" }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Grid columns={1} doubling stackable>
            <Grid.Column align="center">
              <div>
                {this.state.activities.map(act => {
                  return <ActivityCard name={act.name} log={act.log} key={act.name} />;
                })}
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}
