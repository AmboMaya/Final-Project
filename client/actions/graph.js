import request from 'superagent'

export function getRecordsPending () {
  return {
    type: 'GET_RECORDS_PENDING'
  }
}

export function getRecordsSuccess (records) {
  return {
    type: 'GET_RECORDS_SUCCESS',
    records
  }
}

export function getRecordsError (message) {
  return {
    type: 'GET_RECORDS_ERROR',
    message
  }
}

export function getRecords (userId, endDate, period) {
  return dispatch => {
    dispatch(getRecordsPending())

    request
      .get(`/api/v1/records/graph/${period}/${userId}/${endDate}`)
      .then(res => dispatch(getRecordsSuccess(res.body.chartData)))
      .catch(err => dispatch(getRecordsError(err.message)))
  }
}
