import request from 'superagent'

export function getChartPending () {
  return {
    type: 'GET_CHART_PENDING'
  }
}

export function getChartSuccess (chart) {
  return {
    type: 'GET_CHART_SUCCESS',
    chart
  }
}

export function getChartError (message) {
  return {
    type: 'GET_CHART_ERROR',
    message
  }
}

export function getChart (userId, endDate, period) {
  return dispatch => {
    dispatch(getChartPending())

    request
      .get(`/api/v1/records/stats/${period}/${userId}/${endDate}`)
      .then(res => dispatch(getChartSuccess(res.body.chartData)))
      .catch(err => dispatch(getChartError(err.message)))
  }
}
