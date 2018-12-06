import React from "react"
import { Container, Grid } from "semantic-ui-react"
import ActivityCard from "./ActivityCard"

export default class CardList extends React.Component {
  state = {
    activities: [
      { name: "mood", log: "happy" },
      { name: "exercise", log: "happy" },
      { name: "diet", log: "happy" },
      { name: "sleep", log: "happy" },
      { name: "meditation", log: "happy" },
      { name: "water", log: "happy" },
      { name: "alcohol", log: " not happy" },
      { name: "vice", log: "sad" }
    ]
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Grid columns={2} doubling stackable>
            <Grid.Column align="center">
              <div>
                {this.state.activities.map(act => {
                  return <ActivityCard name={act.name} log={act.log} />;
                })}
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </React.Fragment>
    )
  }
}
