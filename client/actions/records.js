import request from 'superagent'

export function addNewRecordSuccess(records) {
  return {
    type: 'ADD_RECORD_SUCCESS',
    records
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

export function addNewRecord(id, newRecord) {
  return dispatch => {
    dispatch(getRecordPending())
    return request
      .post('/api/v1/records')
      .send({ userId: id, records: [ newRecord ]})
      .then(res => {
        dispatch(addNewRecordSuccess(res.body))
      })
      .catch(err => dispatch(getRecordError(err.message)))
  }
}
