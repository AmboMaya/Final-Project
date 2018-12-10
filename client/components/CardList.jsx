import React from 'react'
import { connect } from 'react-redux'

import { Container, Grid } from 'semantic-ui-react'
import ActivityCard from './ActivityCard'
import { getActivities } from '../actions/journalActions'

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

  render() {
    return (
      <React.Fragment>
        <Container className='appBody'>
          <Grid columns={3} doubling stackable>
            {this.props.activities.map((act, key) => {
              return (
                <ActivityCard
                  key={key}
                  name={act.name}
                  act_id={act.id}
                  info={act.info} 
                  link={act.link}
                  user_id={this.props.user.id}
                  smiles={this.state.smiles}
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
    activities,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getActivities: () => dispatch(getActivities())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)
