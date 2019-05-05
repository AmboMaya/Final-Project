import request from 'superagent'

import { getToken } from '../utils/tokens'
import { getUserID } from '../utils/user'


export function getUserPending () {
  return {
    type: 'GET_USER_PENDING'
  }
}

export function getUserSuccess (user) {
  return {
    type: 'GET_USER_SUCCESS',
    user
  }
}

export function getUserError (message) {
  return {
    type: 'GET_USER_ERROR',
    message
  }
}

export function getUser () {
  return dispatch => {
    dispatch(getUserPending())

    request
      .get('/api/v1/users')
      .set('Authorization', `Bearer ${getToken()}`)
      .set('user', getUserID())
      .then(res => dispatch(getUserSuccess(res.body.user)))
      .catch(err => dispatch(getUserError(err.message)))
  }
}
