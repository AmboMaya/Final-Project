import request from 'superagent'

import { getToken } from '../utils/tokens'

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
    type: 'GET_ACTIVITIES_ERROR',
    message
  }
}

export function getActivities () {
  return dispatch => {
    dispatch(getActivitiesPending())

    request
      .get('/api/v1/activities')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => dispatch(getActivitiesSuccess(res.body.activity)))
      .catch(err => dispatch(getActivitiesError(err.message)))
  }
}
