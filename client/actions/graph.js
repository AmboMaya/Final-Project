import request from 'superagent'

import { getToken } from '../utils/tokens'

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
  console.debug(endDate)
  return dispatch => {
    dispatch(getChartPending())

    request
      .get(`/api/v1/records/stats/${period}/${userId}/${endDate}`)
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => dispatch(getChartSuccess(res.body.chartData)))
      .catch(err => dispatch(getChartError(err.message)))
  }
}
