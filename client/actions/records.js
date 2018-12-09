import request from 'superagent'

export function addNewRecordSuccess(record) {
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

export function addNewRecord(id, record) {
  return dispatch => {
    dispatch(getRecordPending())
    return request
      .post('/api/v1/records')
      .send({ userId: id, records: [ record ]})
      .then(res => {
        dispatch(addNewRecordSuccess(res.body))
      })
      .catch(err => dispatch(getRecordError(err.message)))
  }
}
