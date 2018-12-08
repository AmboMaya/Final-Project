import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import ActivityLog from './ActivityLog'

export default class ActivityCard extends React.Component {
  state = {
    activity_id: '',
    rating: '',
    log: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.addRecord(this.props.id, this.state)
    // Final validation before submitting to server
    console.log('SUBMITTED:', this.state)
    // Clear the state to clear the form
    this.setState({
      activity_id: '',
      rating: '',
      log: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        <Grid.Column align="center">
          <Card>
            <Card.Content align="center">
              <Grid>
                <Grid.Column floated="right" width={5}>
                  <i
                    className="ellipsis horizontal icon right"
                    floated="right"
                  />
                </Grid.Column>
              </Grid>

              <Card.Header>{this.props.name}</Card.Header>
              <Grid.Column align="center">
                {this.props.smiles.map(smile => {
                  return (
                    <i
                      className={'far ' + `${smile.mood}` + ' fa-3x facesInCss'}
                      key={smile.value}
                      type="submit"
                      onSubmit={this.submitHandler}
                    />
                  )
                })}
              </Grid.Column>
            </Card.Content>
            <Card.Content extra>
              <ActivityLog />
            </Card.Content>
          </Card>
        </Grid.Column>
      </React.Fragment>
    )
  }
}
