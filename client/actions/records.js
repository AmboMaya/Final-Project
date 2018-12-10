import request from 'superagent'

export function addRecordSuccess(record) {
  return {
    type: 'ADD_RECORD_SUCCESS',
    record
  }
}

export function getRecordPending() {
  return {
    type: 'GET_RECORD_PENDING'
  }
}

export function getRecordError(message) {
  return {
    type: 'GET_RECORD_ERROR',
    message
  }
}

export function addActivity(userId, record) {
  return dispatch => {
    dispatch(getRecordPending())

    return request
      .post('/api/v1/records')
      .send({ userId, records: [ record ]})
      .then(res => {
        dispatch(addRecordSuccess(res.body.records))
      })
      .catch(err => dispatch(getRecordError(err.message)))
  }
}

export function addLog(userId, record) {
  return dispatch => {
    dispatch(getRecordPending())
    return request
      .post('/api/v1/records') // we may need a new api?
      .send({ userId, records: [ record ]})
      .then(res => {
        dispatch(addRecordSuccess(res.body.records))
      })
      .catch(err => dispatch(getRecordError(err.message)))
  }
}
