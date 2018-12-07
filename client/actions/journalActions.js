import request from 'superagent'

export function getActivitiesPending () {
  return {
    type: 'GET_ACTIVITIES_PENDING'
  }
}

export function getActivitiesSuccess (activities) {
  return {
    type: 'GET_ACTIVITIES_SUCCESS',
    activities
  }
}

export function getActivitiesError (message) {
  return {
    type: 'GET_FISH_ERROR',
    message
  }
}

export function getActivities () {
  return dispatch => {
    dispatch(getActivitiesPending())

    request
      .get('/api/v1/activities')
      .then(res => dispatch(getActivitiesSuccess(res.body.activities)))
      .catch(err => dispatch(getActivitiesError(err.message)))
  }
}
