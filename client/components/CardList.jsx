import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Calendar from 'react-input-calendar'
import moment from 'moment'

import { Container, Grid, Divider } from 'semantic-ui-react'
import ActivityCard from './ActivityCard'
import { getActivities } from '../actions/journalActions'
import { getRecords } from '../actions/records'

import BottomMenu from './BottomMenu'

class CardList extends React.Component {
  state = {
    smiles: [
      { mood: 'fa-angry', value: '1', color: 'red' },
      { mood: 'fa-frown', value: '2', color: 'orange' },
      { mood: 'fa-meh', value: '3', color: 'blue' },
      { mood: 'fa-smile', value: '4', color: 'yellow' },
      { mood: 'fa-laugh', value: '5', color: 'green' }
    ]
  }

  componentDidMount() {
    this.props.getActivities()
  }

  onSelect = e => {
    this.props.getRecords(this.props.user.id, moment(e, 'YYYY-MM-DD').format('YYYY-MM-DD'))
  }

  render() {
    if (!this.props.auth.loggedIn) {
      return <Redirect to='/login' />
    }

    return (
      <React.Fragment>
        <Container className="appBody">
          <Container textAlign="center">
            <Calendar
              placeholder='Today'
              format='YYYY-MM-DD'
              computableFormat='YYYY-MM-DD'
              date={this.props.selectedDate}
              onChange={this.onSelect}
            />
          </Container>
          <Divider />
          <Grid columns={3} doubling stackable>
            {this.props.activities.map((act, key) => {
              return (
                <ActivityCard
                  key={key}
                  name={act.name}
                  act_id={act.id}
                  info={act.info}
                  link={act.link}
                  selectedDate={this.props.selectedDate}
                  user_id={this.props.user.id}
                  smiles={this.state.smiles}
                />
              )
            })}
          </Grid>
        </Container>
        <BottomMenu />
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({
  activities,
  auth,
  selectedDate,
  user
}) => ({
  activities,
  auth,
  selectedDate,
  user
})

const mapDispatchToProps = dispatch => {
  return {
    getActivities: () => dispatch(getActivities()),
    getRecords: (userId, date) => dispatch(getRecords(userId, date))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)
