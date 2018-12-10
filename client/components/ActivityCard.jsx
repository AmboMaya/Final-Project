import React from 'react'
import { Card, Grid, Modal } from 'semantic-ui-react'
import ActivityLog from './ActivityLog'
import { connect } from 'react-redux'
import { addActivity } from '../actions/records'

class ActivityCard extends React.Component {
  clickHandler = e => {
    const userId = this.props.user_id
    const date = this.props.selectedDate
    this.props.addActivity(userId, date, {
      activityId: e.target.id,
      rating: e.target.getAttribute('value')
    })
  }

  renderSmiles = () => {
    const { card, smiles } = this.props

    return smiles.map((smile, key) => (
      <a key={key}>
        <i
          className={'far ' + `${smile.mood}` + ' fa-3x facesInCss'}
          value={smile.value}
          id={this.props.act_id}
          name={this.props.name}
          onClick={this.clickHandler}
          style={
            card && card.rating === Number(smile.value)
              ? { color: smile.color }
              : {}
          }
        />
      </a>
    ))
  }

  renderLogs = () => {
    const { card, act_id, name } = this.props
    return card && card.log ? (
      <ActivityLog icon="edit icon" text={card.log} id={act_id} name={name} />
    ) : (
      <ActivityLog icon="plus icon" text="Add Log" id={act_id} name={name} date={this.props.selectedDate} />
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
              <Grid.Column align="center">{this.renderSmiles()}</Grid.Column>
            </Card.Content>
            <Card.Content extra>{this.renderLogs()}</Card.Content>
          </Card>
        </Grid.Column>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ records }, ownProps) => {
  let card = undefined
  if (records.length > 0) {
    card = records[0].cardData.find(c => {
      return Number(c.activityId) === ownProps.act_id
    })
  }

  return {
    card
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
