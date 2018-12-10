import React from 'react'
import { Card, Grid, Modal } from 'semantic-ui-react'
import ActivityLog from './ActivityLog'
import { connect } from 'react-redux'
import { addActivity } from '../actions/records'

class ActivityCard extends React.Component {
  clickHandler = e => {
    const userId = this.props.user_id
    this.props.addActivity(userId, {
        activityId: e.target.id,
        rating: e.target.getAttribute('value'),
        log: e.target.getAttribute('name')
    })
  }

  renderSmiles = () => {
    // this.props.activity && Number(this.props.activity.rating) === smile.value && { color: 'green' }
    const { activity, smiles } = this.props

    return smiles.map((smile, key) => 
      <a key={key}>
        <i
          className={
            'far ' + `${smile.mood}` + ' fa-3x facesInCss'
          }
          value={smile.value}
          id={this.props.act_id}
          name={this.props.name}
          onClick={this.clickHandler}
          style={activity && activity.rating === smile.value ? { color: smile.color } : {}}
        />
      </a>
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
                {this.renderSmiles()}
              </Grid.Column>
            </Card.Content>
            <Card.Content extra>
              <ActivityLog id={this.props.act_id}/>
            </Card.Content>
          </Card>
        </Grid.Column>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ records }, ownProps) => {
  let activity = undefined
  if (records) {
    activity = records[0].activities.find(a => Number(a.activityId) === ownProps.act_id)
  }

  return {
    activity
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addActivity: (userId, record) => dispatch(addActivity(userId, record))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityCard)
