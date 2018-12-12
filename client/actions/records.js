import request from 'superagent'
import moment from 'moment'

import { getToken } from '../utils/tokens'

export function getRecordsSuccess(records, date) {
  return {
    type: 'GET_RECORDS_SUCCESS',
    date,
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
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => dispatch(getRecordsSuccess(res.body.records, date)))
      .catch(err => dispatch(getRecordError(err.message)))
  }
}

export function addActivity(userId, cardData, date) {
  let dateRev = moment(date).format('YYYY-MM-DD')
  return dispatch => {
    dispatch(getRecordPending())
    return request
      .post('/api/v1/records')
<<<<<<< HEAD
      .send({ userId, cardData, date: dateRev })
=======
      .set('Authorization', `Bearer ${getToken()}`)
      .send({ userId, cardData, date })
>>>>>>> 4025fa9b3429dadd06aff7fcc1eb7cbe2597b4c0
      .then(res => dispatch(addRecordSuccess(res.body.records)))
      .catch(err => dispatch(getRecordError(err.message)))
  }
}

export function addLog(userId, cardData, date) {
<<<<<<< HEAD
  let dateRev = moment(date).format('YYYY-MM-DD')
=======
>>>>>>> 4025fa9b3429dadd06aff7fcc1eb7cbe2597b4c0
  return dispatch => {
    dispatch(getRecordPending())
    return request
      .post('/api/v1/records') // we may need a new api?
<<<<<<< HEAD
      .send({ userId, cardData, date: dateRev })
=======
      .set('Authorization', `Bearer ${getToken()}`)
      .send({ userId, cardData, date })
>>>>>>> 4025fa9b3429dadd06aff7fcc1eb7cbe2597b4c0
      .then(res => {
        dispatch(addRecordSuccess(res.body.records))
      })
      .catch(err => dispatch(getRecordError(err.message)))
  }
}
