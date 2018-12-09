import React from 'react'
import { connect } from 'react-redux'

import { Container, Grid } from 'semantic-ui-react'
import ActivityCard from './ActivityCard'
import { getActivities } from '../actions/journalActions'

import BottomMenu from './BottomMenu'

class CardList extends React.Component {
  state = {
    smiles: [
      { mood: 'fa-angry', value: 1 },
      { mood: 'fa-frown', value: 2 },
      { mood: 'fa-meh', value: 3 },
      { mood: 'fa-smile', value: 4 },
      { mood: 'fa-laugh', value: 5 }
    ],
    records: [
      {
        user_id: '1',
        entries: []
      }
    ]
  }

  addRecord = (id, record) => {
    const newRecord = this.state.records.map(rec => {
      if (rec.user_id !== id) return rec
      return {
        ...rec,
        records: [...rec.entries, record]
      }
    })
    this.setState({ records: newRecord })
  }


  componentDidMount() {
    this.props.getActivities()
  }

  render() {
    return (
      <React.Fragment>
        <Container className="appBody">
          <Grid columns={3} doubling stackable>
            {this.props.activities.map((act, key) => {
              return (
                <ActivityCard
                  key={key}
                  name={act.name}
                  act_id={act.id}
                  user_id={this.state.records[0].user_id}
                  smiles={this.state.smiles}
                  addRecord={this.addRecord}
                />
              )
            })}
          </Grid>
        </Container>
        <BottomMenu submit={this.handleSubmit} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  const activities = [...state.activities]
  return {
    activities
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getActivities: () => dispatch(getActivities()),
    addNewRecord: newRecord => dispatch(addNewRecord(newRecord))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)
