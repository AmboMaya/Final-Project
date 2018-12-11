export default function graphReducer (state = {}, action) {
  switch (action.type) {
    case 'GET_CHART_SUCCESS':
      return action.chart

    default:
      return state
  }
}
