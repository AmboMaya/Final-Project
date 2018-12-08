export function addNewRecordSuccess (newRecord) {
    return {
      type: 'ADD_RECORD_SUCCESS',
      newRecord
    }
  }

  export function getRecordPending () {
    return {
      type: 'GET_RECORD_PENDING'
    }
  }

  export function getRecordError (message) {
    return {
      type: 'GET_RECORD_ERROR',
      message
    }
  }

export function addNewRecord (newRecord) {
    return dispatch => {
      dispatch(getRecordPending())
      return request
        .post('/api/v1/records')
        .send(newRecord)
        .then(res => {
          dispatch(addNewRecordSuccess(res.body))
        })
        .catch(err => dispatch(getRecordError(err.message)))
    }
  }