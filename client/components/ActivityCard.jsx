import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import ActivityLog from './ActivityLog'
import { connect } from 'react-redux'
import { addNewRecord } from '../actions/records'

class ActivityCard extends React.Component {
  clickHandler = e => {
    const userId = this.props.user_id
    this.props.dispatch(
      addNewRecord(userId, {
        activity_id: e.target.id,
        rating: e.target.getAttribute('value'),
        log: e.target.getAttribute('name')
      })
    )
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
                        onClick={this.clickHandler}
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

const mapDispatchToProps = dispatch => {
  return {
    addNewRecord: newRecord => dispatch(addNewRecord(newRecord))
  }
}

export default connect(mapDispatchToProps)(ActivityCard)
