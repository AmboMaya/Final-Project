import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import ActivityLog from './ActivityLog'

export default class ActivityCard extends React.Component {
  state = {
    activity_id: '',
    rating: '',
    log: ''
  }

  changeHandler = e => {
    e.preventDefault()
    this.setState({
      activity_id: e.target.id,
      rating: e.target.value,
      log: e.target.name
    })
    this.props.addRecord(this.props.user_id, this.state)
    console.log('SUBMITTED:', this.state)
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
                {this.props.smiles.map((smile, key) => {
                  return (
                    <a key={key}>
                      <i
                        className={
                          'far ' + `${smile.mood}` + ' fa-3x facesInCss'
                        }
                        value={smile.value}
                        id={this.props.act_id}
                        name={this.props.name}
                        onClick={this.changeHandler}
                      />
                    </a>
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
