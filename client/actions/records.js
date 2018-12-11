import request from 'superagent'
import moment from 'moment'

export function getRecordsSuccess(records) {
  return {
    type: 'GET_RECORDS_SUCCESS',
    records
  }
}

export function addRecordSuccess(records) {
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

export function getRecords(userId, date) {
  return dispatch => {
    dispatch(getRecordPending())
    request
      .get(`/api/v1/records/cards/${userId}/${date}`)
      .then(res => dispatch(getRecordsSuccess(res.body.records)))
      .catch(err => dispatch(getRecordsError(err.message)))
  }
}

export function addActivity(userId, cardData) {
  return dispatch => {
    dispatch(getRecordPending())
    return request
      .post('/api/v1/records')
      .send({ userId, date: moment().format('YYYY-MM-DD'), cardData })
      .then(res => dispatch(addRecordSuccess(res.body.records)))
      .catch(err => dispatch(getRecordError(err.message)))
  }
}

export function addLog(userId, cardData) {
  return dispatch => {
    dispatch(getRecordPending())
    return request
      .post('/api/v1/records') // we may need a new api?
      .send({ userId, date: moment().format('YYYY-MM-DD'), cardData })
      .then(res => {
        dispatch(addRecordSuccess(res.body.records))
      })
      .catch(err => dispatch(getRecordError(err.message)))
  }
}
