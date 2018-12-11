import React from 'react'
import { connect } from 'react-redux'
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
    this.props.getRecords(this.props.user.id, moment(e).format('YYYY-MM-DD'))
  }

  render() {
    return (
      <React.Fragment>
        <Container className="appBody">
          <Container textAlign="center">
            <Calendar
              placeholder="Today"
              format="DD/MM/YYYY"
              date={this.props.dateString}
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
                  selectedDate={this.state.selectedDate}
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

const mapStateToProps = ({ activities, records, selectedDate, user }) => {
  const selected = records.find(r => r.date === selectedDate)
  let dateString = moment()
  if (selected) {
    datestring = selected.date
  }

  return {
    activities,
    dateString,
    user
  }
}

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
