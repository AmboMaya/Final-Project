import React from 'react'
import { Card, Grid, Modal } from 'semantic-ui-react'
import ActivityLog from './ActivityLog'
import { connect } from 'react-redux'
import { addNewRecord } from '../actions/records'

class ActivityCard extends React.Component {
  clickHandler = e => {
    const userId = this.props.user_id
    this.props.dispatch(
      addNewRecord(userId, {
        activityId: e.target.id,
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
                  <Modal
                    trigger={
                      <a>
                        <i className="question circle outline icon right" />
                      </a>
                    }
                    closeIcon
                  >
                    <Modal.Header>{this.props.name}</Modal.Header>
                    <Modal.Content>
                      <Modal.Description>
                        <p>{this.props.info}</p>
                        {this.props.link ? (
                          <a href={this.props.link}>Source</a>
                        ) : null}
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
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

const mapStateToProps = state => {
  const records = [...state.records]
  return {
    records
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewRecord: newRecord => dispatch(addNewRecord(newRecord))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityCard)
