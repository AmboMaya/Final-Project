import request from 'superagent'

export function getDataPending () {
  return {
    type: 'GET_DATA_PENDING'
  }
}

export function getDataSuccess (data) {
  return {
    type: 'GET_DATA_SUCCESS',
    data
  }
}

export function getDataError (message) {
  return {
    type: 'GET_DATA_ERROR',
    message
  }
}

export function showWeek (sortOrder) {
  return {
    type: 'SHOW_WEEK',
    sortOrder
  }
}

export function showMonth (sortOrder) {
  return {
    type: 'SHOW_MONTH',
    sortOrder
  }
}

export function getData () {
  return dispatch => {
    dispatch(getDataPending())

    request
      .get('/api/v1/data')
      .then(res => dispatch(getDataSuccess(res.body.data)))
      .catch(err => dispatch(getDataError(err.message)))
  }
}
